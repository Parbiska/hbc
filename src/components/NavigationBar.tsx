import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;

	box-sizing: border-box;
	width: 100%;
	height: ${({ theme }) => theme.sizes.navigationBar.height};

	padding: 0 16px;

	background: #414141;
`;

const NavigationEl = styled(Link)<{ isActive?: boolean }>`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	width: 40px;
	height: 100%;

	font-size: 10px;
	line-height: 100%;
	letter-spacing: -0.1px;

	color: #${(props) => (props.isActive ? '848484' : '616161')};

	&:after {
		content: '';

		display: block;

		position: absolute;
		top: 50%;
		left: 50%;

		width: 5px;

		transform: translateX(-50%);

		border-radius: 100%;

		animation: 0.3s ease;
	}
`;

const NavigationElImg = styled.div`
	display: flex;
	align-items: center;

	height: 35px;
`;

interface NavigationBarOwnProps {
	activeEl: activeEl;
}

type activeEl = 'home' | 'history' | 'transfers';

export default function NavigationBar({ activeEl }: NavigationBarOwnProps) {
	return (
		<Wrapper>
			<NavigationEl to="/history" isActive={activeEl === 'history'}>
				<NavigationElImg>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="30"
						height="25"
						viewBox="0 0 30 25"
						fill="none"
					>
						<path
							d="M2 7H28.5M28.5 7L22.5 13M28.5 7L22.5 1"
							stroke={
								activeEl === 'history' ? '#848484' : '#616161'
							}
							stroke-width="2"
						/>
						<path
							d="M28.5 18L2 18M2 18L8 12M2 18L8 24"
							stroke={
								activeEl === 'history' ? '#848484' : '#616161'
							}
							stroke-width="2"
						/>
					</svg>
				</NavigationElImg>
				History
			</NavigationEl>

			<NavigationEl to="/home" isActive={activeEl === 'home'}>
				<NavigationElImg>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="28"
						height="33"
						viewBox="0 0 28 35"
						fill="none"
					>
						<path
							d="M1 14.4V34H27V14.4M1 14.4H27M1 14.4L13.4 2L27 14.4"
							stroke={activeEl === 'home' ? '#848484' : '#616161'}
							stroke-width="2"
						/>
					</svg>
				</NavigationElImg>
				Home
			</NavigationEl>

			<NavigationEl to="/transfers" isActive={activeEl === 'transfers'}>
				<NavigationElImg>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="30"
						height="19"
						viewBox="0 0 39 19"
						fill="none"
					>
						<path
							d="M0 9.5H37M37 9.5L28.6226 18M37 9.5L28.6226 1"
							stroke={
								activeEl === 'transfers' ? '#848484' : '#616161'
							}
							stroke-width="2"
						/>
					</svg>
				</NavigationElImg>
				Send
			</NavigationEl>
		</Wrapper>
	);
}
