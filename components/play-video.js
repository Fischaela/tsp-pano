/* global AFRAME */

AFRAME.registerComponent('play-video', {
  schema: {
    on: {type: 'string'},
    video: {type: 'string'}
  },

  init: function () {
    var el = this.el;
    var data = this.data;
    var url = '<iframe width="560" height="315" src="' + data.video + '" frameborder="0" gesture="media" allow="encrypted-media" id="video" allowfullscreen></iframe>';
    var video;


    el.addEventListener(data.on, function () {
      var div = document.createElement('div');
      var button = document.createElement('button');

      document.body.appendChild(div).innerHTML = url;
      div.appendChild(button);

      div.classList.add('video');
      button.classList.add('button', 'button--close');

      button.addEventListener('click', function() {
        document.body.removeChild(div);
      });

      video = document.getElementById('video').src += "?rel=0&autoplay=1";
    });
  }
});
