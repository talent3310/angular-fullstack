'use strict';

describe('Component: myDpoint', function() {
  // load the component's module
  beforeEach(module('angularFullstackApp.myDpoint'));

  var myDpointComponent;

  // Initialize the component and a mock scope
  beforeEach(inject(function($componentController) {
    myDpointComponent = $componentController('myDpoint', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
