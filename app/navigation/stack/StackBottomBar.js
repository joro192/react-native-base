import {SCREEN_ROUTER} from '@app/constants/Constant';
import {UserScreen, HomeScreen} from '@screen';
const { HOME, USER } = SCREEN_ROUTER;
module.exports = {
  [HOME]: HomeScreen,
  [USER]: UserScreen
};
