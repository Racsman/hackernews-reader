import React from 'react';
import {PanelContainer, Panel} from '../style/Panels'

export const SplitPanel = (props) => {
	return(
		<PanelContainer>
			<Panel className='panel-left'>{props.master}</Panel>
			<Panel className='panel-right'>{props.detail}</Panel>
		</PanelContainer>
	);
};