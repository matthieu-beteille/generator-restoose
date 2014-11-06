var generators = require('yeoman-generator');
var ncp = require('ncp').ncp;

module.exports = generators.Base.extend({
  method1: function () {
      this.log('Generating your restoose project');
      this.log('1/3 Fetching restoose from github');
      this.remote('matthieu-beteille', 'restoose', function(err, remote, files) {
        if(err){
          this.log(err);
        } else {
          var self= this;
          this.log('2/3 Copying files ');
          ncp(remote.src._base,this.destinationRoot(), function (err) {
            if (err) {
              return this.error(err);
            }
            self.log('3/3 Installing dependencies ... ');
            self.npmInstall();
          });
        }
      }.bind(this));
  }
});