'use strict';

describe('Component: notification', function() {
  // load the component's module
  beforeEach(module('wkMeanApp.notification'));

  var notificationComponent;

  // Initialize the component and a mock scope
  beforeEach(inject(function($componentController) {
    notificationComponent = $componentController('notification', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
