const Field = require("@saltcorn/data/models/field");
const Form = require("@saltcorn/data/models/form");
const { div, script } = require("@saltcorn/markup/tags");

class DragDropBuilder {
  constructor(name, configuration) {
    this.name = name;
    this.configuration = configuration;
  }

  async run(table_id, viewname, { columns }) {
    return div(
      { id: "drag-drop-builder" },
      script(
        domReady(`initDragDropBuilder(${JSON.stringify({
          table_id,
          viewname,
          columns
        })})`)
      )
    );
  }

  configuration_workflow() {
    return new Form({
      fields: [
        new Field({
          name: "allowed_fields",
          label: "Allowed Fields",
          type: "String",
          required: true
        })
      ]
    });
  }

  get_state_fields() {
    return [];
  }
}

module.exports = {
  name: "DragDropBuilder",
  description: "Drag and drop form builder",
  viewtemplateClass: DragDropBuilder
};

function domReady(fn) {
  return `document.addEventListener("DOMContentLoaded",function(){${fn}});`;
}
