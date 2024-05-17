import { getStrapiMedia } from "@/lib/utils";
import Image from "next/image";
import { CSSProperties } from "react";

interface StrapiImageProps {
  src: string;
  alt: string;
  height: number;
  width: number;
  className?: string;
  style?: CSSProperties;
}

export function StrapiImage({
  src,
  alt,
  height,
  width,
  className,
  style,
}: Readonly<StrapiImageProps>) {
  if (!src) return null;
  const imageUrl = getStrapiMedia(src);
  const imageFallback = `https://placehold.co/${width}x${height}`;

  return (
    <Image
      src={imageUrl ?? imageFallback}
      alt={alt}
      height={height}
      style={style}
      width={width}
      className={className}
    />
  );
}
