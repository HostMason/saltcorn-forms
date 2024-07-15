const Form = require("@saltcorn/data/models/form");
const Field = require("@saltcorn/data/models/field");
const Table = require("@saltcorn/data/models/table");

module.exports = () => {
  return new Form({
    fields: [
      new Field({
        name: "form_id",
        label: "Form",
        type: "Key",
        reftable_name: "Form",
      }),
    ],
  });
};
