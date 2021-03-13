import { Layer } from './layer.js'
import { Loop } from './loop.js'

class App {
  constructor(container) {
    this.layer = new Layer(container);
    this.loop = new Loop(time => this.update(time), () => this.display());
  }
  update(correction = 0) {
  }
  display() {
  }
}

onload = () => { new App(document.body) }