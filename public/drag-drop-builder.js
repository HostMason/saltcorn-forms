function initDragDropBuilder(config) {
  const builder = document.getElementById('drag-drop-builder');
  const { table_id, viewname, columns, allowed_fields } = config;
  
  const fieldList = document.createElement('div');
  fieldList.className = 'field-list';
  
  const formArea = document.createElement('div');
  formArea.className = 'form-area';

  builder.appendChild(fieldList);
  builder.appendChild(formArea);

  // Create draggable elements for each allowed column
  columns.forEach(column => {
    if (allowed_fields.includes(column.name)) {
      const element = document.createElement('div');
      element.className = 'draggable-field';
      element.draggable = true;
      element.textContent = column.name;
      element.addEventListener('dragstart', drag);
      fieldList.appendChild(element);
    }
  });

  formArea.addEventListener('dragover', allowDrop);
  formArea.addEventListener('drop', drop);

  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.textContent);
  }

  function allowDrop(ev) {
    ev.preventDefault();
  }

  function drop(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");
    const droppedElement = document.createElement('div');
    droppedElement.className = 'dropped-field';
    droppedElement.draggable = true;
    droppedElement.innerHTML = `
      <span>${data}</span>
      <button class="remove-field">X</button>
    `;
    droppedElement.querySelector('.remove-field').addEventListener('click', function() {
      droppedElement.remove();
      updateFormState();
    });
    droppedElement.addEventListener('dragstart', drag);
    formArea.appendChild(droppedElement);
    updateFormState();
  }

  function updateFormState() {
    const formState = Array.from(formArea.children).map(child => child.querySelector('span').textContent);
    document.getElementById('form-state').value = JSON.stringify(formState);
  }
}
