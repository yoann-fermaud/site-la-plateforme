jQuery( document ).ready( function( $ ) {

    if ( $( '.dae-shortcode-register-form' ).find( '.dae-shortcode-register-category-interests-wrap' ).length > 0 ) {

        var checkbox_Dae = $( '.dae-shortcode-register-form' ).find( 'input[name="optional_checkbox"]' ).length > 0 ? 'optional_checkbox' : 'required_checkbox';

        $( 'body' ).on( 'click', '.dae-shortcode-download-button', function() {

            var categoryInterestsWrap = $( this ).parent().find( '.dae-shortcode-register-category-interests-wrap' );

            if ( checkbox_Dae !== categoryInterestsWrap.prev().find( 'input' ).attr( 'name' ) ) {

                $( this ).parent().find( 'input[name="' + checkbox_Dae + '"]' ).parent().after( categoryInterestsWrap.clone() );
                categoryInterestsWrap.remove();

            }
            
        } );

        $( 'body' ).on( 'click', '.dae-shortcode-register-form input[name="' + checkbox_Dae + '"]', function() {
            $( this ).parent().parent().find( '.dae-shortcode-register-category-interests-wrap' ).slideToggle( 250 );
        } );

    }

} );