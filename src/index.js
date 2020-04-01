// import React and ReactDom Libraries

import React from 'react'
import ReactDOM from 'react-dom'


//Create a react component

const App = () => {
  return <div>Hi There</div>
};


// Display React Component

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);