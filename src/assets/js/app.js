/*
|   This is the one Javascript file that Yabu no Naka uses.
|   See css/screen.css for theme version info.
|
|   Please:
|   1. Edit your theme settings, which is now located in js/options.json.
|   2. Add your additional JS (if you would like to).
|   3. Leave the "DO NOT EDIT" section unchanged.
|   
|   Happy blogging!
|
|   Last Update on Nov 20, 2015
|   
|   Coded by Art Chen @ rakugaki.me
|
*/

/* ============ |START| DO NOT EDIT |START| ============= */

/* === Settings Init Function === */

function Yabu_Settings(options) {

  /* Default theme settings */
  var y_settings = $.extend({
          
    /* Set author name */
    "y_author": "John Smith",

    /* Set sidebar and logo position */
    "y_right_sidebar": false,
    "y_right_logo": false,

    /* Set author bio */
    "y_description": {
      "set": true,
      "desc": "<p>Hermit Chen</p><p>Portfolio @ rakugaki.me</p><p>Themeforest ID = otakism</p><p>Thank you for previewing my theme.</p>",
			"textalign": "center"
    },

    /* Set Social Networks */
    "y_social": [
      {
        "name": "facebook",
        "url": "#"
      },
      {
        "name": "twitter",
        "url": "#"
      },
      {
        "name": "googleplus",
        "url": "#"
      },
      {
        "name": "github",
        "url": "#"
      },
      {
        "name": "tumblr",
        "url": "#"
      },
      {
        "name": "flickr",
        "url": "#"
      },
      {
        "name": "dribbble",
        "url": "#"
      },
      {
        "name": "instagram",
        "url": "#"
      },
      {
        "name": "linkedin",
        "url": "#"
      },
      {
        "name": "pinterest",
        "url": "#"
      },
      {
        "name": "qq",
        "url": "#"
      },
      {
        "name": "renren",
        "url": "#"
      },
      {
        "name": "sina-weibo",
        "url": "#"
      }
    ]

  }, options);

  /* Applying custom settings */

  /* Author name */
  if (y_settings.y_author) {
    $('#aboutme h1').html(y_settings.y_author);
    setTimeout(function(){
      $('#site-name').addClass('show');
    }, 10);
  }
  
  /* Author Bio (Site description) */
  if (y_settings.y_description.set) {
    var author_desc = y_settings.y_description.desc;
    $('#my-description').css("text-align", y_settings.y_description.textalign);
    $('#my-description').html(author_desc);
    setTimeout(function(){
      $('#my-description').slideDown(200);               
    }, 200);
  }

  /* Positioning */
  if (y_settings.y_right_sidebar) {
    $("#sidebar").css({"float":"right", "margin-right":0});
  }
  if (y_settings.y_right_logo) {
    $(".logo-positioner").css({"float":"right"});
  }

  /* Social Networks */
  y_settings.y_social.forEach(function(v) {
	  var item = "<li><a href=\"" + v.url + "\" class=\"icon-" + v.name + "\"></a></li>";
    $(".snslist").append(item);
  });

}

/* Main Jquery */

(function($){
  
  /* Responsive Menu */
  $('.hide-menu').hide();
  $('#readnow').click(function(event){
    event.preventDefault();
    if ($('.post-list').offset()) {
      $('html,body').animate({scrollTop: $('.post-list').offset().top}, 500);
    }
    else if ($('.single').offset()) {
      $('html,body').animate({scrollTop: $('.single').offset().top}, 500);
    }
  });

  /* Fitvids Settings */
  $(".post-content").fitVids();

  /* Main menu toggle logic */
  $('#toggle-menu').click(
    function(event){
      event.preventDefault();
      $('#main-menu ul li').slideToggle(200, function(){
        if ($('#main-menu ul li').css("display") === "none"){
          $('#toggle-menu .show-menu').show();
          $('#toggle-menu .hide-menu').hide();
        }
        else{
          $('#toggle-menu .show-menu').hide();
          $('#toggle-menu .hide-menu').show();
        }
      });
    }
  );
  
  window.onresize = function(){
    if ($(window).width() >= 767 && $('#main-menu ul li').css("display") === "none") {
      $('#main-menu ul li').slideDown(200);
      $('#toggle-menu .show-menu').hide();
      $('#toggle-menu .hide-menu').show();
    }
  };

})(jQuery);

/* ============ |END| DO NOT EDIT |END| ============= */


/* ===  Specify Theme Options Here  === */

(function($){
  /* Apply options */
  var yabu = new Yabu_Settings(theme_options);
})(jQuery);



