document.getElementById('dn').addEventListener('submit', function(e) {
  e.preventDefault();

  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Replace these with your actual username and password
  var correctUsername = 'admin';
  var correctPassword = 'password';

  if (username === correctUsername && password === correctPassword) {
    // Login successful
    document.getElementById('login-link').textContent = 'Đăng Xuất';
    document.getElementById('login-modal').style.display = 'none';
  } else {
    // Login failed
    alert('Tên đăng nhập hoặc mật khẩu không đúng');
  }
});
  
document.getElementById('login-link').addEventListener('click', function(e) {
  e.preventDefault();
  document.getElementById('login-modal').style.display = 'block';
});

document.getElementById('login-modal').addEventListener('click', function(e) {
  // Check if the click is outside the form
  if(e.target == this) {
    this.style.display = 'none';
  }
});
  
  
          document.getElementById('show-password').addEventListener('change', function(event) {
          var passwordField = document.getElementById('password');
            if (event.target.checked) {
              passwordField.type = 'text';
            } else {
              passwordField.type = 'password';
            }
          });




          document.getElementById('login-form').addEventListener('submit', function(event) {
            event.preventDefault();
          
            var username = document.getElementById('username').value;
            var password = document.getElementById('password').value;
          
            if (username === 'phamnhuquoctrieu' && password === 'Phamnhuquocbin37@') {
              document.getElementById('login-btn').value = 'Đăng xuất';
            } else {
              alert('Tên đăng nhập hoặc mật khẩu không đúng');
            }
          });


      
       
      
      
          document.getElementById('login-link').addEventListener('click', function() {
            var loginLink = document.getElementById('login-link');
            
            if (loginLink.textContent === 'Đăng Xuất') {
              // User is logging out
              loginLink.textContent = 'Đăng Nhập';
              document.getElementById('login-modal').style.display = 'block';
            } else {
              // User is logging in
              document.getElementById('login-modal').style.display = 'none';
            }
          });
          var isLoggedIn = false;

document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();

  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  if (username === 'phamnhuquoctrieu' && password === 'Phamnhuquocbin37@') {
    isLoggedIn = true;
    document.getElementById('login-btn').value = 'Đăng xuất';
  } else {
    alert('Tên đăng nhập hoặc mật khẩu không đúng');
  }
});

document.getElementById('jeest-form').addEventListener('submit', function(event) {
  if (!isLoggedIn) {
    event.preventDefault();
    alert('Bạn cần đăng nhập để điền vào form này');
  }
});