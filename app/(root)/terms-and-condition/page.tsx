import Navbar from '@/components/Navbar';
import React from 'react';

const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Navbar />
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10 md:mt-16 lg:mt-20">
        <h1 className="text-3xl font-bold mb-4 text-center">Terms and Conditions</h1>
        <p className="mb-4 text-center">Welcome to TheNetSense. By accessing or using our services, you agree to be bound by the following terms and conditions:</p>
        
        <h2 className="text-xl font-semibold mt-4">1. Introduction</h2>
        <p className="mb-4">These Terms govern your use of our website and services. Please read them carefully before proceeding.</p>
        
        <h2 className="text-xl font-semibold mt-4">2. Services</h2>
        <p className="mb-4">TheNetSense provides custom web development services, including design, SEO optimization, and technical support.</p>
        
        <h2 className="text-xl font-semibold mt-4">3. Payment & Refund Policy</h2>
        <p className="mb-4">Payments must be made as per the agreed terms. We accept payments via UPI methods, PayPal for international users, and other available payment options except Bitcoin wallets. Refunds are subject to our evaluation and approval.</p>
        
        <h2 className="text-xl font-semibold mt-4">4. Client Responsibilities</h2>
        <p className="mb-4">Clients must provide accurate information and cooperate during the development process.</p>
        
        <h2 className="text-xl font-semibold mt-4">5. Intellectual Property</h2>
        <p className="mb-4">All work remains the property of TheNetSense until full payment is received.</p>
        
        <h2 className="text-xl font-semibold mt-4">6. Limitation of Liability</h2>
        <p className="mb-4">We are not liable for any damages resulting from the use of our services.</p>
        
        <h2 className="text-xl font-semibold mt-4">7. Amendments</h2>
        <p className="mb-4">We reserve the right to modify these terms at any time.</p>
        
        <h2 className="text-xl font-semibold mt-4">8. Contact Us</h2>
        <p className="mb-4">For any questions regarding these terms, please contact us.</p>
      </div>
    </div>
  );
};

export default Terms;
