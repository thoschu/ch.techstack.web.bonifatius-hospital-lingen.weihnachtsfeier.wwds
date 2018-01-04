function Ctrl($log, $scope, $element, ValuesModel) {
    $log.log('StartController ready...');

    $scope.buttonTeamA = function () {
        ValuesModel.setGamer("teamA");
        destroyScope();
    };

    $scope.buttonTeamB = function () {
        ValuesModel.setGamer("teamB");
        destroyScope();
    };

    var removeDestroyListener = $scope.$on("$destroy", function () {
        document.getElementById("overlay2").style.display = "none";
        removeDestroyListener();
    });

    function destroyScope() {
        $scope.$destroy();
    };
};

var ctrl = angular.module('controller.start', ['model.values']);

ctrl.controller('StartController', Ctrl);