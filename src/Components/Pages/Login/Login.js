import React from 'react';

const Login = () => {

    const Login_now = e => {
        e.preventDefault()
        console.log(e)
    }

    return (
        <div>
            <form onSubmit={Login_now}>
                <div className="row mb-3">
                    <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="email" name='email' className="form-control" id="inputEmail3"/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" name='password' className="form-control" id="inputPassword3"/>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-10 offset-sm-2">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck1"/>
                                <label className="form-check-label" for="gridCheck1">
                                    Example checkbox
                                </label>
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Sign in</button>
            </form>
        </div>
    );
};

export default Login;