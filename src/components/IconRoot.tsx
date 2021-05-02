import React from 'react';

const rootStyle = { position: 'relative', userSelect: 'none' };

const IconRoot: React.FC<{
	height: number;
	width: number;
	viewBox: string;
	style: any;
	children: any;
}> = ({ height = 16, width = 16, viewBox, children, style, ...rest }) => {
	const composedStyle = { ...rootStyle, ...style };

	return (
		<svg
			viewBox={viewBox}
			width={width}
			height={height}
			style={composedStyle}
			{...rest}
		>
			{children}
		</svg>
	);
};

export default IconRoot;
