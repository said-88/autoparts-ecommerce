'use client';
import Link from "next/link"
import { use, useEffect, useState } from "react";
import { titleFont } from "@/config/fonts"
import { useCartStore, useUIStore } from "@/components/store";
import { HiOutlineMagnifyingGlassCircle, HiOutlineShoppingCart } from "react-icons/hi2"


export const TopMenu = () => {
  const SideMenuOpen = useUIStore(state => state.openSideMenu);
  const totalItems = useCartStore(state => state.getTotalItems());
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, [])

  return (
    <nav className="flex px-5 justify-between items-center w-full">
        <div>
            <Link href="/">
                <span className={`${ titleFont.className} antialiased font-bold text-red-700`}>Auto Repuestos L&M</span>
            </Link>
        </div>

        <div className="hidden sm:block">
          <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100 " href="/category/amortiguadores">Amortiguación</Link>
          <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100 " href="/category/frenos">Frenos</Link>
          <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100 " href="/category/filtros">Filtros</Link>
        </div>

        <div className="flex items-center ">
          <Link href="/search" className="mx-2">
            <HiOutlineMagnifyingGlassCircle className="w-5 h-5"/>
          </Link>

          <Link href="/cart" className="mx-2">
            <div className="relative">
              {
                (loaded && totalItems > 0) && 
                <span className="absolute text-xs rounded-full px-1 font-bold -top-2 -right-2 bg-blue-500 text-white">
                  { totalItems }
                </span>
              }
              <HiOutlineShoppingCart className="w-5 h-5"/>
            </div>
          </Link>

          <button onClick={SideMenuOpen} className="m-2 p-2 rounded-md transition-all hover:bg-gray-200 hover:text-black">
            Menu
          </button>
        </div>
    </nav>
  )
}
