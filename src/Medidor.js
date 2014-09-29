
Medidor = function(game, x, y, barra_fondo) 
{  
    Phaser.Sprite.call(this, game, x, y, 'medidor');
    
    this.obj_barra_fondo = barra_fondo;
    this.has_finished_medidor = false;

    this.anchor.setTo(0.5, 0);
    
    this.altura_inicial = this.height;
    
    this.x = this.obj_barra_fondo.x;
    this.y = this.obj_barra_fondo.y + this.obj_barra_fondo.height/2 - this.altura_inicial/5;
    
    console.log(this.altura_inicial);
    
    this.cropEnabled = true;
    this.cropRect = new Phaser.Rectangle(0, 0, this.width, this.height);
    this.crop(this.cropRect);
    
    //this.size_crop = this.obj_barra_fondo.y + this.obj_barra_fondo.height/2 - this.y - 2;
    game.add.existing(this);
};

Medidor.prototype = Object.create(Phaser.Sprite.prototype);  
Medidor.prototype.constructor = Medidor;

Medidor.prototype.update = function() 
{
    if(this.has_finished_medidor == false)
    {
        if(this.y < this.obj_barra_fondo.y + this.obj_barra_fondo.height/2 - 10)
        {
            this.y += this.altura_inicial/500;
        }
        
        this.cropRect.height = this.obj_barra_fondo.y + this.obj_barra_fondo.height/2 - this.y - 2;

        if(this.cropRect.height > 0 && this.cropRect.height < this.altura_inicial)
        {
            this.crop(this.cropRect);
        }
        
        if(this.y <= this.obj_barra_fondo.y - this.obj_barra_fondo.height/2 + this.obj_barra_fondo.height/20)
        {
            this.has_finished_medidor = true;
            this.cropRect.height = this.altura_inicial;
            this.crop(this.cropRect);
            this.y = this.obj_barra_fondo.y - this.obj_barra_fondo.height/2;
            this.animations.stop('default');
        }
    }
};

Medidor.prototype.subir_posicion = function()
{
    if(this.y > this.obj_barra_fondo.y - this.obj_barra_fondo.height/2 + this.obj_barra_fondo.height/20)
    {
        this.y -= this.altura_inicial/45;
    }
};

Medidor.prototype.resetear = function()
{
    this.has_finished_medidor = false;
    this.obj_barra_fondo = null;
};
