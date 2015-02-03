var APP = APP || {};
APP.Instagram = {
  setUp: function() {
    this.setConfig();
  },

  setConfig: function() {
    var that, limit, size, tag, url, accessToken;

    that        = this;
    limit       = 16;
    size        = 'medium';
    tag         = 'catrina';
    accessToken = '181941196.5b9e1e6.c4df4ed6d9494b9a817be3ee7d046127';
    url         = 'https://api.instagram.com/v1/tags/' + tag + '/media/recent?access_token=' + accessToken + '';

    that.getData(limit, size, url);
  },

  getData: function(limit, size, url) {
    var that = this;

    $.ajax({
      type: "GET",
      dataType: "jsonp",
      cache: false,
      url: url,
      beforeSend: function() {
        console.log('Carregando...');
      },

      success: function(data) {
        if (data.data.length === 0) {
          alert('Não existem imagens!');
        } else {
          that.createStructure(data, limit, size);
        }
      },

      error: function(error) {
        console.warn(error);
      }
    });
  },

  createStructure: function(data, limit, size) {
      var list, li, figure, img, imgUrl, href, text, likes, figcaption;

        list = document.querySelector('#feeds-instagram ul');

        for (var i = 0; i < limit; i++) {
            imgUrl = data.data[i].images.thumbnail.url;
            href = data.data[i].link;
            text = data.data[i].caption.text;
            likes = data.data[i].likes.count;

          // create elements
          li = document.createElement('li');

          figure = document.createElement('figure');
          img = document.createElement('img');
          figcaption = document.createElement('figcaption');

          a = document.createElement('a');

          // adds classes and attributes
          li.classList.add('feeds-instagram-item');

          figure.classList.add('feeds-instagram-image');
          figcaption.classList.add('feeds-instagram-like');

          a.classList.add('feeds-instagram-link');

          // adds content
          a.setAttribute('href', href);
          a.setAttribute('title', text);
          a.setAttribute('target', '_blank');

          img.setAttribute('src', imgUrl);
          figcaption.innerHTML = likes;

          // append
          figure.appendChild(img);
          figure.appendChild(figcaption);
          a.appendChild(figure);
          li.appendChild(a);
          list.appendChild(li);
        }
  }
}
