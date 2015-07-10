$(document).ready(function() {

	$("#submit").click(function() {

		// Get the track from the text box
		var yourTrack = $("#yourTrack").val();

		$.ajax({
			url: "https://api.spotify.com/v1/search",
			data: {
				q: yourTrack,
				type: 'track'
			},
			success: function(response) {
				console.log(response);

				var track = response.tracks.items[0];
				$("#theTrack").html(track.name);

				var pop = response.tracks.items[0];
				$("#popularity").html(pop.popularity);

				var artist = response.tracks.items[0].artists[0];
				$("#artistName").html(artist.name);

				var album = response.tracks.items[0].album;
				$("#album").html(album.name);

				var artwork = response.tracks.items[0].album.images[0];
				$("#artwork").html("<img src='" + artwork.url + "'>");
			},

			error: function() {
				alert(yourTrack + " does not exist in Spotify!");
			}
		});
	});
});