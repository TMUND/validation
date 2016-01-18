(function() {
  // ----------
  window.App = {
    // ----------
    init: function() {
      var self = this;

      $('#first-name').keyup(function(event) {
        self.validateFirstName();
      });

      $('#last-name').keyup(function(event) {
        self.validateLastName();
      });

      this.matchName = /^[a-zA-Z]+$/;
      this.validCharacterErrorMessage = 'Please use alphabet characters!';
      this.inputs = ['first', 'last'];

      this.firstNameStatus = $('.first-name-status');
      this.lastNameStatus = $('.last-name-status');

      $('.submit').on('click', function() {
        if (self.validateFirstName() && self.validateLastName()) {
          $('.success.hidden').removeClass('hidden');
          self.firstNameStatus.html('');
          self.lastNameStatus.html('');
          $('div.warning').addClass('hidden');
          console.log('both true');
        }

        if (!self.validateFirstName()) {
          $('.warning.hidden').removeClass('hidden');
        }

        if (!self.validateLastName()) {
          $('.warning.hidden').removeClass('hidden');
        }
      });

      $('#contact').submit(function(event) {
          event.preventDefault();
      });        
    },

    // ----------
    validateFirstName: function() {
      var $firstName = $('#first-name').val();
      var $status = $('.first-name-status');

      if ($firstName.length === 0) {
        $status.html('Please enter a ' + this.inputs[0] + ' name!').addClass('error');
      } else if (!this.matchName.test($firstName)) {
        $('.first-name-status').html(this.validCharacterErrorMessage).addClass('error');
      } else {
        $status.html('');
        return true;
      }
    },

    // ----------
    validateLastName: function() {
      var $lastName = $('#last-name').val();
      var $status = $('.last-name-status');

      if ($lastName.length === 0) {
        $status.html('Please enter a ' + this.inputs[1] + ' name!').addClass('error');
      } else if (!this.matchName.test($lastName)) {
        $('.last-name-status').html(this.validCharacterErrorMessage).addClass('error');
      } else {
        $status.html('');
        return true;
      }
    }   
  };

  // ----------
  $(document).ready(function() {
    App.init();
  });

})();
