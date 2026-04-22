export const hdaNaoVaricosaData = {
    id: "hda-nao-varicosa",
    nome: "Hemorragia Digestiva Alta Não Varicosa",
    orientacoes: [
      {
        titulo: "Instabilidade Hemodinâmica",
        tipo: "alerta",
        itens: [
          "Choque ou hipotensão: Reposição volêmica cuidadosa.",
          "SF 0,9% 500-1000 mL EV nos primeiros 30 min.",
          "Avaliar necessidade de drogas vasoativas."
        ]
      },
      {
        titulo: "Transfusão de Hemocomponentes",
        tipo: "conduta",
        itens: [
          "Se Hb < 7 g/dL: Transfundir concentrado de hemácias.",
          "Se sangramento ativo + INR > 1,5: Plasma fresco congelado.",
          "Se sangramento ativo + Plq < 50.000: Concentrado de plaquetas."
        ]
      },
      {
        titulo: "Tratamento Medicamentoso ANTES da EDA",
        tipo: "procedimento",
        itens: [
          "EDA em < 24h com paciente estável.",
          "Omeprazol ou Pantoprazol 80 mg EV bolus em 5 min.",
          "Seguido de 40 mg EV 12/12h."
        ]
      }
    ],
    prescricao: [
      {
        titulo: "Prescrição Inicial — Antes da EDA",
        itens: [
          "Dieta oral zero",
          "SF 0,9% 500 mL, via EV em 30 minutos",
          "Omeprazol 40 mg/fr – reconstituir 02 frascos e administrar via EV bolus",
          "Omeprazol 40 mg/fr – reconstituir 01 frasco e administrar via EV de 12/12h",
          "Eritromicina 1000 mg/fr – diluir 5 mL em SF 0,9% 250 mL – EV em 60 min",
          "Suplementação de O2, se SatO2 < 94%"
        ]
      }
    ]
  }
