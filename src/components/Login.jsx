import React from 'react';
import { auth } from '../firebase'; // Import the initialized auth instance
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';
import '../stylesheets/Auth.css'; // Custom styles

const SignIn = () => {
    const navigate = useNavigate();

    const handleEmailLogin = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/'); // Redirect after successful login
        } catch (error) {
            const errorCode = error.code;
            if (errorCode === 'auth/user-not-found') {
                alert('User not found. Please check your email or sign up.');
            } else if (errorCode === 'auth/wrong-password') {
                alert('Incorrect password. Please try again.');
            } else {
                alert('An error occurred. Please try again.');
            }
        }
    };

    const handleGoogleLogin = async () => {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
            navigate('/'); // Redirect after successful login
        } catch (error) {
            alert('An error occurred with Google Sign-In. Please try again.');
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <h1>Sign In</h1>
                <form onSubmit={handleEmailLogin}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                    />
                    <button type="submit" className="btn primary-btn">
                        Sign In
                    </button>
                </form>
                <button onClick={handleGoogleLogin} className="btn secondary-btn">
                    Sign In with Google
                </button>
                <p>
                    Don't have an account?{' '}
                    <Link to="/signup" className="link">
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignIn;
