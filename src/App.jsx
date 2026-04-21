import { useState } from 'react'
import { TelaHome } from './pages/TelaHome'
import { TelaPrescrições } from './pages/TelaPrescrições'
import { TelaEspecialidade } from './pages/TelaEspecialidade'
import { TelaTema } from './pages/TelaTema'
import { TelaFavoritos } from './pages/TelaFavoritos'
import { Header } from './components/Header'
import { BottomNav } from './components/BottomNav'
import './styles/App.css'

export function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [selectedEspecialidade, setSelectedEspecialidade] = useState(null)
  const [selectedTema, setSelectedTema] = useState(null)

  const navigate = (page, especialidade = null, tema = null) => {
    setCurrentPage(page)
    if (especialidade) setSelectedEspecialidade(especialidade)
    if (tema) setSelectedTema(tema)
  }

  const goBack = () => {
    if (selectedTema) {
      setSelectedTema(null)
      setCurrentPage('especialidade')
    } else if (selectedEspecialidade) {
      setSelectedEspecialidade(null)
      setCurrentPage('prescricoes')
    } else if (currentPage !== 'home') {
      setCurrentPage('home')
    }
  }

  return (
    <div className="app-container">
      <Header 
        titulo={
          selectedTema ? selectedTema.nome :
          selectedEspecialidade ? selectedEspecialidade.nome :
          currentPage === 'prescricoes' ? 'Prescrições' :
          currentPage === 'favoritos' ? 'Favoritos' :
          'Prescrevendo'
        }
        onBack={currentPage !== 'home' && goBack ? goBack : null}
      />

      <div className="app-content">
        {currentPage === 'home' && (
          <TelaHome onNavigate={navigate} />
        )}
        {currentPage === 'prescricoes' && !selectedEspecialidade && (
          <TelaPrescrições onNavigate={navigate} />
        )}
        {currentPage === 'especialidade' && selectedEspecialidade && (
          <TelaEspecialidade 
            especialidade={selectedEspecialidade}
            onNavigate={navigate}
          />
        )}
        {currentPage === 'tema' && selectedTema && (
          <TelaTema tema={selectedTema} />
        )}
        {currentPage === 'favoritos' && (
          <TelaFavoritos />
        )}
      </div>

      <BottomNav 
        currentPage={currentPage} 
        onNavigate={navigate}
      />
    </div>
  )
}
