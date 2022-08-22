import React from 'react'
import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='top'>
        <span className='logo'>Raj Admin</span>
      </div>
      <hr />
      <div className='center'>
        <ul>
        <p className='title'>MAIN</p>
          <li>
            <DashboardIcon className='icon' />
            <span>Dashboard</span>
          </li>
          <p className='title'>LISTS</p>
          <li>
            <PersonOutlinedIcon className="icon" />
            <span>Users</span>
          </li>
          <li>
            <StoreOutlinedIcon className='icon' />
            <span>Products</span>
          </li>
          <li>
            <CreditCardIcon className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon className="icon" />
            <span>Delivery</span>
          </li>
          <p className='title'>USEFUL</p>
          <li>
            <InsertChartIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneIcon className='icon' />
            <span>Notification</span>
          </li>
          <p className='title'>SERVICE</p>
          <li>
            <SettingsSystemDaydreamIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className='icon' />
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className='title'>USERS</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
          <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className='bottom'>
        <div className="colorOption"></div>
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>

    </div>
  )
}

export default Sidebar
