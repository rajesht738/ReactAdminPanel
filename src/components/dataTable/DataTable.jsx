import React from 'react'
import "./datatable.scss"
import { DataGrid } from '@mui/x-data-grid';
import { userColums, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";

const DataTable = () => {
    const actionColumn = [
        {
            field: "action",
            headerName: "Action",
            width: 200,
            renderCell: () => {
                return (
                    <div className="cellAction">
                        <div className="viewButton">
                            <Link to="/users/test" style={{ textDecoration: "none" }}>View</Link>
                        </div>
                        <div className="deleteButton">Delete</div>
                    </div>
                )
            }
        }
    ]
    return (
        <div className='datatables'>
        <div className="datatableTitle">
            Add New User
            <Link to="/users/new" style={{ textDecoration: "none" }} className="linkNewuser">Add New</Link>
        </div>
            <DataGrid className='dataGrid'
                rows={userRows}
                columns={userColums.concat(actionColumn)}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    )
}

export default DataTable