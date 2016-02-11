export default {
  shrink({LocalState}) {
    let width = LocalState.get('width');
    LocalState.set('width', width - 10);
  },

  grow({LocalState}) {
    let width = LocalState.get('width');
    LocalState.set('width', width + 10);
  }
};
