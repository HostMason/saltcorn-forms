# Hostmason Drag and Drop Form Builder for Saltcorn

This plugin provides a drag and drop form builder for Saltcorn, allowing users to easily create custom forms by dragging and dropping fields.

## Installation

1. In your Saltcorn instance, go to the "Plugins" section in the admin panel.
2. Click on "Add Plugin".
3. Enter the following URL: `https://github.com/hostmason/hostmason-drag-drop-form-builder`
4. Click "Install".

## Usage

Once installed, you can use the Drag and Drop Form Builder as follows:

1. Create a new view or edit an existing one.
2. Select "DragDropBuilder" as the view template.
3. In the configuration, specify the "Allowed Fields" that you want to be available for dragging and dropping.
4. Save the view.

When viewing or editing the form:

- You'll see a list of available fields on the left side.
- Drag fields from this list and drop them into the form area on the right.
- Arrange the fields in the desired order by dragging and dropping within the form area.
- Remove fields by clicking the "X" button next to each field.

The form state is automatically saved as you make changes.

## Displaying the Form

To display the form in your Saltcorn application:

1. Create a new page or edit an existing one.
2. Add the DragDropBuilder view you created to the page.
3. The form will be displayed with the fields you arranged using the drag and drop interface.

## Customization

You can customize the appearance of the form builder by modifying the CSS in `public/drag-drop-builder.css`.

## Support

If you encounter any issues or have questions, please open an issue on the [GitHub repository](https://github.com/hostmason/hostmason-drag-drop-form-builder/issues).

## License

This plugin is released under the MIT License. See the LICENSE file for more details.
