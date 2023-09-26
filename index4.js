import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));


const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
const logger = function logging(req,res,next){
  console.log("request:", req.method)
  next();
}


app.get("/",(req,res)=>{
  res.sendFile(__dirname+"/public/index.html")
})

app.use(logger)

app.post("/submit",(req,res)=>{
  console.log(req.body);
  let bandname = req.body["street"] + req.body["pet"]
  res.send(`<h1>Your band name is: ${bandname}.`)

})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
