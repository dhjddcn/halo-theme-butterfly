export default class Dark {
  constructor() {
    this.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    this.n = null;
    this.e = null;
    this.i = null;
    this.h = null;
    this.t = 0.05;
    this.s = null;
    this.o = true;
    this.a = "180,184,240";
    this.r = "226,225,142";
    this.d = "226,225,224";
    this.c = [];
  }

  initCanvas() {
    this.s = document.createElement('canvas');
    this.s.id = 'universe';
    this.s.width = 2560;
    this.s.height = 414;
    document.body.appendChild(this.s);
    this.h = this.s.getContext('2d');
  }

  initCanvasSize() {
    this.n = window.innerWidth;
    this.e = window.innerHeight;
    this.i = 0.216 * this.n;
    this.s.setAttribute("width", this.n);
    this.s.setAttribute("height", this.e);
  }

  renderCanvas() {
    this.h.clearRect(0, 0, this.n, this.e);
    for (let i = 0; i < this.c.length; i++) {
      let s = this.c[i];
      s.move();
      s.fadeIn();
      s.fadeOut();
      s.draw();
    }
  }

  createNewAnimationObject() {
    let that = this;
    return {
      giant: false,
      comet: false,
      x: 0,
      y: 0,
      r: 0,
      dx: 0,
      dy: 0,
      fadingOut: false,
      fadingIn: false,
      opacity: 0,
      opacityTresh: 0,
      do: 0,
      reset: function() {
        this.giant = that._m(3);
        this.comet = !this.giant && !that.o && that._m(10);
        this.x = that._l(0, that.n - 10);
        this.y = that._l(0, that.e);
        this.r = that._l(1.1, 2.6);
        this.dx = that._l(that.t, 6 * that.t) + (this.comet + 1 - 1) * that.t * that._l(50, 120) + 2 * that.t;
        this.dy = -that._l(that.t, 6 * that.t) - (this.comet + 1 - 1) * that.t * that._l(50, 120);
        this.fadingOut = null;
        this.fadingIn = true;
        this.opacity = 0;
        this.opacityTresh = that._l(.2, 1 - .4 * (this.comet + 1 - 1));
        this.do = that._l(5e-4, .002) + .001 * (this.comet + 1 - 1);
      },
      fadeIn: function() {
        if (this.fadingIn) {
          this.fadingIn = !(this.opacity > this.opacityTresh);
          this.opacity += this.do;
        }
      },
      fadeOut: function() {
        if (this.fadingOut) {
          this.fadingOut = !(this.opacity < 0);
          this.opacity -= this.do / 2;
          if ((this.x > that.n || this.y < 0)) {
            this.fadingOut = false;
            this.reset();
          }
        }
      },
      draw: function() {
        that.h.beginPath();
        if (this.giant) {
          that.h.fillStyle = "rgba(" + that.a + "," + this.opacity + ")";
          that.h.arc(this.x, this.y, 2, 0, 2 * Math.PI, false);
        } else if (this.comet) {
          that.h.fillStyle = "rgba(" + that.d + "," + this.opacity + ")";
          that.h.arc(this.x, this.y, 1.5, 0, 2 * Math.PI, false);
          for (let t = 0; t < 30; t++) {
            that.h.fillStyle = "rgba(" + that.d + "," + (this.opacity - this.opacity / 20 * t) + ")";
            that.h.rect(this.x - this.dx / 4 * t, this.y - this.dy / 4 * t - 2, 2, 2);
            that.h.fill();
          }
        } else {
          that.h.fillStyle = "rgba(" + that.r + "," + this.opacity + ")";
          that.h.rect(this.x, this.y, this.r, this.r);
        }
        that.h.closePath();
        that.h.fill();
      },
      move: function() {
        this.x += this.dx;
        this.y += this.dy;
        if (!this.fadingOut && (this.x > that.n - that.n / 4 || this.y < 0)) {
          this.fadingOut = true;
        }
        if ((this.x > that.n || this.y < 0)) {
          this.fadingOut = false;
          this.reset();
        }
      }
    };
  }

  init() {
    let style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = '#universe {display: block;position: fixed;margin: 0;padding: 0;border: 0;outline: 0;left: 0;top: 0;width: 100%;height: 100%;pointer-events: none;z-index: -1;}';
    document.head.append(style);

    this.initCanvas();

    for (let i = 0; i < this.i; i++) {
      let animationObject = this.createNewAnimationObject();
      animationObject.reset();
      this.c.push(animationObject);
    }

    this.animate();
  }

  animate() {
    this.initCanvasSize();
    this.renderCanvas();
    if (document.getElementsByTagName('html')[0].getAttribute('data-theme') == 'dark') {
      this.renderCanvas();
    }
    this.requestAnimationFrame(() => this.animate());
  }

  _m(t) {
    return Math.floor(1e3 * Math.random()) + 1 < 10 * t;
  }

  _l(t, i) {
    return Math.random() * (i - t) + t;
  }
}


