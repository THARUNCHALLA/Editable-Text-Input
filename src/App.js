import {Component} from 'react'

import './App.css'

class App extends Component {
  state = {isButton: true, information: ''}

  onchange = event => {
    this.setState({information: event.target.value})
  }

  onclickButton = () => {
    const {information} = this.state
    if (information !== '') {
      this.setState({isButton: false})
    }
  }

  onclickButton1 = () => {
    this.setState(prevState => ({
      information: prevState.information,
      isButton: true,
    }))
  }

  render() {
    const {isButton, information} = this.state

    return (
      <div className="Container">
        <div className="InsideContainer">
          <h1 className="heading">Editable Text Input</h1>
          {isButton ? (
            <div className="inside">
              <input
                type="text"
                className="input"
                onChange={this.onchange}
                value={information}
              />
              <button
                type="button"
                className="button"
                onClick={this.onclickButton}
              >
                save
              </button>
            </div>
          ) : (
            <div className="inside">
              <p className="para">{information}</p>
              <button
                type="button"
                className="button"
                onClick={this.onclickButton1}
              >
                Edit
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default App
