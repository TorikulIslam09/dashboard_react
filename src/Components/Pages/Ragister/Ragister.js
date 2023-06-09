import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {Authcontext} from '../../AutheText/AutheText';
import './Ragister.scss'

const Ragister = () => {
    const [succesregister, setRagister] = useState(null)
    const {Ragister} = useContext(Authcontext)
    const navigat = useNavigate()
    const RagisterNow = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const fname = form.fname.value;
        const lname = form.lname.value;
        Ragister(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setRagister('ragister succes')
                navigat('/login/')
            })
            .catch(error => {
                console.log('erorer khaici', error)
                setRagister('ragister ivalid')
            })
    }


    // const updateusername = (fname) => {
    //     const profile = {
    //         displayName:fname
    //     }
    //     Updateprifile(profile)
    // }



    return (
        <div>
        <div className='ragister-form'>
          
          <div className="row vh-100 w-100 align-items-center">
          
              <div className="ragister">
              <h1>Please Login Now</h1>
                  <div className="form">
                      <form onSubmit={RagisterNow}>
                          <div className="row mb-3">
                              <label for="inputEmail3" className="col-sm-2 col-form-label">First Name</label>
                              <div className="col-sm-10">
                                  <input type="text" name='fname' className="form-control" id="inputEmail3" />
                              </div>
                          </div>
                          <div className="row mb-3">
                              <label for="inputEmail3" className="col-sm-2 col-form-label">Last Name</label>
                              <div className="col-sm-10">
                                  <input type="text" name='lname' className="form-control" id="inputEmail3" />
                              </div>
                          </div>
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
                          <p> already have an account <Link to="/login">Login Now</Link> </p>
                          <button type="submit" className="btn btn-primary">Login Now</button>
                        
                      </form>
                  </div>
              </div>
        
          </div>
      </div>
        </div>
    );
};

export default Ragister;