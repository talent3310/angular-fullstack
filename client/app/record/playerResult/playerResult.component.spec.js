'use strict';

describe('Component: playerresult', function() {
  // load the component's module
  beforeEach(module('angularFullstackApp.playerresult'));

  var playerresultComponent;

  // Initialize the component and a mock scope
  beforeEach(inject(function($componentController) {
    playerresultComponent = $componentController('playerresult', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
