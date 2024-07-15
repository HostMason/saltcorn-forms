const Field = require("@saltcorn/data/models/field");
const Table = require("@saltcorn/data/models/table");
const Form = require("@saltcorn/data/models/form");
const View = require("@saltcorn/data/models/view");

const configuration_workflow = () => ({
  steps: [
    {
      name: "Form Settings",
      fields: [
        {
          name: "form_name",
          label: "Form Name",
          type: "String",
          required: true,
        },
        {
          name: "table_name",
          label: "Table Name",
          type: "String",
          required: true,
        },
      ],
    },
  ],
});

const get_state_fields = () => [];

const run = async (table_id, viewname, config, state, extra) => {
  const table = await Table.findOne({ id: table_id });
  const fields = await Field.find({ table_id: table.id });
  
  const form = new Form({
    action: `/view/${viewname}`,
    fields,
  });

  return form.render();
};

module.exports = {
  sc_plugin_api_version: 1,
  viewtemplates: [
    {
      name: "Form Builder",
      display_state_form: false,
      get_state_fields,
      configuration_workflow,
      run,
    },
  ],
};
