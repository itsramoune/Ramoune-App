// Initialize your app
var myApp = new Framework7({
	root:'#app',
	theme: 'ios', //ios, md, auto
    modalTitle: 'Framework7', 	//title for modals
	panel: {
    	swipe: 'left',
  	},
	cache:false,
	pushState:false,
	swipeBackPage:true,
	material: true,
	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		}
	]
});

// Export selectors engine
var $$ = Dom7;





 

