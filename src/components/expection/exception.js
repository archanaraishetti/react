// import {Component} from "react"

import { Component } from "react";

// export class ApiCall extends Component{
//     handleData=()=>{
//         try{
//         fetch("https://fakestoreapi.com/carts")
//         .then(response=>response.json())
//         .then(response=>console.log("responded"))
//         .catch(err=>console.log("error"))
//         }catch{
//             console.log("404 notfound")
//             alert("Something went wrong")
//         }
//     }
//     render()
//     {
       
//         return(
//             <>
//           <h2>Api Calling</h2>
//           <button onClick={this.handleData}>Click to fetch</button>
//           </>
//         )
        
//     }
// }


 export class ApiCall extends Component{
    handle=()=>{
        try{
            fetch("https://fakestoreapi.com/products")
            .then(response=>response.json())
            .then(response=>console.log(response))
            .catch(err=>console.log(err))
        }
        catch{
            console.log("error")
            console.log("404 not found");
        }
        finally{
            console.log("stop the loaders")
            alert("hello")
        }
    }

render()
{
    return(
    <>
    <h2>API CALL</h2>
    <button onClick={this.handle}>Click here</button>
    </>
    )
}
}
