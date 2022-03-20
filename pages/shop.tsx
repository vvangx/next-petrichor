import { useEffect } from 'react';
import { useMediaQuery } from '../hooks/useMediaQuery';

export default function Shop() {
	const isDesktop = useMediaQuery('(min-width: 768px)');
	useEffect(() => {
		const url = isDesktop
			? 'https://petrichor.taobao.com'
			: 'taobao://shop.m.taobao.com/shop/shop_index.htm?shopId=251463979';
		window.location.href = url;
	}, [isDesktop]);
	return (
		<div>
			<h1>This page is not available</h1>
			<p>
				You are redirecting to <em>petrichor.taobao.com</em>
			</p>
		</div>
	);
}
