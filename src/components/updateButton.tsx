'use client'
import { useState } from 'react';
import { updateSingleUser } from '@/lib/api/updateSingleUser';
import { Popup } from './popup';
import '../app/globals.css';

interface Props {
    user_id: string;
    in_building: boolean;
}

export const UpdateButton: React.FC<Props> = ({ user_id, in_building }) => {
    const [showPopup, setShowPopup] = useState<boolean>(true);

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

    {showPopup && (<Popup in_building={in_building}/>)}

    </div>
);
};
