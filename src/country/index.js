import './index.css'

const Country = props => {
  const {country, visitCountry} = props
  const {id, name, isVisited} = country

  const onCLick = () => {
    visitCountry(id)
  }

  return (
    <li>
      <p className="heading">{name}</p>
      {isVisited ? (
        <p>Visited</p>
      ) : (
        <button type="button" onClick={onCLick}>
          Visit
        </button>
      )}
    </li>
  )
}

export default Country
