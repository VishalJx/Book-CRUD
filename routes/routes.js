const router = require('express').Router();
const { get } = require('mongoose');
const booksModel = require('../models/booksModel');
const bookModel = require('../models/booksModel');


//GET
router.get('/getBooks', async(req,resp)=>{
    let books;
    try{
        books = await booksModel.find(); //in array format.
        resp.status(200).json({books})
    }catch(error){
        console.log('Error in GET');
    }
});

//GET by id
router.get('/getBooks/:id', async(req,resp)=>{
    let books;
    const id = req.params.id;
    try{
        books =await bookModel.findById(id);
        resp.status(200).json({books});
    }catch(error){
        console.log('Error in GET by ID');
    }
});

//POST
router.post('/add', async(req,resp)=>{
    try{
        const data = req.body;
        const newBook = new booksModel(data);
        await newBook.save().then(()=>{
            resp.status(200).json({message:"Book added successfully"});
        });    //to store data in DB and .then() gives surity that data is stored.
    }catch(error){
        console.log('Error in POST');
    }
});

//UPDATE by id
router.put('/update/:id', async(req,resp)=>{
    const id = req.params.id;
    const {bookname, description, author, image, price} = req.body; //Destructuring of incoming data into respective variables.
    let book;
    /*Above code can also be written as:
    const bookname = req.body.bookname;
    etc, etc....
    */
    try{
        book = await booksModel.findByIdAndUpdate(id,{bookname, description, author, image, price})
        await book.save().then(()=>{
        resp.status(200).json({message:`Data of ${id} updated successfully.`});
        });
    }catch(error){
        console.log('Error in PUT');
    }
});

//DELETE by id
router.delete('/delete/:id', async(req,resp)=>{
    const id = req.params.id;
    try{
        await booksModel.findByIdAndDelete(id).then(()=>{
        resp.status(200).json({message:`Data of ${id} deleted successfully.`});
        });
    }catch(error){
        console.log('Error in DELETE');
    }
});
module.exports = router;