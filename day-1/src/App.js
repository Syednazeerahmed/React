import './App.css';

// day-1 study

// function App() {
//   return <div className='App'>Hello world</div>;
// }


// day-2 studying
const Name = "nazeer";
const age = 21;
const email = "nazeer@gmail.com";

function App() {
  
  const Name1 = <h1>Hello - {Name}</h1>;
  return (
    <div className='App'>
      {Name1}
      
      <br></br>

      <div>
        <h1>{Name}</h1>
        <h2>{age}</h2>
        <h2>{email}</h2>
      </div>

      {/*below is the example of component being used*/} 
      <AboutNazeer />

      {/*below is the example of component with props being used*/}
      {/* <Users Name={Name} age={age} email={email} /> */}
      <Users Name="mifzal"  age="19" email="mifzal@gmail.com" />
      <Users Name='majeed' age='22' email='majeed@gmail.com' />
    </div>
  );
}

// Rules for creating component
// 1. Always start component name with capital letter
// 2. Component name should be unique

//below is the function component
 const AboutNazeer = () => {
  return (
    <div>
      <h1>{Name}</h1>
      <h2>{age}</h2>
      <h2>{email}</h2>
    </div>
  );
}

//below is the funtion component with props
const Users = (props) => {
  return (
    <div>
      <h1>{props.Name}</h1>
      <h2>{props.age}</h2>
      <h2>{props.email} </h2>
    </div>
  );
}
export default App;
