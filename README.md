Swipe Events helper

> Init sample

```javascript
const el = document.querySelector('.el')
const swipeEvents = new SwipeEvents(el)

function prev () {
  console.log('prev')
}

function next () {
  console.log('next')
}

el.addEventListener('swipeRight', prev)
el.addEventListener('swipeLeft', next)
```

> Destroy sample 

``` javascript
el.removeEventListener('swipeRight', this.prev)
el.removeEventListener('swipeLeft', this.next)
swipeEvents.removeEventListener()

```