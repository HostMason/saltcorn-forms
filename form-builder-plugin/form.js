const { contract, is } = require("contractis");
const { text, int, json } = require("@saltcorn/data/plugin-helper");

module.exports = {
  name: "Form",
  fields: [
    { name: "name", label: "Name", type: text },
    { name: "template_id", label: "Template", type: int },
    { name: "settings", label: "Settings", type: json },
  ],
  min_role_read: 10,
  min_role_write: 1,
};
