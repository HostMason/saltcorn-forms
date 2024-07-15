# Saltcorn Form Builder

This Saltcorn plugin allows users to create custom forms easily.

## Installation

### From npm (recommended)

1. In your Saltcorn instance, go to the "Plugins" section.
2. Click on "Add Plugin".
3. Enter the npm package name: `@saltcorn/form-builder`
4. Click "Install".

### Local Installation

To install the plugin locally for development or testing:

1. Clone this repository or download the source code.
2. Navigate to your Saltcorn installation directory.
3. Create a `plugins` directory if it doesn't exist: `mkdir plugins`
4. Copy or symlink the `form_builder` directory into the `plugins` directory:
   ```
   ln -s /path/to/form_builder /path/to/saltcorn/plugins/form_builder
   ```
   or
   ```
   cp -r /path/to/form_builder /path/to/saltcorn/plugins/
   ```
5. Restart your Saltcorn instance.
6. Go to the "Plugins" section in your Saltcorn admin panel.
7. You should see "Form Builder" listed as an available plugin. Click "Add" to activate it.

## Usage

1. Create a new view in Saltcorn.
2. Select "Form Builder" as the view type.
3. Configure the form by providing a form name and table name.
4. The form will automatically include fields from the specified table.

## Development

To work on this plugin:

1. Clone the repository
2. Run `npm install` to install dependencies
3. Make your changes
4. Test your changes in a local Saltcorn instance

## License

This project is licensed under the MIT License.
