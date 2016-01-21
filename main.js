(function() {
  // ----------
  window.App = {
    // ----------
    init: function() {
      var self = this;

      this.firstName = $('#first-name');
      this.firstNameStatus = $('.first-name-status');
      this.lastName = $('#last-name');
      this.lastNameStatus = $('.last-name-status');

      this.inputs = ['first', 'last'];
      this.matchName = /^[a-zA-Z]+$/;
      this.validCharacterErrorMessage = 'Please use alphabet characters!';

      $('.submit').on('click', function() {
        if (self.validateFirstName() && self.validateLastName()) {
          $('.success.hidden').removeClass('hidden');
          self.firstNameStatus.html('');
          self.lastNameStatus.html('');
          $('div.warning').addClass('hidden');
        } else if (!self.validateFirstName() || !self.validateLastName()) {
          $('.warning.hidden').removeClass('hidden')
          self.validateFirstName();
          self.validateLastName();
        }
      });
        
      this.firstName.keyup(function(event) {
        self.validateFirstName();
      });

      this.lastName.keyup(function(event) {
        self.validateLastName();
      });

      $('#contact').submit(function(event) {
          event.preventDefault();
      });        
    },

    // ----------
    validateFirstName: function() {
      if (this.firstName.val().length === 0) {
        this.firstNameStatus.html('Please enter a ' + this.inputs[0] + ' name!').addClass('error');
      } else if (!this.matchName.test(this.firstName.val())) {
        $('.first-name-status').html(this.validCharacterErrorMessage).addClass('error');
      } else {
        this.firstNameStatus.html('');
        return true;
      }
    },

    // ----------
    validateLastName: function() {
      if (this.lastName.val().length === 0) {
        this.lastNameStatus.html('Please enter a ' + this.inputs[1] + ' name!').addClass('error');
      } else if (!this.matchName.test(this.lastName.val())) {
        $('.last-name-status').html(this.validCharacterErrorMessage).addClass('error');
      } else {
        this.lastNameStatus.html('');
        return true;
      }
    }   
  };

  // ----------
  $(document).ready(function() {
    App.init();
  });

})();
