require(['config'],function(){
    require(['jquery','carousel'],function(){
        jQuery(function($){
            $('.showbox').stop().tanCarousel({
                img:["../img/banner1.jpg","../img/banner2.jpg","../img/banner3.jpg","../img/banner4.jpg","../img/banner5.jpg","../img/banner6.jpg"],
                height:610,
                width:1200,
                type:'fade',
                button:'false'
            }),
                    console.log(666);

        })
    })
    //ajax加载数据
    require(['jquery'],function(){
        jQuery(function($){
            $.ajax({
                url:'../api/home.php', 
                dataType:'json',
                // data:{
                //     brand:'m'
                // },
                success:function(data){
                    console.log(data);
                    //获取、创建元素
                    var ul = $('.main_find ul');

                    data.forEach(function(item){
                        var html = '';
                        html += '<li><a href="#"><img src="' + item.img + '" /></a></li>';
                        ul.append(html);

                    })
                    

                }
            })
        })
    })

});