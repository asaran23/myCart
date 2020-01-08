$(function(){
	$.get("https://api.myjson.com/bins/qzuzi", function(data, status){
		$.each(data, function (key, data) {
			curVal ='<article class="item">'+
					'<img src="'+data.img_url+'">'+
					'<span class="item-label">'+data.name+'</span>'+
					'<div>'+
					'<span class="selling-price">&#8377;'+data.price+'</span>'+
					'<span class="original-price">'+data.price+'</span>'+
					'<span class="offer-price">'+data.discount+'%</span>'+
					'</div><div class="button-wrapper">'+
					'<a class="btn-add-cart" href="cart.html">Add to Cart</a>'+
					'</div></article>';

			$(".items").append(curVal);
		});
	});
	$(".btn-filter-apply, .btn-filter-cancel, .btn-filter").click(function(){
		$("body").toggleClass("show-filter");
	});
	$(".btn-sort-apply, .btn-sort-cancel, .btn-sort").click(function(){
		$("body").toggleClass("show-sort");
	});
});