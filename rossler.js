var dt = 0.01;
var a = .2;
var b = .2;
var c = 5.7;

function DblPen() {

	this.x = 1.2;
	this.y = 1.2;
	this.z = 0.3;
  this.f = [];
  this.f[0] = function(x_,y_,z_){return (-y_-z_)};
  this.f[1] = function(x_,y_,z_){return x_+a*y_};
  this.f[2] = function(x_,y_,z_){return (b+z_*(x_-c))};
  
	this.update = function() {

      this.X = [this.x,this.y,this.z];
	  
	  for( var i = 0;i<5;i++){
      	this.X = RK4(this.f, this.X, dt);
      }
			this.x = this.X[0];
			this.y = this.X[1];
			this.z = this.X[2];

	}
	
	this.display = function() {}

}