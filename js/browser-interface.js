// var getRepos = require('./../js/github.js').getRepos;
// var getUserInfo = require('./../js/github.js').getUserInfo;
var gitHubModule = require('./../js/github.js');

$(document).ready (function(){
  $('#github').submit(function(event){
    event.preventDefault();
    $('#repoInfo').show();
    $('#userInfo').show();
    var userName = $('#userName').val();
    gitHubModule.getRepos(userName);
    gitHubModule.getUserInfo(userName);
  });
});
