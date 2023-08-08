import Taro from '@tarojs/taro'
import { Component, PropsWithChildren } from "react";
import { View, Text } from "@tarojs/components";
import { AtList, AtListItem } from "taro-ui";

import "taro-ui/dist/style/components/button.scss"; // 按需引入
import "./index.scss";

export default class Settings extends Component<PropsWithChildren> {
  async componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  handleClick(type: string) {
    Taro.navigateTo({ url: '/pages/category/index' })
  }

  render() {
    return (
      <View className='settings'>
        <AtList hasBorder className='list-container'>
          <AtListItem
            iconInfo={{ size: 25, color: "#EAEAEA", value: "menu" }}
            title='分类'
            arrow='right'
            onClick={this.handleClick.bind(this, 'category')}
          ></AtListItem>
        </AtList>
      </View>
    );
  }
}
