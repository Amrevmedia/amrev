import React,{useState} from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import './Note.css'
function Note(props) {
//   function handleChange() {
//     props.onDelete(props.id);
//   }
const [note, setNote] = useState({
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
  return (
    // <div className="messageSender1">
    //   <h1>{props.title}</h1>
    //   <p>{props.content}</p>
    //   <button onClick={handleChange}>
    //     <DeleteIcon />
    //   </button>
    // </div>
    <div className="messageSender1">
    <form>
      <input className="postTxt1"  onChange={handleChange}
        value={props.title}
      />
      <textarea className="postTxtArea1"  onChange={handleChange}
        value={props.content}
      />
    </form>
  </div>
  );
}

export default Note;
