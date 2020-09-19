import styled from 'styled-components';

export const ArticleWrapper = styled.section`
	margin: .7rem;
	padding:2rem;
	cursor: pointer;
	display: block;
	overflow: hidden;
	border-radius: .3rem;
	box-shadow:
		0 .1rem .1rem 0 rgba(33, 33, 33, 0.08), 
		0 .1rem .3rem .1rem rgba(33, 33, 33, 0.16);
		
	&.active {
		background-color: #f6f5f5;
	}

	&.active,
	:hover {
		box-shadow: 
			0 .1rem .3rem .1rem rgba(33, 33, 33, 0.2), 
			0 .2rem .8rem .4rem rgba(33, 33, 33, 0.1)
	}

	
	> h2 {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
`;

export const ArticleTitle = styled.h2`
	margin-top: 0;
	font-size: 1.8rem;
	color: #222;
`;

export const ArticleDetails = styled.div`
	display: flex;
	flex-direction: row;
	align-content: center;
	justify-content: space-between;
	flex-wrap: wrap;
	color: #717171;
	font-size: 1.2rem;
	
	a, a:hover, a:visited {
		padding-left: 1rem;
		color: #222;
		text-decoration: none;
	}
`;