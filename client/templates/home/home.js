   var imageLoadTime = new ReactiveVar(0);

var loadImage = function(path, width, height, target) {
      $('<img src="'+ path +'">').load(function() {
              $(this).width(width).height(height).appendTo(target);
                         var imageLTime = new Date();
              console.log("Image loaded at " +imageLTime);
              imageLoadTime.set(imageLTime);
              $('.positive-vote').css("display", "block");    //enable voting after image load
              $('.negative-vote').css("display", "inline");
          }).error(function(){
              console.log("Image unsuccesfully loaded");
          });
}

Template.home.rendered = function(){
  renderTime = new Date();
  console.log("Page rendered at " + renderTime);
   loadImage("http://www.armenianweekly.com/wp-content/uploads/2009/09/Armenia_1.jpg", 200, 200, "#image");
};


Template.home.events = ({
  'submit .positive-vote' : function(event){
    var voteTime = new Date();
    var renderTime = imageLoadTime.get();
    var dif = voteTime - renderTime;
    console.log("voted positive at " + voteTime +" difference: " + dif);
    return false;
  },
  'submit .negative-vote' : function(event){
    var voteTime = new Date();
    var renderTime = imageLoadTime.get();
    var dif = voteTime - renderTime;
    console.log("voted negative at " + voteTime +" difference: " + dif);
    return false;
  }

})
