/* ============================================================
   DADOS IMUTÁVEIS - 33 Produtos Herbalife
   Fonte: Guia de Produtos Herbalife 2025
   INVOLÁVEL: Nenhum dígito pode ser alterado sem autorização.
   ============================================================ */
const PRODUTOS_HLF = [
  { id: 1,  nome: "Shake Doce de Leite 550g",           categoria: "Shakes",        pv: 23.95, preco: 235.00, sku: "SHK-DL-550",  sabores: ["Doce de Leite"],                       destaque: true },
  { id: 2,  nome: "Shake Baunilha Cremoso 550g",        categoria: "Shakes",        pv: 23.95, preco: 235.00, sku: "SHK-BA-550",  sabores: ["Baunilha Cremoso"],                    destaque: true },
  { id: 3,  nome: "Shake Morango Cremoso 550g",         categoria: "Shakes",        pv: 23.95, preco: 235.00, sku: "SHK-MO-550",  sabores: ["Morango Cremoso"],                     destaque: true },
  { id: 4,  nome: "Shake Chocolate Sensation 550g",     categoria: "Shakes",        pv: 23.95, preco: 235.00, sku: "SHK-CH-550",  sabores: ["Chocolate Sensation"],                  destaque: true },
  { id: 5,  nome: "Shake Cookies'n Cream 550g",         categoria: "Shakes",        pv: 23.95, preco: 235.00, sku: "SHK-CC-550",  sabores: ["Cookies'n Cream"],                      destaque: true },
  { id: 6,  nome: "Shake Baunilha Cremoso 2kg",         categoria: "Shakes",        pv: 75.00, preco: 710.00, sku: "SHK-BA-2KG",  sabores: ["Baunilha Cremoso"],                     destaque: false },
  { id: 7,  nome: "Caixa com Sachês Baunilha 182g",     categoria: "Shakes",        pv: 12.00, preco: 125.00, sku: "SHK-BA-SAC",  sabores: ["Baunilha"],                             destaque: false },
  { id: 8,  nome: "NutreV 450g",                        categoria: "Shakes",        pv: 18.50, preco: 180.00, sku: "NTV-450",     sabores: [],                                       destaque: true },
  { id: 9,  nome: "OnActive 400g",                      categoria: "Bem-Estar",     pv: 20.00, preco: 195.00, sku: "ONA-400",     sabores: [],                                       destaque: false },
  { id: 10, nome: "Sopa Snack Proteica Tomate 390g",    categoria: "Snacks",        pv: 15.50, preco: 150.00, sku: "SPS-TO-390",  sabores: ["Tomate e Manjericão"],                 destaque: false },
  { id: 11, nome: "Sopa Snack Proteica Champignon",     categoria: "Snacks",        pv: 15.50, preco: 150.00, sku: "SPS-CH",      sabores: ["Champignon"],                           destaque: false },
  { id: 12, nome: "Barra de Proteína Cookie Dough",     categoria: "Snacks",        pv: 5.50,  preco: 52.00,  sku: "BDP-CD",      sabores: ["Cookie Dough"],                         destaque: false },
  { id: 13, nome: "Barra de Proteína Chocolate",        categoria: "Snacks",        pv: 5.50,  preco: 52.00,  sku: "BDP-CH",      sabores: ["Chocolate"],                            destaque: false },
  { id: 14, nome: "Protein Powder Baunilha 500g",       categoria: "Proteínas",     pv: 17.50, preco: 170.00, sku: "PRP-BA-500",  sabores: ["Baunilha"],                             destaque: true },
  { id: 15, nome: "Protein Crunch Chocolate 400g",      categoria: "Proteínas",     pv: 16.00, preco: 158.00, sku: "PRC-CH-400",  sabores: ["Chocolate"],                            destaque: false },
  { id: 16, nome: "Fiber Powder 500g",                  categoria: "Fibras",        pv: 12.50, preco: 122.00, sku: "FBP-500",     sabores: [],                                       destaque: false },
  { id: 17, nome: "Fiber Concentrate Laranja 250g",     categoria: "Fibras",        pv: 13.00, preco: 128.00, sku: "FBC-LA-250",  sabores: ["Laranja"],                              destaque: false },
  { id: 18, nome: "Fiber Concentrate Immune 250g",      categoria: "Fibras",        pv: 13.50, preco: 132.00, sku: "FBC-IM-250",  sabores: ["Laranja"],                              destaque: false },
  { id: 19, nome: "Shape Control 60 tabletes",          categoria: "Bem-Estar",     pv: 18.00, preco: 175.00, sku: "SHP-60",      sabores: [],                                       destaque: false },
  { id: 20, nome: "Herbalifeline Ômega 3 - 60 cápsulas", categoria: "Vitaminas",    pv: 22.00, preco: 215.00, sku: "HFL-60",      sabores: [],                                       destaque: true },
  { id: 21, nome: "Multivitamínicos e Minerais 90 tabs", categoria: "Vitaminas",    pv: 19.50, preco: 190.00, sku: "MVM-90",      sabores: [],                                       destaque: true },
  { id: 22, nome: "Xtra-Cal 60 tabletes",               categoria: "Vitaminas",     pv: 14.00, preco: 138.00, sku: "XTC-60",      sabores: [],                                       destaque: false },
  { id: 23, nome: "Herbal Concentrate Original 100g",   categoria: "Bebidas",       pv: 10.00, preco: 98.00,  sku: "HBC-OR-100",  sabores: ["Original"],                             destaque: true },
  { id: 24, nome: "Herbal Concentrate Limão 100g",      categoria: "Bebidas",       pv: 10.00, preco: 98.00,  sku: "HBC-LI-100",  sabores: ["Limão"],                                destaque: false },
  { id: 25, nome: "N-R-G Guaraná 500ml",                categoria: "Bebidas",       pv: 11.00, preco: 108.00, sku: "NRG-GU-500",  sabores: ["Guaraná"],                              destaque: false },
  { id: 26, nome: "Beauty Booster Colágeno 30 sachês",  categoria: "Beleza",        pv: 24.50, preco: 240.00, sku: "BEB-30",      sabores: [],                                       destaque: false },
  { id: 27, nome: "Cleanser Facial Cítrico 150ml",      categoria: "Beleza",        pv: 9.50,  preco: 92.00,  sku: "CLF-150",     sabores: [],                                       destaque: false },
  { id: 28, nome: "Sérum Facial Redutor de Linhas 30ml", categoria: "Beleza",       pv: 12.00, preco: 118.00, sku: "SFR-30",      sabores: [],                                       destaque: false },
  { id: 29, nome: "Gel Firmador para os Olhos 15ml",    categoria: "Beleza",        pv: 10.50, preco: 102.00, sku: "GFO-15",      sabores: [],                                       destaque: false },
  { id: 30, nome: "Máscara Purificante Argila 120ml",   categoria: "Beleza",        pv: 8.50,  preco: 82.00,  sku: "MPA-120",     sabores: [],                                       destaque: false },
  { id: 31, nome: "Creatina Premium 300g",              categoria: "Esporte",       pv: 15.50, preco: 150.00, sku: "CRP-300",     sabores: [],                                       destaque: true },
  { id: 32, nome: "CR7 Drive 30 porções",               categoria: "Esporte",       pv: 20.00, preco: 195.00, sku: "CR7-30",      sabores: ["Limão"],                                destaque: true },
  { id: 33, nome: "Liftoff Limão Siciliano 24 sachês",  categoria: "Esporte",       pv: 17.50, preco: 171.00, sku: "LFT-LS-24",   sabores: ["Limão Siciliano", "Amora", "Abacaxi"], destaque: false }
];