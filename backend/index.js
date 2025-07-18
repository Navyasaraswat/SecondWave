const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect("mongodb+srv://navya:saraswat@cluster0.gtwcgze.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

// Default route
app.get("/", (req, res) => {
    res.send("Express app is running");
});

// Multer image storage config
const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});

const upload = multer({ storage: storage })

// Static image path
app.use('/images', express.static('upload/images'));

// Upload endpoint
app.post("/upload", upload.single("product"), (req, res) => {
    res.json({
        success: 1,
        image_url: `http://localhost:${port}/images/${req.file.filename}`
    });
});

//schema for creating products
const Product =mongoose.model("Product",{
    id:{
        type:Number,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    category:
    {
        type:String,
        required:true,
    },
    new_price:{
        type:Number,
        required:true
    },
    old_price:{
        type:Number,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now,
    },
    available:{
        type:Boolean,
        default:true,
    },
})
//add product in the database
app.post('/addproduct',async(req,res)=>{
    let products=await Product.find({});
    let id;
    if(products.length>0){
        let last_product_array=products.slice(-1);
        let last_product=last_product_array[0];
        id=last_product.id+1;
    }
    else{
        id=1;
    }
    const product= new Product({
        id:id,
        name:req.body.name,
        image:req.body.image,
        category:req.body.category,
        new_price:req.body.new_price,
        old_price:req.body.old_price,

    });
    console.log(product);
    await product.save()
    console.log("saved");
    res.json({
        success:true,
        name:req.body.name,
    })
})
//remove product from the database
app.post('/removeproduct', async (req, res) => {
    try {
        await Product.findOneAndDelete({ id: req.body.id });
        console.log("Removed");
        res.json({
            success: true,
            name: req.body.name
        });
    } catch (error) {
        console.error("Error removing product:", error.message);
        res.status(500).json({ success: false, error: error.message });
    }
});

//creating api to get all the products
app.get('/allproducts',async(req,res)=>{
let products=await Product.find({});
console.log("all products are fetched");
res.send(products);
})

//schema creating for user model
const Users=mongoose.model('Users',{
    name:{
        type:String,
    },email:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
    },
    cartData:{
        type:Object,
    },date:{
        type:Date,
        default:Date.now
    }
})

//creating end point to create user
app.post('/signup',async(req,res)=>{

    let check=await Users.findOne({email:req.body.email});
    if(check){
        return res.status(400).json({success:false,errors:"existing user found with the same email"})
    }
    let cart ={};
    for(let i=0;i<300;i++){
        cart[i]=0;
    }
    const user=new Users({
        name:req.body.username,
        email:req.body.email,
        password:req.body.password,
        cartData:cart,
    })
    await user.save();

    const data={
        user:{
            id:user.id
        }
    }

const token= jwt.sign(data,'secret_ecom');
res.json({success:true,token})

})

//creating endpoint for user login
app.post('/login',async(req,res)=>{
    let user=await Users.findOne({email:req.body.email});
    if(user){
        const passCompare= req.body.password===user.password;
        if(passCompare){
            const data={
                user:{
                    id:user.id
                }
            }
            const token=jwt.sign(data,'secret_ecom');
            res.json({success:true,token});
        }
        else{
            res.json({success:false,errors:"Wrong Password"});
        }
    }
    else{
        res.json({success:false,errors:"Wrong Email ID"})
    }
})
// creating end point to enter new collection
app.get('/newcollections',async(req,res)=>{
    let products= await Product.find({});
    let newcollection=products.slice(1).slice(-8);
    console.log("new collections fetched");
    res.send(newcollection);
})

// Start server
app.listen(port, (error) => {
    if (!error) {
        console.log("Server Running on " + port);
    } else {
        console.log("ERROR: " + error);
    }
});
