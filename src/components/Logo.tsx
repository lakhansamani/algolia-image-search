import React from 'react';
import IconRoot from './IconRoot';

const Logo: React.FC<{ height: number; width: number }> = ({
	height,
	width,
}) => {
	return (
		<IconRoot
			width={width}
			height={height}
			viewBox="0 0 512 512"
			style={{ fill: 'currentColor', stroke: 'currentColor' }}
		>
			<path
				d="m378.871094 374.449219c-3.855469 3.953125-7.835938 7.785156-11.941406 11.480469-3.695313 4.105468-7.527344 8.085937-11.480469 11.941406l95.339843 95.339844c5.859376 5.859374 13.53125 8.789062 21.210938 8.789062 3.199219 0 6.398438-.515625 9.464844-1.535156 3.460937-10.429688 1.046875-22.378906-7.253906-30.675782zm0 0"
				fill="#4dbbeb"
			/>
			<path
				d="m354.21875 396.640625c4.636719-3.648437 9.125-7.472656 13.492188-11.429687 3.957031-4.367188 7.78125-8.855469 11.429687-13.492188l-41.199219-41.199219c-4.042968 4.269531-8.277344 8.347657-12.691406 12.230469-3.878906 4.414062-7.960938 8.648438-12.230469 12.691406zm0 0"
				fill="#fff5cd"
			/>
			<path
				d="m226 11.785156c-92.511719 12.71875-164 92.265625-164 188.214844 0 95.960938 71.503906 175.515625 164.027344 188.21875 31.578125-4.347656 60.710937-16.480469 85.382812-34.398438 16.269532-11.808593 30.601563-26.140624 42.410156-42.410156 22.75-31.320312 36.179688-69.832031 36.179688-111.410156 0-95.949219-71.488281-175.496094-164-188.214844zm0 0"
				fill="#4dbbeb"
			/>
			<path
				d="m200 50c82.710938 0 150 67.289062 150 150s-67.289062 150-150 150-150-67.289062-150-150 67.289062-150 150-150zm0 0"
				fill="#fff"
			/>
			<path
				d="m225 52.09375c-70.851562 11.9375-125 73.714844-125 147.90625s54.148438 135.96875 125 147.90625c70.851562-11.9375 125-73.714844 125-147.90625s-54.148438-135.96875-125-147.90625zm0 0"
				fill="#bee7f4"
			/>
			<path d="m500.28125 443.71875-133.480469-133.480469c21.746094-32.753906 33.199219-70.683593 33.199219-110.238281 0-110.28125-89.71875-200-200-200s-200 89.71875-200 200 89.71875 200 200 200c39.554688 0 77.484375-11.453125 110.238281-33.199219l36.894531 36.894531c.007813.007813.011719.011719.015626.019532l96.570312 96.566406c7.558594 7.558594 17.601562 11.71875 28.28125 11.71875s20.722656-4.160156 28.277344-11.714844c7.558594-7.554687 11.722656-17.597656 11.722656-28.285156s-4.164062-20.730469-11.71875-28.28125zm-173.765625-88.925781c10.351563-8.46875 19.8125-17.929688 28.277344-28.277344l28.371093 28.371094c-8.628906 10.183593-18.09375 19.648437-28.277343 28.277343zm-306.515625-154.792969c0-99.253906 80.746094-180 180-180s180 80.746094 180 180c0 38.175781-11.851562 74.667969-34.273438 105.535156-11.214843 15.453125-24.738281 28.976563-40.191406 40.191406v.003907c-30.867187 22.417969-67.359375 34.269531-105.535156 34.269531-99.253906 0-180-80.746094-180-180zm466.140625 286.140625c-3.78125 3.777344-8.800781 5.859375-14.140625 5.859375s-10.359375-2.082031-14.140625-5.859375l-88.792969-88.796875c10.125-8.691406 19.585938-18.148438 28.277344-28.277344l88.796875 88.796875c3.777344 3.777344 5.859375 8.792969 5.859375 14.136719s-2.082031 10.359375-5.859375 14.140625zm0 0" />
			<path d="m360 200c0-88.226562-71.773438-160-160-160s-160 71.773438-160 160 71.773438 160 160 160 160-71.773438 160-160zm-160 140c-77.195312 0-140-62.804688-140-140s62.804688-140 140-140 140 62.804688 140 140-62.804688 140-140 140zm0 0" />
			<path d="m306.316406 169.996094c5.15625-1.980469 7.730469-7.765625 5.75-12.921875-8.613281-22.414063-23.605468-41.574219-43.363281-55.414063-20.222656-14.171875-43.980469-21.660156-68.703125-21.660156-5.523438 0-10 4.476562-10 10s4.476562 10 10 10c41.097656 0 78.632812 25.816406 93.394531 64.246094 1.53125 3.976562 5.320313 6.417968 9.339844 6.417968 1.191406 0 2.402344-.214843 3.582031-.667968zm0 0" />
			<path d="m310 190c-5.519531 0-10 4.480469-10 10s4.480469 10 10 10 10-4.480469 10-10-4.480469-10-10-10zm0 0" />
		</IconRoot>
	);
};

export default Logo;
