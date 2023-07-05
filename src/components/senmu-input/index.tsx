import { Component, PropsWithChildren } from 'react'
import { View, Input, InputProps } from '@tarojs/components'

import './index.scss'

interface SenmuInputProps extends InputProps {
  prefix?: React.ReactNode | string
  suffix?: React.ReactNode | string
}

export default class SenmuInput extends Component<PropsWithChildren<SenmuInputProps>> {
  async componentDidMount () {

  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const { prefix, suffix, ...rest } = this.props
    return (
      <View className='senmu-input-affix-wrapper'>
        {prefix && <View className='senmu-input-prefix'>{prefix}</View>}
        <Input {...rest} className='senmu-input' />
        {suffix && <View className='senmu-input-suffix'>{suffix}</View>}
      </View>
    )
  }
}
