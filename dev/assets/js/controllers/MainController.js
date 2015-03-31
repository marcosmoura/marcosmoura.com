app.controller('MainController', function($rootScope) {

    var $scope = this;

    $scope.structureLoaded = false;

    $rootScope.$on('$viewContentLoaded', function() {
        $scope.structureLoaded = true;
    });

});
