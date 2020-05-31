/* 
 * Knowl - Feature Demo for Knowls
 * Copyright (C) 2011  Harald Schilly
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/* javascript code for the knowl features 
 * global counter, used to uniquely identify each knowl-output element
 * that's necessary because the same knowl could be referenced several times
 * on the same page */

 // DOM = Document Object Model
var knowl_id_counter = 0;
 
function knowl_click_handler($el) {
  // the knowl attribute holds the id of the knowl
  // The jQuery attr() method is also used to set/change attribute values.
  //The .attr() method gets the attribute value for only the first element in the matched set.
  var knowl_id = $el.attr("knowl");
  // the uid is necessary if we want to reference the same content several times
  var uid = $el.attr("knowl-uid");
  // This #knowl-output tag uses the corresponding css class
  var output_id = '#knowl-output-' + uid; 
  var $output_id = $(output_id);
  // create the element for the content, insert it after the one where the 
  // knowl element is included (e.g. inside a <h1> tag) (sibling in DOM)
  // The siblings() method returns all sibling elements of the selected element.
  var idtag = "id='"+output_id.substring(1) + "'";
  //substring(1) select the string from the second chracter
  var kid   = "id='kuid-"+ uid + "'";
  // if we already have the content, toggle visibility
  // You can also toggle between hiding and showing an element with the toggle() method.
  // The jQuery slideToggle() method toggles between the slideDown() and slideUp() methods.
  //If the elements have been slid down, slideToggle() will slide them up.
  //If the elements have been slid up, slideToggle() will slide them down.
  if ($output_id.length > 0) {
    //The length property contains the number of elements in the jQuery object.
     $("#kuid-"+uid).slideToggle("fast");
     $el.toggleClass("active");
     //Toggle between adding and removing the "active" class name for all el elements:
 
  // otherwise download it or get it from the cache
  } else { 
    var knowl = "<div class='knowl-output' "+kid+"><div class='knowl'><div class='knowl-content' " +idtag+ ">loading '"+knowl_id+"'...</div><div class='knowl-footer'>&nbsp;</div></div></div>";
    
    // check, if the knowl is inside a td or th in a table. otherwise assume its
    // properly sitting inside a <div> or <p>
    if($el.parents().is("table")) {
      // assume we are in a td or th tag, go 2 levels up
      var cols = $el.parent().parent().children().length;
      $el.parent().parent().after(
          "<tr><td colspan='"+cols+"'>"+knowl+"</td></tr>");
    } else {
      $el.parent().after(knowl);
    }
   
    // "select" where the output is and get a hold of it 
    var $output = $(output_id);
    $output.load("knowls/demo1")
    //alert($output.text())
    var $knowl = $("#kuid-"+uid);
    $output.addClass("loading");
    $knowl.show();
    //The show() method shows the hidden, selected elements.
    // The load() method loads data from a server and puts the returned data into the selected element.
    $output.load('knowls/' + knowl_id+".html",
     function(response, status, xhr) { 
      $knowl.removeClass("loading");
      if (status == "error") {
        $el.removeClass("active");
        $output.html("<div class='knowl-output error'>ERROR: " + xhr.status + " " + xhr.statusText + '</div>');
      } else if (status == "timeout") {
        $el.removeClass("active");
        $output.html("<div class='knowl-output error'>ERROR: timeout. " + xhr.status + " " + xhr.statusText + '</div>');
      } else {
        $knowl.hide();
        $el.addClass("active");
      }
      // in any case, reveal the new output after mathjax has finished
      MathJax.Hub.Queue(['Typeset', MathJax.Hub, $output.get(0)]);
      MathJax.Hub.Queue([ function() { $knowl.slideDown("slow"); }]);
    });
  }
} //~~ end click handler for *[knowl] elements


$(function() {
  $("body").on("click", "*[knowl]", function(evt) {
    evt.preventDefault();
    var $knowl = $(this);
    if(!$knowl.attr("knowl-uid")) {
      $knowl.attr("knowl-uid", knowl_id_counter);
      knowl_id_counter++;
    }
    knowl_click_handler($knowl, evt);
  });
});



