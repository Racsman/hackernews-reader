import React, {useEffect, useState} from 'react';
import {Article} from './Article';
import {InfiniteScroll} from '../hooks/InfiniteScroll';
import {getArticleIds} from '../services/readerAxios';

export const ArticleList = ({ reloadList, onClick, loadingList, articleListType }) => {
	const {articleNumber} = InfiniteScroll();
	const [articleIds, setArticleIds] = useState([]);
	const [article, updateArticles] = useState(true);

	const retrieveArticles = (articleListType) => {
		getArticleIds(articleListType)
			.then(article => setArticleIds(article.data));
	};
	useEffect(() => retrieveArticles(articleListType), [articleListType]);
	useEffect(() => loadingList(true), [articleIds, articleNumber]);

	if (reloadList && article) {
		updateArticles(false);
		retrieveArticles(articleListType);
	}

	return (
		<>
			{articleIds.slice(0, articleNumber).map(articleId => (
				<Article articleId={articleId}
				         articleNumber={parseInt(Object.keys(articleIds).find(_i => articleIds[_i] === articleId)) + 1}
				         onClick={onClick}
				         key={articleId}
				/>
			))}
		</>
	);
};