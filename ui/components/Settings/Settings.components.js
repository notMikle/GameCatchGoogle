export function SettingComponents(){
    const element = document.createElement('div')
    render(element)
    return {element}
}
async function render (element){
    element.append(`тут будут настройки игры`)
}