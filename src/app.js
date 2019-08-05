import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      items: [
        {name: 'Buy shopping', priority: 'High'},
        {name: 'Clean bathroom', priority: 'Low'},
        {name: 'Car MOT', priority: 'High'}
      ],
      newChore: ''
    },
    methods: {
      addNewChore: function (e) {
        e.preventDefault();
        this.items.push({
          name: this.newChore,
          priority: this.newPriority
        });
        this.newChore = '';
      }
    }
  });
});
