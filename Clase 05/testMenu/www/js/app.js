// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

      .state('root', {
                url : '/root',
                templateUrl : 'root.html',
                controller : 'RootPageController'
            })

      .state('soloMenu', {
                url : '/soloMenu',
                templateUrl : 'soloMenuAbstracta.html',
                abstract : true,
                controller : 'FstController'
            })
      .state('soloMenu.home', {
                url: '/home',
                views: {
                    'contenido': {
                        templateUrl: 'soloMenu-home.html',
                        controller : 'FstHomePageController'
                    }
                }
            })
        .state('soloMenu.uno', {
                url: '/uno',
                views: {
                    'contenido': {
                        templateUrl: 'soloMenu-uno.html',
                        controller : 'FstFirstPageController'
                    }
                }
            })
            .state('soloMenu.dos', {
                url: '/dos',
                views: {
                    'contenido': {
                        templateUrl: 'soloMenu-dos.html',
                        controller : 'FstSecondPageController'
                    }
                }
            })
            .state('soloTabs', {
                url : '/soloTabs',
                templateUrl : 'soloTabsAbstracta.html',
                abstract : true,
                controller : 'FstController'
            })
            .state('soloTabs.home', {
                url: '/home',
                views: {
                    'tabsCont': {
                        templateUrl: 'soloTabs-home.html',
                        controller : 'FstHomePageController'
                    }
                }
            })
            .state('soloTabs.chat', {
                url: '/chat',
                views: {
                    'tabsCont': {
                        templateUrl: 'soloTabs-chat.html',
                        controller : 'SndChatPageController'
                    }
                }
            })
            .state('soloTabs.drink', {
                url: '/drink',
                views: {
                    'tabsCont': {
                        templateUrl: 'soloTabs-drink.html',
                        controller : 'SndDrinkPageController'
                    }
                }
            })

            .state('tabMenu', {
                url : '/tabMenu',

                templateUrl : 'tabMenuAbstracta.html',
                abstract : true,
                controller : 'SndController'
            })
            .state('tabMenu.home', {
                url: '/home',
                views: {
                    'snd': {
                        templateUrl: 'tabMenu-home.html',
                        controller : 'SndHomePageController',
                       
                    }

                }
            })
            .state('tabMenu.chat', {
                url: '/chat',
                views: {
                    'snd': {
                        templateUrl: 'tabMenu-chat.html',
                        controller : 'SndChatPageController'
                    }
                }
            })
            .state('tabMenu.chat-single', {
              url: '/chat-single',
              views: {
                'snd': {
                  templateUrl: 'tabMenu-chat-single.html',
                  controller : 'SndChatSinglePageController'
                }
              }
            })
            .state('tabMenu.drink', {
                url: '/drink',
                views: {
                    'snd': {
                        templateUrl: 'tabMenu-drink.html',
                        controller : 'SndDrinkPageController'
                    }
                }
            })
              .state('tabMenu.paises', {
                url: '/paises',
                views: {
                    'snd': {
                        templateUrl: 'tabMenu-Paises.html',
                        controller : 'tabMenu-PaisesPageController'
                    }
                }
            })
              .state('tabMenu.mostrarPais', {
               url: '/mostrarPais/:nombrePais',
              views: {
                'snd': {
                  templateUrl: 'tabMenu-Pais-detalle.html',
                  controller : 'tabMenu-Pais-detallePageController'
                }
              }
            })
             
            .state('tabMenu.policy', {
                url: '/policy',
                views: {
                    'snd': {
                        templateUrl: 'tabMenu-policy.html',
                        controller : 'SndPolicyPageController'
                    }
                }
            })




   
   $urlRouterProvider.otherwise('/root');
})

.controller('RootPageController', function($scope, $ionicSideMenuDelegate) {
    })

    .controller('NavController', function($scope, $ionicSideMenuDelegate) {
      $scope.toggleLeft = function() {
        $ionicSideMenuDelegate.toggleLeft();
      };
    })
    .controller('FstController', function($scope, $ionicSideMenuDelegate) {
    })
    .controller('FstHomePageController', function($scope, $ionicSideMenuDelegate) {
    })
    .controller('FstFirstPageController', function($scope, $ionicSideMenuDelegate) {
    })
    .controller('FstSecondPageController', function($scope, $ionicSideMenuDelegate) {
    })

    .controller('SndController', function($scope, $ionicSideMenuDelegate) {
    })
    .controller('SndHomePageController', function($scope, $ionicSideMenuDelegate) {
    })
    .controller('SndChatPageController', function($scope, $ionicSideMenuDelegate) {
    })
    .controller('SndChatSinglePageController', function($scope, $ionicSideMenuDelegate) {
    })
    .controller('tabMenu-PaisesPageController', function($scope, $ionicSideMenuDelegate,$http) {
        $scope.listado=[];
        //https://restcountries.eu/
         $scope.mostrarSpin='si';
        function bien(respuesta){
              $scope.mostrarSpin='no';
             $scope.listado=respuesta.data;
             console.log($scope.listado);
        }

         function mal(respuesta){
            console.log(respuesta);
        }


        $http.get('https://restcountries.eu/rest/v1/region/Americas').then( bien,mal );

    })


     .controller('tabMenu-Pais-detallePageController', function($scope, $ionicSideMenuDelegate,$http,$stateParams) {
        $scope.datosDelPais=[];
       
        console.log($stateParams);
        console.log("llegó.");
         function bien(respuesta){
           
             $scope.datosDelPais=respuesta.data[0];
             console.log($scope.datosDelPais);
             
        }

         function mal(respuesta){
            console.log(respuesta);
        }

        
        $http.get('https://restcountries.eu/rest/v1/name/'+$stateParams.nombrePais+'?fullText=true').then( bien,mal );
    })
     .controller('SndDrinkPageController', function($scope, $ionicSideMenuDelegate,$http) {
       
    })
    .controller('SndPolicyPageController', function($scope, $ionicSideMenuDelegate) {
    })


