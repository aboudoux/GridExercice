var Grid = Grid || {};

Grid.saveToLocalStorage = function (colName, visibility) {
    localStorage.setItem(colName, JSON.stringify(visibility));    
}

Grid.getFromLocalStorage = function (colName) {
    const jsonString = localStorage.getItem(colName);
    return JSON.parse(jsonString);
}