export type SquadPlayer = { id: string; name: string; position: string; lastStatus: string };
export type ClubSquad = {
 clubId: string; club: string; country: string; league: string;
 season: string; source: string; scrapedAt: string; players: SquadPlayer[];
};

// Archived season squads compiled from publicly available matchday squad records.
// A player is retained if selected for a matchday at least once and not marked
// as having left the club by the final recorded matchday.
export const squads: ClubSquad[] = [
  {
    "clubId": "arsenal",
    "club": "Arsenal FC",
    "country": "Англия",
    "league": "Premier League",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/GB1/2025/fc-arsenal.json",
    "scrapedAt": "2026-06-12T22:30:53.331158+00:00",
    "players": [
      {
        "id": "262749",
        "name": "David Raya",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "192279",
        "name": "Kepa Arrizabalaga",
        "position": "GK",
        "lastStatus": "starting"
      },
      {
        "id": "848753",
        "name": "Tommy Setford",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "495666",
        "name": "William Saliba",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "435338",
        "name": "Gabriel",
        "position": "CB",
        "lastStatus": "sub_in"
      },
      {
        "id": "659813",
        "name": "Piero Hincapié",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "646750",
        "name": "Cristhian Mosquera",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "1294399",
        "name": "Marli Salmon",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "502821",
        "name": "Riccardo Calafiori",
        "position": "LB",
        "lastStatus": "starting"
      },
      {
        "id": "420243",
        "name": "Jurriën Timber",
        "position": "RB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "335721",
        "name": "Ben White",
        "position": "RB",
        "lastStatus": "injured"
      },
      {
        "id": "423440",
        "name": "Martín Zubimendi",
        "position": "DM",
        "lastStatus": "starting"
      },
      {
        "id": "148367",
        "name": "Christian Nørgaard",
        "position": "DM",
        "lastStatus": "starting"
      },
      {
        "id": "357662",
        "name": "Declan Rice",
        "position": "CM",
        "lastStatus": "bench"
      },
      {
        "id": "890721",
        "name": "Myles Lewis-Skelly",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "338424",
        "name": "Mikel Merino",
        "position": "CM",
        "lastStatus": "sub_in"
      },
      {
        "id": "316264",
        "name": "Martin Ødegaard",
        "position": "AM",
        "lastStatus": "bench"
      },
      {
        "id": "479999",
        "name": "Eberechi Eze",
        "position": "AM",
        "lastStatus": "sub_in"
      },
      {
        "id": "655488",
        "name": "Gabriel Martinelli",
        "position": "LW",
        "lastStatus": "starting"
      },
      {
        "id": "144028",
        "name": "Leandro Trossard",
        "position": "LW",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "433177",
        "name": "Bukayo Saka",
        "position": "RW",
        "lastStatus": "bench"
      },
      {
        "id": "503987",
        "name": "Noni Madueke",
        "position": "RW",
        "lastStatus": "starting"
      },
      {
        "id": "1187629",
        "name": "Max Dowman",
        "position": "RW",
        "lastStatus": "starting"
      },
      {
        "id": "325443",
        "name": "Viktor Gyökeres",
        "position": "CF",
        "lastStatus": "sub_in"
      },
      {
        "id": "309400",
        "name": "Kai Havertz",
        "position": "CF",
        "lastStatus": "sub_in"
      },
      {
        "id": "363205",
        "name": "Gabriel Jesus",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "1237740",
        "name": "Andre Harriman-Annous",
        "position": "CF",
        "lastStatus": "not_in_squad"
      }
    ]
  },
  {
    "clubId": "aston-villa",
    "club": "Aston Villa",
    "country": "Англия",
    "league": "Premier League",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/GB1/2025/aston-villa.json",
    "scrapedAt": "2026-06-12T22:37:15.018864+00:00",
    "players": [
      {
        "id": "111873",
        "name": "Emiliano Martínez",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "124884",
        "name": "Marco Bizot",
        "position": "GK",
        "lastStatus": "starting"
      },
      {
        "id": "712181",
        "name": "James Wright",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "1004709",
        "name": "Sam Proctor",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "667490",
        "name": "Ronnie Hollingshead",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "413403",
        "name": "Ezri Konsa",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "399776",
        "name": "Pau Torres",
        "position": "CB",
        "lastStatus": "sub_in"
      },
      {
        "id": "184573",
        "name": "Victor Lindelöf",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "253677",
        "name": "Tyrone Mings",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "1131945",
        "name": "TJ Carroll",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1300041",
        "name": "Leon Routh",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "485585",
        "name": "Ian Maatsen",
        "position": "LB",
        "lastStatus": "starting"
      },
      {
        "id": "126664",
        "name": "Lucas Digne",
        "position": "LB",
        "lastStatus": "bench"
      },
      {
        "id": "425334",
        "name": "Matty Cash",
        "position": "RB",
        "lastStatus": "sub_in"
      },
      {
        "id": "1063329",
        "name": "Andrés García",
        "position": "RB",
        "lastStatus": "starting"
      },
      {
        "id": "485706",
        "name": "Amadou Onana",
        "position": "DM",
        "lastStatus": "sub_in"
      },
      {
        "id": "394327",
        "name": "Boubacar Kamara",
        "position": "DM",
        "lastStatus": "injured"
      },
      {
        "id": "645686",
        "name": "Lamare Bogarde",
        "position": "DM",
        "lastStatus": "starting"
      },
      {
        "id": "249565",
        "name": "Youri Tielemans",
        "position": "CM",
        "lastStatus": "sub_in"
      },
      {
        "id": "447661",
        "name": "Douglas Luiz",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "193116",
        "name": "John McGinn",
        "position": "CM",
        "lastStatus": "sub_in"
      },
      {
        "id": "131978",
        "name": "Ross Barkley",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "1023191",
        "name": "George Hemmings",
        "position": "CM",
        "lastStatus": "bench"
      },
      {
        "id": "503743",
        "name": "Morgan Rogers",
        "position": "AM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "565822",
        "name": "Harvey Elliott",
        "position": "AM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "401173",
        "name": "Jadon Sancho",
        "position": "LW",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "321247",
        "name": "Emiliano Buendía",
        "position": "LW",
        "lastStatus": "starting"
      },
      {
        "id": "387626",
        "name": "Leon Bailey",
        "position": "RW",
        "lastStatus": "starting"
      },
      {
        "id": "1005583",
        "name": "Alysson",
        "position": "RW",
        "lastStatus": "injured"
      },
      {
        "id": "1202361",
        "name": "Bradley Burrowes",
        "position": "RW",
        "lastStatus": "bench"
      },
      {
        "id": "324358",
        "name": "Ollie Watkins",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "331726",
        "name": "Tammy Abraham",
        "position": "CF",
        "lastStatus": "not_in_squad"
      }
    ]
  },
  {
    "clubId": "chelsea",
    "club": "Chelsea FC",
    "country": "Англия",
    "league": "Premier League",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/GB1/2025/fc-chelsea.json",
    "scrapedAt": "2026-06-12T22:31:38.987702+00:00",
    "players": [
      {
        "id": "403151",
        "name": "Robert Sánchez",
        "position": "GK",
        "lastStatus": "starting"
      },
      {
        "id": "585323",
        "name": "Filip Jørgensen",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "656316",
        "name": "Gabriel Slonina",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "731466",
        "name": "Teddy Sharman-Lowe",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "827435",
        "name": "Max Merrick",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "614258",
        "name": "Levi Colwill",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "346314",
        "name": "Trevoh Chalobah",
        "position": "CB",
        "lastStatus": "sub_in"
      },
      {
        "id": "475411",
        "name": "Wesley Fofana",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "910905",
        "name": "Mamadou Sarr",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "258878",
        "name": "Tosin Adarabioyo",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "463603",
        "name": "Benoît Badiashile",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "284857",
        "name": "Marc Cucurella",
        "position": "LB",
        "lastStatus": "starting"
      },
      {
        "id": "904802",
        "name": "Jorrel Hato",
        "position": "LB",
        "lastStatus": "starting"
      },
      {
        "id": "472423",
        "name": "Reece James",
        "position": "RB",
        "lastStatus": "sub_in"
      },
      {
        "id": "620322",
        "name": "Malo Gusto",
        "position": "RB",
        "lastStatus": "starting"
      },
      {
        "id": "1004708",
        "name": "Josh Acheampong",
        "position": "RB",
        "lastStatus": "sub_in"
      },
      {
        "id": "687626",
        "name": "Moisés Caicedo",
        "position": "DM",
        "lastStatus": "starting"
      },
      {
        "id": "628451",
        "name": "Roméo Lavia",
        "position": "DM",
        "lastStatus": "injured"
      },
      {
        "id": "670717",
        "name": "Dário Essugo",
        "position": "DM",
        "lastStatus": "bench"
      },
      {
        "id": "648195",
        "name": "Enzo Fernández",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "743600",
        "name": "Andrey Santos",
        "position": "CM",
        "lastStatus": "bench"
      },
      {
        "id": "568177",
        "name": "Cole Palmer",
        "position": "AM",
        "lastStatus": "starting"
      },
      {
        "id": "670882",
        "name": "Jamie Gittens",
        "position": "LW",
        "lastStatus": "injured"
      },
      {
        "id": "811779",
        "name": "Alejandro Garnacho",
        "position": "LW",
        "lastStatus": "bench"
      },
      {
        "id": "1135611",
        "name": "Jesse Derry",
        "position": "LW",
        "lastStatus": "bench"
      },
      {
        "id": "1056993",
        "name": "Estêvão",
        "position": "RW",
        "lastStatus": "injured"
      },
      {
        "id": "487465",
        "name": "Pedro Neto",
        "position": "RW",
        "lastStatus": "starting"
      },
      {
        "id": "626724",
        "name": "João Pedro",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "610849",
        "name": "Liam Delap",
        "position": "CF",
        "lastStatus": "sub_in"
      },
      {
        "id": "938158",
        "name": "Marc Guiu",
        "position": "CF",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "982097",
        "name": "Shumaira Mheuka",
        "position": "CF",
        "lastStatus": "not_in_squad"
      }
    ]
  },
  {
    "clubId": "liverpool",
    "club": "Liverpool FC",
    "country": "Англия",
    "league": "Premier League",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/GB1/2025/fc-liverpool.json",
    "scrapedAt": "2026-06-12T22:32:31.211670+00:00",
    "players": [
      {
        "id": "502676",
        "name": "Giorgi Mamardashvili",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "105470",
        "name": "Alisson",
        "position": "GK",
        "lastStatus": "starting"
      },
      {
        "id": "226049",
        "name": "Freddie Woodman",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "933215",
        "name": "Ármin Pécsi",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "357119",
        "name": "Ibrahima Konaté",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "1086619",
        "name": "Giovanni Leoni",
        "position": "CB",
        "lastStatus": "injured"
      },
      {
        "id": "139208",
        "name": "Virgil van Dijk",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "256178",
        "name": "Joe Gomez",
        "position": "CB",
        "lastStatus": "sub_in"
      },
      {
        "id": "1108049",
        "name": "Amara Nallo",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "922461",
        "name": "Wellity Lucky",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1414663",
        "name": "Mor Talla Ndiaye",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "730861",
        "name": "Milos Kerkez",
        "position": "LB",
        "lastStatus": "sub_in"
      },
      {
        "id": "234803",
        "name": "Andrew Robertson",
        "position": "LB",
        "lastStatus": "starting"
      },
      {
        "id": "484547",
        "name": "Jeremie Frimpong",
        "position": "RB",
        "lastStatus": "sub_in"
      },
      {
        "id": "624258",
        "name": "Conor Bradley",
        "position": "RB",
        "lastStatus": "injured"
      },
      {
        "id": "633652",
        "name": "Calvin Ramsay",
        "position": "RB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "478573",
        "name": "Ryan Gravenberch",
        "position": "DM",
        "lastStatus": "starting"
      },
      {
        "id": "146310",
        "name": "Wataru Endo",
        "position": "DM",
        "lastStatus": "bench"
      },
      {
        "id": "845289",
        "name": "James McConnell",
        "position": "DM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "534033",
        "name": "Alexis Mac Allister",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "433188",
        "name": "Curtis Jones",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "1045123",
        "name": "Trey Nyoni",
        "position": "CM",
        "lastStatus": "sub_in"
      },
      {
        "id": "451276",
        "name": "Dominik Szoboszlai",
        "position": "AM",
        "lastStatus": "starting"
      },
      {
        "id": "598577",
        "name": "Florian Wirtz",
        "position": "AM",
        "lastStatus": "sub_in"
      },
      {
        "id": "434675",
        "name": "Cody Gakpo",
        "position": "LW",
        "lastStatus": "starting"
      },
      {
        "id": "1108466",
        "name": "Rio Ngumoha",
        "position": "LW",
        "lastStatus": "starting"
      },
      {
        "id": "148455",
        "name": "Mohamed Salah",
        "position": "RW",
        "lastStatus": "starting"
      },
      {
        "id": "341092",
        "name": "Federico Chiesa",
        "position": "RW",
        "lastStatus": "bench"
      },
      {
        "id": "1055345",
        "name": "Kieran Morrison",
        "position": "RW",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "349066",
        "name": "Alexander Isak",
        "position": "CF",
        "lastStatus": "bench"
      },
      {
        "id": "709726",
        "name": "Hugo Ekitiké",
        "position": "CF",
        "lastStatus": "injured"
      },
      {
        "id": "1340428",
        "name": "Will Wright",
        "position": "CF",
        "lastStatus": "not_in_squad"
      }
    ]
  },
  {
    "clubId": "man-city",
    "club": "Manchester City",
    "country": "Англия",
    "league": "Premier League",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/GB1/2025/manchester-city.json",
    "scrapedAt": "2026-06-12T22:30:19.271823+00:00",
    "players": [
      {
        "id": "315858",
        "name": "Gianluigi Donnarumma",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "566799",
        "name": "James Trafford",
        "position": "GK",
        "lastStatus": "starting"
      },
      {
        "id": "116648",
        "name": "Marcus Bettinelli",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "392757",
        "name": "Marc Guéhi",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "475959",
        "name": "Josko Gvardiol",
        "position": "CB",
        "lastStatus": "sub_in"
      },
      {
        "id": "258004",
        "name": "Rúben Dias",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "763079",
        "name": "Abdukodir Khusanov",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "177476",
        "name": "Nathan Aké",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "186590",
        "name": "John Stones",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "843595",
        "name": "Max Alleyne",
        "position": "CB",
        "lastStatus": "bench"
      },
      {
        "id": "743413",
        "name": "Nico O'Reilly",
        "position": "LB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "578391",
        "name": "Rayan Aït-Nouri",
        "position": "LB",
        "lastStatus": "sub_in"
      },
      {
        "id": "601883",
        "name": "Matheus Nunes",
        "position": "RB",
        "lastStatus": "bench"
      },
      {
        "id": "701057",
        "name": "Rico Lewis",
        "position": "RB",
        "lastStatus": "starting"
      },
      {
        "id": "357565",
        "name": "Rodri",
        "position": "DM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "466805",
        "name": "Nico González",
        "position": "DM",
        "lastStatus": "starting"
      },
      {
        "id": "1033103",
        "name": "Charlie Gray",
        "position": "DM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "460939",
        "name": "Tijjani Reijnders",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "51471",
        "name": "Mateo Kovacic",
        "position": "CM",
        "lastStatus": "sub_in"
      },
      {
        "id": "607223",
        "name": "Rayan Cherki",
        "position": "AM",
        "lastStatus": "sub_in"
      },
      {
        "id": "406635",
        "name": "Phil Foden",
        "position": "AM",
        "lastStatus": "starting"
      },
      {
        "id": "241641",
        "name": "Bernardo Silva",
        "position": "AM",
        "lastStatus": "starting"
      },
      {
        "id": "486049",
        "name": "Jérémy Doku",
        "position": "LW",
        "lastStatus": "sub_in"
      },
      {
        "id": "743591",
        "name": "Savinho",
        "position": "LW",
        "lastStatus": "starting"
      },
      {
        "id": "583255",
        "name": "Antoine Semenyo",
        "position": "RW",
        "lastStatus": "starting"
      },
      {
        "id": "418560",
        "name": "Erling Haaland",
        "position": "CF",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "445939",
        "name": "Omar Marmoush",
        "position": "CF",
        "lastStatus": "bench"
      }
    ]
  },
  {
    "clubId": "man-united",
    "club": "Manchester United",
    "country": "Англия",
    "league": "Premier League",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/GB1/2025/manchester-united.json",
    "scrapedAt": "2026-06-12T22:33:04.632939+00:00",
    "players": [
      {
        "id": "503883",
        "name": "Senne Lammens",
        "position": "GK",
        "lastStatus": "starting"
      },
      {
        "id": "336077",
        "name": "Altay Bayındır",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "34130",
        "name": "Tom Heaton",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "923831",
        "name": "Leny Yoro",
        "position": "CB",
        "lastStatus": "sub_in"
      },
      {
        "id": "480762",
        "name": "Lisandro Martínez",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "326031",
        "name": "Matthijs de Ligt",
        "position": "CB",
        "lastStatus": "injured"
      },
      {
        "id": "1078163",
        "name": "Ayden Heaven",
        "position": "CB",
        "lastStatus": "bench"
      },
      {
        "id": "177907",
        "name": "Harry Maguire",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "911424",
        "name": "Tyler Fredricson",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1184841",
        "name": "Godwill Kukonki",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "183288",
        "name": "Luke Shaw",
        "position": "LB",
        "lastStatus": "starting"
      },
      {
        "id": "339340",
        "name": "Tyrell Malacia",
        "position": "LB",
        "lastStatus": "sub_in"
      },
      {
        "id": "1283997",
        "name": "Diego León",
        "position": "LB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "357147",
        "name": "Diogo Dalot",
        "position": "RB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "340456",
        "name": "Noussair Mazraoui",
        "position": "RB",
        "lastStatus": "starting"
      },
      {
        "id": "476701",
        "name": "Manuel Ugarte",
        "position": "DM",
        "lastStatus": "bench"
      },
      {
        "id": "16306",
        "name": "Casemiro",
        "position": "DM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1184840",
        "name": "Jim Thwaites",
        "position": "DM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "820374",
        "name": "Kobbie Mainoo",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "1049911",
        "name": "Tyler Fletcher",
        "position": "CM",
        "lastStatus": "sub_in"
      },
      {
        "id": "953933",
        "name": "Jack Moorhouse",
        "position": "CM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "240306",
        "name": "Bruno Fernandes",
        "position": "AM",
        "lastStatus": "starting"
      },
      {
        "id": "346483",
        "name": "Mason Mount",
        "position": "AM",
        "lastStatus": "starting"
      },
      {
        "id": "1011140",
        "name": "Jack Fletcher",
        "position": "AM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "517894",
        "name": "Matheus Cunha",
        "position": "LW",
        "lastStatus": "bench"
      },
      {
        "id": "926952",
        "name": "Patrick Dorgu",
        "position": "LW",
        "lastStatus": "starting"
      },
      {
        "id": "413039",
        "name": "Bryan Mbeumo",
        "position": "RW",
        "lastStatus": "starting"
      },
      {
        "id": "536835",
        "name": "Amad Diallo",
        "position": "RW",
        "lastStatus": "starting"
      },
      {
        "id": "926309",
        "name": "Shea Lacey",
        "position": "RW",
        "lastStatus": "sub_in"
      },
      {
        "id": "1085591",
        "name": "Bendito Mantato",
        "position": "RW",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "627442",
        "name": "Benjamin Sesko",
        "position": "CF",
        "lastStatus": "injured"
      },
      {
        "id": "435648",
        "name": "Joshua Zirkzee",
        "position": "CF",
        "lastStatus": "sub_in"
      },
      {
        "id": "1042886",
        "name": "Chido Obi",
        "position": "CF",
        "lastStatus": "not_in_squad"
      }
    ]
  },
  {
    "clubId": "tottenham",
    "club": "Tottenham Hotspur",
    "country": "Англия",
    "league": "Premier League",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/GB1/2025/tottenham-hotspur.json",
    "scrapedAt": "2026-06-12T22:33:50.860784+00:00",
    "players": [
      {
        "id": "286047",
        "name": "Guglielmo Vicario",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "725912",
        "name": "Antonín Kinský",
        "position": "GK",
        "lastStatus": "starting"
      },
      {
        "id": "428016",
        "name": "Brandon Austin",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "557459",
        "name": "Micky van de Ven",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "355915",
        "name": "Cristian Romero",
        "position": "CB",
        "lastStatus": "injured"
      },
      {
        "id": "263236",
        "name": "Kevin Danso",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "568559",
        "name": "Radu Drăgușin",
        "position": "CB",
        "lastStatus": "sub_in"
      },
      {
        "id": "192765",
        "name": "Ben Davies",
        "position": "CB",
        "lastStatus": "injured"
      },
      {
        "id": "1196272",
        "name": "Jun'ai Byfield",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "999743",
        "name": "James Rowswell",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "483348",
        "name": "Djed Spence",
        "position": "LB",
        "lastStatus": "starting"
      },
      {
        "id": "556385",
        "name": "Destiny Udogie",
        "position": "LB",
        "lastStatus": "starting"
      },
      {
        "id": "1086258",
        "name": "Souza",
        "position": "LB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "553875",
        "name": "Pedro Porro",
        "position": "RB",
        "lastStatus": "starting"
      },
      {
        "id": "354362",
        "name": "Rodrigo Bentancur",
        "position": "DM",
        "lastStatus": "starting"
      },
      {
        "id": "257455",
        "name": "João Palhinha",
        "position": "DM",
        "lastStatus": "starting"
      },
      {
        "id": "410425",
        "name": "Yves Bissouma",
        "position": "DM",
        "lastStatus": "bench"
      },
      {
        "id": "866246",
        "name": "Lucas Bergvall",
        "position": "CM",
        "lastStatus": "bench"
      },
      {
        "id": "922693",
        "name": "Archie Gray",
        "position": "CM",
        "lastStatus": "sub_in"
      },
      {
        "id": "488362",
        "name": "Conor Gallagher",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "568693",
        "name": "Pape Matar Sarr",
        "position": "CM",
        "lastStatus": "sub_in"
      },
      {
        "id": "985546",
        "name": "Callum Olusesi",
        "position": "CM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "882172",
        "name": "Rio Kyerematen",
        "position": "CM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "566931",
        "name": "Xavi Simons",
        "position": "AM",
        "lastStatus": "injured"
      },
      {
        "id": "294057",
        "name": "James Maddison",
        "position": "AM",
        "lastStatus": "sub_in"
      },
      {
        "id": "1108475",
        "name": "Luca Williams-Barnett",
        "position": "AM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "743498",
        "name": "Wilson Odobert",
        "position": "LW",
        "lastStatus": "injured"
      },
      {
        "id": "543499",
        "name": "Mohammed Kudus",
        "position": "RW",
        "lastStatus": "injured"
      },
      {
        "id": "258889",
        "name": "Dominic Solanke",
        "position": "CF",
        "lastStatus": "bench"
      },
      {
        "id": "378710",
        "name": "Richarlison",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "801734",
        "name": "Mathys Tel",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "487969",
        "name": "Randal Kolo Muani",
        "position": "CF",
        "lastStatus": "sub_in"
      },
      {
        "id": "1041600",
        "name": "James Wilson",
        "position": "CF",
        "lastStatus": "not_in_squad"
      }
    ]
  },
  {
    "clubId": "barcelona",
    "club": "FC Barcelona",
    "country": "Испания",
    "league": "La Liga",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/ES1/2025/fc-barcelona.json",
    "scrapedAt": "2026-06-12T23:14:20.612892+00:00",
    "players": [
      {
        "id": "561613",
        "name": "Joan García",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "938144",
        "name": "Diego Kochen",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "44058",
        "name": "Wojciech Szczesny",
        "position": "GK",
        "lastStatus": "starting"
      },
      {
        "id": "1066202",
        "name": "Eder Aller",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "962110",
        "name": "Pau Cubarsí",
        "position": "CB",
        "lastStatus": "bench"
      },
      {
        "id": "466794",
        "name": "Eric García",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "705395",
        "name": "Gerard Martín",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "480267",
        "name": "Ronald Araujo",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "196948",
        "name": "Andreas Christensen",
        "position": "CB",
        "lastStatus": "sub_in"
      },
      {
        "id": "924610",
        "name": "Álvaro Cortés",
        "position": "CB",
        "lastStatus": "bench"
      },
      {
        "id": "636688",
        "name": "Alejandro Balde",
        "position": "LB",
        "lastStatus": "starting"
      },
      {
        "id": "1009765",
        "name": "Jofre Torrents",
        "position": "LB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "411975",
        "name": "Jules Koundé",
        "position": "RB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "182712",
        "name": "João Cancelo",
        "position": "RB",
        "lastStatus": "sub_in"
      },
      {
        "id": "1018912",
        "name": "Xavi Espart",
        "position": "RB",
        "lastStatus": "sub_in"
      },
      {
        "id": "1018920",
        "name": "Marc Bernal",
        "position": "DM",
        "lastStatus": "starting"
      },
      {
        "id": "636695",
        "name": "Marc Casadó",
        "position": "DM",
        "lastStatus": "sub_in"
      },
      {
        "id": "938156",
        "name": "Tommy Marqués",
        "position": "DM",
        "lastStatus": "bench"
      },
      {
        "id": "683840",
        "name": "Pedri",
        "position": "CM",
        "lastStatus": "bench"
      },
      {
        "id": "326330",
        "name": "Frenkie de Jong",
        "position": "CM",
        "lastStatus": "sub_in"
      },
      {
        "id": "646740",
        "name": "Gavi",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "1050120",
        "name": "Guille Fernández",
        "position": "CM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "636703",
        "name": "Fermín López",
        "position": "AM",
        "lastStatus": "injured"
      },
      {
        "id": "293385",
        "name": "Dani Olmo",
        "position": "AM",
        "lastStatus": "starting"
      },
      {
        "id": "1066206",
        "name": "Toni Fernández",
        "position": "AM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "962118",
        "name": "Juan Hernández",
        "position": "AM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "411295",
        "name": "Raphinha",
        "position": "LW",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "258923",
        "name": "Marcus Rashford",
        "position": "LW",
        "lastStatus": "starting"
      },
      {
        "id": "937958",
        "name": "Lamine Yamal",
        "position": "RW",
        "lastStatus": "injured"
      },
      {
        "id": "792331",
        "name": "Roony Bardghji",
        "position": "RW",
        "lastStatus": "bench"
      },
      {
        "id": "398184",
        "name": "Ferran Torres",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "38253",
        "name": "Robert Lewandowski",
        "position": "CF",
        "lastStatus": "starting"
      }
    ]
  },
  {
    "clubId": "real-madrid",
    "club": "Real Madrid",
    "country": "Испания",
    "league": "La Liga",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/ES1/2025/real-madrid.json",
    "scrapedAt": "2026-06-12T23:13:20.162571+00:00",
    "players": [
      {
        "id": "108390",
        "name": "Thibaut Courtois",
        "position": "GK",
        "lastStatus": "starting"
      },
      {
        "id": "404839",
        "name": "Andriy Lunin",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "962120",
        "name": "Álvaro González",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "1328089",
        "name": "Javi Navarro",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "890290",
        "name": "Dean Huijsen",
        "position": "CB",
        "lastStatus": "sub_in"
      },
      {
        "id": "401530",
        "name": "Éder Militão",
        "position": "CB",
        "lastStatus": "injured"
      },
      {
        "id": "935245",
        "name": "Raúl Asencio",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "86202",
        "name": "Antonio Rüdiger",
        "position": "CB",
        "lastStatus": "bench"
      },
      {
        "id": "1186245",
        "name": "Víctor Valdepeñas",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "59016",
        "name": "David Alaba",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "1365849",
        "name": "Lamini Fati",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "811778",
        "name": "Álvaro Carreras",
        "position": "LB",
        "lastStatus": "starting"
      },
      {
        "id": "341264",
        "name": "Fran García",
        "position": "LB",
        "lastStatus": "bench"
      },
      {
        "id": "291417",
        "name": "Ferland Mendy",
        "position": "LB",
        "lastStatus": "injured"
      },
      {
        "id": "940464",
        "name": "Manu Serrano",
        "position": "LB",
        "lastStatus": "sub_in"
      },
      {
        "id": "314353",
        "name": "Trent Alexander-Arnold",
        "position": "RB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "138927",
        "name": "Daniel Carvajal",
        "position": "RB",
        "lastStatus": "starting"
      },
      {
        "id": "937950",
        "name": "Jesús Fortea",
        "position": "RB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "413112",
        "name": "Aurélien Tchouaméni",
        "position": "DM",
        "lastStatus": "bench"
      },
      {
        "id": "369081",
        "name": "Federico Valverde",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "640428",
        "name": "Eduardo Camavinga",
        "position": "CM",
        "lastStatus": "bench"
      },
      {
        "id": "1375227",
        "name": "Thiago Pitarch",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "319745",
        "name": "Dani Ceballos",
        "position": "CM",
        "lastStatus": "sub_in"
      },
      {
        "id": "646824",
        "name": "Manuel Ángel",
        "position": "CM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "581678",
        "name": "Jude Bellingham",
        "position": "AM",
        "lastStatus": "starting"
      },
      {
        "id": "861410",
        "name": "Arda Güler",
        "position": "AM",
        "lastStatus": "sub_in"
      },
      {
        "id": "371998",
        "name": "Vinicius Junior",
        "position": "LW",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "412363",
        "name": "Rodrygo",
        "position": "RW",
        "lastStatus": "injured"
      },
      {
        "id": "1057316",
        "name": "Franco Mastantuono",
        "position": "RW",
        "lastStatus": "starting"
      },
      {
        "id": "314678",
        "name": "Brahim Díaz",
        "position": "RW",
        "lastStatus": "sub_in"
      },
      {
        "id": "342229",
        "name": "Kylian Mbappé",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "935230",
        "name": "Gonzalo García",
        "position": "CF",
        "lastStatus": "starting"
      }
    ]
  },
  {
    "clubId": "atletico",
    "club": "Atlético de Madrid",
    "country": "Испания",
    "league": "La Liga",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/ES1/2025/atletico-madrid.json",
    "scrapedAt": "2026-06-12T23:15:24.119912+00:00",
    "players": [
      {
        "id": "121483",
        "name": "Jan Oblak",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "242359",
        "name": "Juan Musso",
        "position": "GK",
        "lastStatus": "starting"
      },
      {
        "id": "895330",
        "name": "Salvi Esquivel",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "935486",
        "name": "Álvaro Moreno",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "404418",
        "name": "Dávid Hancko",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "844637",
        "name": "Marc Pubill",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "351809",
        "name": "Robin Le Normand",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "250845",
        "name": "José María Giménez",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "182904",
        "name": "Clément Lenglet",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "699233",
        "name": "Aleksa Puric",
        "position": "CB",
        "lastStatus": "sub_in"
      },
      {
        "id": "614988",
        "name": "Ilias Kostis",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "616631",
        "name": "Matteo Ruggeri",
        "position": "LB",
        "lastStatus": "sub_in"
      },
      {
        "id": "945753",
        "name": "Julio Díaz",
        "position": "LB",
        "lastStatus": "bench"
      },
      {
        "id": "282411",
        "name": "Marcos Llorente",
        "position": "RB",
        "lastStatus": "starting"
      },
      {
        "id": "424042",
        "name": "Nahuel Molina",
        "position": "RB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "741253",
        "name": "Javier Boñar",
        "position": "RB",
        "lastStatus": "sub_in"
      },
      {
        "id": "775605",
        "name": "Pablo Barrios",
        "position": "CM",
        "lastStatus": "injured"
      },
      {
        "id": "689505",
        "name": "Johnny Cardoso",
        "position": "CM",
        "lastStatus": "injured"
      },
      {
        "id": "961297",
        "name": "Rodrigo Mendoza",
        "position": "CM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "889435",
        "name": "Obed Vargas",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "74229",
        "name": "Koke",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "1250522",
        "name": "Javi Morcillo",
        "position": "CM",
        "lastStatus": "sub_in"
      },
      {
        "id": "945500",
        "name": "Rayane Belaid",
        "position": "AM",
        "lastStatus": "bench"
      },
      {
        "id": "1209287",
        "name": "Jano Monserrate",
        "position": "AM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "406040",
        "name": "Ademola Lookman",
        "position": "LW",
        "lastStatus": "starting"
      },
      {
        "id": "548111",
        "name": "Álex Baena",
        "position": "LW",
        "lastStatus": "starting"
      },
      {
        "id": "486031",
        "name": "Nico González",
        "position": "LW",
        "lastStatus": "injured"
      },
      {
        "id": "576028",
        "name": "Thiago Almada",
        "position": "LW",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "742201",
        "name": "Giuliano Simeone",
        "position": "RW",
        "lastStatus": "starting"
      },
      {
        "id": "1179482",
        "name": "Iker Luque",
        "position": "RW",
        "lastStatus": "bench"
      },
      {
        "id": "125781",
        "name": "Antoine Griezmann",
        "position": "SS",
        "lastStatus": "starting"
      },
      {
        "id": "576024",
        "name": "Julián Alvarez",
        "position": "CF",
        "lastStatus": "injured"
      },
      {
        "id": "238407",
        "name": "Alexander Sørloth",
        "position": "CF",
        "lastStatus": "sub_in"
      },
      {
        "id": "1453065",
        "name": "Miguel Cubo",
        "position": "CF",
        "lastStatus": "bench"
      }
    ]
  },
  {
    "clubId": "bayern",
    "club": "Bayern Munich",
    "country": "Германия",
    "league": "Bundesliga",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/L1/2025/fc-bayern-munchen.json",
    "scrapedAt": "2026-06-12T22:59:21.087067+00:00",
    "players": [
      {
        "id": "607720",
        "name": "Jonas Urbig",
        "position": "GK",
        "lastStatus": "sub_in"
      },
      {
        "id": "17259",
        "name": "Manuel Neuer",
        "position": "GK",
        "lastStatus": "starting"
      },
      {
        "id": "40680",
        "name": "Sven Ulreich",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "1145971",
        "name": "Leonard Prescott",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "344695",
        "name": "Dayot Upamecano",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "196357",
        "name": "Jonathan Tah",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "503482",
        "name": "Min-jae Kim",
        "position": "CB",
        "lastStatus": "injured"
      },
      {
        "id": "353892",
        "name": "Hiroki Ito",
        "position": "CB",
        "lastStatus": "bench"
      },
      {
        "id": "1259870",
        "name": "Cassiano Kiala",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "424204",
        "name": "Alphonso Davies",
        "position": "LB",
        "lastStatus": "injured"
      },
      {
        "id": "170986",
        "name": "Raphaël Guerreiro",
        "position": "LB",
        "lastStatus": "sub_in"
      },
      {
        "id": "483046",
        "name": "Josip Stanisic",
        "position": "RB",
        "lastStatus": "sub_in"
      },
      {
        "id": "223967",
        "name": "Konrad Laimer",
        "position": "RB",
        "lastStatus": "starting"
      },
      {
        "id": "792380",
        "name": "Aleksandar Pavlovic",
        "position": "DM",
        "lastStatus": "bench"
      },
      {
        "id": "161056",
        "name": "Joshua Kimmich",
        "position": "DM",
        "lastStatus": "starting"
      },
      {
        "id": "1118495",
        "name": "David Santos Daiber",
        "position": "DM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1330946",
        "name": "Erblin Osmani",
        "position": "DM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "822959",
        "name": "Tom Bischof",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "153084",
        "name": "Leon Goretzka",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "1497653",
        "name": "Bara Sapoko Ndiaye",
        "position": "CM",
        "lastStatus": "bench"
      },
      {
        "id": "580195",
        "name": "Jamal Musiala",
        "position": "AM",
        "lastStatus": "starting"
      },
      {
        "id": "1075147",
        "name": "Lennart Karl",
        "position": "AM",
        "lastStatus": "starting"
      },
      {
        "id": "1008568",
        "name": "Guido Della Rovere",
        "position": "AM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "480692",
        "name": "Luis Díaz",
        "position": "LW",
        "lastStatus": "starting"
      },
      {
        "id": "1084539",
        "name": "Wisdom Mike",
        "position": "LW",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1352339",
        "name": "Maycon Cardozo",
        "position": "LW",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "566723",
        "name": "Michael Olise",
        "position": "RW",
        "lastStatus": "sub_in"
      },
      {
        "id": "159471",
        "name": "Serge Gnabry",
        "position": "SS",
        "lastStatus": "injured"
      },
      {
        "id": "132098",
        "name": "Harry Kane",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "776890",
        "name": "Nicolas Jackson",
        "position": "CF",
        "lastStatus": "sub_in"
      }
    ]
  },
  {
    "clubId": "dortmund",
    "club": "Borussia Dortmund",
    "country": "Германия",
    "league": "Bundesliga",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/L1/2025/borussia-dortmund.json",
    "scrapedAt": "2026-06-12T23:00:59.465392+00:00",
    "players": [
      {
        "id": "257814",
        "name": "Gregor Kobel",
        "position": "GK",
        "lastStatus": "starting"
      },
      {
        "id": "76158",
        "name": "Alexander Meyer",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "94192",
        "name": "Patrick Drewes",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "388198",
        "name": "Nico Schlotterbeck",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "193004",
        "name": "Waldemar Anton",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "1074990",
        "name": "Luca Reggiani",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "284732",
        "name": "Ramy Bensebaini",
        "position": "CB",
        "lastStatus": "injured"
      },
      {
        "id": "166601",
        "name": "Niklas Süle",
        "position": "CB",
        "lastStatus": "bench"
      },
      {
        "id": "119296",
        "name": "Emre Can",
        "position": "CB",
        "lastStatus": "injured"
      },
      {
        "id": "579287",
        "name": "Daniel Svensson",
        "position": "LB",
        "lastStatus": "starting"
      },
      {
        "id": "370789",
        "name": "Julian Ryerson",
        "position": "RB",
        "lastStatus": "starting"
      },
      {
        "id": "244940",
        "name": "Salih Özcan",
        "position": "DM",
        "lastStatus": "bench"
      },
      {
        "id": "1141179",
        "name": "Mussa Kaba",
        "position": "DM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "406640",
        "name": "Felix Nmecha",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "796297",
        "name": "Jobe Bellingham",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "659459",
        "name": "Carney Chukwuemeka",
        "position": "CM",
        "lastStatus": "sub_in"
      },
      {
        "id": "106987",
        "name": "Marcel Sabitzer",
        "position": "CM",
        "lastStatus": "bench"
      },
      {
        "id": "627228",
        "name": "Yan Couto",
        "position": "RM",
        "lastStatus": "sub_in"
      },
      {
        "id": "187492",
        "name": "Julian Brandt",
        "position": "AM",
        "lastStatus": "sub_in"
      },
      {
        "id": "496094",
        "name": "Karim Adeyemi",
        "position": "RW",
        "lastStatus": "sub_in"
      },
      {
        "id": "1058359",
        "name": "Samuele Inácio",
        "position": "SS",
        "lastStatus": "starting"
      },
      {
        "id": "578392",
        "name": "Maximilian Beier",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "270541",
        "name": "Serhou Guirassy",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "505653",
        "name": "Fábio Silva",
        "position": "CF",
        "lastStatus": "sub_in"
      }
    ]
  },
  {
    "clubId": "inter",
    "club": "Inter Milan",
    "country": "Италия",
    "league": "Serie A",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/IT1/2025/inter-mailand.json",
    "scrapedAt": "2026-06-12T23:33:08.118307+00:00",
    "players": [
      {
        "id": "388516",
        "name": "Josep Martínez",
        "position": "GK",
        "lastStatus": "starting"
      },
      {
        "id": "42205",
        "name": "Yann Sommer",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "746711",
        "name": "Alessandro Calligaris",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "70580",
        "name": "Raffaele Di Gennaro",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "315853",
        "name": "Alessandro Bastoni",
        "position": "CB",
        "lastStatus": "bench"
      },
      {
        "id": "441986",
        "name": "Yann Bisseck",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "284730",
        "name": "Manuel Akanji",
        "position": "CB",
        "lastStatus": "national_team"
      },
      {
        "id": "111196",
        "name": "Stefan de Vrij",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "131075",
        "name": "Francesco Acerbi",
        "position": "CB",
        "lastStatus": "bench"
      },
      {
        "id": "898812",
        "name": "Christos Alexiou",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "198116",
        "name": "Federico Dimarco",
        "position": "LB",
        "lastStatus": "starting"
      },
      {
        "id": "585982",
        "name": "Carlos Augusto",
        "position": "LB",
        "lastStatus": "starting"
      },
      {
        "id": "988987",
        "name": "Matteo Cocchi",
        "position": "LB",
        "lastStatus": "sub_in"
      },
      {
        "id": "321528",
        "name": "Denzel Dumfries",
        "position": "RB",
        "lastStatus": "national_team"
      },
      {
        "id": "54906",
        "name": "Matteo Darmian",
        "position": "RB",
        "lastStatus": "bench"
      },
      {
        "id": "126414",
        "name": "Hakan Çalhanoğlu",
        "position": "DM",
        "lastStatus": "national_team"
      },
      {
        "id": "884228",
        "name": "Leonardo Bovo",
        "position": "DM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "255942",
        "name": "Nicolò Barella",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "668207",
        "name": "Petar Sučić",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "394300",
        "name": "Davide Frattesi",
        "position": "CM",
        "lastStatus": "injured"
      },
      {
        "id": "711976",
        "name": "Andy Diouf",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "181136",
        "name": "Piotr Zielinski",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "55735",
        "name": "Henrikh Mkhitaryan",
        "position": "CM",
        "lastStatus": "sub_in"
      },
      {
        "id": "991744",
        "name": "Luka Topalović",
        "position": "CM",
        "lastStatus": "sub_in"
      },
      {
        "id": "930780",
        "name": "Thomas Berenbruch",
        "position": "CM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "885623",
        "name": "Issiaka Kamate",
        "position": "CM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "555056",
        "name": "Iwo Kaczmarski",
        "position": "CM",
        "lastStatus": "bench"
      },
      {
        "id": "691316",
        "name": "Luis Henrique",
        "position": "RM",
        "lastStatus": "sub_in"
      },
      {
        "id": "919669",
        "name": "Simone Cinquegrano",
        "position": "RM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "406625",
        "name": "Lautaro Martínez",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "318528",
        "name": "Marcus Thuram",
        "position": "CF",
        "lastStatus": "national_team"
      },
      {
        "id": "930781",
        "name": "Pio Esposito",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "827734",
        "name": "Ange-Yoan Bonny",
        "position": "CF",
        "lastStatus": "sub_in"
      },
      {
        "id": "930768",
        "name": "Matteo Spinaccè",
        "position": "CF",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1008570",
        "name": "Mattia Mosconi",
        "position": "CF",
        "lastStatus": "bench"
      },
      {
        "id": "972475",
        "name": "Matteo Lavelli",
        "position": "CF",
        "lastStatus": "not_in_squad"
      }
    ]
  },
  {
    "clubId": "milan",
    "club": "AC Milan",
    "country": "Италия",
    "league": "Serie A",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/IT1/2025/ac-mailand.json",
    "scrapedAt": "2026-06-12T23:35:43.606719+00:00",
    "players": [
      {
        "id": "182906",
        "name": "Mike Maignan",
        "position": "GK",
        "lastStatus": "starting"
      },
      {
        "id": "96254",
        "name": "Pietro Terracciano",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "939745",
        "name": "Lorenzo Torriani",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "1185980",
        "name": "Matteo Pittarella",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "574671",
        "name": "Strahinja Pavlović",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "490384",
        "name": "Koni De Winter",
        "position": "CB",
        "lastStatus": "bench"
      },
      {
        "id": "303254",
        "name": "Fikayo Tomori",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "323167",
        "name": "Matteo Gabbia",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "897423",
        "name": "David Odogu",
        "position": "CB",
        "lastStatus": "bench"
      },
      {
        "id": "1136279",
        "name": "Valeri Vladimirov",
        "position": "CB",
        "lastStatus": "bench"
      },
      {
        "id": "887638",
        "name": "Davide Bartesaghi",
        "position": "LB",
        "lastStatus": "starting"
      },
      {
        "id": "349599",
        "name": "Pervis Estupiñán",
        "position": "LB",
        "lastStatus": "bench"
      },
      {
        "id": "990637",
        "name": "Zachary Athekame",
        "position": "RB",
        "lastStatus": "sub_in"
      },
      {
        "id": "608172",
        "name": "Ardon Jashari",
        "position": "DM",
        "lastStatus": "starting"
      },
      {
        "id": "569598",
        "name": "Youssouf Fofana",
        "position": "DM",
        "lastStatus": "starting"
      },
      {
        "id": "467992",
        "name": "Samuele Ricci",
        "position": "DM",
        "lastStatus": "bench"
      },
      {
        "id": "182913",
        "name": "Adrien Rabiot",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "202886",
        "name": "Ruben Loftus-Cheek",
        "position": "CM",
        "lastStatus": "bench"
      },
      {
        "id": "27992",
        "name": "Luka Modrić",
        "position": "CM",
        "lastStatus": "sub_in"
      },
      {
        "id": "1044818",
        "name": "Emanuele Sala",
        "position": "CM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "993212",
        "name": "Jacopo Sardo",
        "position": "CM",
        "lastStatus": "bench"
      },
      {
        "id": "381950",
        "name": "Alexis Saelemaekers",
        "position": "RM",
        "lastStatus": "starting"
      },
      {
        "id": "357164",
        "name": "Rafael Leão",
        "position": "LW",
        "lastStatus": "sub_in"
      },
      {
        "id": "315779",
        "name": "Christian Pulisic",
        "position": "RW",
        "lastStatus": "sub_in"
      },
      {
        "id": "1032683",
        "name": "Cheveyo Balentien",
        "position": "RW",
        "lastStatus": "bench"
      },
      {
        "id": "344381",
        "name": "Christopher Nkunku",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "552955",
        "name": "Santiago Gimenez",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "75489",
        "name": "Niclas Füllkrug",
        "position": "CF",
        "lastStatus": "sub_in"
      },
      {
        "id": "988999",
        "name": "Alex Castiello",
        "position": "CF",
        "lastStatus": "not_in_squad"
      }
    ]
  },
  {
    "clubId": "juventus",
    "club": "Juventus FC",
    "country": "Италия",
    "league": "Serie A",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/IT1/2025/juventus-turin.json",
    "scrapedAt": "2026-06-12T23:34:07.860479+00:00",
    "players": [
      {
        "id": "301238",
        "name": "Michele Di Gregorio",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "110923",
        "name": "Mattia Perin",
        "position": "GK",
        "lastStatus": "starting"
      },
      {
        "id": "942058",
        "name": "Stefano Mangiapoco",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "75411",
        "name": "Carlo Pinsoglio",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "925864",
        "name": "Matteo Fuscaldo",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "650989",
        "name": "Simone Scaglia",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1077199",
        "name": "Raffaele Huli",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1124104",
        "name": "Riccardo Radu",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "516716",
        "name": "Bremer",
        "position": "CB",
        "lastStatus": "absent"
      },
      {
        "id": "585949",
        "name": "Pierre Kalulu",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "480116",
        "name": "Lloyd Kelly",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "509022",
        "name": "Federico Gatti",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "1035426",
        "name": "Niccolò Rizzo",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "459658",
        "name": "Andrea Cambiaso",
        "position": "LB",
        "lastStatus": "starting"
      },
      {
        "id": "686965",
        "name": "Juan Cabal",
        "position": "LB",
        "lastStatus": "bench"
      },
      {
        "id": "496745",
        "name": "Emil Holm",
        "position": "RB",
        "lastStatus": "sub_in"
      },
      {
        "id": "265088",
        "name": "Manuel Locatelli",
        "position": "DM",
        "lastStatus": "starting"
      },
      {
        "id": "360518",
        "name": "Teun Koopmeiners",
        "position": "DM",
        "lastStatus": "sub_in"
      },
      {
        "id": "463618",
        "name": "Khéphren Thuram",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "332697",
        "name": "Weston McKennie",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "571607",
        "name": "Fabio Miretti",
        "position": "CM",
        "lastStatus": "sub_in"
      },
      {
        "id": "161011",
        "name": "Filip Kostić",
        "position": "LM",
        "lastStatus": "bench"
      },
      {
        "id": "944570",
        "name": "Vasilije Adžić",
        "position": "AM",
        "lastStatus": "bench"
      },
      {
        "id": "845654",
        "name": "Kenan Yıldız",
        "position": "LW",
        "lastStatus": "bench"
      },
      {
        "id": "216569",
        "name": "Jérémie Boga",
        "position": "LW",
        "lastStatus": "starting"
      },
      {
        "id": "487474",
        "name": "Francisco Conceição",
        "position": "RW",
        "lastStatus": "starting"
      },
      {
        "id": "496857",
        "name": "Edon Zhegrova",
        "position": "RW",
        "lastStatus": "sub_in"
      },
      {
        "id": "925848",
        "name": "Lorenzo Anghelè",
        "position": "SS",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "357498",
        "name": "Dušan Vlahović",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "533738",
        "name": "Jonathan David",
        "position": "CF",
        "lastStatus": "sub_in"
      },
      {
        "id": "368887",
        "name": "Loïs Openda",
        "position": "CF",
        "lastStatus": "bench"
      },
      {
        "id": "191891",
        "name": "Arkadiusz Milik",
        "position": "CF",
        "lastStatus": "bench"
      }
    ]
  },
  {
    "clubId": "psg",
    "club": "Paris Saint-Germain",
    "country": "Франция",
    "league": "Ligue 1",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/FR1/2025/fc-paris-saint-germain.json",
    "scrapedAt": "2026-06-12T22:43:47.870902+00:00",
    "players": [
      {
        "id": "318470",
        "name": "Matvey Safonov",
        "position": "GK",
        "lastStatus": "starting"
      },
      {
        "id": "463600",
        "name": "Lucas Chevalier",
        "position": "GK",
        "lastStatus": "injured"
      },
      {
        "id": "1041614",
        "name": "Renato Marin",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "825443",
        "name": "Bilal Laurendon",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1077676",
        "name": "Martin James",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "661171",
        "name": "Willian Pacho",
        "position": "CB",
        "lastStatus": "injured"
      },
      {
        "id": "659089",
        "name": "Ilya Zabarnyi",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "181767",
        "name": "Marquinhos",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "872171",
        "name": "Lucas Beraldo",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "1314562",
        "name": "Dimitri Lucea",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "616341",
        "name": "Nuno Mendes",
        "position": "LB",
        "lastStatus": "injured"
      },
      {
        "id": "281963",
        "name": "Lucas Hernández",
        "position": "LB",
        "lastStatus": "bench"
      },
      {
        "id": "994247",
        "name": "Thomas Cordier",
        "position": "LB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "398073",
        "name": "Achraf Hakimi",
        "position": "RB",
        "lastStatus": "injured"
      },
      {
        "id": "487469",
        "name": "Vitinha",
        "position": "DM",
        "lastStatus": "starting"
      },
      {
        "id": "670681",
        "name": "João Neves",
        "position": "CM",
        "lastStatus": "sub_in"
      },
      {
        "id": "810092",
        "name": "Warren Zaïre-Emery",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "903693",
        "name": "Senny Mayulu",
        "position": "CM",
        "lastStatus": "sub_in"
      },
      {
        "id": "350219",
        "name": "Fabián Ruiz",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "1053151",
        "name": "Yanis Khafi",
        "position": "CM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "557149",
        "name": "Kang-in Lee",
        "position": "AM",
        "lastStatus": "sub_in"
      },
      {
        "id": "1071596",
        "name": "Dro Fernández",
        "position": "AM",
        "lastStatus": "sub_in"
      },
      {
        "id": "1310346",
        "name": "Wassim Slama",
        "position": "AM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "502670",
        "name": "Khvicha Kvaratskhelia",
        "position": "LW",
        "lastStatus": "starting"
      },
      {
        "id": "708265",
        "name": "Bradley Barcola",
        "position": "LW",
        "lastStatus": "starting"
      },
      {
        "id": "1053208",
        "name": "Quentin Ndjantou",
        "position": "LW",
        "lastStatus": "injured"
      },
      {
        "id": "914562",
        "name": "Désiré Doué",
        "position": "RW",
        "lastStatus": "bench"
      },
      {
        "id": "1185888",
        "name": "Ibrahim Mbaye",
        "position": "RW",
        "lastStatus": "sub_in"
      },
      {
        "id": "288230",
        "name": "Ousmane Dembélé",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "550550",
        "name": "Gonçalo Ramos",
        "position": "CF",
        "lastStatus": "sub_in"
      }
    ]
  },
  {
    "clubId": "benfica",
    "club": "SL Benfica",
    "country": "Португалия",
    "league": "Primeira Liga",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/PO1/2025/benfica-lissabon.json",
    "scrapedAt": "2026-06-12T23:55:52.299430+00:00",
    "players": [
      {
        "id": "537844",
        "name": "Anatoliy Trubin",
        "position": "GK",
        "lastStatus": "starting"
      },
      {
        "id": "504072",
        "name": "Samuel Soares",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "801446",
        "name": "Diogo Ferreira",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "504087",
        "name": "Tomás Araújo",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "650568",
        "name": "António Silva",
        "position": "CB",
        "lastStatus": "bench"
      },
      {
        "id": "866086",
        "name": "Joshua Wynder",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "54781",
        "name": "Nicolás Otamendi",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "605396",
        "name": "Samuel Dahl",
        "position": "LB",
        "lastStatus": "starting"
      },
      {
        "id": "611855",
        "name": "Sidny Lopes Cabral",
        "position": "LB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1233701",
        "name": "José Neto",
        "position": "LB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "519184",
        "name": "Amar Dedić",
        "position": "RB",
        "lastStatus": "sub_in"
      },
      {
        "id": "452607",
        "name": "Alexander Bah",
        "position": "RB",
        "lastStatus": "starting"
      },
      {
        "id": "1050218",
        "name": "Kevin Pinto",
        "position": "RB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "735573",
        "name": "Richard Ríos",
        "position": "DM",
        "lastStatus": "starting"
      },
      {
        "id": "671915",
        "name": "Enzo Barrenechea",
        "position": "DM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "699592",
        "name": "Manu Silva",
        "position": "DM",
        "lastStatus": "sub_in"
      },
      {
        "id": "357233",
        "name": "Leandro Barreiro",
        "position": "CM",
        "lastStatus": "sub_in"
      },
      {
        "id": "223367",
        "name": "Fredrik Aursnes",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "670718",
        "name": "Diogo Prioste",
        "position": "CM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "623325",
        "name": "Georgiy Sudakov",
        "position": "AM",
        "lastStatus": "bench"
      },
      {
        "id": "670103",
        "name": "Andreas Schjelderup",
        "position": "LW",
        "lastStatus": "starting"
      },
      {
        "id": "139396",
        "name": "Bruma",
        "position": "LW",
        "lastStatus": "sub_in"
      },
      {
        "id": "1000674",
        "name": "Gianluca Prestianni",
        "position": "RW",
        "lastStatus": "starting"
      },
      {
        "id": "303259",
        "name": "Dodi Lukébakio",
        "position": "RW",
        "lastStatus": "sub_in"
      },
      {
        "id": "238055",
        "name": "Rafa Silva",
        "position": "SS",
        "lastStatus": "starting"
      },
      {
        "id": "324503",
        "name": "Vangelis Pavlidis",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "548028",
        "name": "Franjo Ivanović",
        "position": "CF",
        "lastStatus": "bench"
      },
      {
        "id": "617267",
        "name": "Henrique Araújo",
        "position": "CF",
        "lastStatus": "not_in_squad"
      }
    ]
  },
  {
    "clubId": "athletic-bilbao",
    "club": "Athletic Bilbao",
    "country": "Испания",
    "league": "La Liga",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/ES1/2025/athletic-bilbao.json",
    "scrapedAt": "2026-06-12T23:19:41.350978+00:00",
    "players": [
      {
        "id": "262396",
        "name": "Unai Simón",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "834483",
        "name": "Álex Padilla",
        "position": "GK",
        "lastStatus": "starting"
      },
      {
        "id": "1056956",
        "name": "Mikel Santos",
        "position": "GK",
        "lastStatus": "not_at_club"
      },
      {
        "id": "524000",
        "name": "Dani Vivian",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "176553",
        "name": "Aymeric Laporte",
        "position": "CB",
        "lastStatus": "bench"
      },
      {
        "id": "591916",
        "name": "Aitor Paredes",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "1124051",
        "name": "Iker Monreal",
        "position": "CB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "255488",
        "name": "Yeray Álvarez",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "834485",
        "name": "Unai Egiluz",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "905015",
        "name": "Jon de Luis",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "710671",
        "name": "Adama Boiro",
        "position": "LB",
        "lastStatus": "starting"
      },
      {
        "id": "61812",
        "name": "Yuri Berchiche",
        "position": "LB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "488626",
        "name": "Jesús Areso",
        "position": "RB",
        "lastStatus": "bench"
      },
      {
        "id": "289255",
        "name": "Andoni Gorosabel",
        "position": "RB",
        "lastStatus": "sub_in"
      },
      {
        "id": "255501",
        "name": "Iñigo Lekue",
        "position": "RB",
        "lastStatus": "sub_in"
      },
      {
        "id": "300168",
        "name": "Mikel Vesga",
        "position": "DM",
        "lastStatus": "sub_in"
      },
      {
        "id": "938729",
        "name": "Mikel Jauregizar",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "625047",
        "name": "Beñat Prados",
        "position": "CM",
        "lastStatus": "bench"
      },
      {
        "id": "834491",
        "name": "Alejandro Rego",
        "position": "CM",
        "lastStatus": "sub_in"
      },
      {
        "id": "1312698",
        "name": "Selton Sánchez",
        "position": "CM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "126751",
        "name": "Iñigo Ruiz de Galarreta",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "610083",
        "name": "Unai Vencedor",
        "position": "CM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "979324",
        "name": "Eder García",
        "position": "CM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "571020",
        "name": "Oihan Sancet",
        "position": "AM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "834752",
        "name": "Unai Gómez",
        "position": "AM",
        "lastStatus": "starting"
      },
      {
        "id": "938730",
        "name": "Ibon Sánchez",
        "position": "AM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "709187",
        "name": "Nico Williams",
        "position": "LW",
        "lastStatus": "injured"
      },
      {
        "id": "338425",
        "name": "Álex Berenguer",
        "position": "LW",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "668183",
        "name": "Nico Serrano",
        "position": "LW",
        "lastStatus": "bench"
      },
      {
        "id": "1038182",
        "name": "Elijah Gift",
        "position": "LW",
        "lastStatus": "bench"
      },
      {
        "id": "255508",
        "name": "Iñaki Williams",
        "position": "RW",
        "lastStatus": "starting"
      },
      {
        "id": "563137",
        "name": "Robert Navarro",
        "position": "RW",
        "lastStatus": "starting"
      },
      {
        "id": "1120228",
        "name": "Endika Buján",
        "position": "RW",
        "lastStatus": "not_at_club"
      },
      {
        "id": "340205",
        "name": "Gorka Guruzeta",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "1054934",
        "name": "Maroan Sannadi",
        "position": "CF",
        "lastStatus": "bench"
      },
      {
        "id": "610622",
        "name": "Urko Izeta",
        "position": "CF",
        "lastStatus": "sub_in"
      },
      {
        "id": "1056970",
        "name": "Asier Hierro",
        "position": "CF",
        "lastStatus": "not_at_club"
      }
    ]
  },
  {
    "clubId": "ca-osasuna",
    "club": "CA Osasuna",
    "country": "Испания",
    "league": "La Liga",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/ES1/2025/ca-osasuna.json",
    "scrapedAt": "2026-06-12T23:27:30.089073+00:00",
    "players": [
      {
        "id": "248738",
        "name": "Sergio Herrera",
        "position": "GK",
        "lastStatus": "starting"
      },
      {
        "id": "118997",
        "name": "Aitor Fernández",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "890817",
        "name": "Dimitrios Stamatakis",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "929864",
        "name": "Rafa Fernández",
        "position": "GK",
        "lastStatus": "not_at_club"
      },
      {
        "id": "541555",
        "name": "Enzo Boyomo",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "555500",
        "name": "Jorge Herrando",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "449796",
        "name": "Alejandro Catena",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "705881",
        "name": "Mikel Serrano",
        "position": "CB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "658115",
        "name": "Abel Bretones",
        "position": "LB",
        "lastStatus": "bench"
      },
      {
        "id": "448628",
        "name": "Javi Galán",
        "position": "LB",
        "lastStatus": "starting"
      },
      {
        "id": "169497",
        "name": "Juan Cruz",
        "position": "LB",
        "lastStatus": "bench"
      },
      {
        "id": "834486",
        "name": "Raúl Chasco",
        "position": "LB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "441170",
        "name": "Valentin Rosier",
        "position": "RB",
        "lastStatus": "starting"
      },
      {
        "id": "1065442",
        "name": "Iñigo Arguibide",
        "position": "RB",
        "lastStatus": "bench"
      },
      {
        "id": "213670",
        "name": "Lucas Torró",
        "position": "DM",
        "lastStatus": "starting"
      },
      {
        "id": "710677",
        "name": "Iker Muñoz",
        "position": "DM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "552425",
        "name": "Jon Moncayola",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "1038512",
        "name": "Asier Osambela",
        "position": "CM",
        "lastStatus": "sub_in"
      },
      {
        "id": "1065440",
        "name": "Mauro Echegoyen",
        "position": "CM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "634131",
        "name": "Aimar Oroz",
        "position": "AM",
        "lastStatus": "starting"
      },
      {
        "id": "175449",
        "name": "Moi Gómez",
        "position": "AM",
        "lastStatus": "sub_in"
      },
      {
        "id": "935231",
        "name": "Víctor Muñoz",
        "position": "LW",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "624942",
        "name": "Raúl Moro",
        "position": "LW",
        "lastStatus": "sub_in"
      },
      {
        "id": "188888",
        "name": "Sheraldo Becker",
        "position": "LW",
        "lastStatus": "not_included"
      },
      {
        "id": "213260",
        "name": "Rubén García",
        "position": "RW",
        "lastStatus": "sub_in"
      },
      {
        "id": "298575",
        "name": "Kike Barja",
        "position": "RW",
        "lastStatus": "sub_in"
      },
      {
        "id": "710679",
        "name": "Iker Benito",
        "position": "RW",
        "lastStatus": "bench"
      },
      {
        "id": "631002",
        "name": "Raúl García",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "46413",
        "name": "Ante Budimir",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "1164330",
        "name": "Martin Pedroarena",
        "position": "CF",
        "lastStatus": "not_at_club"
      }
    ]
  },
  {
    "clubId": "celta-vigo",
    "club": "Celta de Vigo",
    "country": "Испания",
    "league": "La Liga",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/ES1/2025/celta-vigo.json",
    "scrapedAt": "2026-06-12T23:20:33.075969+00:00",
    "players": [
      {
        "id": "303657",
        "name": "Ionuț Radu",
        "position": "GK",
        "lastStatus": "starting"
      },
      {
        "id": "297194",
        "name": "Iván Villar",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "1076815",
        "name": "Javi Rodríguez",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "258987",
        "name": "Carl Starfelt",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "939374",
        "name": "Yoel Lago",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "636093",
        "name": "Carlos Domínguez",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "638124",
        "name": "Manu Fernández",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "112515",
        "name": "Marcos Alonso",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "358250",
        "name": "Joseph Aidoo",
        "position": "CB",
        "lastStatus": "bench"
      },
      {
        "id": "271455",
        "name": "Mihailo Ristic",
        "position": "LB",
        "lastStatus": "bench"
      },
      {
        "id": "331505",
        "name": "Óscar Mingueza",
        "position": "RB",
        "lastStatus": "sub_in"
      },
      {
        "id": "545647",
        "name": "Sergio Carreira",
        "position": "RB",
        "lastStatus": "starting"
      },
      {
        "id": "652331",
        "name": "Javi Rueda",
        "position": "RB",
        "lastStatus": "starting"
      },
      {
        "id": "626953",
        "name": "Álvaro Núñez",
        "position": "RB",
        "lastStatus": "bench"
      },
      {
        "id": "715628",
        "name": "Damián Rodríguez",
        "position": "DM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "617074",
        "name": "Ilaix Moriba",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "892932",
        "name": "Miguel Román",
        "position": "CM",
        "lastStatus": "injured"
      },
      {
        "id": "892221",
        "name": "Hugo Sotelo",
        "position": "CM",
        "lastStatus": "bench"
      },
      {
        "id": "423444",
        "name": "Fran Beltrán",
        "position": "CM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "143812",
        "name": "Matías Vecino",
        "position": "CM",
        "lastStatus": "sub_in"
      },
      {
        "id": "1262787",
        "name": "Hugo Burcio",
        "position": "CM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1293040",
        "name": "Andrés Antañón",
        "position": "CM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "1064471",
        "name": "Fer López",
        "position": "AM",
        "lastStatus": "starting"
      },
      {
        "id": "764859",
        "name": "Williot Swedberg",
        "position": "LW",
        "lastStatus": "starting"
      },
      {
        "id": "713644",
        "name": "Bryan Zaragoza",
        "position": "LW",
        "lastStatus": "not_included"
      },
      {
        "id": "892929",
        "name": "Hugo Álvarez",
        "position": "LW",
        "lastStatus": "sub_in"
      },
      {
        "id": "341110",
        "name": "Franco Cervi",
        "position": "LW",
        "lastStatus": "bench"
      },
      {
        "id": "1064465",
        "name": "Ángel Arcos",
        "position": "LW",
        "lastStatus": "not_at_club"
      },
      {
        "id": "599231",
        "name": "Ferran Jutglà",
        "position": "RW",
        "lastStatus": "sub_in"
      },
      {
        "id": "960571",
        "name": "Jones El-Abdellaoui",
        "position": "RW",
        "lastStatus": "bench"
      },
      {
        "id": "707279",
        "name": "Hugo González",
        "position": "RW",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "905997",
        "name": "Pablo Durán",
        "position": "CF",
        "lastStatus": "sub_in"
      },
      {
        "id": "278359",
        "name": "Borja Iglesias",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "72047",
        "name": "Iago Aspas",
        "position": "CF",
        "lastStatus": "starting"
      }
    ]
  },
  {
    "clubId": "deportivo-alaves",
    "club": "Deportivo Alavés",
    "country": "Испания",
    "league": "La Liga",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/ES1/2025/deportivo-alaves.json",
    "scrapedAt": "2026-06-12T23:31:09.504174+00:00",
    "players": [
      {
        "id": "298197",
        "name": "Antonio Sivera",
        "position": "GK",
        "lastStatus": "starting"
      },
      {
        "id": "1063990",
        "name": "Grégoire Swiderski",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "54217",
        "name": "Raúl Fernández",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "948253",
        "name": "Rubén Montero",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "580560",
        "name": "Jon Pacheco",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "694509",
        "name": "Moussa Diarra",
        "position": "CB",
        "lastStatus": "not_included"
      },
      {
        "id": "581326",
        "name": "Ville Koski",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "258475",
        "name": "Nikola Maras",
        "position": "CB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "941155",
        "name": "Xanet Oláiz",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1064116",
        "name": "Paco Sanz",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "533354",
        "name": "Facundo Garcés",
        "position": "CB",
        "lastStatus": "suspended"
      },
      {
        "id": "591957",
        "name": "Victor Parada",
        "position": "LB",
        "lastStatus": "starting"
      },
      {
        "id": "741289",
        "name": "Youssef Enríquez",
        "position": "LB",
        "lastStatus": "bench"
      },
      {
        "id": "533568",
        "name": "Nahuel Tenaglia",
        "position": "RB",
        "lastStatus": "starting"
      },
      {
        "id": "175446",
        "name": "Jonny Otto",
        "position": "RB",
        "lastStatus": "bench"
      },
      {
        "id": "1064391",
        "name": "Egoitz Muñoz",
        "position": "RB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "945760",
        "name": "Carlos Ballestero",
        "position": "RB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "495621",
        "name": "Antonio Blanco",
        "position": "DM",
        "lastStatus": "starting"
      },
      {
        "id": "431190",
        "name": "Carlos Protesoni",
        "position": "DM",
        "lastStatus": "sub_in"
      },
      {
        "id": "785353",
        "name": "Pablo Ibáñez",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "284854",
        "name": "Carles Aleñá",
        "position": "CM",
        "lastStatus": "bench"
      },
      {
        "id": "465967",
        "name": "Ander Guevara",
        "position": "CM",
        "lastStatus": "sub_in"
      },
      {
        "id": "289257",
        "name": "Jon Guridi",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "798114",
        "name": "Calebe",
        "position": "AM",
        "lastStatus": "bench"
      },
      {
        "id": "165007",
        "name": "Denis Suárez",
        "position": "AM",
        "lastStatus": "sub_in"
      },
      {
        "id": "895591",
        "name": "Lander Pinillos",
        "position": "AM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "718034",
        "name": "Abde Rebbach",
        "position": "LW",
        "lastStatus": "starting"
      },
      {
        "id": "1427912",
        "name": "Izei Hernández",
        "position": "LW",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "540536",
        "name": "Carlos Vicente",
        "position": "RW",
        "lastStatus": "not_included"
      },
      {
        "id": "1124136",
        "name": "Ángel Pérez",
        "position": "RW",
        "lastStatus": "starting"
      },
      {
        "id": "302371",
        "name": "Toni Martínez",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "334222",
        "name": "Lucas Boyé",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "620696",
        "name": "Ibrahim Diabate",
        "position": "CF",
        "lastStatus": "sub_in"
      },
      {
        "id": "935232",
        "name": "Aitor Mañas",
        "position": "CF",
        "lastStatus": "bench"
      },
      {
        "id": "225020",
        "name": "Mariano Díaz",
        "position": "CF",
        "lastStatus": "bench"
      },
      {
        "id": "1035156",
        "name": "Diego Morcillo",
        "position": "CF",
        "lastStatus": "not_in_squad"
      }
    ]
  },
  {
    "clubId": "espanyol-barcelona",
    "club": "RCD Espanyol Barcelona",
    "country": "Испания",
    "league": "La Liga",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/ES1/2025/espanyol-barcelona.json",
    "scrapedAt": "2026-06-12T23:25:28.263125+00:00",
    "players": [
      {
        "id": "94308",
        "name": "Marko Dmitrovic",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "628487",
        "name": "Ángel Fortuño",
        "position": "GK",
        "lastStatus": "starting"
      },
      {
        "id": "1141128",
        "name": "Llorenç Serred",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "605528",
        "name": "Pol Tristán",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "692070",
        "name": "Clemens Riedel",
        "position": "CB",
        "lastStatus": "bench"
      },
      {
        "id": "357884",
        "name": "Fernando Calero",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "583510",
        "name": "Miguel Rubio",
        "position": "CB",
        "lastStatus": "bench"
      },
      {
        "id": "629511",
        "name": "Pablo Ramón",
        "position": "CB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "102423",
        "name": "Leandro Cabrera",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "1154003",
        "name": "Adama Timera",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "709372",
        "name": "Carlos Romero",
        "position": "LB",
        "lastStatus": "starting"
      },
      {
        "id": "819590",
        "name": "José Salinas",
        "position": "LB",
        "lastStatus": "bench"
      },
      {
        "id": "1204959",
        "name": "Roger Hinojo",
        "position": "LB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "822331",
        "name": "Omar El Hilali",
        "position": "RB",
        "lastStatus": "sub_in"
      },
      {
        "id": "705813",
        "name": "Rubén Sánchez",
        "position": "RB",
        "lastStatus": "starting"
      },
      {
        "id": "625651",
        "name": "Urko González de Zárate",
        "position": "DM",
        "lastStatus": "starting"
      },
      {
        "id": "243879",
        "name": "Charles Pickel",
        "position": "DM",
        "lastStatus": "bench"
      },
      {
        "id": "412045",
        "name": "Pol Lozano",
        "position": "CM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "506248",
        "name": "Edu Expósito",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "783396",
        "name": "Ramón Terrats",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "1178721",
        "name": "Rafel Bauzà",
        "position": "CM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "1254170",
        "name": "Ferran Gómez",
        "position": "CM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1310047",
        "name": "Miguel Londoño",
        "position": "CM",
        "lastStatus": "bench"
      },
      {
        "id": "946279",
        "name": "Javi Hernández",
        "position": "AM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "408471",
        "name": "Javi Puado",
        "position": "LW",
        "lastStatus": "injured"
      },
      {
        "id": "225593",
        "name": "Pere Milla",
        "position": "LW",
        "lastStatus": "sub_in"
      },
      {
        "id": "1101356",
        "name": "Lluc Castell",
        "position": "LW",
        "lastStatus": "sub_in"
      },
      {
        "id": "946269",
        "name": "Alex Almansa",
        "position": "LW",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "647435",
        "name": "Tyrhys Dolan",
        "position": "RW",
        "lastStatus": "sub_in"
      },
      {
        "id": "358032",
        "name": "Cyril Ngonge",
        "position": "RW",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "745461",
        "name": "Luca Koleosho",
        "position": "RW",
        "lastStatus": "not_included"
      },
      {
        "id": "628498",
        "name": "Jofre Carreras",
        "position": "RW",
        "lastStatus": "starting"
      },
      {
        "id": "834744",
        "name": "Antoniu Roca",
        "position": "RW",
        "lastStatus": "starting"
      },
      {
        "id": "720518",
        "name": "Roberto Fernández",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "93936",
        "name": "Kike García",
        "position": "CF",
        "lastStatus": "sub_in"
      }
    ]
  },
  {
    "clubId": "fc-elche",
    "club": "Elche CF",
    "country": "Испания",
    "league": "La Liga",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/ES1/2025/fc-elche.json",
    "scrapedAt": "2026-06-12T23:28:27.502681+00:00",
    "players": [
      {
        "id": "283170",
        "name": "Iñaki Peña",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "618801",
        "name": "Alejandro Iturbe",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "144128",
        "name": "Matías Dituro",
        "position": "GK",
        "lastStatus": "starting"
      },
      {
        "id": "452483",
        "name": "David Affengruber",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "495625",
        "name": "Víctor Chust",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "627290",
        "name": "John Donald",
        "position": "CB",
        "lastStatus": "sub_in"
      },
      {
        "id": "435493",
        "name": "Bambo Diaby",
        "position": "CB",
        "lastStatus": "not_included"
      },
      {
        "id": "203043",
        "name": "Pedro Bigas",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "1456236",
        "name": "David Delgado",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1118682",
        "name": "Pablo Felipe",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1183198",
        "name": "Bema Sina",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "501418",
        "name": "Adrià Pedrosa",
        "position": "LB",
        "lastStatus": "sub_in"
      },
      {
        "id": "412829",
        "name": "Léo Pétrot",
        "position": "LB",
        "lastStatus": "sub_in"
      },
      {
        "id": "337946",
        "name": "Jairo Izquierdo",
        "position": "LB",
        "lastStatus": "not_included"
      },
      {
        "id": "1064504",
        "name": "Nico Salvador",
        "position": "LB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1196497",
        "name": "Albert Niculăesei",
        "position": "LB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "937955",
        "name": "Héctor Fort",
        "position": "RB",
        "lastStatus": "sub_in"
      },
      {
        "id": "962125",
        "name": "Buba Sangaré",
        "position": "RB",
        "lastStatus": "starting"
      },
      {
        "id": "626953",
        "name": "Álvaro Núñez",
        "position": "RB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "1483854",
        "name": "Alex Herráiz",
        "position": "RB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "531404",
        "name": "Marc Aguado",
        "position": "DM",
        "lastStatus": "starting"
      },
      {
        "id": "909758",
        "name": "Federico Redondo",
        "position": "DM",
        "lastStatus": "bench"
      },
      {
        "id": "961297",
        "name": "Rodrigo Mendoza",
        "position": "CM",
        "lastStatus": "not_included"
      },
      {
        "id": "217144",
        "name": "Aleix Febas",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "549027",
        "name": "Martim Neto",
        "position": "CM",
        "lastStatus": "bench"
      },
      {
        "id": "398163",
        "name": "Gonzalo Villar",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "1186240",
        "name": "Antonio Martínez",
        "position": "CM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "548188",
        "name": "Germán Valera",
        "position": "LW",
        "lastStatus": "starting"
      },
      {
        "id": "912392",
        "name": "Lucas Cepeda",
        "position": "LW",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "339816",
        "name": "Tete Morente",
        "position": "LW",
        "lastStatus": "starting"
      },
      {
        "id": "706947",
        "name": "Yago Santiago",
        "position": "LW",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "342048",
        "name": "Grady Diangana",
        "position": "RW",
        "lastStatus": "bench"
      },
      {
        "id": "277533",
        "name": "Josan",
        "position": "RW",
        "lastStatus": "bench"
      },
      {
        "id": "935300",
        "name": "Piri",
        "position": "RW",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1186244",
        "name": "Álex Sánchez",
        "position": "RW",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1064506",
        "name": "Adam Boayar",
        "position": "SS",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1064538",
        "name": "Ali Houary",
        "position": "SS",
        "lastStatus": "not_included"
      },
      {
        "id": "948275",
        "name": "Álvaro Rodríguez",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "361254",
        "name": "Rafa Mir",
        "position": "CF",
        "lastStatus": "bench"
      },
      {
        "id": "198008",
        "name": "André Silva",
        "position": "CF",
        "lastStatus": "sub_in"
      },
      {
        "id": "527972",
        "name": "Mourad El Ghezouani",
        "position": "CF",
        "lastStatus": "not_included"
      },
      {
        "id": "1060657",
        "name": "Juan Piera",
        "position": "CF",
        "lastStatus": "not_in_squad"
      }
    ]
  },
  {
    "clubId": "fc-getafe",
    "club": "Getafe CF",
    "country": "Испания",
    "league": "La Liga",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/ES1/2025/fc-getafe.json",
    "scrapedAt": "2026-06-12T23:30:25.220869+00:00",
    "players": [
      {
        "id": "226012",
        "name": "David Soria",
        "position": "GK",
        "lastStatus": "starting"
      },
      {
        "id": "339079",
        "name": "Jiri Letacek",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "1298885",
        "name": "Diego Ferrer",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1135452",
        "name": "Jorge Benito",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "559979",
        "name": "Abdel Abqar",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "741142",
        "name": "Zaid Romero",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "898352",
        "name": "Sebastián Boselli",
        "position": "CB",
        "lastStatus": "bench"
      },
      {
        "id": "221150",
        "name": "Dakonam Djené",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "257376",
        "name": "Domingos Duarte",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "735895",
        "name": "Lucas Laso",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "854056",
        "name": "Marc Vilaplana",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "249513",
        "name": "Diego Rico",
        "position": "LB",
        "lastStatus": "bench"
      },
      {
        "id": "1268764",
        "name": "Davinchi",
        "position": "LB",
        "lastStatus": "sub_in"
      },
      {
        "id": "1013810",
        "name": "Jorge Montes",
        "position": "LB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "390688",
        "name": "Juan Iglesias",
        "position": "RB",
        "lastStatus": "starting"
      },
      {
        "id": "76467",
        "name": "Kiko Femenía",
        "position": "RB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1164331",
        "name": "Ismael Bekhoucha",
        "position": "RB",
        "lastStatus": "bench"
      },
      {
        "id": "111508",
        "name": "Allan Nyom",
        "position": "RB",
        "lastStatus": "starting"
      },
      {
        "id": "948273",
        "name": "Mario Martín",
        "position": "DM",
        "lastStatus": "starting"
      },
      {
        "id": "469669",
        "name": "Yvan Neyou",
        "position": "DM",
        "lastStatus": "not_included"
      },
      {
        "id": "290249",
        "name": "Mauro Arambarri",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "281989",
        "name": "Luis Milla",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "282421",
        "name": "Javi Muñoz",
        "position": "CM",
        "lastStatus": "bench"
      },
      {
        "id": "845638",
        "name": "Damián Cáceres",
        "position": "CM",
        "lastStatus": "sub_in"
      },
      {
        "id": "945767",
        "name": "Hugo Solozábal",
        "position": "CM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1313717",
        "name": "Adrián Riquelme",
        "position": "CM",
        "lastStatus": "bench"
      },
      {
        "id": "1118201",
        "name": "Alejandro Mestanza",
        "position": "AM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1255616",
        "name": "Alberto Risco",
        "position": "AM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "419648",
        "name": "Veljko Birmancevic",
        "position": "LW",
        "lastStatus": "bench"
      },
      {
        "id": "1061122",
        "name": "Adrián Liso",
        "position": "LW",
        "lastStatus": "starting"
      },
      {
        "id": "1033005",
        "name": "Coba da Costa",
        "position": "LW",
        "lastStatus": "not_at_club"
      },
      {
        "id": "126737",
        "name": "Juanmi",
        "position": "LW",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1184137",
        "name": "Yassin Tallal",
        "position": "LW",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "696764",
        "name": "Abu Kamara",
        "position": "RW",
        "lastStatus": "bench"
      },
      {
        "id": "434990",
        "name": "Álex Sola",
        "position": "RW",
        "lastStatus": "not_included"
      },
      {
        "id": "560705",
        "name": "Álex Sancris",
        "position": "RW",
        "lastStatus": "bench"
      },
      {
        "id": "710004",
        "name": "Peter Federico",
        "position": "RW",
        "lastStatus": "not_at_club"
      },
      {
        "id": "1124005",
        "name": "Christantus Uche",
        "position": "CF",
        "lastStatus": "not_included"
      },
      {
        "id": "640109",
        "name": "Martín Satriano",
        "position": "CF",
        "lastStatus": "absent"
      },
      {
        "id": "298976",
        "name": "Borja Mayoral",
        "position": "CF",
        "lastStatus": "bench"
      },
      {
        "id": "844516",
        "name": "Luis Vázquez",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "1000135",
        "name": "Joselu Pérez",
        "position": "CF",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1122007",
        "name": "Mykyta Aleksandrov",
        "position": "CF",
        "lastStatus": "not_in_squad"
      }
    ]
  },
  {
    "clubId": "fc-girona",
    "club": "Girona FC",
    "country": "Испания",
    "league": "La Liga",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/ES1/2025/fc-girona.json",
    "scrapedAt": "2026-06-12T23:23:53.624465+00:00",
    "players": [
      {
        "id": "205927",
        "name": "Dominik Livakovic",
        "position": "GK",
        "lastStatus": "not_at_club"
      },
      {
        "id": "74857",
        "name": "Marc-André ter Stegen",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "195488",
        "name": "Paulo Gazzaniga",
        "position": "GK",
        "lastStatus": "starting"
      },
      {
        "id": "199321",
        "name": "Rubén Blanco",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "1169436",
        "name": "Vladyslav Krapyvtsov",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "120705",
        "name": "Juan Carlos",
        "position": "GK",
        "lastStatus": "injured"
      },
      {
        "id": "1135665",
        "name": "Aleksandar Andreev",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1005575",
        "name": "Vitor Reis",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "345911",
        "name": "Ladislav Krejčí",
        "position": "CB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "632896",
        "name": "Alejandro Francés",
        "position": "CB",
        "lastStatus": "bench"
      },
      {
        "id": "12282",
        "name": "Daley Blind",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "129444",
        "name": "David López",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "1184096",
        "name": "Antonio Salguero",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "193098",
        "name": "Álex Moreno",
        "position": "LB",
        "lastStatus": "starting"
      },
      {
        "id": "826224",
        "name": "Arnau Martínez",
        "position": "RB",
        "lastStatus": "starting"
      },
      {
        "id": "834487",
        "name": "Hugo Rincón",
        "position": "RB",
        "lastStatus": "sub_in"
      },
      {
        "id": "1060647",
        "name": "Pol Arnau",
        "position": "RB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1319444",
        "name": "Gibert Jordana",
        "position": "RB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "35047",
        "name": "Axel Witsel",
        "position": "DM",
        "lastStatus": "starting"
      },
      {
        "id": "593482",
        "name": "Azzedine Ounahi",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "378293",
        "name": "Yangel Herrera",
        "position": "CM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "341278",
        "name": "Iván Martín",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "742521",
        "name": "Jhon Solís",
        "position": "CM",
        "lastStatus": "not_included"
      },
      {
        "id": "423444",
        "name": "Fran Beltrán",
        "position": "CM",
        "lastStatus": "sub_in"
      },
      {
        "id": "288255",
        "name": "Donny van de Beek",
        "position": "CM",
        "lastStatus": "bench"
      },
      {
        "id": "974251",
        "name": "Lass Kourouma",
        "position": "CM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "994536",
        "name": "Claudio Echeverri",
        "position": "AM",
        "lastStatus": "sub_in"
      },
      {
        "id": "205562",
        "name": "Thomas Lemar",
        "position": "AM",
        "lastStatus": "sub_in"
      },
      {
        "id": "1060650",
        "name": "Javi Sarasa",
        "position": "AM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "906025",
        "name": "Ricard Artero",
        "position": "AM",
        "lastStatus": "bench"
      },
      {
        "id": "537382",
        "name": "Bryan Gil",
        "position": "LW",
        "lastStatus": "starting"
      },
      {
        "id": "895326",
        "name": "Joel Roca",
        "position": "LW",
        "lastStatus": "starting"
      },
      {
        "id": "1025582",
        "name": "Juan Arango",
        "position": "LW",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "264372",
        "name": "Viktor Tsygankov",
        "position": "RW",
        "lastStatus": "starting"
      },
      {
        "id": "857818",
        "name": "Yáser Asprilla",
        "position": "RW",
        "lastStatus": "not_included"
      },
      {
        "id": "99353",
        "name": "Portu",
        "position": "RW",
        "lastStatus": "injured"
      },
      {
        "id": "1337084",
        "name": "Papa Ba",
        "position": "RW",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "631821",
        "name": "Vladyslav Vanat",
        "position": "CF",
        "lastStatus": "injured"
      },
      {
        "id": "476219",
        "name": "Bojan Miovski",
        "position": "CF",
        "lastStatus": "not_included"
      },
      {
        "id": "340376",
        "name": "Abel Ruiz",
        "position": "CF",
        "lastStatus": "bench"
      },
      {
        "id": "891923",
        "name": "Dawda Camara",
        "position": "CF",
        "lastStatus": "not_at_club"
      },
      {
        "id": "59323",
        "name": "Cristhian Stuani",
        "position": "CF",
        "lastStatus": "sub_in"
      }
    ]
  }
];
export const squadSeason = '2025/26';
export const squadSource = 'https://github.com/withqwerty/availability-data';
