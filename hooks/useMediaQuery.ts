import { useState, useEffect } from 'react';

export function useMediaQuery(query: string) {
	function initialCallback() {
		if (typeof window !== 'undefined') {
			const mql = window.matchMedia(query);
			return mql.matches;
		}
		return false;
	}
	const [matches, setMatches] = useState(initialCallback);
	useEffect(() => {
		const mediaQueryList = window.matchMedia(query);
		const listener = () => setMatches(mediaQueryList.matches);
		mediaQueryList.addEventListener('change', listener);
		return () => mediaQueryList.removeEventListener('change', listener);
	}, [query]);
	return matches;
}
