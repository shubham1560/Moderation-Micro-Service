const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');


const app = express();
app.use(bodyParser.json());


app.post("/events", (req, res) =>{
    commentData = req.body;
    commentData.data.status = "rejected";
    // console.log(commentData.data);
    axios.post('http://localhost:4005/events', {
        "type": "CommentModerated",
        "data": commentData,
    })
})

app.listen(4003, ()=>{
    console.log("moderation listening at port 4003");
})
