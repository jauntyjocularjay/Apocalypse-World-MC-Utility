import {
    BASIC_MOVES
} from './Constants.mjs'
import {
    selector_form
} from './vjsComponents.mjs'
import {
    el
} from '../index.mjs'





const expandCard = (e) => {
    e.preventDefault()

    const card = e.srcElement.parentElement.parentElement

    card.querySelector('.body').classList.remove('hidden')
    console.log('expandCard')
}

const collapseCard = (e) => {
    e.preventDefault()

    const card = e.srcElement.parentElement.parentElement

    card.querySelector('select').classList.add('hidden')
    card.querySelector('.card').classList.add('hidden')
    console.log('collapseCard')
}

const moves_selector = () => {
    const idstr = 'basic-moves'
    const form = selector_form('Basic Moves:', idstr)
    for(const [key, value] of Object.entries(BASIC_MOVES)){
        const option = document.createElement('option')
        option.setAttribute('value', key)
        option.textContent = value.alias

        form.querySelector('select').appendChild(option)
    }

    return form
}

const moves_display = (e, value) => {
    e.preventDefault()

    if(el.basic_moves.move){
        el.basic_moves.move.remove()
    }

    if(value !== ''){
        const move_container = document.createElement('div')
        move_container.setAttribute('id', value)
        move_container.classList.add('card')

        const h2 = document.createElement('h2')
        h2.textContent = BASIC_MOVES[value].alias

        const description = document.createElement('p')
        description.textContent = BASIC_MOVES[value].description

        const outcome = document.createElement('ul')

        if(BASIC_MOVES[value].scale.success){
            const success = document.createElement('li')
            success.textContent = `On a success: ${BASIC_MOVES[value].scale.success}`
            outcome.appendChild(success)
        }

        if(BASIC_MOVES[value].scale.partial){
            const partial = document.createElement('li')
            partial.textContent = `On a partial: ${BASIC_MOVES[value].scale.partial}`
            outcome.appendChild(partial)
        }

        if(BASIC_MOVES[value].scale.miss){
            const miss = document.createElement('li')
            miss.textContent = `On a miss: ${BASIC_MOVES[value].scale.miss}`
            outcome.appendChild(miss)
        }

        move_container.appendChild(h2)
        if(BASIC_MOVES[value].roll){
            const roll = document.createElement('p')
            roll.textContent = `roll+${BASIC_MOVES[value].roll}`
            move_container.appendChild(roll)
        }
        el.basic_moves.form.querySelector('.body').appendChild(description)
        el.basic_moves.form.querySelector('.body').appendChild(outcome)

        if(BASIC_MOVES[value].opt.length > 0){
            const option_display = document.createElement('div')
            option_display.classList.add('option')
            const h3 = document.createElement('h3')
            h3.textContent = 'Options'
            option_display.appendChild(h3)

            const ul = document.createElement('ol')
            BASIC_MOVES[value].opt.forEach(option => {
                const li = document.createElement('li')
                li.textContent = option
                ul.appendChild(li)
            })

            option_display.appendChild(ul)
            move_container.appendChild(option_display)

        }

        el.basic_moves.form.appendChild(move_container)
        el.basic_moves.move = move_container
        // move_container.classList.remove('hidden')
    }
}

export {
    expandCard,
    collapseCard,
    moves_selector,
    moves_display   
}