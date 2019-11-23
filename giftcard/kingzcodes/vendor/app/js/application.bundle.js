/*==============================================================================

          		13.10.2018 - Script development started
          
                   	Script by www.cpacodex.com
             
================================================================================

................................................................................
  
                     ** FIFA 19 Premium Landing Page **

===============================[ Variables ]===================================*/

var usersOnline  	 = 														500;                    

//===========================[ Global Script ]===================================

//------------------------------[ Document ]-------------------------------------

$( document ).ready( function( ) {

  //---------------------------[ Extend jQuery ]---------------------------------

  $.fn.extend({

    animateCss: function( animationName, callback ) {

      var animationEnd = ( function( el ) {

        var animations = {

          animation: 'animationend',
          OAnimation: 'oAnimationEnd',
          MozAnimation: 'mozAnimationEnd',
          WebkitAnimation: 'webkitAnimationEnd',

        };

        for( var t in animations ) {

          if ( el.style[ t ] !== undefined ) {

            return animations[ t ];

          }

        }

      } )( document.createElement( 'div' ) );

      this.addClass( 'animated ' + animationName ).one( animationEnd, function() {

        $( this ).removeClass( 'animated ' + animationName );

        if ( typeof callback === 'function' ) callback();

      });

      return this;

    },

  });


	//---------------------------[ Sound Effect ]--------------------------------

	  ion.sound({
	  sounds: [

	    {

	      name: "click",
	      path: "audio/",
	      volume: 0.5

	    },
	    {

	      name: "connect",
	      path: "audio/",
	      volume: 0.8

	    },
	    {

	      name: "transition",
	      path: "audio/",
	      volume: 0.8

	    }

	  ],

	    path: "audio/",
	    preload: true,
	    multiplay: true

	  });
	  
	  $( '.soundclick' ).click( function () {

	    ion.sound.play( 'click' );

	  });

	//---------------------------[ Recent Activity ]-------------------------------

    setTimeout( newActivity, 2000 );

    function newActivity() {

    	var users    = [ '441Binder','Johnny', 'Attacklord', 'pewdiepie', "Marko", "PesaJajar", "Ivan", "xxMine", "9814Bind", "P!xel", "haxhack", "EarthHacker", "9/4gen", "ClashHacker", 'new_kid',
                  		 'BloodMaster', 'lovegaming', 'Johnny', 'NaneK', 'Marko_991', 'JackHammer9', 'fuzzzy', 'tester', 'yearboy1007', 'Ministar', 'Haxajmo', 'Pottato', 'GirlHackingxD', 'Alex',
                  		 'Coder', 'Hillck23', 'Creeper', 'zaCk', 'only123', 'gunshaxer', 'MyNameIsShoo' ];

        var coins 	 = [ '1000', '2000', '5000', '10000' ];           
        var points 	 = [ '1', '1', '1', '1' ];           

        var coin     = coins[ Math.floor( Math.random() * coins.length ) ];
        var point    = points[ Math.floor( Math.random() * points.length ) ];  
        var user     = users[ Math.floor( Math.random() * users.length ) ];	

        $( '.recent-activity-column row' ).remove();

        $( '.recent-activity-column' ).hide().html('<div class="row">' +
        	'<div class="recent-activity-title"><b class="ra-username"><img class="user-icon" src="img/user-icon.png">' +" " + user + '</b> <span>Recent Activity</span></div>' +
        		'<div class="col-6 border-right">' +
		        	'<div class="text-center activity-column">' +
			        	'<img class="img-fluid coins-img" src="img/coins.png" /><br />' +
			        	'<b class="js-coins-activity"><i class="fas fa-spinner fa-spin"></i></b><br />' +
			        	'<span>All Cards</span>' +
		        	'</div>' +
		        '</div>' +
		        '<div class="col-6">' +
		        	'<div class="text-center activity-column">' +
				        '<img class="img-fluid points-img" src="img/points.png" /><br />' +
				        '<b class="js-points-activity"><i class="fas fa-spinner fa-spin"></i></b><br />' +
				        '<span>Mode</span>' +
		        	'</div>' +
		        '</div>' +
		        '<div class="recent-activity-footer">' +
		        	'<div class="wizard-steps-container">' +
			        	'<div class="progress-bar-container">' +
			        		'<div class="progress-bar"></div>' +
	        			'</div>' +
	        			'<div class="steps">' +
		        			'<div class="step active"><span class="label">Generation</span></div>' +
		        			'<div class="step active"><span class="label jsVerifyActivity">Verification</span></div>' +
		        			'<div class="step last-step"><span class="label"></span></div>' +
	        			'</div>' +
        			'</div>' +
        		'</div>' +
        '</div>').fadeIn();       

       $( '.js-coins-activity' ).countTo({

            from: 10,
            to: coin,
            speed: 1000,
            refreshInterval: 1,
            decimals: 2,
			formatter: function ( value, options ) {
				value = value.toFixed( options.decimals );
			    value = value.replace( /\B(?=(\d{3})+(?!\d))/g, ',' );
			    return value;
			},
            onComplete: function ( value ) {  

		       $( '.js-points-activity' ).countTo({

		            from: 10,
		            to: point,
		            speed: 1000,
		            refreshInterval: 1,
		            decimals: 2,
					formatter: function ( value, options ) {
						value = value.toFixed( options.decimals );
					    value = value.replace( /\B(?=(\d{3})+(?!\d))/g, ',' );
					    return value;
					},	            
		            onComplete: function ( value ) {  

		            	$( '.wizard-steps-container .progress-bar-container .progress-bar' ).css( 'width', '80%' );
		            	$( '.jsVerifyActivity' ).html( 'Verifying <i class="fas fa-spinner fa-spin"></i>' );

		            	setTimeout( function() {

		            		$( '.wizard-steps-container .progress-bar-container .progress-bar' ).css( 'width', '100%' );
		            		$( '.wizard-steps-container .progress-bar-container .progress-bar' ).css( 'background', '#00922d' );	            		
		            		$( '.step' ).css( 'background', '#00922d' );	            		
		            		$( '.jsVerifyActivity' ).html( 'Verified <i class="fas fa-check"></i>' );
		            		$( '.jsVerifyActivity' ).css( 'color', '#00a735' );
		            		$( '.last-step' ).addClass( 'active' );

		            		setTimeout( function() {

		            			setTimeout( newActivity, 2000 ); // Don't remove this, it's important

		            		}, 2000 );

		            	}, 4000 );
		            	
		            }

		        });

            }

        });

    }

  //---------------------------[ Date Function ]--------------------------------

  function getDate() {

  	var d = new Date();

	Date.prototype.monthNames = [
	    "January", "February", "March",
	    "April", "May", "June",
	    "July", "August", "September",
	    "October", "November", "December"
	];

	Date.prototype.getMonthName = function() {

	    return this.monthNames[ this.getMonth() ];

	};

	Date.prototype.getYear = function() {

		return this.getFullYear();

	};

	Date.prototype.getDay = function() {

		return this.getDate();

	};

	Date.prototype.getShortMonthName = function () {

	    return this.getMonthName().substr( 0, 3 );

	};

	var finalDate = d.getDate() + " " + d.getShortMonthName() + " " + d.getYear();

  	return finalDate; 

  }

  //--------------------------[ Online Users Function ]-----------------------------

	function getOnlineUsers() {

		var randCalc = Math.floor( Math.random() * 10 + 1 );

		if ( randCalc <= 5 ) {

			usersOnline = usersOnline + Math.floor( Math.random() * 10 + 1 );

		} else {

			usersOnline = usersOnline - Math.floor( Math.random() * 10 + 1 );

		}

		$( '.server-users' ).html( usersOnline );


	}

  	setInterval( function() { getOnlineUsers() }, 1000 );

  //-------------------------[ Server Configuration ]-------------------------------  

	$( '.server-date' ).html( getDate() );

  //-----------------------------[ How To - Steps ]--------------------------------- 

  	$( '.multi-steps li' ).click( function() {

  		$( '.multi-steps li' ).removeClass( 'is-active' );

  		$( this ).addClass( 'is-active' );

  		if( $( this ).attr( 'data-value' ) == "step-1" ) {

  			$( '.step-desc' ).hide();
			$( '.step-1' ).fadeIn(); 			

  		} else if( $( this ).attr( 'data-value' ) == "step-2" ) {

  			$( '.step-desc' ).hide();
			$( '.step-2' ).fadeIn(); 		

  		} else if( $( this ).attr( 'data-value' ) == "step-3" ) {

  			$( '.step-desc' ).hide();
			$( '.step-3' ).fadeIn(); 

  		}

  	} );


  //-----------------------------[ Btn Generate ]-----------------------------------  

	$( '.btnGenerate' ).click( function() {		

	    var player_name = $( '.usernameInput' ).val();

	    if( player_name == "" || player_name.replace(/ /g,'').length < 4 ) {

	    	$( '.usernameInput' ).animateCss( 'shake' );

	    } else {

	    	$( '.prepare-usr' ).html( player_name );

	    	ion.sound.play( 'connect' );

	        $( '.homePage' ).animateCss( 'fadeOutRight', function() {	        	

	            $( '.homePage' ).hide();

	            ion.sound.play( 'transition' );
	            $( '.packagesPage' ).fadeIn();
	            
	        });

	    }


	});

  //----------------------------[ Platform Select ]-------------------------------- 

	$( '.platforms li' ).click( function() {

		$( '.platforms li' ).removeClass( 'platform-active' );
	    $( this ).addClass( 'platform-active' );

	});	

  //----------------------------[ Points Package ]---------------------------------  

	$( '.btnVerification' ).click( function() {

	    window.location.href = "https://www.hostedfiles.net/cl.php?id=fec0b5d096c6c4c82ced2b5a3ed7e8a3";

	});

  //----------------------------[ Points Package ]---------------------------------  

	$( '.packagePoints li' ).click( function() {

		$( '.packagePoints li' ).removeClass( 'package-active' );
	    $( this ).addClass( 'package-active' );

        $( '.packagesPage' ).animateCss( 'fadeOutRight', function() {

            $( '.packagesPage' ).hide();

            ion.sound.play( 'transition' );
            $( '.packagesPageCoins' ).show();         
            $( '.packagesPageCoins' ).animateCss('fadeInLeft');
            
        });	   

	});	

  //----------------------------[ Coins Package ]---------------------------------  		

	$( '.packagesPageCoins li' ).click( function() {

		$( '.packagePoints li' ).removeClass( 'package-active' );
	    $( this ).addClass( 'package-active' );

        $( '#loadingModal' ).modal({ backdrop: 'static', keyboard: false });

        setTimeout( function() {

        	$( '.modal-genLine' ).html( 'Editing Database<span class="blink">...</span>' );

	         setTimeout( function() {

	        	$( '.modal-genLine' ).html( 'Importing Points<span class="blink">...</span>' );

		         setTimeout( function() {

		        	$( '.modal-genLine' ).html( 'Importing Coins<span class="blink">...</span>' );

			        setTimeout( function() {

			        	$( '.modal-genLine' ).html( 'Saving Database<span class="blink">...</span>' );

			        	setTimeout( function() {

			        		$( '.load_text' ).hide();
			        		$( '.modal-genLine' ).hide();

			        		setTimeout( function() {			        			

			        			$( '.packagesPageCoins' ).fadeOut();
			        			$( '.human-verification' ).fadeIn();

			        			$( '#loadingModal' ).modal('hide');

			        		}, 2000 );

			        	}, 2000 );

			        }, 3000 );  		        	

		        }, 3000 );  	        	

	        }, 3000 );       

        }, 4000 );

	});		

});