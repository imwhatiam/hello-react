import React, { Component } from 'react'

class CommentInput extends Component {

  constructor () {
    super()
    this.state = {
      username: '',
      content: ''
    }
  }

  handleUsernameChange (event) {
    this.setState({
      username: event.target.value
    })
  }

  handleContentChange (event) {
    this.setState({
      content: event.target.value
    })
  }

  handleSubmit () {
    if (this.props.onSubmit) {
      const { username, content } = this.state
      this.props.onSubmit({username, content})
    }
    this.setState({ content: '' })
  }

  render () {
    // React.js 认为所有的状态都应该由 React.js 的 state 控制，只要类似于 <input />、<textarea />、<select /> 这样的输入控件被设置了 value 值，那么它们的值永远以被设置的值为准。值不变，value 就不会变化。
    // 例如，上面设置了 <input /> 的 value 为 this.state.username，username 在 constructor 中被初始化为空字符串。即使用户在输入框里面尝试输入内容了，还是没有改变 this.state.username 是空字符串的事实。
    return (
      <div className='comment-input'>
        <div className='comment-field'>
          <span className='comment-field-name'>用户名：</span>
          <div className='comment-field-input'>
            <input
	      onChange={this.handleUsernameChange.bind(this)}
	      value={this.state.username} />
          </div>
        </div>
        <div className='comment-field'>
          <span className='comment-field-name'>评论内容：</span>
          <div className='comment-field-input'>
            <textarea
	      onChange={this.handleContentChange.bind(this)}
	      value={this.state.content} />
          </div>
        </div>
        <div className='comment-field-button'>
          <button onClick={this.handleSubmit.bind(this)}>
            发布
          </button>
        </div>
      </div>
    )
  }
}

export default CommentInput
