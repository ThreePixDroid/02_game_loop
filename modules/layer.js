export class Layer {
  constructor(container) {
    this.canvas = document.createElement(`canvas`);
    this.context = this.canvas.getContext(`2d`);
    container.appendChild(this.canvas);

    this.fitToContainer = this.fitToContainer.bind(this);
    addEventListener(`resize`, this.fitToContainer); 
    this.fitToContainer();
  }
  fitToContainer() {
    this.w = this.canvas.width = this.canvas.clientWidth;
    this.h = this.canvas.height = this.canvas.clientHeight;
  }
}