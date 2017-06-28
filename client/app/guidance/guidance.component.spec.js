'use strict';

describe('Component: GuidanceComponent', function() {
  // load the controller's module
  beforeEach(module('wkMeanApp.guidance'));

  var GuidanceComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    GuidanceComponent = $componentController('guidance', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
