import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC } from "react";
import { CgMenuRightAlt } from "react-icons/cg";
import { StrapiImage } from "../StrapiImage";
import { buttonVariants } from "../ui/button";

interface LinkI {
  id: number;
  Label: string;
  LinkHref: string;
}
interface HeaderPorps {
  data: {
    id: number;
    __component: string;
    logo: {
      id: number;
      url: string;
      alternativeText: null | string;
    };
    Link: LinkI[];
    Button: { id: number; Label: string; href: string };
  };
}
const SiteHeader: FC<HeaderPorps> = ({ data }) => {
  const links = data.Link;
  // console.dir(data, { depth: null });
  return (
    <header className="  z-50 backdrop-blur-[50px] w-full bg-header  h-[72px] flex items-center fixed top-0 left-0 right-0   ">
      <div className=" container w-full flex items-center justify-between">
        <Link href={"/"}>
          <StrapiImage
            src={data.logo.url || "/"}
            width={159}
            height={28}
            alt={data.logo.alternativeText || "Swift B2B"}
          />
        </Link>
        <button className="lg:hidden cursor-pointer">
          <CgMenuRightAlt size={25} color="#fff" />
        </button>
        <ul className=" hidden lg:flex items-center gap-x-6">
          {links.map((link, index) => (
            <li
              key={link.id}
              className="  transition-colors text-white hover:text-primary duration-700 text-lg  inline-block font-semibold"
            >
              <Link href={link.LinkHref || "/"}>{link.Label}</Link>
            </li>
          ))}

          <Link
            href={data.Button.href}
            className={cn(
              buttonVariants({
                variant: "primary",
              }),
              "rounded-full font-semibold"
            )}
          >
            {data.Button.Label}
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default SiteHeader;
