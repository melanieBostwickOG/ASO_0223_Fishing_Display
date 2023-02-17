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
p.nominalBounds = new cjs.Rectangle(0,0,640,960);


(lib.cta = function() {
	this.initialize(img.cta);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,960);


(lib.exclusions = function() {
	this.initialize(img.exclusions);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,960);


(lib.head1 = function() {
	this.initialize(img.head1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,960);


(lib.head2 = function() {
	this.initialize(img.head2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,960);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,960);


(lib.stroke = function() {
	this.initialize(img.stroke);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,960);// helper functions:

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

}).prototype = getMCSymbolPrototype(lib.stroke_1, new cjs.Rectangle(0,0,320,480), null);


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

}).prototype = getMCSymbolPrototype(lib.logo_1, new cjs.Rectangle(0,0,320,480), null);


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

}).prototype = getMCSymbolPrototype(lib.head2_1, new cjs.Rectangle(0,0,320,480), null);


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

}).prototype = getMCSymbolPrototype(lib.head1_1, new cjs.Rectangle(0,0,320,480), null);


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

}).prototype = getMCSymbolPrototype(lib.exclusions_1, new cjs.Rectangle(0,0,320,480), null);


(lib.cta_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.cta();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cta_1, new cjs.Rectangle(0,0,320,480), null);


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

}).prototype = getMCSymbolPrototype(lib.back_1, new cjs.Rectangle(0,0,320,480), null);


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

	this.actionFrames = [0,144];
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
	this.frame_144 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(144).call(this.frame_144).wait(1));

	// clickTag
	this.clickTag = new lib.clickTag();
	this.clickTag.name = "clickTag";
	this.clickTag.setTransform(150.05,240,0.4395,5.3333,0,0,0,341.4,45);
	new cjs.ButtonHelper(this.clickTag, 0, 1, 2, false, new lib.clickTag(), 3);

	this.timeline.addTween(cjs.Tween.get(this.clickTag).wait(145));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(1,1,1).p("EgY/glfMAx/AAAMAAABK/Mgx/AAAg");
	this.shape.setTransform(160,240);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(145));

	// logo
	this.instance = new lib.logo_1();
	this.instance.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(145));

	// cta
	this.instance_1 = new lib.cta_1();
	this.instance_1.setTransform(157,385,0.2737,0.2737,0,0,0,157,384.9);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(81).to({_off:false},0).to({regY:385,scaleX:1,scaleY:1,alpha:1},44,cjs.Ease.backOut).wait(20));

	// exclusions
	this.instance_2 = new lib.exclusions_1();
	this.instance_2.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(65).to({_off:false},0).to({alpha:1},43,cjs.Ease.cubicOut).wait(37));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_2 = new cjs.Graphics().p("ArOU8IAAl8IWdAAIAAF8g");
	var mask_graphics_3 = new cjs.Graphics().p("ArOC+IAAl7IWeAAIAAF7g");
	var mask_graphics_4 = new cjs.Graphics().p("ArOC+IAAl7IWeAAIAAF7g");
	var mask_graphics_5 = new cjs.Graphics().p("ArPC+IAAl7IWeAAIAAF7g");
	var mask_graphics_6 = new cjs.Graphics().p("ArOC+IAAl7IWeAAIAAF7g");
	var mask_graphics_7 = new cjs.Graphics().p("ArOC+IAAl7IWeAAIAAF7g");
	var mask_graphics_8 = new cjs.Graphics().p("ArOC+IAAl7IWeAAIAAF7g");
	var mask_graphics_9 = new cjs.Graphics().p("ArPC+IAAl7IWfAAIAAF7g");
	var mask_graphics_10 = new cjs.Graphics().p("ArPC+IAAl7IWeAAIAAF7g");
	var mask_graphics_11 = new cjs.Graphics().p("ArPC+IAAl7IWeAAIAAF7g");
	var mask_graphics_12 = new cjs.Graphics().p("ArOC+IAAl7IWeAAIAAF7g");
	var mask_graphics_13 = new cjs.Graphics().p("ArPC+IAAl7IWeAAIAAF7g");
	var mask_graphics_14 = new cjs.Graphics().p("ArPC+IAAl7IWfAAIAAF7g");
	var mask_graphics_15 = new cjs.Graphics().p("ArOC+IAAl7IWeAAIAAF7g");
	var mask_graphics_16 = new cjs.Graphics().p("ArPC+IAAl7IWeAAIAAF7g");
	var mask_graphics_17 = new cjs.Graphics().p("ArOC+IAAl7IWeAAIAAF7g");
	var mask_graphics_18 = new cjs.Graphics().p("ArPC+IAAl7IWeAAIAAF7g");
	var mask_graphics_19 = new cjs.Graphics().p("ArPC+IAAl7IWfAAIAAF7g");
	var mask_graphics_20 = new cjs.Graphics().p("ArOC+IAAl7IWeAAIAAF7g");
	var mask_graphics_21 = new cjs.Graphics().p("ArOC+IAAl7IWeAAIAAF7g");
	var mask_graphics_22 = new cjs.Graphics().p("ArPC+IAAl7IWeAAIAAF7g");
	var mask_graphics_23 = new cjs.Graphics().p("ArOC+IAAl7IWdAAIAAF7g");
	var mask_graphics_24 = new cjs.Graphics().p("ArPC+IAAl7IWeAAIAAF7g");
	var mask_graphics_25 = new cjs.Graphics().p("ArOC+IAAl7IWeAAIAAF7g");
	var mask_graphics_26 = new cjs.Graphics().p("ArPC+IAAl7IWeAAIAAF7g");
	var mask_graphics_27 = new cjs.Graphics().p("ArOC+IAAl7IWeAAIAAF7g");
	var mask_graphics_28 = new cjs.Graphics().p("ArOC+IAAl7IWdAAIAAF7g");
	var mask_graphics_29 = new cjs.Graphics().p("ArPC+IAAl7IWeAAIAAF7g");
	var mask_graphics_30 = new cjs.Graphics().p("ArOC+IAAl7IWeAAIAAF7g");
	var mask_graphics_31 = new cjs.Graphics().p("ArPC+IAAl7IWeAAIAAF7g");
	var mask_graphics_32 = new cjs.Graphics().p("ArPC+IAAl7IWeAAIAAF7g");
	var mask_graphics_33 = new cjs.Graphics().p("ArOC+IAAl7IWeAAIAAF7g");
	var mask_graphics_34 = new cjs.Graphics().p("ArOC+IAAl7IWdAAIAAF7g");
	var mask_graphics_35 = new cjs.Graphics().p("ArPC+IAAl7IWfAAIAAF7g");
	var mask_graphics_36 = new cjs.Graphics().p("ArPC+IAAl7IWfAAIAAF7g");
	var mask_graphics_37 = new cjs.Graphics().p("ArPC+IAAl7IWfAAIAAF7g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(2).to({graphics:mask_graphics_2,x:36.1022,y:134}).wait(1).to({graphics:mask_graphics_3,x:36.1,y:249}).wait(1).to({graphics:mask_graphics_4,x:36.1,y:249}).wait(1).to({graphics:mask_graphics_5,x:36.15,y:249}).wait(1).to({graphics:mask_graphics_6,x:36.3,y:249}).wait(1).to({graphics:mask_graphics_7,x:36.55,y:249}).wait(1).to({graphics:mask_graphics_8,x:37,y:249}).wait(1).to({graphics:mask_graphics_9,x:37.75,y:249}).wait(1).to({graphics:mask_graphics_10,x:38.95,y:249}).wait(1).to({graphics:mask_graphics_11,x:40.65,y:249}).wait(1).to({graphics:mask_graphics_12,x:43.05,y:249}).wait(1).to({graphics:mask_graphics_13,x:46.25,y:249}).wait(1).to({graphics:mask_graphics_14,x:50.45,y:249}).wait(1).to({graphics:mask_graphics_15,x:55.9,y:249}).wait(1).to({graphics:mask_graphics_16,x:62.7,y:249}).wait(1).to({graphics:mask_graphics_17,x:71.2,y:249}).wait(1).to({graphics:mask_graphics_18,x:81.5,y:249}).wait(1).to({graphics:mask_graphics_19,x:94,y:249}).wait(1).to({graphics:mask_graphics_20,x:108.2,y:249}).wait(1).to({graphics:mask_graphics_21,x:120.7,y:249}).wait(1).to({graphics:mask_graphics_22,x:131,y:249}).wait(1).to({graphics:mask_graphics_23,x:139.5,y:249}).wait(1).to({graphics:mask_graphics_24,x:146.3,y:249}).wait(1).to({graphics:mask_graphics_25,x:151.75,y:249}).wait(1).to({graphics:mask_graphics_26,x:155.95,y:249}).wait(1).to({graphics:mask_graphics_27,x:159.15,y:249}).wait(1).to({graphics:mask_graphics_28,x:161.55,y:249}).wait(1).to({graphics:mask_graphics_29,x:163.25,y:249}).wait(1).to({graphics:mask_graphics_30,x:164.45,y:249}).wait(1).to({graphics:mask_graphics_31,x:165.2,y:249}).wait(1).to({graphics:mask_graphics_32,x:165.65,y:249}).wait(1).to({graphics:mask_graphics_33,x:165.9,y:249}).wait(1).to({graphics:mask_graphics_34,x:166.05,y:249}).wait(1).to({graphics:mask_graphics_35,x:166.1,y:249}).wait(1).to({graphics:mask_graphics_36,x:166.1,y:249}).wait(1).to({graphics:mask_graphics_37,x:166.1,y:249}).wait(108));

	// stroke
	this.instance_3 = new lib.stroke_1();
	this.instance_3.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({_off:false},0).wait(143));

	// head2
	this.instance_4 = new lib.head2_1();
	this.instance_4.setTransform(150,135,1,1,0,0,0,150,125);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(34).to({_off:false},0).to({y:125,alpha:1},35,cjs.Ease.backOut).wait(76));

	// head1
	this.instance_5 = new lib.head1_1();
	this.instance_5.setTransform(150,135,1,1,0,0,0,150,125);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(2).to({_off:false},0).to({y:125,alpha:1},35,cjs.Ease.backOut).wait(108));

	// back
	this.instance_6 = new lib.back_1();
	this.instance_6.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(145));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(148.8,212.3,183.2,277.7);
// library properties:
lib.properties = {
	id: '90CE9A07CC2147BDA6C7E08CF861CD67',
	width: 320,
	height: 480,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/back.jpg?1676662751065", id:"back"},
		{src:"images/cta.png?1676662751065", id:"cta"},
		{src:"images/exclusions.png?1676662751065", id:"exclusions"},
		{src:"images/head1.png?1676662751065", id:"head1"},
		{src:"images/head2.png?1676662751065", id:"head2"},
		{src:"images/logo.png?1676662751065", id:"logo"},
		{src:"images/stroke.png?1676662751065", id:"stroke"}
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