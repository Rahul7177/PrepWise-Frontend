import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { auth } from '../firebase';
import '../stylesheets/MyAccount.css';

const MyAccount = () => {
    const { currentUser } = useAuth();
    const [newPassword, setNewPassword] = useState('');

    const updatePassword = async () => {
        try {
            await auth.currentUser.updatePassword(newPassword);
            alert('Password updated successfully');
            setNewPassword('');
        } catch (error) {
            alert(`Error: ${error.message}`);
        }
    };

    return (
        <div className="account-container">
            <h2>My Account</h2>
            {currentUser ? (
                <div className="account-details">
                    <p><strong>Email:</strong> {currentUser.email}</p>
                    <p><strong>Display Name:</strong> {currentUser.displayName || 'N/A'}</p>
                    <div className="update-password">
                        <h3>Change Password</h3>
                        <input
                            type="password"
                            placeholder="New Password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                        <button onClick={updatePassword}>Update Password</button>
                    </div>
                </div>
            ) : (
                <p>Please log in to view your account details.</p>
            )}
        </div>
    );
};

export default MyAccount;
