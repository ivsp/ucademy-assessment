import { Image } from './styles';

interface IconComponentProps {
  src: string;
  alt: string;
  width: string;
}

export default function IconComponent({
  src,
  alt,
  width = '100px',
}: IconComponentProps) {
  return <Image src={src} alt={alt} width={width} />;
}
