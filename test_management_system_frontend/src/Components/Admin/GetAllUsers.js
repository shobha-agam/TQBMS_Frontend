import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, TablePagination, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { fetchUsers } from '../../Redux/Feature/AdminSlices/UsersSlice';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ModeEditOutlineRoundedIcon from '@mui/icons-material/ModeEditOutlineRounded';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import './AddUser.css'


const GetAllUsers = () => {
    const columns = [
        { id: 'id', name: 'User ID' },
        { id: 'user_name', name: 'Name' },
        { id: 'user_email', name: 'Email' },
        // { id: 'user_type', name: 'Role' },
        { id: 'is_active', name: 'Active Status' },
        // { id: 'read', name: 'Read' },
        { id: 'update_user', name: "Edit" },
        // { id: 'user_type', name: 'Change Role' },
        // { id: 'active_status', name: 'Status' },
        { id: 'delete', name: 'Delete' },
    ]

    const dispatch = useDispatch();
    const users = useSelector((state) => state.user.users);
    console.log("all users list  =", users)

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const handlechangepage = (event, newpage) => {
        setPage(newpage);
    };

    const handleRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };


    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            dispatch(fetchUsers(token)); // Dispatch action to fetch users
        }
    }, []);

    return (
        <>
            <div style={{ textAlign: 'center' }}>
                <h1>All <span style={{ color: "#a25920" }}>Users </span>Details</h1>
                <div style={{ textAlign: 'right', marginRight: '3%' }}>
                    <Link to='/adduser'>
                        <button class="button-30" role="button"><span style={{ color: "white" }}>Add User</span></button>
                    </Link>
                </div>
                <Paper sx={{ width: '90%', marginLeft: '5%' }}>

                    {/* {loading && <p>Loading users...</p>}
                        {error && <p>Error: {error}</p>} */}
                    {/* {users.length > 0 && ( */}
                    <>
                        <TableContainer sx={{ maxHeight: 450 }}>
                            <Table stickyHeader>
                                <TableHead>
                                    <TableRow>
                                        {columns.map((column) => (
                                            <TableCell style={{ backgroundColor: 'rgb(161 164 166)', color: 'black' , fontWeight: 'bold'}} key={column.id}>{column.name}</TableCell>
                                        ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {users && users
                                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        .map((row, i) => {
                                            // alert(row.name)
                                            return (
                                                <TableRow key={i}>
                                                    <TableCell>{row.id}</TableCell>
                                                    <TableCell style={{ color: 'blue', textDecoration: 'none' }}>
                                                        <Link to={`/getuserbyid/${row.id}/`} style={{ textDecoration: 'none' }}>{row.user_name}</Link></TableCell>
                                                    <TableCell>{row.user_email}</TableCell>
                                                    {/* <TableCell>{row.user_type}</TableCell>  */}

                                                    <TableCell>{row.is_active === true ? 'True' : 'False'}</TableCell>

                                                    {/* <TableCell>
                                                        <Link to={`/getuserbyid/${row.id}/`}>
                                                            <Button variant='outlined' size='small' color='success' sx={{ margin: '2px' }}>
                                                                View
                                                            </Button>
                                                        </Link>
                                                    </TableCell> */}

                                                    <TableCell>
                                                        <Link to={`/edituser/${row.id}`}>
                                                            <ModeEditOutlineRoundedIcon color="success" />
                                                            {/* <Button variant='outlined' size='small' color='primary' sx={{ margin: '2px' }}>
                                                                Update
                                                            </Button> */}
                                                        </Link>
                                                    </TableCell>

                                                    {/* <TableCell>
                                                        <Link to={`/changeusertype/${row.id}`}>
                                                            <Button variant='outlined' size='small' color="success" sx={{ margin: '2px' }}>
                                                                Change Type
                                                            </Button>
                                                        </Link>
                                                    </TableCell>
                                                    <TableCell>
                                                        <Link to={`/changestatus/${row.id}`}>
                                                            <Button variant='outlined' size='small' color="secondary" sx={{ margin: '2px' }}
                                                            >
                                                                Change Status
                                                            </Button>
                                                        </Link>

                                                    </TableCell> */}
                                                    <TableCell>
                                                        <Link to={`/delete/${row.id}`}>
                                                            <DeleteForeverRoundedIcon color='error' />
                                                            {/* <Button variant='outlined' size='small' color="error" sx={{ margin: '2px' }}
                                                            >
                                                                Delete
                                                            </Button> */}
                                                        </Link>
                                                    </TableCell>
                                                </TableRow>
                                            )
                                        })}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <TablePagination
                            rowsPerPageOptions={[10, 25, 35, 45]}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            // count={users.length}
                            component="div"
                            onPageChange={handlechangepage}
                            onRowsPerPageChange={handleRowsPerPage}
                        />
                    </>
                    {/* )} */}
                </Paper>
                <ToastContainer />
            </div>
        </>
    )
}

export default GetAllUsers;