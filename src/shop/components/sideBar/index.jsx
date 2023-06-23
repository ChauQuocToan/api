import React from "react"
import CategoryMenu from "./CategoryMenu"

export default function SideBar(){
    return(
       <div id="sidebar" className="span3">
            <CategoryMenu></CategoryMenu>
        </div>
    )
}