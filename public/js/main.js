var intervalID;

intervalID = setInterval(function () {
    //if (/loaded|complete/i.test(document.readyState)) {
    if (/complete/i.test(document.readyState)) {
        console.info('READY');
        clearInterval(intervalID);
        //angular.bootstrap(document, ['app']);
        document.getElementById("overlay1").style.display = "none";
    }
}, 1000);