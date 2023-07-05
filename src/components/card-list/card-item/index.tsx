import { Component } from 'react'
import { View, Text } from '@tarojs/components'

import './index.scss'

interface PropsType {
  title: string | React.ReactNode
  extraText: string | React.ReactNode
}

class CardItem extends Component<PropsType> {
  render() {
    return (
      <View className='card-list__item'>
        <View className='card-list__item-container'>
          <Text className='card-item-content__info'>{this.props.title}</Text>
          <Text className='card-item-extra__info'>{this.props.extraText}</Text>
        </View>
      </View>
    )
  }
}

export default CardItem
