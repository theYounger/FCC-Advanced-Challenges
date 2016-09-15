var Person = function(firstAndLast) {

    var firstName = arguments[0].split(' ')[0];
    var lastName = arguments[0].split(' ')[1];
    var fullName = firstName + ' ' + lastName;

    this.getFirstName = function() {
      return firstName;
    };
    this.getLastName = function() {
      return lastName;
    };
    this.getFullName = function() {
      return firstName + ' ' + lastName;
    };
    this.setFirstName = function(first) {
      firstName = first;
    };
    this.setLastName = function(last) {
      lastName = last;
    };
    this.setFullName = function(firstAndLast) {
      firstName = arguments[0].split(' ')[0];
      lastName = arguments[0].split(' ')[1];
      fullName = firstName + ' ' + lastName;
    };
};

var bob = new Person('Bob Ross');
bob.getFullName();
