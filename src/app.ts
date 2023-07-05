import { Component, PropsWithChildren } from 'react'
import './custom-theme.scss'
import './app.scss'
import './icon.scss'

class App extends Component<PropsWithChildren> {

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  // this.props.children 是将要会渲染的页面
  render () {
    return this.props.children
  }
}

export default App
