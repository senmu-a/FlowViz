import { Component, PropsWithChildren } from 'react'
import { View } from '@tarojs/components'

import './index.scss'

interface PropsType {
  hasBordered?: boolean
}

class CardList extends Component<PropsWithChildren<PropsType>> {
  render() {
    return (
      <View className={`card-list-container ${!this.props.hasBordered && 'card-list_nobordered'}`}>
        {this.props.children}
      </View>
    )
  }
}

export default CardList
