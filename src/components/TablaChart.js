import React from 'react'
import Chart from './Chart'
import Footer from './Footer'
import TopBar from "./TopBar";

export const TablaChart = () => {
  return (
    <>
        {/*<!-- Content Wrapper -->*/}
      <div id="content-wrapper" className="d-flex flex-column">
        {/*<!-- Main Content -->*/}
        <div id="content">
          <TopBar />
          <Chart />
          <Footer/>
        </div>
      </div>
    </>
  )
}
