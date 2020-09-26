import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import {Navbar} from '../components/Navbar';
import {SplitPanel} from '../components/SplitPanel';
import {ArticleList} from '../components/ArticleList';
import {ArticlePreview} from '../components/ArticlePreview';

export const ReaderContainer = () => {
	const [articleData, setArticleData] = React.useState('');
	const [refreshTrigger, refreshList] = React.useState(false);
	const [isLoading, loadingInProgress] = React.useState(true);

	const handleArticleClick = (articleData) => {
		setArticleData(articleData);
	};
	const handleRefreshClick = () => {
		refreshList(true);
		loadingInProgress(true);
	};
	const loadingList = (articlesLoading) => {
		loadingInProgress(articlesLoading);
	};

	return(
		<Router>
			<Navbar triggerReload={handleRefreshClick} isLoading={isLoading} />
			<SplitPanel
				master={
					<>
						<Route path='/' exact>
							<ArticleList reloadList={refreshTrigger}
							             loadingList={loadingList}
							             onClick={handleArticleClick}
							             articleListType='newstories'
							/>
						</Route>
						<Switch>
							<Route path='/:id' render={({match}) =>
								<ArticleList reloadList={refreshTrigger}
								             loadingList={loadingList}
								             onClick={handleArticleClick}
								             articleListType={match.params.id}
								/>
							} />
						</Switch>
					</>
				}
	            detail={
		            <ArticlePreview articleData={articleData} />
	            } />
		</Router>
	);
};