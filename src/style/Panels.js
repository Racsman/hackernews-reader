import styled from 'styled-components';

export const PanelContainer = styled.section`
	margin-top: 7.5rem;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    position: absolute;
    z-index: 1;
    display: block;
    overflow: hidden;
    -webkit-overflow-scrolling: touch;
    will-change: scroll-position;
    contain: size style layout;
	display: flex;
	flex-direction: row;
`;

export const Panel = styled.div`
	width: 50%;
	overflow-y:scroll;
	scrollbar-width: thin;
	&.panel-right {
		overflow:hidden;
	}
	iframe {
		border: none;
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
`;