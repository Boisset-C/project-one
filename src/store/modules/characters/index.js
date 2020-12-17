import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      lastFetch: null,
      characters: [
        {
          id: 'c1',
          name: 'rubish',
          description: 'dummy character1',
        },
        {
          id: 'c2',
          name: 'rubish',
          description: 'dummy character2',
        },
        {
          id: 'c3',
          name: 'rubish',
          description: 'dummy character3',
        }
      ],
    };
  },
  mutations,
  actions,
  getters,
};

