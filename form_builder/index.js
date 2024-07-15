const Field = require("@saltcorn/data/models/field");
const Table = require("@saltcorn/data/models/table");
const Form = require("@saltcorn/data/models/form");
const View = require("@saltcorn/data/models/view");
const Workflow = require("@saltcorn/data/models/workflow");
const { text, div, button } = require("@saltcorn/markup/tags");
const { getState } = require("@saltcorn/data/db/state");
const db = require("@saltcorn/data/db");

const configuration_workflow = () =>
  new Workflow({
    steps: [
      {
        name: "Form Settings",
        form: async (context) => ({
          fields: [
            {
              name: "form_name",
              label: "Form Name",
              type: "String",
              required: true,
            },
            {
              name: "description",
              label: "Description",
              type: "String",
              fieldview: "textarea",
            },
            {
              name: "success_message",
              label: "Success Message",
              type: "String",
            },
            {
              name: "submitLabel",
              label: "Submit Button Label",
              type: "String",
            },
          ],
        }),
      },
      {
        name: "Fields",
        form: async (context) => ({
          fields: [
            {
              name: "fields",
              label: "Form Fields",
              type: "JSON",
              fieldview: "edit_fields",
            },
          ],
        }),
      },
    ],
  });

const get_state_fields = () => [];

const run = async (table_id, viewname, config, state, extra) => {
  const { fields, form_name, description, success_message, submitLabel } = config;
  
  const form = new Form({
    action: `/view/${viewname}`,
    fields: fields.map((f) => new Field(f)),
    submitLabel: submitLabel || "Submit",
  });

  if (extra?.isPost) {
    const result = await form.validate(state);
    if (result.success) {
      await save_submission(result.success, form_name);
      return div(text(success_message || "Form submitted successfully"));
    } else {
      form.errors = result.errors;
    }
  }

  return div(
    { class: "form-builder-wrapper" },
    h3(form_name),
    description && p(description),
    form.render()
  );
};

const save_submission = async (data, form_name) => {
  const table = await Table.findOne({ name: "form_submissions" });
  if (!table) {
    // Create table if it doesn't exist
    await Table.create("form_submissions");
    await Field.create({
      table: "form_submissions",
      name: "form_name",
      label: "Form Name",
      type: "String",
    });
    await Field.create({
      table: "form_submissions",
      name: "submitted_data",
      label: "Submitted Data",
      type: "JSON",
    });
  }
  await db.insert("form_submissions", {
    form_name,
    submitted_data: data,
  });
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
