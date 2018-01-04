'use strict';

const Hapi = require('hapi'),
    Inert = require('inert'),

    server = new Hapi.Server();

server.connection({
    port: 8080,
    host: '0.0.0.0'
});

// Add the route
// server.route({
//     method: 'GET',
//     path:'/hello',
//     handler: function (request, reply) {
//
//         return reply('hello world');
//     }
// });

server.register(Inert, (err) => {
    if (err) {
        throw err;
    } else {
        server.route([{
            method: 'GET',
            path: '/',
            handler: function (request, reply) {
                reply.file('./public/index.html');
            }
        },{
            method: 'GET',
            path: '/templates/aside.one.tmpl.html',
            handler: function (request, reply) {
                reply.file('./public/templates/aside.one.tmpl.html');
            }
        }, {
            method: 'GET',
            path: '/templates/aside.two.tmpl.html',
            handler: function (request, reply) {
                reply.file('./public/templates/aside.two.tmpl.html');
            }
        },{
            method: 'GET',
            path: '/templates/main.tmpl.html',
            handler: function (request, reply) {
                reply.file('./public/templates/main.tmpl.html');
            }
        },{
            method: 'GET',
            path: '/css/style.css',
            handler: function (request, reply) {
                reply.file('./public/css/style.css');
            }
        },{
            method: 'GET',
            path: '/img/logo.jpg',
            handler: function (request, reply) {
                reply.file('./public/img/logo.jpg');
            }
        }, {
            method: 'GET',
            path: '/img/logo.png',
            handler: function (request, reply) {
                reply.file('./public/img/logo.png');
            }
        }, {
            method: 'GET',
            path: '/img/euro.jpg',
            handler: function (request, reply) {
                reply.file('./public/img/euro.jpg');
            }
        }, {
            method: 'GET',
            path: '/img/nope.jpg',
            handler: function (request, reply) {
                reply.file('./public/img/nope.jpg');
            }
        }, {
            method: 'GET',
            path: '/img/background-image-start.jpg',
            handler: function (request, reply) {
                reply.file('./public/img/background-image-start.jpg');
            }
        }, {
            method: 'GET',
            path: '/js/model/values.js',
            handler: function (request, reply) {
                reply.file('./public/js/model/values.js');
            }
        }, {
            method: 'GET',
            path: '/js/controller/start.js',
            handler: function (request, reply) {
                reply.file('./public/js/controller/start.js');
            }
        }, {
            method: 'GET',
            path: '/js/controller/modal.js',
            handler: function (request, reply) {
                reply.file('./public/js/controller/modal.js');
            }
        }, {
            method: 'GET',
            path: '/js/controller/points.js',
            handler: function (request, reply) {
                reply.file('./public/js/controller/points.js');
            }
        }, {
            method: 'GET',
            path: '/js/controller/master.js',
            handler: function (request, reply) {
                reply.file('./public/js/controller/master.js');
            }
        }, {
            method: 'GET',
            path: '/js/app.js',
            handler: function (request, reply) {
                reply.file('./public/js/app.js');
            }
        }, {
            method: 'GET',
            path: '/js/main.js',
            handler: function (request, reply) {
                reply.file('./public/js/main.js');
            }
        }]);
    }
});

// Start the server
server.start((err) => {
    if (err) {
        throw err;
    } else {
        console.log('Server running at:', server.info.uri);
    }
});