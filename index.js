// Arrays:

// Immutably add an item to the end of an array
export function addToEnd(array, item) {
  return [...array, item];
}

// Immutably add an item to the beginning of an array
export function addToBeginning(array, item) {
  return [item, ...array];
}

// Immutably insert an item at a specific position/index within an array
export function insertItem(array, item, index) {
  const immute = [...array.slice(0, index), item, ...array.slice(index)];
  return immute;
}

// Immutably replace an item at a specific position/index within an array
export function replaceItem(array, item, index) {
  const immute = [...array.slice(0, index), item, ...array.slice(index + 1)];
  return immute;
}

// Immutably remove an item at a specific position/index within an array
export function removeItem(array, index) {
  const immute = [...array.slice(0, index), ...array.slice(index + 1)];
  return immute;
}
//Objects:

// Immutably update the object so that the value under the "name" property becomes the new name
// For example calling:
//     updateName({ name: "Abe" }, "Barbara")
// should give back:
//     { name: "Barbara"}
export function updateName(object, newName) {
  const immute = { ...object, name: newName };
  return immute;
}

// Immutably update the object so that the value under the "needsACupOfTea" property becomes the opposite of what it was.
// Any other properties in the object should be maintained.
// For example calling:
//     toggleTeaStatus({ name: "Abe", needsACupOfTea: false })
// should give back:
//     { name: "Abe", needsACupOfTea: true }
export function toggleTeaStatus(object) {
  const immute = { ...object, needsACupOfTea: !object.needsACupOfTea };
  return immute;
}

// const list = [
//   { task: "Do washing up", completed: false },
//   { task: "Do code wars", completed: false },
//   { task: "Send post card", completed: false },
// ];
// Combo Time!!

// Immutably update the array as well as the object at the given position/index within the array, so that the value under the "completed" property becomes the opposite of what it was.
// Any other properties in the object should be maintained.
// For example calling:
//    toggleListItemCompleted([{ task: "Cooking", completed: true }, { task: "Walking", completed: false }], 1)
// should give back:
//    [{ task: "Cooking", completed: true }, { task: "Walking", completed: true }]
export function toggleListItemCompleted(array, index) {
  const object = array[index];

  const immute = [
    ...array.slice(0, index),
    { ...object, completed: !object.completed },
    ...array.slice(index + 1),
  ];

  return immute;
}
