import {SCREEN_ROUTER} from '@constant';
import {UserScreen, HomeScreen} from '@screen';
const { HOME, USER } = SCREEN_ROUTER;
module.exports = {
  [HOME]: HomeScreen,
  [USER]: UserScreen
};
