require(['config'],function(){
    require(['jquery','zoom'],function(){
        jQuery(function($){
        //接收传过来的id
            $id = location.search;
            $id = $id.slice(1);

            var p = new Promise(function(resolve,reject){

                //请求数据
                $.ajax({
                    url:'../api/goods.php',
                    dataType:'json',
                    data:{
                        id:$id
                    },
                    success:function(data){
                        // console.log(data);


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


                //添加到购物车效果
                jQuery(function($){
                     
                    $img = $('.imgbox img');
                    $bag  = $('.bag');
                    $btn = $('.main_buy');


                    $btn.on('click',function(){

                        // 1>复制当前商品图片(目的：用于实现动画效果)
                        var $copyImg = $img.clone();

                        // 设定图片样式
                        $copyImg.css({
                            position:'absolute',
                            left:$btn.offset().left,
                            top:$btn.offset().top,
                            width:50,
                            height:50
                        });

                        // 把图片写入页面
                        $('body').append($copyImg);


                        // 动画
                        $copyImg.animate({
                            left:$bag.offset().left,
                            top:$bag.offset().top,
                            width:50
                        },function(){
                            // 动画完成后
                            // 删除复制的图片
                            $copyImg.remove();

                            
                            //写入cookie
                            var goodslist = []; 

                            //先获取cookie
                            var cookies = document.cookie;
                            cookies = cookies.split('; ');
                            cookies.forEach(function(item){
                                var arr = item.split('=');
                                if(arr[0] === 'goodslist'){
                                    goodslist = JSON.parse(arr[1]);
                                }
                            });

                            
                                // 判断当前商品是否已经存在cookie当中
                                console.log(666);
                                for(var i=0;i<goodslist.length;i++){
                                    if(goodslist[i].id === id){
                                        goodslist[i].qty++;
                                        break;
                                    }
                                }
                                if(i===goodslist.length){
                                    // 通过按钮获取商品信息
                                    var goods = {
                                        id:id,
                                        imgurl:currentLi.children[0].src,
                                        name:currentLi.children[1].innerHTML,
                                        price:currentLi.children[2].innerText,
                                        qty:1
                                    }

                                    // 添加到数组
                                    goodslist.push(goods);
                                }
                                // 写入cookie
                                document.cookie = 'goodslist='+JSON.stringify(goodslist);
                            

                             
                        })

                    });


                     
                });
            })
        })
           



        })
    })
});
