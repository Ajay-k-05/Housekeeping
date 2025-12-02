import React from "react";

const HeroSection = () => {
  return (
    <section
      // full screen height background image
      className="absolute h-screen bg-cover bg-center overflow-hidden w-full  "
      style={{ backgroundImage: "url('/assets/images/hero-cleaning.jpg')", minHeight: '700px' }}
    >
      {/* dark overlay */}
      {/* <div className="absolute inset-0 bg-black/40" /> */}

      {/* flexbox wrapper to centre content */}
      <div className="relative z-10 flex h-full w-full justify-left" style={{ alignItems: 'center', alignContent: 'center', alignSelf: 'center', textAlign: 'center', paddingTop: '50px',backgroundColor : '#000', opacity : 0.7 , minHeight : '700px'  }}>
        <div className=" text-white px-4">
          <h2  style={{ fontWeight: 'bold' , color: '#FFD700'}}>
            Leave the house cleaning chores to us
          </h2>
          <h1 style={{ fontWeight: 'bold' , color: '#FFFFFF'}}>
            Let us do the dirty work, so you don't have to.
          </h1>
          <p className="mb-6 max-w-xl mx-auto">
            We make your home clean and hygienic. Book our services and relax.
          </p>
          <a
            href="#"
            className="btn btn-primary py-3 px-4">
            Learn More →
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
