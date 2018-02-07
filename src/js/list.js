require(['config'],function(){
    require(['jquery'],function(){
        jQuery(function($){
            //模拟一份数据
            var goods = {
                name:'阿联酋美女',
                age:18,
                price:'20W',
                imgurl:'img/g1.jpg'
            }
            //把对象拼接成字符串
            var params = '';
            for(var attr in goods){
                params += attr + '=' + goods[attr] +'&';
            }
            
            params = params.slice(0,-1);

            //利用事件委托绑定事件
            $('.main_cc').on('click','a',function(){
                this.href='goods.html?' + params;
            })

        })
    })
});