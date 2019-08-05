import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      list: [
        {chore: 'Buy shopping'},
        {chore: 'Clean bathroom'},
        {chore: 'Car MOT'}
      ],
      newChore: ''
    }
  })
})
