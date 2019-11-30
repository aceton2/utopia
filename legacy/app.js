

// app.js

var animateAppModule = angular.module('animateApp', ['ngRoute', 'ngAnimate', 'Preload','ui.bootstrap', 'duScroll', 'vimeoEmbed' ]);
// SHOW HOME IMAGE AFTER LOAD
animateAppModule.directive('imageonload', function() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      element.bind('load', function() {
        scope.$apply(function() {
          scope.pageIsLoaded = true;
        });
      });
    }
  };
});
// ROUTING ===============================================
animateAppModule.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'templates/home.html',
    controller: 'mainController as main',
    activetab: 'home'
  })
  .when('/idea', {
    templateUrl: 'templates/idea.html',
    controller: 'pageController as PageCtrl',
    activetab: 'idea'
  })
  .when('/island', {
    templateUrl: 'templates/island.html',
    controller: 'pageController as PageCtrl',
    activetab: 'island'
  })
  .when('/workshops', {
    templateUrl: 'templates/workshops.html',
    controller: 'pageController as PageCtrl',
    activetab: 'workshops'
  })
  .when('/workshops-2016', {
    templateUrl: 'templates/workshops-2016.html',
    controller: 'pageController as PageCtrl',
    activetab: 'workshops-2016'
  })
  .when('/show', {
    templateUrl: 'templates/show.html',
    controller: 'pageController as PageCtrl',
    activetab: 'show'
  })
  .when('/show-2016', {
    templateUrl: 'templates/show-2016.html',
    controller: 'pageController as PageCtrl',
    activetab: 'show-2016'
  })
  .when('/documentary', {
    templateUrl: 'templates/documentary.html',
    controller: 'pageController as PageCtrl',
    activetab: 'documentary'
  })
  .when('/contact', {
    templateUrl: 'templates/contact.html',
    controller: 'pageController as PageCtrl',
    activetab: 'contact'
  })
});
animateAppModule.run(function($route, preloader, $rootScope, $location, $anchorScroll, $routeParams) {
  // Preload Images
  // $rootScope.pageIsLoaded = false;
  var loc = $location.url().substring(1);
  var island = [
    "resources/island/transcultural-art-lab-juist-design-your-utopia-island-01.jpg",
    "resources/island/transcultural-art-lab-juist-design-your-utopia-island-02.jpg",
    "resources/island/transcultural-art-lab-juist-design-your-utopia-island-03.jpg",
    "resources/island/transcultural-art-lab-juist-design-your-utopia-island-04.jpg",
    "resources/island/transcultural-art-lab-juist-design-your-utopia-island-05.jpg",
    "resources/island/transcultural-art-lab-juist-design-your-utopia-island-06.jpg",
    "resources/island/transcultural-art-lab-juist-design-your-utopia-island-07.jpg",
    "resources/island/transcultural-art-lab-juist-design-your-utopia-island-08.jpg",
    "resources/island/transcultural-art-lab-juist-design-your-utopia-island-09.jpg",
    "resources/island/transcultural-art-lab-juist-design-your-utopia-island-10.jpg",
    "resources/island/transcultural-art-lab-juist-design-your-utopia-island-11.jpg",
    "resources/island/transcultural-art-lab-juist-design-your-utopia-island-12.jpg",
    "resources/island/transcultural-art-lab-juist-design-your-utopia-island-13.jpg",
    "resources/island/transcultural-art-lab-juist-design-your-utopia-island-15.jpg",
    "resources/island/transcultural-art-lab-juist-design-your-utopia-island-16.jpg",
    "resources/island/transcultural-art-lab-juist-design-your-utopia-island-17.jpg",
    "resources/island/transcultural-art-lab-juist-design-your-utopia-island-18.jpg",
    "resources/island/transcultural-art-lab-juist-design-your-utopia-island-19.jpg",
    "resources/island/transcultural-art-lab-juist-design-your-utopia-island-20.jpg",
    "resources/island/transcultural-art-lab-juist-design-your-utopia-island-21.jpg",
    "resources/island/transcultural-art-lab-juist-design-your-utopia-island-22.jpg",
    "resources/island/transcultural-art-lab-juist-design-your-utopia-island-23.jpg",
    "resources/island/transcultural-art-lab-juist-design-your-utopia-island-24.jpg",
    "resources/island/transcultural-art-lab-juist-design-your-utopia-island-25.jpg",
    "resources/island/transcultural-art-lab-juist-design-your-utopia-island-26.jpg",
    "resources/island/transcultural-art-lab-juist-design-your-utopia-island-27.jpg",
    "resources/island/transcultural-art-lab-juist-design-your-utopia-island-28.jpg",
    "resources/island/transcultural-art-lab-juist-design-your-utopia-island-29.jpg",
    "resources/island/transcultural-art-lab-juist-design-your-utopia-island-30.jpg",
    "resources/island/transcultural-art-lab-juist-design-your-utopia-island-31.jpg",
    "resources/island/transcultural-art-lab-juist-design-your-utopia-island-32.jpg"
  ];
  var workshops = [
    "resources/workshops/transcultural-art-lab-juist-design-your-utopia-workshops-01.jpg",
    "resources/workshops/transcultural-art-lab-juist-design-your-utopia-workshops-02.jpg",
    "resources/workshops/transcultural-art-lab-juist-design-your-utopia-workshops-03.jpg",
    "resources/workshops/transcultural-art-lab-juist-design-your-utopia-workshops-04.jpg",
    "resources/workshops/transcultural-art-lab-juist-design-your-utopia-workshops-05.jpg",
    "resources/workshops/transcultural-art-lab-juist-design-your-utopia-workshops-06.jpg",
    "resources/workshops/transcultural-art-lab-juist-design-your-utopia-workshops-07.jpg",
    "resources/workshops/transcultural-art-lab-juist-design-your-utopia-workshops-08.jpg",
    "resources/workshops/transcultural-art-lab-juist-design-your-utopia-workshops-09.jpg",
    "resources/workshops/transcultural-art-lab-juist-design-your-utopia-workshops-10.jpg",
    "resources/workshops/transcultural-art-lab-juist-design-your-utopia-workshops-11.jpg",
    "resources/workshops/transcultural-art-lab-juist-design-your-utopia-workshops-12.jpg",
    "resources/workshops/transcultural-art-lab-juist-design-your-utopia-workshops-13.jpg",
    "resources/workshops/transcultural-art-lab-juist-design-your-utopia-workshops-14.jpg",
    "resources/workshops/transcultural-art-lab-juist-design-your-utopia-workshops-15.jpg",
    "resources/workshops/transcultural-art-lab-juist-design-your-utopia-workshops-16.jpg",
    "resources/workshops/transcultural-art-lab-juist-design-your-utopia-workshops-17.jpg",
    "resources/workshops/transcultural-art-lab-juist-design-your-utopia-workshops-18.jpg",
    "resources/workshops/transcultural-art-lab-juist-design-your-utopia-workshops-19.jpg",
    "resources/workshops/transcultural-art-lab-juist-design-your-utopia-workshops-20.jpg",
    "resources/workshops/transcultural-art-lab-juist-design-your-utopia-workshops-21.jpg",
    "resources/workshops/transcultural-art-lab-juist-design-your-utopia-workshops-22.jpg",
    "resources/workshops/transcultural-art-lab-juist-design-your-utopia-workshops-23.jpg",
    "resources/workshops/transcultural-art-lab-juist-design-your-utopia-workshops-24.jpg",
    "resources/workshops/transcultural-art-lab-juist-design-your-utopia-workshops-25.jpg",
    "resources/workshops/transcultural-art-lab-juist-design-your-utopia-workshops-26.jpg",
    "resources/workshops/transcultural-art-lab-juist-design-your-utopia-workshops-27.jpg"
  ];
  var show = [
    "resources/show/transcultural-art-lab-juist-design-your-utopia-show-exhibition-01.jpg",
    "resources/show/transcultural-art-lab-juist-design-your-utopia-show-exhibition-02.jpg",
    "resources/show/transcultural-art-lab-juist-design-your-utopia-show-exhibition-03.jpg",
    "resources/show/transcultural-art-lab-juist-design-your-utopia-show-exhibition-04.jpg",
    "resources/show/transcultural-art-lab-juist-design-your-utopia-show-exhibition-05.jpg",
    "resources/show/transcultural-art-lab-juist-design-your-utopia-show-exhibition-06.jpg",
    "resources/show/transcultural-art-lab-juist-design-your-utopia-show-exhibition-07.jpg",
    "resources/show/transcultural-art-lab-juist-design-your-utopia-show-exhibition-08.jpg",
    "resources/show/transcultural-art-lab-juist-design-your-utopia-show-exhibition-09.jpg",
    "resources/show/transcultural-art-lab-juist-design-your-utopia-show-exhibition-10.jpg",
    "resources/show/transcultural-art-lab-juist-design-your-utopia-show-exhibition-11.jpg",
    "resources/show/transcultural-art-lab-juist-design-your-utopia-show-exhibition-12.jpg",
    "resources/show/transcultural-art-lab-juist-design-your-utopia-show-exhibition-13.jpg",
    "resources/show/transcultural-art-lab-juist-design-your-utopia-show-exhibition-14.jpg",
    "resources/show/transcultural-art-lab-juist-design-your-utopia-show-exhibition-15.jpg",
    "resources/show/transcultural-art-lab-juist-design-your-utopia-show-exhibition-16.jpg",
    "resources/show/transcultural-art-lab-juist-design-your-utopia-show-exhibition-17.jpg",
    "resources/show/transcultural-art-lab-juist-design-your-utopia-show-exhibition-18.jpg",
    "resources/show/transcultural-art-lab-juist-design-your-utopia-show-exhibition-19.jpg",
    "resources/show/transcultural-art-lab-juist-design-your-utopia-show-exhibition-20.jpg",
    "resources/show/transcultural-art-lab-juist-design-your-utopia-show-exhibition-21.jpg",
    "resources/show/transcultural-art-lab-juist-design-your-utopia-show-exhibition-22.jpg",
    "resources/show/transcultural-art-lab-juist-design-your-utopia-show-exhibition-23.jpg",
    "resources/show/transcultural-art-lab-juist-design-your-utopia-show-exhibition-24.jpg",
    "resources/show/transcultural-art-lab-juist-design-your-utopia-show-exhibition-25.jpg",
    "resources/show/transcultural-art-lab-juist-design-your-utopia-show-exhibition-26.jpg",
    "resources/show/transcultural-art-lab-juist-design-your-utopia-show-exhibition-27.jpg",
    "resources/show/transcultural-art-lab-juist-design-your-utopia-show-exhibition-28.jpg",
    "resources/show/transcultural-art-lab-juist-design-your-utopia-show-exhibition-29.jpg",
    "resources/show/transcultural-art-lab-juist-design-your-utopia-show-exhibition-30.jpg",
    "resources/show/transcultural-art-lab-juist-design-your-utopia-show-exhibition-31.jpg",
    "resources/show/transcultural-art-lab-juist-design-your-utopia-show-exhibition-32.jpg",
    "resources/show/transcultural-art-lab-juist-design-your-utopia-show-exhibition-33.jpg",
    "resources/show/transcultural-art-lab-juist-design-your-utopia-show-exhibition-34.jpg",
    "resources/show/transcultural-art-lab-juist-design-your-utopia-show-exhibition-35.jpg",
    "resources/show/transcultural-art-lab-juist-design-your-utopia-show-exhibition-36.jpg",
    "resources/show/transcultural-art-lab-juist-design-your-utopia-show-exhibition-37.jpg",
    "resources/show/transcultural-art-lab-juist-design-your-utopia-show-exhibition-38.jpg",
    "resources/show/transcultural-art-lab-juist-design-your-utopia-show-exhibition-39.jpg",
    "resources/show/transcultural-art-lab-juist-design-your-utopia-show-exhibition-40.jpg"
  ];
  var basics = [
    "resources/preloader/loading-icon.gif",
    "resources/icons/ico-burger.svg",
    "resources/randombg/transcultural-art-lab-juist-design-your-utopia-01.jpg",
    "resources/randombg/transcultural-art-lab-juist-design-your-utopia-02.jpg",
    "resources/randombg/transcultural-art-lab-juist-design-your-utopia-03.jpg",
    "resources/randombg/transcultural-art-lab-juist-design-your-utopia-04.jpg",
    "resources/island/transcultural-art-lab-juist-design-your-utopia-island-14.jpg",
    "resources/workshops/transcultural-art-lab-juist-design-your-utopia-workshops-19.jpg",
    "resources/show/transcultural-art-lab-juist-design-your-utopia-show-exhibition-21.jpg",
    "resources/svg/tab-left.svg",
    "resources/svg/tab-right.svg",
    "resources/idea/logoT.jpg",
    "resources/workshops/dig1.jpg",
    "resources/show/listen.jpg",
    "resources/icons/flogo_rgb_hex-brc-site-250.png",
    "resources/contact/Transcultural-Art-Lab-SW.gif",

  ];
  var bulk = [island,workshops,show];
  if(loc == "island") basics = basics.concat(bulk.splice(0,1)[0]);
  else if(loc == "workshops") basics = basics.concat(bulk.splice(1,1)[0]);
  else if(loc == "show") basics = basics.concat(bulk.splice(2,1)[0]);
  bulk.forEach(function(add){ basics = basics.concat(add);});
  preloader.preloadImages( basics ).then(function(){
    console.log('preloaded!');
  })


  // HISTORY BACK
  $rootScope.$on('$locationChangeSuccess', function() {
    $rootScope.actualLocation = $location.path();
  });

  $rootScope.$watch(function () {return $location.path()}, function (newLocation, oldLocation) {
    if($rootScope.actualLocation === newLocation) {
    }
  });

});
// CONTROLLERS ============================================
animateAppModule.controller('mainController', function($scope, $location, $timeout) {

  $scope.pageClass = 'page-home';
  $scope.mastheadClass = 'masthead-big';
  $scope.isHome = true;
  $scope.flair = {};
  this.click = function(l){
    var lnk = { u:'/idea',
    t:'/island',
    o:'/workshops',
    p:'/show',
    i:'/documentary',
    a:'/contact'};
    $timeout(function(){
      $location.path(lnk[l]);
      $scope.$apply(function () {
        $scope.isHome = false;
      });
    },500);
  };
});

