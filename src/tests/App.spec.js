import React from 'react';
import {act} from 'react-dom/test-utils';
import {render, cleanup, waitForElement} from '@testing-library/react'
import {App} from '../App';
import {dummyArticleIds, dummyArticle} from '../testdata';
import {getArticle, getArticleIds} from '../services/readerAxios';
import {InfiniteScroll} from '../hooks/InfiniteScroll';
import {PAGE_ARTICLES} from '../constants';

beforeEach(cleanup);

jest.mock('../hooks/InfiniteScroll');
jest.mock('../services/readerAxios', () => ({
	getArticle: jest.fn(),
	getArticleIds: jest.fn()
}))

test('works', async() => {
	InfiniteScroll.mockImplementation(() => ({
		articleNumber: PAGE_ARTICLES
	}));
	getArticle.mockImplementation(() => Promise.resolve(dummyArticle));
	getArticleIds.mockImplementation(() => Promise.resolve(dummyArticleIds));

	const {getByText, queryByTestId} = render(<App />);
	await waitForElement(() => [
		expect(getByText('Title')).toBeTruthy(),
		expect(getByText('A good ol Test Title')).toBeTruthy(),
		expect(queryByTestId('article-author').textContent).toEqual('author'),
	]);

})