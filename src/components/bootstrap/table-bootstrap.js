import { Component } from "react";




export class TableBootstrap extends Component{
render(){
    return(
        <div class="container mt-3">
  <h2>Hoverable Dark Table</h2>
  <p>The .table-hover class adds a hover effect (grey background color) on table rows:</p>            
  <table class="table table-dark table-hover">
    <thead>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Raishetti</td>
        <td>Archana</td>
        <td>archu@gmail.com</td>
      </tr>
      <tr>
      <td>Raishetti</td>
        <td>Archana</td>
        <td>archu@gmail.com</td>
      </tr>
      <tr>
      <td>Raishetti</td>
        <td>Archana</td>
        <td>archu@gmail.com</td>
      </tr>
    </tbody>
  </table>
</div>

    )
}



}