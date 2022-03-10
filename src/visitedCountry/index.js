import './index.css'

const VisitedCountry = props => {
  const {visitCountry, deleteCountry} = props
  const {imageUrl, name, id} = visitCountry

  const onClick = () => {
    deleteCountry(id)
  }

  return (
    <li>
      <img src={imageUrl} alt="thumbnail" className="image" />
      <div>
        <p>{name}</p>
        <button type="button" onClick={onClick}>
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitedCountry
