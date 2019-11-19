import React from 'react';

// function App() {
//   return (
//     <React.Fragment>
//       <h1>Hello, world!</h1>
//     </React.Fragment>
//   );
// }

const App = () => {
  return (
    <div>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </div>
  )
};

const Cat = () => {
  return <div>Meow!</div>;
};

export default App;
