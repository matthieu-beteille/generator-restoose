var generators = require('yeoman-generator');
var ncp = require('ncp').ncp;

module.exports = generators.Base.extend({
  method1: function () {
      this.log('Generating restoose project');
      this.remote('matthieu-beteille', 'restoose', function(err, remote, files) {
        if(err){
          this.log(err);
        } else {
          var self= this;
          ncp(remote.src._base,this.destinationRoot(), function (err) {
            if (err) {
              return console.error(err);
            }
            console.log('File copied!');
            self.npmInstall();
          });
        }
      }.bind(this));
  }
});