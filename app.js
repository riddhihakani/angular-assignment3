(function(){

'use strict';

angular.module('NarrowItDownApp',[])
.controller('NarrowItDownController',NarrowItDownController)
.service('MenuSearchService',MenuSearchService)
.constant('ApiBasePath', "https://thehotel-website.herokuapp.com");

NarrowItDownController.$inject = ['MenuSearchService'];

function NarrowItDownController(MenuSearchService){

    var menuList = this;
}



});