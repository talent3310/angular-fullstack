'use strict';

describe('Component: leave', function() {
  // load the component's module
  beforeEach(module('angularFullstackApp.leave'));

  var leaveComponent;

  // Initialize the component and a mock scope
  beforeEach(inject(function($componentController) {
    leaveComponent = $componentController('leave', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
