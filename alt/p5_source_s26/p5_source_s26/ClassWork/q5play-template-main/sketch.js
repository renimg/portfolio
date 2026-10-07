await Canvas(1024, 1024);
world.gravity.y = 10;

let paddle = new Sprite(0, 0, 300, 20, KIN);

let ball = new Sprite(0, 20, 40);
ball.bounciness = 0.9;
ball.drag = 1;

let j = new DistanceJoint(paddle, ball);
j.offsetA.y = 10;
j.collideConnected = true;
j.springiness = 0.8;

q5.update = function () {
	clear();
	background('skyblue');
	paddle.moveTowards(mouse);
};