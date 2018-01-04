function Ctrl($scope, ValuesModel) {
    $scope.header = "Masterfrage";

    $scope.showPoints = function () {
        document.getElementById("showPointsBtn").style.display = "none";
        $scope.header = "Geografie";
        $scope.pointsTeamA =  ValuesModel.getTeamA();
        $scope.pointsTeamB =  ValuesModel.getTeamB();
    };

    $scope.inputA;
    $scope.inputB;

    $scope.next = function () {
        var inst = $('[data-remodal-id=modal13]').remodal();
        inst.destroy();

        ValuesModel.setTeamAinput(_.isNil($scope.inputA) ? 0 : Number.parseInt($scope.inputA));
        ValuesModel.setTeamBinput(_.isNil($scope.inputB) ? 0 : Number.parseInt($scope.inputB));

        inst = $('[data-remodal-id=modal14]').remodal();
        inst.open();
    };
};

var ctrl = angular.module('controller.points', ['model.values']);

ctrl.controller('PointsController', Ctrl);