const Section1 = () => {
  return (
    <section className=" z-20 relative bg-[url('/images/hero.webp')] min-h-screen bg-cover bg-no-repeat bg-center overflow-hidden flex items-center">
      <div className=" container relative h-full     space-y-2">
        <div className=" relative z-40 max-w-[886px]">
          <div>
            <p className="  text-white font-light text-4xl lg:text-5xl">
              Finally,
            </p>
          </div>
          <div className=" pt-2">
            <h2 className="  text-balance text-white font-semibold text-4xl lg:text-5l xl:text-6xl">
              Supply chain tech focused on the right thing
            </h2>
          </div>
          <div className=" pt-6 lg:pt-12">
            <h3 className=" text-white font-bold text-5xl lg:text-7xl">
              The Product
            </h3>
          </div>
        </div>
        <div className=" absolute  z-10 -translate-y-[40%]  top-[20%] w-[400px] h-[400px]  lg:w-[599px] blur-[100px] lg:h-[599px] rounded-full left-0  bg-black/60 "></div>
      </div>
    </section>
  );
};

export default Section1;
