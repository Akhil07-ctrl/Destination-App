import {Component} from 'react'
import './index.css'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {inputValue: ''}

  onChange = event => {
    this.setState({inputValue: event.target.value})
  }

  render() {
    const {inputValue} = this.state
    const {destinationsList} = this.props
    const filteredList = destinationsList.filter(each =>
      each.name.toLowerCase().includes(inputValue.toLowerCase()),
    )

    return (
      <div className="container">
        <h1>Destination Search</h1>
        <div className="search">
          <input
            type="search"
            onChange={this.onChange}
            value={inputValue}
            className="search-input"
            placeholder="Search for a destination...."
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="search-image"
          />
        </div>
        <ul>
          {filteredList.map(each => (
            <DestinationItem key={each.id} destination={each} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
