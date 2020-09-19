import React from 'react';
import Iframe from 'react-iframe';

export const ArticlePreview = ({ articleUrl }) => {
	if (articleUrl) {
		return (
			<Iframe url={ articleUrl } width='100%'/>
		);
	} else {
		return (
			<div className='preview-placeholder'>Preview</div>
		);
	}
};
