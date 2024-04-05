'use client';
import clsx from "clsx";
import Link from "next/link";
import { logout } from "@/actions";
import { useSession } from "next-auth/react";
import { useUIStore } from "@/components/store";
import { HiOutlineXMark, HiMagnifyingGlass, HiMiniUserCircle, HiMiniTag, HiArrowRightOnRectangle, HiArrowLeftOnRectangle } from "react-icons/hi2";

export const SideMenu = () => {
    const isSideMenuOpen = useUIStore(state => state.isSideMenuOpen);
    const closeMenu = useUIStore(state => state.closeSideMenu);

    const { data: session } = useSession();
    const isAuthenticated = !!session?.user;
    const isAdmin = session?.user.role === "admin";

    return (
        <div>
            {isSideMenuOpen && (
                <div
                    className="fixed top-0 left-0 w-screen h-screen bg-slate-400 opacity-30 z-10"
                />
            )}

            {isSideMenuOpen && (
                <div
                    className="fade-in fixed top-0 left-0 w-screen h-screen backdrop-filter backdrop-blur-sm z-10"
                />
            )}


            <nav className={
                clsx(
                    "fixed p-5 top-0 right-0 w-[500px] h-screen bg-white shadow-2xl z-20 transform transition-all duration-300",
                    {
                        'translate-x-full': !isSideMenuOpen
                    }
                )
            }>
                <HiOutlineXMark
                    size={30}
                    className='absolute top-5 right-5 cursor-pointer text-black hover:text-slate-400 transition-all duration-300'
                    onClick={() => closeMenu()}
                />

                <div className="relative mt-14">
                    <HiMagnifyingGlass size={20} className="absolute top-2 left-2 text-black" />
                    <input type="text" placeholder="Buscar" className="w-full bg-gray-50 rounded pl-10 py-1 pr-10 border-b-2 text-black text-xl border-gray-200 focus:outline-none focus:border-blue-500" />
                </div>

                {isAuthenticated && (
                    <>
                        <Link href="/profile" className="flex text-black items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
                            onClick={() => closeMenu()}
                        >
                            <HiMiniUserCircle size={30} />
                            <span className="ml-3 text-xl">Perfil</span>
                        </Link>

                        <Link href="/orders" className="flex text-black items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
                            onClick={() => closeMenu()}
                        >
                            <HiMiniTag size={30} />
                            <span className="ml-3 text-xl">Ordenes</span>
                        </Link>
                    </>
                )}

                {isAuthenticated && (
                    <button className="flex text-black items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
                        onClick={() => logout()}
                    >
                        <HiArrowLeftOnRectangle size={30} />
                        <span className="ml-3 text-xl">Logout</span>
                    </button>
                )}

                {!isAuthenticated && (
                    <Link href="/auth/login" className="flex text-black items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
                        onClick={() => closeMenu()}
                    >
                        <HiArrowRightOnRectangle size={30} />
                        <span className="ml-3 text-xl">Iniciar Sesión</span>
                    </Link>
                )}

                {isAdmin && (
                    <>
                        <div className="w-full h-px bg-gray-200 my-10" />

                        <Link href="/" className="flex text-black items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
                            onClick={() => closeMenu()}
                        >
                            <HiArrowLeftOnRectangle size={30} />
                            <span className="ml-3 text-xl">Productos</span>
                        </Link>

                        <Link href="/" className="flex text-black items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all">
                            <HiArrowLeftOnRectangle size={30} />
                            <span className="ml-3 text-xl">Ordenes</span>
                        </Link>

                        <Link href="/" className="flex text-black items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all">
                            <HiArrowLeftOnRectangle size={30} />
                            <span className="ml-3 text-xl">Usuarios</span>
                        </Link>
                    </>
                )}
            </nav>
        </div>
    )
}
