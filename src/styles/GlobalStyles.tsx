import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import RobotoRegular from './fonts/Roboto-Regular.ttf';
import RobotoMedium from './fonts/Roboto-Medium.ttf';
import RobotoBold from './fonts/Roboto-Bold.ttf';

const GlobalStyle = createGlobalStyle`

@font-face {
	font-family: Roboto;
	font-weight: 400;
	src: url(${RobotoRegular}) format('truetype');
}

@font-face {
	font-family: Roboto;
	font-weight: 500;
	src: url(${RobotoMedium}) format('truetype');
}

@font-face {
	font-family: Roboto;
	font-weight: 700;
	src: url(${RobotoBold}) format('truetype');
}

	* {
		${reset}

		box-sizing: border-box;

		font-family: Roboto, sans-serif;
		line-height: 1.5;
		font-weight: 400;

		color: ${({ theme }) => theme.colors.font};

		font-synthesis: none;
		text-rendering: optimizeLegibility;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
`;

export default GlobalStyle;
