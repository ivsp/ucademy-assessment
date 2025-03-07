import { Button } from 'antd';
import { SizeType } from 'antd/es/config-provider/SizeContext';

interface ButtonComponentProps {
  icon: React.ReactNode;
  type?: 'primary' | 'link' | 'text' | 'default' | 'dashed' | undefined;
  size?: SizeType;
  message: string;
  onClickEvent: () => void;
}

export default function ButtonIconComponent({
  icon,
  type = 'primary',
  size = 'large',
  message,
  onClickEvent,
}: ButtonComponentProps) {
  return (
    <Button onClick={onClickEvent} type={type} icon={icon} size={size}>
      {message}
    </Button>
  );
}
