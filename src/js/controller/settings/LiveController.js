/* eslint-disable max-len */
(function () {
  var ns = $.namespace('pskl.controller.settings.live');

  ns.LiveController = function (piskelController) {
    this.piskelController = piskelController;
  };

  //pskl.utils.inherit(ns.LiveController, pskl.controller.settings.AbstractSettingController);

  /**
   * @public
   */
  ns.LiveController.prototype.init = function () {

    //this.updateDescriptorInputs_();

    this.startLiveView = document.querySelector('#start-live-view');
    this.stopLiveView = document.querySelector('#stop-live-view');


    this.safeAddEventListener_(this.startLiveView, 'click', this.startLiveViewClick);
    this.safeAddEventListener_(this.stopLiveView, 'click', this.stopLiveViewClick);

    this.addEventListener(this.saveForm, 'submit', this.onSaveFormSubmit_);

  };

  ns.LiveController.prototype.startLiveViewClick = function () {
    var cName = document.querySelector('.piskel-name').innerHTML;
    var width = this.piskelController.getWidth();
    var height = this.piskelController.getHeight();
    var frameCount = this.piskelController.getFrameCount();
    var tickrate = this.piskelController.getFPS();

    var icon = [];

    for (var i = 0; i < frameCount; i++) {
      var render = this.piskelController.renderFrameAt(i, true);
      var context = render.getContext('2d');
      var imgd = context.getImageData(0, 0, width, height);
      var pix = imgd.data;
      var frame = [];

      for (var j = 0; j < pix.length; j += 4) {
        frame.push(this.rgbTo565(pix[j], pix[j + 1], pix[j + 2]));
      }
      icon.push(frame);
    }
    console(icon);
    //awtrix_raiseEvent("save_locally", { "name": cName, "data": icon, "tick": tickrate, "width": width, "height": height });
  };
})();
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        