angular.module('starter.controllers', ['ngCordova'])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('AccountCtrl', ['$scope', 'ionicToast', function($scope, ionicToast) {
   $scope.settings = {
    enableFriends: true
  };
 $scope.mostrarMensaje=function(mensaje,posicion,cierreAutomatico,duracion){
    
 // <!-- ionicToast.show(message, position(top, middle, bottom), stick(true or false), time); -->
  ionicToast.showInfo(mensaje, posicion, cierreAutomatico, duracion);
  
 }
}])

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

