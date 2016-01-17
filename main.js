(function() {
  // ----------
  window.App = {
    // ----------
    init: function() {
      var self = this;

      this.matchName = /^[a-zA-Z]+$/;
      this.validCharacterErrorMessage = 'Please use alphabet characters!';
      this.inputs = ['first', 'last'];

      this.firstNameStatus = $('.first-name-status');
      this.lastNameStatus = $('.last-name-status');

      $('.submit').on('click', function() {
        self.validateFirstName();
        self.validateLastName();

        if (self.validateFirstName() && self.validateLastName()) {
          $('.success.hidden').removeClass('hidden');
          self.firstNameStatus.html('');
          self.lastNameStatus.html('');
          console.log('both true');
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
        return true;
      }
    }   
  };

  // ----------
  $(document).ready(function() {
    App.init();
  });

})();
