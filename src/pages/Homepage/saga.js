/* eslint-disable no-unused-vars */
import { call, put, takeLatest } from 'redux-saga/effects'
import { GET_ALL_POST, CREATE_POST, SEARCH_POST } from './constants';
import { getAllPost, createPost, searchPost } from '../../domain/api';
import { setAllPost, setNewPost, setSearchPost } from './actions';

export function* doGetAllPost() {
    try {
        const response = yield call(getAllPost);
        yield put(setAllPost(response));
    } catch (error) {
        console.log(error, '<<< ERROR');
    }
}

export function* doCreatePost({ post }) {
    try {
        const response = yield call(createPost, post);
        yield put(setNewPost(response));
        const posts = yield call(getAllPost);
        yield put(setAllPost(posts));
    } catch (error) {
        console.log(error, '<<< ERROR');
    }
}

export function* doSearchPosts(action) {
    try {
        const query = action.query
        const response = yield call(searchPost, query)

        if(response) {
            yield put(setSearchPost(response));
        }
        // const searchResult = response.posts.filter((post) =>
        //     post.title.toLowerCase().includes(query.toLowerCase())
        // )
        // yield put(setSearchPost(searchResult));
    } catch (error) {
        console.log(error, '<<< ERROR');
    }
}

export default function* homeSaga() {
    yield takeLatest(GET_ALL_POST, doGetAllPost);
    yield takeLatest(CREATE_POST, doCreatePost);
    yield takeLatest(SEARCH_POST, doSearchPosts);
}