export const userColums = [
    { field: "id", headerName: "ID", width: 70 },
    {
        field: "user",
        headerName: "User",
        width: 230,
        renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    <img className="cellImg"
                    src={params.row.img}
                    alt="avatar"/>
                    {params.row.username}
                </div>
            );
        },
    },
    { field: "email", headerName: "Email", width: 230 },
    { field: "age", headerName: "Age", width: 100 },
    { 
        field: "status", headerName: "Status", width: 160 ,
        renderCell: (params) => {
            return (
                <div className={`cellWithStatus ${params.row.status}`}>
                     {params.row.status}
                </div>
            );
        },
    },
]
export const userRows = [
    {
        id: 1,
        username: "Snow",
        img: "https://res.cloudinary.com/do6p6bfdg/image/upload/v1661002676/pu9zxvthkuaeqdjyz1qd.jpg",
        status: "active",
        email: "1snow@gmail.com",
        age: 35,
    },
    {
        id: 2,
        username: "Rahul",
        img: "https://res.cloudinary.com/do6p6bfdg/image/upload/v1660845053/jqcbplncntmnjyk3owip.jpg",
        status: "pending",
        email: "rahul@gmail.com",
        age: 30,
    },
    {
        id: 3,
        username: "John sen",
        img: "https://res.cloudinary.com/do6p6bfdg/image/upload/v1660844362/ae8uua8crvwoss4tugvo.jpg",
        status: "passive",
        email: "john@gmail.com",
        age: 28,
    },
    {
        id: 4,
        username: "Herry piter",
        img: "https://res.cloudinary.com/do6p6bfdg/image/upload/v1658763170/cld-sample.jpg",
        status: "active",
        email: "herry@gmail.com",
        age: 40,
    },
    {
        id: 5,
        username: "Ankur Mishra",
        img: "https://res.cloudinary.com/do6p6bfdg/image/upload/v1658763143/sample.jpg",
        status: "pending",
        email: "ankur@gmail.com",
        age: 25,
    },
]