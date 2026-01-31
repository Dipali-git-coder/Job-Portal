import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div>
        <nav className="flex items-center justify-between p-6 bg-gray-800">
                <Link href={"/"} className='font-bold text-3xl'>Job Listing Portal</Link>
            <div className="text-white font-bold text-xl gap-8 flex-row flex items-center">
                <Link href={"/"}>Home</Link>
                <Link href={"/about"}>About</Link>
                <Link href={"/contact"}>Contact</Link>
                <button 
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                href={"/signup"}
                >sign up</button>
                <button 
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                href={"/signin"}
                >sign in</button>
            </div>
        </nav>
    </div>
  )
}
