import React from "react";
import "./Searchbar.css";
import SearchIcon from '@mui/icons-material/Search';


function Searchbar({setInputText})
{
    
    return (
    <div className = "search_con">
        <input type = "text" className = "search" placeholder = "Search for products" />
        <SearchIcon className = "SearchIcon"></SearchIcon>
    </div>)
}
export default Searchbar;