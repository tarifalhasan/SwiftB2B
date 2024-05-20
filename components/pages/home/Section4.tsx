import { StrapiImage } from "@/components/StrapiImage";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa6";

interface IPeopleCard {
  id: number;
  name: string;
  description: string;
  linkedin: string;
  image: {
    id: number;
    url: string;
    alternativeText: string | null;
  };
}

interface Props {
  id: number;
  __component: string;
  BackgroundImage: {
    id: number;
    url: string;
    alternativeText: string | null;
  };

  title: string;
  description: string;
  PeopleCard: IPeopleCard[];
}

const Section4 = ({ data }: { data: Props }) => {
  console.dir(data, { depth: null });

  const { id, BackgroundImage, title, description, PeopleCard } = data;

  return (
    <section
      style={{
        backgroundImage: `url(${BackgroundImage.url})`,
      }}
      className=" relative min-h-screen bg-no-repeat bg-cover w-full h-full"
    >
      <StrapiImage
        alt="Background"
        className="absolute inset-0 object-cover w-full h-full"
        height={1080}
        src={BackgroundImage.url}
        width={1920}
        style={{
          aspectRatio: "1920/1080",
          objectFit: "cover",
        }}
      />
      <div className=" pt-20"></div>
      <div className="   relative container bg-white py-8">
        <div className=" inline-flex items-center gap-4">
          <span className="  w-32 h-[1px] bg-[#0F3D99]"></span>
          <span className=" text-[#0F3D99] font-normal ">THE PIONEERS</span>
        </div>

        <div className=" pt-7 max-w-[856px] mx-auto">
          <div className=" grid  gap-6 lg:grid-cols-2">
            {PeopleCard.map((people, index) => (
              <div className="  w-full flex-col" key={people.id}>
                <div className=" h-[399px] relative">
                  <StrapiImage
                    alt="Background"
                    className="  absolute inset-0 object-cover w-full h-full"
                    height={41}
                    src={people.image.url}
                    width={399}
                  />
                  <Link
                    href={people.linkedin}
                    target="_blank"
                    className=" w-16 h-16 rounded-tl bg-white absolute bottom-0 right-0 flex  justify-center items-center"
                  >
                    <FaLinkedinIn size={29} color="#0F3D99" />
                  </Link>
                </div>
                <div className=" pt-6 lg:pt-9 space-y-2 lg:space-y-4">
                  <h3 className=" text-[#06163D] font-bold  text-2xl xl:text-3xl">
                    {people.name}
                  </h3>
                  <p className=" text-xl xl:text-2xl text-[#2F333D]">
                    {people.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className=" pt-12 pb-8 space-y-7">
            <div className="">
              <h2 className=" font-bold  text-4xl xl:text-5xl text-center">
                {title}
              </h2>
            </div>
            <p className=" text-[#2F333D] text-center text-base xl:text-2xl">
              {description}
              <p className=" font-bold pt-2">
                25 year on, we have set out to….
              </p>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
