import bhindi from "../assets/SOCAL-2-BLOG-jun.webp";

function Hero() {
  return (
    <section className="h-[80vh] container mx-auto ">
      <div className="relative flex items-center justify-center w-full h-full text-5xl leading-relaxed text-center bg-cover font-playwrite">
        <h1 className="relative z-10 text-white">
          Discover the Taste <br /> of Perfection
        </h1>
        <img src={bhindi} alt="" className="absolute w-full h-full" />
      </div>
    </section>
  );
}

export default Hero;
