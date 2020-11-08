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
      $("#message").delay(1000).fadeIn(1000).delay(500).fadeOut(1000);
      $("#breathein").delay(3500).fadeIn(1000).delay(1000).fadeOut(1000);
      $("#breatheout").delay(6500).fadeIn(1000).delay(1000).fadeOut(1000);
      $("#message").delay(6000).fadeIn(500);
      $("#links").delay(9000).fadeIn(500);
      $("#thoughts").reset();
   });
});
