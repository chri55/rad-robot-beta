---
permalink: /podcast/
layout: page
title: "The Podcast"
---

Ideally, we have a SoundCloud embed here with a link to the most recent episode of the podcast.

<script src="https://connect.soundcloud.com/sdk/sdk-3.3.0.js"></script>
<script>
SC.initialize({
  client_id: 'YOUR_CLIENT_ID'
});

var track_url = 'http://soundcloud.com/forss/flickermood';
SC.oEmbed(track_url, { auto_play: true }).then(function(oEmbed) {
  console.log('oEmbed response: ', oEmbed);
});
</script>
