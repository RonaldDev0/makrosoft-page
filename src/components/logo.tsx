import Link from 'next/link'
import Image from 'next/image'

export default function Logo() {
  return (
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
  )
}