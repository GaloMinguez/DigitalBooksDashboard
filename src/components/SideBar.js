import React from 'react';
import image from '../assets/images/LOGO.png';
import ContentWrapper from './ContentWrapper';
import ContentRow from './ContentRow';
import NotFound from './NotFound';
import {Link, Route, Switch} from 'react-router-dom';
import { UltimasCargas } from './UltimasCargas';
import { NuestrasCategorias } from './NuestasCategorias';
import { TablaChart } from './TablaChart';
import { TablaChartVentas } from './TablaChartVentas';

function SideBar(){
    return(
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-white sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-50" src={image} alt="Digital Books"/>
                    </div>
                </a>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard - Digital Books</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Acciones</div>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item nav-link">
                <Link className="nav-link" to="/TablaChart">
                        <i className="fas fa-table"></i>
                        <span>Detalle de Productos</span></Link>
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item nav-link">
                <Link className="nav-link" to="/TableCharVentas">
                        <i className="fas fa-table"></i>
                        <span>Detalle de Ventas</span></Link>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/Ultimas-Cargas">
                        <i className="fas fa-users"></i>
                        <span>Ultimas Cargas</span></Link>
                </li>

                

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            {/*<!-- End of Sidebar -->*/}

            <Switch>
                <Route exact path="/">
                    <ContentWrapper />
                </Route>
                <Route path="/NuestrasCategorias">
                    <NuestrasCategorias />
                </Route>
                <Route path="/TablaChart">
                    <TablaChart />
                </Route>
                <Route path="/Ultimas-Cargas">
                    <UltimasCargas />
                </Route>
                <Route path="/ContentRow">
                    <ContentRow />
                </Route>
                {/* SE AGREGO TABLACHARVENTAS */}
                <Route path="/TableCharVentas">
                    <TablaChartVentas />
                </Route>
                <Route component={NotFound} />
            </Switch>
        </React.Fragment>
    )
}
export default SideBar;