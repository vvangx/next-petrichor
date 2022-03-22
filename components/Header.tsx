import Logo from './icons/Logo';
import MenuIcon from './MenuIcon';
import Link from 'next/link';
import { useStore } from '../context';

export default function Header() {
	const { isActive, toggle } = useStore();
	const handleClick = () => toggle();
	return (
		<header className="sticky top-0 z-20 bg-white px-4 lg:relative lg:px-5">
			<div className="my-[25px] flex w-full items-center justify-between">
				<Link href="/">
					<a className="h-[15px] sm:h-[16px] lg:h-[17px]">
						<Logo />
					</a>
				</Link>
				<button onClick={handleClick}>
					<span className="inline-block h-5 w-5 lg:hidden">
						<MenuIcon active={isActive} lineWidth={1.5} />
					</span>
					<span className="hidden text-xs hover:underline hover:underline-offset-4 lg:inline">
						{isActive ? '关闭' : '菜单'}
					</span>
				</button>
			</div>
		</header>
	);
}
