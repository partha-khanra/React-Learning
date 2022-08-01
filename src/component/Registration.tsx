import axios from 'axios';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
class Registration extends React.Component<
    {}, Istate

>
{
    constructor(props: {}) {
        super(props)
        this.state = {
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            confirm_password: "",
            address: "",
            state: "",
            skills: "",
            dp: "",
            cv: "",
            dob: "",
            gender: "",
            qualification: "",
            error: "",
            categories: [
                { id: 1, value: "Angular", isChecked: false },
                { id: 2, value: "React", isChecked: false },
                { id: 3, value: "PHP", isChecked: false },
                { id: 4, value: "Laravel", isChecked: false }
            ],
            selected: [],
        };

    }

    onChange(id: any, value: any) {
        let selected = this.state.selected
        let find = selected.indexOf(id)

        console.log("fined", find)
        if (find > -1) {
            selected.splice(find, 1)
        } else {
            selected.push(value)
        }

        this.setState({ selected })
    }
    handleSubmit(e: any) {
        e.preventDefault();
        // this.setState({ first_name: "" })
        console.log(this.state);
        const data = {
            first_name: this.state.first_name, lastename: this.state.last_name, email: "",
            password: this.state.password,
            confirm_password: this.state.confirm_password,
            address: this.state.address,
            state: this.state.state,
            skills: this.state.skills,
            dp: this.state.dp,
            cv: this.state.cv,
            dob: this.state.dob,
            gender: this.state.gender,
            qualification: this.state.qualification, selected: this.state.selected
        }

        { this.state.first_name.length === 0 ? this.setState({ error: "please input" }) : console.log("successfull") }
        console.log(this.state.error)

        // axios.post(`http://localhost:3001/students`, data)
        //     .then((response: any) => {


        //         console.log(response);
        //         if (response.status === 201) {
        //             window.location.href = "/thankyou"
        //         }
        //     })
    }
    render() {

        return (
            <div className='container'>
                <Form onSubmit={e => this.handleSubmit(e)} className="col-lg-12" style={{ border: '5px solid #ffcc00', borderRadius: "15px", padding: '10px', fontFamily: 'Robato, sans-serif', fontSize: '18px' }}>
                    <div className='row'>

                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail" >
                            <Form.Label>Enter First Name</Form.Label>

                            <Form.Control type="text" name="first_name" value={this.state.first_name} onChange={e => this.setState({ first_name: e.target.value, })} />
                        </Form.Group>


                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                            <Form.Label>Enter Last Name</Form.Label>

                            <Form.Control type="text" name="last_name" value={this.state.last_name} onChange={e => this.setState({ last_name: e.target.value, })} />
                        </Form.Group>
                    </div>
                    <div className='row'>

                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                            <Form.Label>Enter Email</Form.Label>

                            <Form.Control type="text" name="email" value={this.state.email} onChange={e => this.setState({ email: e.target.value, })} />
                        </Form.Group>
                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                            <Form.Label>Enter Date Of Birth</Form.Label>

                            <Form.Control type="date" name="dob" value={this.state.dob} onChange={e => this.setState({ dob: e.target.value, })} />
                        </Form.Group>
                    </div>
                    <div className='row'>

                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                            <Form.Label>Enter Password</Form.Label>

                            <Form.Control type="password" name="password" value={this.state.password} onChange={e => this.setState({ password: e.target.value, })} />
                        </Form.Group>
                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                            <Form.Label>Enter confirm password</Form.Label>

                            <Form.Control type="password" name="confirm_password" value={this.state.confirm_password} onChange={e => this.setState({ confirm_password: e.target.value, })} />
                        </Form.Group>
                    </div>
                    <div className='row'>

                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                            <Form.Label>Select City</Form.Label>

                            {/* <Form.Control type="text" name="qualification" value={this.state.qualification} onChange={e => this.setState({ qualification: e.target.value, })} /> */}
                            <select
                                className="form-control"
                                name="qualification"
                                onChange={e => this.setState({ state: e.target.value, })}

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

                            <Form.Control type="text" name="address" value={this.state.address} onChange={e => this.setState({ address: e.target.value, })} />
                        </Form.Group>
                    </div>
                    <div className='row'>
                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                            <Form.Label>Select Gender</Form.Label>

                            <div className='row' style={{ paddingLeft: '15px' }}>
                                <Form.Check
                                    className="col-lg-4"
                                    type="radio"
                                    value="Male"
                                    label="Male"
                                    checked={this.state.gender === "Male"}
                                    onChange={e => this.setState({ gender: e.target.value, })}
                                />
                                <Form.Check
                                    type="radio"
                                    value="Female"
                                    className="col-lg-4"
                                    label="Female"
                                    checked={this.state.gender === "Female"}
                                    onChange={e => this.setState({ gender: e.target.value, })}
                                />
                                <Form.Check
                                    type="radio"
                                    value="Other"
                                    className="col-lg-4"
                                    label="Other"
                                    checked={this.state.gender === "Other"}
                                    onChange={e => this.setState({ gender: e.target.value, })}
                                />


                            </div>


                        </Form.Group>
                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                            <Form.Label>Select Highest Qualification</Form.Label>

                            {/* <Form.Control type="text" name="qualification" value={this.state.qualification} onChange={e => this.setState({ qualification: e.target.value, })} /> */}
                            <select
                                className="form-control"
                                name="qualification"
                                onChange={e => this.setState({ qualification: e.target.value, })}

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
                        <Form.Group className='mb-3 col-lg-6' controlId="formBasicEmail">
                            <Form.Label>Select Skills</Form.Label> &nbsp;
                            {
                                this.state.categories.map(({ id, value }: any) => {
                                    return (
                                        <label key={id}>
                                            <input type="checkbox" onChange={() => this.onChange(id, value)}
                                            ></input>
                                            <span>{value}</span>
                                        </label>
                                    )
                                })
                            }
                        </Form.Group>

                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                            <Form.Label>Upload Profile picture</Form.Label>

                            <Form.Control type="file" name="dp" value={this.state.dp} onChange={e => this.setState({ dp: e.target.value, })} />
                        </Form.Group>
                    </div>
                    <div className='row'>
                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                            <Form.Label>Upload Your Cv</Form.Label>

                            <Form.Control type="file" name="cv" value={this.state.cv} onChange={e => this.setState({ cv: e.target.value, })} />
                        </Form.Group>

                    </div>
                    <Button type="submit">Submit</Button>
                </Form >
            </div>
        );
    }

}
interface Istate {
    // no props
    first_name: string;
    last_name: string;
    email: string;
    password: number | string;
    confirm_password: number | string;
    state: string;
    address: number | string;
    skills: string;
    dp: string;
    cv: string;
    dob: string;
    gender: string;
    qualification: string;
    categories: Array<{ id: number, value: string, isChecked: boolean }>;
    selected: Array<boolean>;
    error: string
}
export default Registration;