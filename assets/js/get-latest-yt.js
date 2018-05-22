function show_my_videos(data) {
	var html = [''];

	$(data.items).each(function(index, item) {
	    var desc = item.snippet.title  ,
            videoId  = item.snippet.resourceId.videoId;
        console.log("Hello");

    // append HTML
        html.push('<iframe style="width: 600px; height: 400px;" src="https://www.youtube.com/embed/' + videoId  + '?rel=0&amp;autoplay=0amp;fullscreen=1"></iframe>'); });
	       $("#videos").html(html.join(''));
}

var url =
  "https://www.googleapis.com/youtube/v3/playlistItems?key=AIzaSyB8TEnPxmiOgF5NDnBiFauoOvTXmdUFAV8&playlistId=UUlWD3JYGVRSVhaAfulm3-kQ&&part=snippet&maxResults=1";
$.ajax({
  url: url,
  dataType: "jsonp",
  success: function(data) {
    console.log(data);
    show_my_videos(data);

  }
});
