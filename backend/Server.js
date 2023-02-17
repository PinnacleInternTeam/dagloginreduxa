// const express=require("express");
// const mysql=require("mysql");
// const cors=require("cors");

// const app=express();
// app.use(express.json());
// app.use(cors());

// const con=mysql.createConnection({
//     user:"root",
//     host:"localhost",
//     password:"",
//     database:"dag_user"
// })
// app.post('/register', (req, res) => {
  
//     const username = req.body.username;
//     const password = req.body.password;
//     const usergroup = req.body.usergroup;

//     con.query("INSERT INTO users ( username, password,usergroup) VALUES (?, ?, ?)", [ username, password,usergroup], 
//         (err, result) => {
//             if(result){
//                 console.log(result)
               
//                 res.send(result);
//             }else{
//                 res.send({message: "error "})
//             }
//         }
//     )
// })

// app.listen(5000, () => {
//     console.log("running backend server at port 5000");
// })
        

const express=require("express");
const mysql=require("mysql");
const cors=require("cors");

const app=express();
app.use(express.json());
app.use(cors());

const con=mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"",
    database:"dag_user"
})
app.post('/register', (req, res) => {
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;

    con.query("INSERT INTO user_login( email,username, Password) VALUES (?, ?, ?)", [email, username, password], 
        (err, result) => {
            if(result){
                console.log(result)
               
                res.send(result);
            }else{
                res.send({message: "error "})
            }
        }
    )
})
app.post('/login', (req, res) => {
   
    const username = req.body.username;
    const password = req.body.password;
    console.log("backend")

    con.query(" SELECT * FROM user_login WHERE  username= ? AND Password= ? ", [ username, password], 
        (err, result) => {
            if(result){
                console.log(result)
               
                res.send(result);
            }else{
                res.send({message: "error "})
            }
        }
    )
})

app.listen(5000, () => {
    console.log("running backend server at port 5000");
})
        





