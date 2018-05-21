$(document).ready(function() {
  $(".selectMenuSlickMainDivRepeat").slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4
  });
  $(".selectMenuSlickMainDivAnswer").slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4
  });
  $(".selectMenuSlickMainDivOptionList").slick({
    infinite: false,
    vertical:true,
    repeat:false,
    slidesToShow: 5,
    slidesToScroll: 1
  });
  $(".selectMenuSlickMainDivOptionFillList").slick({
    infinite: false,
    vertical:true,
    repeat:false,
    slidesToShow: 4,
    slidesToScroll: 1
  });
  $(".selectMenuSlickTopicDay").slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4
  });
  $(".selectMenuSlickLearningList").slick({
    infinite: false,
    vertical:true,
    slidesToShow: 3,
    slidesToScroll: 1
  });
});
