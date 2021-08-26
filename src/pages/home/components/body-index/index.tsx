import React, { FC } from 'react';
import { View } from '@tarojs/components';
import useMain from './useMain';
import style from './index.module.scss';
// const style = require('./index.module.scss')
interface BodyIndexTypes {
  lastMeasure: any;
}
const BodyIndex = ({ lastMeasure }: BodyIndexTypes) => {
  const { list } = useMain(lastMeasure);

  console.log('BodyIndex刷新了');

  return (
    <View className={style.main}>
      <View className={style.title}>身体指标</View>
      <View className={style.itemWrap}>
        {list.map((item: any) => {
          return (
            <View className={style.item} key={item.name}>
              <View>{item.name}</View>
              <View>{item.value}</View>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default BodyIndex;
