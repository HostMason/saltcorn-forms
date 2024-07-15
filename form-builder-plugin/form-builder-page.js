const Form = require("@saltcorn/data/models/form");
const Field = require("@saltcorn/data/models/field");
const Table = require("@saltcorn/data/models/table");
const View = require("@saltcorn/data/models/view");

module.exports = async (req, res) => {
  const formTemplates = await Table.findOne({ name: "FormTemplate" });
  const templates = await formTemplates.getRows({});

  const form = new Form({
    action: "/form-builder/create",
    fields: [
      new Field({
        name: "name",
        label: "Form Name",
        type: "String",
        required: true,
      }),
      new Field({
        name: "template_id",
        label: "Template",
        type: "Key",
        required: true,
        options: templates.map((t) => ({ label: t.name, value: t.id })),
      }),
    ],
  });

  return {
    above: [
      { type: "breadcrumbs", crumbs: ["Form Builder"] },
      { type: "card", title: "Create New Form", contents: form.render() },
      {
        type: "card",
        title: "Existing Forms",
        contents: await View.list("Form"),
      },
    ],
  };
};
