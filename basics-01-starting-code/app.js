const app = Vue.createApp({
    data() {
        return {
            courseGoalA: 'Finish the course and learn Vue',
            courseGoalB: '<h2>Master Vue and build amazing app</h2>',
            vueLink: 'https://vuejs.org/'
        };
    },
    methods: {
      outputGoal(){
          const randomNumber = Math.random();
          if(randomNumber < 0.5){
              // return 'Learn Vue';
              return this.courseGoalA;
          }else {
              // return 'Master Vue';
              return this.courseGoalB;
          }
      }
    }
});

app.mount('#user-goal');