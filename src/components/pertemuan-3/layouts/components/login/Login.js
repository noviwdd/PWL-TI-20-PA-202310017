import React from 'react'
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function Login() {
    const objLogin = {
        username: "",
        password: ""
    }

    const [success, setSuccess] = useState(false);
    const [login, setLogin] = useState(objLogin);

    const handleSubmit = (e) => {
        e.preventDefault();
        const username = login.username;
        const password = login.password;

        if (username === "user" && password === "user123") {
            localStorage.setItem("isLogin", true);
            setSuccess(true);
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Username or Password is wrong',
            })
        }
    }

    return success ? (
        <Navigate to="/home" replace={true} />
    ) : (
        <div className="vh-100 d-flex align-items-center">
            <main className="form-signin w-100">
                <form className="w-50 m-auto" onSubmit={handleSubmit}>
                    <h1 className="h3 mb-3 fw-bold text-center">SIGN IN</h1>

                    <div className="form-floating">
                        <input
                            type="text"
                            className="form-control"
                            id="floatingInput"
                            placeholder="Username"
                            onChange={(e) => setLogin({ ...login, username: e.target.value })}
                        />
                        <label htmlFor="floatingInput">Username</label>
                    </div>
                    <div className="form-floating mt-2">
                        <input
                            type="password"
                            className="form-control"
                            id="floatingPassword"
                            placeholder="Password"
                            onChange={(e) => setLogin({ ...login, password: e.target.value })}
                        />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>

                    <button
                        className="w-100 btn btn-lg btn-primary mt-4 fw-bold"
                        type="submit"
                    >
                        Sign In
                    </button>
                </form>
            </main>
        </div>
    );
}
