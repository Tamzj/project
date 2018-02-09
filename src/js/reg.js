require(['config'],function(){
    require(['jquery'],function(){
        jQuery(function($){
            //先进行表单的非空验证
            $('#username').on('blur',function(){
                var reg = /^1[34578]\d{9}$/g;
                
                if(!reg.test($('#username').val())){
                    $('.userConfirm').html('请输入有效的手机号码！');
                }else{
                    $('.userConfirm').html('');    
                }
                
            });
            $('#vCode').on('blur',function(){
                var ret = $('.ranCode').text();console.log(ret)
                
                if($('#vCode').val() !== ret){
                    $('.vCodeConfirm').html('请输入正确的验证码！');
                }else{
                    $('.vCodeConfirm').html('');
                }
                
            });
            $('#mCode').on('blur',function(){
                var reg = /^\d{4}$/g;
                
                if(!reg.test($('#vCode').val())){
                    $('.mCodeConfirm').html('请输入正确的短信验证码！');
                }else{
                    $('.mCodeConfirm').html('');
                }
                
            });

            $('button').on('click',function(){
                $.ajax({
                    url:'../api/reg.php',
                    data:{
                        username:$('#username').val(),
                        password:$('#password').val()
                    },
                    success:function(data){
                        console.log(data);
                        if(data === 'success'){
                            location.href = '../html/login.html';
                        }else if(data === 'fail'){
                            
                        }
                    }
                })
                
            })
        })
    })
})