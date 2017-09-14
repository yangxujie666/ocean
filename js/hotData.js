webpackJsonp([7],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {var layer = __webpack_require__(438);
	__webpack_require__(439);
	var Handlebars = __webpack_require__(440);
	var nicescroll=__webpack_require__(448);
	var pagination=__webpack_require__(449)
	$(function() {
		$(".shoujiabtn i").click(function(){
			$(this).addClass("active").siblings().removeClass("active");
		})
		$(".public-tab li").click(function(){
			$(this).addClass("active").siblings().removeClass("active");
			var index=$(this).index();
			$(".public-tab-con .public-tab-con1").eq(index).addClass("active").siblings().removeClass("active");
		})
		$(".hot-data-con1-paixu-r label input").on("click",function(){
			$(this).addClass("active");
			$(this).parent("label").siblings().children("input").removeClass("active");
		})
	})
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ })
]);