var flair = {};

animateAppModule.controller('pageController', function($scope,$location,$timeout) {
  var pageClass = 'page-' + $location.url().substring(1);
  $scope.pageClass =  pageClass + ' switch';
  $scope.mastheadClass = 'masthead-small';
  this.home = function(){ $scope.pageClass = pageClass; $timeout(function(){$location.path('/');},200); };
  // SOUND WIDGET CONTROL
  setSounder();
  function setSounder() {
    sounders = ['1','2','3','4','5'].filter(function(id){ return document.getElementById('sc-'+id); });
    sounders.forEach(function(id){
      var sound = {btn:'play-'+id,bar:'progress-outer-'+id,progress:'progress-bar-'+id,widget:'sc-'+id}
      var widget = SC.Widget(sound.widget);
      var btn = document.getElementById(sound.btn);
      widget.bind(SC.Widget.Events.PLAY_PROGRESS,playbar);
      widget.bind(SC.Widget.Events.READY,enable);
      widget.bind(SC.Widget.Events.FINISH,showPlay);
      widget.bind(SC.Widget.Events.PAUSE,showPlay);
      widget.bind(SC.Widget.Events.PLAY,showPause);
      function showPause() {btn.className = 'pause';};
      function showPlay() {btn.className = 'play';};
      function playbar(t){
        var width = (Math.round(100 * t.relativePosition * 100 ) / 100).toString() + '%';
        document.getElementById(sound.progress).style.setProperty('width',width);
      };
      function reset(){ document.getElementById('play').className = 'play'; };
      function enable(){
        var duration;
        widget.getDuration( function(d) { duration = d ; });
        var seekTo = function(e){
          var rect = document.getElementById(sound.bar).getBoundingClientRect();
          var perc = (e.clientX - rect.left) / rect.width;
          if(duration) widget.seekTo( duration * perc);
        };
        var toggl = function(){ widget.toggle(); };
        document.getElementById(sound.bar).addEventListener('click',seekTo);
        document.getElementById(sound.btn).addEventListener('click',toggl);
        document.getElementById(sound.btn).style.setProperty('display','');
      };
    });
  };
});

