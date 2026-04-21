import '../styles/TelaEspecialidade.css'

export function TelaEspecialidade({ especialidade, onNavigate }) {
  // Temas de exemplo - depois será dinâmico com dados dos PDFs
  const temas = [
    { id: 1, nome: 'Tema 1' },
    { id: 2, nome: 'Tema 2' },
    { id: 3, nome: 'Tema 3' },
  ]

  return (
    <div className="tela-especialidade">
      <div className="section-label">Selecione um tema</div>
      <div className="temas-list">
        {temas.map(tema => (
          <button
            key={tema.id}
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
