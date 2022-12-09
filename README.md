# WebJS-Library

WebJS is a JavaScript library for developing
Extremely fast webpages, writing lesser HTML code
The primary aim of WebJS is to enable web developers with little knowledge of JavaScript to be able to develop webpages with heavy functions by importing and using it.

WebJS has a web based GUI for building web pages, without writing any HTML code
<h3>Installation and Usage</h3>
<p>


<style>

#home_page{

 Width:100%;
  height:600px;
  background-color:#000;
}
#second_page{

 Width:100%;
  height:600px;
  background-color:red;
}
</style>
<script src="Web.js">
let init = new Components(); //GUI base window
//Make sure to give the html body tag an id of "window".
MENU = ["Home"]
ICONS = [null]  //if you have icons put them in a folder directory and link them e.g <b> ICONS = ["img/home_icon.png",...]

<h4> How To Create Pages </h4>

let home_page = init.WEB_CARD(); //creates a new html card element only when this page this visible and destroy when not in view.
let second_page = init.WEB_CARD();
second_page.id = "second_page"
home_page.id = "home_page" //specify id for styling CSS


let PAGES = [{
page: home_page,
location:MENU[0]
},{
location:MENU[1],
page:second_page
]] You can add more pages


init.Navigation("title","custom",PAGES);
</script>

</p>
