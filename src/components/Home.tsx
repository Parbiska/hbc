import styled from 'styled-components';
import NavigationBar from './NavigationBar';

const HomeContainer = styled.div`
	min-height: calc(100% - ${({ theme }) => theme.sizes.navigationBar.height});
`;

export default function Home() {
	return (
		<>
			<HomeContainer></HomeContainer>
			<NavigationBar activeEl="home" />
		</>
	);
}
