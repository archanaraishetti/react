// import logo from './logo.svg';
import './App.css';
import Button from './components/button/button';
import TableName from './components/button/table/table';
import ListName1 from './components/button/list/list';
import ListItems1 from './components/listItems/listItems';
import FormValidation1 from './components/forms/forms';
import TodoList,{Table1,List} from './components/todo/todo';
import ButtonComponent from './components/classBased/button-component';
import { ApiCall } from './components/expection/exception';
import Apipost from './components/post-method/post-method';
import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapLayout from './components/bootstrap/first-component';
import MapMethod from './components/bootstrap/mapMethod';
import { InlineStyles } from './components/styling/inline-styles';
import { ExternalStyling } from './components/styling/external-styling';
import { Modulestyles } from './components/styling/module-styles';




import { Layout } from './components/bootstrap/layout';
function App() {
  return (
    <div>
     {/* <table>
      <th>
        <td>name</td>
      </th>
      <th>
        <td>age</td>
      </th>
      <tr><td>archana</td>
      <td>21</td>
      </tr>
    </table>  */}
    
     {/* <Button/>
    <TableName/>
    <ListName1/>
    <ListItems1/>
    <FormValidation1/>
    <TodoList/>
    <Table1/>
    <List/>
    <ButtonComponent/>
    <ApiCall/>
    <Apipost/>
    <BootstrapLayout/>
    
    <InlineStyles/>
    <ExternalStyling/>
    <Modulestyles/> */}
    <MapMethod/>
    <Layout/>
    </div>
  );
}

export default App
