$( function() {
    var $options = $( ".options .demo-btn" ),
        $theObject = $( "#the-object" );

    // On fx button click
    $options.click( function( e ) {
        var $this = $( this ),
            $fx = $this.text();

        // Prevent default behaviour of the link element
        e.preventDefault();
    } );
} );
