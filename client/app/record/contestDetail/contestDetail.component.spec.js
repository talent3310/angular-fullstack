'use strict';

describe('Component: contestDetail', function() {
  // load the component's module
  beforeEach(module('angularFullstackApp.contestDetail'));

  var contestDetailComponent;

  // Initialize the component and a mock scope
  beforeEach(inject(function($componentController) {
    contestDetailComponent = $componentController('contestDetail', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
