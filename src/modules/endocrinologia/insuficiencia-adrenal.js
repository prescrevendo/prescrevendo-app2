export const insuficienciaAdrenalData = {
    id: "insuficiencia-adrenal",
    nome: "Insuficiência Adrenal Aguda",
    orientacoes: [
      {
        titulo: "Ressuscitação Volêmica",
        tipo: "procedimento",
        itens: [
          "Hidratação venosa com 1 L de SF 0,9% na primeira hora.",
          "Pode ser necessário 2 a 3 litros de SF 0,9% nas primeiras 12-24h.",
          "Manutenção (mínimo 24-48 horas): SF 0,9% 30-40 mL/kg EV em 24 horas."
        ]
      },
      {
        titulo: "Corticoterapia",
        tipo: "conduta",
        itens: [
          "Dose de ataque: Hidrocortisona 100 mg EV.",
          "Dose de manutenção: Hidrocortisona 50 mg EV de 6/6 horas nas primeiras 24h. Em seguida, 50 mg EV 12/12h."
        ]
      },
      {
        titulo: "Identificar e tratar causa precipitante",
        tipo: "alerta",
        itens: [
          "Infecção bacteriana.",
          "Gastroenterite viral.",
          "Trauma."
        ]
      }
    ],
    prescricao: [
      {
        titulo: "Prescrição Prática",
        itens: [
          "Dieta zero",
          "SF 0,9% 1000 mL – administrar via EV em 1 hora",
          "Hidrocortisona 100 mg/fr – reconstituir 1 fr em 2 mL AD e diluir em SF 0,9% 20 mL – administrar via EV em 2 minutos imediatamente",
          "Glicose 50% – administrar 40 mL, via EV, se glicemia capilar < 70 mg/dL",
          "Glicemia capilar 2/2h",
          "Monitorização contínua"
        ]
      }
    ]
  }
