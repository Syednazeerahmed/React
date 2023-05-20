export default function Class3() {
    
    const age = 18;
    const isSafe = false;
    const users = [ {Name: "nazeer", age: 21},
                    {Name: "mifzal", age: 19},
                    {Name: "majeed", age: 22}
                ];
    const planets = [ 
        {name: "Mars", isGasPlanet: false},
        {name: "Earth", isGasPlanet: false},
        {name: "Jupiter", isGasPlanet: true},
        {name: "Venus", isGasPlanet: false},
        {name: "Neptune", isGasPlanet: true},
        {name: "Uranus", isGasPlanet: true}
    ]
    // demostration of ternary operator, conditional rendering , logical operator and short circuit operator
    return (
      // inline styling in react js

      <div className="App" style={{ backgroundColor: isSafe && "green" }}>
        <h1>CLASS 3</h1>
        
        {/* short cicuit operator*/}
        {age >= 18 && (
          <h1 style={{ color: "turquoise", backgroundColor: "beige" }}>
            you are overage
          </h1>
        )}

        {/* ternary operator */}
        {age >= 18 ? <h1>you are overage</h1> : <h1>you are underage</h1>}

        {/* conditional rendering using map function */}

        {users.map((user) => {
          return <Users Name={user.Name} age={user.age} />;
        })}

        {/* class-3 exercise */}

        {planets.map((planet) => {
          //below is the example of rendering Gas planets only
          return planet.isGasPlanet ? <h2>{planet.name}</h2> : null;

          //below is the example of rendering Non-Gas planets only using short circuit operator
          // return !planet.isGasPlanet && <h2>{planet.name}</h2>;
        })}
      </div>
    );
}
 
function Users(props) {
    return (
        <div>
            <h2>{props.Name} &nbsp; {props.age}</h2>
        </div>
    );   
}


