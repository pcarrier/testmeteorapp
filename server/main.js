var leak=[];
Meteor.startup(function(){
  setInterval(function(){
    var s = "", n = Math.random();
    for (i = 0; i < 100000; i++) s = s + n;
    leak.push(s);
    console.log('hop');
  }, 1);
});
