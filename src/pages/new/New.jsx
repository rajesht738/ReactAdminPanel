import React, { useState } from 'react'
import "./new.scss"
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';


const New = ({inputs, title}) => {
  const [image, setImage] = useState();
    
  return (
    <div className='new'>
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1 className="title">{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
           <img src={image ? URL.createObjectURL(image) : 'https://res.cloudinary.com/do6p6bfdg/image/upload/v1661342671/no-image-icon-0_r5twqw.jpg'} alt='avatar' />
          </div>
          <div className="right">
          <form>
          <div className="formInput">
            <label htmlFor="file">
              Image: <DriveFolderUploadOutlinedIcon className="icon"/>
            </label>
            <input type="file" id="file" onChange={(e) => setImage(e.target.files[0])} style={{display:"none"}} />
          </div>
          {
            inputs.map((input) => {
            return ( <div className="formInput" key={input.id}>
            <label htmlFor="">{input.label}</label>
            <input type={input.type} placeholder={input.placeholder}/>
          </div>)
            })
          }
          
         
          <button>Send</button>
         </form>

          </div>
        </div>
      </div>
    </div>
  )
}

export default New