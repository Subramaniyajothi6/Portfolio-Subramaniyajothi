const TermsAndConditions = () => {
  return (
    <div className="text-neutral-300 space-y-6">
      {/* Introduction */}
      <div>
        <p className="text-sm text-neutral-400 mb-4">
          Last updated: {new Date().toLocaleDateString()}
        </p>
        <p>
          Welcome to this portfolio website. By accessing and using this website, you agree to comply with and be bound by the following terms and conditions.
        </p>
      </div>

      {/* Website Usage */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-3">Website Usage</h3>
        <ul className="space-y-2 text-sm">
          <li>• You may browse and view this portfolio for personal and professional purposes</li>
          <li>• You may not copy, reproduce, or distribute the content without permission</li>
          <li>• Screenshots and references for professional purposes are allowed with proper attribution</li>
        </ul>
      </div>

      {/* Intellectual Property */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-3">Intellectual Property</h3>
        <ul className="space-y-2 text-sm">
          <li>• All original code, designs, and content are owned by the portfolio owner</li>
          <li>• Project demos and code snippets are for showcase purposes</li>
          <li>• Third-party libraries and assets are credited to their respective owners</li>
          <li>• GitHub repositories are subject to their individual licenses</li>
        </ul>
      </div>

      {/* Contact Information */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-3">Contact & Communication</h3>
        <ul className="space-y-2 text-sm">
          <li>• Contact form submissions are for professional inquiries only</li>
          <li>• Response time may vary based on availability</li>
          <li>• Spam, inappropriate, or malicious messages are prohibited</li>
        </ul>
      </div>

      {/* External Links */}
      <div>
        <h3 className="text-lg font-semibled text-white mb-3">External Links</h3>
        <ul className="space-y-2 text-sm">
          <li>• Links to external websites (GitHub, live projects) are provided for convenience</li>
          <li>• We are not responsible for the content or availability of external sites</li>
          <li>• External sites may have their own terms and privacy policies</li>
        </ul>
      </div>

      {/* Disclaimer */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-3">Disclaimer</h3>
        <ul className="space-y-2 text-sm">
          <li>• This portfolio is for demonstration and showcase purposes</li>
          <li>• Project functionality may vary in live environments</li>
          <li>• No warranties are provided regarding website availability or accuracy</li>
        </ul>
      </div>

      {/* Changes */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-3">Changes to Terms</h3>
        <p className="text-sm">
          These terms may be updated periodically. Continued use of the website constitutes acceptance of any changes.
        </p>
      </div>

      {/* Contact */}
      <div className="pt-4 border-t border-neutral-700">
        <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
        <p className="text-sm">
          For questions about these terms, please contact through the provided contact methods on this website.
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
