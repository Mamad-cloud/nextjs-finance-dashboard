import { Inter, Lusitana } from 'next/font/google'
import localFont from 'next/font/local'

export const iran_sans = localFont( { src: '../../public/Iranian_sans.ttf'})

export const inter = Inter( { subsets: ['latin']})
export const lusitana = Lusitana( { subsets: ['latin'], weight: ["400", "700"]})