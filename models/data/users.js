import User from "../User.js";
import 'dotenv/config.js'
import '../../config/database.js'

let users = [
    {   
        name: "lucas",
        mail: "avenidasiempreviva@hotmail.com.ar",
        password: "1234",
    }
]

User.insertMany(users)