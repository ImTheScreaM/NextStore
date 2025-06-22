'use client'

import '@/components/assets/css/main.css'
import '@/components/assets/css/section.css'

import Link from 'next/link'


export const Main = () => {
	
	return (
		<div>
			Hello it's main 
			<Link href={'/shop'}> to shope </Link>
 		</div>
	)
}
