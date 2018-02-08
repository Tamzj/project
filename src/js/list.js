require(['config'],function(){
    require(['jquery'],function(){
        jQuery(function($){
            //ajax获取数据
            $.ajax({
                url:'../api/list.php',
                dataType:'json',
                // data:{

                // }
                success:function(data){
                    console.log(data);

                    //加载页面商品
                    $ul = $('.main_cc ul');

                    data.forEach(function(item){
                        $html = '';
                        $html += `<li data-id="${item.id}">
                                    <a href="#"><img src="../img/${item.img}" /></a>
                                    <p>
                                        <span>${item.brand}</span>
                                        <a href="#">${item.name}</a>
                                        <span>￥${item.price}</span>
                                    </p>
                                </li>`;

                        $ul.append($html);

                    })

                    //分页效果








                    //页面传参
                    //利用事件委托绑定事件
                    $('.main_cc').on('click','a',function(){
                        $id = this.closest('li').dataset.id;
                        this.href='goods.html?' + $id;
                    })



                }





            })








        })
    })
});