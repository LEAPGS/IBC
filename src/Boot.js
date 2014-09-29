BasicGame = {

    /* Here we've just got some global level vars that persist regardless of State swaps */
    score: 0,

    /* If the music in your game needs to play through-out a few State swaps, then you could reference it here */
    music: null,

    /* Your game can check BasicGame.orientated in internal loops to know if it should pause or not */
    orientated: false

};


BasicGame.Boot = function (game) {
};


BasicGame.Boot.prototype = {

    preload: function () 
    {
        this.stage.backgroundColor = "#acbfbf";
        this.game.canvas.style.marginLeft = "auto";
        this.game.canvas.style.marginRight = "auto";
        
        var path = "assets/graphics/" + BasicGame.screen + "/";
        
        this.load.image('tuto', path +"tuto.png");
    },

    create: function () {

        this.input.maxPointers = 1;
        this.stage.disableVisibilityChange = true;
        
		this.scaleStage();

        this.state.start('Preloader');
    },
    
    scaleStage:function()
    {
        var device = new Phaser.Device();
        if(device.desktop == false)
        {
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.scale.setScreenSize(true);
            this.scale.pageAlignHorizontally = true;
            this.scale.pageAlignVertically = true;
            
            this.scale.forceOrientation(false, true);
            
            if(this.scale.isLandscape == true)
            {
                this.enterIncorrectOrientation();
            }
            else
            {
                BasicGame.orientated = true;
            }
            
            this.game.scale.enterIncorrectOrientation.add(this.enterIncorrectOrientation, this);
            this.game.scale.leaveIncorrectOrientation.add(this.leaveIncorrectOrientation, this);
            
        }
        else
        {
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            document.getElementById("game").style.width = window.innerWidth+"px";
            document.getElementById("game").style.height = (window.innerHeight-1) + "px";
        }
        device = null;
    },

    gameResized: function (width, height) {

        //  This could be handy if you need to do any extra processing if the game resizes.
        //  A resize could happen if for example swapping orientation on a device.

    },
    
    enterIncorrectOrientation: function () 
    {
        console.log("nope");
        BasicGame.orientated = false;
        //document.getElementById('game').style.display = 'none';
        document.getElementById('orientation').style.display = 'block';
    },

    leaveIncorrectOrientation: function () 
    {
        console.log(".avi");
        BasicGame.orientated = true;
        document.getElementById('orientation').style.display = 'none';
        //document.getElementById('game').style.display = 'block';
    }
};