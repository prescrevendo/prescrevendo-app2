import { useState } from 'react'
import '../styles/TelaTema.css'

export function TelaTema({ tema }) {
  const [activeTab, setActiveTab] = useState('orientacoes')

  // Dados de exemplo - será substituído com conteúdo do PDF convertido
  const conteudo = {
    orientacoes: [
      {
        tipo: 'procedimento',
        titulo: 'Procedimento 1',
        descricao: 'Descrição do procedimento'
      },
      {
        tipo: 'alerta',
        titulo: 'Alerta 1',
        descricao: 'Descrição do alerta'
      },
    ],
    prescricao: [
      {
        tipo: 'conduta',
        titulo: 'Conduta 1',
        descricao: 'Descrição da conduta'
      },
    ]
  }

  const getTipoBadge = (tipo) => {
    const badges = {
      procedimento: { label: 'PROCEDIMENTO', className: 'badge-procedimento' },
      alerta: { label: 'ALERTA', className: 'badge-alerta' },
      conduta: { label: 'CONDUTA', className: 'badge-conduta' },
      orientacao: { label: 'ORIENTAÇÃO', className: 'badge-orientacao' },
    }
    return badges[tipo] || { label: tipo.toUpperCase(), className: 'badge-default' }
  }

  const items = activeTab === 'orientacoes' ? conteudo.orientacoes : conteudo.prescricao

  return (
    <div className="tela-tema">
      <div className="tema-tabs">
        <button
          className={`tab-button ${activeTab === 'orientacoes' ? 'active' : ''}`}
          onClick={() => setActiveTab('orientacoes')}
        >
          Orientações
        </button>
        <button
          className={`tab-button ${activeTab === 'prescricao' ? 'active' : ''}`}
          onClick={() => setActiveTab('prescricao')}
        >
          Prescrição Prática
        </button>
      </div>

      <div className="tema-content">
        {items.map((item, idx) => {
          const badge = getTipoBadge(item.tipo)
          return (
            <div key={idx} className="content-card">
              <span className={`content-badge ${badge.className}`}>
                {badge.label}
              </span>
              <h3 className="content-title">{item.titulo}</h3>
              <p className="content-description">{item.descricao}</p>
              <button className="content-expand">
                <span>›</span>
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}
