import React from 'react';

const App: React.FC = () => {
  return (
    <main className="min-h-screen bg-[#120235] flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
      <div className="text-center">
        <h1 className="text-[#FEFFFF] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-plus-jakarta-sans font-bold leading-tight">
          We're Fixing Our Website
        </h1>
        <p className="text-[#FEFFFF] text-opacity-80 mt-4 text-lg sm:text-xl md:text-2xl font-inter">
          Please check back soon.
        </p>
      </div>
      <footer className="absolute bottom-4 text-center w-full">
        <p className="text-[#FEFFFF] text-opacity-60 text-sm font-inter">
          &copy; {new Date().getFullYear()} Asia Karya Lumina. All rights reserved.
        </p>
      </footer>
    </main>
  );
};

export default App;