function checkPage($scope, curLoc) {
  if(curLoc =='/' || curLoc == ''){
    $scope.mastheadClass = 'masthead-big';
    $scope.isHome = true;
    $scope.logoColor = {color: 'white'};
  }
  else{
    $scope.mastheadClass = 'masthead-small';
    $scope.isHome = false;
    $scope.logoColor = {color: 'black'};
  }
}


function checkMenuPage($scope, curLoc) {
  if(curLoc =='/idea'){
    $scope.status.idea = true;
  }
  if(curLoc =='/island'){
    $scope.status.island = true;
  }
  if(curLoc =='/workshops' || curLoc == '/workshops-2016'){
    $scope.status.workshops = true;
  }
  if(curLoc =='/show' || curLoc == '/show-2016'){
    $scope.status.show = true;
  }
  if(curLoc =='/documentary'){
    $scope.status.documentary = true;
  }
  if(curLoc =='/contact'){
    $scope.status.contact = true;
  }
}

function randombg($scope) {
  var random= Math.floor(Math.random() * 4) + 0;
  var bigSize = [
    "resources/randombg/transcultural-art-lab-juist-design-your-utopia-01.jpg",
    "resources/randombg/transcultural-art-lab-juist-design-your-utopia-02.jpg",
    "resources/randombg/transcultural-art-lab-juist-design-your-utopia-03.jpg",
    "resources/randombg/transcultural-art-lab-juist-design-your-utopia-04.jpg"
  ];
  $scope.src = bigSize[random];
}

