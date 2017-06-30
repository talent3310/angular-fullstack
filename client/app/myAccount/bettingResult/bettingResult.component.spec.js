'use strict';

describe('Component: bettingResult', function() {
  // load the component's module
  beforeEach(module('angularFullstackApp.bettingResult'));

  var bettingResultComponent;

  // Initialize the component and a mock scope
  beforeEach(inject(function($componentController) {
    bettingResultComponent = $componentController('bettingResult', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
