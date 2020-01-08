// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

// ---------  vue js part ---------

Vue.component('todo-item',{
    props:['todo'],
    template: '<li>{{`${todo.text} ${key} hello`}}</li>'
})

let app = new Vue({
    el: '#app',
    data: {
        message : 'hello vue!'
    }
})

let app2 = new Vue({
    el: '#app-2',
    data : {
        message : 'this page was loaded at '+new Date()
    }
})

let app3 = new Vue({
    el: '#app-3',
    data : {
        see: true
    }

})

let app4 = new Vue({
    el: '#app-4',
    data: {
        todos : [
            {text : 'Learning JAVA script'},
            {text : 'Learning Vue.js'},
            {text : 'build something Awesome'}
        ]
    }
})

let app5 = new Vue({
    el:'#app-5',
    data: {
        message : "Hello Vue-Js!"
    },
    methods: {
        reverseMessage : function(){
            this.message = this.message.split('').reverse().join('')
        }
    }
})

let app6 = new Vue({
    el: '#app-6',
    data : {
        message: 'Hello Vue!'
    }
})

let app7 = new Vue({
    el : '#app-7',
    data : {
        Glist : [
            {id:0, text:'Vegetables'},
            {id:1, text: 'Chesse'},
            {id:2, text: 'eatables'}
        ]
    }
})

//---------------------------

{   //set jquery and bootstrap 
    window.$ = window.jQuery = require("jquery")
    //window.popper = require.apply("popper.js")
    require("bootstrap")
    require("./common.js")
}

let myNotification = new Notification('This is title ', {
    body: 'Lorem Ipsum Dolor Sit Amet'
  })
  
  myNotification.onclick = () => {
    console.log('Notification clicked')
  }

