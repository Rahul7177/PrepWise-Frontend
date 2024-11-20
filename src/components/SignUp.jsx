import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';
import '../stylesheets/Auth.css';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const auth = getAuth();
    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();
        if (password.length < 6) {
            setError('Password must be at least 6 characters long.');
            return;
        }

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            navigate('/'); 
        } catch (error) {
            const errorCode = error.code;
            if (errorCode === 'auth/email-already-in-use') {
                setError('This email is already in use.');
            } else if (errorCode === 'auth/invalid-email') {
                setError('Please enter a valid email address.');
            } else {
                setError('An error occurred. Please try again later.');
            }
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <h1>Sign Up</h1>
                {error && <p className="error-message">{error}</p>}
                <form onSubmit={handleSignUp}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit" className="btn primary-btn">Sign Up</button>
                </form>
                <p>
                    Already have an account?{' '}
                    <Link to="/login" className="link">
                        Sign In
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;
