document.getElementById('generate-password').addEventListener('click', function() {
  var length = document.getElementById('password-length').value;
  var characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+{}[]|;:,.<>?';
  var password = '';

  for (var i = 0; i < length; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  document.getElementById('password').textContent = password;
});

document.getElementById('copy-password-button').addEventListener('click', function() {
  var password = document.getElementById('password').textContent;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(password);
  } else {
    var tempInput = document.createElement('input');
    tempInput.value = password;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
  }
});

document.getElementById('exit-button').addEventListener('click', function() {
  window.close();
});