import React from 'react';
import {createMarkup} from '../util/createMarkup';
import {FormatTimestampTimeAgo} from '../util/FormatTimestampTimeAgo';
import {Comment} from '../style/PanelStyle';

export const Comments = ({ commentDetails }) => {
	if (commentDetails) {
		return(
			<Comment>
				<div className='comment-meta'>
					{commentDetails.by} {FormatTimestampTimeAgo(commentDetails.time)}
				</div>
				<div className='comment-text' dangerouslySetInnerHTML={createMarkup(commentDetails.text)} />
			</Comment>
		);
	} else {
		return(
			<div>No Comments yet</div>
		);
	}
};