function ButtonDecrement(props) {
  
  return (
    <button style={{ marginLeft: '.5rem'}} onClick={props.decrementCounter}>
    -1
    </button>
  )
}

export default ButtonDecrement;
