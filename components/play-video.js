/* global AFRAME */

/**
 * Component that listens to an event, fades out an entity, swaps the texture, and fades it
 * back in.
 */
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

      div.style = 'position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);';
      button.style = 'position: absolute; top: -40px; right: -40px; width: 40px; height: 40px; background-image: url("../assets/button_close.png"); background-size: cover; cursor: pointer; border: none;';

      video = document.getElementById('video').src += "?rel=0&autoplay=1";
    });
  }
});
