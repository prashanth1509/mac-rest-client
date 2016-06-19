let Actions = {
    LOAD_CONFIG: null,
    LOAD_CONFIG_SUCCESS: null,
    LOAD_CONFIG_FAILURE: null
};

let ActionCreator = {
    loadConfig(){
        var promisifiedObject = Promise.resolve();
        
        return {
            types: [Actions.LOAD_CONFIG, Actions.LOAD_CONFIG_SUCCESS, Actions.LOAD_CONFIG_FAILURE],
            promise: promisifiedObject
        };
    }
};

export {Actions};
export {ActionCreator};