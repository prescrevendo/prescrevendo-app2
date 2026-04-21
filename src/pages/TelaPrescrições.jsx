import '../styles/TelaPrescrições.css'

export function TelaPrescrições({ onNavigate }) {
  const especialidades = [
    { 
      id: 'emergencia', 
      nome: 'Admitindo Paciente Grave', 
      icon: '🚨',
      bg: '#fde8e8'
    },
    { 
      id: 'cardiologia', 
      nome: 'Cardiologia', 
      icon: '❤️',
      bg: '#fde8e8'
    },
    { 
      id: 'endocrinologia', 
      nome: 'Endocrinologia', 
      icon: '🩺',
      bg: '#fef3e2'
    },
    { 
      id: 'gastroenterologia', 
      nome: 'Gastroenterologia / Hepatologia', 
      icon: '🫄',
      bg: '#e8f4ef'
    },
    { 
      id: 'hematologia', 
      nome: 'Hematologia', 
      icon: '🩸',
      bg: '#fde8e8'
    },
    { 
      id: 'nefrologia', 
      nome: 'Nefrologia', 
      icon: '💧',
      bg: '#e8f0fb'
    },
    { 
      id: 'neurologia', 
      nome: 'Neurologia', 
      icon: '🧠',
      bg: '#f0e8fb'
    },
    { 
      id: 'oncologia', 
      nome: 'Oncologia', 
      icon: '🎗️',
      bg: '#fde8e8'
    },
    { 
      id: 'pneumologia', 
      nome: 'Pneumologia', 
      icon: '🫁',
      bg: '#e8f4ef'
    },
    { 
      id: 'reumatologia', 
      nome: 'Reumatologia', 
      icon: '🦵',
      bg: '#fde8e8'
    },
  ]

  return (
    <div className="tela-prescricoes">
      <div className="section-label">Selecione uma especialidade</div>
      <div className="especialidades-list">
        {especialidades.map(esp => (
          <button
            key={esp.id}
            className="especialidade-card"
            onClick={() => onNavigate('especialidade', esp)}
          >
            <div className="esp-icon" style={{ backgroundColor: esp.bg }}>
              {esp.icon}
            </div>
            <span className="esp-name">{esp.nome}</span>
            <span className="esp-arrow">›</span>
          </button>
        ))}
      </div>
    </div>
  )
}
