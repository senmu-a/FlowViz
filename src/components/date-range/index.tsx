import { Component } from "react";
import { Picker, View } from "@tarojs/components";
import dayjs from 'dayjs'

import "./index.scss";

interface PropsType {
  date: string
  onChange: (value: string) => void
}

interface StateType {
  date: string
}

class DateRange extends Component<PropsType, StateType> {

  constructor(props) {
    super(props);
    this.state = {
      date: this.props.date ? this.props.date : dayjs(Date.now()).format('YYYY-MM-DD')
    }
  }

  onReduceDate = () => {
    const newDate = dayjs(this.state.date).subtract(1, 'day').format('YYYY-MM-DD');
    this.setState({
      date: newDate
    });
    this.props.onChange(newDate)
  }

  onAddDate = () => {
    const newDate = dayjs(this.state.date).add(1, 'day').format('YYYY-MM-DD');
    this.setState({
      date: newDate
    });
    this.props.onChange(newDate)
  }

  onDateChange = e => {
    this.setState({
      date: e.detail.value
    })
    this.props.onChange(e.detail.value)
  }

  render() {
    return (
      <View className='date-range-container'>
        <View className='date-range_left at-icon at-icon-chevron-left' onClick={this.onReduceDate}></View>
        <Picker mode='date' onChange={this.onDateChange} value={this.state.date}>
          <View className='picker date-range_content'>{this.state.date}</View>
        </Picker>
        <View className='date-range_right at-icon at-icon-chevron-right' onClick={this.onAddDate}></View>
      </View>
    );
  }
}

export default DateRange;
