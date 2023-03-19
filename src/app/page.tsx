import { Inter } from 'next/font/google'
import Countdown from '@/components/countdown'

import {TITLE} from '@/constants/keywords'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className=''>
      <div className='p-4 w-full h-screen flex flex-col lg:flex-row items-center justify-center'>
      <h1 className='text-6xl md:text-8xl font-black text-center'>
        {TITLE}
      </h1>
      <Countdown />
      </div>
    </main>
  )
}
