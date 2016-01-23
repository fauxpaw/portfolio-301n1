var projects = [];

function Project(stuff){
  this.title = stuff.title;
  this.date = stuff.date;
  this.screenshot = stuff.screenshot;
  this.blurb = stuff.blurb;
  this.id = stuff.id;
};

Project.prototype.render = function(){
  //copy template
  var $newProject = $('article.template').clone();
  //find element and attach data to it
  $newProject.attr('id', this.id);
  $newProject.find('h1').html(this.title);
  $newProject.find('img').attr('src', this.screenshot);
  $newProject.find('section.summary').html(this.blurb);
  $newProject.find('time').html('about ' + parseInt((new Date() - new Date(this.date))/60/60/24/1000) + ' days ago');
  //add section break
  $newProject.append('<hr>');

  $newProject.removeClass('template');



  return $newProject;

};

database.sort(function(a,b){
  return (new Date(b.date)) - (new Date(a.date));
});

database.forEach(function(obj){
  projects.push(new Project(obj));
});

projects.forEach(function(a){
  $('#project').append(a.render());
});
