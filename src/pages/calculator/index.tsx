import Taro from '@tarojs/taro'
import { Component, PropsWithChildren } from 'react'
import { View, Text } from '@tarojs/components'

import "taro-ui/dist/style/components/button.scss" // 按需引入

export default class Calculator extends Component<PropsWithChildren> {
  async componentDidMount () {

  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='calculator'>
        hellow
      </View>
    )
  }
}
