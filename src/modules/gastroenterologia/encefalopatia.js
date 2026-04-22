export const encefalopatiaData = {
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
  }
