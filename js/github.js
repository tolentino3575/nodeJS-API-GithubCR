var apiKey = require('./../.env').apiKey;

exports.getRepos = function(userName){

  $.get('https://api.github.com/users/' + userName + '/repos?access_token=' + apiKey).then(function(response){
    // console.log(response);
    for(var i = 0; i < response.length; i++) {
      var name = response[i].name;
      var desc = response[i].description;
      var created = moment(response[i].created_at).format('MMMM Do YYYY, h:mm:ss:a');
      if(response[i].description === ""){
        var desc = "No description provided for this repository.";
      }
      $('#repoInfo').append("<li>" + "Project name: " + name + "</li>" +
                            "<li>" + "Description: " + desc + "</li>" +
                            "<li>" + "Found under Github user: " + userName + "</li>" +
                            "<li>" + "Created on: " + created + "</li>" +
                            "<br>");
    };
  }).fail(function(error){
    // console.log(error.responseJSON.message);
  });
};

exports.getUserInfo = function(userName){
  $.get('https://api.github.com/users/' + userName + '?access_token=' + apiKey).then(function(response){
    console.log(response);
    var fullName = response.name;
    if(response.name === null){
      var fullName = "Not provided";
    }
    var followers = response.followers;
    var following = response.following;
    var email = response.email;
    if(response.email === null){
      var email = "Not provided"
    }
    var avatar = response.avatar_url;
    $('#userInfo').append("<li>" + "The name of the owner of this Github account is: " + fullName + "</li>" +
                          "<li>" + "They are following " + following + " other Github users." + "</li>" +
                          "<li>" + "They have " + followers + " other Github users following them." + "</li>" +
                          "<li>" + "If you wish to contact " + userName + ", their email is: " + email + "</li>" +
                          "<li>" + "This is what " + userName + " looks like: " + "<img src=" + avatar + ">" + "</li>");
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
