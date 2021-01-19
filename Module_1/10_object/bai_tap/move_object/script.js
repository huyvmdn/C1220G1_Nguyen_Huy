/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, size){
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;


  this.getHeroElement = function(){
    return '<img width="'+ this.size + '"' +
      ' height="'+ this.size + '"' +
      ' src="' + this.image +'"' +
      ' style="top: '+this.top+'px; left:'+this.left+'px; position:absolute;" />';
  }

  this.moveRight = function(){
    this.left += 50;
    console.log('ok: ' + this.left);
  }
  this.moveLeft = function(){
    this.left -= 50;
    console.log('ok: ' + this.left);
  }
  this.moveUp = function(){
    this.top -= 50;
    console.log('ok: ' + this.left);
  }
  this.moveDown = function () {
      this.top +=50;
      console.log('ok: ' + this.top);
    }

}

var hero = new Hero('goku.png', 20, 30, 100);

function start(){
  if(hero.left <= window.innerWidth - hero.size && hero.top <=hero.size){
    hero.moveRight();
  }else if(hero.left >= window.innerWidth - hero.size && hero.top <=700) {
    hero.moveDown();
  }else if (hero.left>= 30+hero.size && hero.top >=700) {
    hero.moveLeft();
  }else if (hero.left <= 30 + hero.size && hero.top >= 20 + hero.size) {
    hero.moveUp();
  }
  document.getElementById('game').innerHTML = hero.getHeroElement();
  setTimeout(start, 50)
}

start();