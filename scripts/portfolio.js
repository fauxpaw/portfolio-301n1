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

projects.fetchAll = function(){
  if (localStorage.rawData) {
    console.log('getting data from local...');
    Project.loadAll(JSON.parse(localStorage.rawData));
  }
  else {
    $.getJSON('data/blogArticles.json', function(rawData) {
      Project.loadAll(rawData);
      localStorage.rawData = JSON.stringify(rawData);

    });
  }
};
Project.loadAll = function(rawData){
  rawData.sort(function(a,b){
    return (new Date(b.date)) - (new Date(a.date));
  });
};


rawData.forEach(function(obj){
  projects.push(new Project(obj));
});

projects.forEach(function(a){
  $('#projects').append(a.render());
});
