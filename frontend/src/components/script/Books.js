import React from "react"
import '../style/Books.css';
import axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react';
import BookSection from "./BookSection";


function Books(){
  const [Data, setData] = useState();
  useEffect(()=>{
    const fetch = async()=>{
      await axios
      .get("http://localhost:5000/api/v1/getBooks")
      .then((resp)=>setData(resp.data.books));
    };
    fetch();
  });
  return (
    <div className='Title bg-dark'>
      <div className='d-flex justify-content-center align-items-center py-3'>
          <h4 className='text-white'>Books</h4>  
      </div>
      {Data ? <BookSection data={Data}/> : <div className='text-light'>Loading...</div>}

    </div>
  )
};

export default Books;
