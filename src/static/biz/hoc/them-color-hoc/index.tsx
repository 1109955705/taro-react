import React, { useEffect } from 'react';
import { View } from '@tarojs/components';
import { useSelector } from 'react-redux';
import { $ } from '@tarojs/extend';

export default (ThemeColorComponent) => {
  return () => {
    const themeColor = useSelector((state: ReduxRootState) => state.themeColor);

    useEffect(() => {
      let elem = $(`.mainColor`);
      elem.css('background-color', themeColor);
      elem.css('--tc', themeColor);
    }, [themeColor]);

    return (
      <View className="mainColor">
        <ThemeColorComponent />
      </View>
    );
  };
};
