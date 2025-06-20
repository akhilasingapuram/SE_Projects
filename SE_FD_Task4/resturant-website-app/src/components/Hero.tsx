const Hero = () => {
  return (
    <section id="home"
      className="h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: `url('/images/restaurant.jpg')`,height:400 }}
    >
      <div className="text-center">
        <h1 className="text-7xl font-bold mb-4">Welcome to TasteBite</h1>
        <p className="text-3xl">Delicious food made with love.</p>
      </div>
    </section>
  );
};
export default Hero;
