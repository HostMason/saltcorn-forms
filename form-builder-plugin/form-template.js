const { contract, is } = require("contractis");
const { text, json } = require("@saltcorn/data/plugin-helper");

module.exports = {
  name: "FormTemplate",
  fields: [
    { name: "name", label: "Name", type: text },
    { name: "description", label: "Description", type: text },
    { name: "fields", label: "Fields", type: json },
  ],
  min_role_read: 10,
  min_role_write: 1,
};
