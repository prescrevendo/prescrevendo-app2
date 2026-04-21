import './BottomNav.css'

export function BottomNav({ currentPage, onNavigate }) {
  const navItems = [
    { id: 'home', label: 'Início', icon: '🏠' },
    { id: 'prescricoes', label: 'Prescrições', icon: '📋' },
    { id: 'bulas', label: 'Bulas', icon: '💊' },
    { id: 'configuracoes', label: 'Configurações', icon: '⚙️' }
  ]

  return (
    <div className="bottom-nav">
      {navItems.map(item => (
        <button
          key={item.id}
          className={`nav-button ${currentPage === item.id || (currentPage === 'especialidade' && item.id === 'prescricoes') || (currentPage === 'tema' && item.id === 'prescricoes') ? 'active' : ''}`}
          onClick={() => onNavigate(item.id)}
        >
          <span className="nav-icon">{item.icon}</span>
          <span className="nav-label">{item.label}</span>
        </button>
      ))}
    </div>
  )
}
