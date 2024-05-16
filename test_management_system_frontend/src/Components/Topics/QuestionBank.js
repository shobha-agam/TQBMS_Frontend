import React from 'react'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Button } from '@mui/material';

function QuestionBank() {
    const columns = [
        { id: 'qid', name: 'Question Id' },
        { id: 'topic_id', name: 'Topic Id' },
        { id: 'question', name: 'Question' },
        { id: 'type', name: 'Type' },
        { id: 'difficulty', name: 'Difficulty level' },
        { id: 'estimate_time_to_solve', name: 'Estimate Time To Solve' },
        { id: 'action', name: "Action" }
    ]

    
    return (
        <>
            <div style={{ textAlign: 'center' }}>
                <h1>Question Bank</h1>

                <Paper sx={{ width: '90%', marginLeft: '5%' }}>
                    <TableContainer sx={{ maxHeight: 450 }}>
                        <Table stickyHeader>
                            <TableHead>
                                <TableRow>
                                    {columns.map((column) => (
                                        <TableCell style={{ backgroundColor: 'black', color: 'white' }} key={column.id}>{column.name}</TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>

                            <TableBody>

                                <TableRow>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>

                                    <TableCell>
                                        <Button variant="outlined" size='small' color='primary' sx={{ margin: '2px' }}>
                                            Read
                                        </Button>
                                    </TableCell>

                                </TableRow>

                            </TableBody>
                        </Table>
                    </TableContainer>
                    {/* <TablePagination
            rowsPerPageOptions={[10, 25]}
            rowsPerPage={rowperpage}
            page={page}
            count={rows.length}
            component="div"
            onPageChange={handlechangepage}
            onRowsPerPageChange={handleRowsPerPage}>

          </TablePagination> */}
                </Paper>
            </div>
        </>
    )
}
export default QuestionBank;
