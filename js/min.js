$('button').click(function() {

    let w = $('input').eq(0).val();
    let h = $('input').eq(1).val();
    let bg = $('input').eq(2).val();
    $('div').css({
        "width": w,
        "hight": h,
        "background": bg,
    });
});