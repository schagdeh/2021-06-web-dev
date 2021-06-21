import * as React from "react";
import { useParams } from "react-router-dom";


  interface Contributor {
	login: string;
	id: number | null;
	avatar_url: string;
	updated_at: string;
	followers: number | null;
	following: number | null;
	bio: string;
  }

export default function User() {
	const [user, setUser] = React.useState<Contributor>({
		login: '',
			id: null,
			avatar_url: '',
			updated_at: '',
			followers: null,
			following: null,
			bio: ''
	})

	const params = useParams<{name: string}>()

	React.useEffect(() => {
		fetch("https://api.github.com/users/" + params.name)
      .then((res) => res.json())
      .then((data) => {
        setUser({...user, 
			login: data.login,
			id: data.id,
			avatar_url: data.avatar_url,
			updated_at: data.updated_at,
			followers: data.followers,
			following: data.following,
			bio: data.bio});
      });
	},[])

	const {login, id, avatar_url, updated_at, followers, following, bio} = user

	return (
		<main style={{display: 'flex', justifyContent: 'center'}}>
			<section style={{display: 'flex',flexDirection: 'column', justifyContent: 'center', width: '40%'}}>
				<img src={avatar_url} alt="user-image" style={{borderRadius: '1rem'}} />
				<h3>Name: {login}</h3>
				<h3>Bio: {bio}</h3>
				<h3>last-updated: {updated_at}</h3>
				<h3>Followers: {followers}</h3>
				<h3>Following: {following}</h3>
			</section>
		</main>
	);
}
