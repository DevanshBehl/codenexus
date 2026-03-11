import express from "express";
import { ENV } from "./lib/env";
const app = express();

app.get("/",(req,res)=>{
    res.status(200).json({
        "message":"server running successfully"
    })
})
app.listen(ENV.port)