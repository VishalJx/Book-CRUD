import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
import '../style/Add.css';

function Add(){

 const[Data, setData] = useState({bookname:"", author:"", description:"", image:"", price:""}); //passing initial state of form i.e. empty form

 const navigate=useNavigate();

 const change =(e)=>{
    const {name, value} = e.target;  // The target property returns the element that triggered the event
    /*Destructuring
    let name = e.target.name;
    let value = e.target.value;
    */
    setData({...Data,[name]:value});//Updating the value of Data variable by first copying the initial empty array using spread operator and then assigning each element with values(in place of null value).
 }; 
 const submit = async(e)=>{
  e.preventDefault();
    await axios.post('/api/v1/add',Data).then((resp)=>alert(resp.data.message));
    setData({bookname:"", author:"", description:"", image:"", price:""});
    navigate('/books')
  };
 console.log(Data);

  return (
  <div className='title bg-dark'>
    <form className='form-title container'>
    <h1 style={{color:'grey'}}>Add Book</h1>
      <div className='text-field'>
          <div className="mb-3">
            <label className="form-label text-white" >Book Name</label>
            <input type="text"  className="form-control" id="book-name-input" placeholder="Enter The Book Name" name='bookname' defaultValue={Data.bookname} onChange={change}/>
          </div>

          <div className="mb-3">
            <label className="form-label text-white" >Author Name</label>
            <input type="text" className="form-control" id="book-name-input" placeholder="Enter The Author Name" name='author' defaultValue={Data.author} onChange={change}/>
          </div>

          <div className="mb-3">
            <label className="form-label text-white" >Description</label>
            <input type="text" className="form-control" id="book-name-input" placeholder="Enter The Description" name='description' defaultValue={Data.description} onChange={change}/>
          </div>

          <div className="mb-3">
            <label className="form-label text-white" >Image URL</label>
            <input type="text" className="form-control" id="book-name-input" placeholder="Google the book's image and copy-paste the URL here" name='image' defaultValue={Data.image} onChange={change}/>
          </div>

          <div className="mb-3">
            <label className="form-label text-white" >Price</label>
            <input type="number" className="form-control" id="book-name-input" placeholder="Enter The Book Price (in Rs)" name='price' defaultValue={Data.price} onChange={change}/>
          </div>
      </div>

        <button type="submit" className="viewBook" onClick={submit}>Submit</button>
    </form>
  </div>
  )
};

export default Add;
