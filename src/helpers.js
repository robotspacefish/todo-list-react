const addRemoveClassesLoop = (initValue, condition, conditionValue, idPrefix, className) => {
  if (condition === 'remove') {
    for (let i = initValue; i <= conditionValue; i++) {
      const el = document.getElementById(`${idPrefix}${i}`);
      el.classList.remove(className);
    }
  } else { // remove
    for (let i = initValue; i >= conditionValue; i--) {
      const el = document.getElementById(`${idPrefix}${i}`);
      el.classList.add(className);
    }
  }
};

export { addRemoveClassesLoop };