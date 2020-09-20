import React, {useEffect, useState} from 'react';
import {Article} from './Article';
import {InfiniteScroll} from '../hooks/InfiniteScroll';
import {getArticleIds} from '../services/readerAxios';

export const ArticleList = ({ reloadList, onClick }) => {
	const {articleNumber} = InfiniteScroll();
	const [articleIds, setArticleIds] = useState([]);

	const retrieveTutorials = () => {
		getArticleIds()
			.then(article => setArticleIds(article.data));
	};

	useEffect(() => {
		retrieveTutorials();
	}, []);

	const [article, updateArticles] = useState(true);

	if (reloadList && article) {
		reloadList = false;
		updateArticles(false);
		retrieveTutorials();
	}

	return (
		<>
			{articleIds.slice(0, articleNumber).map(articleId => (
				<Article articleId={articleId} onClick={onClick} key={articleId}/>
			))}
		</>
	);
};