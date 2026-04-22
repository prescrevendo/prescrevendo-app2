export const hdbData = {
    id: "hdb",
    nome: "Hemorragia Digestiva Baixa",
    orientacoes: [
      {
        titulo: "Manejo Inicial",
        tipo: "conduta",
        itens: [
          "Foco: manter estabilidade hemodinâmica para colonoscopia.",
          "Hipotensão/Choque: SF 0,9% 500-1000 mL EV em 30 min.",
          "Transfusão: Hemácias se Hb < 7 g/dL.",
          "ATENÇÃO: Ácido Tranexâmico NÃO é recomendado."
        ]
      },
      {
        titulo: "Manejo de Anticoagulantes",
        tipo: "alerta",
        itens: [
          "Varfarina: Suspender e reintroduzir 7 dias após controle.",
          "AAS Profilaxia Primária: Suspender permanentemente.",
          "DOACs: Suspender e reintroduzir em até 7 dias."
        ]
      }
    ],
    prescricao: [
      {
        titulo: "Prescrição Inicial",
        itens: [
          "Dieta oral zero",
          "SF 0,9% 500 mL, via EV em 30 minutos",
          "Omeprazol 40 mg/fr – reconstituir 01 frasco e administrar via EV bolus",
          "Suplementação de O2, se SatO2 < 94%",
          "Monitorização contínua"
        ]
      }
    ]
  }
