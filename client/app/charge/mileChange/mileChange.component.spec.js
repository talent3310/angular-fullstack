'use strict';

describe('Component: mileChange', function() {
  // load the component's module
  beforeEach(module('angularFullstackApp.mileChange'));

  var mileChangeComponent;

  // Initialize the component and a mock scope
  beforeEach(inject(function($componentController) {
    mileChangeComponent = $componentController('mileChange', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
