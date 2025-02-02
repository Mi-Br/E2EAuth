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
        console.log("User not found")
        return new Response(JSON.stringify({ error: "User not found" }), {
            status: 401,
            headers: {
              "Content-Type": "application/json"
            }
          });
    }
    console.log("Returning user")
    return new Response({'success': true, 'user': user}, {
        status: 200,
        headers: {
          "Content-Type": "application/json"
        }
    });
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
