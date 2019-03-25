// configureStore.ts

import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import productSaga from './product/state/sagas';

import counterReducer from './state/reducers/counterReducer';
import cartReducer from './redux-cart/state/cartReducer';
import productReducer from './product/state/productsReducer';

const sagaMiddleware = createSagaMiddleware()


export default function configureStore() {
    const rootReducer = combineReducers({
        counter: counterReducer,
        items: cartReducer,
        productState: productReducer
    });

    console.log('creating store');

    const store = createStore(rootReducer, 
                              applyMiddleware(thunk, sagaMiddleware));

    sagaMiddleware.run(productSaga)

    console.log('store created');

    return store;
}