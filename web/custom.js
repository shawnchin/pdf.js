function hideStuff(config) {
  // dummy element used as replacement target for all the items we remove
  const dummyElement = document.createElement("div");
  dummyElement.style.display = "none";
  document.body.append(dummyElement);

  // First, replace all config items referencing elements in the right toolbar
  // to point to a dummy element.
  _hideMenuItem(config.toolbar, "openFile");
  _hideMenuItem(config.toolbar, "print");
  _hideMenuItem(config.toolbar, "download");
  _hideMenuItem(config.toolbar, "editorFreeTextButton");
  _hideMenuItem(config.toolbar, "editorInkButton");
  _hideMenuItem(config.toolbar, "editorStampButton");

  _hideMenuItem(config.secondaryToolbar, "toggleButton");

  // Once configs no longer referencing children of the toolbar, we can safely
  // delete the whole toolbar
  document.getElementById("toolbarViewerRight").remove();

  function _hideMenuItem(configParent, key) {
    if (configParent[key]) {
      configParent[key].remove();
      configParent[key] = dummyElement;
    }
  }
}

export { hideStuff };
