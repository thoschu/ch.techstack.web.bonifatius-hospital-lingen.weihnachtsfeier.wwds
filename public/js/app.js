var app = angular.module('app', ['ngRoute', 'ngAnimate', 'model.values', 'controller.start', 'controller.modal', 'controller.points', 'controller.master']);

app.config(function($routeProvider) {
    console.log('###');
});

app.constant("player_vars", {
        'showinfo': 0,
        'modestbranding': 1,
        'autoplay': 1,
        'controls': 0,
        'autohide': 1,
        'wmode': 'opaque',
        'rel': 0,
        'loop': 1
    })
    .constant("videoId", "-0g1q4tdoLA");

app.run(function ($log, player_vars, videoId, ValuesModel, player_clever, player_tierisch, player_koerper, player_damals, player_sonne, player_fragezeichen, player_genial, player_wasser, player_essen, player_staatsmaenner, player_ticken, player_globus) {
    ValuesModel.setInfo("RUN app");

    $log.info(ValuesModel.getInfo());
    $log.info("http://videojs.com");

    var tag = document.createElement('script');
    tag.src = "//www.youtube.com/iframe_api";

    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    function setPlayer(player, onPlayerReady, onPlayerStateChange) {
        return new YT.Player(player, {
            width: '100%',
            playerVars: player_vars,
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });
    };

    function addEventListenerAndCallback(one, two, three, cb) {
        let ele = document.getElementById(one);
        ele.addEventListener("click", cb);
        ele = document.getElementById(two);
        ele.addEventListener("click", cb);
        ele = document.getElementById(three);
        ele.addEventListener("click", cb);
    };

    function hideModal(header, jumbotron) {
        let element = document.getElementById(header);
        element.style.display = 'none';
        element = document.getElementById(jumbotron);
        element.style.display = 'none';
    };

    function showDialog(player, domElem) {
        document.getElementById(player).style.display = 'block';
        document.querySelector(domElem).classList.remove('is-paused');
    };

    function loadVideo(event, start, end) {
        event.target.loadVideoById({
            'videoId': videoId,
            'startSeconds': start,
            'endSeconds': end,
            'suggestedQuality': 'highres'
        });
    };

    function changeBadge(badge, newClass) {
        element = document.getElementById(badge);
        element.classList.remove('badge-warning');
        element.classList.add(newClass);
    };

    function hidePlayer(player) {
        let element = document.getElementById(player);
        //element.parentNode.removeChild(element);
        element.style.display = 'none';
    };

    function reopenModal(header, jumbotron) {
        element = document.getElementById(header);
        element.style.display = 'block';
        element = document.getElementById(jumbotron);
        element.style.display = 'block';
    };

    function closeVideoModal(modal) {
        let inst = $(modal).remodal();
        inst.close();
        //inst.destroy();
    };

    function stopYTPlayer(player) {
        if (!_.isNil(player.pauseVideo))
            player.pauseVideo();
    };

    function closeVideoModalDelay(modal) {
        setTimeout(closeVideoModal, 5000, modal);
    };

    function getHandler(modal_header, modal_jumbotron, showDialogParam1, showDialogParam2, start, end, button1, button2, button3, playerParam, badge1, badge1Type, badge2, badge2Type, badge3, badge3Type, modal) {
        return {
            getOnPlayerReady: function () {
                return function onPlayerReady(event) {
                    function fn() {
                        hideModal(modal_header, modal_jumbotron);
                        showDialog(showDialogParam1, showDialogParam2);
                        loadVideo(event, start, end);
                    };

                    addEventListenerAndCallback(button1, button2, button3, fn);
                };
            },
            getOnPlayerStateChange: function () {
                return function onPlayerStateChange(event) {
                    if (event.data === YT.PlayerState.ENDED) {
                        hidePlayer(playerParam);

                        changeBadge(badge1, badge1Type);
                        changeBadge(badge2, badge2Type);
                        changeBadge(badge3, badge3Type);

                        reopenModal(modal_header, modal_jumbotron);

                        closeVideoModalDelay(modal);
                    }
                };
            }
        }
    };

    window.onYouTubeIframeAPIReady = function () {

        // var intervalID = setInterval(function () {
        //     if (/loaded/i.test(document.readyState)) {
        //         clearInterval(intervalID);
        //
        //     }
        // }, 1000);


        var cleverHandler = getHandler(
            "modal1_header", "modal1_jumbotron", 'player_clever', '#player_clever', 1506, 1531.5, "clever_one", "clever_two",
            "clever_three", 'player_clever', "clever1", "badge-success", "clever2", "badge-danger", "clever3", "badge-danger", '[data-remodal-id=modal1]'
        );
        player_clever = setPlayer(
            'player_clever',
            cleverHandler.getOnPlayerReady(),
            cleverHandler.getOnPlayerStateChange()
        );

        var tierischHandler = getHandler(
            "modal2_header", "modal2_jumbotron", 'player_tierisch', '#player_tierisch', 2191.75, 2221, "tierisch_one", "tierisch_two",
            "tierisch_three", 'player_tierisch', "tierisch1", "badge-success", "tierisch2", "badge-danger", "tierisch3", "badge-danger", '[data-remodal-id=modal2]'
        );
        player_tierisch = setPlayer(
            'player_tierisch',
            tierischHandler.getOnPlayerReady(),
            tierischHandler.getOnPlayerStateChange()
        );

        var koerperHandler = getHandler(
            "modal3_header", "modal3_jumbotron", 'player_koerper', '#player_koerper', 1277, 1296, "koerper_one", "koerper_two",
            "koerper_three", 'player_koerper', "koerper1", "badge-success", "koerper2", "badge-danger", "koerper3", "badge-danger", '[data-remodal-id=modal3]'
        );
        player_koerper = setPlayer(
            'player_koerper',
            koerperHandler.getOnPlayerReady(),
            koerperHandler.getOnPlayerStateChange()
        );

        var damalsHandler = getHandler(
            "modal4_header", "modal4_jumbotron", 'player_damals', '#player_damals', 614.75, 643.5, "damals_one", "damals_two",
            "damals_three", 'player_damals', "damals1", "badge-danger", "damals2", "badge-success", "damals3", "badge-danger", '[data-remodal-id=modal4]'
        );
        player_damals = setPlayer(
            'player_damals',
            damalsHandler.getOnPlayerReady(),
            damalsHandler.getOnPlayerStateChange()
        );

        var sonneHandler = getHandler(
            "modal5_header", "modal5_jumbotron", 'player_sonne', '#player_sonne', 1671.75, 1711.55, "sonne_one", "sonne_two",
            "sonne_three", 'player_sonne', "sonne1", "badge-danger", "sonne2", "badge-danger", "sonne3", "badge-success", '[data-remodal-id=modal5]'
        );
        player_sonne = setPlayer(
            'player_sonne',
            sonneHandler.getOnPlayerReady(),
            sonneHandler.getOnPlayerStateChange()
        );

        var fragezeichenHandler = getHandler(
            "modal6_header", "modal6_jumbotron", 'player_fragezeichen', '#player_fragezeichen', 1131.5, 1162, "fragezeichen_one", "fragezeichen_two",
            "fragezeichen_three", 'player_fragezeichen', "fragezeichen1", "badge-danger", "fragezeichen2", "badge-success", "fragezeichen3", "badge-danger", '[data-remodal-id=modal6]'
        );
        player_fragezeichen = setPlayer(
            'player_fragezeichen',
            fragezeichenHandler.getOnPlayerReady(),
            fragezeichenHandler.getOnPlayerStateChange()
        );

        var genialHandler = getHandler(
            "modal7_header", "modal7_jumbotron", 'player_genial', '#player_genial', 1899.75, 1924.25, "genial_one", "genial_two",
            "genial_three", 'player_genial', "genial1", "badge-success", "genial2", "badge-danger", "genial3", "badge-danger", '[data-remodal-id=modal7]'
        );
        player_genial = setPlayer(
            'player_genial',
            genialHandler.getOnPlayerReady(),
            genialHandler.getOnPlayerStateChange()
        );

        var wasserHandler = getHandler(
            "modal8_header", "modal8_jumbotron", 'player_wasser', '#player_wasser', 772.5, 809.25, "wasser_one", "wasser_two",
            "wasser_three", 'player_wasser', "wasser1", "badge-success", "wasser2", "badge-danger", "wasser3", "badge-danger", '[data-remodal-id=modal8]'
        );
        player_wasser = setPlayer(
            'player_wasser',
            wasserHandler.getOnPlayerReady(),
            wasserHandler.getOnPlayerStateChange()
        );

        var essenHandler = getHandler(
            "modal9_header", "modal9_jumbotron", 'player_essen', '#player_essen', 427.5, 454.5, "essen_one", "essen_two",
            "essen_three", 'player_essen', "essen1", "badge-success", "essen2", "badge-danger", "essen3", "badge-danger", '[data-remodal-id=modal9]'
        );
        player_essen = setPlayer(
            'player_essen',
            essenHandler.getOnPlayerReady(),
            essenHandler.getOnPlayerStateChange()
        );

        var staatsmaennerHandler = getHandler(
            "modal10_header", "modal10_jumbotron", 'player_staatsmaenner', '#player_staatsmaenner', 925.25, 958.5, "staatsmaenner_one", "staatsmaenner_two",
            "staatsmaenner_three", 'player_staatsmaenner', "staatsmaenner1", "badge-danger", "staatsmaenner2", "badge-danger", "staatsmaenner3", "badge-success", '[data-remodal-id=modal10]'
        );
        player_staatsmaenner = setPlayer(
            'player_staatsmaenner',
            staatsmaennerHandler.getOnPlayerReady(),
            staatsmaennerHandler.getOnPlayerStateChange()
        );

        var tickenHandler = getHandler(
            "modal11_header", "modal11_jumbotron", 'player_ticken', '#player_ticken', 2373.5, 2401.75, "ticken_one", "ticken_two",
            "ticken_three", 'player_ticken', "ticken1", "badge-danger", "ticken2", "badge-success", "ticken3", "badge-danger", '[data-remodal-id=modal11]'
        );
        player_ticken = setPlayer(
            'player_ticken',
            tickenHandler.getOnPlayerReady(),
            tickenHandler.getOnPlayerStateChange()
        );

        var globusHandler = getHandler(
            "modal12_header", "modal12_jumbotron", 'player_globus', '#player_globus', 250.75, 290.5, "globus_one", "globus_two",
            "globus_three", 'player_globus', "globus1", "badge-danger", "globus2", "badge-success", "globus3", "badge-danger", '[data-remodal-id=modal12]'
        );
        player_globus = setPlayer(
            'player_globus',
            globusHandler.getOnPlayerReady(),
            globusHandler.getOnPlayerStateChange()
        );

        //ToDo master

    };

    function openedOrClosed(e) {
        function reopenModal(player, modal) {
            if (player.B === true && player.getPlayerState() === 2) {
                player.playVideo();
            } else if (player.B === false) {
                closeVideoModal(modal);
            }
        };

        function switched(player, modal) {
            if (player) {
                var type = e.type;
                if (type === 'opened') {
                    reopenModal(player, modal);
                } else if (type === 'closed') {
                    stopYTPlayer(player);
                }
            }
        };

        switch (e.target.id) {
            case 'modal1':
                switched(player_clever, '[data-remodal-id=modal1]');
                break;
            case 'modal2':
                switched(player_tierisch, '[data-remodal-id=modal2]');
                break;
            case 'modal3':
                switched(player_koerper, '[data-remodal-id=modal3]');
                break;
            case 'modal4':
                switched(player_damals, '[data-remodal-id=modal4]');
                break;
            case 'modal5':
                switched(player_sonne, '[data-remodal-id=modal5]');
                break;
            case 'modal6':
                switched(player_fragezeichen, '[data-remodal-id=modal6]');
                break;
            case 'modal7':
                switched(player_genial, '[data-remodal-id=modal7]');
                break;
            case 'modal8':
                switched(player_wasser, '[data-remodal-id=modal8]');
                break;
            case 'modal9':
                switched(player_essen, '[data-remodal-id=modal9]');
                break;
            case 'modal10':
                switched(player_staatsmaenner, '[data-remodal-id=modal10]');
                break;
            case 'modal11':
                switched(player_ticken, '[data-remodal-id=modal11]');
                break;
            case 'modal12':
                switched(player_globus, '[data-remodal-id=modal12]');
                break;
            case 'modal13':
                switched(null, '[data-remodal-id=modal13]');
                break;
            case 'modal14':
                switched(null, '[data-remodal-id=modal14]');
                break;
            default:
                throw Error();
                break;
        }
    };

    _.forEach(['opened', 'closed'], function (eventType) {
        $(document).on(eventType, '.remodal', function (e) {
            openedOrClosed(e);
        });
    });

    document.addEventListener('keydown', function(event) {
        var inst = $('[data-remodal-id=modal13]').remodal();

        if (event.code == 'KeyZ' && (event.ctrlKey || event.metaKey)) {
            inst.open();
        } else if (event.code == 'KeyX' && (event.ctrlKey || event.metaKey)) {
            // var b = document.getElementsByTagName("BODY")[0];
            // b.style.backgroundColor = "white";
            document.getElementById("startTeamA").style.visibility = "hidden";
            document.getElementById("startTeamB").style.visibility = "hidden";
            document.getElementById("main").style.visibility = "hidden";
            document.getElementById("overlay2").style.backgroundImage = "url('../img/logo.jpg')";
            document.getElementById("overlay2").style.backgroundSize = "contain";
            document.getElementById("overlay2").style.display = "block";
        }
    });
});