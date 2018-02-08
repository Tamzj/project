require(['config'],function(){
    require(['jquery','zoom'],function(){
        jQuery(function($){
        //接收传过来的id
            $id = location.search;
            $id = $id.slice(1);

            var p = new Promise(function(resolve){

                //请求数据
                $.ajax({
                    url:'../api/goods.php',
                    dataType:'json',
                    data:{
                        id:$id
                    },
                    success:function(data){
                        console.log(data);

                        //将获取的数据写入大图
                        $html1 = `<img src="../img/${data[0].img}" width=403px height=537px /> `;
                        $('.imgbox').append($html1);

                        //将数据写入小图
                        $html2 = `<img src="../img/${data[0].img}" />
                                  <img src="../img/${data[0].img}" />
                                  <img src="../img/${data[0].img}" />
                                  <img src="../img/${data[0].img}" />
                                  <img src="../img/${data[0].img}" />
                                 `;
                        $('.smallList').append($html2);

                        //








                    }
            }).then(function(res){

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
            })













            })
           


            //添加到购物车效果
            var img = $('.imgbox img');
            var bag = $('.bag');
            $('.main_buy').on('click',function(){


            })
        })
    })
});
