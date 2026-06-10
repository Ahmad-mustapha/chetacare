import React, { useState, useEffect } from 'react';

// This prevents TypeScript from throwing errors about the global window object
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check local storage to see if the user has already answered
    const consent = localStorage.getItem('chetacare_cookie_consent');
    if (!consent) {
      setIsVisible(true);
    } else if (consent === 'granted') {
      enableAnalytics();
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('chetacare_cookie_consent', 'granted');
    setIsVisible(false);
    enableAnalytics(); // Dynamically inject the tracking code only now
  };

  const handleDecline = () => {
    localStorage.setItem('chetacare_cookie_consent', 'denied');
    setIsVisible(false);
    // We do nothing else here; the script remains completely unloaded to save user data
  };

  const enableAnalytics = () => {
    if (document.getElementById('ga-script')) return; // Prevent duplicate loading

    // 1. Dynamically inject the script tag into document head
    const script = document.createElement('script');
    script.id = 'ga-script';
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-LK8WQJ6X52";
    document.head.appendChild(script);

    // 2. Initialize dataLayer and configurations
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', 'G-LK8WQJ6X52');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 bg-white border border-gray-200 p-5 rounded-xl shadow-2xl z-50 flex flex-col gap-4">
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-1">Your Privacy</h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          We use analytics tracking to improve our health resources. By accepting, you help us understand how our platform is used.
        </p>
      </div>
      <div className="flex gap-3 justify-end text-sm font-medium">
        <button 
          onClick={handleDecline} 
          className="px-4 py-2 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
        >
          Decline
        </button>
        <button 
        onClick={handleAccept} 
        className="px-4 py-2 bg-brand-green text-white rounded-lg hover:bg-green-800 transition-colors shadow-sm font-semibold"
        >
        Accept
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;