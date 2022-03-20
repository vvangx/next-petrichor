import Helmet from './Helmet';
import Header from './Header';
import MenuPanel from './MenuPanel';
import Wrapper from '../context';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<Wrapper>
			<div className="relative flex min-h-screen flex-col">
				<Helmet />
				<Header />
				<MenuPanel />
				<main className="flex flex-1 flex-col px-4 lg:items-center lg:justify-center">
					{children}
				</main>
				<footer className="flex h-[74px] items-end justify-center text-xs font-light opacity-60 lg:h-[84px]">
					<p className="mb-5">
						Copyright © 2022 PETRICHOR. All rights reserved.
					</p>
				</footer>
			</div>
		</Wrapper>
	);
}
