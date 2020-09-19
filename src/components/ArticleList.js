import React, {useEffect, useState} from 'react';
import {Article} from './Article';
import {InfiniteScroll} from '../hooks/InfiniteScroll';
import {getArticleIds} from '../services/readerAxios';

export const ArticleList = ({ onClick }) => {
	const {articleNumber} = InfiniteScroll();
	const [articleIds, setArticleIds] = useState([]);

	useEffect(() => {
		getArticleIds().then(article => setArticleIds(article.data));
	}, []);

	return (
		<div>
			{articleIds.slice(0, articleNumber).map(articleId => (
				<Article articleId={articleId} onClick={onClick} key={articleId}/>
			))}
		</div>
	);
};