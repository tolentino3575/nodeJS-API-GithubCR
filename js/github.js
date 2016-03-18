var apiKey = require('./../.env').apiKey;

exports.getRepos = function(userName){
  $.get('https://api.github.com/users/' + userName + '/repos?access_token=' + apiKey).then(function(response){
    console.log(response);
    for(var i = 0; i < response.length; i++) {
      var name = response[i].name;
      var desc = response[i].description;
      $('#repoInfo').append("<li>" + "Name: " + name + "</li>" + "<li>" + "Description: " + desc + "</li>" + "<li>" + "Found under user: " + userName + "</li>");
    };
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
