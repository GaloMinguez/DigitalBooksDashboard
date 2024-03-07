import React from "react";
import Footer from "./Footer";
import TopBar from "./TopBar";
import { UltimoCliente } from "./UltimoCliente";
import { UltimoProducto } from "./UltimoProducto";

export const UltimasCargas = () => {
  return (
    <>
      <>
        {/*<!-- Content Wrapper -->*/}
        <div id="content-wrapper" className="d-flex flex-column">
          {/*<!-- Main Content -->*/}
          <div id="content">
            <TopBar />
            <UltimoProducto />
            <UltimoCliente />
            <Footer />
          </div>
        </div>
      </>
    </>
  );
};
