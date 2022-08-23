import React from 'react'
import "./featured.scss"
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
const Featured = () => {
   
    return (
        <div className='featured'>
            <div className="top">
                <h1 className="title">Total Revenue</h1>
                <MoreVertIcon fontSize='small' />
            </div>
            <div className="bottom">
                <div className="featuredChart">
                    <CircularProgressbar value={70} text={`70%`} />
                </div>
                <p className="title">Total sale made today</p>
                <p className="amount">$356</p>
                <p className="desc">Previous Transaction Processing</p>

                <div className="summary">
                    <div className="item">
                        <div className="itemTitle">Target</div>
                        <div className="itemResult negative">
                        <KeyboardArrowDownIcon />
                         <div className="resultAmount">
                                $20K
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Last Week</div>
                        <div className="itemResult positive">
                       
                        <KeyboardArrowUpIcon/>
                         <div className="resultAmount">
                                $20K
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Last Month</div>
                        <div className="itemResult positive">
                        <KeyboardArrowUpIcon />
                         <div className="resultAmount">
                                $20K
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured