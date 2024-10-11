import React, { useState,useEffect } from "react";
const Dashboard = () => {
    const [teachers,setTeachers] = useState([]);
    const webSocketChannel = 'teacher';
    const connectWebSocket = () => {
        window.Echo.channel("teach").listen("GotRating", async (e) => {
            console.log(e);
            await teacherAll();
        })
    }
    const teacherAll = async () => {
        try{
            const m = await axios.get("http://localhost:8000/teachers")
            setTeachers(m.data);
        }catch (err){
            console.log(err.message)
        }
    }
    useEffect(()=> {
        teacherAll();
        connectWebSocket();
        return () => {
            window.Echo.leave(webSocketChannel)
        };
    })
    return(
        <>
        </>
    )
}
export default Dashboard;