const express=require('express')
const bodyParser=require('body-parser')
const mongoose=require('mongoose')
const cors=require('cors')
const data=require('./Schema')

const uri="mongodb+srv://vishva:vishva@cluster0.hsm9gsk.mongodb.net/vishvaDB?retryWrites=true&w=majority"
mongoose.connect(uri,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{console.log("db connected")})
.catch((err)=>{console.log("not connected",err)});

const app=express()
app.use(cors({origin:'*'}))
app.use(bodyParser.json())
app.use(express.json());


app.get('/value',async(req,resp)=>{
    console.log('hit ')
    const value = await data.find();
    
    return resp.status(200).json({success:true, data: value})
})

app.post('/user',async(req,resp)=>{
    const value=req.body
    const file={value}
    const doc=new data(file)
    const res = await doc.save()
    console.log(file)
    resp.status(201).json(file);
})



const PORT=4000
app.listen(PORT,()=>{
        console.log("sever is running in",PORT)
})
