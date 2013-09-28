$( document ).on( "pageinit", "#home", function() {

			$( document ).on( "swipeleft swiperight", "#home", function( e ) {
				// We check if there is no open panel on the page because otherwise
				// a swipe to close the left panel would also open the right panel (and v.v.).
				// We do this by checking the data that the framework stores on the page element (panel: open).
				if ( $.mobile.activePage.jqmData( "panel" ) !== "open" ) {
					if ( e.type === "swiperight"  ) {
						$( "#left-panel" ).panel( "open" );
					} 
				}
			});
		});