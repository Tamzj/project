require(['config'],function(){
    require(['jquery','zoom'],function(){
        jQuery(function($){
        //接收传过来的数据
            var params = location.search;

            console.log(decodeURI(params));
            





 







            //放大镜效果

            jQuery(function($){
                $('.imgbox').gdsZoom({
                    position:'right'
                });

                $('.smallList').on('click','img',function(){
                    $('.imgbox img').attr({
                        src:this.src,
                        'data-big':this.dataset.big || this.src
                    })
                })
            });


            //添加到购物车效果
            







        })
    })
});
