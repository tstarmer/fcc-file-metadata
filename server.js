/*Requires*/

const express = require('express');
const multer = require('multer');
const upload = multer()

/*Constants*/
const app = express();


app.use("/*",express.static("public"))

// app.get("/api/file-meta/*", function(req,res){
    
//     console.log("get")
//     res.sendFile("index.html")
    
    
// });

app.post("/", upload.single('file'), function(req,res){
    console.log(req.file.size)
    var fileSize = req.file.size;
    var response = {
        size: fileSize
    }
    res.send(response)
})



app.listen(process.env.PORT || 8080, function(){
  console.log('App listening on port ', process.env.PORT);
  
})