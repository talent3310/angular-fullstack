'use strict';

describe('Component: subNav', function() {
  // load the component's module
  beforeEach(module('wkMeanApp.subNav'));

  var subNavComponent;

  // Initialize the component and a mock scope
  beforeEach(inject(function($componentController) {
    subNavComponent = $componentController('subNav', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
