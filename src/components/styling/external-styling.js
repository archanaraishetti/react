import { Component } from "react";
import "./styles.css"
import { InlineStyles } from "./inline-styles";



export class ExternalStyling extends Component{
render(){
    return(
    <>
     <table>
      <th  className={"greeting"}>
        <td>name</td>
      </th>
      <th  className={"greeting"}>
        <td>age</td>
      </th>
      <tr><td>archana</td>
      <td>21</td>
      </tr>
      <tr><td>navya</td>
      <td>21</td></tr>
      </table>
      <h1  className={"greeting"}>class</h1>
      <InlineStyles/>
    </>

    )
}

}