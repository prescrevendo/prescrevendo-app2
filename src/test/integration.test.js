import { describe, it, expect } from 'vitest'
import { ENDOCRINOLOGIA_TEMAS } from '../modules/endocrinologia/index.js'
import { GASTROENTEROLOGIA_TEMAS } from '../modules/gastroenterologia/index.js'

describe('Medical Data Integration', () => {
  it('deve ter dados de endocrinologia', () => {
    expect(ENDOCRINOLOGIA_TEMAS.length).toBeGreaterThan(0)
  })

  it('deve ter dados de gastroenterologia', () => {
    expect(GASTROENTEROLOGIA_TEMAS.length).toBeGreaterThan(0)
  })

  it('todos os temas devem ter estrutura válida', () => {
    const allTemas = [...ENDOCRINOLOGIA_TEMAS, ...GASTROENTEROLOGIA_TEMAS]
    allTemas.forEach(tema => {
      expect(tema.id).toBeDefined()
      expect(tema.nome).toBeDefined()
      expect(tema.orientacoes).toBeDefined()
      expect(tema.prescricao).toBeDefined()
    })
  })
})
