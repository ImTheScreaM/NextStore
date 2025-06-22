import Header from '@/components/pages/header'

export default function MainLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<div>
			<Header />
			{children}
		</div>
	)
}
