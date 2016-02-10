import Line from '../components/line.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

const composer = ({context}, onData) => {
  const {LocalState} = context;
  onData(null, {
    width: LocalState.get('width')
  });
};

const depsMapper = function (context, actions) {
  return {
    grow: actions.line.grow,
    shrink: actions.line.shrink,
    context
  };
};

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Line);
