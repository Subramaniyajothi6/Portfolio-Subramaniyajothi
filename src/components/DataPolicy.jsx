const DataPolicy = () => {
  return (
    <div className="text-neutral-300 space-y-6">
      {/* Introduction */}
      <div>
        <p className="text-sm text-neutral-400 mb-4">
          Last updated: {new Date().toLocaleDateString()}
        </p>
        <p>
          This Privacy Policy explains how information is collected, used, and protected when you visit this portfolio website.
        </p>
      </div>

      {/* Information Collection */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-3">Information Collection</h3>
        <div className="space-y-3">
          <div>
            <h4 className="font-medium text-neutral-200 mb-2">Contact Form Data:</h4>
            <ul className="space-y-1 text-sm ml-4">
              <li>• Name and email address (when contacting through forms)</li>
              <li>• Message content and inquiry details</li>
              <li>• Date and time of submission</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-neutral-200 mb-2">Automatic Information:</h4>
            <ul className="space-y-1 text-sm ml-4">
              <li>• Browser type and version</li>
              <li>• Device information and screen resolution</li>
              <li>• Pages visited and time spent on site</li>
              <li>• Referring website (if applicable)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Information Usage */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-3">How Information is Used</h3>
        <ul className="space-y-2 text-sm">
          <li>• Respond to inquiries and professional communications</li>
          <li>• Improve website performance and user experience</li>
          <li>• Analyze website traffic and popular content</li>
          <li>• Prevent spam and maintain website security</li>
        </ul>
      </div>

      {/* Information Sharing */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-3">Information Sharing</h3>
        <ul className="space-y-2 text-sm">
          <li>• Personal information is not sold, traded, or shared with third parties</li>
          <li>• Contact form data is stored securely and used only for communication</li>
          <li>• Anonymous analytics data may be collected through web analytics tools</li>
        </ul>
      </div>

      {/* Third-Party Services */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-3">Third-Party Services</h3>
        <div className="space-y-3">
          <div>
            <h4 className="font-medium text-neutral-200 mb-2">Analytics:</h4>
            <p className="text-sm ml-4">
              This website may use analytics services to understand website usage patterns. These services collect anonymous data about visits.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium text-neutral-200 mb-2">Hosting:</h4>
            <p className="text-sm ml-4">
              This website is hosted on third-party platforms which may collect standard server logs for security and performance purposes.
            </p>
          </div>
        </div>
      </div>

      {/* Data Security */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-3">Data Security</h3>
        <ul className="space-y-2 text-sm">
          <li>• Form submissions are transmitted securely</li>
          <li>• Personal information is stored with appropriate security measures</li>
          <li>• Regular security updates and monitoring are maintained</li>
        </ul>
      </div>

      {/* User Rights */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-3">Your Rights</h3>
        <ul className="space-y-2 text-sm">
          <li>• Request information about collected data</li>
          <li>• Ask for correction or deletion of personal data</li>
          <li>• Opt out of future communications</li>
          <li>• Contact with any privacy concerns</li>
        </ul>
      </div>

      {/* Policy Changes */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-3">Policy Changes</h3>
        <p className="text-sm">
          This Privacy Policy may be updated periodically to reflect changes in practices or legal requirements. The "Last updated" date will indicate when changes were made.
        </p>
      </div>

      {/* Contact */}
      <div className="pt-4 border-t border-neutral-700">
        <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
        <p className="text-sm">
          If you have questions about this Privacy Policy or data handling, please contact through the available contact methods on this website.
        </p>
      </div>
    </div>
  );
};

export default DataPolicy;
