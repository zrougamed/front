const persistDataPlugin = store => {
    store.subscribe((mutation, state) => {
        console.log("mutation", mutation);
        console.log("state", state);
    });
    store.subscribeAction((action, state) => {
        console.log("action", action);
        console.log("state", state);
    });
};

export default persistDataPlugin;