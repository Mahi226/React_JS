import {Component} from 'react'

import './index.css'

class Counter extends Component {
  state = {count: 0}
  onDecreament = () => {
    this.setState(prevState => {
      console.log(`previous  state value ${prevState.count}`)
      return {count: prevState.count + 1}
    })
  }

  onIncreament = () => {
    this.setState(prevState=>{
      console.log(`${prevState.count-1}`)
    return{count:prevState.count-1}
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">Counter</h1>
        <p className="count">{count}</p>
        <div>
          <button className="button" onClick={this.onDecreament}>
            Increase
          </button>
          <button className="button" onClick={this.onIncreament}>
            Decrease
          </button>
        </div>
      </div>
    )
  }
}

export default Counter
