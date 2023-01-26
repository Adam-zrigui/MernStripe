import mongoose from "mongoose";
mongoose.set('strictQuery', true)
const db =async () => {
    try {
        mongoose.connect(process.env.MONGO_URI)
        console.log("connection got finished")
    } catch (error) {
console.error(error)        
    }
}
export default db;