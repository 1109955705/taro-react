import React, { useEffect } from 'react';
import { View } from '@tarojs/components';
import { useSelector } from 'react-redux';
import { $ } from '@tarojs/extend';

export default (ThemeColorComponent) => {
  // eslint-disable-next-line react/display-name
  return () => {
    const themeColor = useSelector((state: ReduxRootState) => state.themeColor);

    useEffect(() => {
      const elem = $(`.mainColor`);
      elem.css('--tc', themeColor);
    }, [themeColor]);

    return (
      <View className="mainColor">
        <ThemeColorComponent />
      </View>
    );
  };
};
