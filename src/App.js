import './App.css';
import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header"

function App() {
  const [countryInfo, setCountryInfo] = useState({});
  const [order,setOrder] = useState("ASC");

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/Ved-X/assignment/orders")
      .then((response) => response.json())
      .then((data) => {
        setCountryInfo(data);
      });
  }, []);

  // const sorting =(col)=>{
  //   if(order === "ASC"){
  //     const sorted = [...countryInfo].sort((a,b)=>
  //       a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
  //     );
  //     setCountryInfo(sorted);
  //     setOrder("DSC");
  //   }
  // }
  
//   function sortByDate(a, b) {
//     if (a.date < b.date) {
//         return 1;
//     }
//     if (a.date > b.date) {
//         return -1;
//     }
//     return 0;
// }

// useEffect(() => {
//   const sorted = countryInfo.sort(sortByDate);
//   setCountryInfo(sorted);
//   console.log(sorted);
// }, []);

  


  return (
    <div className="App">
    <Header/>

    <div id="myUL" class="table-responsive">
            <table class="table table-striped table-sm">
              <thead>
                <tr>
                  <th>order</th>
                  <th>Customer</th>
                  <th>Country</th>
                  <th>Address</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
              {countryInfo.map((person) => (
                

                <tr id="person">
                  <td >{person.order_id}</td>
                  <td className="customer" id="customer"><a>{person.customer}</a></td>
                  <td><a>{person.country}</a></td>
                  <td>{person.address}</td>
                  <td>{person.product_title}</td>
                  <td>{person.product_description}</td>
                  <td id="date" >{person.date}</td>
                  <td className={`rounded-pill  ${person.status ==='Delivered'  ? 'bg-primary' : 'bg-danger'} text-white`} >{person.status}</td>
                </tr>
              ))}
                       
                
              </tbody>
            </table>
          </div>
          
          {countryInfo.filter(person => person.status === 'Delivered').map(filteredPerson => (
            <li>
              {filteredPerson.customer}
            </li>
          ))}
              
    
    </div>
  );
}

export default App;


//{countryInfo.map((person) => (<Table
//order={person.order_id}
//country={person.country}
//address={person.address}
//product={person.product_title}
//desc={person.product_description}
///date={person.date}
//status = {person.status}
///>
//))}
