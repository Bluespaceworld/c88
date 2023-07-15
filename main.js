
// Create canvas variable
canvas= new facbic.Canvas(myCanvas)

//Set initial positions for ball and hole images.
ball_x=0
ball_y=0
hole_x=800
hole_y=400


block_image_width = 5;
block_image_height = 5;

function load_img(){
	// write code to Upload golf image on the canvas
	facbic.image.fromURL("golf-h1.png",function(Img){
		hole_obj=Img;
		ball_obj.scaletowidth(50);
		ball_obj.scaletoHeight(50);
		hole_obj.set({
			top:hole_y,
			left:hole_x
		});
		canvas.add(hole_obj);



	})
	new_image();
}

function new_image()
{
	fabric.Image.fromURL(get_image, function(Img){
		hole_obj = Img;
		hole_obj.scaleToWidth(block_image_width);
		hole_obj.scaleToHeight(block_image_width);
		hole_obj.set({
		   top:hole_y,
		   left:hole_x
		});
		canvas.add(hole_obj)
	})
	// write code to Upload ball image on canvas
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((ball_x==hole_x)&&(ball_y==hole_y)){
		canvas.remove(ball_obj);
	}
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		// Write a code to move ball upward.
		if(ball_y >=0){
            ball_y=ball_y-block_image_height
            console.log("block image height ="+block_image_height)
            console.log("when up arrow key is pressed x="+ball_x+"y="+ball_y)
            canvas.remove(ball_obj)
            player_update();
        }
	}

	function down()
	{
		 // Write a code to move ball downward.
		 if(ball_y >=450){
            ball_y=ball_y+block_image_height
            console.log("block image height ="+block_image_height)
            console.log("when up arrow key is pressed x="+ball_x+"y="+ball_y)
            canvas.remove(ball_obj)
            player_update();
        }
	}

	function left()
	{
			// Write a code to move ball left side.
			if(ball_x >=5){
				ball_x=ball_x-block_image_height
				console.log("block image height ="+block_image_height)
				console.log("when up arrow key is pressed x="+ball_x+"y="+ball_y)
				canvas.remove(ball_obj)
				player_update();
	}

	function right()
	{
		if(ball_x <=1050)
		{
			ball_x=ball_x+block_image_height
			console.log("block image height ="+block_image_height)
			console.log("when up arrow key is pressed x="+ball_x+"y="+ball_y)
			canvas.remove(ball_obj)
			player_update();
			// Write a code to move ball right side.
		}
	}
	
}

