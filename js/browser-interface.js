var getRepos = require('./../js/github.js').getRepos;

$(document).ready (function(){
  $('#github').submit(function(event){
    event.preventDefault();
    var userName = $('#userName').val();
    getRepos(userName);
  });
});
