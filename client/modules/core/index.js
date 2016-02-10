import routes from './routes.jsx';
import actions from './actions';

export default {
  load(context, actions) {
    const {LocalState} = context;

    // TODO: is this where line's default state should be set?
    LocalState.set('width', 50);
  },
  actions,
  routes
};
