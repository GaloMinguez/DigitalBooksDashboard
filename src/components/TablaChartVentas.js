import React from 'react'
import Footer from './Footer'
import TopBar from "./TopBar";
import ChartVentas from './ChartVentas';

export const TablaChartVentas = () => {
  return (
    <>
        {/*<!-- Content Wrapper -->*/}
      <div id="content-wrapper" className="d-flex flex-column">
        {/*<!-- Main Content -->*/}
        <div id="content">
          <TopBar />
          <ChartVentas/>
          <Footer/>
        </div>
      </div>
    </>
  )
}
