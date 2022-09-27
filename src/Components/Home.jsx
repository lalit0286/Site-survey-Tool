import React, { useState } from "react";
import axios from 'axios'
import { Grid, TextField, Button } from "@mui/material";
import SubCard from "../MaterialUi/SubCard";
import "./Home.css";
function Home() {
  const [furImg, setFurImg] = useState([]);
  const [ceiImg, setCeiImg] = useState([]);




  const initialValue = {
    SiteName:"",
    floorNo: "",
    mrNameNumber: "",
    ceiMatype: "",
    ceiHeight: "",
    lenofPenLight:"",
    roomDim: "",
    radius:"",
    hangDist:"",
    penLigLocFromAdjWall: "",
    comment: "",
  };
  // Use State for for updation
  const [meetingRoom, setMeetingRoom] = useState(initialValue);
  const {
    SiteName,
    floorNo,
    mrNameNumber,
    ceiMatype,
    ceiHeight,
    lenofPenLight,
    radius,
    hangDist,
    roomDim,
    penLigLocFromAdjWall,
    comment,
  } = meetingRoom;

// Function to Submit Form Data
const handleSubmit= (e)=>{
  const url =(`http://127.0.0.1:8000/api/meetingRoom/new/`)
  const finalmeetingRoom ={
  siteName:meetingRoom.SiteName,
  floorNo:meetingRoom.floorNo,
  MrNameAndNo:meetingRoom.mrNameNumber,
  ceilingMatTyp:meetingRoom.ceiMatype,
  CeilingHeight:meetingRoom.ceiHeight,
  lenofPenLight:meetingRoom.lenofPenLight,
  radius:meetingRoom.radius,
  hangDist:meetingRoom.hangDist,
  roomDim:meetingRoom.roomDim,
  distanceFromAdjancent:meetingRoom.penLigLocFromAdjWall,
  comments:meetingRoom.comment
}
const imageData={
  furnitureImg:furImg,
  ceilingImg:ceiImg,
}
console.log(imageData);
const datas = new FormData();
for(const x = 0; x<imageData.length; x++) {
  datas.append('furnitureImg', imageData.furnitureImg[x])
  datas.append('ceilingImg', imageData.ceilingImg[x])
}
console.log(imageData.furnitureImg);

console.log(datas);

    // datas.append("furnitureImg",imageData.furnitureImg);
    // datas.append("ceilingImg", imageData.ceilingImg);
    // console.log(datas);

const meetingRoomOptions={
  Headers:{"content-type":"multipart/form-data"}
}
axios.post(url,finalmeetingRoom,datas,meetingRoomOptions).then((res)=>{
  console.log(res);
})
.catch((err)=>{
  console.log("error while submitting", err);
})
}

  const valueChange = (e) => {
    setMeetingRoom({ ...meetingRoom, [e.target.name]: e.target.value });
    console.log(meetingRoom);
  };

  // Function to upload furniture picture
  const handleFurCapture = (e) => {
    console.log(e.target.files);
    if (e.target.files) {
      const furImgArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );
      // console.log("File Array",furImgArray)
      setFurImg((prevImages) => prevImages.concat(furImgArray));
      Array.from(e.target.files).map((file) => URL.revokeObjectURL(file));
    }
  };

  // Function to upload ceiling Picture
  const handleceiCapture = (e) => {
    console.log(e.target.files);
    if (e.target.files) {
      const ceiImgArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );
      // console.log("Ceiling array", ceiImgArray)
      setCeiImg((prevImages) => prevImages.concat(ceiImgArray));
      Array.from(e.target.files).map((file) => URL.revokeObjectURL(file));
    }
  };

  // Deleting Furniture images
  const delFurImg = (e) => {
    const furniture = furImg.filter((furPhoto, index) => index !== e);
    setFurImg(furniture);
    console.log("deleted");
  };

  // Function for rendering Furniture Images
  const renderFurPhoto = (furSource) => {
    console.log("furSource", furSource);
    return furSource.map((furPhoto, index) => {
      return (
        <>
          <div className="furimg" key={index}>
            <img src={furPhoto} alt="" key={furPhoto} />;
            <div
              className="delete"
              type="button"
              key={index}
              onClick={() => delFurImg(index)}
            >
              x
            </div>
          </div>
        </>
      );
    });
  };
  // Function for deleting Ceiling images
  const delCeiImg = (e) => {
    const ceiling = ceiImg.filter((CeiPhoto, index) => index !== e);
    setCeiImg(ceiling);
    console.log("deleted");
  };
  //  Function for rendering ceiling Images
  const renderCeiPhoto = (CeiSource) => {
    console.log("ceiSource", CeiSource);
    return CeiSource.map((CeiPhoto, index) => {
      return (
        <>
          <div className="furimg" key={index}>
            <img src={CeiPhoto} alt="" key={CeiPhoto} />;
            <div
              className="delete"
              type="button"
              key={index}
              onClick={() => delCeiImg(index)}
            >
              x
            </div>
          </div>
        </>
      );
    });
  };

  // Function and state to render Types of ceiling
  const [type, setType] = useState(0);
  const typeHandler = (type) => {
    setType(type);
  };
  const circularContent = (e) => {
    return (
      <>
        <div className="radius mt-3">
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Radius"
              onChange={(e) => valueChange(e)}
              name="radius"
              value={radius}
            />
          </Grid>
        </div>

        <div className="hangDist mt-3">
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Hanging Distance"
              onChange={(e) => valueChange(e)}
              name="hangDist"
              value={hangDist}
            />
          </Grid>
        </div>
      </>
    );
  };
  // Functiuon
  const LinearContent = (e) => {
    return (
      <>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Length of the Light"
            onChange={(e) => valueChange(e)}
            name="lenofPenLight"
            value={lenofPenLight}
          />
        </Grid>
      </>
    );
  };

  // state for radio buttons whether Ceiling Light is present or not
  const [status, setStatus] = useState(2);
  const radioHandler = (status) => {
    setStatus(status);
  };
  // To render Yes Content For Ceiling Light
  const yesContent = (e) => {
    return (
      <>
        <Grid item xs={12}>
          <div className="pendant_Light">
            <h6>Pendant Light Type</h6>
            <input
              type="radio"
              id="yes"
              name="Condition"
              value="Linear"
              checked={type === 3}
              onChange={(e) => typeHandler(3)}
            />
            <label htmlFor="yes">Linear</label>
            <input
              type="radio"
              id="No"
              name="Condition"
              value="Circular"
              checked={type === 4}
              onChange={(e) => typeHandler(4)}
            />
            <label htmlFor="NO">Circular</label>
          </div>
          {type === 3 && LinearContent()}
          {type === 4 && circularContent()}
        </Grid>
      </>
    );
  };

  return (
    <>
      {" "}
      <form action="" method="post">
      <div className="container mt-5 me-5">
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <SubCard title="Site Survey">
           

                  <div className="siteName mb-3">
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Site Name"
              onChange={(e) => valueChange(e)}
              name="SiteName"
              value={SiteName}
            />
          </Grid>
        </div>
                 
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Floor No."
                    onChange={(e) => valueChange(e)}
                    name="floorNo"
                    value={floorNo}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Meeting Room Name & Number"
                    onChange={(e) => valueChange(e)}
                    name="mrNameNumber"
                    value={mrNameNumber}
                  />
                </Grid>

                {/* Picture of Furniture */}
                <Grid item xs={12}>
                  <div className="img">Picture of Furniture</div>

                  <Button variant="contained" component="label">
                    Upload
                    <input
                      hidden
                      accept="image/*"
                      id="icon-button-file"
                      multiple
                      type="file"
                      capture="environment"
                      onChange={handleFurCapture}
                    />
                  </Button>
                  <div className="result">{renderFurPhoto(furImg)}</div>
                </Grid>

                {/* Picture of Ceiling */}
                <Grid item xs={12}>
                  <div className="img">Picture of Ceiling</div>
                  <Button variant="contained" component="label">
                    Upload
                    <input
                      hidden
                      accept="image/*"
                      id="icon-button-file"
                      multiple
                      type="file"
                      capture="environment"
                      onChange={handleceiCapture}
                    />
                  </Button>
                  <div className="result">{renderCeiPhoto(ceiImg)}</div>
                </Grid>

                {/* Ceiling Material Type */}

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Ceiling Material Type"
                    onChange={(e) => valueChange(e)}
                    name="ceiMatype"
                    value={ceiMatype}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Ceiling Height"
                    onChange={(e) => valueChange(e)}
                    name="ceiHeight"
                    value={ceiHeight}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Room Dimension of each Floor"
                    onChange={(e) => valueChange(e)}
                    name="roomDim"
                    value={roomDim}
                  />
                </Grid>

                <Grid item xs={12}>
                  <>
                    <div className="pendant">
                      <h6>Is Pendant Light Present </h6>
                      <label htmlFor="yes-radio">Yes</label>
                      <input
                        type="radio"
                        name="Light"
                        checked={status === 1}
                        onChange={(e) => radioHandler(1)}
                      />
                      <label htmlFor="No-radio">No</label>
                      <input
                        type="radio"
                        name="Light"
                        checked={status === 2}
                        onChange={(e) => radioHandler(2)}
                      />
                      {status === 1 && yesContent()}
                    </div>
                  </>

                </Grid>

                {/* For Pendent Light Distance*/}
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Pendent Light Location Distance from two Adjascent wall"
                    onChange={(e) => valueChange(e)}
                    name="penLigLocFromAdjWall"
                    value={penLigLocFromAdjWall}
                  />
                </Grid>
                {/* For Comment */}
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Comments"
                    onChange={(e) => valueChange(e)}
                    name="comment"
                    value={comment}
                  />
                </Grid>

                {/* For Submit Button */}
                <Grid item xs={12}>
                  <Button variant="contained" onClick={(e)=>handleSubmit(e)} >Submit</Button>
                </Grid>
              </Grid>
            </SubCard>
          </Grid>
        </Grid>
      </div>
      </form>
      
    </>
  );
}

export default Home;
