// console.log('My name is khan')


// function myfunction(){
//     document.querySelector('section').style.backgroundColor='black'
// }

// myfunction()


// const divElement = document.createElement('div')

// divElement.className='black'

// divElement.setAttribute('id', 'redDiv')
// divElement.setAttribute('title', 'create')

// const container = document.querySelector('.container')
// const div = container.querySelector('div')

// container.insertBefore(divElement, div )

const pElement = document.createElement('p')

pElement.className = 'paragraph'

pElement.setAttribute('id', 'red' )
pElement.setAttribute('title', 'paragraph')

const container = document.querySelector('.container')

// const a =container.appendChild(pElement);
const b = container.append(pElement);

console.log(b)