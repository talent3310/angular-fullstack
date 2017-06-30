'use strict';

describe('Component: dpoint', function() {
  // load the component's module
  beforeEach(module('angularFullstackApp.dpoint'));

  var dpointComponent;

  // Initialize the component and a mock scope
  beforeEach(inject(function($componentController) {
    dpointComponent = $componentController('dpoint', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
