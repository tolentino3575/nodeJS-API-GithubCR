var apiKey = require('./../.env').apiKey;

exports.getRepos = function(userName){
  $('#repoInfo').show();
  $.get('https://api.github.com/users/' + userName + '/repos?access_token=' + apiKey).then(function(response){
    console.log(response);
    for(var i = 0; i < response.length; i++) {
      var name = response[i].name;
      var desc = response[i].description;
      var created = moment(response[i].created_at).format('MMMM Do YYYY, h:mm:ss:a');
      if(response[i].description === ""){
        var desc = "No description provided for this repository.";
      }
      $('#repoInfo').append("<li>" + "Project name: " + name + "</li>" + "<li>" + "Description: " + desc + "</li>" + "<li>" + "Found under Github user: " + userName + "</li>" + "<li>" + "Created on: " + created + "</li>" + "<br>");
    };
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
