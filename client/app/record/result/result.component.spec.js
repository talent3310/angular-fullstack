'use strict';

describe('Component: result', function() {
  // load the component's module
  beforeEach(module('angularFullstackApp.result'));

  var resultComponent;

  // Initialize the component and a mock scope
  beforeEach(inject(function($componentController) {
    resultComponent = $componentController('result', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
