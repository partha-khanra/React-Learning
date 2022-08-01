import axios from 'axios';
import React, { useState, useEffect, ChangeEvent } from 'react'
import { useParams, useNavigate } from "react-router-dom";
import ITutorialData from '../service/Tutorial';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import TutorialDataService from "../service/TutorialService";
// import { useHistory } from 'react-router-dom';

const Editdata: React.FC = () => {
    const initialTutorialState = {
        id: null,
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        confirm_password: '',
        state: '',
        address: '',
        dp: '',
        cv: '',
        dob: '',
        gender: '',
        qualification: '',
        selected: []
    };
    const [currentTutorial, setCurrentTutorial] = useState<ITutorialData>(initialTutorialState);
    const params = useParams();
    const id = params.id;
    const [message, setMessage] = useState<string>("");

    let navigate = useNavigate();
    const handleInputChange = (event: ChangeEvent) => {
        const { name, value } = event.target as HTMLInputElement
        setCurrentTutorial({ ...currentTutorial, [name]: value });
        console.log(currentTutorial)
    };
    const updateTutorial = () => {
        TutorialDataService.update(currentTutorial.id, currentTutorial)
            .then((response: any) => {
                console.log(response.status);
                setMessage("The Registration was updated successfully!");

                window.location.href = "/thankyou"
            })
            .catch((e: Error) => {
                console.log(e);
            });
    };
    const getTutorial = (id: string) => {
        TutorialDataService.get(id)
            .then((response: any) => {
                setCurrentTutorial(response.data);
                console.log(response.data);
            })
            .catch((e: Error) => {
                console.log(e);
            });
    };
    useEffect(() => {
        if (id)
            getTutorial(id);
        console.log("select=>", currentTutorial.selected)
    }, [id]);

    const value = (select: any) => {
        console.log("hello", select)
    }
    return (
        <div>
            <p>{message}</p>
            {/* {currentTutorial.id} */}
            <Form className="col-lg-12" style={{ border: '5px solid #ffcc00', borderRadius: "15px", padding: '10px', fontFamily: 'Robato, sans-serif', fontSize: '18px' }}>
                <div className='row'>

                    <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail" >
                        <Form.Label>Enter First Name</Form.Label>

                        <Form.Control type="text" name="first_name" value={currentTutorial.first_name} onChange={handleInputChange} />
                    </Form.Group>


                    <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                        <Form.Label>Enter Last Name</Form.Label>

                        <Form.Control type="text" name="last_name" value={currentTutorial.last_name} onChange={handleInputChange} />
                    </Form.Group>
                </div>
                <div className='row'>

                    <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                        <Form.Label>Enter Email</Form.Label>

                        <Form.Control type="text" name="email" value={currentTutorial.email} onChange={handleInputChange} />
                    </Form.Group>
                    <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                        <Form.Label>Enter Date Of Birth</Form.Label>

                        <Form.Control type="date" name="dob" value={currentTutorial.dob} onChange={handleInputChange} />
                    </Form.Group>
                </div>
                <div className='row'>

                    <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                        <Form.Label>Enter Password</Form.Label>

                        <Form.Control type="password" name="password" value={currentTutorial.password} onChange={handleInputChange} />
                    </Form.Group>
                    <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                        <Form.Label>Enter confirm password</Form.Label>

                        <Form.Control type="password" name="confirm_password" value={currentTutorial.confirm_password} onChange={handleInputChange} />
                    </Form.Group>
                </div>
                <div className='row'>

                    <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                        <Form.Label>Select City</Form.Label>

                        {/* <Form.Control type="text" name="qualification" value={currentTutorial.qualification} onChange={e => this.setState({ qualification: e.target.value, })} /> */}
                        <select
                            className="form-control"
                            name="state"
                            onChange={handleInputChange}

                        >
                            <option >
                                Select Your City
                            </option>
                            <option value="Kolkata">
                                Kolkata
                            </option>
                            <option value="Mumbai">
                                Mumbai
                            </option>
                            <option value="Pune">
                                Pune
                            </option>
                            <option value="Bangalore">
                                Bangalore
                            </option>
                            <option value="Delhi">
                                Delhi
                            </option>
                            <option value="Chennai">
                                Chennai
                            </option>
                        </select>
                    </Form.Group>
                    <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                        <Form.Label>Enter Address</Form.Label>

                        <Form.Control type="text-area" name="address" value={currentTutorial.address} onChange={handleInputChange} />
                    </Form.Group>
                </div>
                <div className='row'>
                    <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                        <Form.Label>Select Gender</Form.Label>

                        <div className='row' style={{ paddingLeft: '15px' }}>
                            <Form.Check
                                className="col-lg-4"
                                type="radio"
                                name="gender"
                                value="Male"
                                label="Male"
                                checked={currentTutorial.gender === "Male"}
                                onChange={handleInputChange}
                            />
                            <Form.Check
                                type="radio"
                                value="Female"
                                name="gender"
                                className="col-lg-4"
                                label="Female"
                                checked={currentTutorial.gender === "Female"}
                                onChange={handleInputChange}
                            />
                            <Form.Check
                                type="radio"
                                value="Other"
                                className="col-lg-4"
                                label="Other"
                                name="gender"
                                checked={currentTutorial.gender === "Other"}
                                onChange={handleInputChange}
                            />


                        </div>


                    </Form.Group>
                    <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                        <Form.Label>Select Highest Qualification</Form.Label>

                        {/* <Form.Control type="text" name="qualification" value={currentTutorial.qualification} onChange={e => this.setState({ qualification: e.target.value, })} /> */}
                        <select
                            className="form-control"
                            name="qualification"
                            onChange={handleInputChange}

                        >
                            <option >
                                Select Your Highest Qualification
                            </option>
                            <option value="mca">
                                MCA
                            </option>
                            <option value="bca">
                                BCA
                            </option>
                            <option value="mtech">
                                Mtech
                            </option>
                            <option value="btech">
                                Btech
                            </option>
                            <option value="bsc">
                                BSC
                            </option>
                            <option value="msc">
                                MSC
                            </option>
                        </select>
                    </Form.Group>

                </div>
                <div className='row'>
                    <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                        <Form.Label>Select Skills</Form.Label>

                        <div className='row' style={{ paddingLeft: '15px' }}>
                            <label key={id}>
                                <input type="checkbox"
                                ></input>
                                <span>{currentTutorial.selected.filter((name) => name)}</span>

                            </label>


                        </div>
                    </Form.Group>
                    <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                        <Form.Label>Upload Profile picture</Form.Label>

                        <Form.Control type="file" name="dp" onChange={handleInputChange} />
                    </Form.Group>
                </div>
                <div className='row'>
                    <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                        <Form.Label>Upload Your Cv</Form.Label>

                        <Form.Control type="file" name="cv" onChange={handleInputChange} />
                    </Form.Group>
                </div>
                <Button type="submit" onClick={updateTutorial}>Submit</Button>
            </Form >
        </div>
    )
}
export default Editdata