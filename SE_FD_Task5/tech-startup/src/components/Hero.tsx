import {ArrowRight} from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-blue-600 text-white text-center py-20 px-4" id='hero'>
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Welcome to TechStart Solutions
      </h1>
      <p className="text-lg md:text-xl mb-6">
        Innovating your digital future.
      </p>
      <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-100 inline-flex items-center gap-2">
        Get Started
        <ArrowRight size={18}/>
      </button>
    </section>
  );
};
export default Hero;
