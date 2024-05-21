import { StrapiImage } from "@/components/StrapiImage";

export interface ImageProps {
  id: number;
  url: string;
  alternativeText: string;
}

interface HeroSectionProps {
  data: {
    id: number;
    __component: string;
    heading1: string;
    heading2: string;
    heading3: string;
    image: ImageProps;
  };
}

const Section1 = ({ data }: Readonly<HeroSectionProps>) => {
  return (
    <section className=" z-20 relative bg-blend-multiply  min-h-screen bg-cover bg-no-repeat bg-center  flex items-center">
      <StrapiImage
        alt="Background"
        className="absolute inset-0 object-cover w-full h-full"
        height={1080}
        src={data.image.url}
        width={1920}
        style={{
          aspectRatio: "1920/1080",
          objectFit: "cover",
        }}
      />
      <div className=" container relative h-full     space-y-2">
        <div className=" relative z-40 max-w-[886px]">
          <div>
            <p className="  text-white font-light text-4xl lg:text-5xl">
              {data.heading1}
            </p>
          </div>
          <div className=" pt-2">
            <h2 className="  text-balance text-white font-semibold text-4xl lg:text-5l xl:text-6xl">
              {data.heading2}
            </h2>
          </div>
          <div className=" pt-6 lg:pt-12">
            <h3 className=" text-white font-bold text-5xl lg:text-7xl">
              {data.heading3}
            </h3>
          </div>
        </div>
        <div className=" absolute  z-10 -translate-y-[40%]  top-[20%] w-[400px] h-[400px]  lg:w-[599px] blur-[100px] lg:h-[599px] rounded-full left-0  bg-black/60 "></div>
      </div>
    </section>
  );
};

export default Section1;
