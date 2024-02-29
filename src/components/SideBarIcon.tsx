// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { IconType } from "react-icons/di";

type Props = {
	icon: IconType;
	text: string
}

export default function SideBarIcon({ icon, text }: Props) {

	return (
		<div className="relative flex items-center justify-center h-12 w-12 mt-2 mb-2 mx-auto shadow-lg bg-gray-800 text-green-500 hover:bg-green-600 hover:text-white rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear cursor-pointer group">
			{icon}

			<span className="absolute w-auto p-2 m-2 min-w-max left-14 rounded-md shadow-md text-white bg-gray-900 text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100">
				{text}
			</span>
		</div>
	);
}