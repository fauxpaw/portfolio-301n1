var projects = [];

function Project(stuff){
  this.title = stuff.title;
  this.date = stuff.date;
  this.screenshot = stuff.screenshot;
  this.blurb = stuff.blurb;
  this.id = stuff.id;
};

Project.prototype.render = function(){
  var template = Handlebars.compile($('#project-template').html());
  return template(this);

};

database.sort(function(a,b){
  return (new Date(b.date)) - (new Date(a.date));
});

database.forEach(function(obj){
  projects.push(new Project(obj));
});

projects.forEach(function(a){
  $('#projects').append(a.render());
});
