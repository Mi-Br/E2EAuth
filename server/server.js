import express from "express";
import { getUser } from "./userStore.ts";




const app = express();

// Middleware to parse JSON bodies
app.use(express.json());
// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

app.post("/login", (req, res)=>{
    const {email, password} = req.body
    const user = getUser(email)
    if(!user){
        console.log("User not found")
        console.log(user)
        res.status(401).json({ error: "User not found" });
        return // make sure to return here so that no other code is executed otherwise server will continue to run
    }
    res.status(200).json(user);
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
