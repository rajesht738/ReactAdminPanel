import React from 'react'
import Chart from '../../components/chart/Chart'
import Featured from '../../components/featured/Featured'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import List from '../../components/table/Table'
import Widget from '../../components/widget/Widget'
import "./home.scss"
const Home = () => {
  return (
    <div className='home'>
      <Sidebar />
      <div className="homeContainer">
        {/* navbar */}
        <Navbar />
        {/* Widget */}
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        {/* chart   */}
        <div className="charts">
        <Featured />
          <Chart aspect={2/1} title="Last 6 month (Revenue)"/>
        </div>
        {/* ListContainer */}
        <div className="listContainer">
          <div className="title">Latest Transactions</div>
        <List/>
        </div>

      </div>
    </div>
  )
}

export default Home