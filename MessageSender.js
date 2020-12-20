import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import InsertPhotoOutlinedIcon from '@material-ui/icons/InsertPhotoOutlined';
import axios from 'axios';
import './MessageSender.css';
import {API_BASE_URL} from './constants/apiconstants';
import ImageUploading from "react-images-uploading";
function MessageSender(props) {
  const [images, setImages] = React.useState([]);
  const maxNumber = 1;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    // console.log(imageList, addUpdateIndex);
    console.log(imageList, addUpdateIndex);
    // clearImages(imageList)
    setImages(imageList);
  };
  const [note,setNote] = useState({
    title: "",
    content: ""
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevVal) => {
      return {
        ...prevVal,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    event.preventDefault();
    props.onAdd(note);
    console.log(images)
    var obj=note;
    obj.imageData=images[0].data_url;
    obj.imageName=images[0].file.name;
    obj.imageType=images[0].file.type;
    console.log(obj)
    axios.post(API_BASE_URL+'postfeed', obj)
            .then(function (response) {
              console.log(response);
                if(response.status === 200){
                  setNote({
                    title: "",
                    content: ""
                  });
                } else{
                    console.log("error")
                }
            })
            .catch(function (error) {
                console.log(error);
            });
   
  }
  return (
    <div >
      <div className="messageSender">
        <input className="postTxt"
          onChange={handleChange}
          value={note.title}
          name="title"
          placeholder="Title" 
          autoComplete="off"
        />
        <textarea className="postTxtArea"
          onChange={handleChange}
          value={note.content}
          name="content"
          placeholder="Take a note..."
          rows="3"
          autoComplete="off"
        />
      </div>
      <div className="imageApp">
        <ImageUploading
            multiple
            value={images}
            onChange={onChange}
            maxNumber={maxNumber}
            dataURLKey="data_url"
          >
            {({
              imageList,
              onImageUpload,
            }) => (
              // write your building UI
              <div>
                <button
                  onClick={onImageUpload}
                >
                  <InsertPhotoOutlinedIcon />
                </button>
                {imageList.map((image, index) => (
              <div key={index} className="image-item">{image.file.name}
                {/* <img src={image.file.name} alt="" width="50" height="50" />
                 <div className="image-item__btn-wrapper"></div> */}
              </div>
            ))}                             
            </div>
            )}
        </ImageUploading>
      </div>
        <button onClick={submitNote} className="sendBtn">
          <AddIcon />
        </button>
    </div>
  );
}

export default MessageSender
