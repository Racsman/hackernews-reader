import React, {useEffect, useState} from 'react';
import {Comments} from './Comments';
import {FormatTimestampTimeAgo} from '../util/FormatTimestampTimeAgo';
import {getArticle} from '../services/readerAxios';
import {createMarkup} from '../util/createMarkup';
import {ReactComponent as IconOpenExternal} from '../icons/open.svg';

export const Story = ({ articleDetails }) => {
	const [articleCommentsList, updateArticleCommentsList] = useState([]);

	useEffect(() => {
		let mainObject = [],
			promises = [];
		let array = articleDetails.kids ? articleDetails.kids : [];
		array.forEach(function (singleElement) {
			promises.push(getArticle(singleElement));
		});
		Promise.all(promises).then(function (results) {
			results.forEach((response) => {
				mainObject.push(response.data);
			});

			return mainObject;
		}).then(values => updateArticleCommentsList(values));
	}, [articleDetails]);

	return (
		<>
			<div className='preview-article'>
				<div className='preview-current'>
					<a href={articleDetails.url} target='blank' rel='external nofollow'>
						<h2>{articleDetails.title}</h2>
					</a>
					<div className='preview-details'>
						<div>
							{`${articleDetails.score}
						  ${parseInt(articleDetails.score) === 1 ? 'point' : 'points'}`
							} by {articleDetails.by} posted {FormatTimestampTimeAgo(articleDetails.time)}
						</div>
						<div>
							{`${articleDetails.descendants} ${parseInt(articleDetails.descendants) === 1 ? 'comment' : 'comments'}`}
						</div>
					</div>
					<div className='preview-text' dangerouslySetInnerHTML={createMarkup(articleDetails.text)} />
				</div>
				<div className='preview-comments'>
					<ul>
						{articleCommentsList.map(commentDetails => (
							<Comments commentDetails={commentDetails} />
						))}
					</ul>
				</div>
			</div>
		</>
	);
};