'use strict';

describe('Component: myInfo', function() {
  // load the component's module
  beforeEach(module('angularFullstackApp.myInfo'));

  var myInfoComponent;

  // Initialize the component and a mock scope
  beforeEach(inject(function($componentController) {
    myInfoComponent = $componentController('myInfo', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
