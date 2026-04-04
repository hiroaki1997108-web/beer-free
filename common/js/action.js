//anchorスクロール
$(function () {
  $('a[href^="#"]').click(function () {
    var speed = 400;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - 60;
    $("body,html").animate(
      {
        scrollTop: position,
      },
      speed,
      "swing",
    );
    return false;
  });
});

//よくある質問
$(function () {
  $(".qa-q").click(function () {
    $(this).next().slideToggle(300);
    $(this).toggleClass("active");
  });
});

//サイドCTA
$(function () {
  $(".close-btn").click(function () {
    $(".side-fixed").css("display", "none");
  });
});
