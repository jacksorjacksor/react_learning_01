// import useState hook
import { useState } from "react"

// define the function
function App() {
  
  // destructure the value and set state function = define the state's default value (1):
  const [valueInState, setValueOfState] = useState(1)

  // create the click handler function & call the set function with previous value, returning the value + 1
  const handleClick = () => setValueOfState(currentValOfFirst => currentValOfFirst + 1)

  return (
    // The actual HTML -> click on the Div, the number goes up
    <div onClick={() => setValueOfState(handleClick)}>Our number is: {valueInState}</div>
  )
}

export default App
