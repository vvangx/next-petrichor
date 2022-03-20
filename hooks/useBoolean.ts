import { useState } from 'react';

export function useBoolean(initialBoolean: boolean) {
	const [bool, setBool] = useState(initialBoolean);
	const toggle = (boolean: boolean) => {
		if (boolean === undefined) {
			setBool((prevBool) => !prevBool);
		} else {
			setBool(boolean);
		}
	};
	return { bool, toggle };
}
