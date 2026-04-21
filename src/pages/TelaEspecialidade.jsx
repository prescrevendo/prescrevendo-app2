import { ENDOCRINOLOGIA_TEMAS } from '../modules/endocrinologia/dados'
import { GASTROENTEROLOGIA_TEMAS } from '../modules/gastroenterologia/dados'
import '../styles/TelaEspecialidade.css'

// Mapa de temas por especialidade
const TEMAS_ESPECIALIDADES = {
  endocrinologia: ENDOCRINOLOGIA_TEMAS,
  gastroenterologia: GASTROENTEROLOGIA_TEMAS
}

export function TelaEspecialidade({ especialidade, onNavigate }) {
  // Pega temas da especialidade ou usa exemplo padrão
  const temas = TEMAS_ESPECIALIDADES[especialidade.id] || [
    { id: 1, nome: 'Tema 1' },
    { id: 2, nome: 'Tema 2' },
    { id: 3, nome: 'Tema 3' },
  ]

  return (
    <div className="tela-especialidade">
      <div className="section-label">Selecione um tema</div>
      <div className="temas-list">
        {temas.map((tema, index) => (
          <button
            key={tema.id || index}
            className="tema-card"
            onClick={() => onNavigate('tema', especialidade, tema)}
          >
            <span className="tema-name">{tema.nome}</span>
            <span className="tema-arrow">›</span>
          </button>
        ))}
      </div>
    </div>
  )
}
