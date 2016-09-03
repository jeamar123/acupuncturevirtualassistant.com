$( document ).ready( function() {

    /*------------------------------*/
    /*----------Main Slider---------*/ 
    /*------------------------------*/
    $( "#main-slider" ).owlCarousel( {
        navigation : true,
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem : true,
        autoPlay : true
    } );

    /*------------------------------*/
    /*----------plugins-------------*/ 
    /*------------------------------*/
    transformicons.add('.tcon');
    new WOW().init();

} );