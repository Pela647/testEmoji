angular
  .module("myApp", [])

  //   .directive("msgArea", function () {
  //     return {
  //       restrict: 'EA',
  //       replace: false,
  //       templateUrl: './dir.html',
  //       scope: {
  //         msg: '='
  //       }

  //     };
  //   });



  .controller('myCtrl', function ($scope) {
    // $scope.rob = document.querySelector('.ng-scope').innerHTML;

    // console.log(a)
    $scope.sub = function () {
      console.log($("#ex").data("emojioneArea").getText());
      document.querySelector('#test').innerHTML = ($("#ex").data("emojioneArea").getText());
    }
  });


