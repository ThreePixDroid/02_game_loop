export class Layer {
  constructor(container = document.body) {          
    this.canvas = document.createElement( `canvas` );//create new Canvas element
    this.context = this.canvas.getContext( `2d` );   //get access to 2d drawing tools    
    container.appendChild( this.canvas );      //put Canvas to Container

    addEventListener(`resize`, () => this.fitToContainer(), false);
    this.fitToContainer();          
  }
  fitToContainer() {                                //fit Canvas size to container
    this.w = this.canvas.width = this.canvas.offsetWidth;
    this.h = this.canvas.height = this.canvas.offsetHeight;
  }
}
