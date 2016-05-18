(function() {
	"use strict";

	angular
		.module('VinculacionApp')
		.factory('sections', sections);

	sections.$inject = ['$http'];

	function sections ($http) {
	   var url = 'http://fiasps.unitec.edu:8085/api/Sections';
        
        var service = {
            getSections: getSections,
            postSection: postSection
        };
        
        return service;
        
        function getSections (successCallback, errorCallback) {
            $http.get(url)
            	.then(successCallback)
              	.catch(errorCallback);
        }

        function postSection (data, successCallback, errorCallback) {
        	$http.post(url, data)
        		.then(successCallback)
                .catch(errorCallback);
        }
	}
})();