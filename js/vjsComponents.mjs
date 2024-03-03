const wrapper = () => {
    const wrapper = document.createElement('div')
    wrapper.setAttribute('id', 'wrapper')
    return wrapper
}

const toggleDiv = () => {
    const div = document.createElement('div')
    const expand = expandDiv()
    div.classList.add('toggle')
    div.appendChild(expand)
    return div
}

const expandDiv = () => {
    const div = document.createElement('div')
    div.classList.add('card', 'expand')
    div.textContent = '+'
    return div
}

const collapseDiv = () => {
    const div = document.createElement('div')
    div.classList.add('card', 'collapse', 'hidden')
    div.textContent = '-'
    return div
}

const selector_form = (labelStr, idStr) => {
    const form = document.createElement('form')
    const toggle = toggleDiv()
    const label = document.createElement('label')
    const h1 = document.createElement('h1')
    const body = document.createElement('div')
    const dropdown = document.createElement('select')
    const defaultOption = document.createElement('option')

    form.classList.add('form-selector')

    label.setAttribute('for', idStr)
    h1.textContent = labelStr

    body.classList.add('body', 'hidden')

    dropdown.setAttribute('id', idStr)
    dropdown.setAttribute('name', idStr)

    defaultOption.setAttribute('value', '')
    defaultOption.textContent = 'Select an option'

    form.appendChild(toggle)
    form.appendChild(label)
    label.appendChild(h1)
    form.appendChild(body)
    body.appendChild(dropdown)
    dropdown.appendChild(defaultOption)

    return form
}

export {
    wrapper,
    selector_form,
}