'use strict';

describe('Component: myMile', function() {
  // load the component's module
  beforeEach(module('angularFullstackApp.myMile'));

  var myMileComponent;

  // Initialize the component and a mock scope
  beforeEach(inject(function($componentController) {
    myMileComponent = $componentController('myMile', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
