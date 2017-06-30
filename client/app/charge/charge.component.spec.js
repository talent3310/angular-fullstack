'use strict';

describe('Component: ChargeComponent', function() {
  // load the controller's module
  beforeEach(module('angularFullstackApp.charge'));

  var ChargeComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    ChargeComponent = $componentController('charge', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
