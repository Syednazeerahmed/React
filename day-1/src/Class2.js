// exporting class-1 study and exercise and importing it in App.js
export default function Class2() {
    const Name1 = <h1>Hello - {Name}</h1>;
    return (
        <div className="App">
        {/* class-2 studying rendenring  */}


        {Name1}

        <div>
          <h1>{Name}</h1>
          <h2>{age}</h2>
          <h2>{email}</h2>
        </div>

        {/*below is the example of component being rendered*/}
        <AboutNazeer />

        {/*below is the example of component with props being rendered*/}
        {/* <Users Name={Name} age={age} email={email} /> */}
        <Users Name="mifzal" age="19" email="mifzal@gmail.com" />
        <Users Name="majeed" age="22" email="majeed@gmail.com" />



        {/* class-2 exercise rendering */}
        <Job salary="90000" position="senior sde" company="Amazon" />
        <Job salary="12000" position="junior sde" company="Google" />
        <Job salary="10000" position="project manager" company="Netflix" />
      </div>
    );
}

// class-2 studying

const Name = "nazeer";
const age = 21;
const email = "nazeer@gmail.com";

// function App(){
//   const Name1 = <h1>Hello - {Name}</h1>;
//   return (
    // <div className="App">
    //   {Name1}

    //   <br></br>

    //   <div>
    //     <h1>{Name}</h1>
    //     <h2>{age}</h2>
    //     <h2>{email}</h2>
    //   </div>

    //   {/*below is the example of component being rendered*/}
    //   <AboutNazeer />

    //   {/*below is the example of component with props being rendered*/}
    //   {/* <Users Name={Name} age={age} email={email} /> */}
    //   <Users Name="mifzal" age="19" email="mifzal@gmail.com" />
    //   <Users Name="majeed" age="22" email="majeed@gmail.com" />
    // </div>
//   );
// }

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
};

//below is the funtion component with props
const Users = (props) => {
  return (
    <div>
      <h1>{props.Name}</h1>
      <h2>{props.age}</h2>
      <h2>{props.email} </h2>
    </div>
  );
};

//  class-2 study end

//  class-2 exercise start

// function App() {
//   return (
    // <div className="App">
    //   <Job salary="90000" position="senior sde" company="Amazon" />
    //   <Job salary="12000" position="junior sde" company="Google" />
    //   <Job salary="10000" position="project manager" company="Netflix" />
    // </div>
//   );
// }
function Job(props) {
  return (
    <div>
      <h1>{props.salary}</h1>
      <h2>{props.position}</h2>
      <h2>{props.company}</h2>
    </div>
  );
}

//  class-2 exercise end
