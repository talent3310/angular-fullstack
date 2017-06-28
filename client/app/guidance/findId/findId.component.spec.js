'use strict';

describe('Component: findId', function() {
  // load the component's module
  beforeEach(module('wkMeanApp.findId'));

  var findIdComponent;

  // Initialize the component and a mock scope
  beforeEach(inject(function($componentController) {
    findIdComponent = $componentController('findId', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
