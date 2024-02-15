import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatosState = {
  lista: Contato[]
}

const initialState: ContatosState = {
  lista: [
    {
      nome: 'Diretor Ebac',
      telefone: '(17) 98776-9900',
      email: 'direcaoebac@gmail.com',
      info: 'Direcao da Escola EBAC',
      id: 1
    },
    {
      nome: 'Prof Gian Souza',
      telefone: '(17) 998877-5544',
      email: 'ogiansouza@gmail.com',
      info: 'Professor do Curso Front End',
      id: 2
    },
    {
      nome: 'Julio Gomes',
      telefone: '(17) 98877-4311',
      email: 'juliogomesj09@gmail.com',
      info: 'Meu Contato',
      id: 3
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.lista = state.lista.filter(
        (contato) => contato.id !== action.payload
      )
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.lista.findIndex(
        (c) => c.id === action.payload.id
      )
      if (indexDoContato !== -1) {
        state.lista[indexDoContato] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const ultimoContato = state.lista[state.lista.length - 1]

      const contatoNovo = {
        ...action.payload,
        id: ultimoContato ? ultimoContato.id + 1 : 1
      }
      state.lista.push(contatoNovo)
    }
  }
})

export const { remover, editar, cadastrar } = contatosSlice.actions
export default contatosSlice.reducer
