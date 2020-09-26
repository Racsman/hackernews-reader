import styled from 'styled-components';

export const PanelContainer = styled.section`
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	display: flex;
	flex-direction: column;
	margin-top: 7.5rem;
	overflow: hidden;
	@media (min-width: 768px) {
		flex-direction: row;
	}
`;

export const Panel = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	width: 100%;
	overflow-y: scroll;
	scrollbar-width: thin;
	&.panel-left {
		height: 37%;
	}
	&.panel-right {
		height: 63%;
		overflow: hidden;
		border-top: .2rem solid #FF6D00;
	}
	.preview-placeholder {
		display: block;
		font-size: 6rem;
		font-weight: 700;
		color: #F7F6F6;
		@media (min-width: 768px) {
			font-size: 10rem;
		}
	}
	.preview-article {
		font-size: 1.6rem;
		width: 100%;
		height: 100%;
		overflow: auto;
		.preview-current {
			padding: 3rem;
			a {
				color: #333;
			}
		}
	}
	iframe {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
		overflow: hidden;
		border: none;
	}
	@media (min-width: 768px) {
		width: 50%;
		height: 100%;
		&.panel-left,
		&.panel-right {
			height: 100%;
		}
		&.panel-left {
			border-right: .2rem solid #FF6D00;
		}
		&.panel-right {
			border-top: none;
		}
	}
`;

export const Comment = styled.li`
	border-top: .1rem solid rgba(0, 0, 0 , 0.3);
	padding: 2rem;
	font-size: 1.4rem;
	.comment-meta {
		font-size: 1.2rem;
		color: #717171;
		padding-bottom: 1rem;
	}
`;