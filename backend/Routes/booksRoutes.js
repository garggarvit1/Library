const router=require("express").Router();
const bookModel=require("../Models/bookModel");


//post request
router.post('/add',async(req,res)=>{
    try {
        const data=req.body;
        const newBook=new bookModel(data); 
        await newBook.save().then(()=>{
            res.status(200).json({message:"BOOK ADDED SUCCESSFULLY"});
        }); 
    }catch(error){
        console.log(error);
    }
});

//get request
router.get('/getBooks',async(req,res)=>{
    let books;
    try{
       books=await bookModel.find();
    //    console.log(books);
       res.status(200).json({books})
    }catch(error){
        console.log(error);
    }
});

//get request with help id
router.get("/getBooks/:id",async(req,res)=>{
    let book;
    const id=req.params.id;
    try{
        book=await bookModel.findById(id);
        res.status(200).json({book});

    }catch(error){
        console.log(error);
    }
});

//update Books By id
router.put("/updateBook/:id",async (req,res)=>{
    let book;
    const id=req.params.id;
    const {bookname,description,author,image,price}=req.body;
    try{
       book= await bookModel.findByIdAndUpdate(id,{
        bookname,
        description,
        author,
        image,
        price
       });
      book= await book.save().then(()=>res.status(201).json({message:"DATA UPDATED SUCCESSFULLY"}));
    }catch(error){
        console.log(error);
    }
});

//Delete Book by id
router.delete("/deleteBook/:id",async(req,res)=>{
    let book;
    const id=req.params.id;
    try{
        await bookModel.findByIdAndDelete(id)
        .then(()=>{res.status(201).json({message:"Deleted Successsfully"})});
    }catch(error){
        console.log(error);
    }
})


module.exports=router;