// Catálogo de Jeanny. Edita aquí nombres, descripciones y precios.
// cat: buques | personajes | el | cajas | recuerdos
// price: escribe el precio (ej. "$15") o deja "" para mostrar "Consultar precio".
const PRODUCTOS = [
  {
    "cat": "buques",
    "name": "Princesa Celeste",
    "tag": "Celeste",
    "img": "img/n6.webp",
    "desc": "Rosas celestes y azules con corona dorada y mariposas.",
    "alt": "Ramo de rosas celestes y azules con corona dorada",
    "price": ""
  },
  {
    "cat": "buques",
    "name": "Feliz Cumple Azul",
    "tag": "Con cinta",
    "img": "img/n7.webp",
    "desc": "Rosas celestes y azules con cinta personalizada y mariposas.",
    "alt": "Ramo de rosas celestes y azules con cinta de cumpleaños",
    "price": ""
  },
  {
    "cat": "buques",
    "name": "Azul Corazón",
    "tag": "Azul",
    "img": "img/c120.webp",
    "desc": "Rosas azul rey en papel blanco con corazones.",
    "alt": "Ramo de rosas azul rey en papel blanco",
    "price": ""
  },
  {
    "cat": "buques",
    "name": "Azul Real",
    "tag": "Con corona",
    "img": "img/c121.webp",
    "desc": "Rosas azul rey con corona dorada y papel negro.",
    "alt": "Ramo de rosas azul rey con corona dorada",
    "price": ""
  },
  {
    "cat": "buques",
    "name": "Blue Racer",
    "tag": "Azul",
    "img": "img/ramo1.webp",
    "desc": "Rosas azules de satín con dos carritos coleccionables.",
    "alt": "Ramo de rosas azules con carritos coleccionables",
    "price": ""
  },
  {
    "cat": "buques",
    "name": "Turquesa Noche",
    "tag": "Elegante",
    "img": "img/n11.webp",
    "desc": "Rosas turquesa en papel negro con cintas.",
    "alt": "Ramo de rosas turquesa en papel negro",
    "price": ""
  },
  {
    "cat": "buques",
    "name": "Noche Estrellada",
    "tag": "Artístico",
    "img": "img/n8.webp",
    "desc": "Girasol, rosas azules y amarillas con tarjetas de noche estrellada.",
    "alt": "Ramo con girasol, rosas azules y amarillas",
    "price": ""
  },
  {
    "cat": "buques",
    "name": "Cumpleañera Lila",
    "tag": "Con cinta",
    "img": "img/n5.webp",
    "desc": "Rosas lila con cinta «Para la cumpleañera más hermosa».",
    "alt": "Ramo de rosas lila con cinta de cumpleaños",
    "price": ""
  },
  {
    "cat": "buques",
    "name": "Algodón de Azúcar",
    "tag": "Pastel",
    "img": "img/c101.webp",
    "desc": "Rosas lila y rosadas con mariposas.",
    "alt": "Ramo de rosas lila y rosadas",
    "price": ""
  },
  {
    "cat": "buques",
    "name": "Cherry Crush",
    "tag": "Coquette",
    "img": "img/ramo2.webp",
    "desc": "Rosas rosadas y rojas con lazo y papel de cerezas.",
    "alt": "Ramo de rosas rosadas y rojas con lazo rojo",
    "price": ""
  },
  {
    "cat": "buques",
    "name": "Fucsia Reina",
    "tag": "Con corona",
    "img": "img/c100.webp",
    "desc": "Rosas fucsia con corona plateada y mariposa.",
    "alt": "Ramo de rosas fucsia con corona plateada",
    "price": ""
  },
  {
    "cat": "buques",
    "name": "Rosa Primavera",
    "tag": "Pastel",
    "img": "img/n39.webp",
    "desc": "Rosas, tulipanes y girasol rosado con mariposas doradas.",
    "alt": "Ramo rosado con rosas, tulipanes y girasol",
    "price": ""
  },
  {
    "cat": "buques",
    "name": "Jardín Pastel",
    "tag": "Mixto",
    "img": "img/n25.webp",
    "desc": "Rosas, margaritas y flores de satín en tonos pastel.",
    "alt": "Ramo de flores de satín en tonos pastel",
    "price": ""
  },
  {
    "cat": "buques",
    "name": "Corazón de Girasoles",
    "tag": "XL",
    "img": "img/n12.webp",
    "desc": "Ramo en forma de corazón con girasoles, rosas y margaritas.",
    "alt": "Ramo en forma de corazón con girasoles y rosas rosadas",
    "price": ""
  },
  {
    "cat": "buques",
    "name": "Rojo Perla",
    "tag": "Clásico",
    "img": "img/c111.webp",
    "desc": "Rosas rojas con lazo de perlas.",
    "alt": "Ramo de rosas rojas con lazo de perlas",
    "price": ""
  },
  {
    "cat": "buques",
    "name": "Pasión Roja",
    "tag": "XL",
    "img": "img/n9.webp",
    "desc": "Ramo grande de rosas rojas con perlas y mariposas.",
    "alt": "Ramo grande de rosas rojas en papel negro",
    "price": ""
  },
  {
    "cat": "buques",
    "name": "Panal de Miel",
    "tag": "Tierno",
    "img": "img/n10.webp",
    "desc": "Rosas amarillas con abejitas y margaritas.",
    "alt": "Ramo de rosas amarillas con abejitas",
    "price": ""
  },
  {
    "cat": "buques",
    "name": "Girasol Corona",
    "tag": "Amarillo",
    "img": "img/c210.webp",
    "desc": "Girasol rodeado de rosas marfil y doradas.",
    "alt": "Ramo redondo con girasol y rosas",
    "price": ""
  },
  {
    "cat": "buques",
    "name": "Tres Soles",
    "tag": "Amarillo",
    "img": "img/c211.webp",
    "desc": "Tres rosas amarillas grandes con flores blancas y mariposa.",
    "alt": "Ramo de tres rosas amarillas grandes",
    "price": ""
  },
  {
    "cat": "buques",
    "name": "Oro y Marfil",
    "tag": "Amarillo",
    "img": "img/c220.webp",
    "desc": "Rosas doradas y marfil con mariposas doradas.",
    "alt": "Ramo de rosas doradas y marfil",
    "price": ""
  },
  {
    "cat": "buques",
    "name": "Girasol Único",
    "tag": "Detalle",
    "img": "img/c221.webp",
    "desc": "Un girasol de satín con lazo amarillo.",
    "alt": "Ramo de un girasol con lazo amarillo",
    "price": ""
  },
  {
    "cat": "buques",
    "name": "Tulipanes de Sol",
    "tag": "Amarillo",
    "img": "img/c200.webp",
    "desc": "Tulipanes amarillos de satín con lazo.",
    "alt": "Ramo de tulipanes amarillos",
    "price": ""
  },
  {
    "cat": "buques",
    "name": "Lirio Dorado",
    "tag": "Detalle",
    "img": "img/c201.webp",
    "desc": "Un lirio amarillo de satín con mariposas.",
    "alt": "Ramo de un lirio amarillo",
    "price": ""
  },
  {
    "cat": "personajes",
    "name": "Reino de Hielo",
    "tag": "Princesas",
    "img": "img/p31.webp",
    "desc": "Rosas celestes, blancas, fucsia y marfil con perlas y tiara.",
    "alt": "Ramo de rosas celestes y blancas con princesas de hielo",
    "price": ""
  },
  {
    "cat": "personajes",
    "name": "Hada Verde",
    "tag": "Con corona",
    "img": "img/n22.webp",
    "desc": "Rosas verdes y doradas con hada, corona y mariposas.",
    "alt": "Ramo de rosas verdes y amarillas con figura de hada",
    "price": ""
  },
  {
    "cat": "personajes",
    "name": "Kitty Lila",
    "tag": "Tierno",
    "img": "img/c110.webp",
    "desc": "Rosas lila con su gatita favorita.",
    "alt": "Ramo de rosas lila con figura de gatita",
    "price": ""
  },
  {
    "cat": "personajes",
    "name": "Honey Bee",
    "tag": "Tierno",
    "img": "img/ramo3.webp",
    "desc": "Rosas amarillas y marfil con abejita y personaje.",
    "alt": "Ramo de rosas amarillas y marfil con abejita",
    "price": ""
  },
  {
    "cat": "personajes",
    "name": "Flor de Cerezo",
    "tag": "Princesa",
    "img": "img/p34.webp",
    "desc": "Rosas rosadas y blancas con su princesa y flores de cerezo.",
    "alt": "Ramo de rosas rosadas y blancas con figura de princesa",
    "price": ""
  },
  {
    "cat": "personajes",
    "name": "Bajo el Mar",
    "tag": "Fantasía",
    "img": "img/p17.webp",
    "desc": "Rosas lila, aqua y rojas con perlitas y personajes del mar.",
    "alt": "Ramo de rosas lila, aqua y rojas con figura de sirena",
    "price": ""
  },
  {
    "cat": "personajes",
    "name": "Princesas Mini",
    "tag": "Para niñas",
    "img": "img/p15.webp",
    "desc": "Rosas gigantes de colores, cada una con su princesita.",
    "alt": "Ramo de rosas gigantes con princesas pequeñas",
    "price": ""
  },
  {
    "cat": "personajes",
    "name": "Ola Dorada",
    "tag": "Con tarjeta",
    "img": "img/p23.webp",
    "desc": "Rosas azules, naranjas y marfil con tiara, mariposas y tarjeta.",
    "alt": "Ramo de rosas azules, naranjas y marfil con tiara",
    "price": ""
  },
  {
    "cat": "personajes",
    "name": "Muñeca Rosa",
    "tag": "Con corona",
    "img": "img/p16.webp",
    "desc": "Rosas fucsia y rosadas con corona dorada y mariposas.",
    "alt": "Ramo de rosas fucsia con figura de muñeca",
    "price": ""
  },
  {
    "cat": "personajes",
    "name": "Princesita Lila",
    "tag": "Para niñas",
    "img": "img/p19.webp",
    "desc": "Rosas lila y marfil con castillo, princesita y mariposas.",
    "alt": "Ramo de rosas lila y marfil con princesita",
    "price": ""
  },
  {
    "cat": "personajes",
    "name": "Llave y Botones",
    "tag": "Dark",
    "img": "img/p38.webp",
    "desc": "Rosas negras, moradas y azules con botones, llave y gatito.",
    "alt": "Ramo de rosas negras, moradas y azules con llave",
    "price": ""
  },
  {
    "cat": "personajes",
    "name": "Magia Pura",
    "tag": "XL",
    "img": "img/p27.webp",
    "desc": "Ramo grande de rosas rojas, naranjas y negras con detalles mágicos.",
    "alt": "Ramo grande de rosas rojas, naranjas y negras",
    "price": ""
  },
  {
    "cat": "el",
    "name": "Garage Real",
    "tag": "Carritos",
    "img": "img/n13.webp",
    "desc": "Rosas azul rey con tres carritos coleccionables y corona.",
    "alt": "Ramo de rosas azules con tres carritos",
    "price": ""
  },
  {
    "cat": "el",
    "name": "Pick-Up Azul",
    "tag": "Carritos",
    "img": "img/n14.webp",
    "desc": "Flor azul gigante con camioneta coleccionable.",
    "alt": "Ramo celeste con flor azul y carrito",
    "price": ""
  },
  {
    "cat": "el",
    "name": "Campeón",
    "tag": "Fútbol",
    "img": "img/p33.webp",
    "desc": "Rosas celestes y marfil con balones y figuras futboleras.",
    "alt": "Ramo de rosas celestes y marfil con balones",
    "price": ""
  },
  {
    "cat": "cajas",
    "name": "Niño Interior",
    "tag": "Para él",
    "img": "img/p26.webp",
    "desc": "Cinco rosas, chocolates, snacks, carritos y mensaje.",
    "alt": "Caja con rosas rojas, chocolates, snacks y carritos",
    "price": ""
  },
  {
    "cat": "cajas",
    "name": "Con Estilo",
    "tag": "Para él",
    "img": "img/p21.webp",
    "desc": "Gorra, rosas rojas, chocolates y tarjeta.",
    "alt": "Caja blanca con gorra roja, rosas y chocolates",
    "price": ""
  },
  {
    "cat": "cajas",
    "name": "Caja del 10",
    "tag": "Fútbol",
    "img": "img/p24.webp",
    "desc": "Caja kraft con lazo celeste y diseño de su jugador favorito.",
    "alt": "Caja kraft con lazo celeste y silueta de futbolista",
    "price": ""
  },
  {
    "cat": "cajas",
    "name": "Inicial Luminosa",
    "tag": "Con tus fotos",
    "img": "img/p36.webp",
    "desc": "Letra con luces y tus fotos, chocolates y mensaje de amor.",
    "alt": "Caja con letra luminosa decorada con fotos",
    "price": ""
  },
  {
    "cat": "cajas",
    "name": "Caja Osito Fresa",
    "tag": "Con peluche",
    "img": "img/p20.webp",
    "desc": "Osito de peluche, rosas rosadas, dulces, tus fotos y carta.",
    "alt": "Caja con osito rosado de peluche, rosas y carta",
    "price": ""
  },
  {
    "cat": "cajas",
    "name": "Mejores Amigas",
    "tag": "Con tus fotos",
    "img": "img/p35.webp",
    "desc": "Caja rosa con tus fotos, tres rosas, mariposas y snacks.",
    "alt": "Caja rosa con fotos, rosas y snacks",
    "price": ""
  },
  {
    "cat": "recuerdos",
    "name": "Noria de Recuerdos",
    "tag": "Con tus fotos",
    "img": "img/p30.webp",
    "desc": "Noria de madera decorada que gira con tus fotos favoritas.",
    "alt": "Noria de madera blanca con fotos",
    "price": ""
  },
  {
    "cat": "recuerdos",
    "name": "Cuadro Leyendas",
    "tag": "Fútbol",
    "img": "img/p18.webp",
    "desc": "Cuadro 3D con camisetas de las leyendas de su equipo.",
    "alt": "Cuadro con camisetas de fútbol y escudo",
    "price": ""
  }
];
