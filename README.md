<h1 align = "center">
<img width="60px" src ="https://avatars0.githubusercontent.com/u/9892522?s=400&v=4" /> <br/>
freeCodeCamp <br/>
Image Search Abstraction Layer</h1>

<blockquote>
      User stories:
      <ul>1) I can get the image URLs, alt text and page urls for a set of images relating to a given search string.</ul>
      <ul>2) I can paginate through the responses by adding a ?offset=2 parameter to the URL.</ul>
      <ul>3) I can get a list of the most recently submitted search strings.</ul>
</blockquote>

<h3>Usage:</h3>
 <code>https://mysterious-brushlands-86683.herokuapp.com/api/imagesearch/pupper?offset=1</code>
<h3>Output:</h3>
<samp>
[
  {
    "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAnmfWXQG8ulhDhlFtg9o8ZbJLoU_j0cIcsPzw8XfxF2DMNJ8TvcSFtAo",
    "context": "https://www.youtube.com/watch%3Fv%3D4PDQ1gziLL8",
    "snippet": "youtube.comBig Ol Pupper and Doggo Special V.2 - YouTube1280 × 720 - 49 k - jpg",
    "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAnmfWXQG8ulhDhlFtg9o8ZbJLoU_j0cIcsPzw8XfxF2DMNJ8TvcSFtAo"
  }
]
</samp>
<br/>
<h3>Usage:</h3>
<code>https://mysterious-brushlands-86683.herokuapp.com/api/latest/imagesearch</code>
<h3>Output:</h3>
<samp>[
  {
    "term": "pupper",
    "when": "Thu Dec 14 2017 16:08:06 GMT+0300 (+03)"
  }
]</samp>
