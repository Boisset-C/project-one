import { createStore } from 'vuex';

import charactersModule from './modules/characters/index.js';
import requestsModule from './modules/requests/index.js';

const store = createStore({
    modules: {
        characters: charactersModule,
        requests: requestsModule,
    }
});

export default store;