// ==========================================
// Send email if internet is ok.
// ==========================================

var APP = APP || {};
APP.Contact = {
  setUp: function(){
    this.submitForm();
  },

  submitForm: function() {
    var formdata, that;

    that = this;

    $('#contact-form').on('submit', function(event) {
      event.preventDefault();

      formdata = $('#contact-form').serialize();
      that.checkStatus(formdata);
    });
  },

  checkStatus: function(formdata) {
    var that = this;

    if (navigator.onLine == true) {
      that.sendForm(formdata);
    } else {
      // APP.Storage.saveFormData();
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
