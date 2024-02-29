
import { DiAngularSimple } from "react-icons/di";
import { DiChrome } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import SideBarIcon from "./SideBarIcon.tsx";

export default function SideBar() {


    return (
        <div className="fixed top-0 left-0 h-screen w-16 flex flex-wrap flex-col text-white shadow-lg bg-gray-800">
            <SideBarIcon icon={<DiChrome/>} text="Text 12345"/>
            <SideBarIcon icon={<DiAngularSimple/>} text="Text 12345"/>
            <SideBarIcon icon={<DiCss3/>} text="Text 12345"/>
            <SideBarIcon icon={<DiChrome/>} text="Text 12345"/>
            <SideBarIcon icon={<DiAngularSimple/>} text="Text 12345"/>
            <SideBarIcon icon={<DiCss3/>} text="Text 12345"/>

        </div>
    )
}