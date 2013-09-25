function ImageGenerator(target, text, image_src) {
	/** @private */
	this.char_width_ = 0;
	
	/** @private */
	this.char_height_ = 0;
	
	/** @private */
	this.target_element_ = target;
	
	/** @private */
	this.text_ = text;
	
	/** @private */
	this.image_src_ = image_src;
}

ImageGenerator.prototype.calculateCharacterDimensions = function() {
	var span = $('<span>', {
		'text': '.'
	});
	
	// Add to the target element temporarily
	this.target_element_.append(span);
	
	this.char_width_ = span.width();
	this.char_height_ = span.height();
	
	span.remove(); // Remove this temporary element..
};

ImageGenerator.prototype.loadImage = function() {
	var image = new Image();
	image.onerror = $.proxy(this.ImageLoadError, this);
	image.onload = $.proxy(this.ImageLoadSuccess, this);
	image.src = this.image_src_;
};

ImageGenerator.prototype.ImageLoadError = function() {
};

ImageGenerator.prototype.ImageLoadSuccess = function(event) {
	var image = event.target;
	// create a canvas..
	var canvas = document.createElement('canvas');
	canvas.width = image.width;
	canvas.height = image.height;
	
	$(document.body).append(canvas); // Add canvas to the page temporarily...
	
	var context = canvas.getContext('2d');
	context.drawImage(image, 0, 0); // draw the image on the canvas starting at (0,0)
};


var text = "<!DOCTYPE html>" + document.getElementsByTagName('html')[0].innerHTML + "</html>";
text=text.replace(/\s*(\n\s*)+/ig,'').replace(/\s+(?= )/g,'').split("");

var image=new Image(),
	span=$('<span>',{'text':'.'});
$('#fox').append(span);

var span_width=span.width(),
	span_height=span.height();
span.remove();

image.src='img/me-large.jpg';
image.onload=function(){
	var cnvs=document.createElement('canvas');
	cnvs.width=image.width;
	cnvs.height=image.height;

	$('body').append(cnvs);

	var ctx=cnvs.getContext('2d');
	ctx.drawImage(image,0,0);
	var per_box=Math.floor(((cnvs.width*cnvs.height)/text.length)),
		ratio=span_height/span_width,
		x_size=Math.sqrt(per_box/ratio),
		y_size=per_box/x_size,
		imageData;

	try {
		imageData=ctx.getImageData(0,0,cnvs.width,cnvs.height);
		getPoints(imageData);
	} catch(ex) {
		$("#unsupported").show();
	}
	$(cnvs).remove();

	function getPoints(imagedata){
		var i=0,lastSeven='';
		
		var target_rows=Math.ceil((cnvs.height-2) / y_size)+1,
			target_cols=Math.ceil((cnvs.width-2) / x_size)+1,
			ypad=span_height;
		
		$("#fox").width(span_width*target_cols + "px");
		
		for(var y=0;y<cnvs.height-1;y+=y_size){
			var total=0,row=$('<span>').css({'display':'block','height':span_height});
			var ypos = y * span_height / y_size;

			for(var x=0;x<cnvs.width - 1;x+=x_size){
				var color=getColor(imageData,x,y),
				character=(text[i] !== undefined) ? text[i] : "";
				
				i++;
				total++;

				$(row).append($("<span>",{
					'style':('color:'+ color),
					'text':character
					}
				));
				var font_style="normal";
				var font_size="16px";

				lastSeven = (lastSeven+character).substr(-7);
			}
		   $('#fox').append(row);
		}
	}
};
  
  /* get the color */
function getColor(imageData, x, y) {
	var x = Math.round(x),
		y = Math.round(y),
		index = (y * imageData.width + x) * 4,
		red = imageData.data[index],
		green = imageData.data[index + 1],
		blue = imageData.data[index + 2],
		alpha = imageData.data[index + 3];

	/* Add border around the pixel */
	for(var x2 = -1; x2 <= 1; x2++) {
		for(var y2 = -1; y2 <= 1; y2++) {
			if(!(x2 == 0 && y2 == 0)){
				var index_new = ((y + y2) * imageData.width + x + x2) * 4;
				imageData.data[index_new] = 255;
				imageData.data[index_new + 1] = 255;
				imageData.data[index_new + 2] = 255;
				imageData.data[index_new + 3] = alpha;
			}
		}
	}
	return "rgb(" + red + "," + green + "," + blue + ")";
}