import React, { useEffect, useState } from "react";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import './Topic.css'
import { Link } from "react-router-dom";
import axios from "axios";
import { Button } from "@mui/material";
import ModeEditOutlineRoundedIcon from '@mui/icons-material/ModeEditOutlineRounded';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';

function Topic() {
  const columns = [
    { id: 'qid', name: 'Topic ID' },
    { id: 'topic_id', name: 'Topic Name' },
    { id: 'description', name: 'Description' },
    { id: 'created_date', name: 'Created Date' },
    { id: 'created_by', name: 'Created By' },
    { id: 'updated_date', name: 'Updated Date' },
    { id: 'updated_by', name: "Updated By" },
    { id: 'update', name: 'Update Topic' },
    { id: 'delete', name: 'Delete' },
    { id: 'Access', name: 'Access' }
  ]
  const [data, setData] = useState([]);
  const token = localStorage.getItem('token');

  // useEffect(() => {
  //   const fetchTopics = async () => {
  //     try {
  //       const response = await axios.get("http://127.0.0.1:8000/topiclist", {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });
  //       setData(response.data);
  //     } catch (error) {
  //       console.error("Error fetching topics:", error);
  //     }
  //   };

  //   fetchTopics();
  // }, [token]);

  const [topics, setTopics] = useState([]);

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/topiclist", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("topic list=", response.data)
        setTopics(response.data);
      } catch (error) {
        console.error('Error fetching topics:', error);
      }
    };

    fetchTopics();
  }, []);

  // Filter topics based on ownership
  const userTopics = topics.filter(topic => topic.created_by.user_email === localStorage.getItem('user_email')); // Assuming you store user email in local storage


 
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1>  Topic <span style={{ color: "rgb(162, 89, 32)" }}>Details</span></h1>
        <div style={{ textAlign: 'right', marginRight: '5%' }}>
          <Link to='/addtopic'>
            <button class="button-30" role="button"><span style={{ color: "#efb165" }}>Add Topic</span></button>
          </Link>
        </div>
        <Paper sx={{ width: '90%', marginLeft: '5%' }}>

          <TableContainer sx={{ maxHeight: 450 }}>
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell style={{
                      backgroundColor: 'rgb(161, 164, 166)', color: 'black',
                      fontWeight: 'bold'
                    }} key={column.id}>{column.name}</TableCell>
                  ))}
                </TableRow>
              </TableHead>

              <TableBody>
                {userTopics.map((item) => (

                  <TableRow>
                    <TableCell>{item.id}</TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.description}</TableCell>
                    <TableCell>{item.created_date}</TableCell>
                    <TableCell>{item.created_by.user_email}</TableCell>
                    <TableCell>{item.updated_date}</TableCell>
                    <TableCell>{item.updated_by ? item.updated_by.user_email : '-'}</TableCell>
                    <TableCell>
                      <Link to={`/edittopic/${item.id}`}>< ModeEditOutlineRoundedIcon color="success" /></Link>
                    </TableCell>
                    <TableCell>
                      <Link to={`/deletetopic/${item.id}`}>
                        <DeleteForeverRoundedIcon color="error" /></Link>
                    </TableCell>
                    <TableCell>
                     <Link to={`/provideaccess/${item.id}`}> <button> Provide access</button></Link>
                    </TableCell>
                    {/* <TableCell><select>{users.map((user) => (<option value={user.user_email}>         
                       {user.user_email}           </option>))}
                       </select>
                      <select>
                        <option >Editor</option>
                        <option >Viewer</option>
                        </select>

                       </TableCell> */}

                  </TableRow>
                ))}

              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </div>
    </>

  );
}

export default Topic;