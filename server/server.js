import express from "express";
import { getUser } from "./userStore.ts";




const app = express();

// Middleware to parse JSON bodies
app.use(express.json());
// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

app.post("/login", (req, res)=>{
    console.log(req.body)
    const {email, password} = req.body
    const user = getUser(email)
    if(!user){
        res.status(401).json({ error: "User not found" });
    }
    res.status(200).json(user);
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
