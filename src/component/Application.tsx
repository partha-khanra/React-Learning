import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Li from './Li';
import Registration from './Registration';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import NavBar from './Navbar';
import Editdata from './Editdata';
import Thankyou from './Thankyou';

export interface IApplicationProps { }

const Application: React.FunctionComponent<IApplicationProps> = (props) => {
    return (
        <div >
            <BrowserRouter>
                <NavBar />
                <Routes>

                    <Route path='/' element={<Registration />} />
                    <Route path='/list' element={<Li />} />
                    <Route path='/editdata/:id' element={<Editdata />} />
                    <Route path='/thankyou' element={<Thankyou />} />
                </Routes>
            </BrowserRouter>
        </div>)
}
export default Application;