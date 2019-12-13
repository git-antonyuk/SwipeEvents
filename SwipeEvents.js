export default class SwipeEvents {
  constructor (el) {
    this.startX = 0
    this.startY = 0

    this.el = el

    this.el.addEventListener('touchstart', this.touchstart.bind(this), { passive: true })
  }

  removeEventListener () {
    this.el.removeEventListener('touchstart', this.touchstart.bind(this), { passive: true })
  }

  touchstart (event) {
    const touches = event.touches
    if (touches && touches.length) {
      this.startX = touches[0].pageX
      this.startY = touches[0].pageY
      this.el.addEventListener('touchmove', this.touchmove.bind(this), { passive: true })
    }
  }

  touchmove (event) {
    const touches = event.touches
    if (touches && touches.length) {
      const deltaX = this.startX - touches[0].pageX
      const deltaY = this.startY - touches[0].pageY
      
      if (deltaX >= 50) {
        const event = new Event('swipeLeft')
        this.el.dispatchEvent(event)
      }
      if (deltaX <= -50) {
        const event = new Event('swipeRight')
        this.el.dispatchEvent(event)
      }
      if (deltaY >= 50) {
        const event = new Event('swipeUp')
        this.el.dispatchEvent(event)
      }
      if (deltaY <= -50) {
        const event = new Event('swipeDown')
        this.el.dispatchEvent(event)
      }
      
      if (Math.abs(deltaX) >= 50 || Math.abs(deltaY) >= 50) {
        this.el.removeEventListener('touchmove', () => { this.touchmove }, { passive: true })
      }
    }
  }
}
