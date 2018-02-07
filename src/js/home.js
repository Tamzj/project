require(['config'],function(){
    require(['jquery','carousel'],function(){
        jQuery(function($){
            $('.showbox').stop().tanCarousel({
                img:["../img/banner1.jpg","../img/banner2.jpg","../img/banner3.jpg","../img/banner4.jpg","../img/banner5.jpg","../img/banner6.jpg"],
                height:610,
                width:1200,
                type:'fade',
                button:'false'
            })

            

            

            




        })
    })
});