import Logo from './icons/Logo';
import MenuIcon from './MenuIcon';
import Link from 'next/link';
import { useStore } from '../context';

export default function Header() {
	const { isActive, toggle } = useStore();
	const handleClick = () => toggle();
	return (
		<header className="sticky top-0 z-20 bg-white px-4 lg:relative lg:px-5">
			<div className="mt-[30px] mb-[20px] flex w-full items-center justify-between lg:my-[30px]">
				<Link href="/">
					<a className="h-[15px] pl-0.5 lg:h-[17px]">
						<Logo />
					</a>
				</Link>
				<button className="h-6 w-6 p-0.5 lg:hidden" onClick={handleClick}>
					<MenuIcon active={isActive} lineWidth={1.5} />
				</button>
				<button onClick={handleClick} className="hidden lg:block">
					<span className="text-xs text-slate-900 hover:underline hover:underline-offset-4">
						{isActive ? '关闭' : '菜单'}
					</span>
				</button>
			</div>
		</header>
	);
}
