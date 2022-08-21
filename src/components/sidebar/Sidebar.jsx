import React from 'react'
import "./sidebar.scss"
const Sidebar = () => {
  return (
    <div className='sidebar'>
     <div className='top'>
       <div className='logo'>
       <span>Raj Admin</span>
       </div> 
     </div>
        <div className='list'>
            <ul>
                <li>
                    <span>Dashboard</span>
                </li>
                <li>
                    <span>Dashboard</span>
                </li>
                <li>
                    <span>Dashboard</span>
                </li>
                <li>
                    <span>Dashboard</span>
                </li>
            </ul>
        </div>
        <div className='bottom'>Bottom</div>
    
    </div>
  )
}

export default Sidebar