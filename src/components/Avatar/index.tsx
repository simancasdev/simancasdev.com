import Image from "next/image";

interface AvatarProps {
  src: string;
  alt?: string;
  size?: number;
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  size = 50,
  alt = "avatar",
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      loader={() => src}
      style={{objectFit: "cover", borderRadius: 100}}
    />
  );
};
