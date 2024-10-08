import React, { useEffect, useState } from "react";
import Teacher from "./Teacher";

const AdminDashboard = () => {
    const [teachers, setTeachers] = useState([]);
    const webSocketChannel = `teacher`;
    const connectWebSocket = () => {
        window.Echo.channel("teach").listen("GotRating", async (e) => {
            console.log(e);
            await getTeachers();
        });
    };
    const getTeachers = async () => {
        try {
            const m = await axios.get("http://localhost:8000/teachers");
            setTeachers(m.data);
            console.log(m.data);
        } catch (err) {
            console.log(err.message);
        }
    };
    useEffect(() => {
        getTeachers();
        connectWebSocket();
        return () => {
            window.Echo.leave(webSocketChannel);
        };
    }, []);
    return (
        <div className="dashboard">
            <h1>Dashboard</h1>
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Total Teachers</h5>
                            <p className="card-text">10</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Total Students</h5>
                            <p className="card-text">50</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Total Courses</h5>
                            <p className="card-text">20</p>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Teachers</h5>
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Field</th>
                                        <th>Mapel</th>
                                        <th>Rating</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {teachers?.map((teacher) => (
                                        <Teacher
                                            key={teacher.id}
                                            teacher={teacher}
                                        />
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Recent Activity</h5>
                            <ul>
                                <li>Teacher added a new course</li>
                                <li>Student enrolled in a course</li>
                                <li>Teacher updated a course</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
