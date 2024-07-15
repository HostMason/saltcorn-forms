const { div, table, tr, th, td } = require("@saltcorn/markup/tags");

const renderEntries = (entries) => {
  return div(
    { class: "form-entries" },
    table(
      { class: "table table-striped" },
      tr(
        th("ID"),
        th("Form Name"),
        th("Submission Date"),
        th("Actions")
      ),
      entries.map(entry => 
        tr(
          td(entry.id),
          td(entry.form_name),
          td(entry.created_at),
          td(
            button({ onclick: `viewEntry(${entry.id})` }, "View"),
            button({ onclick: `deleteEntry(${entry.id})` }, "Delete")
          )
        )
      )
    )
  );
};

module.exports = {
  renderEntries
};
