import {Actions, ActionCreators} from '../actions';

export default function (state = {}, action) {
    switch (action.type) {
        case Actions.LOAD_CONFIG:
        break;
        default:
            return state;
        break;
    }
}