import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword, useSignInWithGoogle, useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { auth } from "../../fireBase.init"
import toast from "react-hot-toast";
import { Button } from "react-bootstrap";


const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [signInWithEmailAndPassword, loading, error] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    const from = location?.state?.from?.pathname || "/";

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(() => {

                navigate(from, { replace: true });
            })
    }

    const SignIn = () => {
        signInWithEmailAndPassword(email, password)
            .then(() => {
                navigate(from, { replace: true });

            })
        if (error) {
            return (
                <div>
                    <p>Error: {error.message}</p>
                </div>
            );
        }
        if (loading) {
            return <p>Loading...</p>;
        }
    }

    const SendPasswordReset = async () => {
        await sendPasswordResetEmail(email);
        toast.success("Reset Password Email Sent!");
    }

    return (

        <div className='container'>
            <div className='bg-light p-2 mx-auto mt-5 w-100'>
                <h3 className='text-primary mb-5 text-center'>Login</h3>
                <div className="mt-5 w-50 mx-auto">
                    <form className="d-flex flex-column">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <Button onClick={() => SignIn()} className='mt-2 w-50 mx-auto' variant="success" type="submit">Login</Button>
                    </form>
                </div>
            </div>
            <p style={{ color: "red" }}>{error?.message}</p>
            <div className='d-flex align-items-center justify-content-between mt-2'>
                <p className='mx-2'>New User? Please<span className='text-primary'><Link to='/register'> Register</Link></span></p>
                <p className='mx-2'>Forget Password?<span className='text-primary'><Button onClick={SendPasswordReset} variant="link">Reset Password</Button></span></p>
            </div>
            <div className='d-flex align-items-center'>
                <div className='border border-1 border-dark w-50 mb-2'></div>
                <p className='mt-1 px-1'>OR</p>
                <div className='border border-1 border-dark w-50 mb-2'></div>
            </div>
            <div className='text-center'>
                <Button onClick={handleGoogleLogin} className='w-50  mb-2' variant='success' type="submit">Sign In with Google</Button>
            </div>
        </div>
    );
};
export default Login;