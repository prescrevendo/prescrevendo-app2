export const pbeData = {
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
  }
