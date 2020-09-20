import React from 'react';

import {Navbar} from '../components/Navbar';
import {SplitPanel} from '../components/SplitPanel';
import {ArticleList} from '../components/ArticleList';
import {ArticlePreview} from '../components/ArticlePreview';

export const ReaderContainer = () => {
	const [articleUrl, setArticleUrl] = React.useState('');
	const [refreshTrigger, refreshList] = React.useState(false);
	const [isLoading, loadingInProgress] = React.useState(true);


	const handleArticleClick = (articleUrl) => {
		setArticleUrl(articleUrl);
	};
	const handleRefreshClick = () => {
		refreshList(true);
		loadingInProgress(true);
	};
	const loadingList = (articlesLoading) => {
		loadingInProgress(articlesLoading);
	};

	return(
		<>
			<Navbar triggerReload={handleRefreshClick} isLoading={isLoading} />
			<SplitPanel
				master={
					<ArticleList reloadList={refreshTrigger} loadingList={loadingList} onClick={handleArticleClick} />
				}
	            detail={
		            <ArticlePreview articleUrl={articleUrl} />
	            } />
		</>
	);
};