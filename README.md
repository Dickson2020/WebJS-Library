# WebJS-Library

WebJS is a JavaScript library for developing
Extremely fast webpages, writing lesser HTML code
The primary aim of WebJS is to enable web developers with little knowledge of JavaScript to be able to develop webpages with heavy functions by importing and using it.

WebJS has a web based GUI for building web pages, without writing any HTML code
<h3>Installation and Usage</h3>
<p>


<style>
<P>
#home_page{

 Width:100%;
  height:600px;
  background-color:#000;
}</p>

<p>
#second_page{

 Width:100%;
  height:600px;
  background-color:red;
}
</P>
</style>
<script src="Web.js">
<p>
let init = new Components(); //GUI base window
//Make sure to give the html body tag an id of "window".
</p><p>MENU = ["Home"]</p><p>
ICONS = [null]</p>  //if you have icons put them in a folder directory and link them e.g <b> ICONS = ["img/home_icon.png",...]</b>

<h4> How To Create Pages </h4>
<P>
let home_page = init.WEB_CARD(); //creates a new html card element only when this page this visible and destroy when not in view.
</P><p>let second_page = init.WEB_CARD();
</P><p>second_page.id = "second_page"
</P><p>home_page.id = "home_page" //specify id for styling CSS
</P>
<P>
let PAGES = [{
page: home_page,
location:MENU[0]
},</P><p>{
location:MENU[1],
page:second_page
]] </P> //You can add more pages

<P>
init.Navigation("title","custom",PAGES);
</P>
</script>

</p>
