import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import Navitems from './navitems'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <Link href="/">
                <div className=' flex gap-2.5 items-center cursor-pointer'>
                    <Image src="/images/logo.svg" alt="Logo" width={46} height={44} />
                </div>
            </Link>
            <div className="flex items-center gap-8">
                <Navitems></Navitems>
                <p>Sign In</p>
            </div>
        </nav>
    )
}

export default Navbar