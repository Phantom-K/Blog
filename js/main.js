  $(document).ready(function(){ 
    $nav=$('.nav');
    $toggleCollapse =$('.toggle-collapse');
    /* click on the bar menu */
    $toggleCollapse.click(function(){
        $nav.toggleclass('collapse');

    })

  });