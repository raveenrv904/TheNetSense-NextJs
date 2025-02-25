import Navbar from '@/components/Navbar';
import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Navbar />
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10 md:mt-16 lg:mt-20">
        <h1 className="text-3xl font-bold mb-4 text-center">Privacy Policy</h1>
        <p className="mb-4 text-center">At TheNetSense, we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and protect your information.</p>
        
        <h2 className="text-xl font-semibold mt-4">1. Information We Collect</h2>
        <p className="mb-4">We may collect personal details such as your name, email, and payment information when you use our services.</p>
        
        <h2 className="text-xl font-semibold mt-4">2. How We Use Your Information</h2>
        <p className="mb-4">We use your information to provide and improve our services, process payments, and communicate with you.</p>
        
        <h2 className="text-xl font-semibold mt-4">3. Data Security</h2>
        <p className="mb-4">We implement security measures to protect your data from unauthorized access, alteration, or disclosure.</p>
        
        <h2 className="text-xl font-semibold mt-4">4. Sharing of Information</h2>
        <p className="mb-4">We do not sell or share your personal data with third parties, except when required by law or necessary for service provision.</p>
        
        <h2 className="text-xl font-semibold mt-4">5. Cookies</h2>
        <p className="mb-4">We use cookies to enhance your experience on our website. You can manage your cookie preferences in your browser settings.</p>
        
        <h2 className="text-xl font-semibold mt-4">6. Your Rights</h2>
        <p className="mb-4">You have the right to access, modify, or request deletion of your personal data by contacting us.</p>
        
        <h2 className="text-xl font-semibold mt-4">7. Changes to This Policy</h2>
        <p className="mb-4">We reserve the right to update this Privacy Policy at any time. Changes will be posted on this page.</p>
        
        <h2 className="text-xl font-semibold mt-4">8. Contact Us</h2>
        <p className="mb-4">If you have any questions about our Privacy Policy, please contact us.</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
