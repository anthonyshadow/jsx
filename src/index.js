// import React and ReactDom Libraries

import React from 'react'
import ReactDOM from 'react-dom'


//function

function getButtontext() {
  return 'Click On Me!';
}

//Create a react component

const App = () => {

  // const buttonText = 'Click Me!'
  const style = {backgroundColor: 'blue', color: 'white'}
  const labelText = 'Enter Name'

  return (
    <div>
      <label className="label" htmlFor="name">
        {labelText}
      </label>
      <input id="name" type="text"></input>
      <button style={style}>
        {getButtontext()}
      </button>
    </div>
  )
};


// Display React Component

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);