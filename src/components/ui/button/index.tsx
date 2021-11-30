import { Button, Text, View } from '@tarojs/components';
import style from './index.module.scss';

interface MyButtonTypes {
  text: string;
  size: string;
  click: () => void;
}

const MyButton = ({ text, click, size = 'normal' }: MyButtonTypes) => {
  return (
    <Button
      hoverClass={style.btnHover}
      className={`${style[size]} ${style.main} `}
      onClick={() => click()}
    >
      <View className={style.text}>{text}</View>
    </Button>
  );
};

export default MyButton;
