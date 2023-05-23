import React from 'react';
import { useContext } from 'react';
import { Authcontext } from '../../AutheText/AutheText';
import './Login.scss';
import Carousel from 'react-bootstrap/Carousel';
import Slide from '../../assets/Slide.png'
import Slide2 from '../../assets/Slide2.jpg'

const Login = () => {
    const { Login } = useContext(Authcontext)

    const Login_now = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        Login(email, password)
            .then(result => {
                const user = result.user;
            })
            .catch(error => {
                console.log('erorer khaici', error)
            })
    }

    return (
        <div className='loginform'>
            <div className="row vh-100 w-100 align-items-center">
                <div className="col-lg-6">
                    <div className="form">
                        <form onSubmit={Login_now}>
                            <div className="row mb-3">
                                <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                                <div className="col-sm-10">
                                    <input type="email" name='email' className="form-control" id="inputEmail3" />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                                <div className="col-sm-10">
                                    <input type="password" name='password' className="form-control" id="inputPassword3" />
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary">Sign in</button>
                        </form>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="login_side">
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={Slide}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={Slide}
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={Slide2}
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;