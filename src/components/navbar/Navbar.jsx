import React from 'react'
import "./navbar.scss"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='search'>
          <input type="text" placeholder='Search...' />
          <SearchOutlinedIcon />
        </div>
        <div className='items'>
          <div className="item">
            <LanguageIcon  className="icon"/>
            English
          </div>
          <div className="item">
            <DarkModeOutlinedIcon className="icon" />
           
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="count">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="count">1</div>
          </div>
          <div className="item">
            <ListOutlinedIcon className="icon"/>
          </div>
          <div className="item">
           <img src='https://res.cloudinary.com/do6p6bfdg/image/upload/v1660844021/z7xjeczwicx710ry5o8q.jpg' className='avatar' alt=""/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar