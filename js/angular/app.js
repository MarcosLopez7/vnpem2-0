/**
 * Created by marcoslopez7 on 16/06/16.
 */
(function () {
    var app = angular.module('starter', ['starter.Factory']);

    app.controller('events', function ($scope, Factory) {
        $scope.eventos = Factory.data();
    });
}());