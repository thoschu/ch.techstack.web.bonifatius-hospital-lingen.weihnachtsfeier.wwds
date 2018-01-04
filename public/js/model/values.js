function ValuesModel($log, info, module_info, gamer, teamA, teamB, teamAinput, teamBinput) {
    $log.log(module_info);
    return {
        setInfo: function (param) {
            info = param;
        },
        getInfo: function () {
            return info;
        },

        setGamer : function(param) {
            gamer = param;
        },
        getGamer : function() {
            return gamer;
        },

        setTeamA : function(param) {
            teamA = param;
        },
        getTeamA : function() {
            return teamA;
        },

        setTeamB : function(param) {
            teamB = param;
        },
        getTeamB : function() {
            return teamB;
        },

        setTeamAinput : function(param) {
            teamAinput = param;
        },
        getTeamAinput : function() {
            return teamAinput;
        },

        setTeamBinput : function(param) {
            teamBinput = param;
        },
        getTeamBinput : function() {
            return teamBinput;
        }
    }
};

var model = angular.module('model.values', [])
    .value("info", null)
    .value("module_info", "Singleton for 'Wer weiß denn sowas...'")
    .value("player_clever", null)
    .value("player_tierisch", null)
    .value("player_koerper", null)
    .value("player_damals", null)
    .value("player_sonne", null)
    .value("player_fragezeichen", null)
    .value("player_genial", null)
    .value("player_wasser", null)
    .value("player_essen", null)
    .value("player_staatsmaenner", null)
    .value("player_ticken", null)
    .value("player_globus", null)
    .value("gamer", null)
    .value("teamA", 0)
    .value("teamB", 0)
    .value("teamAinput", 0)
    .value("teamBinput", 0)
    .constant("player_durations", {
        "m1": 1531.5 - 1506,
        "m2": 2221- 2191.75,
        "m3": 1296- 1277,
        "m4": 643.5- 614.75,
        "m5": 1711.55 - 1671.75,
        "m6": 1162 - 1131.5,
        "m7": 1924.25 - 1899.75,
        "m8": 809.25 - 772.5,
        "m9": 454.5 - 427.5,
        "m10": 958.5 - 925.25,
        "m11": 2401.75 - 2373.5,
        "m12": 290.5 - 250.75,
    })
    .factory("ValuesModel", ValuesModel)
    .run(function ($log) {
        $log.info("model.values");
    });