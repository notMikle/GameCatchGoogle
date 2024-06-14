import {getGridSize} from "../../../core/state.js";
import {CellComponent} from "./Cell/Cell.component.js";

export function GridComponents() {
    const element = document.createElement('table')
    element.classList.add('grid')
    render(element)
    return {element}
}

async function render(element) {
    const gridSize = await getGridSize()
    for (let y = 0; y<gridSize.rows; y++) {
        const rowElements = document.createElement('tr')
        for (let x = 0; x<gridSize.columns; x++) {
            const cellComponent = CellComponent(x, y);
            rowElements.append(cellComponent.element)
        }
        element.append(rowElements)
    }
}