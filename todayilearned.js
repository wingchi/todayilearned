var subredditAPI = "http://www.reddit.com/r/todayilearned/top.json?&limit=1";

$.getJSON( subredditAPI, function( data ) {
  //alert( "Load was performed." );
  $("#til-blurb").html('<a href="' + data.data.children[0].data.url + '">' + data.data.children[0].data.title + '</a>');
});
