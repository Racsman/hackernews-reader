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

	const [refreshTrigger, refreshList] = React.useState(false)
	const handleRefreshClick = () => {
		refreshList('ceva test');
	};

	const [incarca, updateloadingInProgress] = React.useState(false)
	const loadingInProgress = () => {
		updateloadingInProgress(true);
	};

	return(
		<>
			<Navbar triggerReload={handleRefreshClick} loadingInProgress={loadingInProgress}/>
			<SplitPanel
				master={
					<ArticleList reloadList={refreshTrigger}  test={incarca} onClick={handleArticleClick} />
				}
	            detail={
		            <ArticlePreview articleUrl={articleUrl} />
	            } />
		</>
	);
};