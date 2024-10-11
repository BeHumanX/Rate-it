import React, { useEffect, useState } from "react";
import Teacher from "./Teacher";
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

const AdminDashboard = () => {
    const [teachers, setTeachers] = useState([]);
    const webSocketChannel = `teacher`;
    const connectWebSocket = () => {
        window.Echo.channel(webSocketChannel).listen("GotRating", async (e) => {
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
        <div className="max-w-md mx-auto p-4 pt-6 md:p-6 lg:p-12">
          <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/3 xl:w-1/3 p-4">
              <div className="bg-white rounded shadow-md p-4">
                <h5 className="text-lg font-bold mb-2">Total Teachers</h5>
                <p className="text-gray-600">10</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 xl:w-1/3 p-4">
              <div className="bg-white rounded shadow-md p-4">
                <h5 className="text-lg font-bold mb-2">Total Students</h5>
                <p className="text-gray-600">50</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 xl:w-1/3 p-4">
              <div className="bg-white rounded shadow-md p-4">
                <h5 className="text-lg font-bold mb-2">Total Courses</h5>
                <p className="text-gray-600">20</p>
              </div>
            </div>
          </div>
          <br />
          <div className="flex flex-wrap -mx-4">
            <div className="w-full p-4">
              <div className="bg-white rounded shadow-md p-4">
                <h5 className="text-lg font-bold mb-2">Teachers</h5>
                <table className="w-full text-md bg-white shadow-md rounded">
                  <thead>
                    <tr>
                      <th className="text-left p-2">ID</th>
                      <th className="text-left p-2">Name</th>
                      <th className="text-left p-2">Field</th>
                      <th className="text-left p-2">Mapel</th>
                      <th className="text-left p-2">Rating</th>
                      <th className="text-left p-2">Actions</th>
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
          <br />
          <div className="flex flex-wrap -mx-4">
            <div className="w-full p-4">
              <div className="bg-white rounded shadow-md p-4">
                <h5 className="text-lg font-bold mb-2">Recent Activity</h5>
                <ul>
                  <li>Teacher added a new course</li>
                  <li>Student enrolled in a course</li>
                  <li>Teacher updated a course</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
};

export default AdminDashboard;
