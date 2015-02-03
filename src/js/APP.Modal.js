// ==========================================
// Open modal
// ==========================================

var APP = APP || {};
APP.Modal = {
  setUp: function() {
    this.modal();
    this.lightbox();
  },

  modal: function() {
    $(".modal").fancybox({
      maxWidth : 800,
      maxHeight : 600,
      fitToView : false,
      width : '70%',
      height : '70%',
      autoSize : false,
      closeClick : false,
      openEffect : 'elastic',
      closeEffect : 'fade'
    });
  },

  lightbox: function() {
    $(".lightbox").fancybox({
      prevEffect : 'fade',
      nextEffect : 'fade',
      closeBtn : true,
      index: 2,
      helpers : {
        title : { type : 'inside' },
        buttons : {}
      }
    });
  }
}
