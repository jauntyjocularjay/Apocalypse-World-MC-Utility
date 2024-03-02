const selector_form = (labelStr, idStr) => {
    const form = document.createElement('form')
    const label = document.createElement('label')
    const h1 = document.createElement('h1')
    const dropdown = document.createElement('select')
    const defaultOption = document.createElement('option')

    form.classList.add('form-selector')

    label.setAttribute('for', idStr)
    h1.textContent = labelStr

    dropdown.setAttribute('id', idStr)
    dropdown.setAttribute('name', idStr)

    defaultOption.setAttribute('value', '')
    defaultOption.textContent = 'Select an option'

    form.appendChild(label)
    label.appendChild(h1)
    form.appendChild(dropdown)
    dropdown.appendChild(defaultOption)

    return form
}

const wrapper = () => {
    const wrapper = document.createElement('div')
    wrapper.setAttribute('id', 'wrapper')
    return wrapper
}

export {
    selector_form,
    wrapper
}