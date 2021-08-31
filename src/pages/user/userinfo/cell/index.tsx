import React from 'react';
import { View } from '@tarojs/components';
import style from './index.module.scss';

interface cellTypes {
  leftIcon?: string;
  name: string;
  value: string;
  onclickFn?: () => void;
  valueSlot?: any;
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
const defaultFn = () => {};
const Cell = ({ leftIcon, name, value, onclickFn, valueSlot }: cellTypes) => {
  return (
    <View className={style.cell} onClick={onclickFn ? () => onclickFn() : () => defaultFn()}>
      <View className={style.cellLeft}>
        {leftIcon && <View className={`${style.cellIcon} ${leftIcon}`} />}
        <View className={style.cellName}>{name}</View>
      </View>
      <View className={style.cellRight}>
        {valueSlot ? valueSlot() : <View className={style.cellTips}>{value}</View>}
        <View className={`${style.cellArrow} icon-arr-right`} />
      </View>
    </View>
  );
};

Cell.defaultProps = {
  leftIcon: undefined,
  onclickFn: undefined,
  valueSlot: undefined,
};

export default Cell;
