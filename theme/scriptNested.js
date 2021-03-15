var right;
var left
window.methods = {
  

    render: function renderDragDrop() {
        //console.log("console log");
        $('.dd').nestable({ maxDepth: 1 });
        
    },
   
    onChange: function () {
        
        $('.dd').on('change', function () {
            left = JSON.stringify($('#nestable').nestable('serialize'));
            right = JSON.stringify($('#nestable2').nestable('serialize'));
            //console.log("change left -->" + left);
            //console.log("change right -->" + right);
            
            
        });
        
    },

    applyRight: function () {
        //console.log("from applt");
        return right;
    },
    applyLeft: function () {
       // console.log("from Apply left");
        return left;
    },
}






