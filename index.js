const DragDropBuilder = require("./viewtemplates");

module.exports = {
  sc_plugin_api_version: 1,
  viewtemplates: [DragDropBuilder],
  plugin_name: "hostmason-drag-drop-form-builder",
  headers: [
    {
      script: "/plugins/public/hostmason-drag-drop-form-builder/drag-drop-builder.js"
    },
    {
      css: "/plugins/public/hostmason-drag-drop-form-builder/drag-drop-builder.css"
    }
  ]
};
