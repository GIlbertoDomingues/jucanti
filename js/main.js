 $(document).ready(function(){
    $("#btn-perfil").click(function() {
        $('html, body').animate({
            scrollTop: $("#perfil").offset().top
        }, 1000);
    });

    $('#menu > ul li a').click(function(e) {
	    var $this = $(this);
	    $this.parent().siblings().removeClass('active').end().addClass('active');
	    e.preventDefault();
	});
});