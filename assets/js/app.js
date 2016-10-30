// sanity check
console.log("app.js linked.");

// wait for DOM to load before running JS
$(function() {

    var source = $('#repo-template').html();
    var template = Handlebars.compile(source);
    var repoHtml;
    var githubAPI = 'https://api.github.com/users/themartinuriarte/';
    var repoURL = 'https://api.github.com/repos/themartinuriarte/';
    var validRepos = [];



    martinsRepos.forEach(function(repo) {
        console.log("Ping!");
        if (repo.description && repo.language) {
            validRepos.push(repo);
            //console.log(repo);
        }
    });
    repoHtml = template({
        repos: validRepos
    });
    $("#repo-list").append(repoHtml);

});


var martinsRepos = [{}];
