import Image from 'next/image'

export default function Img() {
  return (
    <section id='img' className='py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='relative aspect-video w-full overflow-hidden rounded-xl border'>
          <Image
            src='/img/banner.png'
            alt='Banner Makrosoft'
            fill
            className='object-cover'
            priority
          />
        </div>
      </div>
    </section>
  )
}