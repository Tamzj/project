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




                //添加到购物车效果
                $img = $('.imgbox img');
                $bag = $('.bag');

                $('.main_buy').on('click',function(){
                    //设置一张小图
                    $smallImg = $('<span/>');
                    $img.append($smallImg);

                    //设置加速度
                    $aSpeed = 2;
                    $ySpeed = -20;
                    $xSpeed = 8;

                    //获取小图的位置、大小
                    $left = parseFloat($smallImg.position().left);
                    $top = parseFloat($smallImg.position().top);
                    $width = parseFloat($smallImg.outerWidth()); 
                    $height = parseFloat($smallImg.outerHeight()); 


                    timer = setInterval(function(){
                        if($left>150 && $top>250){
                            $img.remove($smallImg);
                            clearInterval(timer);
                            $bag.style.backgroundColor='#fff';

                            let timer=setTimeout(function(){
                                $bag.style.backgroundColor='green';
                            },30)
                        }
                        $left += $xSpeed;
                        $top += $ySpeed;
                        $width -= 1;
                        $height -= 1;
                        $smallImg.style.left = $left+'px';
                        $smallImg.style.top = $top+'px';
                        $smallImg.style.width = $width+'px';
                        $smallImg.style.height = $height+'px';
                        ySpeed += aSpeed;
                        aSpeed+=0.5;
                    },30)
                })





                })






                
            })


            })
        })
    })
});
