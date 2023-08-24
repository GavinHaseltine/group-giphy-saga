import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import axios from 'axios';
import { takeLatest, put } from 'redux-saga/effects'

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
      yield takeLatest('SET_SEARCH', getSearchData)
}

const searchReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_SEARCH':
            return action.payload;
        default:
            return state;
    }
}

function* getSearchData(action) {
    const searchData = yield axios.get('/api/favorite')
    console.log('Basket Data:', searchData)

    yield put({type: 'GET_SEARCH', payload: searchData.data})
}

const storeInstance = createStore(
    combineReducers({
        searchReducer
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(rootSaga);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
         <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>
);
