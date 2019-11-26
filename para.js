const imgDeets = [{

        imgName: '.bgImg-1',
        imgWidth: 1920,
        imgHeight: 1080,
    },{

        imgName: '.bgImg-2',
        imgWidth: 1800,
        imgHeight: 1200,
    },{

        imgName: '.bgImg-3',
        imgWidth: 1920,
        imgHeight: 1080,
    }]



$(document).ready(function() {
  resize_parallax();
});

/* resize the image(s) on page resize */
$(window).on('resize', function(){
  resize_parallax();
});




// /* keep all of your resize function calls in one place so you don't have to edit them twice (on page load and resize) */
// function resize_all_parallax() {
// 	var div_id = 'bgImg-1'; /* the ID of the div that you're resizing */
// 	var img_w = 1920; /* the width of your image, in pixels */
// 	var img_h = 1080; /* the height of your image, in pixels */
// 	resize_parallax(div_id,img_w,img_h);
// }

/* this resizes the parallax image down to an appropriate size for the viewport */
function resize_parallax() {
  for (var i = 0; i < imgDeets.length; i++) {
    var div = $(imgDeets[i].imgName);
    var divwidth = div.width();
    if (divwidth < 769) { var pct = (imgDeets[i].imgHeight/imgDeets[i].imgWidth) * 105; } /* show full image, plus a little padding, if on static mobile view */
    else { var pct = 60; } /* this is the HEIGHT as percentage of the current div WIDTH. you can change it to show more (or less) of your image */
    var newheight = Math.round(divwidth * (pct/100));
    newheight = newheight  + 'px';
    div.height(newheight);
   }
 }
