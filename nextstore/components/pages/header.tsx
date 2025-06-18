import '@/components/assets/css/header.css'
import '@/components/assets/css/section.css'

import Link from 'next/link'


export default function Header() {
	return (
		<div className='header_container flex justify-around '>
			<article className='header-return p-1'>
				<Link href='/'>Return to Home</Link>
			</article>

			<article className='header-search p-1'>
				<input placeholder='Search...' />
			</article>
			<div className='header-interf flex flex-row gap-12'>
				<Link href={`/`}>
					<img src='https://img.icons8.com/parakeet-line/48/gender-neutral-user.png' />
				</Link>
				<Link href={`/`}>
					<img src='/img/basket.png' alt='' />
				</Link>
			</div>
		</div>
	)
}
