import Taro from '@tarojs/taro'
import { Component, PropsWithChildren } from 'react'
import { View, Text } from '@tarojs/components'
import { AtTabBar } from 'taro-ui'

import "taro-ui/dist/style/components/button.scss" // 按需引入
import './index.scss'

export default class Report extends Component<PropsWithChildren> {
  async componentDidMount () {

  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='report'>
        报表
        <View className='at-icon at-icon-settings'></View>
      </View>
    )
  }
}
