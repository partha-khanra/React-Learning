import axios from 'axios';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
class From extends React.Component<
    {}, Istate

>
{
    constructor(props: {}) {
        super(props)
        this.state = {
            first_name: "",
            last_name: "",
            age: "",
            dob: "",
            gender: "",
            qualification: ""

        };

    }

    handleSubmit(e: any) {
        e.preventDefault();
        // this.setState({ first_name: "" })
        console.log(this.state);
        axios.post(`http://localhost:3001/students`, this.state)
    }
    render() {

        return (
            <div className='container'>
                <Form onSubmit={e => this.handleSubmit(e)} className="lg-6">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Enter First Name</Form.Label>

                        <Form.Control type="text" name="first_name" value={this.state.first_name} onChange={e => this.setState({ first_name: e.target.value, })} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Enter Last Name</Form.Label>

                        <Form.Control type="text" name="last_name" value={this.state.last_name} onChange={e => this.setState({ last_name: e.target.value, })} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Enter Age</Form.Label>

                        <Form.Control type="number" name="age" value={this.state.age} onChange={e => this.setState({ age: e.target.value, })} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Enter Date Of Birth</Form.Label>

                        <Form.Control type="date" name="dob" value={this.state.dob} onChange={e => this.setState({ dob: e.target.value, })} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Select Gender</Form.Label>

                        <div>
                            <Form.Check
                                type="radio"
                                value="Male"
                                label="Male"
                                checked={this.state.gender === "Male"}
                                onChange={e => this.setState({ gender: e.target.value, })}
                            />
                            <Form.Check
                                type="radio"
                                value="Female"
                                label="Female"
                                checked={this.state.gender === "Female"}
                                onChange={e => this.setState({ gender: e.target.value, })}
                            />
                            <Form.Check
                                type="radio"
                                value="Other"
                                label="Other"
                                checked={this.state.gender === "Other"}
                                onChange={e => this.setState({ gender: e.target.value, })}
                            />


                        </div>

                        {/* <Form.Control type="text" name="gender" value={this.state.gender}  /> */}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
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
    age: number | string;
    dob: string;
    gender: string;
    qualification: string;
}
export default From;