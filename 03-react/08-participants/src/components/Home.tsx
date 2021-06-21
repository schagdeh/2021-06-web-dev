import * as React from "react";
import User from "./User"
import {Link} from 'react-router-dom'

interface Contributors {
	login: string;
	id: number | null;
	avatar_url: string;
  }
  

  

export default function Home() {

	const [users, setUsers] = React.useState<Contributors[]>();

  React.useEffect(() => {
    fetch("https://api.github.com/repos/Powercoders-Switzerland/2021-1-web-dev/contributors")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);  

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          margin: "auto",
          textAlign: "center",
        }}
      >
        {users ? users.map((user): JSX.Element => {
              return (
                <li
                  key={user.login}
                  style={{
                    width: "50%",
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
					<Link to={'/users/' + user.login}>
					<img
                    src={user.avatar_url}
                    alt="user_image"
                    style={{ width: "40%", borderRadius: "50%" }}
                    //onClick={() => showUserInfo(user.login)}
                  />
					</Link>
				
                  <h4>{user.login}</h4>
                </li>
              );
            })
          : "There is no contributors"}
      </div>
    </>
  );
}
