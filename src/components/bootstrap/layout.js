import BootstrapLayout from "./first-component";
import { TableBootstrap } from "./table-bootstrap";
import { ListBootstrap } from "./list";
import { FormsBootstrap } from "./forms-boostrap";
import { FooterBootstrap } from "./footer-bootsrap";
export const Layout =()=>{
return(
    <>
    <BootstrapLayout/>
    <TableBootstrap/>
    <ListBootstrap/>
    <FormsBootstrap/>
    <FooterBootstrap/>
    </>
)
}
