import React from 'react';

import {Navbar} from '../components/Navbar';
import {SplitPanel} from '../components/SplitPanel';
import {ArticleList} from '../components/ArticleList';
import {ArticlePreview} from '../components/ArticlePreview';

export const ReaderContainer = () => {
	const [articleUrl, setArticleUrl] = React.useState('')

	const handleArticleClick = (articleUrl) => {
		setArticleUrl(articleUrl);
	};

	return(
		<>
			<Navbar />
			<SplitPanel
				master={
					<ArticleList onClick={handleArticleClick} />
				}
	            detail={
		            <ArticlePreview articleUrl={articleUrl} />
	            } />
		</>
	);
};