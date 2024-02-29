import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

type Props = {
	children: ReactNode
}

export default function Layout({ children }: Props) {

	return (
        <>
            <div className="flex justify-center pt-5 pb-5 mx-auto bg-red-500 ">
                <h1 className="text-5xl font-sans ">Music Base</h1>
            </div>

			<div className="flex flex-wrap mx-auto navbar">
				<NavLink to={"/"}>Home</NavLink>
				<NavLink to={"/artists"}>Artists</NavLink>
				<NavLink to={"/albums"}>Albums</NavLink>
				<NavLink to={"/tracks"}>Tracks</NavLink>
				<NavLink to={"/login"}>Log-in</NavLink>
			</div>

            <div>{children}</div>
        </>
    );
}