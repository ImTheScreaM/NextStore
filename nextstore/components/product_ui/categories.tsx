import Link from 'next/link'

export const Categories = ({ name }: { name: string }) => {
	return (
		<div className='block'>
			<Link href={`/shop/catalog/${name}}`}>
				<p style={{fontSize:'21px'}} className=''>{name}</p>
			</Link>
		</div>
	)
}
