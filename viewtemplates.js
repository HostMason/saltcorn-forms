class DragDropBuilder {
  static div(...args) {
    return { tag: 'div', contents: args };
  }

  static script(content) {
    return { tag: 'script', contents: content };
  }

  static input(attrs) {
    return { tag: 'input', attributes: attrs };
  }
  constructor(name, configuration) {
    this.name = name;
    this.configuration = configuration;
  }

  async run(table_id, viewname, { columns }) {
    return DragDropBuilder.div(
      { id: "drag-drop-builder" },
      DragDropBuilder.input({ type: "hidden", id: "form-state", name: "form_state" }),
      DragDropBuilder.script(
        domReady(`initDragDropBuilder(${JSON.stringify({
          table_id,
          viewname,
          columns,
          allowed_fields: this.configuration.allowed_fields
        })})`)
      )
    );
  }

  configuration_workflow() {
    return {
      fields: [
        {
          name: "allowed_fields",
          label: "Allowed Fields",
          type: "String[]",
          required: true
        }
      ]
    };
  }

  get_state_fields() {
    return [{name: "form_state", type: "String"}];
  }

  display_state_form(state) {
    return DragDropBuilder.div(
      state.form_state ? JSON.parse(state.form_state).map(field => DragDropBuilder.div(field)) : "No fields added yet"
    );
  }
}

function domReady(fn) {
  return `document.addEventListener("DOMContentLoaded",function(){${fn}});`;
}

module.exports = DragDropBuilder;
