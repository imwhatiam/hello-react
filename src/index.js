import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 自定义的组件都必须要用大写字母开头，普通的 HTML 标签都用小写字母开头。
class Title extends Component {

  // 事件属性名都必须要用驼峰命名法
  handleClickOnTitle (parameter, e) {
    console.log(e.target.innerHTML)
    console.log(this)
    console.log(parameter)
  }

  render () {
    return (

      // 这些 on* 的事件监听只能用在普通的 HTML 的标签上，而不能用在组件标签上
      // 也就是说，<Header onClick={…} /> 这样的写法不会有什么效果的。

      // 这种 bind 模式在 React.js 的事件监听当中非常常见
      // bind 不仅可以帮我们把事件监听方法中的 this 绑定到当前组件实例上
      <h1 onClick={this.handleClickOnTitle.bind(this, 'this is parameter')}>This is Title</h1>
    )
  }
}

class Header extends Component {
  render () {
    return (
    <div>
      <Title />
      <h2>This is Header</h2>
    </div>
    )
  }
}

class Main extends Component {
  render () {
    return (
    <div>
      <h2>This is main content</h2>
    </div>
    )
  }
}

class Footer extends Component {
  render () {
    return (
    <div>
      <h2>This is footer</h2>
    </div>
    )
  }
}

// 理解组件树的概念对后面理解数据是如何在组件树内自上往下流动过程很重要。
class Index extends Component {
  render () {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
