import React from 'react';
import { Link } from 'react-router-dom';

export default function Employee() {
    return (
        <div className="Auth-form-container">
        <form className="Auth-form">
            <div className="Auth-form-content">
                <h3 className="Auth-form-title">Recover Your Password</h3>
                <div className="form-group mt-3">
                    <label>Email</label>
                    <input
                        type="email"
                        className="form-control mt-1"
                        placeholder="Enter email"
                    />
                </div>
                <div className="d-grid gap-2 mt-3">                       
                    <button formAction="/Employee" type="submit" className="btn btn-primary">
                        Submit
                    </button>                       
                </div>
            </div>
        </form>
    </div>
    );
}