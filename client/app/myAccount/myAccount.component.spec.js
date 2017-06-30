'use strict';

describe('Component: MyAccountComponent', function() {
  // load the controller's module
  beforeEach(module('angularFullstackApp.myAccount'));

  var MyAccountComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    MyAccountComponent = $componentController('myAccount', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
