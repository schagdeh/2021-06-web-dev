import * as React from "react";
import * as ReactDOM from "react-dom";

const appDiv = document.getElementById("app");

if (!(appDiv instanceof HTMLDivElement)) {
  throw new Error("No div with id 'app' found");
}

const App = (): JSX.Element => {
  interface UserForm {
    firstName: string;
    lastName: string;
    age: number;
  }
  const [user, setUser] = React.useState<UserForm>({
    firstName: "",
    lastName: "",
    age: 0,
  });

  return (
    <>
      <section>
        <form onSubmit={e => {
          e.preventDefault();
          alert(user.firstName + " " + user.lastName + " " + user.age)
        }}>
            <h1>Your Information</h1>
            <hr />
          <div>
            <label htmlFor="firstName">First Name: </label>
            <input
              id="firstName"
              type="text"
              onChange={(e) =>
                setUser((user) => ({ ...user, firstName: e.target.value }))
              }
            />
          </div>
          <div>
            <label htmlFor="lastName"> Last Name: </label>
            <input
              id="lastName"
              type="text"
              onChange={(e) =>
                setUser((user) => ({ ...user, lastName: e.target.value }))
              }
            />
          </div>
          <div>
            <label htmlFor="age"> Age: </label>
            <input
              id="age"
              type="number"
              onChange={(e) =>
                setUser((user) => ({ ...user, age: parseInt(e.target.value) }))
              }
            />
          </div>

          <button>submit</button>
        </form>
      </section>
    </>
  );
};

ReactDOM.render(<App />, appDiv);
