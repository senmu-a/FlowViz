import { Component } from "react";
import { View, Picker } from "@tarojs/components";
import { AtButton, AtTabs, AtTabsPane, AtNavBar } from "taro-ui";
import SenmuInput from "../../components/senmu-input";
import Category from "../../components/category";
import DateRange from "../../components/date-range";
import CardList from "../../components/card-list";
import CardListItem from "../../components/card-list/card-item";
import SenmuTabs from "../../components/senmu-tabs";
import LineChart from "../../components/chart-line";

import "./index.scss";

interface PropsType {}

interface StateType {
  current: number;
  date: string;
  title: number;
}

const arr = ['月报', '分类']

const data = [
  {
    time: "2016-08-08 00:00:00",
    tem: 10,
  },
  {
    time: "2016-08-08 00:10:00",
    tem: 22,
  },
  {
    time: "2016-08-08 00:30:00",
    tem: 16,
  },
  {
    time: "2016-08-09 00:35:00",
    tem: 26,
  },
  {
    time: "2016-08-09 01:00:00",
    tem: 12,
  },
  {
    time: "2016-08-09 01:20:00",
    tem: 26,
  },
  {
    time: "2016-08-10 01:40:00",
    tem: 18,
  },
  {
    time: "2016-08-10 02:00:00",
    tem: 26,
  },
  {
    time: "2016-08-10 02:20:00",
    tem: 12,
  },
];


export default class Demo extends Component<PropsType, StateType> {
  constructor(...args) {
    super(args);
    this.state = {
      current: 0,
      date: "",
      title: 0,
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

  handleChange(event) {
    this.setState({
      title: event.detail.value
    })
  }

  render() {
    const tabList = [{ title: "标签页1" }, { title: "标签页2" }, { title: "标签3" }];
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
        {/* <Category icon='icon-bank' /> */}
        category and icon&name
        {/* <Category icon='icon-bank' name='银行' /> */}
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
          values={["标签页1", "标签页2", "标签3"]}
        />
        {this.state.current === 0 ? (
          <View className='tab-content'>标签1的内容</View>
        ) : null}
        {this.state.current === 1 ? (
          <View className='tab-content'>标签2的内容</View>
        ) : null}
        {this.state.current === 2 ? (
          <View className='tab-content'>标签3的内容</View>
        ) : null}
        tabs-circle：
        <SenmuTabs
          circle
          onClick={this.handleClick.bind(this)}
          current={this.state.current}
          values={["标签页1", "标签页2", "标签3"]}
        />
        {this.state.current === 0 ? (
          <View className='tab-content'>标签1的内容</View>
        ) : null}
        {this.state.current === 1 ? (
          <View className='tab-content'>标签2的内容</View>
        ) : null}
        {this.state.current === 2 ? (
          <View className='tab-content'>标签3的内容</View>
        ) : null}
        下拉：
        <AtNavBar border={false}>
          <Picker mode='selector' range={arr} onChange={this.handleChange.bind(this)} value={this.state.title}>
            <View className='picker'>{arr[this.state.title]}</View>
          </Picker>
        </AtNavBar>
        category-report：
        {/* <Category icon='icon-food' name='餐饮' type='expense' /> */}
        {/* <Category icon='icon-food' name='餐饮' type='income' /> */}
        chart-line：
        <LineChart data={data} />
      </View>
    );
  }
}
