import ReactDOM from 'react-dom'
//Importa o font awesome
import { library } from '@fortawesome/fontawesome-svg-core'
//Adiciona todas os icones relacionados, assim voce pode escrever só o nome normal do icone
import { fab } from '@fortawesome/free-brands-svg-icons'
//adiciona o icones especificos
import { faUserCircle, faLock } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faUserCircle, faLock)