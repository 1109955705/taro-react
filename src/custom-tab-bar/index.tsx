/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import { switchTab } from '@tarojs/taro';
import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { CoverView, CoverImage } from '@tarojs/components';
import './index.scss';

const data = {
  list: [
    {
      pagePath: '/pages/home/index',
      text: '测量',
      iconPath: 'home',
    },
    {
      pagePath: '/pages/chart/index',
      text: '图表',
      iconPath: 'chart',
    },
    {
      pagePath: '/pages/mine/index',
      text: '我的',
      iconPath: 'mine',
    },
  ],
};

const defaultColor = '#CCCCCC';

const Tabbar: FC = () => {
  const selected = useSelector((state: ReduxRootState) => state.tabbar);
  const selectedColor = useSelector((state: ReduxRootState) => state.themeColor);

  const handleSwitchTab = (path: string) => {
    switchTab({
      url: path,
    });
  };
  return (
    <CoverView className="tab-bar">
      <CoverView className="tab-bar-border" />
      {data.list.map((item, index) => (
        <CoverView
          className="tab-bar-item"
          key={item.text}
          onClick={() => handleSwitchTab(item.pagePath)}
        >
          <CoverView
            className="tab-bar-itme-img_bg"
            style={{
              background: index === selected ? selectedColor : defaultColor,
            }}
          >
            <CoverImage
              className="tab-bar-itme_icon"
              src={require(`../assets/images/tabbar/${item.iconPath}_transparent.png`)}
            />
          </CoverView>
          <CoverView
            className="tab-bar-item_text"
            style={{ color: index === selected ? selectedColor : defaultColor }}
          >
            {item.text}
          </CoverView>
        </CoverView>
      ))}
    </CoverView>
  );
};

export default Tabbar;
