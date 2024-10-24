'use client'
import { useState } from 'react';
import '../app/globals.css';
import { updateSingleUser } from '@/lib/api/updateSingleUser';

interface Props {
    user_id: string;
    in_building: boolean;
}

export const UpdateButton: React.FC<Props> = ({ user_id, in_building }) => {
    const [statusChanged, setStatusChanged] = useState(false); 

    const changeSigninStatus = async () => {
        try {
            await updateSingleUser(user_id, !in_building);
            setStatusChanged(true);
            //TODO - Add Sucess Message to Pass to Window
        } catch {
            //TODO - Add Error Message to Pass to Window
        } 
    };

    return (
            <div 
                style={{backgroundColor: statusChanged ? 'gray' : 'blue'}}
                onClick={changeSigninStatus}
            >
            {in_building? 'Sign Out' : 'Sign in'}
            </div>



    );
};
