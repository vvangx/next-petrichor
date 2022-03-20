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
			className={`fixed inset-0 z-10 origin-top bg-white px-4 text-xs transition-transform duration-500 lg:px-5 ${
				isActive ? 'scale-y-100 touch-none' : 'scale-y-0 delay-75'
			} flex flex-col lg:inset-x-auto lg:right-0`}
		>
			<nav className="mt-[100px] lg:mt-[84px] lg:text-right">
				<ul
					className={`transition-opacity duration-500 ${
						isActive ? 'opacity-100 delay-200' : 'opacity-0'
					} flex flex-col gap-4 lg:gap-2 lg:opacity-100`}
				>
					<li>
						<NavLink href="/shop">线上店铺</NavLink>
					</li>
					<li>
						<NavLink href="/about" active={pathname === '/about'}>
							关于 PETRICHOR
						</NavLink>
					</li>
					<li>
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
		? 'lg:opacity-70'
		: 'transition-opacity hover:opacity-70';
	return (
		<Link href={href}>
			<a className={class_list}>{children}</a>
		</Link>
	);
}
