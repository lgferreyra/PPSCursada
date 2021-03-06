var app = angular.module('starter.controllers', []);

app.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
});

app.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
});

app.controller('ControladorPaises', function($scope,$http) {
  $scope.titulo="paises";
  $scope.listado = [];
  $http.get("https://restcountries.eu/rest/v1/region/africa").
  then(bien,mal)

  function bien (respuesta){
    $scope.listado = respuesta.data;
    console.log($scope.listado);
  }
  function mal (respuesta){
    console.log("error de comunicacion" + respuesta);
  }
});

app.controller('ControladorInfo', function($scope, $http, $stateParams){
  $scope.pais = $stateParams.pais;
  console.log($scope.pais);
  $scope.datos = [];
  $http.get("https://restcountries.eu/rest/v1/name/" + $scope.pais + "?fullText=true").then(bien,mal)
  function bien (respuesta){
    $scope.datos = respuesta.data[0];
    console.log($scope.datos);
  }
  function mal (respuesta){
    console.log("error de comunicacion" + respuesta);
  }

});

app.controller('PlaylistCtrl', function($scope, $stateParams) {
});
