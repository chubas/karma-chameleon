$(function() {
    var editor = $('#editor');
    var base = $('.base');
    var baseColor = new Chameleon.Color($.trim(base.text()));
    base.css('background-color', baseColor.toHTML());
    $('.zone').not('.base').each(function(){
        var zone = $(this);
        var params =
                _(zone.find('.parameter'))
                        .chain()
                        .map(function(e) {
                            return parseInt($(e).text(), 10);
                        })
                        .compact()
                        .value();
        var color = baseColor[zone.find('.rule').text()].apply(
                    baseColor, params
                );
        zone.css('background-color', color.toHTML());
    });
});