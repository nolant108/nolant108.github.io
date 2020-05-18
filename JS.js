var request = new XMLHttpRequest();

request.open('GET', 'https://frc-api.firstinspires.org/v2.0/');

request.setRequestHeader('Accept', 'application/xml');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();