import {React,useEffect,useState} from 'react';
import {Link} from "react-router-dom";
import {Button }  from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function View() {
  return (
    <>
    <Table >
        <TableHead >
          <TableRow className='thead'>
            <TableCell>ID</TableCell>
            <TableCell>Meeting Room Name &No.</TableCell>
            <TableCell>Picture of Furniture</TableCell>
            <TableCell>Picture of Ceiling</TableCell>
            <TableCell>Ceiling Material Type</TableCell>
            <TableCell>Ceiling Height</TableCell>
            <TableCell>Room Dimension Of Each Floor</TableCell>
            <TableCell>Pendent Light Present </TableCell>
            <TableCell>Pendent Light Type </TableCell>
            <TableCell>Pendent Linght Distance</TableCell>
            <TableCell>Comments</TableCell>
          </TableRow>
        </TableHead>
        {/* <TableBody>
          {
            
             <TableRow>
               <TableCell>{cricketer.id}</TableCell>
               <TableCell>{cricketer.name}</TableCell>
               <TableCell>{cricketer.username}</TableCell>
               <TableCell>{cricketer.email}</TableCell>
               <TableCell>{cricketer.phone}</TableCell>
               <TableCell>
                 <Button variant="contained" color="primary" style={{marginRight:10}} LinkComponent={Link} to={`/edit/${cricketer.id}`} >Edit</Button>
                 <Button variant="contained" color="secondary" >Delete</Button>
               </TableCell>
             </TableRow>
            
          }
        </TableBody> */}
      </Table>
    </>
  )
}

export default View


