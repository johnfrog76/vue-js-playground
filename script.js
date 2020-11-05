new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!'
   }
})

new Vue({
  el: '#exercise2',
  data: {
    value: 0,
    title: 'Exercise 2',
    result: 'Not there yet'
  },
  watch: {
    result: function () {
      var me = this;

      setTimeout(function () {
        me.value = 0;
        me.result = 'Not there yet';     
      }, 5000);
    }
  }
})

new Vue({
  el: '#exercise3',
  data: {
    title: 'Exercise 3',
    isCounting: false,
    counter: '',
    t: -1,
    coolClass: 'cool',
    beanzClass: 'beanz',
    userSelectClass: '',
    isHighlighted: false,
    highlightCounter: '',
    c: -1
  },
  computed: {
  },
  methods: {
    startCounter: function (evt) {
      this.isCounting = !this.isCounting;
      this.counter = 0;
    },
    startEffect: function (evt) {
      this.isHighlighted = !this.isHighlighted;
      this.highlightCounter = 0;
    }
  },
  watch: {
    highlightCounter: function () {
        var me = this;
  
        if  (this.isHighlighted && this.highlightCounter === 0) { 
          this.c = setInterval(function () {
              me.highlightCounter++
              if (me.highlightCounter === 100) {
                clearInterval(me.c)
                me.highlightCounter = -1;
              }
          }, 1000);
        } else if (!this.isHighlighted) {
            clearInterval(this.c)
            me.highlightCounter = -1;
        }
    },
    counter: function () {
        var me = this;
  
        if  (this.isCounting && this.counter === 0) { 
          // it seems to me this additional check would make sense?
          this.t = setInterval(function () {
              me.counter++
              if (me.counter === 100) {
                clearInterval(me.t)
                me.counter = -1;
              }
          }, 1000);
        } else if (!this.isCounting) {
            clearInterval(this.t)
            this.counter = -1;
        }
    }
  }
})