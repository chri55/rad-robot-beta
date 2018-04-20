---
permalink: /comics/
layout: page
title: "Comics"
sidebar: right
# Images added to this page will be from ~/images/comics
---

Here, we can have a gallery of comics.

<head>
<style>
div.gallery {
    margin: 5px;
    border: 1px solid #ccc;
    float: left;
    width: 180px;
}

div.gallery:hover {
    border: 1px solid #777;
}

div.gallery img {
    width: 100%;
    height: auto;
}

div.desc {
    padding: 15px;
    text-align: center;
}
</style>
</head>
<body>
  {% for image in site.static_files %}
    {% if image.path contains 'images/comics' %}
      <div class="gallery">
        <img src="{{ site.url }}{{ image.path }}"/>
      </div>
    {% endif %}
  {% endfor %}


</body>


<!---
<div align="center">
  <div>
    <h4 class="sans" align="left"><b>Comic Title!</b></h4>
    <p></p>
    <p class="sans" align="left">Posted on mm.dd.yyyy</p>
    <img src="{{ site.url }}/images/Discord_Red_Blue_vectorized.png">
    <br>
</div>
<div align="center">
  <img src="{{ site.url }}/images/trangles.png">
</div>
--->
