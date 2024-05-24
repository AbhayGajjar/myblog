"use client";
import { link } from 'fs';
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
    {
        herf: "/",
        label: "Home"
    },
    {
        herf: "/posts",
        label: "Posts",
    },
    {
        herf: "/create-post",
        label: "Create Post"
    }
]

const Header = () => {
    const pathname = usePathname();
    return (
        <header className='flex justify-between items-center py-4 px-7 border-b'>
            <Link href={"/"}>
                <Image
                    src="https://bytegrad.com/course-assets/youtube/example-logo.png"
                    alt="Logo"
                    className="w-[35px] h-[35px]"
                    width="35"
                    height="35"
                />
            </Link>
            <nav>
                <ul className='flex gap-x-5 text-[14px]'>
                    {
                        navLinks.map((navLink) => (
                            <li key={navLink.herf}>
                                <Link className={`${pathname === navLink.herf ? 'text-zinc-900 ' : 'text-zinc-400'}`} href={navLink.herf}>
                                    {navLink.label}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </header>
    )
}

export default Header