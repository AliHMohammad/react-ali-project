import ArtistList from "./ArtistList.tsx";
import { useOutlet } from "react-router-dom";


export default function ArtistLayout() {
	const outlet = useOutlet();

	return (
		<>
			<div className="grid grid-cols-8">

				<div>
					<ArtistList />
				</div>

				<div className="col-span-7">
					{outlet || <h2>Press an artist to show</h2>}
				</div>

			</div>
		</>
	)
}