import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import styled from 'styled-components';

const ErrorMainPage = styled.div`
	text-align: center;
	color: ${({ theme }) => theme.colors.danger};
`;

export default function ErrorPage() {
	const error = useRouteError();

	if (isRouteErrorResponse(error)) {
		return (
			<ErrorMainPage id="error-page">
				<h1>Oops! {error.status}</h1>
				<p>{error.statusText}</p>

				{error.data?.message && (
					<p>
						<i>{error.data.message}</i>
					</p>
				)}
			</ErrorMainPage>
		);
	} else if (error instanceof Error) {
		return (
			<ErrorMainPage id="error-page">
				<h1>Oops! Unexpected Error</h1>
				<p>Something went wrong.</p>
				<p>
					<i>{error.message}</i>
				</p>
			</ErrorMainPage>
		);
	} else {
		return <h1>Don't know the error type</h1>;
	}
}
