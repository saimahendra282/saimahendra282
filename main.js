  window.onload = function() {
    // Birthday date in YYYY-MM-DD format
    var birthday = new Date('1992-01-01');
    var age = calculateAge(birthday);
    document.getElementById('age').innerText = age;
  };

  function calculateAge(birthday) {
    var today = new Date();
    var age = today.getFullYear() - birthday.getFullYear();
    var m = today.getMonth() - birthday.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
      age--;
    }
    return age;
  }
