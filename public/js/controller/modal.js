function Ctrl($log, $scope, player_durations, ValuesModel) {
    $log.log('ModalController ready...');
    var that = this;

    $scope.button1 = function (id, m, b) {
        that.onClick(id);
        that.winOrLoose(m, b, player_durations, ValuesModel);
    };

    $scope.button2 = function (id, m, b) {
        that.onClick(id);
        that.winOrLoose(m, b, player_durations, ValuesModel);
    };

    $scope.button3 = function (id, m, b) {
        that.onClick(id);
        that.winOrLoose(m, b, player_durations, ValuesModel);
    };
};

var pt = Ctrl.prototype;

pt.onClick = function (element) {
    var ele = document.getElementById(element);
    ele.classList.remove("btn-outline-primary");
    ele.classList.add("btn-warning");
};

pt.winOrLoose = function (element, bool, durations, ValuesModel) {
    var ele = document.getElementById(element);

    var timeout = setTimeout(function (that) {
        var tempGamer = ValuesModel.getGamer();

        if (bool) {
            ele.classList.add(ValuesModel.getGamer());
            var currentpoints = (tempGamer === "teamA") ? ValuesModel.getTeamA() : ValuesModel.getTeamB(),
                newPoints = currentpoints + 20;

            if (tempGamer === "teamA")
                ValuesModel.setTeamA(newPoints);
            else
                ValuesModel.setTeamB(newPoints);
        } else {
            ele.classList.add("nope");
        }

        ValuesModel.setGamer((tempGamer === "teamA") ? "teamB" : "teamA");

        clearTimeout(timeout);
    }, _.get(durations, element) * 1000, this);
};

var ctrl = angular.module('controller.modal', ['model.values']);

ctrl.controller('ModalController', Ctrl);