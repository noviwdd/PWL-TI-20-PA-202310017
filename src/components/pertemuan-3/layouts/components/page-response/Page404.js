import React from 'react'
import { Link } from 'react-router-dom'

export default function Page404() {
    return (
        <div className="vh-100 d-flex align-items-center">
            <main className="form-signin w-100">
                <div className="w-50 m-auto">
                    <div className="mb-3 text-center">
                        <div className="four_zero_four_bg mt-5">
                        </div>
                        <div className="contant_box_404">
                            <h1 className="">
                                404 - Page Not Found
                            </h1>
                            <p>the page you are looking for not available!</p>
                            <Link to="/login" className="btn btn-success fw-bold">Back to Login</Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
