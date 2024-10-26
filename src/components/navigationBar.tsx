import Link from 'next/link';
import Image from 'next/image';
import '../app/globals.css'

export const NavBar: React.FC = () => {
    return (
    <div className="Navbar-Container">
        <Link href='/'>
            <Image src="/Tax_assist_logo.svg" alt="Tax Assist Logo" width={200} height={50} />
        </Link>
        <div className='Navbar-lowerbanner'/>
    </div>
    );};