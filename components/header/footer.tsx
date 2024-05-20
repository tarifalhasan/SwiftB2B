import Link from "next/link";
import { StrapiImage } from "../StrapiImage";
import { Button } from "../ui/button";

interface Icon {
  id: number;
  url: string;
  alternativeText: string | null;
}

interface SocialLink {
  id: number;
  liinkHref: string | null;
  icon: Icon;
}

interface ContactPerson {
  id: number;
  name: string;
  role: string;
  phone: string;
  email: string;
}

interface ContacUs {
  id: number;
  title: string;
  ContactPerson: ContactPerson[];
}

interface Footer {
  id: number;
  __component: string;
  ContacUs: ContacUs;
  SocialLinks: SocialLink[];
  FooterColumn1: {
    id: number;
    btnLink: string;
    logo: {
      id: number;
      url: string;
      alternativeText: string;
    };
  };
}

const Footer = ({ data }: { data: Footer }) => {
  console.dir(data, { depth: null });
  return (
    <footer
      style={{
        backgroundImage:
          "linear-gradient(180deg, #01050D 24.64%, #0F3D99 144.76%)",
      }}
      className=" py-10"
    >
      <div className=" container flex  flex-col lg:justify-center  lg:flex-row  gap-16">
        <div className=" lg:basis-[25%]">
          <StrapiImage
            src={data.FooterColumn1.logo.url}
            alt="swiftb2b"
            width={240}
            height={70}
          />
          <div className=" pt-10">
            <Button variant={"primary"} size={"lg"} className=" rounded-full">
              Lets Start !
            </Button>
          </div>
        </div>
        <div className=" lg:basis-[50%] max-w-[440px] lg:border-x border-white px-6">
          <h3 className=" text-white text-3xl font-bold">
            {data.ContacUs.title}
          </h3>
          <ul className=" pt-10 grid grid-cols-2">
            {data.ContacUs.ContactPerson.map((person) => (
              <li key={person.id}>
                <div>
                  <h4 className=" text-lg text-white font-semibold">
                    {person.name}
                  </h4>
                  <h4 className=" text-lg text-white font-semibold">
                    {person.role}
                  </h4>
                </div>
                <div className=" pt-4 flex flex-col">
                  <p className=" text-white font-normal text-base">
                    {person.email}
                  </p>
                  <p className=" text-white font-normal text-base">
                    ph {person.phone}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <ul className=" pt-10 flex items-center gap-5">
            <li>
              <Link href={"/"} className=" text-xs font-normal text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href={"/"} className=" text-xs font-normal text-white">
                Terms & Conditions
              </Link>
            </li>{" "}
            <li>
              <Link href={"/"} className=" text-xs font-normal text-white">
                © SwiftB2B.com . 2024
              </Link>
            </li>
          </ul>
        </div>
        <div className=" flex flex-row gap-8 lg:flex-col lg:basis-[25%] ">
          {data.SocialLinks.map((l) => (
            <Link href={""} key={l.id}>
              <StrapiImage
                src={l.icon.url}
                alt=""
                width={24.5}
                height={24.5}
                className=" w-6 h-6 "
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
