$( function() {
    var $options = $( ".options .demo-btn" ),
        $theObject = $( "#the-object" );

    // Function that toggles the in/out buttons
    function toggleElements( inOut ) {
        var $filtered = $( ".demo-btn" ).filter( function() {
            return $( this ).text().indexOf( inOut ) >= 0;
        } );

        $options.removeClass( "disabled" );
        $filtered.addClass( "disabled" );
    }

    // The object is hidden by default so disable the out buttons
    toggleElements( "-out" );

    // On fx button click
    $options.click( function( e ) {
        var $this = $( this ),
            $fx = $this.text();

        // If it's disabled, exit
        if ( $this.hasClass( "disabled" ) ) {
            return false;
        }

        // Prevent default behaviour of the link element
        e.preventDefault();
    } );
} );
