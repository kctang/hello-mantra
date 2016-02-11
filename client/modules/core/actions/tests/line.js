const {describe, it} = global;
import {expect} from 'chai';
import {stub, spy} from 'sinon';

import line from '../line';

describe('core.actions.line', () => {
  it('shrink by 10', () => {
    const LocalState = {
      get: stub().returns(50),
      set: spy()
    };

    line.shrink({LocalState});

    let name = LocalState.set.args[0][0];
    let width = LocalState.set.args[0][1];

    expect(name).to.be.equal('width');
    expect(width).to.be.equal(40);
  });

  it('grow by 10', () => {
    const LocalState = {
      get: stub().returns(20),
      set: spy()
    };

    line.grow({LocalState});

    let name = LocalState.set.args[0][0];
    let width = LocalState.set.args[0][1];

    expect(name).to.be.equal('width');
    expect(width).to.be.equal(30);
  });

});

