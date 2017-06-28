'use strict';

describe('Component: IntroduceComponent', function() {
  // load the controller's module
  beforeEach(module('wkMeanApp.introduce'));

  var IntroduceComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    IntroduceComponent = $componentController('introduce', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
