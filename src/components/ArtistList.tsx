import { useEffect, useState } from "react";
import { ArtistT } from "../models/interfaces.ts";
import { getArtistsApi } from "../utils/fetchApi.ts";
import { Link } from "react-router-dom";


export default function ArtistList() {
	const [artists, setArtists] = useState<ArtistT[] | null>(null);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		let flag = true;

		if (flag) {
			getArtistsApi().then((res) => setArtists(res))
				.catch((e) => setError(e.message));
		}

		return () => {
			flag = false;
		};
	}, []);


	if (error) {
		return (
			<h2>Failed at fetching</h2>
		);
	}

	return (
		<>
			{!artists ? <p className="mt-1 mb-1 mx-auto pl-5">Loading...</p> : (
				<>
					{artists.map((artist) => {
						return (
							<div key={artist.id} className="mt-1 mb-1 mx-auto pl-5">
								<Link to={"/"}>ID: {artist.id}, {artist.name}</Link>
							</div>
						);
					})}
				</>
			)}
		</>
	);


}