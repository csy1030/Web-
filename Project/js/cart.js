$(document).ready(function (){ 

    // 将checkItem 设为false
    $(".checkItem").prop("isChecked",false)
    $(".gprice>h3").css("text-decoration", "line-through darkred")
    $(".gsum>h3").css("text-decoration", "line-through darkred")
    
    // 商品数量累计 + 金额统计


    function count_oper(){
        var total_num = 0
        var total_sum = 0
        $(".item").each(
        function () {   
            var sum = $(this).children(".gprice").children("h3").html() * $(this).children(".gcount").children("input").val()      
            $(this).children(".gsum").children("h3").html(sum )
            total_num += Number($(this).children(".check").children(".checkItem").prop("isChecked") * $(this).children(".gcount").children("input").val() )
            // console.log($(this).children(".check").children(".iteeck").prop("isChecked"));
            total_sum += Number($(this).children(".check").children(".checkItem").prop("isChecked") * sum)
            
            console.log(total_num,total_sum);
            $(".total-num").html(total_num)
            $(".total-price").html(total_sum)
        }
    
    )
    }
    
    count_oper()
    


    var input_box =  $(".minus").next()
    for(var i = 0; i < 4;i++ ){

        if ($(input_box[i]).val() <= 1){
            $(input_box[i]).prev().css("background", "white")
            .css("href","javascript:return false")
            
        }
    }

    // 数量减按钮
    $(".minus").click(function (e) { 
        e.preventDefault();
        var count = $(this).next().val()

        if(count > 1){
            count --
            $(this).next().val(count);  
        }
        if(count == 1){
            $(this).css("background", "white")
            .css("href","javascript:return false")
        }
        // 商品数量累计 + 金额统计
        for(var i in $(".item")){
            $(this).children(".gsum").children("h3").html($(".item").children(".gprice").children("h3").html() * $(this).children(".gcount").children("input").val() )
        }
        
        count_oper()
    });

    // 数量加按钮
    $(".add").click(function (e) { 
        e.preventDefault();
        var count = $(this).prev().val()
        count ++
        $(this).prev().val(count)

        if (count > 1){
            $(this).prev().prev().css("background","#e8e8e8")

        }
        // 商品数量累计 + 金额统计
        for(var i in $(".item")){
            $(this).children(".gsum").children("h3").html($(".item").children(".gprice").children("h3").html() * $(this).children(".gcount").children("input").val() )
        }
        count_oper()    
    });



    // checkbox 点击操作
    $(".checkItem").click(function(){
        
        var isChecked = $(this).prop("isChecked")
        // console.log("item点击前",isChecked);
        if(isChecked){
            $(this).prop('src','../images/ios7_btn_no.png').prop("isChecked",false)
            // console.log($($(this).siblings(".gsum>h3")).css("text-decoration"))
            $(this).parent().siblings(".gprice").children("h3").css("text-decoration", "line-through darkred")
            $(this).parent().siblings(".gsum").children("h3").css("text-decoration", "line-through darkred")
            // console.log($(this).parent().siblings(".gprice").children("h3").css("text-decoration"));
        }
        if(!isChecked){
            $(this).prop('src','../images/ios7_btn_yes.png').prop("isChecked",true)
            $(this).parent().siblings(".gprice").children("h3").css("text-decoration", "none")
            $(this).parent().siblings(".gsum").children("h3").css("text-decoration", "none")
            // console.log($(this).parent().siblings(".gprice").children("h3").css("text-decoration"));
        }
        
        $(this).prop("isChecked",!isChecked)
        // 判断是否全选
        var index = 0
        for(var i = 0; i < $(".checkItem").length;i ++){
            if($($(".checkItem")[i]).prop("isChecked")){
                index ++
            }
        }
        if (index == $(".checkItem").length){
            $(".checkAll").prop('src','../images/ios7_btn_yes.png').prop('isChecked',true)
            
            
        }
        else{
            $(".checkAll").prop('src','../images/ios7_btn_no.png').prop('isChecked',false)
            
            
        }
        // console.log("item点击后",$(".checkItem").prop("isChecked"));
        count_oper()
    })
    
    // 全选按钮
    $(".checkAll").click(function (e) { 
        e.preventDefault();
        var isChecked = $(this).prop("isChecked")
        $(this).prop("isChecked",!isChecked)
        if(isChecked){
            // 取消全选
            $(this).prop("src",'../images/ios7_btn_no.png')
            $('.checkItem').prop("isChecked",false)
            .prop("src",'../images/ios7_btn_no.png')
            $(".gprice").children("h3").css("text-decoration", "line-through darkred")
            $(".gsum").children("h3").css("text-decoration", "line-through darkred")
        }
        else{
            // 全选
            $(this).prop("src",'../images/ios7_btn_yes.png')
            $('.checkItem').prop("isChecked",true)
            .prop("src",'../images/ios7_btn_yes.png')
            $(".gprice").children("h3").css("text-decoration", "none")
            $(".gsum").children("h3").css("text-decoration", "none")
        }
        // console.log("全选",$(".checkAll").prop("isChecked"));

        count_oper()
    });

    // 移除按钮
    $(".item .action").click(function () { 
        // 移除整个商品记录
        $(this).parents(".item").remove()
        count_oper()
     })















});
