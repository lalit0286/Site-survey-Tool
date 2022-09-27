import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { Grid, TextField, Button } from "@mui/material";

function View() {
const[siteName,setSiteName]=useState("")
const [meetingRooms,setMeetingRooms]=useState([])
const url ="http://127.0.0.1:8000/api/meetingRoomDetail/"
useEffect(()=>{
  getMeetingRoomDetails()
},[])
// to get Meeting Room Details
  const getMeetingRoomDetails=(e)=>{
axios.get(url).then((res)=>{
  console.log(res.data);
  setMeetingRooms(res.data)
  console.log(meetingRooms);
}).catch((err)=>{
  console.log(err);
})
    
  }
 

  return (
    <>
 <div className="hangDist mt-3">
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Site Name"
              onChange={ (event)=>setSiteName(event.target.value)}
              name="hangDist"
              value={siteName}
            />
          </Grid>
        </div>

 <div className="table">
 <table className="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      {/* <th scope="col">Site Name</th> */}
      <th scope="col">Floor No.</th>
      <th scope="col">MR Name and No.</th>
      <th scope="col">Pic of Furniture</th>
      <th scope="col">Pic of Ceiling</th>
      <th scope="col">Material Type</th>
      <th scope="col">Height</th>
      <th scope="col">Length of Light</th>
      <th scope="col">Radius</th>
      <th scope="col">Hanging Distance</th>
      <th scope="col">Room Dimension</th>
      <th scope="col">Pendent Light Location distance</th>
      <th scope="col">Comments</th>

    </tr>
  </thead>
  <tbody>
 {
  meetingRooms.map((item,i)=>{
  return(
    <tr  key={i}>
    <td>{item.id}</td>
    {/* <td>{item.siteName}</td> */}
    <td>{item.floorNo}</td>
    <td>{item.MrNameAndNo}</td>
    <td>{item.furnitureImg}</td>
    <td>{item.ceilingImg}</td>
    <td>{item.ceilingMatTyp}</td>
    <td>{item.CeilingHeight}</td>
    <td>{item.ceilingMatTyp}</td>
    <td>{item.lenofPenLight}</td>
    <td>{item.radius}</td>
    <td>{item.hangDist}</td>
    <td>{item.distanceFromAdjancent}</td>
    <td>{item.comments}</td>
  </tr>
  )
  })
 }

  </tbody>
</table>

 </div>

     
    
    
       </>

  )
}

export default View;


