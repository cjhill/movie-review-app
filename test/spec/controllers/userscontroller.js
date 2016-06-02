'use strict';

describe('Controller: UserscontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('movieReviewAppApp'));

  var UserscontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UserscontrollerCtrl = $controller('UserscontrollerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(UserscontrollerCtrl.awesomeThings.length).toBe(3);
  });
});
