var getRepos = require('./../js/github.js').getRepos;
var getUserInfo = require('./../js/github.js').getUserInfo;

$(document).ready (function(){
  $('#github').submit(function(event){
    event.preventDefault();
    $('#repoInfo').show();
    $('#userInfo').show();
    var userName = $('#userName').val();
    getRepos(userName);
    getUserInfo(userName);
  });
});
