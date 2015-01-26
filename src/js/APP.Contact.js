// ==========================================
// Send email if internet is ok.
// ==========================================

var APP = APP || {};
APP.Contact = {
  setUp: function(){
    this.submitForm();
  },

  submitForm: function() {
    var formdata, that, email;

    that = this;

    $('#contact-form').on('submit', function(event) {
      event.preventDefault();

      formdata = $('#contact-form').serialize();
      email = $('#contact-email').val();

      that.checkStatus(email, formdata);
    });
  },

  checkStatus: function(email, formdata) {
    var that = this;

    if ($('body').hasClass('js-offline') == false) {
      that.sendForm(formdata);
    } else {
      APP.Storage.insertLocalStorage(email, formdata);
    }
  },

  sendForm: function(formdata) {
    $.ajax({
      url: 'send.php',
      type: 'POST',
      data: formdata,

      beforeSend: function() {
        console.log('Sending...');
      },

      success: function(data) {
        console.log(data);
      },

      error: function(error) {
        console.warn(error);
      }
    });
  }
}
