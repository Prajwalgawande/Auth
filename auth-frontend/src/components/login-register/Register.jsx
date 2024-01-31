import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        dateOfBirth: "",
        email: '',
        password: '',
    });

    const handleInputChange = (e) => {
        console.log(e.target.value)
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/register', formData);
            // Redirect to login page after successful registration
            if (response.status === 201) {
                toast.success("User Created Successfully!", {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 5000,
                });
                navigate('/login');
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message, {
                position: 'top-right',
                autoClose: 5000
            })
        }
    };
    return (
        <>
            <div className='page'>
                <div class="card">
                    <div class="card2">
                        <form class="form" onSubmit={handleSubmit}>
                            <p id="heading">SIGN UP</p>
                            <i class="fa fa-user-circle-o" aria-hidden="true"></i>
                            <div class="field">
                                <label htmlFor="email">Name: </label>
                                <input
                                    type="text"
                                    class="input-field"
                                    name="name" value={formData.name} onChange={handleInputChange}
                                    placeholder="name"
                                />
                            </div>
                            <div class="field">
                                <label htmlFor="email">DOB: </label>
                                <input
                                    type="date"
                                    class="input-field"
                                    name="dateOfBirth" value={formData.dateOfBirth} onChange={handleInputChange}
                                    placeholder="Date Of birth"
                                />
                            </div>
                            <div class="field">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="text"
                                    class="input-field"
                                    name="email" value={formData.email} onChange={handleInputChange}
                                    placeholder="Email"
                                    autocomplete="off"
                                />
                            </div>
                            <div class="field">
                                <label htmlFor="password">Password</label>
                                <input type="password" class="input-field" placeholder="Password"
                                    name="password" value={formData.password} onChange={handleInputChange}
                                />
                            </div>
                            <div class="btn">
                                <button class="button1" onClick={()=>navigate('/login')}>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Login&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </button>
                                <button class="button2" type='submit'>Sign Up</button>
                            </div>
                            <button class="button3">Forgot Password</button>
                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Register;