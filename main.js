(function() {
  // ----------
  window.App = {
    // ----------
    init: function() {
      var self = this;

      this.matchName = /^[a-zA-Z]+$/;
      this.inputs = [
        'first',
        'last'
      ];

      $('.submit').click(function() {
        self.validateFirstName();
        self.validateLastName();
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
        $status.replaceWith('<td class="error"> Please enter a ' + this.inputs[0] + ' name!</td>');
      } else if (!this.matchName.test($firstName)) {
        $status.replaceWith('<td class="error"> Please use alphabet characters!</td>');
      }
    },

    // ----------
    validateLastName: function() {
      var $lastName = $('#last-name').val();
      var $status = $('.last-name-status');

      if ($lastName.length === 0) {
        $status.replaceWith('<td class="error"> Please enter a ' + this.inputs[1] + ' name!</td>');
      } else if (!this.matchName.test($lastName)) {
        $status.replaceWith('<td class="error"> Please use alphabet characters</td>');
      }
    }   
  };

  // ----------
  $(document).ready(function() {
    App.init();
  });

})();
