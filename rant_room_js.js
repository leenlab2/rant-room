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
   $("#release").click(function(){
      $("#rant").fadeOut(1000);
      $("#message").delay(1000).fadeIn(1000);
      $("#links").delay(2000).fadeIn(1000);
   });
});
