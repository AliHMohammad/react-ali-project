import { ReactNode } from "react";

type Props = {
	children: ReactNode
}

export default function Layout() {

	return (
		<div className="flex justify-center mt-1 mb-1 mx-auto text-5xl">
			<h1>Music Base</h1>
		</div>
	);
}