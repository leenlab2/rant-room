/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("menuSidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("menuSidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

$(document).ready(function() {
   $("#message").hide();
   $('#links').hide();
   $('#breathein').hide();
   $('#breatheout').hide();
   $("#release").click(function(){
      $("#rant").fadeOut(1000);
      $("#message").delay(1000).fadeIn(1000).fadeOut(1000);
      $("#breathein").delay(3000).fadeIn(1000).delay(500).fadeOut(1000);
      $("#breatheout").delay(5500).fadeIn(1000).delay(500).fadeOut(1000);
      $("#message").delay(5000).fadeIn(500);
      $("#links").delay(8000).fadeIn(500);
   });
});