animateAppModule.controller('allController', function($scope, $location, $timeout, $document, $route, $rootScope) {

  randombg($scope);
  curLoc = $location.path();
  // HISTORY BACK
  $rootScope.$on('$locationChangeSuccess', function() {
    $rootScope.actualLocation = $location.path();
  });

  $rootScope.$watch(function () {return $location.path()}, function (newLocation, oldLocation) {
    if($rootScope.actualLocation === newLocation) {
      checkPage($scope, $location.path());
      checkMenuPage($scope, $location.path());
    }
  });

  $scope.logoColor = {color: 'white'};
  $scope.$route = $route;
  $scope.isHome = true;
  $scope.oneAtATime = true;
  checkPage($scope, $location.path());

  // MENU LINKS
  $scope.clickFunction = function(link){
    $document.scrollTop(0,500);
    $scope.closeMenu();
    $timeout(function(){
      $location.path(link);
    },500);
  };

  // LOGO MOBILE CLICK
  $scope.mobileClick = function(isHome){
    if(isHome){
      $scope.closeMenu();
      $scope.isHome = false;
      $scope.status.idea = true;
        $location.path('/idea');
        $scope.mastheadClass = 'masthead-small';
          $scope.logoColor = {color: 'black'};
      $timeout(function(){
      },500);
      $timeout(function(){
      },800);
    }else{
      randombg($scope);
      $scope.closeMenu();
      $document.scrollTop(0,500);
      $timeout(function(){
        $scope.mastheadClass = 'masthead-big';
        $location.path('/');
        $scope.logoColor = {color: 'white'};
        $scope.isHome = true;
      },500);


    }
  };
  //LOGO LINKS
  $scope.logoClick = function(letter){
    var lnk = {
      u:'/idea',
      t:'/island',
      o:'/workshops',
      p:'/show',
      i:'/documentary',
      a:'/contact'
    };
    if($scope.isHome == true){
      $scope.isHome = false;
      $scope.mastheadClass = 'masthead-small';
      $timeout(function(){
        $location.path(lnk[letter]);
        $scope.logoColor = {color: 'black'};
      },500);
    }else{
      randombg($scope);
      $scope.closeMenu();
      $document.scrollTop(0,500);
      $timeout(function(){
        $location.path('/');
        $scope.mastheadClass = 'masthead-big';
        $scope.logoColor = {color: 'white'};
        $timeout(function(){
          $scope.isHome = true;
        },200);
      },500);
    }
  };

  //MOBILE MENU
  $scope.showmenu=false;
  $scope.toggleMenu = function(){
    $scope.showmenu=($scope.showmenu) ? false : true;
  }
  $scope.closeMenu = function(){
    $scope.showmenu = false;
  }

  $scope.scrollTop = function(){
    $document.scrollTop(0,500);
  }
  // ACCORDION CHECK

  $scope.status = {
    idea: false,
    island: false,
    workshops: false,
    show: false,
    documentary: false,
    contact: false
  };

  $scope.inner_status = {
    show2017: true,
    show2016: false
  };
  checkMenuPage($scope, curLoc);
});
