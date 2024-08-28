import React, { useEffect, useState } from 'react';
import { useAuthContext } from '../Hooks/useAuthContext.js';

const AccountSettings = () => {
    const { user } = useAuthContext();

    const [firstName, setFirstName] = useState(user?.firstName || '');
    const [lastName, setLastName] = useState(user?.lastName || '');
    const [email, setEmail] = useState(user?.email || '');
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleDetailsSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);

        const response = await fetch('http://localhost:5000/api/user/update-details', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`,
            },
            body: JSON.stringify({ firstName, lastName, email }),
        });

        const data = await response.json();
        if (!response.ok) {
            setError(data.error);
        } else {
            setSuccess('Details successfully updated!');
        }
    };

    const handlePasswordSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);

        const response = await fetch('http://localhost:5000/api/user/update-password', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`,
            },
            body: JSON.stringify({ currentPassword, newPassword }),
        });

        const data = await response.json();
        if (!response.ok) {
            setError(data.error);
        } else {
            setSuccess('Password successfully updated!');
        }
    };

    useEffect(() => {

    }, []);

    return (
        <div>
            <h2>Account Settings</h2>
            <form onSubmit={handleDetailsSubmit}>
                <h3>Update Details</h3>
                <label>
                    First Name:
                    <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </label>
                <label>
                    Last Name:
                    <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <button type="submit" className='btn btn-primary btn-dark btn-lg px-4 me-md-2'>Update Details</button>
            </form>

            <form onSubmit={handlePasswordSubmit}>
                <h3>Update Password</h3>
                <label>
                    Current Password:
                    <input
                        type="password"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                    />
                </label>
                <label>
                    New Password:
                    <input
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                </label>
                <button type="submit" className='btn btn-primary btn-dark btn-lg px-4 me-md-2'>Update Password</button>
            </form>

            {error && <div className='error'>{error}</div>}
            {success && <div className='success'>{success}</div>}
        </div>
    );
};

export default AccountSettings;
