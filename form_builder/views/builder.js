const { FIELD_TYPES, STEP_TYPES } = require('../types');
const { div, button, h3, p } = require("@saltcorn/markup/tags");

const renderFieldEditor = (field) => {
  // Implement drag-and-drop field editor
  // This is a placeholder and should be replaced with actual drag-and-drop implementation
  return div(
    { class: "field-editor", "data-field-id": field.id },
    h3(field.label),
    p(`Type: ${field.type}`)
  );
};

const renderStepEditor = (step) => {
  return div(
    { class: "step-editor" },
    h3(`Step: ${step.name}`),
    step.fields.map(renderFieldEditor)
  );
};

const renderFormBuilder = (form) => {
  return div(
    { id: "form-builder" },
    h3("Form Builder"),
    form.steps.map(renderStepEditor),
    button({ onclick: "addStep()" }, "Add Step"),
    button({ onclick: "saveForm()" }, "Save Form")
  );
};

module.exports = {
  renderFormBuilder
};
