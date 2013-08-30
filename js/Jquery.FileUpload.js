// ainput_file js效果的实现
$.fn.optFileUpload = function(options){
	
	var _this = $(this);
	var tempw = "<span class='abtn ainput_file'></span>";
	var tempb = "<em>+</em><span>添加图片</span>"
	var tempa = "<span class='filename'>未选择文件</span>";

	function getFileName(sPath){
        if(sPath){
            var aPath = sPath.split('\\');
            var sFileName = aPath[aPath.length-1];
            if(sFileName!=''){
                return sFileName;
            }
        }
        return false;
    }
    
    function setWrap(){
    	_this.wrap(tempw);
    	_this.before(tempb);
    }

    function setTip(){
    	setWrap();
    	_this.parent('.ainput_file').after(tempa);
    }

    function opt(){
    	setTip();
    	_this.bind('change',function(){
    		var sPath = $(this).val();
    		var sTip = '请重新选择';
            if(getFileName(sPath)){
                sTip = getFileName(sPath)
            }
            var domFileName = $(this).parent('.ainput_file').next('.filename');
            domFileName.html(sTip);
            domFileName.attr('title',sTip);
    	});
    }
    opt();
}