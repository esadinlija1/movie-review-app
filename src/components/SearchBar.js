import { useState, useEffect } from "react";
import SearchIcon from "./search_icon.svg"
import  "./componentsStyles/SearchBar.css"



export default function SearchBar(props){

    const handleChange=(e)=>{
        props.onChangeQuery(e.target.value);
    }

    return(
        <div className="search-container">
            <input type="text" placeholder="Search movies" onChange={handleChange}/>
        </div>
    )
}