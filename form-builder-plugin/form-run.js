const Form = require("@saltcorn/data/models/form");
const Field = require("@saltcorn/data/models/field");
const Table = require("@saltcorn/data/models/table");
const View = require("@saltcorn/data/models/view");

module.exports = async (context) => {
  const { form_id } = context.configuration;
  const form = await Table.findOne({ name: "Form" });
  const row = await form.getRow({ id: form_id });

  if (!row) return "Form not found";

  const template = await Table.findOne({ name: "FormTemplate" });
  const templateRow = await template.getRow({ id: row.template_id });

  if (!templateRow) return "Form template not found";

  const fields = templateRow.fields.map((field) => new Field(field));
  const formInstance = new Form({
    fields,
    action: "/form-submit",
    submitLabel: "Submit",
  });

  return formInstance.render();
};
