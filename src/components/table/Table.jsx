import React from 'react'
import "./table.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const List = () => {
    const rows = [
        {
            id: 1111,
            product: "Acer Nitro 5",
            img: "https://res.cloudinary.com/do6p6bfdg/image/upload/v1660845025/dem5exxgishb0jszc4lz.jpg",
            customer: "John Smith",
            date: "1 March",
            amount: 785,
            method: "Cash on Delivery",
            status: "Approved",
        },
        {
            id: 2222,
            product: "PlayStation 5",
            img: "https://res.cloudinary.com/do6p6bfdg/image/upload/v1660844437/qgzlxkpocnin3zj6ctez.png",
            customer: "Rahul Tiwari",
            date: "1 March",
            amount: 600,
            method: "Online Payment",
            status: "Pending",
        },
        {
            id: 3333,
            product: "Asus Laptop 7",
            img: "https://res.cloudinary.com/do6p6bfdg/image/upload/v1660844362/ae8uua8crvwoss4tugvo.jpg",
            customer: "Ankur Mishra",
            date: "1 March",
            amount: 55785,
            method: "Online Payment",
            status: "Approved",
        },
        {
            id: 4444,
            product: "Samsung Z",
            img: "https://res.cloudinary.com/do6p6bfdg/image/upload/v1660844704/mguzdbavvfjw9pr4na0q.jpg",
            customer: "Herry",
            date: "1 March",
            amount: 5785,
            method: "Cash on Delivery",
            status: "Pending",
        },
    ]
  return (
    <div className='table'>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow  key={row.id}>
              <TableCell >{row.id}</TableCell>
              <TableCell className="tableCell">
              <div className="cellWrapper">
                <img src={row.img} alt='' className='image'/>
                {row.product}
              </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
              <span className={`status ${row.status}`}> {row.status}</span>
             </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default List