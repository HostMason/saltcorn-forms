const Form = require("./form");
const FormTemplate = require("./form-template");

module.exports = {
  sc_plugin_api_version: 1,
  plugin_name: "form-builder",
  tables: [Form, FormTemplate],
  viewtemplates: [
    {
      name: "Form",
      display_state_form: false,
      get_state_fields: () => [],
      configuration_workflow: require("./form-configuration"),
      run: require("./form-run"),
    },
  ],
  types: [],
  pages: [
    {
      name: "FormBuilder",
      route: "/form-builder",
      get_page: require("./form-builder-page"),
    },
  ],
};
