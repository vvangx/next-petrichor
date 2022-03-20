import { createContext, useContext, useState } from 'react';
import { useBoolean } from './hooks/useBoolean';

const Context = createContext(null);

export default function Wrapper({
	children,
	initialState,
}: {
	children: React.ReactNode;
	initialState?: any;
}) {
	const { bool, toggle } = useBoolean(false);
	return (
		<Context.Provider value={{ isActive: bool, toggle }}>
			{children}
		</Context.Provider>
	);
}

export function useStore() {
	const store = useContext(Context);
	return store;
}
