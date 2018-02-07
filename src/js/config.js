require.config({
    //配置虚拟路径
    paths:{
        'jquery':'../lib/jquery-3.2.1',
        'carousel':'../lib/jquery.tanCarousel/jquery.tanCarousel',
        'zoom':'../lib/jquery.gdsZoom/jquery.gdsZoom'

    },
    shim:{
        //设置依赖
        'carousel':['jquery'], 
        'zoom':['jquery']

    }
});