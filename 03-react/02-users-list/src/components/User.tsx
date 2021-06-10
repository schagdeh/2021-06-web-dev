import * as React from "react";

interface UserInfo {
	id: number;
	avatar: string;
	first_name: string;
    last_name: string;
    age: number
    city: string;
    ip: string;
    isAdmin: boolean
};
interface UserProps {
    users: UserInfo[]
}

export default function User(props: UserProps): JSX.Element {

  const adultUser = props.users.map(user => {
    
    return user.age > 18 && <li key={user.id} style={{borderTop: '1px solid black', borderBottom: '1px solid black', listStyle: 'none', margin: '.5rem 0'}}>
            <h1>Name: {user.first_name + " " + user.last_name}</h1>
            <h1> age: {user.age}</h1>
            <img src={user.avatar} alt="user image" />
           </li>
     
    } );  

    const youngUser = props.users.map(user => {
    
        return user.age <= 18 && <li key={user.id} style={{borderTop: '1px solid black', borderBottom: '1px solid black', listStyle: 'none', margin: '.5rem 0'}}>
                <h1>Name: {user.first_name + " " + user.last_name}</h1>
                <h1> age: {user.age}</h1>
                <img src={user.avatar} alt="user image" />
               </li>
         
        } ); 
      
    
    return (
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
            <div style={{border: '2px solid gray', borderRadius: '1rem'}}>
                <h1>Adult Users</h1>
                <ul style={{padding: 0}}>{adultUser}</ul>
            </div>
            <div style={{border: '2px solid gray', borderRadius: '1rem'}}>
                <h1>Young Users</h1>
                <ul style={{padding: 0}}>{youngUser}</ul>
            </div>
        </div>
    )
}
