import React from 'react'
import "./datatable.scss"
import { DataGrid } from '@mui/x-data-grid';
import {userColums, userRows} from "../../datatablesource";


const DataTable = () => {
    const actionColumn = [
        {
            field: "action",
            headerName: "Action",
            width: 200,
            renderCell: () => {
                return(
                    <div className="cellAction">
                        <div className="viewButton">View</div>
                        <div className="deleteButton">Delete</div>
                    </div>
                )
            }
        }
    ]
    return (
        <div className='datatables'>
            <DataGrid
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