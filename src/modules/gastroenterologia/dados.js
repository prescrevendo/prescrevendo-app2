export const GASTROENTEROLOGIA_TEMAS = [
  {
    id: "encefalopatia",
    nome: "Encefalopatia Hepática",
    orientacoes: [
      {
        titulo: "Identificar e Corrigir Causas",
        tipo: "conduta",
        itens: [
          "Terapia inicial = fazer o paciente evacuar.",
          "Lactulose 667mg/mL: Até a 1ª evacuação, 30-45 mL VO de 8/8h a 4/4h.",
          "Meta: 2 a 4 evacuações pastosas NÃO DIARREICAS por dia.",
          "Após atingir meta: reduzir para 15-30 mL VO 2 vezes/dia."
        ]
      },
      {
        titulo: "Enema de Lactulose",
        tipo: "procedimento",
        itens: [
          "Preparo: Lactulose 300mL + SF 0,9% 700mL.",
          "Administrar o preparo via retal em 10 minutos.",
          "Orientar o paciente a reter o líquido por 1 hora."
        ]
      },
      {
        titulo: "Uso de Antibióticos",
        tipo: "alerta",
        itens: [
          "Se não houver melhora em 48h OU se houver piora clínica = Associar antibiótico.",
          "1ª Linha: Rifaximina 550 mg – 1 cp VO 12/12h.",
          "2ª Linha: Metronidazol 250 a 500 mg VO 8/8h."
        ]
      }
    ],
    prescricao: [
      {
        titulo: "Prescrição Inicial",
        itens: [
          "Lactulose 667 mg/mL – administrar 30 mL, via oral, de 8/8h"
        ]
      },
      {
        titulo: "Após 24h sem evacuar",
        itens: [
          "Lactulose 667 mg/mL – administrar 45 mL, via oral, de 4/4h"
        ]
      }
    ]
  },
  {
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
  },
  {
    id: "hda-varicosa",
    nome: "Hemorragia Digestiva Alta Varicosa",
    orientacoes: [
      {
        titulo: "Suspeita Clínica e Hemodinâmica",
        tipo: "alerta",
        itens: [
          "Suspeitar em pct com sinais de hipertensão portal.",
          "Instabilidade: Reposição volêmica cautelosa.",
          "Transfusão: Alvo de Hb 7-9 g/dL."
        ]
      },
      {
        titulo: "Vasoconstritores Esplâncnicos",
        tipo: "procedimento",
        itens: [
          "Terlipressina 1mg/5mL: 2 a 4 mg EV bolus.",
          "Seguido de 1-2 mg EV bolus 4/4h por 2-5 dias.",
          "Octreotida: 50 mcg EV bolus, seguido de 50 mcg/h EV em BIC."
        ]
      },
      {
        titulo: "Profilaxias",
        tipo: "conduta",
        itens: [
          "Profilaxia PBE: Ceftriaxona 1g EV 1x/dia por 7 dias.",
          "Profilaxia secundária: Carvedilol 3,125 mg VO 12/12h.",
          "Meta do Carvedilol: FC 55-60 bpm e PAS ≥ 90 mmHg."
        ]
      }
    ],
    prescricao: [
      {
        titulo: "Prescrição Inicial",
        itens: [
          "Dieta oral zero",
          "SF 0,9% 500 mL, via EV em 30 minutos",
          "Terlipressina 1 mg/5mL – administrar 10 mL via EV bolus",
          "Terlipressina 1 mg/5mL – administrar 7 mL via EV bolus lento de 4/4h",
          "Omeprazol 40 mg/fr – reconstituir 02 frascos e administrar via EV bolus",
          "Ceftriaxona 1g/fr – reconstituir em 10 mL AD – EV em 30 min a cada 24h",
          "Monitorização contínua"
        ]
      }
    ]
  },
  {
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
  },
  {
    id: "pancreatite",
    nome: "Pancreatite Aguda",
    orientacoes: [
      {
        titulo: "Ressuscitação Volêmica",
        tipo: "conduta",
        itens: [
          "Infundir 5-10 mL/kg/hora em bolus se hipovolemia.",
          "Usar preferencialmente Ringer Lactato.",
          "Metas: FC < 120 bpm, PAM 65-85 mmHg, Débito urinário > 0,5 a 1 mL/kg/h."
        ]
      },
      {
        titulo: "Controle da Dor",
        tipo: "procedimento",
        itens: [
          "Dipirona EV 6/6h ou Paracetamol VO 6/6h.",
          "AINEs: Cetoprofeno 100 mg EV 12/12h.",
          "Opioides: Tramadol 50 mg EV 6/6h ou Morfina 10 mg EV 4/4h."
        ]
      },
      {
        titulo: "Suporte Nutricional",
        tipo: "info",
        itens: [
          "Jejum até melhora de dor/vômitos.",
          "Dieta oral deve ser iniciada precocemente (< 24h).",
          "Se não tolerar em 3 dias, iniciar Dieta Enteral."
        ]
      }
    ],
    prescricao: [
      {
        titulo: "Admissão (Pct 70 kg)",
        itens: [
          "Dieta oral zero",
          "Ringer Lactato 500 mL/bolsa – 5 bolsas – EV a 33 gts/min",
          "Dipirona 500 mg/mL – diluir 2 mL em 18 mL AD via EV 6/6h",
          "Morfina 10 mg/mL – diluir 1 mL em SF 0,9% 9 mL – EV 6/6h",
          "SSVV de 6/6h"
        ]
      }
    ]
  },
  {
    id: "pbe",
    nome: "Peritonite Bacteriana Espontânea",
    orientacoes: [
      {
        titulo: "Manejo Antibiótico Empírico",
        tipo: "conduta",
        itens: [
          "Iniciar tratamento empírico o mais breve possível.",
          "Não grave (CLIF-SOFA < 7): Cefotaxima 2g EV 8/8h ou Ceftriaxona 1g EV 12/12h.",
          "Grave (CLIF-SOFA ≥ 7): Meropenem 1g EV 8/8h."
        ]
      },
      {
        titulo: "Ajustes de Medicação",
        tipo: "procedimento",
        itens: [
          "Suspender permanentemente betabloqueadores.",
          "Se PMN < 250 cel/microL: Descontinuar ATB.",
          "Se PMN ≥ 250 cel/microL: Manter ATB e administrar Albumina."
        ]
      },
      {
        titulo: "Uso de Albumina",
        tipo: "info",
        itens: [
          "Dia 1: 1,5 g/kg (Máx 100g).",
          "Dia 3: 1 g/kg (Máx 100g) se Creatinina > 1 mg/dL."
        ]
      }
    ],
    prescricao: [
      {
        titulo: "Admissão (Pct 70 kg)",
        itens: [
          "Dieta oral branda hipossódica",
          "Cefotaxima 1g/fr – reconstituir 2 fr e diluir em SF 0,9% 100 mL – EV em 60 min de 8/8h",
          "Albumina 20% – administrar 500 mL via EV a 40 gts/min",
          "SSVV de 6/6h",
          "Pesar diariamente em jejum"
        ]
      }
    ]
  },
  {
    id: "sindrome-hepatorrenal",
    nome: "Síndrome Hepatorrenal",
    orientacoes: [
      {
        titulo: "1ª Intervenção: Corrigir Hipovolemia",
        tipo: "conduta",
        itens: [
          "Albumina 1 g/kg via EV (Máx: 100 g/dia).",
          "Suspender diuréticos e betabloqueadores.",
          "Identificar e tratar precipitantes.",
          "Avaliar necessidade de hemotransfusão."
        ]
      },
      {
        titulo: "2ª Intervenção: Vasoconstritores",
        tipo: "procedimento",
        itens: [
          "Se ausência de resposta: Vasoconstritores + Albumina por até 14 dias.",
          "Terlipressina 1mg/5mL – 5 mL EV bolus 6/6h + Albumina 20% 50 mL EV.",
          "Noradrenalina se Terlipressina indisponível."
        ]
      },
      {
        titulo: "Tratamento Definitivo",
        tipo: "info",
        itens: [
          "O tratamento definitivo para Síndrome Hepatorrenal é o transplante hepático."
        ]
      }
    ],
    prescricao: [
      {
        titulo: "Admissão (Pct 70 kg)",
        itens: [
          "Dieta oral branda hipossódica",
          "Albumina 20% – administrar 500 mL via EV a 40 gts/min",
          "SSVV de 4/4h ou monitorização contínua",
          "Registrar débito urinário de 1/1h",
          "Pesar diariamente em jejum"
        ]
      }
    ]
  }
]
