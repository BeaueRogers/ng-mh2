var app = angular.module("mhApp", []);


app.controller("mhCtrl", function($scope) {
  $scope.title = "title injected";
  $scope.music = "music injected";

  $scope.artists = [
    { artistName: "Bonobo", complete: "incomplete" },
    { artistName: "Tycho", complete: "complete" },
    { artistName: "Baths", complete: "incomplete" },
    { artistName: "Trifonic", complete: "complete" }
    ];

  $scope.killArtist = function(artist) {
  // Do you see the PFM here of full object comparison?
  var artistIndex = $scope.artists.indexOf(artist);

  if (artistIndex >= 0) {
    $scope.artists.splice(artistIndex, 1);
  }
};
});

