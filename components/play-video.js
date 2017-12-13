/* global AFRAME */

/**
 * Component that listens to an event, fades out an entity, swaps the texture, and fades it
 * back in.
 */
AFRAME.registerComponent('play-video', {
  schema: {
    on: {type: 'string'},
  },

  init: function () {
    var el = this.el;
    var data = this.data;
    var url = '<iframe width="560" height="315" src="https://www.youtube.com/embed/VFkCGz28QQ8" frameborder="0" gesture="media" allow="encrypted-media" id="video" allowfullscreen></iframe>';
    var video;


    el.addEventListener(data.on, function () {
      var div = document.createElement('div');
      document.body.appendChild(div).innerHTML = url;
      div.style = 'position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);';

      video = document.getElementById('video').src += "?rel=0&autoplay=1";
    });
  }
});
