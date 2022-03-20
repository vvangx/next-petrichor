import { CSSProperties } from 'react';

export default function MenuIcon({ active, lineWidth }) {
	const wrapper: CSSProperties = {
		width: '100%',
		height: '100%',
		display: 'block',
		position: 'relative',
	};

	const t: CSSProperties = {
		position: 'absolute',
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		willChange: 'transform',
		transform: active ? 'translateY(0)' : 'translateY(-18%) scaleX(0.9)',
		transition: active
			? 'transform 180ms cubic-bezier(0.04, 0.04, 0.12, 0.96) 0s'
			: 'transform 160ms cubic-bezier(0.52, 0.16, 0.52, 0.84) 100ms',
	};

	const t_i: CSSProperties = {
		width: '100%',
		height: lineWidth,
		borderRadius: 0.5,
		backgroundColor: '#000',
		willChange: 'transform',
		transform: active ? 'rotate(45deg)' : 'rotate(0)',
		transition: active
			? 'transform 300ms cubic-bezier(0.04, 0.04, 0.12, 0.96) 100ms'
			: 'transform 180ms cubic-bezier(0.04, 0.04, 0.12, 0.96) 0s',
	};

	const b: CSSProperties = {
		position: 'absolute',
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		willChange: 'transform',
		transform: active ? 'translateY(0)' : 'translateY(18%) scaleX(0.9)',
		transition: active
			? 'transform 180ms cubic-bezier(0.04, 0.04, 0.12, 0.96) 0s'
			: 'transform 160ms cubic-bezier(0.52, 0.16, 0.52, 0.84) 100ms',
	};

	const b_i: CSSProperties = {
		width: '100%',
		height: lineWidth,
		backgroundColor: '#000',
		borderRadius: 0.5,
		willChange: 'transform',
		transform: active ? 'rotate(-45deg)' : 'rotate(0)',
		transition: active
			? 'transform 300ms cubic-bezier(0.04, 0.04, 0.12, 0.96) 100ms'
			: 'transform 180ms cubic-bezier(0.04, 0.04, 0.12, 0.96) 0s',
	};

	return (
		<span style={wrapper}>
			<span style={t}>
				<span style={t_i} />
			</span>
			<span style={b}>
				<span style={b_i} />
			</span>
		</span>
	);
}
