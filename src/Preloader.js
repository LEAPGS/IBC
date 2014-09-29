
BasicGame.Preloader = function (game) {

	this.texto_progress = null;
};

BasicGame.Preloader.prototype = {

	preload: function () 
    {
		//this.background = this.add.sprite(0, 0, 'preloaderBackground');
		//this.preloadBar = this.add.sprite(300, 400, 'preloaderBar');
		//this.load.setPreloadSprite(this.preloadBar);
        /*
        console.log("no debería imprimirse");
        if(this.scale.isLandscape == true)
        {
            console.log("nope inicial");
            this.enterIncorrectOrientation();
        }
        else
        {
            BasicGame.orientated = true;
        }*/
        
        var path = "assets/graphics/" + BasicGame.screen + "/";
        
        var obj_tuto = this.add.sprite(0,0,'tuto');
        obj_tuto.anchor.setTo(0.5,0.5);
        obj_tuto.x = this.game.width/2;
        obj_tuto.y = this.game.height/2;
        
        var posY_texto;
        var tam_fuente;
        
        var width_player = 0;
        var height_player = 0;
        var width_medidor = 0;
        var height_medidor = 0;
         
        this.load.image('fondo', path + "background.png");
        this.load.image('barra', path + "barra.png");
        this.load.image('barra_fondo',path + "barra_fondo.png");
        this.load.image('score_card', path + "score_card.png");
        
        switch(BasicGame.screen)
        {
            case "small":
                posY_texto = 300;
                tam_fuente = 15;
                height_medidor = 158;
                width_medidor = 9;
                height_player = 311;
                width_player = 117;
                break;
            case "normal": 
                posY_texto = 440;
                tam_fuente = 25;
                height_medidor = 236;
                width_medidor = 12;
                height_player = 468;
                width_player = 176;
                break;
            case "large": 
                posY_texto = 650;
                tam_fuente = 25;
                height_medidor = 355;
                width_medidor = 19;
                height_player = 705;
                width_player = 265;
                break;
            case "xlarge": 
                posY_texto = 860;
                tam_fuente = 30;
                height_medidor = 473;
                width_medidor = 25;
                height_player = 941;
                width_player = 354;
                break;
            case "xxlarge": 
                posY_texto = 1300;
                tam_fuente = 45;
                height_medidor = 716;
                width_medidor = 38;
                height_player = 1425;
                width_player = 536;
                break;
        }
        
        var style = { font: tam_fuente+"px Arial", fill: "#fff", align: "center" };
        this.texto_progress = this.add.text(0, 0, "Loading 0%", style);
        this.texto_progress.anchor.setTo(0.5,0.5);
        this.texto_progress.x = this.game.width/2;
        this.texto_progress.y = posY_texto;
        
        this.load.spritesheet('medidor', path + "spht_medidor.png", width_medidor, height_medidor);
        this.load.spritesheet('player', path + "spht_player.png", width_player, height_player);
    },
    
    loadUpdate: function()
    {
        this.texto_progress.setText("Loading " + this.load.progress + "%");
    },

	create: function () 
    {
        this.input.onTap.add(this.iniciar_juego, this);
        this.scale.leaveFullScreen.add(this.leaveFullScreen, this);
        this.scale.enterFullScreen.add(this.enterFullScreen, this);
        this.texto_progress.setText("Loading 100%");
	},

	update: function () 
    {
        //console.log(BasicGame.orientated);
	},
        
    iniciar_juego: function () 
    {
		if(this.load.progress == 100)
        {
            this.scale.refresh();
            this.scale.startFullScreen(true);
            this.state.start('Game');
        }
	},
    /*
    
    enterIncorrectOrientation: function () {

        console.log("nope");
        
        BasicGame.orientated = false;
        document.getElementById('orientation').style.width = window.innerWidth+"px";
		document.getElementById('orientation').style.height = (window.innerHeight-1)+"px";
        document.getElementById('orientation').style.display = 'block';

        document.getElementById('game').style.display = 'none';
    },

    leaveIncorrectOrientation: function () {
        
        console.log(".avi");
        BasicGame.orientated = true;
        document.getElementById('game').style.width = BasicGame.normalWidth+"px";
		document.getElementById('game').style.height = BasicGame.normalHeight+"px";
        document.getElementById('game').style.display = 'block';
        
        document.getElementById('orientation').style.display = 'none';
    },
    */
    leaveFullScreen: function () 
    {
        
        //document.getElementById('game').style.width = window.innerWidth+"px";
		//document.getElementById('game').style.height = (window.innerHeight-1)+"px";
        /*
        console.log("Normal H Canvas: " + BasicGame.normalHeight);
        console.log("Normal W Canvas: " + BasicGame.normalWidth);
        
        console.log("Total Window Height: " + window.screen.availHeight);
        console.log("Total Window Width: " + window.screen.availWidth);
        
        console.log("DOM Window Height: " + document.getElementById('game').style.height);
        console.log("DOM Window Width: " + document.getElementById('game').style.width);
        
        console.log("Canvas Window Height: " + this.game.canvas.height);
        console.log("Canvas Window Width: " + this.game.canvas.width);

        console.log("Canvas Style Height: " + this.game.canvas.style.height);
        console.log("Canvas Window Width: " + this.game.canvas.style.width);
        
        console.log("Game Height: " + this.game.height);
        console.log("Game Width: " + this.game.width);
        */
        //this.game.canvas.width = window.screen.innerWidth+"px";
        //this.game.canvas.height = (window.screen.innerHeight-1)+"px";
        //this.scale.refresh();
        
    },
    
    enterFullScreen: function () {
        
        //document.getElementById('game').style.width = window.screen.availWidth+"px";
		//document.getElementById('game').style.height = window.screen.availHeight+"px";
        this.scale.setMaximum();
        this.scale.setScreenSize(true);
        
        /*
        //this.game.width = window.screen.availWidth;
        //this.game.height = window.screen.availHeight;
        
        var nuevo_width_canvas = BasicGame.normalWidth * Math.min((window.screen.availHeight * window.devicePixelRatio) / BasicGame.normalHeight, (window.screen.availWidth * window.devicePixelRatio) / BasicGame.normalWidth);
        var nuevo_height_canvas = BasicGame.normalHeight * Math.min((window.screen.availHeight * window.devicePixelRatio) / BasicGame.normalHeight, (window.screen.availWidth * window.devicePixelRatio) / BasicGame.normalWidth);
        
        this.game.canvas.width = 650;
        this.game.canvas.height = 960;
        
        this.game.canvas.style.marginTop = 0;
        this.game.canvas.style.marginBottom = 0;
        this.game.canvas.style.marginLeft = 'auto';
        this.game.canvas.style.marginRight = 'auto';
        this.game.canvas.style.height = (this.game.canvas.height/window.devicePixelRatio)+"px";
        this.game.canvas.style.width = (this.game.canvas.width/window.devicePixelRatio)+"px";
        
        console.log("Nuevo H Canvas: " + nuevo_height_canvas);
        console.log("Nuevo W Canvas: " + nuevo_width_canvas);
        
        console.log("Normal H Canvas: " + BasicGame.normalHeight);
        console.log("Normal W Canvas: " + BasicGame.normalWidth);
        
        console.log("Total Window Height: " + window.screen.availHeight);
        console.log("Total Window Width: " + window.screen.availWidth);
        
        console.log("DOM Window Height: " + document.getElementById('game').style.height);
        console.log("DOM Window Width: " + document.getElementById('game').style.width);
        
        console.log("Canvas Window Height: " + this.game.canvas.height);
        console.log("Canvas Window Width: " + this.game.canvas.width);

        console.log("Canvas Style Height: " + this.game.canvas.style.height);
        console.log("Canvas Window Width: " + this.game.canvas.style.width);
        
        console.log("Game Height: " + this.game.height);
        console.log("Game Width: " + this.game.width);
        */
    }
    
};
