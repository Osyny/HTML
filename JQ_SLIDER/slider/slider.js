/**
 * Функция для инициализации слайдера
 * @param {string} sliderId ид элемента
 * @param {object} settings настройки слайдера
 */
 
var currentPage = 1; 
var dotsArray = [];
 
function sliderInit(sliderId, settings) {
   var slider = $('#'+sliderId).addClass('slider');
   var slides = slider.children();
   slides
       .wrapAll('<div class="slider-container"></div>')
       .addClass('slider-item')
       .each(function(i, item) {
            $(item).css({
                left: slider.innerWidth() * i
            })
       });
   if(settings === undefined){
       settings = {};
   }
   var sliderSettings = $.extend({}, sliderOptions, settings);
   if(sliderSettings.dots){
       createDots(slider);
   }

   if(sliderSettings.buttons){
       createButtons(slider);
   }
}
//Button
function createButtons(slider){
    $('<div class="slider-btn slider-btn-left"><<</div>')
        .appendTo(slider).on('click', moveLeft);
    $('<div class="slider-btn slider-btn-right">>></div>')
        .appendTo(slider).on('click', moveRight);
}
function moveLeft(){
	if (currentPage > -1)
	{
		$(this).parent().find('.slider-item').animate({
			left: '-=' + $(this).parent().outerWidth() + 'px'
		}, 1000)
	
	
		currentPage--;
		updateDots();
	}
}
function moveRight(){
	if (currentPage < 1)
	{
		$(this).parent().find('.slider-item').animate({
			left: '+=' + $(this).parent().outerWidth() + 'px'
		}, 1000)
		
		currentPage++;
		updateDots();
	}

}


var sliderOptions = {
    dots: true,
    buttons: true
};

// Dots
function createDots(slider)
{
	for (var i=0; i < 3; i++)
	{
		dotsArray[i] = $('<div class="slider-dots slider-dots-item"></div>');
		dotsArray[i].appendTo(slider);
		$(dotsArray[i]).css({
                left: (dotsArray[i].innerWidth() + 10) * i
            })
		
	}
	//dotsActive();
    updateDots();
	
}

function updateDots()
{
	for (var i=0; i < 3; i++)
	{
		if (i == currentPage)
			$(dotsArray[1 - i]).addClass('slider-dots-item-active');
		else
			$(dotsArray[1 - i]).removeClass('slider-dots-item-active');
	}
}

/*function dotsActive()
{
	$(this).parent().find('.slider-dots-item-active').animate({
        opacity:0.5
    }, 1000)
}*/