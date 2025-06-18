import '@/components/assets/css/header.css'
import '@/components/assets/css/section.css'

export default function Header() {
	return (
		<div className='header_container flex justify-around items-center'>
			<article>
				<a href='/'>Return to Home</a>
			</article>

			<article>
				<input placeholder='Search...' />
			</article>
		</div>
	)
}
