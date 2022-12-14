import React from 'react'
import Chart from '../../components/chart/Chart'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import List from '../../components/table/Table'
import "./single.scss"
const Single = () => {
  return (
    <div className='single'>
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <h1 className="title">Information</h1>
            <div className="editButton">Edit</div>
            <div className="item">
              <img src='https://res.cloudinary.com/do6p6bfdg/image/upload/v1660845053/jqcbplncntmnjyk3owip.jpg' alt='avatar' className='itmeImg' />
              <div className="details">

                <h1 className="itemTitle">John Doe</h1>
                <div className="itemDetails">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">tiwari@gmail.com</span>
                </div>
                <div className="itemDetails">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+915686469</span>
                </div>
                <div className="itemDetails">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">Balaganj, lucknow</span>
                </div>
                <div className="itemDetails">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">India</span>
                </div>

              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending (Last 6 monte)" />

          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Last Transaction</h1>
          <List />
        </div>
      </div>

    </div>
  )
}

export default Single