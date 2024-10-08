import React from "react";
const Teacher = ({teacher}) => {
    return (
        <tr key={teacher.id}>
            <td>{teacher.id}</td>
            <td>{teacher.name}</td>
            <td>{teacher.field}</td>
            <td>{teacher.mapel}</td>
            <td>{teacher.rating}</td>
            <td>
                <button className="btn btn-primary">Edit</button>
                <button className="btn btn-danger">Delete</button>
            </td>
        </tr>
    )
}
export default Teacher;