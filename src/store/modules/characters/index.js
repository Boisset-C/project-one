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
          name: 'rubish1',
          description: 'dummy character1',
          image:'assets/introGlad.jpeg',
        },
        {
          id: 'c2',
          name: 'rubish2',
          description: 'dummy character2',
        },
        {
          id: 'c3',
          name: 'rubish3',
          description: 'dummy character3',
        }
      ],
    };
  },
  mutations,
  actions,
  getters,
};

