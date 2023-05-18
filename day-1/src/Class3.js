export default function Class3() {
    
    const age = 18;
    const isSafe = false;
    const users = [ {Name: "nazeer", age: 21},
                    {Name: "mifzal", age: 19},
                    {Name: "majeed", age: 22}
                ];

    // demostration of ternary operator, conditional rendering , logical operator and short circuit operator
    return (
      // inline styling in react js

      <div className="App" style = {{backgroundColor: isSafe && 'green'}} >
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
      </div>
    );
}
 
function Users(props) {
    return (
        <div>
            <p>{props.Name} &nbsp; {props.age}</p>
        </div>
    );   
}

