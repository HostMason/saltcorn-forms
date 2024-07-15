function initDragDropBuilder(config) {
  const builder = document.getElementById('drag-drop-builder');
  const { table_id, viewname, columns } = config;

  // Create draggable elements for each column
  columns.forEach(column => {
    const element = document.createElement('div');
    element.className = 'draggable-field';
    element.draggable = true;
    element.textContent = column.name;
    element.addEventListener('dragstart', drag);
    builder.appendChild(element);
  });

  // Create drop zones
  const dropZone = document.createElement('div');
  dropZone.className = 'drop-zone';
  dropZone.addEventListener('dragover', allowDrop);
  dropZone.addEventListener('drop', drop);
  builder.appendChild(dropZone);

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
    droppedElement.textContent = data;
    droppedElement.className = 'dropped-field';
    ev.target.appendChild(droppedElement);
  }
}
