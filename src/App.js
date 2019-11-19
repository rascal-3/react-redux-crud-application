import React from 'react';

// function App() {
//   return (
//     <React.Fragment>
//       <h1>Hello, world!</h1>
//     </React.Fragment>
//   );
// }
const profiles = [
  { name: 'Taro', age: 10 },
  { name: 'Hanako', age: 5},
  { name: 'noname' }
];

const App = () => {
  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User key={index} name={profile.name} age={profile.age} />;
        })
      }
    </div>
  );
};

const User = (props) => {
return <div>Hi, I am {props.name}, and {props.age} years old. </div>;
};

User.defaultProps = {
  age: 1
};

export default App;
