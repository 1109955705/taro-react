import React, { FC, useEffect } from 'react';
import { View, Canvas } from '@tarojs/components';
import Taro from '@tarojs/taro';
import './index.scss';

const CanvasTest: FC = (props) => {
  useEffect(() => {
    const ctx = Taro.createCanvasContext('myCanvas');

    ctx.rect(10, 10, 100, 30);
    ctx.setFillStyle('yellow');
    ctx.fill();

    // begin another path
    ctx.beginPath();
    ctx.rect(10, 40, 100, 30);

    // only fill this rect, not in current path
    ctx.setFillStyle('blue');
    ctx.fillRect(10, 70, 100, 30);

    ctx.rect(10, 100, 100, 30);

    // it will fill current path
    ctx.setFillStyle('red');
    ctx.fill();

    ctx.moveTo(200, 50);
    ctx.lineTo(300, 100);
    ctx.lineTo(150, 100);
    ctx.closePath();
    ctx.stroke();

    ctx.draw();
  }, []);

  return (
    <View className="template_container">
      <Canvas
        style="width: 300px; height: 200px;"
        canvasId="myCanvas"
        id="myCanvas"
      />
    </View>
  );
};

export default CanvasTest;
