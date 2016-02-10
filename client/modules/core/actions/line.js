export default {
  shrink({LocalState}) {
    console.log('shrinking...');
    let width = LocalState.get('width');
    LocalState.set('width', width - 10);
  },

  grow({LocalState}) {
    console.log('growing...');
    let width = LocalState.get('width');
    LocalState.set('width', width + 10);
  }
}
