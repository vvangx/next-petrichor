import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useStore } from '../context';
import { useMediaQuery } from '../hooks/useMediaQuery';

export default function MenuPanel() {
	const { isActive, toggle } = useStore();
	const router = useRouter();
	const pathname = router.pathname;
	const isDesktop = useMediaQuery('(min-width: 768px)');

	useEffect(() => {
		function handleRouteChange() {
			if (isDesktop) return;
			toggle(false);
		}
		router.events.on('routeChangeComplete', handleRouteChange);
		return () => {
			router.events.off('routeChangeComplete', handleRouteChange);
		};
	}, [router.events, toggle, isDesktop]);

	return (
		<aside
			className={`fixed inset-0 z-10 origin-top bg-white px-4 text-xs transition-transform duration-500 ${
				isActive ? 'scale-y-100 touch-none' : 'scale-y-0 delay-75'
			} lg:inset-auto lg:right-0 lg:px-5`}
		>
			<nav className="mt-[100px] lg:mt-[84px] lg:text-right">
				<ul className="space-y-4 lg:space-y-2">
					<li
						className={`transition-opacity duration-500 ${
							isActive ? 'opacity-100 delay-200' : 'opacity-0'
						}`}
					>
						<NavLink href="/shop">线上店铺</NavLink>
					</li>
					<li
						className={`transition-opacity duration-500 ${
							isActive ? 'opacity-100 delay-[230ms]' : 'opacity-0'
						}`}
					>
						<NavLink href="/about" active={pathname === '/about'}>
							关于 PETRICHOR
						</NavLink>
					</li>
					<li
						className={`transition-opacity duration-500 ${
							isActive ? 'opacity-100 delay-[260ms]' : 'opacity-0'
						}`}
					>
						<NavLink href="/contact" active={pathname === '/contact'}>
							联系我们
						</NavLink>
					</li>
				</ul>
			</nav>
		</aside>
	);
}

function NavLink({
	children,
	href,
	active = false,
}: {
	children: string;
	href: string;
	active?: boolean;
}) {
	const class_list = active
		? 'lg:opacity-60'
		: 'transition-opacity hover:opacity-60';
	return (
		<Link href={href}>
			<a className={class_list}>{children}</a>
		</Link>
	);
}
