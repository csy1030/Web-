function $(tag,index){
    var elems = document.getElementsByTagName(tag)

    if(index){
        return elems[index]
    }else{//index = 0 或者 undefined时
        return elems[0]
    }
}
    
