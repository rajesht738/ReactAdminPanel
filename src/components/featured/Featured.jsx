import React from 'react'
import "./featured.scss"
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const Featured = () => {
    const value = 0.66;
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
                        <div className="itemResult">
                        <KeyboardArrowDownIcon />
                         <div className="resultAmount">
                                $20K
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Target</div>
                        <div className="itemResult">
                        <KeyboardArrowDownIcon />
                         <div className="resultAmount">
                                $20K
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Target</div>
                        <div className="itemResult">
                        <KeyboardArrowDownIcon />
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