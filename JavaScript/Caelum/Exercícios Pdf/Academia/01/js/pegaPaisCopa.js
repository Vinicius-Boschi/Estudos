function pegaPaisCopa(ano) {
    const COPAS = [
        {ano: 1930,pais: "Uruguai"}, 
        {ano: 1934, pais: "Itália"}, 
        {ano: 1938, pais: "França"}, 
        {ano: 1942, pais: "N/A"}, 
        {ano: 1946, pais: "N/A"}, 
        {ano: 1950, pais: "Brasil"}, 
        {ano: 1954, pais: "Suíça"}, 
        {ano: 1958, pais: "Suécia"}, 
        {ano: 1962, pais: "Chile"}, 
        {ano: 1966, pais: "Inglaterra"}, 
        {ano: 1970, pais: "México"}, 
        {ano: 1974, pais: "Alemanha Ocidental"}, 
        {ano: 1978, pais: "Argentina"}, 
        {ano: 1982, pais: "Espanha"}, 
        {ano: 1986, pais: "México"}, 
        {ano: 1990, pais: "Itália"}, 
        {ano: 1994, pais: "Estados Unidos"}, 
        {ano: 1998, pais: "França"}, 
        {ano: 2002, pais: "Coreia do Sul e Japão"}, 
        {ano: 2006, pais: "Alemanha"}, 
        {ano: 2010, pais: "África do Sul"}, 
        {ano: 2014, pais: "Brasil"}, 
        {ano: 2018, pais: "Rússia"}, 
        {ano: 2022, pais: "Qatar"}
    ]

    return COPAS.filter(copa => copa.ano == ano)[0].pais
}