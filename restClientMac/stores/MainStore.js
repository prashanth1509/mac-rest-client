import {applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';

//Reducers
import MainReducer from '../reducers/MainReducer.js';

//Combine reducers
const rootReducer = combineReducers({
    main: MainReducer
});

function promiseMiddleware() {
    return (next) => (action) => {

        if (!action.promise) {
            return next(action);
        }

        const { promise, types, ...rest } = action;

        if (types.length === 0) {
            throw new Error('promiseMiddleware expects promise and three constant types.');
        }

        next({ ...rest, type: types[0] });
        return promise.then(
            (result) => next({ ...rest, result, type: types[1] }),
            (error) => next({ ...rest, error, type: types[2] })
        );
    };
}

//To handle async actions
const createStoreWithMiddleware = applyMiddleware(
    thunk,
    promiseMiddleware
)(createStore);

export default createStoreWithMiddleware(rootReducer);