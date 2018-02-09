require(['config'],function(){
    require(['jquery'],function(){
        jQuery(function($){
            //点击按钮时
            $('button').on('click',function(){
                //发起数据请求
                $.ajax({
                    url:'../api/login.php',
                    data:{
                        username:$('#username').val(),
                        password:$('#password').val()
                    },
                    success:function(data){
                            console.log(data);
                        if(data === 'success'){
                            location.href = '../index.html';
                        }else if(data === 'fail'){
                            $('.confirm').html('!用户名或密码错误'); 
                        


                            
                        }
                    }
                })
            })







        })
    })
})