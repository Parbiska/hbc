import { createHashRouter, Navigate, RouterProvider } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import Home from './components/Home';
import ErrorPage from './components/ErrorPage';
import Auth from './components/Auth';
import { darkTheme } from './styles/theme';

const AppMain = styled.div`
	min-height: 100vh;
	background: #0d1117; // Temporary
`;

const WindowMain = styled.main`
	background: ${({ theme }) => theme.colors.bg};
`;

const TemporaryWrapper = styled.div`
	max-width: 420px;

	margin: 0 auto;
`;

const router = createHashRouter([
	{
		path: '/',
		element: <Navigate to="/home" />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/home',
		element: <Home />,
	},
	{
		path: '/auth',
		element: <Auth />,
	},
]);

function App() {
	return (
		<>
			<ThemeProvider theme={darkTheme}>
				<AppMain>
					<TemporaryWrapper>
						<WindowMain>
							<RouterProvider router={router} />
						</WindowMain>
					</TemporaryWrapper>
				</AppMain>
			</ThemeProvider>
		</>
	);
}

export default App;
