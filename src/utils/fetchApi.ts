import { ArtistT } from "../models/interfaces.ts";


export async function getArtistsApi(): Promise<ArtistT[]> {
	const promise = await fetch("http://localhost:3000/artists", {
		method: "GET",
		headers: {
			"Content-Type": "application/json"
		}
	})

	if (promise.ok) {
		return await promise.json();
	}

	const errorResponse = await promise.json()
	throw new Error(errorResponse.errorMessage ? errorResponse.errorMessage : "Failed at fetching artists");
}