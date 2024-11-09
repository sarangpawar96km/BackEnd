// require('dotenv').config({path:'./env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})

connectDB()
.then(()=>{
    app.on("Error", (error)=>{
        console.log("ERRR: ",error);
        throw error
    })
    app.listen(process.env.PORT || 3000, ()=>{
        console.log(`Server is running at port: ${process.env.PORT || 3000}`);
    })
})
.catch((err)=>{
    console.log("MongoDB connection failed!!!", err);
})















// import express from "express";
// const app = express();

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("error", (error) => {
//       console.log("ERRR: ", error);
//       throw error;
//     });
//     app.listen(process.env.PORT || 3000, () => {
//       console.log(`App is listening on port: ${process.env.PORT || 3000}`);
//     });
//   } catch (error) {
//     console.log("Error", error);
//     throw error;
//   }
// })();


// async function connectDB() {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error", (error)=>{
//             console.log("ERRR: ",error);
//             throw error
//         })
//         app.listen(process.env.PORT || 3000, ()=>{
//             console.log(`App is listening on port: ${process.env.PORT || 3000}`);
//         })
        
//     } catch (error) {
//         console.log("Error", error);
//         throw error
//     }
    
// }
