'use strict';

describe('Component: findPass', function() {
  // load the component's module
  beforeEach(module('wkMeanApp.findPass'));

  var findPassComponent;

  // Initialize the component and a mock scope
  beforeEach(inject(function($componentController) {
    findPassComponent = $componentController('findPass', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
