import React from 'react';
import Iframe from 'react-iframe';
import { Story } from './Story';

export const ArticlePreview = ({ articleData }) => {
	let articleDetails = {};
	if (articleData.details) {
		articleDetails = articleData.details;
	}
	if (articleDetails) {
		if (articleData.type === 'details' || !articleDetails.url) {
			return (
				<Story articleDetails={ articleDetails } />
			);
		} else if (articleDetails.url && articleData.type === 'preview') {
			return (
				<Iframe url={ articleDetails.url } width='100%'/>
			);
		} else {
			return (
				<div className='preview-placeholder'>Preview</div>
			);
		}
	} else {
		return (
			<div className='preview-placeholder'>Preview</div>
		);
	}
};


