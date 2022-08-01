import axios from "axios";
import { useState, useEffect } from "react";
import { AppService } from "./app.service";
import Table from 'react-bootstrap/Table'

interface Props {
    id: number;
    rawDateStr: string;
    handleDelete: (id: number) => void;
}

function Li() {
    const [todos, setTodos] = useState([]);
    const [error, setError] = useState({});

    const apppservice = new AppService();

    const getAllUsers = async () => {
        const users = await apppservice.getUsers();
        setTodos(users)
    }

    const url = "http://localhost:3000/";
    function toPrettyDate(rawDateStr: any) {
        const date = new Date(rawDateStr);
        return date.toUTCString().slice(5, 16); // Should really use user-based locale here
    }
    function seperate(Value: any) {
        // for (const [key, value] of Object.entries(Value)) {
        //     console.log(key, value);
        // }

        console.log(Value);

        return <ul>{Value}</ul>
    }

    useEffect(() => {
        getAllUsers()
    }, [])

    const handleDelete = async (id: number) => {
        let url = 'http://localhost:3001/students/' + id
        const res = await axios.delete(url);
        console.log(res.status)
        if (res.status === 200) {
            getAllUsers()
        }
    }
    const dateFormat = require("dateformat");
    return (
        <div className="container-fluid">
            <Table >
                <thead>  <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Pasword</th>
                    <th>State</th>
                    <th>Address</th>
                    <th>Skills</th>
                    <th>Gender</th>
                    <th>Date of Birth</th>
                    <th>User Image</th>
                    <th>CV</th>
                </tr>
                </thead>
                <tbody>
                    {todos.map(({ id, first_name, last_name, email,
                        password,
                        state,
                        address,
                        skills,
                        dp,
                        cv,
                        dob,
                        gender,
                        selected,
                        qualification, }: any) => (
                        <tr>
                            <td>{first_name}</td>
                            <td>{last_name}</td>
                            <td>{email}</td>
                            <td>{password}</td>
                            <td>{state}</td>
                            <td>{address}</td>
                            <td>{selected.join(',')}</td>
                            <td>{gender}</td>
                            <td>{toPrettyDate(dob)}</td>
                            <td><img src={url + dp} /></td>
                            <td>{cv}</td>

                            {/* <td>{selected}</td> */}
                            {/* <td>{typeof (selected)}</td> */}
                            <td><a href={`/editdata/${id}`}>Edit</a></td>
                            <td onClick={() => handleDelete(id)}>Delete</td>
                        </tr>))}
                </tbody>
                {/* <h1 key={id}>{first_name}</h1> */}
            </Table>


        </div>
    )
}
export default Li;