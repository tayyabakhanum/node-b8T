const express= require("express");

const app= express();
const PORT=4000;

app.get("/", (req,res)=>{
    res.send(`welcome to the server from ${PORT} `)
});

const employees=[
     {name:"Tayyaba",
    employee_code:2101},

    {name:"Hasina",
     employee_code:2102},

     {name:"Naseera",
     employee_code: 2103},

     {name:"Bairose",
      employee_code:2104}
]
 
app.get("/users",(req,res)=>{
    res.send({
        data:employees,
        message:"success"
    })
})
app.listen(PORT,()=>{
    console.log(`Server is running ${PORT}`)
});