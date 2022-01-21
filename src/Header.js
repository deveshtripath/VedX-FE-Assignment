import React,{useState,useEffect} from 'react';

import "./Header.css"

const Header = () => {

  function myFunction() {
    console.log("hi  thht");
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("person");
    li = ul.getElementById("customer");
    console.log(li);
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

  return <div className='header'>
      <div className="header__search">
        
        <img className='p-3' src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/32/000000/external-search-ui-dreamstale-lineal-dreamstale-2.png"/>
        <input  id="myInput" onClick="myFunction()" placeholder='Search' type ="text"/>
        
      </div>
      <div  className="filter">
        <img className='' width="30px" src="https://img.icons8.com/ios-filled/50/000000/filter--v1.png"/>
        <p className='fil'>Filter</p>
      </div>
  </div>;
};

export default Header;
