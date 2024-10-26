'use client'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import '../app/globals.css';

interface Props {
    in_building: boolean;
}

export const Popup: React.FC<Props> = ({ in_building }) => {
    const [countdown, setCountdown] = useState<number>(20);
    const router = useRouter();

useEffect(() => {
    if (countdown === 0) {
    router.push('/');
    return;
    }

    const timer = setInterval(() => {
    setCountdown((prev) => prev - 1);
    }, 1000);


    return () => clearInterval(timer);
    }, [countdown, router]);

return (
    <div className="popup-overlay">
        <div className="popup-content">
            <h1>Thank You</h1>
            <p className="sub-title-text">
                Your sign {in_building ? 'out' : 'in'} was successful.
                <br />
                Returning home in {countdown} seconds
            </p>
            <Link href="/" className="Button">
                Home
            </Link>
        </div>
    </div>
);
};