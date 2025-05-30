import styles from '@/app/ui/home.module.css'
import { iran_sans } from '@/app/ui/fonts'
import clsx from 'clsx'

import AcmeLogo from '@/app/ui/acme-logo'
import { ArrowLeftIcon } from '@heroicons/react/24/solid'

import Link from 'next/link'
import Image from 'next/image'

export default function Page() {
  return (
    <main className={clsx("rtl:right-0 flex min-h-screen flex-col p-6", iran_sans.className)}>
      <div dir='rtl' className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
         <AcmeLogo />
      </div>
      <div dir='rtl' className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <div
            className={styles.shape}
          />
          
          <p dir='rtl' className={`antialiased text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>به خیر بین بو ئاکمه</strong> {' '}  ئه وه نمونه یکه بو 
            <a href="https://nextjs.org/learn/" className="text-blue-500">
                
            </a>
            , هینراوه ته خزمه تتان به وسیله ی موحه ممد فه تتاحی .
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>ورود</span> <ArrowLeftIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <Image 
              src="/hero-desktop.png"
              width={1000}
              height={760}
              className="hidden md:block"
              alt='Screenshot oh the dashboard projects showing desktop version'
          />

          <Image 
              src="/hero-mobile.png"
              width={560}
              height={620}
              className="block md:hidden"
              alt='Screenshot oh the dashboard projects showing mobile version'
          />
        </div>
      </div>
    </main>
  );
}
