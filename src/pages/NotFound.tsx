import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import Seo from '../components/Seo';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-white px-6">
      <Seo 
        title="404 - Page Not Found" 
        description="The page you are looking for doesn't exist or has been moved."
      />
      <div className="text-center">
        <p className="text-[#1A7A4A] font-bold text-lg mb-4">404 error</p>
        <h1 className="text-4xl md:text-6xl font-bold text-[#101828] mb-6 tracking-tight">
          Page not found
        </h1>
        <p className="text-lg text-[#475467] mb-10 max-w-md mx-auto">
          Sorry, the page you are looking for doesn't exist or has been moved. 
          Check the URL or head back to our home page.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#1A7A4A] text-white px-8 py-4 rounded-xl font-bold hover:bg-green-800 transition-all shadow-lg"
          >
            <Home size={20} />
            Go back home
          </Link>
          <Link
            to="/contact"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-[#101828] border border-gray-200 px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all"
          >
            Contact support
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
