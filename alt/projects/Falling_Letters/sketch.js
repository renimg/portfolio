await Canvas(1600,900);
displayMode(CENTER, SMOOTH, 0.8);
var mgr
mgr = new SceneManager();
mgr.addScene (preloads);
mgr.addScene (intro);
mgr.addScene (about)
mgr.addScene (game);
mgr.showNextScene();

let loy
let typed = [];
let legalkeys = ['1','2','3','4','5','6','7','8','9','0','q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l',';','z','x','c','v','b','n','m',',','.','!','?',':','-',' ','Shift',' ','Shift',' ','Shift',' ','Shift',' ','Shift',' ','Shift',' ','Shift'];
let test = ['h']
let checked = [];
let document;
let docindex = 0;
let textcolor = color(255,255,255);
let blankkimg = loadImage('assets/blankKey.png');
let playbtn = loadImage('assets/play.png')
let playbtnhover = loadImage('assets/playhovered.png')
let abtbtn = loadImage('assets/about.png')
let abtbthhover = loadImage('assets/abouthovered.png')
let gobackbtn = loadImage('assets/goback.png')
let gobackbtnhovered = loadImage('assets/gobackhovered.png')
let paperbg = loadImage('assets/paper.png')
let gamelogo = loadImage('assets/falling letters logo.png')
let gamelogosmall = loadImage('assets/fll_downscale.png')
let openingsong = loadAudio('assets/music/opening.ogg')
let aboutimg = loadImage('assets/about screen.png')
let keypickup = [];
let keypickindex = 0;
let mus = [];
let musindex = 0;
for (let i = 0;i<31;i++)
{
	keypickup[i] = loadSound('assets/sfx/kb/kp'+(i + 1)+ '.wav')
}
for(let i = 0; i < 8;i++)
{
	mus[i] = loadAudio('assets/music/song'+(i+1)+'.mp3')
}
let score = 0;
let scoreMult = 1;
let len;
let ball = new Sprite();
let wallL = new Sprite();
let wallR = new Sprite();
let floor = new Sprite();
let keys = new Group();
let playButton = new Sprite();
let aboutButton = new Sprite();
let gobackButton = new Sprite();
let shiftkey = false;
let paused = false;
let time = 0;
let maxlevel = 5;
let maxspeed = 5;
world.gravity.y = 10;

//preload end

function wordGen(){
	document = (doclist[docindex])
}
let clicksound = loadSound('assets/sfx/switch36.mp3')
let rolloversound = loadSound('assets/sfx/rollover2.mp3')
wordGen();

text('Loading files, please wait...', 0, 0)

await loadAll();
function preloads()
{
	this.draw = function ()
	{
		allSprites.deleteAll();
		text('Loaded! click to continue',0,0)
	}
	this.mousePressed = function()
	{
		mgr.showScene(intro);
	}
}

function intro()  {
    this.setup = function() {
	allSprites.deleteAll();
      console.log("We are at setup for scene1");
		playButton = new Sprite();
		aboutButton = new Sprite();
		playButton.physics = STATIC;
		aboutButton.physics = STATIC;
		playButton.img = playbtn
		aboutButton.img = abtbtn
        console.log("We are at entering scene1");
      textAlign(CENTER);
      textSize(29);
    }

    // enter() will be called each time SceneManager switches
    // to this scene
    this.enter = function()  {
		mus[musindex].pause();
		mus[musindex].currentTime = 0
		allSprites.deleteAll();
		playButton = new Sprite();
		aboutButton = new Sprite();
		playButton.x = 0;
		playButton.y = 250;
		playButton.width = 200
		playButton.height = 75
		aboutButton.x = 0;
		aboutButton.y = 400;
		aboutButton.width = 200
		aboutButton.height = 75
		playButton.physics = STATIC;
		aboutButton.physics = STATIC;
		playButton.img = playbtn
		aboutButton.img = abtbtn
        console.log("We are at entering scene1");
    }
    this.draw = function()
    {
		image(gamelogo,0,-50)
		gamelogo.resize((4096*0.8),(2048*0.8))
		buttonFunctionality();
		openingsong.play();
		openingsong.loop = true;
    }


	function buttonFunctionality()
	{
	if (pointer.overlaps(playButton))
		{
			rolloversound.play();
		}
	else if (pointer.overlapping(playButton))
	{
		if (pointer.presses())
			{
				clicksound.play();
				mgr.showScene(game);
			}
	playButton.img = playbtnhover} else {
			playButton.img = playbtn
	}
	if (pointer.overlaps(aboutButton))
		{
			rolloversound.play();
		}
		else if(pointer.overlapping(aboutButton))
			{
			if (pointer.presses())
				{
					clicksound.play();
					mgr.showScene(about)
				}
				aboutButton.img = abtbthhover
			}
		else{
			aboutButton.img = abtbtn
		}
	}
}

function about(){
	this.enter = function()
	{
		allSprites.deleteAll();
		gobackButton = new (Sprite);
		gobackButton.x = -150;
		gobackButton.y = 300;
		gobackButton.width = 200
		gobackButton.height = 75
		gobackButton.physics = STATIC;
	}

	this.draw = function()
	{
		buttonFunctionality();
		gamelogosmall.resize((1720*.8),(865*.8))
		image(gamelogosmall,0,-200)
		image(aboutimg,0,100)
	}
		function buttonFunctionality()
	{
	if (pointer.overlaps(gobackButton))
		{
			rolloversound.play();
		}
	else if (pointer.overlapping(gobackButton))
	{
		if (pointer.presses())
			{
				clicksound.play();
				mgr.showScene(intro);
			}
	gobackButton.img = gobackbtnhovered} else {
			gobackButton.img = gobackbtn
	}
	}
}

