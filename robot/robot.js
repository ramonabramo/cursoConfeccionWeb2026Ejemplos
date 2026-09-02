let Robot=null;
let Tuerca=null;
let tuercas=new Array();
let movimientos=0;
let video=null;


window.addEventListener('load',(e) => {
  Robot=function(x=0,y=0){
  		let objeto=document.body.appendChild(document.querySelector(".robot").cloneNode());
  		let sonido=document.querySelector("#sonido");
  		let sonido1=document.querySelector("#sonido1");
      let sonido2=document.querySelector("#sonido2");
      let sup=this;

  		function choca(izquierda,arriba,ancho,alto){
  			let x=parseInt(objeto.style.left);
  			let y=parseInt(objeto.style.top);
  			let w=parseInt(objeto.style.width);
  			let h=w*1.3;

  			if((x+w)>=izquierda && x<=(izquierda+ancho) && (y+h)>=arriba && y<=(arriba+alto))
  				return 1;

  		}


  		function comprobar(){
  			tuercas.forEach( function(element, index) {
  				if(choca(element.getLeft(),element.getTop(),element.getWidth(),element.getHeight())){
  					element.eliminar();
  					tuercas.splice(index,1);
  					console.log(movimientos);
            sonido2.play();
            sup.tuercas++;
  				}
			});
        if(Math.trunc(Math.random()*100)%2 && !(movimientos%10)){
            mover();
        }

  		}

      this.tuercas=0;
      this.movimientos=0;

  		this.derecha=function(valor=10){
  			movimientos++;
        this.movimientos++;
  			objeto.style.left=parseInt(objeto.style.left)+valor+"px";
  			sonido1.play();
  			comprobar();
  		}

  		this.izquierda=function(valor=10){
  			movimientos++;
        this.movimientos++;
  			objeto.style.left=parseInt(objeto.style.left)-valor+"px";
  			sonido1.play();
  				comprobar();
  		}

  		this.abajo=function(valor=10){
  			movimientos++;
        this.movimientos++;
  			objeto.style.top=parseInt(objeto.style.top)+valor+"px";
  			sonido1.play();
  				comprobar();
  		}

  		this.arriba=function(valor=10){
  			movimientos++;
        this.movimientos++;
  			objeto.style.top=parseInt(objeto.style.top)-valor+"px";
  			sonido1.play();
  				comprobar();
  		}

  		this.color=function(valor=90){
  			objeto.style.filter="hue-rotate(" + valor + "deg)";
  		}

  		this.acercarse=function(valor=10){
  			movimientos+=valor;
        this.movimientos+=valor;
  			objeto.style.width=parseInt(objeto.style.width)+valor+"px";
  			sonido.play();
  				comprobar();
  		}

  		this.alejarse=function(valor=10){
        this.movimientos++;
  			movimientos++;
  			objeto.style.width=parseInt(objeto.style.width)-valor+"px";
  			sonido.play();
  				comprobar();
  		}

      this.eliminar=function(){
        document.body.removeChild(objeto);
      }


  		this.Robot=function(x,y){
  			objeto.style.display="block";
  			objeto.style.left=x+"px";
  			objeto.style.top=y+"px";
  			objeto.style.width="50px";
        this.color(Math.trunc(Math.random()*270));
  		}

  		this.Robot(x,y);
  };


Tuerca=function(){
	let objeto=document.body.appendChild(document.querySelector(".tuerca").cloneNode());
  	
  	this.Tuerca=function(){
  			objeto.style.display="block";
  			objeto.style.left=1+Math.random()*1000 + "px";
  			objeto.style.top=1+Math.random()*500 + "px";
  			objeto.style.width=20+Math.random()*100+"px";
  	}

  	this.getLeft=function(){
  		return parseInt(objeto.style.left);
  	}

    this.setLeft=function(valor){
      objeto.style.left=valor+"px";
    }

  	this.getWidth=function(){
  		return parseInt(objeto.style.width);
  	}

  	this.getTop=function(){
  		return parseInt(objeto.style.top);
  	}

    this.setTop=function(valor){
      objeto.style.top=valor+"px";
    }

  	this.getHeight=function(){
  		return parseInt(objeto.style.width);
  	}


  	
  	this.eliminar=function(){
  		document.body.removeChild(objeto);
  	}


  		this.Tuerca();

}

Video=function(){
  let objeto=document.querySelector("#medio");

  this.reproduce=function(){
    objeto.style.display="block";
    objeto.play();
  }

  objeto.addEventListener("ended", function(){
    objeto.style.display="none";
  });

}

video=new Video();

crear(1);

});

function ayuda(){
  video.reproduce();
}

function mover(){
  tuercas.forEach( function(element, index) {
    element.setLeft(1+Math.random()*1000);
    element.setTop(1+Math.random()*500);
  });
}

function crear(numero=1){
	movimientos=0;
	tuercas.forEach( function(element, index) {
		element.eliminar();
		tuercas.splice(index,1);
	});


	for(let i=0;i<numero;i++){
		tuercas.push(new Tuerca())
	}
}






