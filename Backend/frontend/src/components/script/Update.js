import React, {useEffect, useState} from "react";
import '../style/Update.css';
import {useNavigate,useParams} from 'react-router-dom'
import axios from 'axios'


function Update(){

  const [Dat, setDat] = useState({bookname:"", author:"", description:"", image:"", price:""});
  const {id} = useParams();
  const navigate=useNavigate();

  /*Fetching data from DB using GET by id */
  useEffect(()=>{
    const fetch = async()=>{
      await axios
      .get(`http://localhost:5000/api/v1/getBooks/${id}`)
      .then((resp)=>setDat(resp.data.books));
    };
    fetch();
  },[]);

  const change =(e)=>{
    const {name, value} = e.target;
    setDat({...Dat,[name]:value});
 }; 
 
 const submit = async(e)=>{
  e.preventDefault();
    await axios.put(`http://localhost:5000/api/v1/update/${id}`,Dat).then((resp)=>alert(resp.data.message));
    setDat({bookname:"", author:"", description:"", image:"", price:""});
    navigate('/books')
  };
 console.log(Dat);

  return (
    <div className='update-page'>
        <div style={{height: '91.5vh'}}>
            <div className='title bg-dark'>
                <form className='form-title container'>
                <h1 style={{color:'grey'}}>Update Book</h1>
                  <div className='text-field'>
                      <div className="mb-3">
                        <label className="form-label text-white" >Book Name</label>
                        <input type="text"  className="form-control"   name='bookname'  defaultValue={ Dat.bookname} onChange={change} />
                      </div>

                      <div className="mb-3">
                        <label className="form-label text-white" >Author Name</label>
                        <input type="text" className="form-control"  name='author'   defaultValue={ Dat.author} onChange={change} />
                      </div>

                      <div className="mb-3">
                        <label className="form-label text-white" >Description</label>
                        <input type="text" className="form-control" name='description'  defaultValue={ Dat.description}  onChange={change}/>
                      </div>

                      <div className="mb-3">
                        <label className="form-label text-white" >Image URL</label>
                        <input type="text" className="form-control" name='image'   defaultValue={ Dat.image} onChange={change} />
                      </div>

                      <div className="mb-3">
                        <label className="form-label text-white" >Price</label>
                        <input type="number" className="form-control" name='price'  defaultValue={ Dat.price} onChange={change}  />
                      </div>
                  </div>

                    <button type="submit" className="viewBook" onClick={submit}>Submit</button>
                </form>
             </div>
          </div>
      </div>
  )
};
export default  Update;
