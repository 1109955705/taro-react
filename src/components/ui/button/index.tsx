import React from 'react';
import { Button, Text, View } from '@tarojs/components';
import style from './index.module.scss';

interface myButtonTypes {
  text: string;
  size: string;
  click: () => void;
}

const MyButton = ({ text, click, size = 'normal' }) => {
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
