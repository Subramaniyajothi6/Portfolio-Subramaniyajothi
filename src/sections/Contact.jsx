



import { useState } from "react";
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";
import axiosClient from "../api";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    location: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };


const handleSubmit = async (e) => {
  e.preventDefault();
  setIsLoading(true);

  try {
    console.log("Form submitted:", formData);
    
    // Debug: Check if all fields have values
    console.log("Field check:", {
      name: formData.name ? "✓" : "✗",
      email: formData.email ? "✓" : "✗", 
      projectType: formData.projectType ? "✓" : "✗",
      location: formData.location ? "✓" : "✗",
      message: formData.message ? "✓" : "✗"
    });

    // Try different approaches to send data
    
    // Approach 1: Send all fields separately (try this first)
    const contactData = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      projectType: formData.projectType.trim(),
      location: formData.location.trim(),
      message: formData.message.trim()
    };

    console.log("Sending data (Approach 1):", contactData);
    
    // Try the API call
    let response;
    try {
      response = await axiosClient.post('/contact', contactData);
    } catch (firstError) {
      console.log("Approach 1 failed, trying Approach 2");
      
      // Approach 2: Combine extra fields into message (like before)
      const contactDataV2 = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        message: `Project Type: ${formData.projectType}
Location: ${formData.location}

Message:
${formData.message}`
      };
      
      console.log("Sending data (Approach 2):", contactDataV2);
      
      try {
        response = await axiosClient.post('/contact', contactDataV2);
      } catch (secondError) {
        console.log("Approach 2 failed, trying Approach 3");
        
        // Approach 3: Try different field names your backend might expect
        const contactDataV3 = {
          fullName: formData.name.trim(),
          emailAddress: formData.email.trim(),
          subject: formData.projectType.trim(),
          messageBody: `Location: ${formData.location}\n\n${formData.message}`
        };
        
        console.log("Sending data (Approach 3):", contactDataV3);
        response = await axiosClient.post('/contact', contactDataV3);
      }
    }

    setIsLoading(false);
    setFormData({
      name: "",
      email: "",
      projectType: "",
      location: "",
      message: ""
    });
    showAlertMessage("success", response.data.message || "Your message has been sent!");

  } catch (error) {
    setIsLoading(false);
    console.log("Full error object:", error);
    console.log("Error response data:", error.response?.data);
    console.log("Error status:", error.response?.status);
    console.log("Request config:", error.config);
    
    if (error.response?.data?.message) {
      showAlertMessage("danger", error.response.data.message);
    } else if (error.response?.data?.errors) {
      const errorMessage = error.response.data.errors.map(err => err.msg || err.message).join(', ');
      showAlertMessage("danger", errorMessage);
    } else if (error.response?.status === 400) {
      showAlertMessage("danger", "Backend validation failed. Check console for details.");
    } else if (error.response?.status === 401) {
      showAlertMessage("danger", "Unauthorized access. Please check your credentials.");
    } else if (error.response?.status === 500) {
      showAlertMessage("danger", "Server error. Please try again later.");
    } else {
      showAlertMessage("danger", "Something went wrong!");
    }
  }
};

  return (
    <section className="relative flex items-center c-space section-spacing" id="contact">
  <Particles
    className="absolute inset-0 -z-50"
    quantity={100}
    ease={80}
    color={"#ffffff"}
    refresh
  />
  {showAlert && <Alert type={alertType} text={alertMessage} />}
  
  <div className="flex flex-col items-center justify-center max-w-4xl p-8 mx-auto border border-white/10 rounded-3xl bg-primary/80 backdrop-blur-sm shadow-2xl">
    {/* Header Section */}
    <div className="flex flex-col items-center w-full gap-4 mb-12 text-center">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-lavender to-royal flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <h2 className="text-heading text-3xl font-bold bg-gradient-to-r from-lavender to-royal bg-clip-text text-transparent">
          Let's Talk
        </h2>
      </div>
      <p className="font-normal text-neutral-400 text-lg leading-relaxed max-w-lg">
        I'm excited to contribute to web projects and grow my skills as a full-stack developer. Let's connect if you're looking for a dedicated team member
      </p>
    </div>

    {/* Form Section */}
    <form className="w-full space-y-6" onSubmit={handleSubmit}>
      {/* Name & Email Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative group">
          <label htmlFor="name" className="field-label text-sm font-medium text-neutral-300 mb-2 block">
            Full Name
          </label>
          <div className="relative">
            <input
              id="name"
              name="name"
              type="text"
              className="field-input field-input-focus w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-neutral-500 focus:border-lavender focus:ring-2 focus:ring-lavender/20 transition-all duration-300 group-hover:border-white/20"
              placeholder="John Doe"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-lavender/10 to-royal/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </div>
        </div>

        <div className="relative group">
          <label htmlFor="email" className="field-label text-sm font-medium text-neutral-300 mb-2 block">
            Email Address
          </label>
          <div className="relative">
            <input
              id="email"
              name="email"
              type="email"
              className="field-input field-input-focus w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-neutral-500 focus:border-lavender focus:ring-2 focus:ring-lavender/20 transition-all duration-300 group-hover:border-white/20"
              placeholder="john@example.com"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-lavender/10 to-royal/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Project Type & Location Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative group">
          <label htmlFor="projectType" className="field-label text-sm font-medium text-neutral-300 mb-2 block">
            Project Type
          </label>
          <div className="relative">
            <select
              id="projectType"
              name="projectType"
              className="field-input field-input-focus w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white focus:border-lavender focus:ring-2 focus:ring-lavender/20 transition-all duration-300 group-hover:border-white/20 appearance-none cursor-pointer"
              value={formData.projectType}
              onChange={handleChange}
              required
            >
              <option value="" className="bg-gray-800 text-white">Select Project Type</option>
              <option value="Web Development" className="bg-gray-800 text-white">Web Development</option>
              <option value="UI/UX Design" className="bg-gray-800 text-white">UI/UX Design</option>
              <option value="E-commerce" className="bg-gray-800 text-white">E-commerce</option>
              <option value="Consultation" className="bg-gray-800 text-white">Consultation</option>
            </select>
            {/* Custom dropdown arrow */}
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg className="w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-lavender/10 to-royal/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </div>
        </div>

        <div className="relative group">
          <label htmlFor="location" className="field-label text-sm font-medium text-neutral-300 mb-2 block">
            Location
          </label>
          <div className="relative">
            <input
              id="location"
              name="location"
              type="text"
              className="field-input field-input-focus w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-neutral-500 focus:border-lavender focus:ring-2 focus:ring-lavender/20 transition-all duration-300 group-hover:border-white/20"
              placeholder="Your Location"
              value={formData.location}
              onChange={handleChange}
              required
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-lavender/10 to-royal/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Message Field */}
      <div className="relative group">
        <label htmlFor="message" className="field-label text-sm font-medium text-neutral-300 mb-2 block">
          Project Details
        </label>
        <div className="relative">
          <textarea
            id="message"
            name="message"
            rows="5"
            className="field-input field-input-focus w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-neutral-500 focus:border-lavender focus:ring-2 focus:ring-lavender/20 transition-all duration-300 group-hover:border-white/20 resize-vertical min-h-[120px]"
            placeholder="Tell me about your project goals, timeline, and any specific requirements..."
            value={formData.message}
            onChange={handleChange}
            required
          />
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-lavender/10 to-royal/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </div>
        <div className="text-xs text-neutral-500 mt-2">
          {formData.message.length}/500 characters
        </div>
      </div>

      {/* Submit Button */}
      <div className="pt-4">
        <button
          type="submit"
          disabled={isLoading}
          className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-lavender to-royal p-[1px] transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-lavender/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          <div className="relative flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-lavender to-royal px-8 py-4 text-white font-semibold text-lg transition-all duration-300 group-hover:from-lavender/90 group-hover:to-royal/90">
            {isLoading ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Sending Message...</span>
              </>
            ) : (
              <>
                <span>Send Message</span>
                
              </>
            )}
          </div>
        </button>
      </div>

      {/* Privacy Note */}
      <div className="text-center pt-4">
        <p className="text-xs text-neutral-500">
          Your information is secure and will only be used to respond to your inquiry.
        </p>
      </div>
    </form>
  </div>
</section>

  );
};

export default Contact;
