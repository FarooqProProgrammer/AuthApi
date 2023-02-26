import React, { useState } from 'react'
import axios from "axios"


export default function Login() {
    const [Email,setEmail] = useState('');
    const [Password,setPassword] = useState('');

    const handleLogin = async(e) =>{
        e.preventDefault()
        await axios.post("http://localhost:3000/Api/login",{
            Email:Email,
            Password:Password
        }).then((res)=>{
            console.log(res.data)
        }).catch((error)=>{
            console.log("Some Error Occur")
        })

    }
    
    return (
        <section className="ftco-section">
            <div className="container" >
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-5">
                        <div className="login-wrap p-4 p-md-5">
                            <div className="icon d-flex align-items-center justify-content-center">
                                <span className="fa fa-user-o"></span>
                            </div>
                            <h3 className="text-center mb-4">Have an account?</h3>
                            <form action="#" className="login-form" onSubmit={handleLogin}>
                                <div className="form-group">
                                    <input type="text" onChange={(e)=> setEmail(e.target.value)} className="form-control rounded-left" placeholder="Username" />
                                </div>
                                <div className="form-group d-flex">
                                    <input type="password" onChange={(e)=> setPassword(e.target.value)} className="form-control rounded-left" placeholder="Password" required />
                                </div>
                                <div className="form-group d-md-flex">
                                    <div className="w-50">
                                        <label className="checkbox-wrap checkbox-primary">Remember Me
                                            <input type="checkbox" checked />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                    <div className="w-50 text-md-right">
                                        <a href="#">Forgot Password</a>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <button  type="submit" className="btn btn-primary rounded submit p-3 px-5">Get Started</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}
