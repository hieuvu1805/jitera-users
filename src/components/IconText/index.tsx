import { ReactNode } from 'react';
import { Typography, Space } from 'antd';

import './iconText.css';

type IconTextProps = {
  icon: ReactNode;
  text: string;
  href?: string;
  iconPosition?: 'left' | 'right';
  openNewTab?: boolean;
};

const { Text, Link } = Typography;

const IconText = ({
  icon,
  text,
  href,
  iconPosition = 'left',
  openNewTab = false
}: IconTextProps): JSX.Element => {
  const TextComponent = href ? Link : Text;
  return (
    <Space className="IconText" direction="horizontal" size={8}>
      {iconPosition === 'left' && icon}
      <TextComponent
        className={`IconText-${href ? 'link' : 'text'}`}
        href={href}
        target={openNewTab ? '_blank' : undefined}
      >
        {text}
      </TextComponent>
      {iconPosition === 'right' && icon}
    </Space>
  );
};

export default IconText;
