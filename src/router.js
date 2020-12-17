import { createRouter, createWebHistory } from 'vue-router';

import CreateUser from './pages/CreateUser.vue';
import GameOver from './pages/GameOver.vue';
import IntroPage from './pages/IntroPage.vue';
import LevelOne from './pages/LevelOne.vue';
import LevelTwo from './pages/LevelTwo.vue';
import LevelThree from './pages/LevelThree.vue';
import NotFound from './pages/NotFound.vue';
import Settings from './pages/Settings.vue';

const router = createRouter({
history: createWebHistory(),
routes: [
  { path: '/', redirect: '/introPage'},
  { path: '/introPage', component: IntroPage },
  { path: '/createUser', component: CreateUser },
  { path: '/levelOne', component: LevelOne },
  { path: '/levelTwo', component: LevelTwo },
  { path: '/levelThree', component: LevelThree},
  { path: '/gameOver', component: GameOver },
  { path: '/settings', component: Settings },
  { path: '/:notFound(.*)', component: NotFound },
],
});

export default router;
