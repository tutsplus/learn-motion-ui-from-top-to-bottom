$( function() {
    var $options = $( ".options .demo-btn" ),
        $theObject = $( "#the-object" );

    // On fx button click
    $options.click( function( e ) {
        var $this = $( this ),
            $fx = $this.text();

        // Prevent default behaviour of the link element
        e.preventDefault();

        // Apply the animation to the object
        $theObject.removeClass().addClass( $fx );
    } );

    // On animation series button click
    $( "#animation-series" ).click( function( e ) {
        // Prevent default behaviour for the link element
        e.preventDefault();

        $( ".lesson-content" ).addClass( "is-animating" );
    } );
} );
