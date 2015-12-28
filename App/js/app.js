/**
 * http://usejsdoc.org/
 */

console.log('app.js locaded...');

//
// document.addEventListener('DOMContentLoaded', function(e) {
//	
// console.log('DOM Ready event..');
//	
//
// var msgBox=document.getElementsByClassName('jumbotron')[0];
// var showBtn=document.getElementsByClassName('btn btn-success')[0];
// var hideBtn=document.getElementsByClassName('btn btn-danger')[0];
//	
// msgBox.addEventListener('click', function(e) {
// console.log('box click handler');
// }, true);
//
// hideBtn.addEventListener('click', function(e) {
// console.log('hide-btn click handler..');
// msgBox.style.display='none';
// }, true);
// showBtn.addEventListener('click', function(e) {
// msgBox.style.display='block';
// }, false);
//	
// }, false);
//
// window.onload=function(){
// console.log('Load event...');
// }

// jQuery(document).ready(function() {
//
// var box = jQuery('.jumbotron');
// var showBtn = jQuery('.btn-success');
// var hideBtn = jQuery('.btn-danger');
//
// showBtn.click(function(e) {
// // box.css('display', 'block');
// box.show();
// });
// hideBtn.click(function(e) {
// // box.css('display', 'none');
// box.hide();
// });
// });

/*
 * syntax
 * 
 * jQuery(selector).action();
 * 
 */

// -----------------------------------------------
/*
 * jQuery or $
 * 
 */


// var jqColln=$('div#myBox.foo');
// console.log(jqColln.length);

// $("div.foo").click(function(){
// //$("span",this).addClass('active');
// $(this).find("span").css('border', '1px solid red')
// });

// var domEle=document.getElementById('boxTxt');
// $("div.foo").click(function(){
// $(domEle).slideUp();
// });

// var boxEleColln=$('<div>This Another Box</div>');
// boxEleColln.addClass('jumbotron');
// $(document.body).append(boxEleColln)
//
// $("<img/>")
// $("<input/>")
// console.log($('<br/>2<br/s>3'));


//$("<div></div>", {
//	'class' : 'container jumbotron',
//	text : 'This is Another Box',
//	click : function(event) {
//		console.log("U clicked");
//	}
//
//}).appendTo(document.body)


//
//$(document).ready(function(){
//	
//});
//
//$(function(){
//	// document ready...
//});
//
//
//
//jQuery(function($){
//	//

//});
//
//

//--------------------------------------


//
//var j=jQuery.noConflict();
//j('div').hide();


//---------------------------------------

$.getScript("js/myPlugin.js",function(){
	setTimeout(function() {
		$.holdReady(false);
	},10000);
})

jQuery(function($){
	console.log('DOM ready....');
});






