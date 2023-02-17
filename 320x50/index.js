(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,100);


(lib.exclusions = function() {
	this.initialize(img.exclusions);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,100);


(lib.head1 = function() {
	this.initialize(img.head1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,100);


(lib.head2 = function() {
	this.initialize(img.head2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,100);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,100);


(lib.stroke = function() {
	this.initialize(img.stroke);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,100);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.stroke_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.stroke();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.stroke_1, new cjs.Rectangle(0,0,320,50), null);


(lib.logo_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.logo();
	this.instance.setTransform(0,0,0.5,0.4999);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logo_1, new cjs.Rectangle(0,0,320,50), null);


(lib.head2_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.head2();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.head2_1, new cjs.Rectangle(0,0,320,50), null);


(lib.head1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.head1();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.head1_1, new cjs.Rectangle(0,0,320,50), null);


(lib.exclusions_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.exclusions();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.exclusions_1, new cjs.Rectangle(0,0,320,50), null);


(lib.clickTag = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FFFF").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape.setTransform(364,45);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.back_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.back();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.back_1, new cjs.Rectangle(0,0,320,50), null);


// stage content:
(lib.index = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,106];
	// timeline functions:
	this.frame_0 = function() {
		//DOUBLECLICK CLICKTAG//
		
		this.clickTag.on("click", function(){
			window.open(clickTag, "_blank");        
		});
		
		// PAUSE ANIMATION IN MILLISECONDS //
		
		this.stop();
		setTimeout(this.play.bind(this), 200);
	}
	this.frame_106 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(106).call(this.frame_106).wait(1));

	// clickTag
	this.clickTag = new lib.clickTag();
	this.clickTag.name = "clickTag";
	this.clickTag.setTransform(160,24.95,0.4396,0.5555,0,0,0,364,44.9);
	new cjs.ButtonHelper(this.clickTag, 0, 1, 2, false, new lib.clickTag(), 3);

	this.timeline.addTween(cjs.Tween.get(this.clickTag).wait(107));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(2,1,1).p("A4/j5MAx/AAAIAAHzMgx/AAAg");
	this.shape.setTransform(160,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(107));

	// logo
	this.instance = new lib.logo_1();
	this.instance.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(107));

	// exclusions
	this.instance_1 = new lib.exclusions_1();
	this.instance_1.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(63).to({_off:false},0).to({alpha:1},43,cjs.Ease.cubicOut).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_1 = new cjs.Graphics().p("AldD6IAAi0IK7AAIAAC0g");
	var mask_graphics_2 = new cjs.Graphics().p("AldBaIAAizIK7AAIAACzg");
	var mask_graphics_3 = new cjs.Graphics().p("AldBaIAAizIK7AAIAACzg");
	var mask_graphics_4 = new cjs.Graphics().p("AldBaIAAizIK7AAIAACzg");
	var mask_graphics_5 = new cjs.Graphics().p("AldBaIAAizIK7AAIAACzg");
	var mask_graphics_6 = new cjs.Graphics().p("AldBaIAAizIK7AAIAACzg");
	var mask_graphics_7 = new cjs.Graphics().p("AldBaIAAizIK7AAIAACzg");
	var mask_graphics_8 = new cjs.Graphics().p("AldBaIAAizIK7AAIAACzg");
	var mask_graphics_9 = new cjs.Graphics().p("AldBaIAAizIK7AAIAACzg");
	var mask_graphics_10 = new cjs.Graphics().p("AldBaIAAizIK7AAIAACzg");
	var mask_graphics_11 = new cjs.Graphics().p("AldBaIAAizIK7AAIAACzg");
	var mask_graphics_12 = new cjs.Graphics().p("AldBaIAAizIK7AAIAACzg");
	var mask_graphics_13 = new cjs.Graphics().p("AldBaIAAizIK7AAIAACzg");
	var mask_graphics_14 = new cjs.Graphics().p("AldBaIAAizIK7AAIAACzg");
	var mask_graphics_15 = new cjs.Graphics().p("AldBaIAAizIK7AAIAACzg");
	var mask_graphics_16 = new cjs.Graphics().p("AldBaIAAizIK7AAIAACzg");
	var mask_graphics_17 = new cjs.Graphics().p("AldBaIAAizIK7AAIAACzg");
	var mask_graphics_18 = new cjs.Graphics().p("AldBaIAAizIK7AAIAACzg");
	var mask_graphics_19 = new cjs.Graphics().p("AldBaIAAizIK7AAIAACzg");
	var mask_graphics_20 = new cjs.Graphics().p("AldBaIAAizIK7AAIAACzg");
	var mask_graphics_21 = new cjs.Graphics().p("AldBaIAAizIK7AAIAACzg");
	var mask_graphics_22 = new cjs.Graphics().p("AldBaIAAizIK7AAIAACzg");
	var mask_graphics_23 = new cjs.Graphics().p("AldBaIAAizIK7AAIAACzg");
	var mask_graphics_24 = new cjs.Graphics().p("AldBaIAAizIK7AAIAACzg");
	var mask_graphics_25 = new cjs.Graphics().p("AldBaIAAizIK7AAIAACzg");
	var mask_graphics_26 = new cjs.Graphics().p("AldBaIAAizIK7AAIAACzg");
	var mask_graphics_27 = new cjs.Graphics().p("AldBaIAAizIK7AAIAACzg");
	var mask_graphics_28 = new cjs.Graphics().p("AldBaIAAizIK7AAIAACzg");
	var mask_graphics_29 = new cjs.Graphics().p("AldBaIAAizIK7AAIAACzg");
	var mask_graphics_30 = new cjs.Graphics().p("AldBaIAAizIK7AAIAACzg");
	var mask_graphics_31 = new cjs.Graphics().p("AldBaIAAizIK7AAIAACzg");
	var mask_graphics_32 = new cjs.Graphics().p("AldBaIAAizIK7AAIAACzg");
	var mask_graphics_33 = new cjs.Graphics().p("AldBaIAAizIK7AAIAACzg");
	var mask_graphics_34 = new cjs.Graphics().p("AldBaIAAizIK7AAIAACzg");
	var mask_graphics_35 = new cjs.Graphics().p("AldBaIAAizIK7AAIAACzg");
	var mask_graphics_36 = new cjs.Graphics().p("AldBaIAAizIK7AAIAACzg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_1,x:-7.0037,y:25}).wait(1).to({graphics:mask_graphics_2,x:-7,y:41}).wait(1).to({graphics:mask_graphics_3,x:-7,y:41}).wait(1).to({graphics:mask_graphics_4,x:-6.95,y:41}).wait(1).to({graphics:mask_graphics_5,x:-6.9,y:41}).wait(1).to({graphics:mask_graphics_6,x:-6.8,y:41}).wait(1).to({graphics:mask_graphics_7,x:-6.55,y:41}).wait(1).to({graphics:mask_graphics_8,x:-6.2,y:41}).wait(1).to({graphics:mask_graphics_9,x:-5.6,y:41}).wait(1).to({graphics:mask_graphics_10,x:-4.8,y:41}).wait(1).to({graphics:mask_graphics_11,x:-3.65,y:41}).wait(1).to({graphics:mask_graphics_12,x:-2.1,y:41}).wait(1).to({graphics:mask_graphics_13,x:-0.05,y:41}).wait(1).to({graphics:mask_graphics_14,x:2.6,y:41}).wait(1).to({graphics:mask_graphics_15,x:5.9,y:41}).wait(1).to({graphics:mask_graphics_16,x:10,y:41}).wait(1).to({graphics:mask_graphics_17,x:15,y:41}).wait(1).to({graphics:mask_graphics_18,x:21.05,y:41}).wait(1).to({graphics:mask_graphics_19,x:27.95,y:41}).wait(1).to({graphics:mask_graphics_20,x:34,y:41}).wait(1).to({graphics:mask_graphics_21,x:39,y:41}).wait(1).to({graphics:mask_graphics_22,x:43.1,y:41}).wait(1).to({graphics:mask_graphics_23,x:46.4,y:41}).wait(1).to({graphics:mask_graphics_24,x:49.05,y:41}).wait(1).to({graphics:mask_graphics_25,x:51.1,y:41}).wait(1).to({graphics:mask_graphics_26,x:52.65,y:41}).wait(1).to({graphics:mask_graphics_27,x:53.8,y:41}).wait(1).to({graphics:mask_graphics_28,x:54.6,y:41}).wait(1).to({graphics:mask_graphics_29,x:55.2,y:41}).wait(1).to({graphics:mask_graphics_30,x:55.55,y:41}).wait(1).to({graphics:mask_graphics_31,x:55.8,y:41}).wait(1).to({graphics:mask_graphics_32,x:55.9,y:41}).wait(1).to({graphics:mask_graphics_33,x:55.95,y:41}).wait(1).to({graphics:mask_graphics_34,x:56,y:41}).wait(1).to({graphics:mask_graphics_35,x:56,y:41}).wait(1).to({graphics:mask_graphics_36,x:56,y:41}).wait(71));

	// stroke
	this.instance_2 = new lib.stroke_1();
	this.instance_2.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(106));

	// head2
	this.instance_3 = new lib.head2_1();
	this.instance_3.setTransform(150,135,1,1,0,0,0,150,125);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(32).to({_off:false},0).to({y:125,alpha:1},35,cjs.Ease.backOut).wait(40));

	// head1
	this.instance_4 = new lib.head1_1();
	this.instance_4.setTransform(150,135,1,1,0,0,0,150,125);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).to({y:125,alpha:1},35,cjs.Ease.backOut).wait(71));

	// back
	this.instance_5 = new lib.back_1();
	this.instance_5.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(107));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(159,24,162,36);
// library properties:
lib.properties = {
	id: '90CE9A07CC2147BDA6C7E08CF861CD67',
	width: 320,
	height: 50,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/back.jpg?1676662772429", id:"back"},
		{src:"images/exclusions.png?1676662772429", id:"exclusions"},
		{src:"images/head1.png?1676662772429", id:"head1"},
		{src:"images/head2.png?1676662772429", id:"head2"},
		{src:"images/logo.png?1676662772429", id:"logo"},
		{src:"images/stroke.png?1676662772429", id:"stroke"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['90CE9A07CC2147BDA6C7E08CF861CD67'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;