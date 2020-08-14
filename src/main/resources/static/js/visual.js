/**
 * 제   목 : slide-image를위한 JQuery 
 * 작성자 : 조재청
 * 연락처 : nick2615@nver.com	
 */

//적용할 이미지 목록
var img_url=[
	"/images/img1.jpg",
	"/images/img2.jpg",
	"/images/img3.jpg"]

//이미지 넓이,높이 설정
var viewHeight=520;
var viewWidth=1920;

$(function(){
	
	var images=$("#visual .visual-area .images-wrap li");
	
	for(var i=0; i < img_url.length; i++){
		$(images[i])
			.css("width", viewWidth)
			.css("height", viewHeight)
			.css("background","url("+img_url[i]+") no-repeat center");
	}
	
	//.images-wrap css 적용
	var images_wrap=$("#visual .visual-area .images-wrap");
	images_wrap
			.css("width", viewWidth * img_url.length)
			.css("display", "flex")
			.css("position", "absolute")
			.css("top", 0)
			.css("left", 0);
			
	//.visual-area css 적용
	var visual_area=$("#visual .visual-area");
	visual_area
			.css("position", "relative")
			.css("width", viewWidth)
			.css("height", viewHeight)
			.css("overflow", "hidden")
			.css("margin", "0 auto");
});











