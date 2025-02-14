// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destination} = props
  const {imgUrl, name} = destination
  return (
    <li className="item">
      <img src={imgUrl} alt={name} className="image" />
      <p>{name}</p>
    </li>
  )
}

export default DestinationItem
