'use client'
import { useState, useEffect } from 'react';
import '../app/globals.css';
import { updateSingleUser } from '@/lib/api/updateSingleUser';

interface Props {
    user_id: string;
    in_building: boolean;
}

export const UpdateButton: React.FC<Props> = ({ user_id, in_building }) => {
    const [showPopup, setShowPopup] = useState(false);


useEffect(() => {
    if (showPopup) {
    const timer = setTimeout(() => {
        setShowPopup(false);
    }, 3000);
    return () => clearTimeout(timer);
    }
    }, [showPopup]);

const changeSigninStatus = async () => {
    try {
        await updateSingleUser(user_id, !in_building);
        setShowPopup(true);
    } catch (error) {
    console.error('Error updating status:', error);

    }
    };

    return (
    <div className="relative">
    <div
        onClick={changeSigninStatus}
        className="Button"
    >
    {in_building ? 'Sign Out' : 'Sign in'}
    </div>

    {showPopup && (
        <div className="popup-overlay">
        <div className="popup-content">
        <p>Thank you - your sign {in_building ? 'out' : 'in'} was successful.</p>
        </div>
        </div>
    )}

    </div>
);
};
