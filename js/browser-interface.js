var getRepos = require('./../js/github.js').getRepos;

$(document).ready (function(){
  $('#github').submit(function(event){
    event.preventDefault();
    $('#repoInfo').show();
    var userName = $('#userName').val();
    getRepos(userName);
  });
});
