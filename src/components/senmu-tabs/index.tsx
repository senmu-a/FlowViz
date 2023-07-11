import { Component } from "react";
import { View } from "@tarojs/components";

import "./index.scss";

interface PropsType {
  circle?: boolean;
  current: number;
  values: string[];
  onClick: (value: number) => void;
}

class SenmuTabs extends Component<PropsType> {

  handleClick(value: number) {
    this.props.onClick(value)
  }

  render() {
    return (
      <View className={`senmu-tabs-container ${this.props.circle && 'senmu-tabs-circle'}`}>
        {this.props.values.map((item, index) => (
          <View key={index} className={`senmu-tabs__item ${this.props.current === index && 'senmu-tabs__item-active'}`} onClick={this.handleClick.bind(this, index)}>{item}</View>
        ))}
      </View>
    );
  }
}

export default SenmuTabs;
