'use strict';

describe('Component: changePass', function() {
  // load the component's module
  beforeEach(module('angularFullstackApp.changePass'));

  var changePassComponent;

  // Initialize the component and a mock scope
  beforeEach(inject(function($componentController) {
    changePassComponent = $componentController('changePass', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
