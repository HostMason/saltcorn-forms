const { input, text } = require("@saltcorn/data/utils/tags");
const DragDropBuilder = require("./viewtemplates");

module.exports = {
  sc_plugin_api_version: 1,
  viewtemplates: [DragDropBuilder],
  types: [
    {
      name: "DragDropForm",
      sql_name: "text",
      fieldviews: {
        show: { isEdit: false, run: text },
        edit: {
          isEdit: true,
          run: (nm, v, attrs, cls) =>
            input({
              type: "text",
              class: ["form-control", cls],
              name: nm,
              id: `input${nm}`,
              value: v,
              ...attrs
            })
        }
      }
    }
  ],
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
