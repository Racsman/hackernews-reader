import styled from 'styled-components';

export const ArticleWrapper = styled.section`
	display: block;
	width: 100%;
	padding: 1.2rem;
	margin: .5rem;
	overflow: hidden;
	cursor: pointer;
	border-radius: .3rem;
	box-shadow:
			0 .1rem .1rem 0 rgba(33, 33, 33, .08), 0 .1rem .3rem .1rem rgba(33, 33, 33, .16);

	&.active {
		background-color: #F6F5F5;
	}

	&.active,
	:hover {
		box-shadow:
				0 .1rem .3rem .1rem rgba(33, 33, 33, .2), 0 .2rem .8rem .4rem rgba(33, 33, 33, .1);
	}

	> h2 {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	@media (min-width: 768px) {
		padding: 2rem;
		margin: .7rem 1.4rem;
	}
`;

export const ArticleTitle = styled.h2`
	margin-top: 0;
	font-size: 1.4rem;
	color: #222;
	@media (min-width: 768px) {
		font-size: 1.8rem;
	}
`;

export const ArticleDetails = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-content: center;
	justify-content: space-between;
	font-size: 1rem;
	color: #717171;

	a,
	a:hover,
	a:visited {
		padding-left: 1rem;
		color: #222;
		text-decoration: none;
	}

	@media (min-width: 768px) {
		font-size: 1.2rem;
	}
`;