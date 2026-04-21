import '../styles/TelaHome.css'

export function TelaHome({ onNavigate }) {
  const menuItems = [
    { id: 'prescricoes', label: 'Prescrições', icon: '📋' },
    { id: 'bulas', label: 'Bulas', icon: '💊' },
    { id: 'calculadoras', label: 'Calculadoras', icon: '🧮', comingSoon: true },
    { id: 'escores', label: 'Escores / Escalas', icon: '📊', comingSoon: true },
    { id: 'pediatria', label: 'Pediatria', icon: '👶', comingSoon: true },
  ]

  return (
    <div className="tela-home">
      <div className="search-container">
        <div className="search-box">
          <span className="search-icon">🔍</span>
          <input 
            type="text" 
            placeholder="Buscar medicamento..."
            className="search-input"
          />
        </div>
      </div>

      <div className="menu-grid">
        {menuItems.map(item => (
          <button
            key={item.id}
            className={`menu-card ${item.comingSoon ? 'coming-soon' : ''}`}
            onClick={() => !item.comingSoon && onNavigate(item.id)}
            disabled={item.comingSoon}
          >
            <span className="card-icon">{item.icon}</span>
            <span className="card-label">{item.label}</span>
            {item.comingSoon && <span className="coming-soon-badge">Em breve</span>}
          </button>
        ))}
      </div>
    </div>
  )
}
