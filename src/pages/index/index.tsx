import { Component, PropsWithChildren } from "react";
import { View } from "@tarojs/components";
import { AtButton, AtTabs, AtTabsPane } from "taro-ui";
import SenmuInput from "../../components/senmu-input";
import Category from "../../components/category";
import DateRange from "../../components/date-range";
import CardList from "../../components/card-list";
import CardListItem from "../../components/card-list/card-item";
import SenmuTabs from "../../components/senmu-tabs"

import "./index.scss";

interface PropsType {}

interface StateType {
  current: number;
  date: string;
}

export default class Index extends Component<PropsType, StateType> {
  constructor(...args) {
    super(args);
    this.state = {
      current: 0,
      date: "",
    };
  }
  async componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  handleClick(value) {
    this.setState({
      current: value,
    });
  }

  handleDateChange(value) {
    this.setState({
      date: value,
    });
  }

  render() {
    const tabList = [{ title: "标签页1" }, { title: "标签页2" }];
    return (
      <View className='index'>
        tabs 标签：
        <AtTabs
          current={this.state.current}
          tabList={tabList}
          onClick={this.handleClick.bind(this)}
        >
          <AtTabsPane current={this.state.current} index={0}>
            标签页一的内容
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={1}>
            标签页二的内容
          </AtTabsPane>
        </AtTabs>
        input 前缀：
        <SenmuInput prefix='¥' type='number' />
        input 后缀：
        <SenmuInput
          type='number'
          suffix={
            <View
              className='at-icon at-icon-camera'
              style={{ fontSize: "28px" }}
              onClick={() => console.log("hello")}
            />
          }
        />
        category and icon：
        <Category icon='icon-bank' />
        category and icon&name
        <Category icon='icon-bank' name='银行' />
        submit button：
        <AtButton type='primary' circle>
          提交
        </AtButton>
        disable button：
        <AtButton type='primary' disabled circle>
          提交
        </AtButton>
        date-range：
        <DateRange
          date={this.state.date}
          onChange={this.handleDateChange.bind(this)}
        />
        card-list：
        <CardList>
          <CardListItem title='当前金额' extraText='¥40,710.00' />
          <CardListItem title='当前金额' extraText='¥40,710.00' />
        </CardList>
        tabs：
        <SenmuTabs
          onClick={this.handleClick.bind(this)}
          current={this.state.current}
          values={["标签页1", "标签页2"]}
        />
      </View>
    );
  }
}
