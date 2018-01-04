function Ctrl($scope, ValuesModel) {

    var clickCounter = 0;

    $scope.winA = false;
    $scope.winB = false;

    var change = function () {
        var tempGamer = ValuesModel.getGamer();
        ValuesModel.setGamer((tempGamer === "teamA") ? "teamB" : "teamA");
        return tempGamer;
    };

    var append = function (to, who) {
        if(clickCounter < 2) {
            var node = document.createElement("i");
            node.className = (who === "teamA") ? "fa fa-users fa-2x float-right fontcolorA" : "fa fa-users fa-2x float-right fontcolorB";
            node.appendChild(document.createTextNode('\u00A0'));
            node.appendChild(document.createTextNode('\u00A0'));
            node.appendChild(document.createTextNode('\u00A0'));
            document.getElementById(to).appendChild(node);

            if (to == 'masterC') {
                switch (who) {
                    case "teamA":
                        $scope.winA = true;
                        break;
                    case "teamB":
                        $scope.winB = true;
                        break;
                    default:
                        break;
                }
            }

            clickCounter++;
        }
    };

    function changeBadge(badge, newClass) {
        element = document.getElementById(badge);
        element.classList.remove('badge-warning');
        element.classList.add(newClass);
    };


    $scope.creditTeamA = 0;
    $scope.creditTeamB = 0;
    $scope.creditTeamAFn = function(){
        return $scope.creditTeamA;
    };
    $scope.creditTeamBFn = function(){
        return $scope.creditTeamB;
    };

    $scope.betTeamA = 0;
    $scope.betTeamB = 0;
    $scope.betTeamAFn = function(){
        return $scope.betTeamA;
    };
    $scope.betTeamBFn = function(){
        return $scope.betTeamB;
    };

    $scope.winTeamA = 0;
    $scope.winTeamB = 0;
    $scope.winTeamAFn = function() {
        return $scope.winTeamA;
    };
    $scope.winTeamBFn = function() {
        return $scope.winTeamB;
    };

    $scope.buttonA = function () {
        append("masterA", change());
    };

    $scope.buttonB = function () {
        append("masterB", change());
    };

    $scope.buttonC = function () {
        append("masterC", change());
    };

    $scope.result = function () {
        changeBadge("master1", "badge-danger");
        changeBadge("master2", "badge-danger");
        changeBadge("master3", "badge-success");

        if($scope.winA) {
            $scope.winTeamA = ValuesModel.getTeamA() + ValuesModel.getTeamAinput();
        } else {
            $scope.winTeamA = ValuesModel.getTeamA() - ValuesModel.getTeamAinput();
        }

        if($scope.winB) {
            $scope.winTeamB = ValuesModel.getTeamB() + ValuesModel.getTeamBinput();
        } else {
            $scope.winTeamB = ValuesModel.getTeamB() - ValuesModel.getTeamBinput();
        }


        $scope.creditTeamA = ValuesModel.getTeamA();
        $scope.creditTeamB = ValuesModel.getTeamB();

        $scope.betTeamA = ValuesModel.getTeamAinput();
        $scope.betTeamB = ValuesModel.getTeamBinput();

        var timeout = setTimeout(function () {
            document.getElementById('modal14_header').classList.add("notable");
            document.getElementById('modal14_jumbotron').classList.add("notable");
            document.getElementById('endResultHeader').classList.remove("notable");
            document.getElementById('endResultTable').classList.remove("notable");

            clearTimeout(timeout);
        }, 3 * 1000);
    };
};

var ctrl = angular.module('controller.master', ['model.values']);

ctrl.controller('MasterController', Ctrl);