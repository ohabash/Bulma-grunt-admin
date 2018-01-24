app.controller('downloads', function ($scope, $location, Auth, $timeout, $route, $rootScope, $location) {
	// console.log('downloads')
	

	$scope.downloads = [
		{
           "name" : "Resume",
            "url" : "https://www.dropbox.com/s/owe2qsmeg0y94q2/RESUME_2018.pdf?dl=1",
            // "img" : "https://cdn0.iconfinder.com/data/icons/seo-smart-pack/128/grey_new_seo2-07-512.png",
            'icon' : 'clipboard',
            "updated" : "January 2018",
            "type" : "PDF"
        },{
           "name" : "Letter of Recommendation",
            "url" : "https://www.dropbox.com/s/i6203mqueyr86ra/Omar-Habash-Recommendation%20%283%29.docx?dl=1",
            // "img" : "https://cdn0.iconfinder.com/data/icons/seo-smart-pack/128/grey_new_seo2-07-512.png",
            'icon' : 'thumbs-up',
            "updated" : "July 2014",
            "type" : "docx"
        },{
           "name" : "SUCCESS - MidYear Review",
            "url" : "https://www.dropbox.com/s/bvpk4eo103ejsmd/2017_midyear_omarhabash.pdf?dl=1",
            // "img" : "https://cdn0.iconfinder.com/data/icons/seo-smart-pack/128/grey_new_seo2-07-512.png",
            'icon' : 'history',
            "updated" : "July 2017",
            "type" : "pdf"
        },{
           "name" : "Path Award Nominations (awarded)",
            "url" : "https://www.dropbox.com/s/xef08z7m3yc4gqc/PATH_namination.pdf?dl=1",
            // "img" : "https://cdn0.iconfinder.com/data/icons/seo-smart-pack/128/grey_new_seo2-07-512.png",
            'icon' : 'trophy',
            "updated" : "December 2017",
            "type" : "pdf"
        }
	]

	$scope.locked = function() {
		$rootScope.slack('OH: Download rejected.')
		$rootScope.notice("lock",'Download Locked — 550', "please login to download.");
	}

	$scope.downloaded = function(i) {
		$rootScope.slack('OH: '+$scope.u.displayName+' downloaded '+i)
		$rootScope.notice("download",i+' Downloaded', "Please contact me if the document did not download");
	}


});