function NavbarController($scope) {
  $scope.navbarLinks = [
    {name: 'about'},
    {name: 'portfolio'},
    {name: 'contact'}
  ]
}

angular.module('personalPage', ['ngResource']).controller('NavbarController', NavbarController)