function game() {
	this.setup = function()
	{
		allSprites.deleteAll();
		ball = new Sprite();
		wallL = new Sprite();
		wallR = new Sprite();
		floor = new Sprite();
		keys = new Group();
		ball.collides(keys, collect)
		keys.passes(wallL)
		keys.passes(wallR)
		keys.passes(floor)
		keys.passes(keys)
		textAlign(LEFT)
	}
	this.enter = function()
	{
		openingsong.pause();
		//reset variables
		score = 0;
		scoreMult = 1;
		checked = [];
		typed = [];
		docindex = 0;
		mus[musindex].pause();
		mus[musindex].currentTime = 0;
		musindex = round(random(0,8))
		textAlign(LEFT)
		allSprites.deleteAll();
		ball = new Sprite();
		wallL = new Sprite();
		wallR = new Sprite();
		floor = new Sprite();
		keys = new Group();
		ball.x = -475;
		ball.y=425;
		ball.width = 50;
		ball.height=50;
		ball.mass = 2;
		ball.bounciness = 0;
		ball.rotationLock = true;
		//ball.img = '🤪';

		wallL.x = -760
		wallL.width = 10
		wallL.height = windowHeight;
		wallL.physics = STATIC;

		wallR.x = -160
		wallR.width = 10
		wallR.height = windowHeight;
		wallR.physics = STATIC;

		floor.x = -460
		floor.y = 455;
		floor.width = 600;
		floor.height = 10
		floor.physics = STATIC;

		keys.strokeWeight = 0;
		keys.textSize = 32;
		keys.textFill = (color(255))
		keys.text = () => random(legalkeys)
		keys.x= () => random(-727,-190);
		keys.y = () => random (-800, -900);
		keys.color = color(0,0)
		keys.drag = () => random(1, 2);
		keys.mass = () => random(1, 5);
		keys.speed = () => random(1+(maxlevel * 0.5),5+(maxlevel* 0.5))
		keys.direction = 'down';
		keys.amount = 1;
		ball.collides(keys, collect)
		keys.passes(wallL)
		keys.passes(wallR)
		keys.passes(floor)
		keys.passes(keys)
	}

	this.draw = function()
	{
		background('skyblue')
		scorecalc();
		wordGen();
		keys.draw();
		paperbg.resize(2000,490)
		image(paperbg, 300, -215)
		for (let i = 0; i < keys.length; i++)
		{
			image(blankkimg,keys[i].x,keys[i].y)
		}
		if (keys.cull(400,0,0,50) || millis() - time > 500 && keys.length < maxlevel) {
			new keys.Sprite()
			time = millis();
		};
		textSize(32)
		fill(color(1))
		text('score: ' + score, -50, -400);
		text('level: ' + (maxlevel-4), 275, -400)
		text('combo: ' + round(scoreMult, 2) + 'x', 550, -400)
		fill(color(0.5))
		text(document, -35, -200)
		fill(textcolor)
		text(typed.join(''), -35, -200);
		if(kb.pressing('left'))
			{
				ball.direction = 'left';
				ball.speed = maxspeed;
				if(kb.pressing('shift'))
				{
					ball.speed = maxspeed*2
				}
			}
		else if(kb.pressing('right')) 
			{
				ball.direction = 'right';
				ball.speed = maxspeed;
				if(kb.pressing('shift'))
				{
					ball.speed = maxspeed*2
				}
			}
		else
		{
			ball.speed = 0;
		}
		print(musindex)
		mus[musindex].play();
		mus[musindex].volume = 0.1;
		if(mus[musindex].ended == true)
		{
			musindex = round(random(0,8))
		}
	}
	function collect(ball,key)
	{
		key.delete();
		new keys.Sprite();
		if (key.text === 'Shift' || key.text === 'SHIFT')
		{
			shiftkey = !shiftkey;
		}
		if (shiftkey === true)
		{
			typed.push(key.text.toUpperCase())
		}
		else 
		{
			typed.push(key.text);
		}
			if (key.text === 'Shift' || key.text === 'SHIFT')
		{
			typed.pop();
		}
		typed.join('')
		keypickindex = round(random(0,30))
		keypickup[keypickindex].play();
	}

function scorecalc() {
	len = Math.min(document.length, typed.length)
	for (let i = 0; i<len; i++)
		{
		if (document.at(i) === typed.at(i) && !checked[i])
		{
			textcolor = (255,255,255)
			score += (100 * scoreMult);
			scoreMult +=.05;
			checked[i] = true;
		}
		if (document.at(i) != typed.at(i))
			{
				textcolor = color(128,0,0)
				scoreMult = 1
				score = score - 70
				typed.pop();
			}
		if (document == typed)
			{
				docindex++
				maxlevel++
				if (docindex >doclist.length)
				{
					docindex = 0;
				}
				typed=[]
				checked=[];
			}
		}
	}
}

q5.draw = function () {
	clear();
	mgr.draw();	
}

q5.keyPressed = function()
{
    // You can optionaly handle the key press at global level...
    switch(key)
    {
        case '1':
            mgr.showScene( intro );
            break;
        case '2':
            mgr.showScene( game );
            break;
    }
    mgr.keyPressed();
}

q5.mousePressed = function()
{
   // pass the mousePressed message into the SceneManager
  mgr.mousePressed();
};