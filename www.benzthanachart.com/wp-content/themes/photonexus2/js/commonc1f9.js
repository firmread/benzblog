jQuery(document).ready(function(){ 
	// initialise menu
	jQuery('.homemenu ul.menu').superfish({
            animation:   {opacity:'show',height:'show'},  // fade-in and slide-down animation 
            autoArrows:  true,                           // disable generation of arrow mark-up 
            dropShadows: true                            // disable drop shadows      
	});
	
	/* This is basic - uses default settings */
	
	jQuery("a#single_image").fancybox({
		'hideOnContentClick': true
	});
	
	/* Using custom settings */
	
	jQuery("a#inline").fancybox({
		'hideOnContentClick': true
	});

	/* Apply fancybox to multiple items */
	
	jQuery("a.group").fancybox({
		'transitionIn'	:	'elastic',
		'transitionOut'	:	'elastic',
		'speedIn'		:	600, 
		'speedOut'		:	200, 
		'overlayShow'	:	true
	});
	
	//Hide (Collapse) the toggle containers on load
	jQuery(".toggle_container").hide(); 

	//Switch the "Open" and "Close" state per click then slide up/down (depending on open/close state)
	jQuery("h4.trigger").click(function(){
		jQuery(this).toggleClass("active").next().slideToggle("fast");
		return false;
	});
	
  jQuery(".hoverimage-icon").fadeTo(1, 0);
  jQuery(".hoverimage-icon").hover(
    function () {
      jQuery(this).stop().fadeTo("fast", 1);
    },
    function () {
      jQuery(this).stop().fadeTo("fast", 0);
    }
  );

	
	jQuery('.qtips').tipsy({gravity: 'n'});
	jQuery('.etips').tipsy({gravity: 'e'});
	jQuery('.stips').tipsy({gravity: 's'});

});