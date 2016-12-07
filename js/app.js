$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});

$('.level').animateCss('pulse');

/*$("#fotito").

$(".sobreMiPd")
[]
$(".sobremiPd")
[div.row.sobremiPd]
$(".sobremiPd").height()
430
$(".miFoto).height($(".sobremiPd").height()*0.9)
VM1870:1 Uncaught SyntaxError: Invalid or unexpected token
$(".miFoto).height($(".sobremiPd").height()*0.9);
VM1871:1 Uncaught SyntaxError: Invalid or unexpected token
$(".miFoto").height($(".sobremiPd").height()*0.9);
[div.col-xs-12.col-sm-12.col-md-4.foto.miFoto]
$(".miFoto").width($(".sobremiPd").height()*0.9*0.65);
[div.col-xs-12.col-sm-12.col-md-4.foto.miFoto]
$(".miFoto").css("padding",$(".sobremiPd").height()*0.9*0.175);
[div.col-xs-12.col-sm-12.col-md-4.foto.miFoto]
$(".sobremiPd").css("padding", 5%);
VM1900:1 Uncaught SyntaxError: Unexpected token )
$(".sobremiPd").css("padding", 5%);
VM1901:1 Uncaught SyntaxError: Unexpected token )
$(".sobremiPd").css("padding", "5%");
[div.row.sobremiPd]
$(".sobremiPd").css("padding-left", "15%");
[div.row.sobremiPd]
$(".sobremiPd").css("padding-left", "10%");
[div.row.sobremiPd]*/