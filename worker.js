const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
};

const MANIFEST = {
  id: "org.abuelatv.addon",
  version: "1.0.0",
  name: "Abuela TV",
  description: "Películas y series clásicas, religiosas y turcas. Libre de violencia.",
  logo: "https://i.imgur.com/TbbS0ms.png",
  background: "https://i.imgur.com/Q9lzT3v.jpg",
  contactEmail: "soporte@abuela-tv.example.com",
  resources: ["catalog", "stream"], 
  types: ["movie", "series"],
  catalogs: [
    {
      type: "movie",
      id: "abuela_pelis_v2",
      name: "🍿 Pelis para la Abuela",
      extra: [{ name: "skip", isRequired: false }],
    },
    {
      type: "series",
      id: "abuela_series_v2",
      name: "🌙 Series para la Abuela",
      extra: [{ name: "skip", isRequired: false }],
    }
  ]
};

const SPAIN_ORIGINAL_IDS = new Set([
  "tt0413573", "tt0263285", "tt1637727", "tt0287969", "tt0460649",
  "tt1637461", "tt2369586", "tt2011533", "tt0313113", "tt2006375",
  "tt3347102", "tt1864750", "tt0472642", "tt5674718", "tt22325164"
]);

const CATALOGS = {
  abuela_pelis_v2: [
    { id: "tt0052618", type: "movie", name: "Ben-Hur (1959)" },
    { id: "tt0049833", type: "movie", name: "Los Diez Mandamientos (1956)" },
    { id: "tt0335345", type: "movie", name: "La Pasión de Cristo (2004)" },
    { id: "tt3210686", type: "movie", name: "Hijo de Dios (2014)" },
    { id: "tt3231054", type: "movie", name: "La Resurrección de Cristo (2016)" },
    { id: "tt0120794", type: "movie", name: "El Príncipe de Egipto (1998)" },
    { id: "tt0046876", type: "movie", name: "El Manto Sagrado (1953)" },
    { id: "tt1229238", type: "movie", name: "Ágora (2009)" },
    { id: "tt0117510", type: "movie", name: "Kundun (1997)" },
    { id: "tt0120338", type: "movie", name: "Titanic (1997)" },
    { id: "tt0172495", type: "movie", name: "Gladiador (2000)" },
    { id: "tt0056172", type: "movie", name: "Lawrence de Arabia (1962)" },
    { id: "tt0053125", type: "movie", name: "El Puente sobre el Río Kwai (1957)" },
    { id: "tt0057091", type: "movie", name: "Cleopatra (1963)" },
    { id: "tt0112573", type: "movie", name: "Braveheart (1995)" },
    { id: "tt0066206", type: "movie", name: "Patton (1970)" },
    { id: "tt0061184", type: "movie", name: "El Cid (1961)" },
    { id: "tt0050212", type: "movie", name: "Los Vikingos (1958)" },
    { id: "tt0072684", type: "movie", name: "Barry Lyndon (1975)" },
    { id: "tt1504320", type: "movie", name: "El Discurso del Rey (2010)" },
    { id: "tt0083987", type: "movie", name: "Gandhi (1982)" },
    { id: "tt0110912", type: "movie", name: "Forrest Gump (1994)" },
    { id: "tt0268978", type: "movie", name: "Una Mente Brillante (2001)" },
    { id: "tt0119822", type: "movie", name: "La Vida es Bella (1997)" },
    { id: "tt1007029", type: "movie", name: "La Dama de Hierro (2011)" },
    { id: "tt0314331", type: "movie", name: "Seabiscuit (2003)" },
    { id: "tt0117631", type: "movie", name: "Shine (1996)" },
    { id: "tt0097757", type: "movie", name: "El Club de los Poetas Muertos (1989)" },
    { id: "tt0119567", type: "movie", name: "Amistad (1997)" },
    { id: "tt0497116", type: "movie", name: "Una Verdad Incómoda (2006)" },
    { id: "tt0428803", type: "movie", name: "La Marcha de los Pingüinos (2005)" },
    { id: "tt0031381", type: "movie", name: "Lo que el Viento se Llevó (1939)" },
    { id: "tt0034583", type: "movie", name: "Casablanca (1942)" },
    { id: "tt0038650", type: "movie", name: "¡Qué Bello es Vivir! (1946)" },
    { id: "tt0032551", type: "movie", name: "Rebeca (1940)" },
    { id: "tt0050083", type: "movie", name: "Doce Hombres en Pugna (1957)" },
    { id: "tt0045152", type: "movie", name: "Cantando bajo la Lluvia (1952)" },
    { id: "tt0059742", type: "movie", name: "La Novicia Rebelde (1965)" },
    { id: "tt0414387", type: "movie", name: "Orgullo y Prejuicio (2005)" },
    { id: "tt0058331", type: "movie", name: "My Fair Lady (1964)" },
    { id: "tt0053291", type: "movie", name: "Con Faldas y a lo Loco (1959)" }
  ],
  abuela_series_v2: [
    { id: "tt0075520", type: "series", name: "Jesús de Nazaret (Miniserie 1977)" },
    { id: "tt5491994", type: "series", name: "Planet Earth II (2016)" },
    { id: "tt9253866", type: "series", name: "Nuestro Planeta (2019)" },
    { id: "tt0081846", type: "series", name: "Cosmos (1980)" },
    { id: "tt6769208", type: "series", name: "Blue Planet II (2017)" },
    { id: "tt1533261", type: "series", name: "Life (BBC)" },
    { id: "tt1848220", type: "series", name: "El Sultán (Muhteşem Yüzyıl)" },
    { id: "tt4320258", type: "series", name: "Diriliş: Ertuğrul" },
    { id: "tt5133998", type: "series", name: "Kara Sevda (Amor Eterno)" },
    { id: "tt12439466", type: "series", name: "Sen Çal Kapımı" },
    { id: "tt8478162", type: "series", name: "Erkenci Kuş" },
    { id: "tt10723804", type: "series", name: "Mucize Doktor" },
    { id: "tt8772296", type: "series", name: "Hercai: Amor y Venganza" },
    { id: "tt3195288", type: "series", name: "Medcezir" },
    { id: "tt1606375", type: "series", name: "Downton Abbey" },
    { id: "tt4786824", type: "series", name: "The Crown" },
    { id: "tt9471404", type: "series", name: "The Chosen" },
    { id: "tt3006802", type: "series", name: "Outlander" },
    { id: "tt2710394", type: "series", name: "Reign" },
    { id: "tt10590066", type: "series", name: "All Creatures Great and Small" },
    { id: "tt2306299", type: "series", name: "Vikings" },
    { id: "tt2861424", type: "series", name: "Cosmos (2014)" },
    { id: "tt7929424", type: "series", name: "One Strange Rock" },
    { id: "tt4295140", type: "series", name: "Chef's Table" },
    { id: "tt2006375", type: "series", name: "Gran Hotel" },
    { id: "tt3347102", type: "series", name: "Velvet" },
    { id: "tt1864750", type: "series", name: "El tiempo entre costuras" },
    { id: "tt0472642", type: "series", name: "Amar en tiempos revueltos" },
    { id: "tt5674718", type: "series", name: "Las chicas del cable" },
    { id: "tt22325164", type: "series", name: "La Promesa" },
    { id: "tt0313113", type: "series", name: "Padre Coraje" },
    { id: "tt2011533", type: "series", name: "Isabel" },
    { id: "tt1826071", type: "series", name: "El secreto de Feriha" },
    { id: "tt1784141", type: "series", name: "Mar de amores" },
    { id: "tt1705090", type: "series", name: "Teresa (2010)" },
    { id: "tt11404582", type: "series", name: "Te doy la vida" },
    { id: "tt0252779", type: "series", name: "Pobre juventud" }
  ]
};

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    if (request.method === "OPTIONS") {
      return new Response(null, { status: 200, headers: CORS });
    }

    if (url.pathname === "/" || url.pathname === "/manifest.json") {
      return new Response(JSON.stringify(MANIFEST), { status: 200, headers: CORS });
    }

    const catMatch = url.pathname.match(/^\/catalog\/(movie|series)\/([^/]+)(?:\/skip=([0-9]+))?\.json$/);
    if (catMatch) {
      return await handleCatalog(catMatch[1], catMatch[2], parseInt(catMatch[3] || "0", 10));
    }

    const streamMatch = url.pathname.match(/^\/stream\/(movie|series)\/([^/]+)\.json$/);
    if (streamMatch) {
      return new Response(JSON.stringify({ streams: [] }), { status: 200, headers: CORS });
    }

    return new Response("Not found", { status: 404, headers: CORS });
  }
};

async function handleCatalog(type, catalogId, skip = 0) {
  const items = CATALOGS[catalogId] || [];
  const PAGE_SIZE = 20;
  const page = items.slice(skip, skip + PAGE_SIZE);

  // Le pedimos los pósters oficiales a Stremio en tiempo real
  const metas = await Promise.all(page.map(async ({ id, type: t, name }) => {
    let poster = undefined;
    try {
      const res = await fetch(`https://v3-cinemeta.strem.io/meta/${t || type}/${id}.json`);
      if (res.ok) {
        const data = await res.json();
        if (data && data.meta && data.meta.poster) {
          poster = data.meta.poster;
        }
      }
    } catch (e) {}
    return { id, type: t || type, name, poster };
  }));

  return new Response(JSON.stringify({ metas }), { status: 200, headers: CORS });
}
