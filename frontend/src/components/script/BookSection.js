import React from "react";
import '../style/BookSection.css';
import {Link} from 'react-router-dom';


const BookSection=({data})=>{

  const deleteBook=async(id)=>{
        let result = await fetch(`/api/v1/delete/${id}`, 
        {method :'Delete'})
        result = await result.json();

        if(result){
          alert('Book Deleted');
        }
  };


  const updateBook=async(id)=>{
        // let result = await fetch(`http://localhost:6000/api/v1/update/${id}`,
        // {method:'Put',
        // body:JSON.stringify({data})}
        // )
      };

     
  return (
      <div className='d-flex justify-content-around align-items-center flex-wrap'>
          {data && data.map((item,index)=>(
          <div className='content-center'>
            <div className='book-card d-flex justify-content-center align-items-center flex-column '>
                <div className='test'>
                  <img className='image-card' src={item.image} alt='No-image' />
                  <div className='description d-flex justify-content-center align-items-center flex-column'><p>{item.description}</p></div>
                </div>
              
                <br/>
                <div style={{backgroundColor:'rgb(0, 0, 77)',width:'218px',height:'30px',color:'white'}}>
                  <div className='book-name d-flex justify-content-around align-items-center'>
                      <h5 style={{margin:'2px'}}>{item.bookname.slice(0,19)}..</h5>
                  </div>
                </div>

                <p className='price'>Rs.{item.price}</p>
              
                  <div style={{}}>
                      <Link to={`/update/${item._id}`}><button className='update' style={{margin:'2px', width:'100px'}} onClick={()=>updateBook(item._id)}>UPDATE</button></Link>
                      <button className='del'style={{margin:'2px',width:'100px'}} onClick={()=>deleteBook(item._id)}>Delete</button>
                </div>
            </div>
            
          </div>
        ))}
    </div>
  )
};

export default BookSection;
