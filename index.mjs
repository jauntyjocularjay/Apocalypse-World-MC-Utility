import {
    selector_form,
    wrapper
} from './js/vjsComponents.mjs'
import {
    moves_selector,
    moves_display,
    expandCard,
    collapseCard
} from './js/Components.mjs'

const el = {
    wrapper: null,
    basic_moves: {
        form: null,
        move: null
    }
}

const DivWrapper = wrapper()
el.wrapper = DivWrapper

el.basic_moves.form = moves_selector()
el.wrapper.appendChild(el.basic_moves.form)
document.body.appendChild(DivWrapper)



el.basic_moves.form.querySelector('select').addEventListener('change', (e) => {
    moves_display(e, el.basic_moves.form.querySelector('select').value)
})

el.basic_moves.form.querySelector('.expand').addEventListener('click', (e) => {
    expandCard(e)
})

export {
    el
}