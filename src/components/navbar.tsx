'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu } from 'lucide-react'
import { Button } from './ui/button'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
  navigationMenuTriggerStyle
} from './ui/navigation-menu'
import {
  SheetContent,
  SheetTrigger,
  Sheet,
  SheetHeader,
  SheetTitle,
  SheetDescription
} from './ui/sheet'

const navItems = [
  { label: 'Inicio', href: '/' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Soluciones', href: '/soluciones' },
  { label: 'Empresa', href: '/empresa' }
]

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className='h-[65px]' />
      <header className='fixed top-0 left-0 z-50 w-full border-b border-black bg-background/80 backdrop-blur-xl supports-backdrop-filter:bg-background/60 mb-16'>
        <div className='container mx-auto max-w-7xl px-4'>
          <nav className='flex h-16 items-center justify-between'>
            {/* Logo */}
            <div className='flex items-center'>
              <Link href='/' className='flex items-center space-x-2'>
                <Image
                  src='/makrosoft.png'
                  alt='Makrosoft'
                  width={40}
                  height={40}
                  className='h-8 w-8 md:h-10 md:w-10 max-h-12 max-w-12'
                />
                <span className='font-bold text-lg md:text-xl'>Makrosoft</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className='hidden md:flex flex-1 items-center justify-center'>
              <NavigationMenu>
                <NavigationMenuList>
                  {navItems.map(item => (
                    <NavigationMenuItem key={item.href}>
                      <NavigationMenuLink
                        asChild
                        className={navigationMenuTriggerStyle()}
                      >
                        <Link href={item.href}>{item.label}</Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Right items desktop */}
            <div className='hidden md:flex justify-center items-center space-x-4'>
              <Link href='/contacto' className='bg-black text-white py-2 px-4 rounded-lg'>
                Contacto
              </Link>
            </div>

            {/* Mobile Navigation */}
            <div className='flex items-center space-x-2 md:hidden'>
              <Link
                href='/contacto'
                className='bg-black text-white py-2 px-4 rounded-lg'
              >
                Contacto
              </Link>
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant='ghost' size='icon'>
                    <Menu className='h-5 w-5' />
                    <span className='sr-only'>Abrir menú</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side='right' className='w-[300px] sm:w-[400px]'>
                  <SheetHeader>
                    <SheetTitle>Navegación</SheetTitle>
                    <SheetDescription>
                      Explora nuestros servicios y productos
                    </SheetDescription>
                  </SheetHeader>
                  <div className='mt-6 px-4 flex flex-col space-y-4'>
                    {navItems.map(item => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className='py-2 font-medium transition-colors hover:text-foreground/80'
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </nav>
        </div>
      </header>
      <div className='h-8' />
    </>
  )
}
