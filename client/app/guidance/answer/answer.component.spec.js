'use strict';

describe('Component: answer', function() {
  // load the component's module
  beforeEach(module('wkMeanApp.answer'));

  var answerComponent;

  // Initialize the component and a mock scope
  beforeEach(inject(function($componentController) {
    answerComponent = $componentController('answer', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
