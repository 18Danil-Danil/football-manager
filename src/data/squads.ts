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
  },
  {
    "clubId": "sevilla",
    "club": "Sevilla FC",
    "country": "Испания",
    "league": "La Liga",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/ES1/2025/fc-sevilla.json",
    "scrapedAt": "2026-06-12T23:21:26.753322+00:00",
    "players": [
      {
        "id": "124419",
        "name": "Odysseas Vlachodimos",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "73517",
        "name": "Ørjan Nyland",
        "position": "GK",
        "lastStatus": "starting"
      },
      {
        "id": "766552",
        "name": "Alberto Flores",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "833884",
        "name": "Rafa Romero",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1057001",
        "name": "Loren Luchino",
        "position": "GK",
        "lastStatus": "not_at_club"
      },
      {
        "id": "766583",
        "name": "Kike Salas",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "719999",
        "name": "Andrés Castrín",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "439022",
        "name": "Marcão",
        "position": "CB",
        "lastStatus": "injured"
      },
      {
        "id": "155025",
        "name": "Fábio Cardoso",
        "position": "CB",
        "lastStatus": "bench"
      },
      {
        "id": "538996",
        "name": "Tanguy Nianzou",
        "position": "CB",
        "lastStatus": "bench"
      },
      {
        "id": "57500",
        "name": "César Azpilicueta",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "882710",
        "name": "Ramón Martínez",
        "position": "CB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "660735",
        "name": "Federico Gattoni",
        "position": "CB",
        "lastStatus": "bench"
      },
      {
        "id": "803003",
        "name": "Iker Muñoz",
        "position": "CB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "1032280",
        "name": "Oso",
        "position": "LB",
        "lastStatus": "starting"
      },
      {
        "id": "385105",
        "name": "Gabriel Suazo",
        "position": "LB",
        "lastStatus": "starting"
      },
      {
        "id": "501418",
        "name": "Adrià Pedrosa",
        "position": "LB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "711625",
        "name": "José Ángel Carmona",
        "position": "RB",
        "lastStatus": "starting"
      },
      {
        "id": "676042",
        "name": "Juanlu Sánchez",
        "position": "RB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "569384",
        "name": "Lucien Agoumé",
        "position": "DM",
        "lastStatus": "starting"
      },
      {
        "id": "395234",
        "name": "Batista Mendy",
        "position": "DM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "74294",
        "name": "Nemanja Gudelj",
        "position": "DM",
        "lastStatus": "sub_in"
      },
      {
        "id": "212723",
        "name": "Djibril Sow",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "766723",
        "name": "Manu Bueno",
        "position": "CM",
        "lastStatus": "injured"
      },
      {
        "id": "263727",
        "name": "Joan Jordán",
        "position": "CM",
        "lastStatus": "bench"
      },
      {
        "id": "1236856",
        "name": "Nico Guillén",
        "position": "CM",
        "lastStatus": "bench"
      },
      {
        "id": "1056935",
        "name": "Edu Altozano",
        "position": "CM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "743387",
        "name": "Stanis Idumbo",
        "position": "AM",
        "lastStatus": "not_included"
      },
      {
        "id": "345886",
        "name": "Rubén Vargas",
        "position": "LW",
        "lastStatus": "sub_in"
      },
      {
        "id": "500067",
        "name": "Chidera Ejuke",
        "position": "LW",
        "lastStatus": "sub_in"
      },
      {
        "id": "357628",
        "name": "Alfon González",
        "position": "LW",
        "lastStatus": "not_at_club"
      },
      {
        "id": "303259",
        "name": "Dodi Lukébakio",
        "position": "RW",
        "lastStatus": "not_included"
      },
      {
        "id": "177847",
        "name": "Adnan Januzaj",
        "position": "RW",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1064105",
        "name": "Miguel Sierra",
        "position": "RW",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "639733",
        "name": "Peque Fernández",
        "position": "SS",
        "lastStatus": "starting"
      },
      {
        "id": "40433",
        "name": "Alexis Sánchez",
        "position": "SS",
        "lastStatus": "starting"
      },
      {
        "id": "607034",
        "name": "Akor Adams",
        "position": "CF",
        "lastStatus": "sub_in"
      },
      {
        "id": "687609",
        "name": "Isaac Romero",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "217115",
        "name": "Neal Maupay",
        "position": "CF",
        "lastStatus": "sub_in"
      },
      {
        "id": "1166534",
        "name": "Álex Costa",
        "position": "CF",
        "lastStatus": "not_at_club"
      }
    ]
  },
  {
    "clubId": "valencia",
    "club": "Valencia CF",
    "country": "Испания",
    "league": "La Liga",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/ES1/2025/fc-valencia.json",
    "scrapedAt": "2026-06-12T23:24:37.070713+00:00",
    "players": [
      {
        "id": "625014",
        "name": "Julen Agirrezabala",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "165467",
        "name": "Stole Dimitrievski",
        "position": "GK",
        "lastStatus": "starting"
      },
      {
        "id": "741251",
        "name": "Vicent Abril",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "398131",
        "name": "Cristian Rivero",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "632913",
        "name": "Pere García",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "707274",
        "name": "César Tárrega",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "520840",
        "name": "José Copete",
        "position": "CB",
        "lastStatus": "injured"
      },
      {
        "id": "338285",
        "name": "Unai Núñez",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "298583",
        "name": "Eray Cömert",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "346289",
        "name": "Mouctar Diakhaby",
        "position": "CB",
        "lastStatus": "injured"
      },
      {
        "id": "1141157",
        "name": "Alejandro Panach",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1353687",
        "name": "Joel Fontanet",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "221322",
        "name": "José Gayà",
        "position": "LB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "623024",
        "name": "Jesús Vázquez",
        "position": "LB",
        "lastStatus": "starting"
      },
      {
        "id": "1063331",
        "name": "Marcos Navarro",
        "position": "LB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1364996",
        "name": "Rubén Muñoz de Morales",
        "position": "LB",
        "lastStatus": "bench"
      },
      {
        "id": "367466",
        "name": "Thierry Correia",
        "position": "RB",
        "lastStatus": "sub_in"
      },
      {
        "id": "268642",
        "name": "Renzo Saravia",
        "position": "RB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "170472",
        "name": "Dimitri Foulquier",
        "position": "RB",
        "lastStatus": "injured"
      },
      {
        "id": "668212",
        "name": "Rubén Iranzo",
        "position": "RB",
        "lastStatus": "bench"
      },
      {
        "id": "328480",
        "name": "Pepelu",
        "position": "DM",
        "lastStatus": "starting"
      },
      {
        "id": "342385",
        "name": "Guido Rodríguez",
        "position": "DM",
        "lastStatus": "starting"
      },
      {
        "id": "285323",
        "name": "Baptiste Santamaria",
        "position": "DM",
        "lastStatus": "bench"
      },
      {
        "id": "834764",
        "name": "Javi Guerra",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "394236",
        "name": "Filip Ugrinic",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "646743",
        "name": "Javi Navarro",
        "position": "CM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1200328",
        "name": "Lucas Núñez",
        "position": "CM",
        "lastStatus": "bench"
      },
      {
        "id": "1515724",
        "name": "Aaron Mayol",
        "position": "CM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "375382",
        "name": "André Almeida",
        "position": "AM",
        "lastStatus": "sub_in"
      },
      {
        "id": "518644",
        "name": "Largie Ramazani",
        "position": "LW",
        "lastStatus": "sub_in"
      },
      {
        "id": "355861",
        "name": "Arnaut Danjuma",
        "position": "LW",
        "lastStatus": "bench"
      },
      {
        "id": "1000630",
        "name": "Pablo López",
        "position": "LW",
        "lastStatus": "not_included"
      },
      {
        "id": "617081",
        "name": "Diego López",
        "position": "RW",
        "lastStatus": "starting"
      },
      {
        "id": "278837",
        "name": "Luis Rioja",
        "position": "RW",
        "lastStatus": "starting"
      },
      {
        "id": "1009766",
        "name": "David Otorbi",
        "position": "RW",
        "lastStatus": "bench"
      },
      {
        "id": "413262",
        "name": "Dani Raba",
        "position": "SS",
        "lastStatus": "bench"
      },
      {
        "id": "573775",
        "name": "Hugo Duro",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "628366",
        "name": "Lucas Beltrán",
        "position": "CF",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "337715",
        "name": "Umar Sadiq",
        "position": "CF",
        "lastStatus": "sub_in"
      },
      {
        "id": "1254646",
        "name": "Aimar Blázquez",
        "position": "CF",
        "lastStatus": "not_in_squad"
      }
    ]
  },
  {
    "clubId": "villarreal",
    "club": "Villarreal CF",
    "country": "Испания",
    "league": "La Liga",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/ES1/2025/fc-villarreal.json",
    "scrapedAt": "2026-06-12T23:16:25.459058+00:00",
    "players": [
      {
        "id": "712107",
        "name": "Luiz Júnior",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "466783",
        "name": "Arnau Tenas",
        "position": "GK",
        "lastStatus": "starting"
      },
      {
        "id": "341713",
        "name": "Diego Conde",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "709336",
        "name": "Rubén Gómez",
        "position": "GK",
        "lastStatus": "not_at_club"
      },
      {
        "id": "805714",
        "name": "Renato Veiga",
        "position": "CB",
        "lastStatus": "bench"
      },
      {
        "id": "484988",
        "name": "Logan Costa",
        "position": "CB",
        "lastStatus": "sub_in"
      },
      {
        "id": "1061336",
        "name": "Pau Navarro",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "662261",
        "name": "Rafa Marín",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "480763",
        "name": "Juan Foyth",
        "position": "CB",
        "lastStatus": "injured"
      },
      {
        "id": "780630",
        "name": "Willy Kambwala",
        "position": "CB",
        "lastStatus": "bench"
      },
      {
        "id": "1305564",
        "name": "Jean Ives Valou",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "718195",
        "name": "Ismael Sierra",
        "position": "CB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "678406",
        "name": "Sergi Cardona",
        "position": "LB",
        "lastStatus": "sub_in"
      },
      {
        "id": "356197",
        "name": "Alfonso Pedraza",
        "position": "LB",
        "lastStatus": "starting"
      },
      {
        "id": "953901",
        "name": "Santiago Mouriño",
        "position": "RB",
        "lastStatus": "starting"
      },
      {
        "id": "985806",
        "name": "Alex Freeman",
        "position": "RB",
        "lastStatus": "bench"
      },
      {
        "id": "466807",
        "name": "Adrià Altimira",
        "position": "RB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "230784",
        "name": "Thomas Partey",
        "position": "DM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "485963",
        "name": "Pape Gueye",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "380598",
        "name": "Santi Comesaña",
        "position": "CM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1453066",
        "name": "Carlos Macià",
        "position": "CM",
        "lastStatus": "sub_in"
      },
      {
        "id": "59561",
        "name": "Dani Parejo",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "1249340",
        "name": "Alassane Diatta",
        "position": "CM",
        "lastStatus": "sub_in"
      },
      {
        "id": "165007",
        "name": "Denis Suárez",
        "position": "AM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "733576",
        "name": "Alberto Moleiro",
        "position": "LW",
        "lastStatus": "starting"
      },
      {
        "id": "396638",
        "name": "Manor Solomon",
        "position": "LW",
        "lastStatus": "not_at_club"
      },
      {
        "id": "357628",
        "name": "Alfon González",
        "position": "LW",
        "lastStatus": "bench"
      },
      {
        "id": "1331450",
        "name": "Hugo López",
        "position": "LW",
        "lastStatus": "not_at_club"
      },
      {
        "id": "1176512",
        "name": "Joselillo Gaitán",
        "position": "LW",
        "lastStatus": "not_at_club"
      },
      {
        "id": "1132630",
        "name": "Mahamoud Barry",
        "position": "LW",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "568157",
        "name": "Yéremy Pino",
        "position": "RW",
        "lastStatus": "not_at_club"
      },
      {
        "id": "638793",
        "name": "Tajon Buchanan",
        "position": "RW",
        "lastStatus": "bench"
      },
      {
        "id": "709969",
        "name": "Ilias Akhomach",
        "position": "RW",
        "lastStatus": "not_at_club"
      },
      {
        "id": "343052",
        "name": "Nicolas Pépé",
        "position": "RW",
        "lastStatus": "starting"
      },
      {
        "id": "729814",
        "name": "Georges Mikautadze",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "1038950",
        "name": "Karl Etta Eyong",
        "position": "CF",
        "lastStatus": "not_at_club"
      },
      {
        "id": "972465",
        "name": "Tani Oluwaseyi",
        "position": "CF",
        "lastStatus": "bench"
      },
      {
        "id": "246968",
        "name": "Ayoze Pérez",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "177467",
        "name": "Gerard Moreno",
        "position": "CF",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1063553",
        "name": "Pau Cabanes",
        "position": "CF",
        "lastStatus": "sub_in"
      }
    ]
  },
  {
    "clubId": "rayo-vallecano",
    "club": "Rayo Vallecano",
    "country": "Испания",
    "league": "La Liga",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/ES1/2025/rayo-vallecano.json",
    "scrapedAt": "2026-06-12T23:26:46.062547+00:00",
    "players": [
      {
        "id": "275218",
        "name": "Augusto Batalla",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "397676",
        "name": "Dani Cárdenas",
        "position": "GK",
        "lastStatus": "starting"
      },
      {
        "id": "708370",
        "name": "Juanpe Gil",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "1322790",
        "name": "Adrián Molina",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1034853",
        "name": "Nobel Mendy",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "451801",
        "name": "Abdul Mumin",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "457931",
        "name": "Luiz Felipe",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "765467",
        "name": "Jozhua Vertrouwd",
        "position": "CB",
        "lastStatus": "bench"
      },
      {
        "id": "127108",
        "name": "Florian Lejeune",
        "position": "CB",
        "lastStatus": "bench"
      },
      {
        "id": "692208",
        "name": "Pelayo Fernández",
        "position": "CB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "596122",
        "name": "Pep Chavarría",
        "position": "LB",
        "lastStatus": "bench"
      },
      {
        "id": "311044",
        "name": "Alfonso Espino",
        "position": "LB",
        "lastStatus": "starting"
      },
      {
        "id": "527966",
        "name": "Andrei Rațiu",
        "position": "RB",
        "lastStatus": "sub_in"
      },
      {
        "id": "85295",
        "name": "Iván Balliu",
        "position": "RB",
        "lastStatus": "starting"
      },
      {
        "id": "948254",
        "name": "Marco de las Sías",
        "position": "RB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "268670",
        "name": "Gerard Gumbau",
        "position": "DM",
        "lastStatus": "starting"
      },
      {
        "id": "363057",
        "name": "Pedro Díaz",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "192009",
        "name": "Unai López",
        "position": "CM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "517753",
        "name": "Óscar Valentín",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "525578",
        "name": "Pathé Ciss",
        "position": "CM",
        "lastStatus": "sub_in"
      },
      {
        "id": "1384911",
        "name": "Samu Becerra",
        "position": "CM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "560483",
        "name": "Randy Nteka",
        "position": "AM",
        "lastStatus": "starting"
      },
      {
        "id": "30321",
        "name": "Óscar Trejo",
        "position": "AM",
        "lastStatus": "bench"
      },
      {
        "id": "257062",
        "name": "Álvaro García",
        "position": "LW",
        "lastStatus": "starting"
      },
      {
        "id": "618813",
        "name": "Carlos Martín",
        "position": "LW",
        "lastStatus": "starting"
      },
      {
        "id": "455181",
        "name": "Jorge de Frutos",
        "position": "RW",
        "lastStatus": "sub_in"
      },
      {
        "id": "709969",
        "name": "Ilias Akhomach",
        "position": "RW",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "622988",
        "name": "Fran Pérez",
        "position": "RW",
        "lastStatus": "bench"
      },
      {
        "id": "362086",
        "name": "Isi Palazón",
        "position": "SS",
        "lastStatus": "suspended"
      },
      {
        "id": "560417",
        "name": "Alemão",
        "position": "CF",
        "lastStatus": "sub_in"
      },
      {
        "id": "505674",
        "name": "Sergio Camello",
        "position": "CF",
        "lastStatus": "sub_in"
      }
    ]
  },
  {
    "clubId": "rcd-mallorca",
    "club": "RCD Mallorca",
    "country": "Испания",
    "league": "La Liga",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/ES1/2025/rcd-mallorca.json",
    "scrapedAt": "2026-06-12T23:29:36.110244+00:00",
    "players": [
      {
        "id": "562742",
        "name": "Leo Román",
        "position": "GK",
        "lastStatus": "starting"
      },
      {
        "id": "490606",
        "name": "Lucas Bergström",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "27493",
        "name": "Iván Cuéllar",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "705259",
        "name": "Nil Torreguitart",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1388066",
        "name": "Rareș Vlad",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "277384",
        "name": "Martin Valjent",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "371371",
        "name": "Marash Kumbulla",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "947431",
        "name": "David López",
        "position": "CB",
        "lastStatus": "bench"
      },
      {
        "id": "278296",
        "name": "Antonio Raíllo",
        "position": "CB",
        "lastStatus": "sub_in"
      },
      {
        "id": "1385448",
        "name": "Javier Olaizola",
        "position": "CB",
        "lastStatus": "sub_in"
      },
      {
        "id": "1526308",
        "name": "Leo Sánchez",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "262939",
        "name": "Johan Mojica",
        "position": "LB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "320271",
        "name": "Toni Lato",
        "position": "LB",
        "lastStatus": "starting"
      },
      {
        "id": "1180809",
        "name": "Iliesse Salhi",
        "position": "LB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1487239",
        "name": "Luis Orejuela",
        "position": "LB",
        "lastStatus": "bench"
      },
      {
        "id": "251876",
        "name": "Pablo Maffeo",
        "position": "RB",
        "lastStatus": "starting"
      },
      {
        "id": "388513",
        "name": "Mateu Morey",
        "position": "RB",
        "lastStatus": "bench"
      },
      {
        "id": "1393997",
        "name": "Miguel Calatayud",
        "position": "RB",
        "lastStatus": "bench"
      },
      {
        "id": "657430",
        "name": "Samú Costa",
        "position": "DM",
        "lastStatus": "starting"
      },
      {
        "id": "142031",
        "name": "Omar Mascarell",
        "position": "DM",
        "lastStatus": "starting"
      },
      {
        "id": "142021",
        "name": "Sergi Darder",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "335225",
        "name": "Manu Morlanes",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "513031",
        "name": "Antonio Sánchez",
        "position": "CM",
        "lastStatus": "sub_in"
      },
      {
        "id": "1063574",
        "name": "Jan Salas",
        "position": "CM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1321412",
        "name": "Jandro García",
        "position": "CM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "720038",
        "name": "Pablo Torre",
        "position": "AM",
        "lastStatus": "starting"
      },
      {
        "id": "857830",
        "name": "Daniel Luna",
        "position": "AM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "139435",
        "name": "Dani Rodríguez",
        "position": "AM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "1309820",
        "name": "Cesc Riba",
        "position": "AM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1301775",
        "name": "Jan Virgili",
        "position": "LW",
        "lastStatus": "sub_in"
      },
      {
        "id": "706138",
        "name": "Javi Llabrés",
        "position": "LW",
        "lastStatus": "bench"
      },
      {
        "id": "666547",
        "name": "Zito Luvumbo",
        "position": "RW",
        "lastStatus": "bench"
      },
      {
        "id": "245744",
        "name": "Takuma Asano",
        "position": "RW",
        "lastStatus": "starting"
      },
      {
        "id": "1101641",
        "name": "Justin Kalumba",
        "position": "RW",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "256267",
        "name": "Vedat Muriqi",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "834742",
        "name": "Mateo Joseph",
        "position": "CF",
        "lastStatus": "injured"
      },
      {
        "id": "1296876",
        "name": "Marc Domènech",
        "position": "CF",
        "lastStatus": "not_included"
      },
      {
        "id": "177452",
        "name": "Abdón Prats",
        "position": "CF",
        "lastStatus": "sub_in"
      }
    ]
  },
  {
    "clubId": "real-betis-sevilla",
    "club": "Real Betis Balompié",
    "country": "Испания",
    "league": "La Liga",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/ES1/2025/real-betis-sevilla.json",
    "scrapedAt": "2026-06-12T23:18:56.505849+00:00",
    "players": [
      {
        "id": "417913",
        "name": "Álvaro Valles",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "286415",
        "name": "Pau López",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "71271",
        "name": "Adrián San Miguel",
        "position": "GK",
        "lastStatus": "starting"
      },
      {
        "id": "1225038",
        "name": "Manu González",
        "position": "GK",
        "lastStatus": "not_at_club"
      },
      {
        "id": "1061277",
        "name": "Germán García",
        "position": "GK",
        "lastStatus": "not_at_club"
      },
      {
        "id": "735568",
        "name": "Natan",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "985383",
        "name": "Valentín Gómez",
        "position": "CB",
        "lastStatus": "sub_in"
      },
      {
        "id": "246291",
        "name": "Diego Llorente",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "99922",
        "name": "Marc Bartra",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "374139",
        "name": "Junior Firpo",
        "position": "LB",
        "lastStatus": "bench"
      },
      {
        "id": "86784",
        "name": "Ricardo Rodríguez",
        "position": "LB",
        "lastStatus": "starting"
      },
      {
        "id": "1052283",
        "name": "Darling Bladi",
        "position": "LB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "1307658",
        "name": "Carlos de Roa",
        "position": "LB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "933908",
        "name": "Ángel Ortiz",
        "position": "RB",
        "lastStatus": "injured"
      },
      {
        "id": "191217",
        "name": "Héctor Bellerín",
        "position": "RB",
        "lastStatus": "starting"
      },
      {
        "id": "1054909",
        "name": "Pablo Busto",
        "position": "RB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "287579",
        "name": "Sofyan Amrabat",
        "position": "DM",
        "lastStatus": "injured"
      },
      {
        "id": "336869",
        "name": "Marc Roca",
        "position": "DM",
        "lastStatus": "starting"
      },
      {
        "id": "466801",
        "name": "Sergi Altimira",
        "position": "CM",
        "lastStatus": "injured"
      },
      {
        "id": "907559",
        "name": "Nelson Deossa",
        "position": "CM",
        "lastStatus": "bench"
      },
      {
        "id": "357885",
        "name": "Pablo Fornals",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "261503",
        "name": "Álvaro Fidalgo",
        "position": "CM",
        "lastStatus": "sub_in"
      },
      {
        "id": "972730",
        "name": "Mawuli Mensah",
        "position": "CM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "348795",
        "name": "Giovani Lo Celso",
        "position": "AM",
        "lastStatus": "sub_in"
      },
      {
        "id": "85288",
        "name": "Isco",
        "position": "AM",
        "lastStatus": "starting"
      },
      {
        "id": "895331",
        "name": "Dani Pérez",
        "position": "AM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "1111831",
        "name": "Iván Corralejo",
        "position": "AM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "724520",
        "name": "Abde Ezzalzouli",
        "position": "LW",
        "lastStatus": "starting"
      },
      {
        "id": "461617",
        "name": "Rodrigo Riquelme",
        "position": "LW",
        "lastStatus": "bench"
      },
      {
        "id": "602105",
        "name": "Antony",
        "position": "RW",
        "lastStatus": "starting"
      },
      {
        "id": "961087",
        "name": "Pablo García",
        "position": "RW",
        "lastStatus": "not_at_club"
      },
      {
        "id": "378139",
        "name": "Aitor Ruibal",
        "position": "RW",
        "lastStatus": "injured"
      },
      {
        "id": "632741",
        "name": "Iker Losada",
        "position": "SS",
        "lastStatus": "not_at_club"
      },
      {
        "id": "459463",
        "name": "Cucho Hernández",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "1061285",
        "name": "Rodrigo Marina",
        "position": "CF",
        "lastStatus": "not_at_club"
      },
      {
        "id": "127048",
        "name": "Cédric Bakambu",
        "position": "CF",
        "lastStatus": "bench"
      },
      {
        "id": "167721",
        "name": "Chimy Ávila",
        "position": "CF",
        "lastStatus": "sub_in"
      }
    ]
  },
  {
    "clubId": "real-oviedo",
    "club": "Real Oviedo",
    "country": "Испания",
    "league": "La Liga",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/ES1/2025/real-oviedo.json",
    "scrapedAt": "2026-06-12T23:32:16.175861+00:00",
    "players": [
      {
        "id": "284430",
        "name": "Aarón Escandell",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "525438",
        "name": "Horațiu Moldovan",
        "position": "GK",
        "lastStatus": "starting"
      },
      {
        "id": "854158",
        "name": "Miguel Narváez",
        "position": "GK",
        "lastStatus": "not_at_club"
      },
      {
        "id": "498237",
        "name": "David Carmo",
        "position": "CB",
        "lastStatus": "bench"
      },
      {
        "id": "276111",
        "name": "David Costas",
        "position": "CB",
        "lastStatus": "bench"
      },
      {
        "id": "286384",
        "name": "Eric Bailly",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "326416",
        "name": "Dani Calvo",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "447823",
        "name": "Oier Luengo",
        "position": "CB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "1065832",
        "name": "Marco Esteban",
        "position": "CB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "1094227",
        "name": "Diego Espinosa",
        "position": "CB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "568158",
        "name": "Javi López",
        "position": "LB",
        "lastStatus": "sub_in"
      },
      {
        "id": "929899",
        "name": "Rahim Alhassane",
        "position": "LB",
        "lastStatus": "starting"
      },
      {
        "id": "1038133",
        "name": "Omar Falah",
        "position": "LB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "216870",
        "name": "Nacho Vidal",
        "position": "RB",
        "lastStatus": "starting"
      },
      {
        "id": "349884",
        "name": "Lucas Ahijado",
        "position": "RB",
        "lastStatus": "sub_in"
      },
      {
        "id": "1065830",
        "name": "Adrián Fernández",
        "position": "RB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "462070",
        "name": "Nicolás Fonseca",
        "position": "DM",
        "lastStatus": "starting"
      },
      {
        "id": "395122",
        "name": "Santiago Colombatto",
        "position": "DM",
        "lastStatus": "starting"
      },
      {
        "id": "168157",
        "name": "Leander Dendoncker",
        "position": "DM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "603696",
        "name": "Alberto Reina",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "538006",
        "name": "Kwasi Sibo",
        "position": "CM",
        "lastStatus": "bench"
      },
      {
        "id": "15799",
        "name": "Santi Cazorla",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "1065837",
        "name": "Diego Menéndez",
        "position": "CM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "1065836",
        "name": "Cheli Pereda",
        "position": "CM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "429790",
        "name": "Luka Ilic",
        "position": "AM",
        "lastStatus": "sub_in"
      },
      {
        "id": "1081496",
        "name": "Pablo Agudín",
        "position": "AM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "719737",
        "name": "Álex Cardero",
        "position": "AM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "1127730",
        "name": "Thiago Fernández",
        "position": "LW",
        "lastStatus": "bench"
      },
      {
        "id": "593412",
        "name": "Ilyas Chaira",
        "position": "LW",
        "lastStatus": "starting"
      },
      {
        "id": "293169",
        "name": "Josip Brekalo",
        "position": "LW",
        "lastStatus": "not_included"
      },
      {
        "id": "804708",
        "name": "Brandon Dominguès",
        "position": "LW",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "337284",
        "name": "Ovie Ejaria",
        "position": "LW",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "217155",
        "name": "Borja Sánchez",
        "position": "LW",
        "lastStatus": "not_at_club"
      },
      {
        "id": "620164",
        "name": "Haissem Hassan",
        "position": "RW",
        "lastStatus": "sub_in"
      },
      {
        "id": "1118685",
        "name": "Lamine Gueye",
        "position": "RW",
        "lastStatus": "not_at_club"
      },
      {
        "id": "578419",
        "name": "Federico Viñas",
        "position": "CF",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "743951",
        "name": "Thiago Borbas",
        "position": "CF",
        "lastStatus": "sub_in"
      },
      {
        "id": "709380",
        "name": "Álex Forés",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "80197",
        "name": "Salomón Rondón",
        "position": "CF",
        "lastStatus": "not_included"
      }
    ]
  },
  {
    "clubId": "real-sociedad",
    "club": "Real Sociedad",
    "country": "Испания",
    "league": "La Liga",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/ES1/2025/real-sociedad-san-sebastian.json",
    "scrapedAt": "2026-06-12T23:17:50.309732+00:00",
    "players": [
      {
        "id": "212862",
        "name": "Álex Remiro",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "625657",
        "name": "Unai Marrero",
        "position": "GK",
        "lastStatus": "starting"
      },
      {
        "id": "668313",
        "name": "Aitor Fraga",
        "position": "GK",
        "lastStatus": "not_at_club"
      },
      {
        "id": "1178818",
        "name": "Theo Folgado",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "1018938",
        "name": "Jon Martín",
        "position": "CB",
        "lastStatus": "bench"
      },
      {
        "id": "355628",
        "name": "Igor Zubeldia",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "580560",
        "name": "Jon Pacheco",
        "position": "CB",
        "lastStatus": "not_included"
      },
      {
        "id": "238266",
        "name": "Duje Caleta-Car",
        "position": "CB",
        "lastStatus": "bench"
      },
      {
        "id": "229804",
        "name": "Aritz Elustondo",
        "position": "CB",
        "lastStatus": "sub_in"
      },
      {
        "id": "915258",
        "name": "Kazunari Kita",
        "position": "CB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "964190",
        "name": "Luken Beitia",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "366930",
        "name": "Sergio Gómez",
        "position": "LB",
        "lastStatus": "starting"
      },
      {
        "id": "517842",
        "name": "Aihen Muñoz",
        "position": "LB",
        "lastStatus": "sub_in"
      },
      {
        "id": "661145",
        "name": "Jon Aramburu",
        "position": "RB",
        "lastStatus": "starting"
      },
      {
        "id": "297070",
        "name": "Hamari Traoré",
        "position": "RB",
        "lastStatus": "not_included"
      },
      {
        "id": "280730",
        "name": "Álvaro Odriozola",
        "position": "RB",
        "lastStatus": "injured"
      },
      {
        "id": "1055860",
        "name": "Iñaki Rupérez",
        "position": "RB",
        "lastStatus": "sub_in"
      },
      {
        "id": "711374",
        "name": "Jon Gorrotxategi",
        "position": "DM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "625651",
        "name": "Urko González de Zárate",
        "position": "DM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "502722",
        "name": "Luka Sucic",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "634431",
        "name": "Beñat Turrientes",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "372246",
        "name": "Carlos Soler",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "378293",
        "name": "Yangel Herrera",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "1283968",
        "name": "Tomy Carbonell",
        "position": "CM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "1354775",
        "name": "Ibai Aguirre",
        "position": "CM",
        "lastStatus": "bench"
      },
      {
        "id": "979325",
        "name": "Alex Lebarbier",
        "position": "CM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "555143",
        "name": "Arsen Zakharyan",
        "position": "AM",
        "lastStatus": "bench"
      },
      {
        "id": "309110",
        "name": "Brais Méndez",
        "position": "AM",
        "lastStatus": "bench"
      },
      {
        "id": "907813",
        "name": "Pablo Marín",
        "position": "AM",
        "lastStatus": "sub_in"
      },
      {
        "id": "709215",
        "name": "Mikel Goti",
        "position": "AM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "616369",
        "name": "Ander Barrenetxea",
        "position": "LW",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "225122",
        "name": "Gonçalo Guedes",
        "position": "LW",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1007378",
        "name": "Wesley",
        "position": "LW",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1201530",
        "name": "Alex Marchal",
        "position": "LW",
        "lastStatus": "not_at_club"
      },
      {
        "id": "962145",
        "name": "Arkaitz Mariezkurrena",
        "position": "LW",
        "lastStatus": "not_at_club"
      },
      {
        "id": "405398",
        "name": "Takefusa Kubo",
        "position": "RW",
        "lastStatus": "bench"
      },
      {
        "id": "937945",
        "name": "Dani Díaz",
        "position": "RW",
        "lastStatus": "not_at_club"
      },
      {
        "id": "1201529",
        "name": "Lander Astiazaran",
        "position": "RW",
        "lastStatus": "not_at_club"
      },
      {
        "id": "1105810",
        "name": "Job Ochieng",
        "position": "RW",
        "lastStatus": "starting"
      },
      {
        "id": "351478",
        "name": "Mikel Oyarzabal",
        "position": "CF",
        "lastStatus": "sub_in"
      },
      {
        "id": "660438",
        "name": "Orri Óskarsson",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "337715",
        "name": "Umar Sadiq",
        "position": "CF",
        "lastStatus": "not_at_club"
      },
      {
        "id": "1063598",
        "name": "Gorka Carrera",
        "position": "CF",
        "lastStatus": "not_at_club"
      },
      {
        "id": "711382",
        "name": "Jon Karrikaburu",
        "position": "CF",
        "lastStatus": "not_in_squad"
      }
    ]
  },
  {
    "clubId": "ud-levante",
    "club": "Levante UD",
    "country": "Испания",
    "league": "La Liga",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/ES1/2025/ud-levante.json",
    "scrapedAt": "2026-06-12T23:26:03.600719+00:00",
    "players": [
      {
        "id": "128969",
        "name": "Mathew Ryan",
        "position": "GK",
        "lastStatus": "starting"
      },
      {
        "id": "617059",
        "name": "Pablo Campos",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "939445",
        "name": "Álex Primo",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1063330",
        "name": "Cayetano Romero",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1144700",
        "name": "Matías Moreno",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "341263",
        "name": "Adrián Dela",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "861981",
        "name": "Alan Matturro",
        "position": "CB",
        "lastStatus": "bench"
      },
      {
        "id": "1063333",
        "name": "Jorge Cabello",
        "position": "CB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "255495",
        "name": "Unai Elgezabal",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1105075",
        "name": "Martín Krug",
        "position": "CB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "1476968",
        "name": "Huseini Nakoha",
        "position": "CB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "618809",
        "name": "Manu Sánchez",
        "position": "LB",
        "lastStatus": "starting"
      },
      {
        "id": "505493",
        "name": "Diego Pampín",
        "position": "LB",
        "lastStatus": "bench"
      },
      {
        "id": "129674",
        "name": "Jeremy Toljan",
        "position": "RB",
        "lastStatus": "starting"
      },
      {
        "id": "590690",
        "name": "Víctor García",
        "position": "RB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1371830",
        "name": "Nacho Pérez",
        "position": "RB",
        "lastStatus": "bench"
      },
      {
        "id": "707230",
        "name": "Ugo Raghouber",
        "position": "DM",
        "lastStatus": "sub_in"
      },
      {
        "id": "526050",
        "name": "Kervin Arriaga",
        "position": "DM",
        "lastStatus": "starting"
      },
      {
        "id": "293388",
        "name": "Oriol Rey",
        "position": "DM",
        "lastStatus": "sub_in"
      },
      {
        "id": "341277",
        "name": "Sergio Lozano",
        "position": "DM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "897016",
        "name": "Joan Ruiz",
        "position": "DM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "568835",
        "name": "Pablo Martínez",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "625660",
        "name": "Jon Ander Olasagasti",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "610083",
        "name": "Unai Vencedor",
        "position": "CM",
        "lastStatus": "bench"
      },
      {
        "id": "668179",
        "name": "Carlos Álvarez",
        "position": "AM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "692207",
        "name": "Dani Cervera",
        "position": "AM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "557057",
        "name": "Roger Brugué",
        "position": "LW",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1232057",
        "name": "Paco Cortés",
        "position": "LW",
        "lastStatus": "bench"
      },
      {
        "id": "1063340",
        "name": "Kareem Tunde",
        "position": "RW",
        "lastStatus": "starting"
      },
      {
        "id": "921345",
        "name": "Tay Abed",
        "position": "RW",
        "lastStatus": "sub_in"
      },
      {
        "id": "632741",
        "name": "Iker Losada",
        "position": "SS",
        "lastStatus": "sub_in"
      },
      {
        "id": "1063338",
        "name": "Carlos Espí",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "1038950",
        "name": "Karl Etta Eyong",
        "position": "CF",
        "lastStatus": "sub_in"
      },
      {
        "id": "628886",
        "name": "Iván Romero",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "525140",
        "name": "Goduine Koyalipou",
        "position": "CF",
        "lastStatus": "not_included"
      },
      {
        "id": "252677",
        "name": "José Luis Morales",
        "position": "CF",
        "lastStatus": "bench"
      }
    ]
  },
  {
    "clubId": "ac-le-havre",
    "club": "Le Havre AC",
    "country": "Франция",
    "league": "Ligue 1",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/FR1/2025/ac-le-havre.json",
    "scrapedAt": "2026-06-12T22:57:37.923364+00:00",
    "players": [
      {
        "id": "164904",
        "name": "Mory Diaw",
        "position": "GK",
        "lastStatus": "starting"
      },
      {
        "id": "164915",
        "name": "Lionel Mpasi-Nzau",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "988275",
        "name": "Paul Argney",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1119876",
        "name": "Alex Teixeira",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "768380",
        "name": "Arouna Sangante",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "405389",
        "name": "Ayumu Seko",
        "position": "CB",
        "lastStatus": "absent"
      },
      {
        "id": "1228317",
        "name": "Stephan Zagadou",
        "position": "CB",
        "lastStatus": "injured"
      },
      {
        "id": "249636",
        "name": "Gautier Lloris",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "639712",
        "name": "Étienne Youté Kinkoué",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "949111",
        "name": "Aliou Thiaré",
        "position": "CB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "1307109",
        "name": "Georges Gomis",
        "position": "CB",
        "lastStatus": "sub_in"
      },
      {
        "id": "691841",
        "name": "Yanis Zouaoui",
        "position": "LB",
        "lastStatus": "injured"
      },
      {
        "id": "1119881",
        "name": "Enzo Koffi",
        "position": "LB",
        "lastStatus": "starting"
      },
      {
        "id": "170961",
        "name": "Thomas Delaine",
        "position": "LB",
        "lastStatus": "not_included"
      },
      {
        "id": "798925",
        "name": "Fodé Doucouré",
        "position": "RB",
        "lastStatus": "starting"
      },
      {
        "id": "538998",
        "name": "Timothée Pembélé",
        "position": "RB",
        "lastStatus": "sub_in"
      },
      {
        "id": "122840",
        "name": "Loïc Nego",
        "position": "RB",
        "lastStatus": "sub_in"
      },
      {
        "id": "620313",
        "name": "Lucas Gourna-Douath",
        "position": "DM",
        "lastStatus": "absent"
      },
      {
        "id": "181382",
        "name": "Abdoulaye Touré",
        "position": "DM",
        "lastStatus": "injured"
      },
      {
        "id": "1119880",
        "name": "Daren Mosengo",
        "position": "DM",
        "lastStatus": "bench"
      },
      {
        "id": "1187211",
        "name": "Thierno Bah",
        "position": "DM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1268390",
        "name": "Adams Diabaté",
        "position": "DM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "662242",
        "name": "Rassoul Ndiaye",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "770436",
        "name": "Simon Ebonog",
        "position": "CM",
        "lastStatus": "sub_in"
      },
      {
        "id": "667967",
        "name": "Yassine Kechta",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "1119877",
        "name": "Guy-Noël Zohouri",
        "position": "CM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1314544",
        "name": "Thomas Rousseau",
        "position": "CM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "232271",
        "name": "Sofiane Boufal",
        "position": "AM",
        "lastStatus": "starting"
      },
      {
        "id": "405686",
        "name": "Reda Khadra",
        "position": "AM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "986286",
        "name": "Ismaïl Bouneb",
        "position": "AM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "568698",
        "name": "Issa Soumaré",
        "position": "LW",
        "lastStatus": "starting"
      },
      {
        "id": "507496",
        "name": "Felix Mambimbi",
        "position": "LW",
        "lastStatus": "sub_in"
      },
      {
        "id": "227039",
        "name": "Younes Namli",
        "position": "RW",
        "lastStatus": "not_included"
      },
      {
        "id": "651973",
        "name": "Godson Kyeremeh",
        "position": "RW",
        "lastStatus": "bench"
      },
      {
        "id": "1178695",
        "name": "Kenny Quetant",
        "position": "CF",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "950593",
        "name": "Damián Pizarro",
        "position": "CF",
        "lastStatus": "not_included"
      },
      {
        "id": "1162654",
        "name": "Noam Obougou",
        "position": "CF",
        "lastStatus": "bench"
      },
      {
        "id": "182201",
        "name": "Ally Samatta",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "1143517",
        "name": "Yanis Beau Djellel",
        "position": "CF",
        "lastStatus": "not_in_squad"
      }
    ]
  },
  {
    "clubId": "aj-auxerre",
    "club": "AJ Auxerre",
    "country": "Франция",
    "league": "Ligue 1",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/FR1/2025/aj-auxerre.json",
    "scrapedAt": "2026-06-12T22:55:27.328426+00:00",
    "players": [
      {
        "id": "170911",
        "name": "Donovan Léon",
        "position": "GK",
        "lastStatus": "starting"
      },
      {
        "id": "695422",
        "name": "Théo De Percin",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "866916",
        "name": "Tom Negrel",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1167216",
        "name": "Louis Mezerette",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "806793",
        "name": "Clément Akpa",
        "position": "CB",
        "lastStatus": "injured"
      },
      {
        "id": "702441",
        "name": "Sinaly Diomandé",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "539795",
        "name": "Bryan Okoh",
        "position": "CB",
        "lastStatus": "injured"
      },
      {
        "id": "364409",
        "name": "Gabriel Osho",
        "position": "CB",
        "lastStatus": "not_included"
      },
      {
        "id": "371436",
        "name": "Francisco Sierralta",
        "position": "CB",
        "lastStatus": "bench"
      },
      {
        "id": "1091353",
        "name": "Telli Siwe",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "556865",
        "name": "Saad Agouzoul",
        "position": "CB",
        "lastStatus": "not_included"
      },
      {
        "id": "1144938",
        "name": "Alvin Petit Dol",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1291928",
        "name": "Elikya Legros",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "397171",
        "name": "Gideon Mensah",
        "position": "LB",
        "lastStatus": "starting"
      },
      {
        "id": "539665",
        "name": "Fredrik Oppegård",
        "position": "LB",
        "lastStatus": "injured"
      },
      {
        "id": "1200090",
        "name": "Sacha Burek",
        "position": "LB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "830890",
        "name": "Marvin Senaya",
        "position": "RB",
        "lastStatus": "sub_in"
      },
      {
        "id": "796865",
        "name": "Lamine Sy",
        "position": "RB",
        "lastStatus": "starting"
      },
      {
        "id": "1176614",
        "name": "Evan Diamalunda",
        "position": "RB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "395695",
        "name": "Elisha Owusu",
        "position": "DM",
        "lastStatus": "starting"
      },
      {
        "id": "531065",
        "name": "Oussama El Azzouzi",
        "position": "DM",
        "lastStatus": "injured"
      },
      {
        "id": "287635",
        "name": "Assane Dioussé",
        "position": "DM",
        "lastStatus": "bench"
      },
      {
        "id": "1291922",
        "name": "Lamfia Dioubaté",
        "position": "DM",
        "lastStatus": "bench"
      },
      {
        "id": "1291929",
        "name": "Yvan Zaddy",
        "position": "DM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "743496",
        "name": "Kévin Danois",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "1241211",
        "name": "Rudy Matondo",
        "position": "CM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "538971",
        "name": "Naouirou Ahamada",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "1174032",
        "name": "Tidiane Devernois",
        "position": "CM",
        "lastStatus": "bench"
      },
      {
        "id": "555076",
        "name": "Romain Faivre",
        "position": "AM",
        "lastStatus": "injured"
      },
      {
        "id": "1110406",
        "name": "Ibrahim Osman",
        "position": "LW",
        "lastStatus": "not_included"
      },
      {
        "id": "392767",
        "name": "Danny Namaso",
        "position": "LW",
        "lastStatus": "starting"
      },
      {
        "id": "763182",
        "name": "Josué Casimir",
        "position": "RW",
        "lastStatus": "sub_in"
      },
      {
        "id": "658534",
        "name": "Lasso Coulibaly",
        "position": "RW",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1367596",
        "name": "Mamoudou Cissokho",
        "position": "RW",
        "lastStatus": "bench"
      },
      {
        "id": "569140",
        "name": "Lassine Sinayoko",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "557612",
        "name": "Sékou Mara",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "501709",
        "name": "Theo Bair",
        "position": "CF",
        "lastStatus": "not_at_club"
      },
      {
        "id": "308133",
        "name": "Ado Onaiwu",
        "position": "CF",
        "lastStatus": "not_at_club"
      },
      {
        "id": "1010856",
        "name": "Ryan Rodin",
        "position": "CF",
        "lastStatus": "not_at_club"
      }
    ]
  },
  {
    "clubId": "monaco",
    "club": "AS Monaco",
    "country": "Франция",
    "league": "Ligue 1",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/FR1/2025/as-monaco.json",
    "scrapedAt": "2026-06-12T22:44:40.959434+00:00",
    "players": [
      {
        "id": "251322",
        "name": "Philipp Köhn",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "48015",
        "name": "Lukas Hradecky",
        "position": "GK",
        "lastStatus": "starting"
      },
      {
        "id": "1075582",
        "name": "Jules Stawiecki",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "745341",
        "name": "Yann Lienard",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "648779",
        "name": "Wilfried Singo",
        "position": "CB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "1005240",
        "name": "Christian Mawissa",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "228948",
        "name": "Thilo Kehrer",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "292808",
        "name": "Wout Faes",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "563963",
        "name": "Mohammed Salisu",
        "position": "CB",
        "lastStatus": "injured"
      },
      {
        "id": "175722",
        "name": "Eric Dier",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1078416",
        "name": "Bradel Kiwa",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "420064",
        "name": "Caio Henrique",
        "position": "LB",
        "lastStatus": "injured"
      },
      {
        "id": "947360",
        "name": "Kassoum Ouattara",
        "position": "LB",
        "lastStatus": "injured"
      },
      {
        "id": "789082",
        "name": "Vanderson",
        "position": "RB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "364245",
        "name": "Jordan Teze",
        "position": "RB",
        "lastStatus": "starting"
      },
      {
        "id": "975336",
        "name": "Ilane Touré",
        "position": "RB",
        "lastStatus": "sub_in"
      },
      {
        "id": "334526",
        "name": "Denis Zakaria",
        "position": "DM",
        "lastStatus": "starting"
      },
      {
        "id": "975347",
        "name": "Aladji Bamba",
        "position": "DM",
        "lastStatus": "sub_in"
      },
      {
        "id": "981700",
        "name": "Samuel Nibombe",
        "position": "DM",
        "lastStatus": "bench"
      },
      {
        "id": "1110070",
        "name": "Matthias Wamu Oyatambwe",
        "position": "DM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "918969",
        "name": "Lamine Camara",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "745173",
        "name": "Mamadou Coulibaly",
        "position": "CM",
        "lastStatus": "sub_in"
      },
      {
        "id": "122153",
        "name": "Paul Pogba",
        "position": "CM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1075588",
        "name": "Pape Cabral",
        "position": "CM",
        "lastStatus": "bench"
      },
      {
        "id": "490426",
        "name": "Krépin Diatta",
        "position": "RM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "263918",
        "name": "Aleksandr Golovin",
        "position": "AM",
        "lastStatus": "injured"
      },
      {
        "id": "743387",
        "name": "Stanis Idumbo",
        "position": "AM",
        "lastStatus": "injured"
      },
      {
        "id": "658536",
        "name": "Simon Adingra",
        "position": "LW",
        "lastStatus": "starting"
      },
      {
        "id": "810895",
        "name": "Eliesse Ben Seghir",
        "position": "LW",
        "lastStatus": "not_at_club"
      },
      {
        "id": "466810",
        "name": "Ansu Fati",
        "position": "LW",
        "lastStatus": "starting"
      },
      {
        "id": "165793",
        "name": "Takumi Minamino",
        "position": "LW",
        "lastStatus": "injured"
      },
      {
        "id": "810909",
        "name": "Lucas Michal",
        "position": "LW",
        "lastStatus": "not_included"
      },
      {
        "id": "745200",
        "name": "Maghnes Akliouche",
        "position": "RW",
        "lastStatus": "starting"
      },
      {
        "id": "503770",
        "name": "Folarin Balogun",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "565821",
        "name": "Mika Biereth",
        "position": "CF",
        "lastStatus": "sub_in"
      },
      {
        "id": "1004834",
        "name": "George Ilenikhena",
        "position": "CF",
        "lastStatus": "not_included"
      },
      {
        "id": "918414",
        "name": "Paris Brunner",
        "position": "CF",
        "lastStatus": "sub_in"
      }
    ]
  },
  {
    "clubId": "fc-lorient",
    "club": "FC Lorient",
    "country": "Франция",
    "league": "Ligue 1",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/FR1/2025/fc-lorient.json",
    "scrapedAt": "2026-06-12T22:53:51.713904+00:00",
    "players": [
      {
        "id": "147051",
        "name": "Yvon Mvogo",
        "position": "GK",
        "lastStatus": "starting"
      },
      {
        "id": "333175",
        "name": "Bingourou Kamara",
        "position": "GK",
        "lastStatus": "injured"
      },
      {
        "id": "124901",
        "name": "Benjamin Leroy",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "496706",
        "name": "Montassar Talbi",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "807165",
        "name": "Bamo Meïté",
        "position": "CB",
        "lastStatus": "sub_in"
      },
      {
        "id": "1182738",
        "name": "Abdoulaye Faye",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "646829",
        "name": "Nathaniel Adjei",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "649023",
        "name": "Formose Mendy",
        "position": "CB",
        "lastStatus": "not_included"
      },
      {
        "id": "708678",
        "name": "Isaak Touré",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1180573",
        "name": "Lucas Leaudais",
        "position": "CB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "1079441",
        "name": "Izak Akakpo",
        "position": "CB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "1047105",
        "name": "Stevan Siba",
        "position": "CB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "1088199",
        "name": "Arsène Kouassi",
        "position": "LB",
        "lastStatus": "starting"
      },
      {
        "id": "717118",
        "name": "Darlin Yongwa",
        "position": "LB",
        "lastStatus": "bench"
      },
      {
        "id": "1169128",
        "name": "Isaac Monnier",
        "position": "LB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "391720",
        "name": "Igor Silva",
        "position": "RB",
        "lastStatus": "bench"
      },
      {
        "id": "238626",
        "name": "Laurent Abergel",
        "position": "DM",
        "lastStatus": "starting"
      },
      {
        "id": "1074628",
        "name": "Arthur Avom",
        "position": "CM",
        "lastStatus": "sub_in"
      },
      {
        "id": "691958",
        "name": "Noah Cadiou",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "1144121",
        "name": "Daniel Semedo",
        "position": "CM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "766412",
        "name": "Théo Le Bris",
        "position": "RM",
        "lastStatus": "injured"
      },
      {
        "id": "816308",
        "name": "Panos Katseris",
        "position": "RM",
        "lastStatus": "starting"
      },
      {
        "id": "700078",
        "name": "Joel Mvuka",
        "position": "RM",
        "lastStatus": "not_included"
      },
      {
        "id": "322305",
        "name": "Jean-Victor Makengo",
        "position": "AM",
        "lastStatus": "starting"
      },
      {
        "id": "969447",
        "name": "Dermane Karim",
        "position": "AM",
        "lastStatus": "sub_in"
      },
      {
        "id": "590914",
        "name": "Bandiougou Fadiga",
        "position": "AM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1173050",
        "name": "Martin Bley",
        "position": "AM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "810411",
        "name": "Pablo Pagis",
        "position": "LW",
        "lastStatus": "starting"
      },
      {
        "id": "1011152",
        "name": "Trevan Sanusi",
        "position": "LW",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "822458",
        "name": "Bamba Dieng",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "704270",
        "name": "Sambou Soumano",
        "position": "CF",
        "lastStatus": "sub_in"
      },
      {
        "id": "619461",
        "name": "Mohamed Bamba",
        "position": "CF",
        "lastStatus": "bench"
      },
      {
        "id": "239647",
        "name": "Aiyegun Tosin",
        "position": "CF",
        "lastStatus": "sub_in"
      },
      {
        "id": "1074650",
        "name": "Sohan Baldoni",
        "position": "CF",
        "lastStatus": "not_at_club"
      },
      {
        "id": "1459673",
        "name": "Mamadou Koné",
        "position": "CF",
        "lastStatus": "not_at_club"
      }
    ]
  },
  {
    "clubId": "fc-metz",
    "club": "FC Metz",
    "country": "Франция",
    "league": "Ligue 1",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/FR1/2025/fc-metz.json",
    "scrapedAt": "2026-06-12T22:58:18.758289+00:00",
    "players": [
      {
        "id": "542452",
        "name": "Jonathan Fischer",
        "position": "GK",
        "lastStatus": "starting"
      },
      {
        "id": "568728",
        "name": "Pape Sy",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "666975",
        "name": "Ousmane Ba",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "955280",
        "name": "Romain Jean-Baptiste",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "1111777",
        "name": "Sadibou Sané",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "991054",
        "name": "Terry Yegbe",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "182894",
        "name": "Jean-Philippe Gbamin",
        "position": "CB",
        "lastStatus": "sub_in"
      },
      {
        "id": "1038308",
        "name": "Michel Mboula",
        "position": "CB",
        "lastStatus": "sub_in"
      },
      {
        "id": "1467662",
        "name": "Moustapha Diop",
        "position": "CB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "296422",
        "name": "Fodé Ballo-Touré",
        "position": "LB",
        "lastStatus": "bench"
      },
      {
        "id": "1041555",
        "name": "Yannis Lawson",
        "position": "LB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "481513",
        "name": "Koffi Kouao",
        "position": "RB",
        "lastStatus": "bench"
      },
      {
        "id": "400680",
        "name": "Kevin Van Den Kerkhof",
        "position": "RB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "190685",
        "name": "Bouna Sarr",
        "position": "RB",
        "lastStatus": "starting"
      },
      {
        "id": "156618",
        "name": "Maxime Colin",
        "position": "RB",
        "lastStatus": "starting"
      },
      {
        "id": "1099860",
        "name": "Cléo Mélières",
        "position": "RB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1178489",
        "name": "Alpha Touré",
        "position": "DM",
        "lastStatus": "starting"
      },
      {
        "id": "649020",
        "name": "Boubacar Traoré",
        "position": "DM",
        "lastStatus": "sub_in"
      },
      {
        "id": "127160",
        "name": "Benjamin Stambouli",
        "position": "DM",
        "lastStatus": "starting"
      },
      {
        "id": "1297673",
        "name": "Believe Munongo",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "539232",
        "name": "Jessy Deminguet",
        "position": "CM",
        "lastStatus": "injured"
      },
      {
        "id": "919620",
        "name": "Joseph Nduquidi",
        "position": "CM",
        "lastStatus": "not_included"
      },
      {
        "id": "1306999",
        "name": "Jahyann Pandore",
        "position": "CM",
        "lastStatus": "sub_in"
      },
      {
        "id": "860053",
        "name": "Ismaël Guerti",
        "position": "AM",
        "lastStatus": "bench"
      },
      {
        "id": "810909",
        "name": "Lucas Michal",
        "position": "LW",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "419067",
        "name": "Giorgi Tsitaishvili",
        "position": "LW",
        "lastStatus": "injured"
      },
      {
        "id": "568696",
        "name": "Cheikh Sabaly",
        "position": "LW",
        "lastStatus": "not_at_club"
      },
      {
        "id": "677057",
        "name": "Giorgi Abuashvili",
        "position": "LW",
        "lastStatus": "starting"
      },
      {
        "id": "838562",
        "name": "Morgan Bokele",
        "position": "LW",
        "lastStatus": "not_included"
      },
      {
        "id": "344892",
        "name": "Gauthier Hein",
        "position": "RW",
        "lastStatus": "starting"
      },
      {
        "id": "375391",
        "name": "Joel Asoro",
        "position": "RW",
        "lastStatus": "not_at_club"
      },
      {
        "id": "707063",
        "name": "Malick Mbaye",
        "position": "RW",
        "lastStatus": "not_included"
      },
      {
        "id": "1226357",
        "name": "Brian Madjo",
        "position": "CF",
        "lastStatus": "not_included"
      },
      {
        "id": "1178488",
        "name": "Idrissa Gueye",
        "position": "CF",
        "lastStatus": "not_at_club"
      },
      {
        "id": "1307004",
        "name": "Nathan Mbala",
        "position": "CF",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "344888",
        "name": "Habib Diallo",
        "position": "CF",
        "lastStatus": "bench"
      },
      {
        "id": "186233",
        "name": "Giorgi Kvilitaia",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "1111776",
        "name": "Ibou Sané",
        "position": "CF",
        "lastStatus": "not_included"
      }
    ]
  },
  {
    "clubId": "fc-nantes",
    "club": "FC Nantes",
    "country": "Франция",
    "league": "Ligue 1",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/FR1/2025/fc-nantes.json",
    "scrapedAt": "2026-06-12T22:54:51.848904+00:00",
    "players": [
      {
        "id": "60561",
        "name": "Anthony Lopes",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "190280",
        "name": "Patrik Carlgren",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "928873",
        "name": "Alexis Mirbach",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "659510",
        "name": "Lucas Bonelli",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1241207",
        "name": "Tylel Tati",
        "position": "CB",
        "lastStatus": "injured"
      },
      {
        "id": "358143",
        "name": "Chidozie Awaziem",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "485965",
        "name": "Nicolas Cozza",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "944724",
        "name": "Ali Youssif",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "962555",
        "name": "Abakar Sylla",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "344864",
        "name": "Jean-Kévin Duverne",
        "position": "CB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "169511",
        "name": "Uros Radakovic",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "825438",
        "name": "Sékou Doucouré",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "332560",
        "name": "Deiver Machado",
        "position": "LB",
        "lastStatus": "injured"
      },
      {
        "id": "344072",
        "name": "Kelvin Amian",
        "position": "RB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "384859",
        "name": "Fabien Centonze",
        "position": "RB",
        "lastStatus": "injured"
      },
      {
        "id": "354352",
        "name": "Frédéric Guilbert",
        "position": "RB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "944355",
        "name": "Mathieu Acapandié",
        "position": "RB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "585973",
        "name": "Johann Lepenant",
        "position": "DM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1011200",
        "name": "Junior Mwanga",
        "position": "DM",
        "lastStatus": "not_included"
      },
      {
        "id": "372712",
        "name": "Ibrahima Sissoko",
        "position": "DM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1176215",
        "name": "Bahmed Deuff",
        "position": "DM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "550957",
        "name": "Hyeok-kyu Kwon",
        "position": "DM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "74869",
        "name": "Francis Coquelin",
        "position": "DM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "855159",
        "name": "Sacha Ziani",
        "position": "DM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "1004619",
        "name": "Dehmaine Tabibou",
        "position": "CM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "911328",
        "name": "Mohamed Kaba",
        "position": "CM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1119456",
        "name": "Louis Leroux",
        "position": "AM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "562948",
        "name": "Hyun-seok Hong",
        "position": "AM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "113707",
        "name": "Rémy Cabella",
        "position": "AM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1119453",
        "name": "Herba Guirassy",
        "position": "LW",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "795274",
        "name": "Mayckel Lahdo",
        "position": "RW",
        "lastStatus": "not_at_club"
      },
      {
        "id": "796589",
        "name": "Yassine Benhattab",
        "position": "RW",
        "lastStatus": "not_included"
      },
      {
        "id": "659543",
        "name": "Matthis Abline",
        "position": "CF",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "462348",
        "name": "Mostafa Mohamed",
        "position": "CF",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "531949",
        "name": "Ignatius Ganago",
        "position": "CF",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1155608",
        "name": "Amady Camara",
        "position": "CF",
        "lastStatus": "not_at_club"
      },
      {
        "id": "96533",
        "name": "Youssef El Arabi",
        "position": "CF",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1306607",
        "name": "Junior Koné",
        "position": "CF",
        "lastStatus": "not_at_club"
      }
    ]
  },
  {
    "clubId": "rennes",
    "club": "Stade Rennais FC",
    "country": "Франция",
    "league": "Ligue 1",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/FR1/2025/fc-stade-rennes.json",
    "scrapedAt": "2026-06-12T22:49:44.233132+00:00",
    "players": [
      {
        "id": "191056",
        "name": "Brice Samba",
        "position": "GK",
        "lastStatus": "absent"
      },
      {
        "id": "576033",
        "name": "Doğan Alemdar",
        "position": "GK",
        "lastStatus": "not_at_club"
      },
      {
        "id": "979761",
        "name": "Mathys Silistrie",
        "position": "GK",
        "lastStatus": "starting"
      },
      {
        "id": "1108282",
        "name": "Ayoub Akabou",
        "position": "GK",
        "lastStatus": "not_at_club"
      },
      {
        "id": "1169721",
        "name": "Kilian Belazzoug",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "1004301",
        "name": "Jérémy Jacquet",
        "position": "CB",
        "lastStatus": "injured"
      },
      {
        "id": "485960",
        "name": "Lilian Brassier",
        "position": "CB",
        "lastStatus": "bench"
      },
      {
        "id": "690799",
        "name": "Anthony Rouault",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "1134251",
        "name": "Abdelhamid Ait Boudlal",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "798404",
        "name": "Alidu Seidu",
        "position": "CB",
        "lastStatus": "bench"
      },
      {
        "id": "572326",
        "name": "Christopher Wooh",
        "position": "CB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "666974",
        "name": "Mikayil Faye",
        "position": "CB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "1165264",
        "name": "Isiaka Soukouna",
        "position": "CB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "557613",
        "name": "Quentin Merlin",
        "position": "LB",
        "lastStatus": "starting"
      },
      {
        "id": "1176345",
        "name": "Mahamadou Nagida",
        "position": "LB",
        "lastStatus": "starting"
      },
      {
        "id": "1196702",
        "name": "Junior Ake",
        "position": "LB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "239743",
        "name": "Przemyslaw Frankowski",
        "position": "RB",
        "lastStatus": "injured"
      },
      {
        "id": "275303",
        "name": "Hans Hateboer",
        "position": "RB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "1005076",
        "name": "Paolo Limon",
        "position": "DM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1200418",
        "name": "Chibuike Ugochukwu",
        "position": "DM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "324795",
        "name": "Mahdi Camara",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "667517",
        "name": "Jordan James",
        "position": "CM",
        "lastStatus": "not_included"
      },
      {
        "id": "931160",
        "name": "Djaoui Cissé",
        "position": "CM",
        "lastStatus": "bench"
      },
      {
        "id": "182893",
        "name": "Seko Fofana",
        "position": "CM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "332889",
        "name": "Valentin Rongier",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "242632",
        "name": "Glen Kamara",
        "position": "CM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "288225",
        "name": "Ludovic Blas",
        "position": "RM",
        "lastStatus": "starting"
      },
      {
        "id": "320748",
        "name": "Sebastian Szymanski",
        "position": "AM",
        "lastStatus": "starting"
      },
      {
        "id": "507341",
        "name": "Fabian Rieder",
        "position": "AM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "1170001",
        "name": "Henrick Do Marcolino",
        "position": "AM",
        "lastStatus": "bench"
      },
      {
        "id": "928323",
        "name": "Ibrahim Salah",
        "position": "LW",
        "lastStatus": "not_at_club"
      },
      {
        "id": "1170313",
        "name": "Lucas Rosier",
        "position": "LW",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "551505",
        "name": "Mousa Tamari",
        "position": "RW",
        "lastStatus": "starting"
      },
      {
        "id": "324811",
        "name": "Arnaud Nordin",
        "position": "RW",
        "lastStatus": "sub_in"
      },
      {
        "id": "1227106",
        "name": "Elías Legendre Quiñónez",
        "position": "RW",
        "lastStatus": "not_at_club"
      },
      {
        "id": "986285",
        "name": "Nordan Mukiele",
        "position": "RW",
        "lastStatus": "sub_in"
      },
      {
        "id": "461607",
        "name": "Estéban Lepaul",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "1141560",
        "name": "Kader Meïté",
        "position": "CF",
        "lastStatus": "not_at_club"
      },
      {
        "id": "237662",
        "name": "Breel Embolo",
        "position": "CF",
        "lastStatus": "sub_in"
      },
      {
        "id": "1153105",
        "name": "Yassir Zabiri",
        "position": "CF",
        "lastStatus": "bench"
      },
      {
        "id": "672803",
        "name": "Bertuğ Yıldırım",
        "position": "CF",
        "lastStatus": "not_at_club"
      }
    ]
  },
  {
    "clubId": "fc-toulouse",
    "club": "FC Toulouse",
    "country": "Франция",
    "league": "Ligue 1",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/FR1/2025/fc-toulouse.json",
    "scrapedAt": "2026-06-12T22:52:19.384376+00:00",
    "players": [
      {
        "id": "912902",
        "name": "Guillaume Restes",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "328770",
        "name": "Kjetil Haug",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "524937",
        "name": "Álex Domínguez",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "966575",
        "name": "Naime Said Mchindra",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1085624",
        "name": "Frédéric Efuele Ngoyala",
        "position": "Abwehr",
        "lastStatus": "not_at_club"
      },
      {
        "id": "1006411",
        "name": "Jaydee Canvot",
        "position": "CB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "597659",
        "name": "Charlie Cresswell",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "429259",
        "name": "Mark McKenzie",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "283227",
        "name": "Rasmus Nicolaisen",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1075583",
        "name": "Seny Koumbassa",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1085625",
        "name": "Gaëtan Bakhouche Piernas",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1191444",
        "name": "Dayann Methalie",
        "position": "LB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "883865",
        "name": "Rafik Messali",
        "position": "RB",
        "lastStatus": "injured"
      },
      {
        "id": "794758",
        "name": "Warren Kamanzi",
        "position": "RB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "161869",
        "name": "Djibril Sidibé",
        "position": "RB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1186663",
        "name": "Thibaud Garondo",
        "position": "RB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "1200427",
        "name": "Alexis Vossah",
        "position": "CM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "467632",
        "name": "Cristian Cásseres Jr.",
        "position": "CM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "949113",
        "name": "Pape Demba Diop",
        "position": "CM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "658533",
        "name": "Abu Francis",
        "position": "CM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "275249",
        "name": "Niklas Schmidt",
        "position": "CM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "710885",
        "name": "Mario Sauer",
        "position": "CM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1069459",
        "name": "Noah Lahmadi",
        "position": "CM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1273022",
        "name": "Adam El Ouali",
        "position": "CM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "476836",
        "name": "Aron Dønnum",
        "position": "RM",
        "lastStatus": "absent"
      },
      {
        "id": "986310",
        "name": "Mathis Saka",
        "position": "AM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "463613",
        "name": "Yann Gboho",
        "position": "LW",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1200417",
        "name": "Ilyas Azizi",
        "position": "LW",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1078326",
        "name": "Noah Edjouma",
        "position": "RW",
        "lastStatus": "not_at_club"
      },
      {
        "id": "743599",
        "name": "Emersonn",
        "position": "CF",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "989574",
        "name": "Santiago Hidalgo",
        "position": "CF",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "683625",
        "name": "Jacen Russell-Rowe",
        "position": "CF",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "807689",
        "name": "Frank Magri",
        "position": "CF",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1234988",
        "name": "Julián Vignolo",
        "position": "CF",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1075572",
        "name": "Enzo Faty",
        "position": "CF",
        "lastStatus": "not_at_club"
      }
    ]
  },
  {
    "clubId": "lille",
    "club": "LOSC Lille",
    "country": "Франция",
    "league": "Ligue 1",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/FR1/2025/losc-lille.json",
    "scrapedAt": "2026-06-12T22:48:46.878761+00:00",
    "players": [
      {
        "id": "361256",
        "name": "Berke Özer",
        "position": "GK",
        "lastStatus": "starting"
      },
      {
        "id": "417278",
        "name": "Arnaud Bodart",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "1190577",
        "name": "Thomas Sajous",
        "position": "GK",
        "lastStatus": "not_at_club"
      },
      {
        "id": "548254",
        "name": "Nathan Ngoy",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "648020",
        "name": "Alexsandro",
        "position": "CB",
        "lastStatus": "bench"
      },
      {
        "id": "1160753",
        "name": "Isaac Cossier",
        "position": "CB",
        "lastStatus": "not_included"
      },
      {
        "id": "203348",
        "name": "Chancel Mbemba",
        "position": "CB",
        "lastStatus": "bench"
      },
      {
        "id": "80293",
        "name": "Aïssa Mandi",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "1306455",
        "name": "Maxima Goffi",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "990732",
        "name": "Ousmane Touré",
        "position": "CB",
        "lastStatus": "injured"
      },
      {
        "id": "318523",
        "name": "Romain Perraud",
        "position": "LB",
        "lastStatus": "starting"
      },
      {
        "id": "258364",
        "name": "Calvin Verdonk",
        "position": "LB",
        "lastStatus": "sub_in"
      },
      {
        "id": "816580",
        "name": "Tiago Santos",
        "position": "RB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "100986",
        "name": "Thomas Meunier",
        "position": "RB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1016015",
        "name": "Ngal'ayel Mukau",
        "position": "DM",
        "lastStatus": "starting"
      },
      {
        "id": "245537",
        "name": "Nabil Bentaleb",
        "position": "DM",
        "lastStatus": "starting"
      },
      {
        "id": "84301",
        "name": "Benjamin André",
        "position": "DM",
        "lastStatus": "starting"
      },
      {
        "id": "707230",
        "name": "Ugo Raghouber",
        "position": "DM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "1083054",
        "name": "Lilian Baret",
        "position": "DM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1097139",
        "name": "Ayyoub Bouaddi",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "221025",
        "name": "André Gomes",
        "position": "CM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "920939",
        "name": "Vincent Burlet",
        "position": "LM",
        "lastStatus": "not_included"
      },
      {
        "id": "652275",
        "name": "Hákon Arnar Haraldsson",
        "position": "AM",
        "lastStatus": "starting"
      },
      {
        "id": "1306465",
        "name": "Saad Boussadia",
        "position": "AM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "479648",
        "name": "Félix Correia",
        "position": "LW",
        "lastStatus": "starting"
      },
      {
        "id": "580657",
        "name": "Osame Sahraoui",
        "position": "LW",
        "lastStatus": "sub_in"
      },
      {
        "id": "1184007",
        "name": "Soriba Diaoune",
        "position": "LW",
        "lastStatus": "not_at_club"
      },
      {
        "id": "496857",
        "name": "Edon Zhegrova",
        "position": "RW",
        "lastStatus": "not_at_club"
      },
      {
        "id": "903666",
        "name": "Ethan Mbappé",
        "position": "RW",
        "lastStatus": "sub_in"
      },
      {
        "id": "353404",
        "name": "Gaëtan Perrin",
        "position": "RW",
        "lastStatus": "sub_in"
      },
      {
        "id": "903359",
        "name": "Marius Broholm",
        "position": "RW",
        "lastStatus": "injured"
      },
      {
        "id": "1078326",
        "name": "Noah Edjouma",
        "position": "RW",
        "lastStatus": "bench"
      },
      {
        "id": "724129",
        "name": "Matias Fernandez-Pardo",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "885445",
        "name": "Hamza Igamane",
        "position": "CF",
        "lastStatus": "injured"
      },
      {
        "id": "82442",
        "name": "Olivier Giroud",
        "position": "CF",
        "lastStatus": "sub_in"
      },
      {
        "id": "1133928",
        "name": "Angel Yondjo Matah",
        "position": "CF",
        "lastStatus": "not_at_club"
      }
    ]
  },
  {
    "clubId": "ogc-nizza",
    "club": "OGC Nice",
    "country": "Франция",
    "league": "Ligue 1",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/FR1/2025/ogc-nizza.json",
    "scrapedAt": "2026-06-12T22:51:41.869549+00:00",
    "players": [
      {
        "id": "448632",
        "name": "Yehvann Diouf",
        "position": "GK",
        "lastStatus": "starting"
      },
      {
        "id": "127188",
        "name": "Maxime Dupé",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "828889",
        "name": "Bartosz Zelazowski",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "891998",
        "name": "Antoine Mendy",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "1113451",
        "name": "Kojo Peprah Oppong",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "1121298",
        "name": "Juma Bah",
        "position": "CB",
        "lastStatus": "bench"
      },
      {
        "id": "674612",
        "name": "Youssouf Ndayishimiye",
        "position": "CB",
        "lastStatus": "bench"
      },
      {
        "id": "1089202",
        "name": "Moïse Bombito",
        "position": "CB",
        "lastStatus": "injured"
      },
      {
        "id": "566025",
        "name": "Mohamed Abdelmonem",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1134110",
        "name": "Brad-Hamilton Mantsounga",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "16136",
        "name": "Dante",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "532775",
        "name": "Melvin Bard",
        "position": "LB",
        "lastStatus": "absent"
      },
      {
        "id": "211474",
        "name": "Ali Abdi",
        "position": "LB",
        "lastStatus": "starting"
      },
      {
        "id": "1091902",
        "name": "Mousslim Youssouf",
        "position": "LB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "175639",
        "name": "Jonathan Clauss",
        "position": "RB",
        "lastStatus": "starting"
      },
      {
        "id": "1134250",
        "name": "Hamza Koutoune",
        "position": "RB",
        "lastStatus": "not_included"
      },
      {
        "id": "370791",
        "name": "Pablo Rosario",
        "position": "DM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "569845",
        "name": "Charles Vanhoutte",
        "position": "DM",
        "lastStatus": "starting"
      },
      {
        "id": "688707",
        "name": "Salis Abdul Samed",
        "position": "DM",
        "lastStatus": "bench"
      },
      {
        "id": "1191473",
        "name": "Everton",
        "position": "DM",
        "lastStatus": "injured"
      },
      {
        "id": "560593",
        "name": "Hicham Boudaoui",
        "position": "CM",
        "lastStatus": "sub_in"
      },
      {
        "id": "174094",
        "name": "Morgan Sanson",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "450936",
        "name": "Tanguy Ndombélé",
        "position": "CM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1208968",
        "name": "Djibril Coulibaly",
        "position": "CM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "750904",
        "name": "Tom Louchet",
        "position": "RM",
        "lastStatus": "sub_in"
      },
      {
        "id": "1254786",
        "name": "Gabin Bernardeau",
        "position": "AM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1191475",
        "name": "Millan Brignone",
        "position": "AM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "569389",
        "name": "Sofiane Diop",
        "position": "LW",
        "lastStatus": "starting"
      },
      {
        "id": "216569",
        "name": "Jérémie Boga",
        "position": "LW",
        "lastStatus": "not_at_club"
      },
      {
        "id": "535820",
        "name": "Isak Jansson",
        "position": "LW",
        "lastStatus": "sub_in"
      },
      {
        "id": "1191474",
        "name": "Enguerrand Bouard",
        "position": "LW",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "670847",
        "name": "Mohamed-Ali Cho",
        "position": "RW",
        "lastStatus": "sub_in"
      },
      {
        "id": "707242",
        "name": "Badredine Bouanani",
        "position": "RW",
        "lastStatus": "not_at_club"
      },
      {
        "id": "1097113",
        "name": "Kaïl Boudache",
        "position": "RW",
        "lastStatus": "starting"
      },
      {
        "id": "479638",
        "name": "Tiago Gouveia",
        "position": "RW",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "543051",
        "name": "Billal Brahimi",
        "position": "RW",
        "lastStatus": "not_included"
      },
      {
        "id": "659542",
        "name": "Elye Wahi",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "538874",
        "name": "Terem Moffi",
        "position": "CF",
        "lastStatus": "not_at_club"
      },
      {
        "id": "718201",
        "name": "Kevin Carlos",
        "position": "CF",
        "lastStatus": "sub_in"
      },
      {
        "id": "1314671",
        "name": "Bernard Nguene",
        "position": "CF",
        "lastStatus": "not_at_club"
      },
      {
        "id": "1004479",
        "name": "Zoumana Diallo",
        "position": "CF",
        "lastStatus": "not_in_squad"
      }
    ]
  },
  {
    "clubId": "lyon",
    "club": "Olympique Lyon",
    "country": "Франция",
    "league": "Ligue 1",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/FR1/2025/olympique-lyon.json",
    "scrapedAt": "2026-06-12T22:47:58.424270+00:00",
    "players": [
      {
        "id": "316884",
        "name": "Dominik Greif",
        "position": "GK",
        "lastStatus": "starting"
      },
      {
        "id": "282028",
        "name": "Rémy Descamps",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "1071430",
        "name": "Lassine Diarra",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1103037",
        "name": "Yvann Konan",
        "position": "GK",
        "lastStatus": "not_at_club"
      },
      {
        "id": "1216906",
        "name": "Matthias da Silva",
        "position": "GK",
        "lastStatus": "not_at_club"
      },
      {
        "id": "291200",
        "name": "Moussa Niakhaté",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "578421",
        "name": "Ruben Kluivert",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "1275040",
        "name": "Noham Kamara",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "187718",
        "name": "Clinton Mata",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "646402",
        "name": "Abner",
        "position": "LB",
        "lastStatus": "starting"
      },
      {
        "id": "131225",
        "name": "Nicolás Tagliafico",
        "position": "LB",
        "lastStatus": "bench"
      },
      {
        "id": "951579",
        "name": "Saël Kumbedi",
        "position": "RB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "285845",
        "name": "Ainsley Maitland-Niles",
        "position": "RB",
        "lastStatus": "starting"
      },
      {
        "id": "275303",
        "name": "Hans Hateboer",
        "position": "RB",
        "lastStatus": "sub_in"
      },
      {
        "id": "1119391",
        "name": "Steeve Kango",
        "position": "RB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "979773",
        "name": "Téo Barišić",
        "position": "RB",
        "lastStatus": "not_included"
      },
      {
        "id": "618494",
        "name": "Tyler Morton",
        "position": "DM",
        "lastStatus": "injured"
      },
      {
        "id": "670096",
        "name": "Tanner Tessmann",
        "position": "DM",
        "lastStatus": "injured"
      },
      {
        "id": "289592",
        "name": "Orel Mangala",
        "position": "DM",
        "lastStatus": "starting"
      },
      {
        "id": "1004486",
        "name": "Mathys de Carvalho",
        "position": "DM",
        "lastStatus": "bench"
      },
      {
        "id": "1187942",
        "name": "Khalis Merah",
        "position": "CM",
        "lastStatus": "bench"
      },
      {
        "id": "190393",
        "name": "Corentin Tolisso",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "1133734",
        "name": "Fallou Fall",
        "position": "CM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "500053",
        "name": "Pavel Sulc",
        "position": "AM",
        "lastStatus": "starting"
      },
      {
        "id": "802515",
        "name": "Noah Nartey",
        "position": "AM",
        "lastStatus": "bench"
      },
      {
        "id": "652061",
        "name": "Adam Karabec",
        "position": "AM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1256286",
        "name": "Tiago Gonçalves",
        "position": "AM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "743386",
        "name": "Malick Fofana",
        "position": "LW",
        "lastStatus": "sub_in"
      },
      {
        "id": "952282",
        "name": "Afonso Moreira",
        "position": "LW",
        "lastStatus": "starting"
      },
      {
        "id": "1200423",
        "name": "Rémi Himbert",
        "position": "LW",
        "lastStatus": "injured"
      },
      {
        "id": "1301102",
        "name": "Adil Hamdani",
        "position": "LW",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "955070",
        "name": "Ernest Nuamah",
        "position": "RW",
        "lastStatus": "sub_in"
      },
      {
        "id": "118287",
        "name": "Rachid Ghezzal",
        "position": "RW",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "971570",
        "name": "Endrick",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "729814",
        "name": "Georges Mikautadze",
        "position": "CF",
        "lastStatus": "not_at_club"
      },
      {
        "id": "640109",
        "name": "Martín Satriano",
        "position": "CF",
        "lastStatus": "not_at_club"
      },
      {
        "id": "221958",
        "name": "Roman Yaremchuk",
        "position": "CF",
        "lastStatus": "sub_in"
      },
      {
        "id": "1106860",
        "name": "Enzo Molebe",
        "position": "CF",
        "lastStatus": "not_included"
      },
      {
        "id": "1108478",
        "name": "Alejandro Gomes Rodríguez",
        "position": "CF",
        "lastStatus": "not_included"
      }
    ]
  },
  {
    "clubId": "marseille",
    "club": "Olympique Marseille",
    "country": "Франция",
    "league": "Ligue 1",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/FR1/2025/olympique-marseille.json",
    "scrapedAt": "2026-06-12T22:46:58.526423+00:00",
    "players": [
      {
        "id": "229604",
        "name": "Gerónimo Rulli",
        "position": "GK",
        "lastStatus": "starting"
      },
      {
        "id": "315253",
        "name": "Jeffrey de Lange",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "620912",
        "name": "Théo Vermot",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "474800",
        "name": "Facundo Medina",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "575998",
        "name": "Leonardo Balerdi",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "361914",
        "name": "Nayef Aguerd",
        "position": "CB",
        "lastStatus": "injured"
      },
      {
        "id": "353366",
        "name": "Benjamin Pavard",
        "position": "CB",
        "lastStatus": "sub_in"
      },
      {
        "id": "581669",
        "name": "CJ Egan-Riley",
        "position": "CB",
        "lastStatus": "injured"
      },
      {
        "id": "328609",
        "name": "Derek Cornelius",
        "position": "CB",
        "lastStatus": "not_included"
      },
      {
        "id": "1070591",
        "name": "Hilan Hamzaoui Slimani",
        "position": "CB",
        "lastStatus": "bench"
      },
      {
        "id": "1131155",
        "name": "Pladi N'Zinga Pambani",
        "position": "CB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "1209113",
        "name": "Fodé Camara",
        "position": "CB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "181778",
        "name": "Emerson",
        "position": "LB",
        "lastStatus": "starting"
      },
      {
        "id": "192616",
        "name": "Ulisses Garcia",
        "position": "LB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "354482",
        "name": "Amir Murillo",
        "position": "RB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "298975",
        "name": "Pol Lirola",
        "position": "RB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "1183715",
        "name": "Kelyann Bezahaf",
        "position": "RB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "926694",
        "name": "Arthur Vermeeren",
        "position": "DM",
        "lastStatus": "sub_in"
      },
      {
        "id": "167799",
        "name": "Pierre-Emile Højbjerg",
        "position": "DM",
        "lastStatus": "starting"
      },
      {
        "id": "920470",
        "name": "Tochukwu Nnadi",
        "position": "DM",
        "lastStatus": "starting"
      },
      {
        "id": "127189",
        "name": "Geoffrey Kondogbia",
        "position": "DM",
        "lastStatus": "injured"
      },
      {
        "id": "1164662",
        "name": "Nouhoum Kamissoko",
        "position": "DM",
        "lastStatus": "sub_in"
      },
      {
        "id": "420213",
        "name": "Quinten Timber",
        "position": "CM",
        "lastStatus": "sub_in"
      },
      {
        "id": "182913",
        "name": "Adrien Rabiot",
        "position": "CM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "406634",
        "name": "Matt O'Riley",
        "position": "CM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "659520",
        "name": "Bilal Nadir",
        "position": "CM",
        "lastStatus": "bench"
      },
      {
        "id": "370846",
        "name": "Timothy Weah",
        "position": "RM",
        "lastStatus": "starting"
      },
      {
        "id": "890719",
        "name": "Ethan Nwaneri",
        "position": "AM",
        "lastStatus": "bench"
      },
      {
        "id": "392770",
        "name": "Angel Gomes",
        "position": "AM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "1170286",
        "name": "Darryl Bakola",
        "position": "AM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "592979",
        "name": "Himad Abdelli",
        "position": "AM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "653610",
        "name": "Igor Paixão",
        "position": "LW",
        "lastStatus": "starting"
      },
      {
        "id": "672381",
        "name": "Jonathan Rowe",
        "position": "LW",
        "lastStatus": "not_at_club"
      },
      {
        "id": "391065",
        "name": "Hamed Traoré",
        "position": "LW",
        "lastStatus": "injured"
      },
      {
        "id": "372711",
        "name": "Amine Harit",
        "position": "LW",
        "lastStatus": "not_at_club"
      },
      {
        "id": "1206824",
        "name": "Tadjidine Mmadi",
        "position": "LW",
        "lastStatus": "not_at_club"
      },
      {
        "id": "532826",
        "name": "Mason Greenwood",
        "position": "RW",
        "lastStatus": "starting"
      },
      {
        "id": "1183719",
        "name": "Keyliane Abdallah",
        "position": "RW",
        "lastStatus": "not_at_club"
      },
      {
        "id": "418659",
        "name": "Amine Gouiri",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "1131161",
        "name": "Robinio Vaz",
        "position": "CF",
        "lastStatus": "not_at_club"
      },
      {
        "id": "217115",
        "name": "Neal Maupay",
        "position": "CF",
        "lastStatus": "not_at_club"
      },
      {
        "id": "58864",
        "name": "Pierre-Emerick Aubameyang",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "1117771",
        "name": "Ange Lago",
        "position": "CF",
        "lastStatus": "bench"
      },
      {
        "id": "1318474",
        "name": "Ugo Kadmiri",
        "position": "CF",
        "lastStatus": "not_at_club"
      }
    ]
  },
  {
    "clubId": "paris-fc",
    "club": "Paris FC",
    "country": "Франция",
    "league": "Ligue 1",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/FR1/2025/paris-fc.json",
    "scrapedAt": "2026-06-12T22:53:12.127060+00:00",
    "players": [
      {
        "id": "750878",
        "name": "Obed Nkambadio",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "45672",
        "name": "Kevin Trapp",
        "position": "GK",
        "lastStatus": "starting"
      },
      {
        "id": "18940",
        "name": "Rémy Riou",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "660860",
        "name": "Diego Coppola",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "818495",
        "name": "Otávio",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "649026",
        "name": "Moustapha Mbow",
        "position": "CB",
        "lastStatus": "absent"
      },
      {
        "id": "668167",
        "name": "Samir Chergui",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "914539",
        "name": "Yoan Koré",
        "position": "CB",
        "lastStatus": "not_included"
      },
      {
        "id": "84085",
        "name": "Timothée Kolodziejczak",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "955281",
        "name": "Nhoa Sangui",
        "position": "LB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "340177",
        "name": "Thibault De Smet",
        "position": "LB",
        "lastStatus": "bench"
      },
      {
        "id": "433887",
        "name": "Tuomas Ollila",
        "position": "LB",
        "lastStatus": "injured"
      },
      {
        "id": "297070",
        "name": "Hamari Traoré",
        "position": "RB",
        "lastStatus": "sub_in"
      },
      {
        "id": "1000355",
        "name": "Killian Prouchet",
        "position": "RB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "290862",
        "name": "Maxime Lopez",
        "position": "DM",
        "lastStatus": "sub_in"
      },
      {
        "id": "377393",
        "name": "Pierre Lees-Melou",
        "position": "DM",
        "lastStatus": "starting"
      },
      {
        "id": "973949",
        "name": "Adama Camara",
        "position": "DM",
        "lastStatus": "starting"
      },
      {
        "id": "830265",
        "name": "Lohann Doucet",
        "position": "DM",
        "lastStatus": "not_included"
      },
      {
        "id": "1241211",
        "name": "Rudy Matondo",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "414908",
        "name": "Marshall Munetsi",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "374040",
        "name": "Vincent Marchetti",
        "position": "CM",
        "lastStatus": "sub_in"
      },
      {
        "id": "274862",
        "name": "Moses Simon",
        "position": "LW",
        "lastStatus": "starting"
      },
      {
        "id": "435492",
        "name": "Alimami Gory",
        "position": "LW",
        "lastStatus": "sub_in"
      },
      {
        "id": "170506",
        "name": "Julien Lopez",
        "position": "LW",
        "lastStatus": "injured"
      },
      {
        "id": "739769",
        "name": "Ilan Kebbal",
        "position": "RW",
        "lastStatus": "sub_in"
      },
      {
        "id": "745461",
        "name": "Luca Koleosho",
        "position": "RW",
        "lastStatus": "sub_in"
      },
      {
        "id": "324690",
        "name": "Jonathan Ikoné",
        "position": "RW",
        "lastStatus": "starting"
      },
      {
        "id": "399383",
        "name": "Mathieu Cafaro",
        "position": "RW",
        "lastStatus": "bench"
      },
      {
        "id": "568701",
        "name": "Lamine Gueye",
        "position": "RW",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "463620",
        "name": "Willem Geubbels",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "358515",
        "name": "Jean-Philippe Krasso",
        "position": "CF",
        "lastStatus": "injured"
      },
      {
        "id": "105521",
        "name": "Ciro Immobile",
        "position": "CF",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "203504",
        "name": "Pierre-Yves Hamel",
        "position": "CF",
        "lastStatus": "injured"
      },
      {
        "id": "173750",
        "name": "Nouha Dicko",
        "position": "CF",
        "lastStatus": "not_at_club"
      },
      {
        "id": "1173868",
        "name": "Mohamed Dao",
        "position": "CF",
        "lastStatus": "not_in_squad"
      }
    ]
  },
  {
    "clubId": "rc-lens",
    "club": "RC Lens",
    "country": "Франция",
    "league": "Ligue 1",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/FR1/2025/rc-lens.json",
    "scrapedAt": "2026-06-12T22:50:28.078838+00:00",
    "players": [
      {
        "id": "743515",
        "name": "Robin Risser",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "60543",
        "name": "Mathieu Gorgelin",
        "position": "GK",
        "lastStatus": "starting"
      },
      {
        "id": "39918",
        "name": "Régis Gurtner",
        "position": "GK",
        "lastStatus": "injured"
      },
      {
        "id": "1177163",
        "name": "Adam Delplace",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1200424",
        "name": "Ilan Jourdren",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "655217",
        "name": "Samson Baidoo",
        "position": "CB",
        "lastStatus": "injured"
      },
      {
        "id": "344596",
        "name": "Malang Sarr",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "1020191",
        "name": "Ismaëlo Ganiou",
        "position": "CB",
        "lastStatus": "sub_in"
      },
      {
        "id": "819566",
        "name": "Nidal Celik",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "1186789",
        "name": "Kyllian Antonio",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "126557",
        "name": "Jonathan Gradit",
        "position": "CB",
        "lastStatus": "injured"
      },
      {
        "id": "344886",
        "name": "Matthieu Udol",
        "position": "LB",
        "lastStatus": "sub_in"
      },
      {
        "id": "713787",
        "name": "Jhoanner Chávez",
        "position": "LB",
        "lastStatus": "not_included"
      },
      {
        "id": "181380",
        "name": "Arthur Masuaku",
        "position": "LB",
        "lastStatus": "starting"
      },
      {
        "id": "332560",
        "name": "Deiver Machado",
        "position": "LB",
        "lastStatus": "not_included"
      },
      {
        "id": "1006412",
        "name": "Oscar Lenne",
        "position": "LB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "631927",
        "name": "Saud Abdulhamid",
        "position": "RB",
        "lastStatus": "starting"
      },
      {
        "id": "203746",
        "name": "Ruben Aguilar",
        "position": "RB",
        "lastStatus": "sub_in"
      },
      {
        "id": "718312",
        "name": "Hamzat Ojediran",
        "position": "DM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "955359",
        "name": "Fodé Sylla",
        "position": "DM",
        "lastStatus": "bench"
      },
      {
        "id": "808348",
        "name": "Mamadou Sangaré",
        "position": "CM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "711976",
        "name": "Andy Diouf",
        "position": "CM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "986291",
        "name": "Andrija Bulatovic",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "402008",
        "name": "Amadou Haidara",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "215977",
        "name": "Adrien Thomasson",
        "position": "CM",
        "lastStatus": "sub_in"
      },
      {
        "id": "1297674",
        "name": "Mezian Mesloub",
        "position": "CM",
        "lastStatus": "bench"
      },
      {
        "id": "272642",
        "name": "Allan Saint-Maximin",
        "position": "LW",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "776798",
        "name": "Abdallah Sima",
        "position": "LW",
        "lastStatus": "sub_in"
      },
      {
        "id": "1088110",
        "name": "Anthony Bermont",
        "position": "LW",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "184892",
        "name": "Florian Thauvin",
        "position": "RW",
        "lastStatus": "starting"
      },
      {
        "id": "691786",
        "name": "Morgan Guilavogui",
        "position": "RW",
        "lastStatus": "not_at_club"
      },
      {
        "id": "1176271",
        "name": "Erawan Garnier",
        "position": "RW",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "182916",
        "name": "Wesley Saïd",
        "position": "SS",
        "lastStatus": "starting"
      },
      {
        "id": "344152",
        "name": "Odsonne Édouard",
        "position": "CF",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1160814",
        "name": "Rayan Fofana",
        "position": "CF",
        "lastStatus": "bench"
      },
      {
        "id": "354726",
        "name": "Florian Sotoca",
        "position": "CF",
        "lastStatus": "starting"
      }
    ]
  },
  {
    "clubId": "rc-strassburg-alsace",
    "club": "RC Strasbourg Alsace",
    "country": "Франция",
    "league": "Ligue 1",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/FR1/2025/rc-strassburg-alsace.json",
    "scrapedAt": "2026-06-12T22:45:59.010247+00:00",
    "players": [
      {
        "id": "834397",
        "name": "Mike Penders",
        "position": "GK",
        "lastStatus": "starting"
      },
      {
        "id": "465836",
        "name": "Stefan Bajic",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "112822",
        "name": "Karl-Johan Johnsson",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "1215722",
        "name": "Gabriel Kerckaert",
        "position": "GK",
        "lastStatus": "not_at_club"
      },
      {
        "id": "910905",
        "name": "Mamadou Sarr",
        "position": "CB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "786436",
        "name": "Ismaël Doukouré",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "926978",
        "name": "Lucas Høgsberg",
        "position": "CB",
        "lastStatus": "sub_in"
      },
      {
        "id": "1145504",
        "name": "Aarón Anselmino",
        "position": "CB",
        "lastStatus": "injured"
      },
      {
        "id": "621993",
        "name": "Andrew Omobamidele",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "659513",
        "name": "Soumaïla Coulibaly",
        "position": "CB",
        "lastStatus": "not_included"
      },
      {
        "id": "962555",
        "name": "Abakar Sylla",
        "position": "CB",
        "lastStatus": "not_included"
      },
      {
        "id": "1189317",
        "name": "Amadou Cissé",
        "position": "CB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "1338830",
        "name": "Yoann Becker",
        "position": "CB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "316125",
        "name": "Ben Chilwell",
        "position": "LB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "922698",
        "name": "Ishé Samuels-Smith",
        "position": "LB",
        "lastStatus": "not_included"
      },
      {
        "id": "206717",
        "name": "Eduard Sobol",
        "position": "LB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "711980",
        "name": "Guéla Doué",
        "position": "RB",
        "lastStatus": "starting"
      },
      {
        "id": "991487",
        "name": "Abdoul Ouattara",
        "position": "RB",
        "lastStatus": "starting"
      },
      {
        "id": "1011200",
        "name": "Junior Mwanga",
        "position": "DM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "637803",
        "name": "Rafael Luís",
        "position": "DM",
        "lastStatus": "bench"
      },
      {
        "id": "863204",
        "name": "Maxi Oyedele",
        "position": "DM",
        "lastStatus": "bench"
      },
      {
        "id": "1068110",
        "name": "Rabby Nzingoula",
        "position": "DM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "1262768",
        "name": "Idrissa Sabaly",
        "position": "DM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "849410",
        "name": "Valentín Barco",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "1130514",
        "name": "Samir El Mourabet",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "1010854",
        "name": "Mathis Amougou",
        "position": "CM",
        "lastStatus": "bench"
      },
      {
        "id": "1170718",
        "name": "Tyrese Noubissie",
        "position": "CM",
        "lastStatus": "sub_in"
      },
      {
        "id": "655006",
        "name": "Diego Moreira",
        "position": "LM",
        "lastStatus": "starting"
      },
      {
        "id": "579928",
        "name": "Sebastian Nanasi",
        "position": "LM",
        "lastStatus": "starting"
      },
      {
        "id": "660867",
        "name": "Julio Enciso",
        "position": "AM",
        "lastStatus": "starting"
      },
      {
        "id": "1052439",
        "name": "Kendry Páez",
        "position": "AM",
        "lastStatus": "not_included"
      },
      {
        "id": "659518",
        "name": "Félix Lemaréchal",
        "position": "AM",
        "lastStatus": "not_included"
      },
      {
        "id": "992686",
        "name": "Martial Godo",
        "position": "LW",
        "lastStatus": "starting"
      },
      {
        "id": "540664",
        "name": "Dilane Bakwa",
        "position": "RW",
        "lastStatus": "not_at_club"
      },
      {
        "id": "1151929",
        "name": "Gessime Yassine",
        "position": "RW",
        "lastStatus": "bench"
      },
      {
        "id": "933900",
        "name": "Samuel Amo-Ameyaw",
        "position": "RW",
        "lastStatus": "bench"
      },
      {
        "id": "1133733",
        "name": "Yaya Diémé",
        "position": "RW",
        "lastStatus": "bench"
      },
      {
        "id": "1457164",
        "name": "Stanley Ogbonna",
        "position": "RW",
        "lastStatus": "not_included"
      },
      {
        "id": "1064871",
        "name": "Joaquín Panichelli",
        "position": "CF",
        "lastStatus": "injured"
      },
      {
        "id": "559328",
        "name": "Emmanuel Emegha",
        "position": "CF",
        "lastStatus": "injured"
      },
      {
        "id": "557612",
        "name": "Sékou Mara",
        "position": "CF",
        "lastStatus": "not_at_club"
      },
      {
        "id": "787232",
        "name": "David Datro Fofana",
        "position": "CF",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1353609",
        "name": "Jean-Baptiste Bosey",
        "position": "CF",
        "lastStatus": "not_at_club"
      }
    ]
  },
  {
    "clubId": "sco-angers",
    "club": "Angers SCO",
    "country": "Франция",
    "league": "Ligue 1",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/FR1/2025/sco-angers.json",
    "scrapedAt": "2026-06-12T22:56:58.235603+00:00",
    "players": [
      {
        "id": "415383",
        "name": "Hervé Koffi",
        "position": "GK",
        "lastStatus": "starting"
      },
      {
        "id": "548347",
        "name": "Melvin Zinga",
        "position": "GK",
        "lastStatus": "sub_in"
      },
      {
        "id": "1073176",
        "name": "Oumar Pona",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1187944",
        "name": "Yann Llahona",
        "position": "GK",
        "lastStatus": "not_at_club"
      },
      {
        "id": "804711",
        "name": "Ousmane Camara",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "1071956",
        "name": "Emmanuel Biumla",
        "position": "CB",
        "lastStatus": "sub_in"
      },
      {
        "id": "192492",
        "name": "Jordan Lefort",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "62351",
        "name": "Abdoulaye Bamba",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "1297628",
        "name": "Maël Gernigon",
        "position": "CB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "970279",
        "name": "Jacques Ekomié",
        "position": "LB",
        "lastStatus": "sub_in"
      },
      {
        "id": "111811",
        "name": "Florent Hanin",
        "position": "LB",
        "lastStatus": "starting"
      },
      {
        "id": "955354",
        "name": "Dan Sinaté",
        "position": "LB",
        "lastStatus": "bench"
      },
      {
        "id": "829874",
        "name": "Lilian Raolisoa",
        "position": "RB",
        "lastStatus": "starting"
      },
      {
        "id": "1103652",
        "name": "Marius Louër",
        "position": "RB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "371686",
        "name": "Carlens Arcus",
        "position": "RB",
        "lastStatus": "sub_in"
      },
      {
        "id": "1075575",
        "name": "Marius Courcoul",
        "position": "DM",
        "lastStatus": "injured"
      },
      {
        "id": "1165386",
        "name": "Ilann Garin",
        "position": "DM",
        "lastStatus": "bench"
      },
      {
        "id": "1382453",
        "name": "Bané Diatta",
        "position": "DM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "807688",
        "name": "Yassin Belkhdim",
        "position": "CM",
        "lastStatus": "injured"
      },
      {
        "id": "203938",
        "name": "Branco van den Boomen",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "138055",
        "name": "Haris Belkebla",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "214532",
        "name": "Pierrick Capelle",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "592979",
        "name": "Himad Abdelli",
        "position": "AM",
        "lastStatus": "not_included"
      },
      {
        "id": "904662",
        "name": "Louis Mouton",
        "position": "AM",
        "lastStatus": "injured"
      },
      {
        "id": "851220",
        "name": "Amine Sbaï",
        "position": "LW",
        "lastStatus": "starting"
      },
      {
        "id": "1491105",
        "name": "Yahia Jlidi",
        "position": "LW",
        "lastStatus": "not_at_club"
      },
      {
        "id": "1133929",
        "name": "Harouna Djibirin",
        "position": "RW",
        "lastStatus": "injured"
      },
      {
        "id": "646733",
        "name": "Jim Allevinah",
        "position": "RW",
        "lastStatus": "not_at_club"
      },
      {
        "id": "1101641",
        "name": "Justin Kalumba",
        "position": "RW",
        "lastStatus": "not_included"
      },
      {
        "id": "461607",
        "name": "Estéban Lepaul",
        "position": "CF",
        "lastStatus": "not_at_club"
      },
      {
        "id": "986288",
        "name": "Sidiki Chérif",
        "position": "CF",
        "lastStatus": "not_included"
      },
      {
        "id": "1103958",
        "name": "Prosper Peter",
        "position": "CF",
        "lastStatus": "injured"
      },
      {
        "id": "525140",
        "name": "Goduine Koyalipou",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "1096744",
        "name": "Lanroy Machine",
        "position": "CF",
        "lastStatus": "sub_in"
      }
    ]
  },
  {
    "clubId": "stade-brest-29",
    "club": "Stade Brestois 29",
    "country": "Франция",
    "league": "Ligue 1",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/FR1/2025/stade-brest-29.json",
    "scrapedAt": "2026-06-12T22:56:21.397907+00:00",
    "players": [
      {
        "id": "525155",
        "name": "Grégoire Coudert",
        "position": "GK",
        "lastStatus": "starting"
      },
      {
        "id": "346546",
        "name": "Radoslaw Majecki",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "975438",
        "name": "Noah Jauny",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "659513",
        "name": "Soumaïla Coulibaly",
        "position": "CB",
        "lastStatus": "injured"
      },
      {
        "id": "1009596",
        "name": "Junior Diaz",
        "position": "CB",
        "lastStatus": "bench"
      },
      {
        "id": "250779",
        "name": "Brendan Chardonnet",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "794349",
        "name": "Julien Le Cardinal",
        "position": "CB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "1166473",
        "name": "Raphaël Le Guen",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "805908",
        "name": "Bradley Locko",
        "position": "LB",
        "lastStatus": "sub_in"
      },
      {
        "id": "671590",
        "name": "Daouda Guindo",
        "position": "LB",
        "lastStatus": "starting"
      },
      {
        "id": "1030153",
        "name": "Justin Bourgault",
        "position": "LB",
        "lastStatus": "not_included"
      },
      {
        "id": "174196",
        "name": "Kenny Lala",
        "position": "RB",
        "lastStatus": "starting"
      },
      {
        "id": "1144999",
        "name": "Luck Zogbé",
        "position": "RB",
        "lastStatus": "bench"
      },
      {
        "id": "624037",
        "name": "Joris Chotard",
        "position": "DM",
        "lastStatus": "sub_in"
      },
      {
        "id": "377393",
        "name": "Pierre Lees-Melou",
        "position": "DM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "1200289",
        "name": "Hamidou Makalou",
        "position": "DM",
        "lastStatus": "starting"
      },
      {
        "id": "474662",
        "name": "Hugo Magnetti",
        "position": "CM",
        "lastStatus": "sub_in"
      },
      {
        "id": "353948",
        "name": "Lucas Tousart",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "684062",
        "name": "Hianga'a Mbock",
        "position": "CM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "1449288",
        "name": "Axel Lassus",
        "position": "CM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "536482",
        "name": "Junior Dina Ebimbe",
        "position": "RM",
        "lastStatus": "injured"
      },
      {
        "id": "671594",
        "name": "Kamory Doumbia",
        "position": "AM",
        "lastStatus": "starting"
      },
      {
        "id": "979551",
        "name": "Pathé Mboup",
        "position": "LW",
        "lastStatus": "starting"
      },
      {
        "id": "353399",
        "name": "Romain Del Castillo",
        "position": "RW",
        "lastStatus": "starting"
      },
      {
        "id": "924800",
        "name": "Axel Camblan",
        "position": "RW",
        "lastStatus": "not_included"
      },
      {
        "id": "1131159",
        "name": "Ibrahim Yayiya Kanté",
        "position": "RW",
        "lastStatus": "sub_in"
      },
      {
        "id": "917778",
        "name": "Rémy Labeau Lascary",
        "position": "CF",
        "lastStatus": "sub_in"
      },
      {
        "id": "283994",
        "name": "Ludovic Ajorque",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "325223",
        "name": "Mama Baldé",
        "position": "CF",
        "lastStatus": "injured"
      },
      {
        "id": "1237907",
        "name": "Saliou Diop",
        "position": "CF",
        "lastStatus": "bench"
      }
    ]
  },
  {
    "clubId": "afc-bournemouth",
    "club": "AFC Bournemouth",
    "country": "Англия",
    "league": "Premier League",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/GB1/2025/afc-bournemouth.json",
    "scrapedAt": "2026-06-12T22:36:07.720437+00:00",
    "players": [
      {
        "id": "465555",
        "name": "Djordje Petrovic",
        "position": "GK",
        "lastStatus": "starting"
      },
      {
        "id": "481675",
        "name": "Christos Mandas",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "52570",
        "name": "Fraser Forster",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "582078",
        "name": "Will Dennis",
        "position": "GK",
        "lastStatus": "not_included"
      },
      {
        "id": "463605",
        "name": "Bafodé Diakité",
        "position": "CB",
        "lastStatus": "bench"
      },
      {
        "id": "469781",
        "name": "Marcos Senesi",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "611793",
        "name": "James Hill",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "989112",
        "name": "Veljko Milosavljevic",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "654539",
        "name": "Adrien Truffert",
        "position": "LB",
        "lastStatus": "starting"
      },
      {
        "id": "1009658",
        "name": "Julio Soler",
        "position": "LB",
        "lastStatus": "injured"
      },
      {
        "id": "741257",
        "name": "Álex Jiménez",
        "position": "RB",
        "lastStatus": "suspended"
      },
      {
        "id": "513970",
        "name": "Julián Araujo",
        "position": "RB",
        "lastStatus": "not_included"
      },
      {
        "id": "61841",
        "name": "Adam Smith",
        "position": "RB",
        "lastStatus": "starting"
      },
      {
        "id": "332705",
        "name": "Tyler Adams",
        "position": "DM",
        "lastStatus": "starting"
      },
      {
        "id": "854721",
        "name": "Ben Winterburn",
        "position": "DM",
        "lastStatus": "not_included"
      },
      {
        "id": "1122668",
        "name": "Charlie Stevens",
        "position": "DM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1323654",
        "name": "Malcom Dacosta González",
        "position": "DM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "855256",
        "name": "Alex Scott",
        "position": "CM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "998101",
        "name": "Alex Tóth",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "249089",
        "name": "Lewis Cook",
        "position": "CM",
        "lastStatus": "sub_in"
      },
      {
        "id": "188077",
        "name": "Ryan Christie",
        "position": "CM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "320411",
        "name": "Philip Billing",
        "position": "CM",
        "lastStatus": "not_included"
      },
      {
        "id": "330659",
        "name": "Justin Kluivert",
        "position": "AM",
        "lastStatus": "sub_in"
      },
      {
        "id": "399434",
        "name": "Marcus Tavernier",
        "position": "AM",
        "lastStatus": "starting"
      },
      {
        "id": "555076",
        "name": "Romain Faivre",
        "position": "AM",
        "lastStatus": "not_included"
      },
      {
        "id": "532776",
        "name": "Amine Adli",
        "position": "LW",
        "lastStatus": "sub_in"
      },
      {
        "id": "391065",
        "name": "Hamed Traoré",
        "position": "LW",
        "lastStatus": "not_included"
      },
      {
        "id": "583255",
        "name": "Antoine Semenyo",
        "position": "RW",
        "lastStatus": "not_at_club"
      },
      {
        "id": "1012564",
        "name": "Rayan",
        "position": "RW",
        "lastStatus": "starting"
      },
      {
        "id": "719673",
        "name": "Ben Gannon-Doak",
        "position": "RW",
        "lastStatus": "sub_in"
      },
      {
        "id": "277033",
        "name": "David Brooks",
        "position": "RW",
        "lastStatus": "bench"
      },
      {
        "id": "936901",
        "name": "Dominic Sadi",
        "position": "RW",
        "lastStatus": "not_at_club"
      },
      {
        "id": "955357",
        "name": "Junior Kroupi",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "711337",
        "name": "Evanilson",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "251106",
        "name": "Enes Ünal",
        "position": "CF",
        "lastStatus": "sub_in"
      },
      {
        "id": "1089802",
        "name": "Remy Rees-Dottin",
        "position": "CF",
        "lastStatus": "not_in_squad"
      }
    ]
  },
  {
    "clubId": "afc-sunderland",
    "club": "Sunderland AFC",
    "country": "Англия",
    "league": "Premier League",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/GB1/2025/afc-sunderland.json",
    "scrapedAt": "2026-06-12T22:39:33.977061+00:00",
    "players": [
      {
        "id": "646991",
        "name": "Robin Roefs",
        "position": "GK",
        "lastStatus": "starting"
      },
      {
        "id": "475946",
        "name": "Anthony Patterson",
        "position": "GK",
        "lastStatus": "not_included"
      },
      {
        "id": "605426",
        "name": "Melker Ellborg",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "123536",
        "name": "Simon Moore",
        "position": "GK",
        "lastStatus": "injured"
      },
      {
        "id": "503686",
        "name": "Dan Ballard",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "353032",
        "name": "Omar Alderete",
        "position": "CB",
        "lastStatus": "bench"
      },
      {
        "id": "617755",
        "name": "Jenson Seelt",
        "position": "CB",
        "lastStatus": "not_included"
      },
      {
        "id": "661208",
        "name": "Leo Hjelde",
        "position": "CB",
        "lastStatus": "not_included"
      },
      {
        "id": "282939",
        "name": "Luke O'Nien",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "568006",
        "name": "Dennis Cirkin",
        "position": "LB",
        "lastStatus": "bench"
      },
      {
        "id": "240692",
        "name": "Reinildo Mandava",
        "position": "LB",
        "lastStatus": "starting"
      },
      {
        "id": "181380",
        "name": "Arthur Masuaku",
        "position": "LB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "515544",
        "name": "Trai Hume",
        "position": "RB",
        "lastStatus": "starting"
      },
      {
        "id": "420210",
        "name": "Lutsharel Geertruida",
        "position": "RB",
        "lastStatus": "starting"
      },
      {
        "id": "348026",
        "name": "Nordi Mukiele",
        "position": "RB",
        "lastStatus": "starting"
      },
      {
        "id": "990997",
        "name": "Jenson Jones",
        "position": "RB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "111455",
        "name": "Granit Xhaka",
        "position": "DM",
        "lastStatus": "starting"
      },
      {
        "id": "727089",
        "name": "Noah Sadiki",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "876631",
        "name": "Habib Diarra",
        "position": "CM",
        "lastStatus": "sub_in"
      },
      {
        "id": "633992",
        "name": "Enzo Le Fée",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "570336",
        "name": "Dan Neil",
        "position": "CM",
        "lastStatus": "not_included"
      },
      {
        "id": "1018837",
        "name": "Jaydon Jones",
        "position": "CM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "947411",
        "name": "Chris Rigg",
        "position": "AM",
        "lastStatus": "sub_in"
      },
      {
        "id": "942738",
        "name": "Milan Aleksic",
        "position": "AM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "937840",
        "name": "Harrison Jones",
        "position": "AM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1018830",
        "name": "Jack Whittaker",
        "position": "AM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "658536",
        "name": "Simon Adingra",
        "position": "LW",
        "lastStatus": "not_included"
      },
      {
        "id": "903611",
        "name": "Nilson Angulo",
        "position": "LW",
        "lastStatus": "starting"
      },
      {
        "id": "696181",
        "name": "Romaine Mundle",
        "position": "LW",
        "lastStatus": "injured"
      },
      {
        "id": "1079078",
        "name": "Timur Tuterov",
        "position": "LW",
        "lastStatus": "not_included"
      },
      {
        "id": "743384",
        "name": "Chemsdine Talbi",
        "position": "RW",
        "lastStatus": "injured"
      },
      {
        "id": "131996",
        "name": "Bertrand Traoré",
        "position": "RW",
        "lastStatus": "bench"
      },
      {
        "id": "225452",
        "name": "Patrick Roberts",
        "position": "RW",
        "lastStatus": "not_included"
      },
      {
        "id": "1322090",
        "name": "Jocelin Ta Bi",
        "position": "RW",
        "lastStatus": "bench"
      },
      {
        "id": "473169",
        "name": "Brian Brobbey",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "494237",
        "name": "Wilson Isidor",
        "position": "CF",
        "lastStatus": "sub_in"
      },
      {
        "id": "967346",
        "name": "Eliezer Mayenda",
        "position": "CF",
        "lastStatus": "bench"
      },
      {
        "id": "938158",
        "name": "Marc Guiu",
        "position": "CF",
        "lastStatus": "not_included"
      }
    ]
  },
  {
    "clubId": "brighton",
    "club": "Brighton & Hove Albion",
    "country": "Англия",
    "league": "Premier League",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/GB1/2025/brighton-amp-hove-albion.json",
    "scrapedAt": "2026-06-12T22:35:36.479347+00:00",
    "players": [
      {
        "id": "565093",
        "name": "Bart Verbruggen",
        "position": "GK",
        "lastStatus": "starting"
      },
      {
        "id": "73564",
        "name": "Jason Steele",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "576314",
        "name": "Jan Paul van Hecke",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "660860",
        "name": "Diego Coppola",
        "position": "CB",
        "lastStatus": "not_included"
      },
      {
        "id": "318508",
        "name": "Olivier Boscagli",
        "position": "CB",
        "lastStatus": "bench"
      },
      {
        "id": "380350",
        "name": "Igor Julio",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "148153",
        "name": "Lewis Dunk",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "1120418",
        "name": "Freddie Simmonds",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "369316",
        "name": "Ferdi Kadıoğlu",
        "position": "LB",
        "lastStatus": "starting"
      },
      {
        "id": "429915",
        "name": "Maxim De Cuyper",
        "position": "LB",
        "lastStatus": "starting"
      },
      {
        "id": "415381",
        "name": "Mats Wieffer",
        "position": "RB",
        "lastStatus": "starting"
      },
      {
        "id": "111195",
        "name": "Joël Veltman",
        "position": "RB",
        "lastStatus": "bench"
      },
      {
        "id": "921662",
        "name": "Charlie Tasker",
        "position": "RB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "973085",
        "name": "Carlos Baleba",
        "position": "DM",
        "lastStatus": "sub_in"
      },
      {
        "id": "867688",
        "name": "Jack Hinshelwood",
        "position": "DM",
        "lastStatus": "starting"
      },
      {
        "id": "667287",
        "name": "Yasin Ayari",
        "position": "CM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "996897",
        "name": "Diego Gómez",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "406634",
        "name": "Matt O'Riley",
        "position": "CM",
        "lastStatus": "bench"
      },
      {
        "id": "82873",
        "name": "Pascal Groß",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "3333",
        "name": "James Milner",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "978668",
        "name": "Joe Knight",
        "position": "CM",
        "lastStatus": "not_included"
      },
      {
        "id": "700106",
        "name": "Brajan Gruda",
        "position": "AM",
        "lastStatus": "not_included"
      },
      {
        "id": "1067168",
        "name": "Harry Howell",
        "position": "AM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "504849",
        "name": "Kaoru Mitoma",
        "position": "LW",
        "lastStatus": "injured"
      },
      {
        "id": "933018",
        "name": "Tom Watson",
        "position": "LW",
        "lastStatus": "not_included"
      },
      {
        "id": "914269",
        "name": "Nehemiah Oriola",
        "position": "LW",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1012534",
        "name": "Yankuba Minteh",
        "position": "RW",
        "lastStatus": "sub_in"
      },
      {
        "id": "209212",
        "name": "Solly March",
        "position": "RW",
        "lastStatus": "sub_in"
      },
      {
        "id": "538977",
        "name": "Georginio Rutter",
        "position": "CF",
        "lastStatus": "sub_in"
      },
      {
        "id": "1060087",
        "name": "Charalampos Kostoulas",
        "position": "CF",
        "lastStatus": "sub_in"
      },
      {
        "id": "950091",
        "name": "Stefanos Tzimas",
        "position": "CF",
        "lastStatus": "injured"
      },
      {
        "id": "67063",
        "name": "Danny Welbeck",
        "position": "CF",
        "lastStatus": "starting"
      }
    ]
  },
  {
    "clubId": "crystal-palace",
    "club": "Crystal Palace",
    "country": "Англия",
    "league": "Premier League",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/GB1/2025/crystal-palace.json",
    "scrapedAt": "2026-06-12T22:36:58.292292+00:00",
    "players": [
      {
        "id": "258919",
        "name": "Dean Henderson",
        "position": "GK",
        "lastStatus": "starting"
      },
      {
        "id": "296802",
        "name": "Walter Benítez",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "196722",
        "name": "Remi Matthews",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "392757",
        "name": "Marc Guéhi",
        "position": "CB",
        "lastStatus": "not_included"
      },
      {
        "id": "434224",
        "name": "Maxence Lacroix",
        "position": "CB",
        "lastStatus": "bench"
      },
      {
        "id": "578539",
        "name": "Chris Richards",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1006411",
        "name": "Jaydee Canvot",
        "position": "CB",
        "lastStatus": "bench"
      },
      {
        "id": "689637",
        "name": "Chadi Riad",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "1045118",
        "name": "George King",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "730893",
        "name": "Tyrick Mitchell",
        "position": "LB",
        "lastStatus": "sub_in"
      },
      {
        "id": "293194",
        "name": "Borna Sosa",
        "position": "LB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1047257",
        "name": "Rio Cardines",
        "position": "LB",
        "lastStatus": "starting"
      },
      {
        "id": "1285021",
        "name": "Dean Benamar",
        "position": "LB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "493003",
        "name": "Daniel Muñoz",
        "position": "RB",
        "lastStatus": "starting"
      },
      {
        "id": "862109",
        "name": "Danny Imray",
        "position": "RB",
        "lastStatus": "not_included"
      },
      {
        "id": "85177",
        "name": "Nathaniel Clyne",
        "position": "RB",
        "lastStatus": "starting"
      },
      {
        "id": "744149",
        "name": "Adam Wharton",
        "position": "DM",
        "lastStatus": "sub_in"
      },
      {
        "id": "262980",
        "name": "Jefferson Lerma",
        "position": "DM",
        "lastStatus": "starting"
      },
      {
        "id": "860078",
        "name": "Kaden Rodney",
        "position": "DM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "207014",
        "name": "Will Hughes",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "479999",
        "name": "Eberechi Eze",
        "position": "AM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "747009",
        "name": "Justin Devenny",
        "position": "AM",
        "lastStatus": "starting"
      },
      {
        "id": "356141",
        "name": "Daichi Kamada",
        "position": "AM",
        "lastStatus": "starting"
      },
      {
        "id": "410225",
        "name": "Ismaïla Sarr",
        "position": "RW",
        "lastStatus": "starting"
      },
      {
        "id": "470607",
        "name": "Brennan Johnson",
        "position": "RW",
        "lastStatus": "bench"
      },
      {
        "id": "568157",
        "name": "Yéremy Pino",
        "position": "RW",
        "lastStatus": "sub_in"
      },
      {
        "id": "500689",
        "name": "Evann Guessand",
        "position": "RW",
        "lastStatus": "sub_in"
      },
      {
        "id": "967319",
        "name": "Romain Esse",
        "position": "RW",
        "lastStatus": "not_included"
      },
      {
        "id": "586834",
        "name": "Jesurun Rak-Sakyi",
        "position": "RW",
        "lastStatus": "not_at_club"
      },
      {
        "id": "1348941",
        "name": "Joél Drakes-Thomas",
        "position": "RW",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "429983",
        "name": "Jørgen Strand Larsen",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "420002",
        "name": "Jean-Philippe Mateta",
        "position": "CF",
        "lastStatus": "sub_in"
      },
      {
        "id": "344152",
        "name": "Odsonne Édouard",
        "position": "CF",
        "lastStatus": "not_at_club"
      },
      {
        "id": "1124005",
        "name": "Christantus Uche",
        "position": "CF",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "340324",
        "name": "Eddie Nketiah",
        "position": "CF",
        "lastStatus": "injured"
      },
      {
        "id": "1004679",
        "name": "Zach Marsh",
        "position": "CF",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1172646",
        "name": "Ben Casey",
        "position": "CF",
        "lastStatus": "not_in_squad"
      }
    ]
  },
  {
    "clubId": "brentford",
    "club": "Brentford FC",
    "country": "Англия",
    "league": "Premier League",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/GB1/2025/fc-brentford.json",
    "scrapedAt": "2026-06-12T22:37:40.938952+00:00",
    "players": [
      {
        "id": "340918",
        "name": "Caoimhín Kelleher",
        "position": "GK",
        "lastStatus": "starting"
      },
      {
        "id": "488935",
        "name": "Hákon Valdimarsson",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "456292",
        "name": "Ellery Balcombe",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "541231",
        "name": "Sepp van den Berg",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "469050",
        "name": "Nathan Collins",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "328658",
        "name": "Kristoffer Ajer",
        "position": "CB",
        "lastStatus": "bench"
      },
      {
        "id": "442248",
        "name": "Ethan Pinnock",
        "position": "CB",
        "lastStatus": "bench"
      },
      {
        "id": "1144158",
        "name": "Benjamin Arthur",
        "position": "CB",
        "lastStatus": "not_included"
      },
      {
        "id": "967342",
        "name": "Joshua Stephenson",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "339556",
        "name": "Rico Henry",
        "position": "LB",
        "lastStatus": "injured"
      },
      {
        "id": "1008162",
        "name": "Conor McManus",
        "position": "LB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "823486",
        "name": "Michael Kayode",
        "position": "RB",
        "lastStatus": "starting"
      },
      {
        "id": "591949",
        "name": "Aaron Hickey",
        "position": "RB",
        "lastStatus": "sub_in"
      },
      {
        "id": "391005",
        "name": "Mads Roerslev",
        "position": "RB",
        "lastStatus": "not_included"
      },
      {
        "id": "1211262",
        "name": "Ollie Shield",
        "position": "RB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "270171",
        "name": "Vitaly Janelt",
        "position": "DM",
        "lastStatus": "starting"
      },
      {
        "id": "1141628",
        "name": "Yunus Konak",
        "position": "DM",
        "lastStatus": "not_included"
      },
      {
        "id": "61651",
        "name": "Jordan Henderson",
        "position": "DM",
        "lastStatus": "starting"
      },
      {
        "id": "717411",
        "name": "Yegor Yarmolyuk",
        "position": "CM",
        "lastStatus": "injured"
      },
      {
        "id": "319859",
        "name": "Mathias Jensen",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "421637",
        "name": "Frank Onyeka",
        "position": "CM",
        "lastStatus": "not_included"
      },
      {
        "id": "340321",
        "name": "Josh Dasilva",
        "position": "CM",
        "lastStatus": "bench"
      },
      {
        "id": "907218",
        "name": "Riley Owen",
        "position": "CM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "644401",
        "name": "Keane Lewis-Potter",
        "position": "LM",
        "lastStatus": "starting"
      },
      {
        "id": "540941",
        "name": "Mikkel Damsgaard",
        "position": "AM",
        "lastStatus": "sub_in"
      },
      {
        "id": "683620",
        "name": "Antoni Milambo",
        "position": "AM",
        "lastStatus": "injured"
      },
      {
        "id": "559263",
        "name": "Fábio Carvalho",
        "position": "AM",
        "lastStatus": "injured"
      },
      {
        "id": "587002",
        "name": "Myles Peart-Harris",
        "position": "AM",
        "lastStatus": "not_included"
      },
      {
        "id": "1407213",
        "name": "Luka Bentt",
        "position": "AM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "473050",
        "name": "Kevin Schade",
        "position": "LW",
        "lastStatus": "starting"
      },
      {
        "id": "340325",
        "name": "Reiss Nelson",
        "position": "LW",
        "lastStatus": "sub_in"
      },
      {
        "id": "1086375",
        "name": "Gustavo Nunes",
        "position": "LW",
        "lastStatus": "not_included"
      },
      {
        "id": "823231",
        "name": "Dango Ouattara",
        "position": "RW",
        "lastStatus": "starting"
      },
      {
        "id": "1091562",
        "name": "Romelle Donovan",
        "position": "RW",
        "lastStatus": "bench"
      },
      {
        "id": "739443",
        "name": "Igor Thiago",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "1011936",
        "name": "Kaye Furo",
        "position": "CF",
        "lastStatus": "bench"
      }
    ]
  },
  {
    "clubId": "fc-burnley",
    "club": "Burnley FC",
    "country": "Англия",
    "league": "Premier League",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/GB1/2025/fc-burnley.json",
    "scrapedAt": "2026-06-12T22:42:35.268668+00:00",
    "players": [
      {
        "id": "829299",
        "name": "Max Weiß",
        "position": "GK",
        "lastStatus": "starting"
      },
      {
        "id": "74960",
        "name": "Martin Dúbravka",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "842341",
        "name": "Maxime Estève",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "612517",
        "name": "Bashir Humphreys",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "342046",
        "name": "Axel Tuanzebe",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "392179",
        "name": "Hjalmar Ekdal",
        "position": "CB",
        "lastStatus": "bench"
      },
      {
        "id": "415970",
        "name": "Joe Worrall",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "514285",
        "name": "Quilindschy Hartman",
        "position": "LB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "927768",
        "name": "Lucas Pires",
        "position": "LB",
        "lastStatus": "starting"
      },
      {
        "id": "1214634",
        "name": "Oliver Pimlott",
        "position": "LB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "541628",
        "name": "Oliver Sonne",
        "position": "RB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "95424",
        "name": "Kyle Walker",
        "position": "RB",
        "lastStatus": "starting"
      },
      {
        "id": "214666",
        "name": "Connor Roberts",
        "position": "RB",
        "lastStatus": "bench"
      },
      {
        "id": "711999",
        "name": "Lesley Ugochukwu",
        "position": "DM",
        "lastStatus": "starting"
      },
      {
        "id": "357162",
        "name": "Florentino",
        "position": "DM",
        "lastStatus": "starting"
      },
      {
        "id": "181579",
        "name": "James Ward-Prowse",
        "position": "CM",
        "lastStatus": "sub_in"
      },
      {
        "id": "242606",
        "name": "Josh Cullen",
        "position": "CM",
        "lastStatus": "injured"
      },
      {
        "id": "314241",
        "name": "Josh Laurent",
        "position": "CM",
        "lastStatus": "bench"
      },
      {
        "id": "1352710",
        "name": "George Brierley",
        "position": "CM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "607224",
        "name": "Hannibal",
        "position": "AM",
        "lastStatus": "starting"
      },
      {
        "id": "646658",
        "name": "Aaron Ramsey",
        "position": "AM",
        "lastStatus": "not_included"
      },
      {
        "id": "381963",
        "name": "Mike Tresor",
        "position": "AM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "684210",
        "name": "Jaidon Anthony",
        "position": "LW",
        "lastStatus": "starting"
      },
      {
        "id": "293281",
        "name": "Jacob Bruun Larsen",
        "position": "LW",
        "lastStatus": "sub_in"
      },
      {
        "id": "706889",
        "name": "Jaydon Banel",
        "position": "LW",
        "lastStatus": "not_included"
      },
      {
        "id": "607226",
        "name": "Loum Tchaouna",
        "position": "RW",
        "lastStatus": "starting"
      },
      {
        "id": "314367",
        "name": "Marcus Edwards",
        "position": "RW",
        "lastStatus": "sub_in"
      },
      {
        "id": "724041",
        "name": "Enock Agyei",
        "position": "RW",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1165131",
        "name": "Kian McMahon-Brown",
        "position": "RW",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "411537",
        "name": "Zian Flemming",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "467623",
        "name": "Lyle Foster",
        "position": "CF",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "548729",
        "name": "Zeki Amdouni",
        "position": "CF",
        "lastStatus": "sub_in"
      },
      {
        "id": "571743",
        "name": "Armando Broja",
        "position": "CF",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "63200",
        "name": "Ashley Barnes",
        "position": "CF",
        "lastStatus": "sub_in"
      }
    ]
  },
  {
    "clubId": "everton",
    "club": "Everton FC",
    "country": "Англия",
    "league": "Premier League",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/GB1/2025/fc-everton.json",
    "scrapedAt": "2026-06-12T22:38:20.763777+00:00",
    "players": [
      {
        "id": "130164",
        "name": "Jordan Pickford",
        "position": "GK",
        "lastStatus": "starting"
      },
      {
        "id": "357658",
        "name": "Mark Travers",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "574448",
        "name": "Harry Tyrer",
        "position": "GK",
        "lastStatus": "not_included"
      },
      {
        "id": "215810",
        "name": "Tom King",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "661053",
        "name": "Jarrad Branthwaite",
        "position": "CB",
        "lastStatus": "injured"
      },
      {
        "id": "173504",
        "name": "James Tarkowski",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "118534",
        "name": "Michael Keane",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "655986",
        "name": "Reece Welch",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "747598",
        "name": "Elijah Campbell",
        "position": "CB",
        "lastStatus": "not_included"
      },
      {
        "id": "404842",
        "name": "Vitaliy Mykolenko",
        "position": "LB",
        "lastStatus": "starting"
      },
      {
        "id": "938146",
        "name": "Adam Aznou",
        "position": "LB",
        "lastStatus": "bench"
      },
      {
        "id": "711544",
        "name": "Jake O'Brien",
        "position": "RB",
        "lastStatus": "starting"
      },
      {
        "id": "424015",
        "name": "Nathan Patterson",
        "position": "RB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "68390",
        "name": "Séamus Coleman",
        "position": "RB",
        "lastStatus": "sub_in"
      },
      {
        "id": "505219",
        "name": "James Garner",
        "position": "DM",
        "lastStatus": "starting"
      },
      {
        "id": "126665",
        "name": "Idrissa Gueye",
        "position": "DM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "475188",
        "name": "Kiernan Dewsbury-Hall",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "696589",
        "name": "Tim Iroegbunam",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "748319",
        "name": "Carlos Alcaraz",
        "position": "CM",
        "lastStatus": "sub_in"
      },
      {
        "id": "1107733",
        "name": "Harrison Armstrong",
        "position": "CM",
        "lastStatus": "sub_in"
      },
      {
        "id": "663225",
        "name": "Tyler Onyango",
        "position": "CM",
        "lastStatus": "not_included"
      },
      {
        "id": "1018716",
        "name": "Callum Bates",
        "position": "CM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "608832",
        "name": "Merlin Röhl",
        "position": "AM",
        "lastStatus": "starting"
      },
      {
        "id": "203460",
        "name": "Jack Grealish",
        "position": "LW",
        "lastStatus": "injured"
      },
      {
        "id": "936874",
        "name": "Tyrique George",
        "position": "LW",
        "lastStatus": "sub_in"
      },
      {
        "id": "584769",
        "name": "Dwight McNeil",
        "position": "LW",
        "lastStatus": "bench"
      },
      {
        "id": "623570",
        "name": "Iliman Ndiaye",
        "position": "RW",
        "lastStatus": "starting"
      },
      {
        "id": "866655",
        "name": "Tyler Dibling",
        "position": "RW",
        "lastStatus": "bench"
      },
      {
        "id": "937941",
        "name": "Thierno Barry",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "595809",
        "name": "Beto",
        "position": "CF",
        "lastStatus": "sub_in"
      },
      {
        "id": "670688",
        "name": "Youssef Chermiti",
        "position": "CF",
        "lastStatus": "not_included"
      },
      {
        "id": "1122712",
        "name": "Braiden Graham",
        "position": "CF",
        "lastStatus": "not_in_squad"
      }
    ]
  },
  {
    "clubId": "fulham",
    "club": "Fulham FC",
    "country": "Англия",
    "league": "Premier League",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/GB1/2025/fc-fulham.json",
    "scrapedAt": "2026-06-12T22:41:22.107816+00:00",
    "players": [
      {
        "id": "72476",
        "name": "Bernd Leno",
        "position": "GK",
        "lastStatus": "starting"
      },
      {
        "id": "127181",
        "name": "Benjamin Lecomte",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "747950",
        "name": "Alfie McNally",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "461883",
        "name": "Calvin Bassey",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "260827",
        "name": "Joachim Andersen",
        "position": "CB",
        "lastStatus": "absent"
      },
      {
        "id": "272622",
        "name": "Issa Diop",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "494880",
        "name": "Jorge Cuenca",
        "position": "CB",
        "lastStatus": "sub_in"
      },
      {
        "id": "1026524",
        "name": "Sam Amissah",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "349701",
        "name": "Antonee Robinson",
        "position": "LB",
        "lastStatus": "starting"
      },
      {
        "id": "392775",
        "name": "Ryan Sessegnon",
        "position": "LB",
        "lastStatus": "bench"
      },
      {
        "id": "206746",
        "name": "Kenny Tete",
        "position": "RB",
        "lastStatus": "bench"
      },
      {
        "id": "262226",
        "name": "Timothy Castagne",
        "position": "RB",
        "lastStatus": "starting"
      },
      {
        "id": "333014",
        "name": "Sander Berge",
        "position": "DM",
        "lastStatus": "starting"
      },
      {
        "id": "203394",
        "name": "Andreas Pereira",
        "position": "CM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "245056",
        "name": "Saša Lukić",
        "position": "CM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "226973",
        "name": "Harrison Reed",
        "position": "CM",
        "lastStatus": "bench"
      },
      {
        "id": "123275",
        "name": "Tom Cairney",
        "position": "CM",
        "lastStatus": "sub_in"
      },
      {
        "id": "1078158",
        "name": "Seth Ridgeon",
        "position": "CM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1011131",
        "name": "Josh King",
        "position": "AM",
        "lastStatus": "sub_in"
      },
      {
        "id": "392765",
        "name": "Emile Smith Rowe",
        "position": "AM",
        "lastStatus": "starting"
      },
      {
        "id": "900195",
        "name": "Kevin",
        "position": "LW",
        "lastStatus": "starting"
      },
      {
        "id": "242631",
        "name": "Alex Iwobi",
        "position": "LW",
        "lastStatus": "starting"
      },
      {
        "id": "661207",
        "name": "Oscar Bobb",
        "position": "RW",
        "lastStatus": "starting"
      },
      {
        "id": "279455",
        "name": "Harry Wilson",
        "position": "RW",
        "lastStatus": "sub_in"
      },
      {
        "id": "401922",
        "name": "Samuel Chukwueze",
        "position": "RW",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "204103",
        "name": "Adama Traoré",
        "position": "RW",
        "lastStatus": "not_included"
      },
      {
        "id": "735571",
        "name": "Rodrigo Muniz",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "206040",
        "name": "Raúl Jiménez",
        "position": "CF",
        "lastStatus": "sub_in"
      },
      {
        "id": "1069512",
        "name": "Jonah Kusi-Asare",
        "position": "CF",
        "lastStatus": "injured"
      }
    ]
  },
  {
    "clubId": "leeds-united",
    "club": "Leeds United",
    "country": "Англия",
    "league": "Premier League",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/GB1/2025/leeds-united.json",
    "scrapedAt": "2026-06-12T22:40:57.539368+00:00",
    "players": [
      {
        "id": "352041",
        "name": "Lucas Perri",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "542586",
        "name": "Illan Meslier",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "99397",
        "name": "Karl Darlow",
        "position": "GK",
        "lastStatus": "starting"
      },
      {
        "id": "410708",
        "name": "Pascal Struijk",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "371851",
        "name": "Jaka Bijol",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "297212",
        "name": "Joe Rodon",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "338629",
        "name": "Sebastiaan Bornauw",
        "position": "CB",
        "lastStatus": "sub_in"
      },
      {
        "id": "362108",
        "name": "Gabriel Gudmundsson",
        "position": "LB",
        "lastStatus": "injured"
      },
      {
        "id": "236953",
        "name": "Sam Byram",
        "position": "LB",
        "lastStatus": "bench"
      },
      {
        "id": "1122308",
        "name": "Jayden Lienou",
        "position": "LB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "465717",
        "name": "Jayden Bogle",
        "position": "RB",
        "lastStatus": "starting"
      },
      {
        "id": "413220",
        "name": "James Justin",
        "position": "RB",
        "lastStatus": "starting"
      },
      {
        "id": "392771",
        "name": "Ethan Ampadu",
        "position": "DM",
        "lastStatus": "starting"
      },
      {
        "id": "344069",
        "name": "Anton Stach",
        "position": "DM",
        "lastStatus": "injured"
      },
      {
        "id": "381753",
        "name": "Ilia Gruev",
        "position": "DM",
        "lastStatus": "injured"
      },
      {
        "id": "1011659",
        "name": "Rhys Chadwick",
        "position": "DM",
        "lastStatus": "bench"
      },
      {
        "id": "346707",
        "name": "Sean Longstaff",
        "position": "CM",
        "lastStatus": "injured"
      },
      {
        "id": "489359",
        "name": "Ao Tanaka",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "1065181",
        "name": "Alfie Cresswell",
        "position": "CM",
        "lastStatus": "bench"
      },
      {
        "id": "393323",
        "name": "Brenden Aaronson",
        "position": "AM",
        "lastStatus": "starting"
      },
      {
        "id": "983989",
        "name": "Facundo Buonanotte",
        "position": "AM",
        "lastStatus": "sub_in"
      },
      {
        "id": "980343",
        "name": "Sam Chambers",
        "position": "AM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "346890",
        "name": "Noah Okafor",
        "position": "LW",
        "lastStatus": "injured"
      },
      {
        "id": "518644",
        "name": "Largie Ramazani",
        "position": "LW",
        "lastStatus": "not_at_club"
      },
      {
        "id": "417346",
        "name": "Jack Harrison",
        "position": "LW",
        "lastStatus": "not_at_club"
      },
      {
        "id": "627626",
        "name": "Wilfried Gnonto",
        "position": "RW",
        "lastStatus": "sub_in"
      },
      {
        "id": "319301",
        "name": "Daniel James",
        "position": "RW",
        "lastStatus": "sub_in"
      },
      {
        "id": "306024",
        "name": "Dominic Calvert-Lewin",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "314288",
        "name": "Lukas Nmecha",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "369962",
        "name": "Joël Piroe",
        "position": "CF",
        "lastStatus": "sub_in"
      },
      {
        "id": "1108476",
        "name": "Harry Gray",
        "position": "CF",
        "lastStatus": "not_included"
      }
    ]
  },
  {
    "clubId": "newcastle",
    "club": "Newcastle United",
    "country": "Англия",
    "league": "Premier League",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/GB1/2025/newcastle-united.json",
    "scrapedAt": "2026-06-12T22:34:32.172638+00:00",
    "players": [
      {
        "id": "427568",
        "name": "Aaron Ramsdale",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "192080",
        "name": "Nick Pope",
        "position": "GK",
        "lastStatus": "starting"
      },
      {
        "id": "29712",
        "name": "John Ruddy",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "521964",
        "name": "Malick Thiaw",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "361093",
        "name": "Sven Botman",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "134270",
        "name": "Dan Burn",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "135343",
        "name": "Fabian Schär",
        "position": "CB",
        "lastStatus": "injured"
      },
      {
        "id": "183318",
        "name": "Jamaal Lascelles",
        "position": "CB",
        "lastStatus": "not_included"
      },
      {
        "id": "670858",
        "name": "Lewis Hall",
        "position": "LB",
        "lastStatus": "starting"
      },
      {
        "id": "900601",
        "name": "Alex Murphy",
        "position": "LB",
        "lastStatus": "sub_in"
      },
      {
        "id": "503981",
        "name": "Tino Livramento",
        "position": "RB",
        "lastStatus": "injured"
      },
      {
        "id": "95810",
        "name": "Kieran Trippier",
        "position": "RB",
        "lastStatus": "bench"
      },
      {
        "id": "184528",
        "name": "Emil Krafth",
        "position": "RB",
        "lastStatus": "injured"
      },
      {
        "id": "940858",
        "name": "Leo Shahar",
        "position": "RB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "397033",
        "name": "Sandro Tonali",
        "position": "DM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "520624",
        "name": "Bruno Guimarães",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "503749",
        "name": "Jacob Ramsey",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "333241",
        "name": "Joelinton",
        "position": "CM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "922769",
        "name": "Lewis Miley",
        "position": "CM",
        "lastStatus": "injured"
      },
      {
        "id": "340329",
        "name": "Joe Willock",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "1146664",
        "name": "Sam Alabi",
        "position": "CM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "503733",
        "name": "Anthony Gordon",
        "position": "LW",
        "lastStatus": "bench"
      },
      {
        "id": "398065",
        "name": "Harvey Barnes",
        "position": "LW",
        "lastStatus": "sub_in"
      },
      {
        "id": "1134717",
        "name": "Seung-soo Park",
        "position": "LW",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "583189",
        "name": "Anthony Elanga",
        "position": "RW",
        "lastStatus": "sub_in"
      },
      {
        "id": "199527",
        "name": "Jacob Murphy",
        "position": "RW",
        "lastStatus": "starting"
      },
      {
        "id": "455661",
        "name": "Nick Woltemade",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "609556",
        "name": "William Osula",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "388165",
        "name": "Yoane Wissa",
        "position": "CF",
        "lastStatus": "sub_in"
      },
      {
        "id": "1071818",
        "name": "Sean Neave",
        "position": "CF",
        "lastStatus": "sub_in"
      }
    ]
  },
  {
    "clubId": "nottingham-forest",
    "club": "Nottingham Forest",
    "country": "Англия",
    "league": "Premier League",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/GB1/2025/nottingham-forest.json",
    "scrapedAt": "2026-06-12T22:35:06.447766+00:00",
    "players": [
      {
        "id": "432914",
        "name": "John Victor",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "85941",
        "name": "Stefan Ortega",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "127202",
        "name": "Matz Sels",
        "position": "GK",
        "lastStatus": "starting"
      },
      {
        "id": "201574",
        "name": "Angus Gunn",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1005649",
        "name": "Murillo",
        "position": "CB",
        "lastStatus": "injured"
      },
      {
        "id": "413507",
        "name": "Nikola Milenković",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "984096",
        "name": "Jair Cunha",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "673492",
        "name": "Morato",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "933017",
        "name": "Zach Abbott",
        "position": "CB",
        "lastStatus": "bench"
      },
      {
        "id": "142310",
        "name": "Willy Boly",
        "position": "CB",
        "lastStatus": "injured"
      },
      {
        "id": "503680",
        "name": "Neco Williams",
        "position": "LB",
        "lastStatus": "starting"
      },
      {
        "id": "203853",
        "name": "Oleksandr Zinchenko",
        "position": "LB",
        "lastStatus": "not_included"
      },
      {
        "id": "524285",
        "name": "Luca Netz",
        "position": "LB",
        "lastStatus": "sub_in"
      },
      {
        "id": "236490",
        "name": "Ola Aina",
        "position": "RB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "708072",
        "name": "Nicolò Savona",
        "position": "RB",
        "lastStatus": "injured"
      },
      {
        "id": "897481",
        "name": "Eric da Silva Moreira",
        "position": "RB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "375885",
        "name": "Ibrahim Sangaré",
        "position": "DM",
        "lastStatus": "starting"
      },
      {
        "id": "567576",
        "name": "Elliot Anderson",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "447661",
        "name": "Douglas Luiz",
        "position": "CM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "497291",
        "name": "Nicolás Domínguez",
        "position": "CM",
        "lastStatus": "sub_in"
      },
      {
        "id": "425902",
        "name": "Ryan Yates",
        "position": "CM",
        "lastStatus": "sub_in"
      },
      {
        "id": "995863",
        "name": "Archie Whitehall",
        "position": "CM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1047506",
        "name": "Jimmy Sinclair",
        "position": "RM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "429014",
        "name": "Morgan Gibbs-White",
        "position": "AM",
        "lastStatus": "starting"
      },
      {
        "id": "741238",
        "name": "Omari Hutchinson",
        "position": "AM",
        "lastStatus": "starting"
      },
      {
        "id": "583199",
        "name": "James McAtee",
        "position": "AM",
        "lastStatus": "sub_in"
      },
      {
        "id": "392768",
        "name": "Callum Hudson-Odoi",
        "position": "LW",
        "lastStatus": "injured"
      },
      {
        "id": "663244",
        "name": "Jota Silva",
        "position": "LW",
        "lastStatus": "not_included"
      },
      {
        "id": "365108",
        "name": "Dan Ndoye",
        "position": "RW",
        "lastStatus": "bench"
      },
      {
        "id": "540664",
        "name": "Dilane Bakwa",
        "position": "RW",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "432164",
        "name": "Igor Jesus",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "585959",
        "name": "Arnaud Kalimuendo",
        "position": "CF",
        "lastStatus": "not_included"
      },
      {
        "id": "572265",
        "name": "Lorenzo Lucca",
        "position": "CF",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "295313",
        "name": "Taiwo Awoniyi",
        "position": "CF",
        "lastStatus": "sub_in"
      },
      {
        "id": "108725",
        "name": "Chris Wood",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "1328146",
        "name": "Lamin Sillah",
        "position": "CF",
        "lastStatus": "bench"
      }
    ]
  },
  {
    "clubId": "west-ham",
    "club": "West Ham United",
    "country": "Англия",
    "league": "Premier League",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/GB1/2025/west-ham-united.json",
    "scrapedAt": "2026-06-12T22:40:18.221791+00:00",
    "players": [
      {
        "id": "400536",
        "name": "Mads Hermansen",
        "position": "GK",
        "lastStatus": "starting"
      },
      {
        "id": "120629",
        "name": "Alphonse Areola",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "29692",
        "name": "Lukasz Fabianski",
        "position": "GK",
        "lastStatus": "injured"
      },
      {
        "id": "848439",
        "name": "Finlay Herrick",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "605184",
        "name": "Jean-Clair Todibo",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "415912",
        "name": "Konstantinos Mavropanos",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "361914",
        "name": "Nayef Aguerd",
        "position": "CB",
        "lastStatus": "not_included"
      },
      {
        "id": "386047",
        "name": "Axel Disasi",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "525247",
        "name": "Maximilian Kilman",
        "position": "CB",
        "lastStatus": "bench"
      },
      {
        "id": "380350",
        "name": "Igor Julio",
        "position": "CB",
        "lastStatus": "not_included"
      },
      {
        "id": "1107726",
        "name": "Ezra Mayers",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1108668",
        "name": "Airidas Golambeckis",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1111589",
        "name": "El Hadji Malick Diouf",
        "position": "LB",
        "lastStatus": "starting"
      },
      {
        "id": "922563",
        "name": "Oliver Scarles",
        "position": "LB",
        "lastStatus": "bench"
      },
      {
        "id": "477758",
        "name": "Aaron Wan-Bissaka",
        "position": "RB",
        "lastStatus": "bench"
      },
      {
        "id": "341051",
        "name": "Kyle Walker-Peters",
        "position": "RB",
        "lastStatus": "starting"
      },
      {
        "id": "745181",
        "name": "Soungoutou Magassa",
        "position": "DM",
        "lastStatus": "bench"
      },
      {
        "id": "401356",
        "name": "Edson Álvarez",
        "position": "DM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "283628",
        "name": "Tomáš Souček",
        "position": "DM",
        "lastStatus": "starting"
      },
      {
        "id": "698164",
        "name": "Freddie Potts",
        "position": "DM",
        "lastStatus": "bench"
      },
      {
        "id": "342385",
        "name": "Guido Rodríguez",
        "position": "DM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "1081995",
        "name": "Mohamadou Kanté",
        "position": "DM",
        "lastStatus": "sub_in"
      },
      {
        "id": "880245",
        "name": "Mateus Fernandes",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "181579",
        "name": "James Ward-Prowse",
        "position": "CM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "430310",
        "name": "Andrew Irving",
        "position": "CM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "444523",
        "name": "Lucas Paquetá",
        "position": "AM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "697280",
        "name": "George Earthy",
        "position": "AM",
        "lastStatus": "not_included"
      },
      {
        "id": "474701",
        "name": "Crysencio Summerville",
        "position": "LW",
        "lastStatus": "starting"
      },
      {
        "id": "1004203",
        "name": "Keiber Lamadrid",
        "position": "LW",
        "lastStatus": "bench"
      },
      {
        "id": "314875",
        "name": "Jarrod Bowen",
        "position": "RW",
        "lastStatus": "starting"
      },
      {
        "id": "991800",
        "name": "Luís Guilherme",
        "position": "RW",
        "lastStatus": "not_at_club"
      },
      {
        "id": "204103",
        "name": "Adama Traoré",
        "position": "RW",
        "lastStatus": "injured"
      },
      {
        "id": "522784",
        "name": "Taty Castellanos",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "817665",
        "name": "Pablo",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "123682",
        "name": "Callum Wilson",
        "position": "CF",
        "lastStatus": "sub_in"
      },
      {
        "id": "75489",
        "name": "Niclas Füllkrug",
        "position": "CF",
        "lastStatus": "not_at_club"
      },
      {
        "id": "953135",
        "name": "Callum Marshall",
        "position": "CF",
        "lastStatus": "not_included"
      }
    ]
  },
  {
    "clubId": "wolverhampton-wanderers",
    "club": "Wolverhampton Wanderers",
    "country": "Англия",
    "league": "Premier League",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/GB1/2025/wolverhampton-wanderers.json",
    "scrapedAt": "2026-06-12T22:42:00.518160+00:00",
    "players": [
      {
        "id": "249994",
        "name": "José Sá",
        "position": "GK",
        "lastStatus": "starting"
      },
      {
        "id": "110864",
        "name": "Sam Johnstone",
        "position": "GK",
        "lastStatus": "injured"
      },
      {
        "id": "136401",
        "name": "Daniel Bentley",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "700461",
        "name": "Alfie Brooks",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1160291",
        "name": "Josh Gracey",
        "position": "GK",
        "lastStatus": "not_included"
      },
      {
        "id": "345911",
        "name": "Ladislav Krejčí",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "606718",
        "name": "Toti",
        "position": "CB",
        "lastStatus": "sub_in"
      },
      {
        "id": "683895",
        "name": "Emmanuel Agbadou",
        "position": "CB",
        "lastStatus": "not_included"
      },
      {
        "id": "716276",
        "name": "Yerson Mosquera",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "438001",
        "name": "Santiago Bueno",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "821522",
        "name": "Alfie Pond",
        "position": "CB",
        "lastStatus": "not_included"
      },
      {
        "id": "813142",
        "name": "Temple Ojinnaka",
        "position": "CB",
        "lastStatus": "not_included"
      },
      {
        "id": "1081155",
        "name": "Saheed Olagunju",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "698678",
        "name": "Hugo Bueno",
        "position": "LB",
        "lastStatus": "sub_in"
      },
      {
        "id": "661427",
        "name": "David Møller Wolfe",
        "position": "LB",
        "lastStatus": "starting"
      },
      {
        "id": "848509",
        "name": "Jackson Tchatchoua",
        "position": "RB",
        "lastStatus": "bench"
      },
      {
        "id": "1193867",
        "name": "Pedro Lima",
        "position": "RB",
        "lastStatus": "sub_in"
      },
      {
        "id": "485583",
        "name": "Ki-Jana Hoever",
        "position": "RB",
        "lastStatus": "not_included"
      },
      {
        "id": "171679",
        "name": "Matt Doherty",
        "position": "RB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "800176",
        "name": "André",
        "position": "DM",
        "lastStatus": "starting"
      },
      {
        "id": "1083691",
        "name": "Luke Rawlings",
        "position": "DM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1370903",
        "name": "Jerome Abbey",
        "position": "DM",
        "lastStatus": "sub_in"
      },
      {
        "id": "735570",
        "name": "João Gomes",
        "position": "CM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "450050",
        "name": "Jean-Ricner Bellegarde",
        "position": "CM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "414908",
        "name": "Marshall Munetsi",
        "position": "CM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "667121",
        "name": "Rodrigo Gomes",
        "position": "LM",
        "lastStatus": "starting"
      },
      {
        "id": "1044516",
        "name": "Ethan Sutherland",
        "position": "LM",
        "lastStatus": "bench"
      },
      {
        "id": "1230661",
        "name": "Mateus Mané",
        "position": "AM",
        "lastStatus": "starting"
      },
      {
        "id": "1064471",
        "name": "Fer López",
        "position": "AM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "392770",
        "name": "Angel Gomes",
        "position": "AM",
        "lastStatus": "starting"
      },
      {
        "id": "724783",
        "name": "Tawanda Chirewa",
        "position": "AM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "1060740",
        "name": "Enso González",
        "position": "LW",
        "lastStatus": "injured"
      },
      {
        "id": "588989",
        "name": "Jhon Arias",
        "position": "RW",
        "lastStatus": "not_at_club"
      },
      {
        "id": "1065227",
        "name": "Tom Edozie",
        "position": "RW",
        "lastStatus": "bench"
      },
      {
        "id": "429983",
        "name": "Jørgen Strand Larsen",
        "position": "CF",
        "lastStatus": "not_at_club"
      },
      {
        "id": "683571",
        "name": "Tolu Arokodare",
        "position": "CF",
        "lastStatus": "sub_in"
      },
      {
        "id": "250426",
        "name": "Adam Armstrong",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "292246",
        "name": "Hee-chan Hwang",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "369567",
        "name": "Sasa Kalajdzic",
        "position": "CF",
        "lastStatus": "not_included"
      }
    ]
  },
  {
    "clubId": "fiorentina",
    "club": "ACF Fiorentina",
    "country": "Италия",
    "league": "Serie A",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/IT1/2025/ac-florenz.json",
    "scrapedAt": "2026-06-12T23:41:39.000717+00:00",
    "players": [
      {
        "id": "934159",
        "name": "Tommaso Martinelli",
        "position": "GK",
        "lastStatus": "not_included"
      },
      {
        "id": "59377",
        "name": "David de Gea",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "471936",
        "name": "Oliver Christensen",
        "position": "GK",
        "lastStatus": "starting"
      },
      {
        "id": "135747",
        "name": "Luca Lezzerini",
        "position": "GK",
        "lastStatus": "sub_in"
      },
      {
        "id": "937631",
        "name": "Pietro Leonardelli",
        "position": "GK",
        "lastStatus": "not_at_club"
      },
      {
        "id": "746712",
        "name": "Pietro Comuzzo",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "282144",
        "name": "Marin Pongracic",
        "position": "CB",
        "lastStatus": "sub_in"
      },
      {
        "id": "346561",
        "name": "Luca Ranieri",
        "position": "CB",
        "lastStatus": "absent"
      },
      {
        "id": "493702",
        "name": "Mattia Viti",
        "position": "CB",
        "lastStatus": "not_included"
      },
      {
        "id": "957822",
        "name": "Eddy Kouadio",
        "position": "CB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "162959",
        "name": "Daniele Rugani",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "210178",
        "name": "Pablo Marí",
        "position": "CB",
        "lastStatus": "not_included"
      },
      {
        "id": "1015822",
        "name": "Eman Košpo",
        "position": "CB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "934513",
        "name": "Edoardo Sadotti",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "984964",
        "name": "Niccolò Fortini",
        "position": "LB",
        "lastStatus": "bench"
      },
      {
        "id": "547985",
        "name": "Fabiano Parisi",
        "position": "LB",
        "lastStatus": "injured"
      },
      {
        "id": "273132",
        "name": "Robin Gosens",
        "position": "LB",
        "lastStatus": "starting"
      },
      {
        "id": "1012731",
        "name": "Luis Balbo",
        "position": "LB",
        "lastStatus": "sub_in"
      },
      {
        "id": "401529",
        "name": "Dodô",
        "position": "RB",
        "lastStatus": "starting"
      },
      {
        "id": "504148",
        "name": "Tariq Lamptey",
        "position": "RB",
        "lastStatus": "not_included"
      },
      {
        "id": "308279",
        "name": "Rolando Mandragora",
        "position": "DM",
        "lastStatus": "starting"
      },
      {
        "id": "430280",
        "name": "Hans Nicolussi Caviglia",
        "position": "DM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "1057839",
        "name": "Lapo Deli",
        "position": "DM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "1304522",
        "name": "Salvatore Cianciulli",
        "position": "DM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "651005",
        "name": "Cher Ndour",
        "position": "CM",
        "lastStatus": "sub_in"
      },
      {
        "id": "432090",
        "name": "Nicolò Fagioli",
        "position": "CM",
        "lastStatus": "bench"
      },
      {
        "id": "459128",
        "name": "Marco Brescianini",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "691482",
        "name": "Jacopo Fazzini",
        "position": "CM",
        "lastStatus": "injured"
      },
      {
        "id": "507486",
        "name": "Simon Sohm",
        "position": "CM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "893675",
        "name": "Amir Richardson",
        "position": "CM",
        "lastStatus": "not_included"
      },
      {
        "id": "1190028",
        "name": "Piergiorgio Bonanno",
        "position": "CM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "633668",
        "name": "Giovanni Fabbian",
        "position": "AM",
        "lastStatus": "starting"
      },
      {
        "id": "340394",
        "name": "Abdelhamid Sabiri",
        "position": "AM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1078812",
        "name": "Antonio Pirrò",
        "position": "AM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "396638",
        "name": "Manor Solomon",
        "position": "LW",
        "lastStatus": "sub_in"
      },
      {
        "id": "417346",
        "name": "Jack Harrison",
        "position": "LW",
        "lastStatus": "starting"
      },
      {
        "id": "1057841",
        "name": "Giorgio Puzzoli",
        "position": "RW",
        "lastStatus": "bench"
      },
      {
        "id": "305947",
        "name": "Albert Gudmundsson",
        "position": "SS",
        "lastStatus": "starting"
      },
      {
        "id": "364135",
        "name": "Moise Kean",
        "position": "CF",
        "lastStatus": "injured"
      },
      {
        "id": "432092",
        "name": "Roberto Piccoli",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "934514",
        "name": "Riccardo Braschi",
        "position": "CF",
        "lastStatus": "bench"
      },
      {
        "id": "337725",
        "name": "Christian Kouamé",
        "position": "CF",
        "lastStatus": "not_included"
      },
      {
        "id": "28396",
        "name": "Edin Dzeko",
        "position": "CF",
        "lastStatus": "not_included"
      }
    ]
  },
  {
    "clubId": "ac-pisa-1909",
    "club": "Pisa Sporting Club",
    "country": "Италия",
    "league": "Serie A",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/IT1/2025/ac-pisa-1909.json",
    "scrapedAt": "2026-06-12T23:48:31.293981+00:00",
    "players": [
      {
        "id": "317057",
        "name": "Adrian Semper",
        "position": "GK",
        "lastStatus": "starting"
      },
      {
        "id": "238993",
        "name": "Simone Scuffet",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "921561",
        "name": "Ante Vukovic",
        "position": "GK",
        "lastStatus": "not_included"
      },
      {
        "id": "99523",
        "name": "Nícolas",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "1247043",
        "name": "Matteo Luppichini",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1337319",
        "name": "Tommaso Guizzo",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "358003",
        "name": "Simone Canestrelli",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "877124",
        "name": "Rosen Bozhinov",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "663900",
        "name": "Giovanni Bonfanti",
        "position": "CB",
        "lastStatus": "not_included"
      },
      {
        "id": "925838",
        "name": "Francesco Coppola",
        "position": "CB",
        "lastStatus": "injured"
      },
      {
        "id": "149525",
        "name": "Antonio Caracciolo",
        "position": "CB",
        "lastStatus": "absent"
      },
      {
        "id": "240897",
        "name": "Arturo Calabresi",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "15452",
        "name": "Raúl Albiol",
        "position": "CB",
        "lastStatus": "bench"
      },
      {
        "id": "1159022",
        "name": "Mateus Lusuardi",
        "position": "CB",
        "lastStatus": "not_included"
      },
      {
        "id": "692187",
        "name": "Daniel Denoon",
        "position": "CB",
        "lastStatus": "injured"
      },
      {
        "id": "1231354",
        "name": "Jeremy Mbambi",
        "position": "CB",
        "lastStatus": "not_included"
      },
      {
        "id": "379163",
        "name": "Marius Marin",
        "position": "DM",
        "lastStatus": "injured"
      },
      {
        "id": "543822",
        "name": "Malthe Højholt",
        "position": "DM",
        "lastStatus": "sub_in"
      },
      {
        "id": "843286",
        "name": "Felipe Loyola",
        "position": "CM",
        "lastStatus": "sub_in"
      },
      {
        "id": "969192",
        "name": "Ebenezer Akinsanmiro",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "989621",
        "name": "İsak Vural",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "237658",
        "name": "Michel Aebischer",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "628365",
        "name": "Gabriele Piccinini",
        "position": "CM",
        "lastStatus": "sub_in"
      },
      {
        "id": "1191068",
        "name": "Brando Bettazzi",
        "position": "CM",
        "lastStatus": "sub_in"
      },
      {
        "id": "335516",
        "name": "Idrissa Touré",
        "position": "RM",
        "lastStatus": "bench"
      },
      {
        "id": "504085",
        "name": "Tomás Esteves",
        "position": "RM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "91970",
        "name": "Juan Cuadrado",
        "position": "RM",
        "lastStatus": "sub_in"
      },
      {
        "id": "581672",
        "name": "Samuel Iling-Junior",
        "position": "LM",
        "lastStatus": "bench"
      },
      {
        "id": "705063",
        "name": "Samuele Angori",
        "position": "LM",
        "lastStatus": "starting"
      },
      {
        "id": "409344",
        "name": "Calvin Stengs",
        "position": "AM",
        "lastStatus": "bench"
      },
      {
        "id": "475410",
        "name": "Matteo Tramoni",
        "position": "AM",
        "lastStatus": "injured"
      },
      {
        "id": "1009030",
        "name": "Lorran",
        "position": "AM",
        "lastStatus": "injured"
      },
      {
        "id": "1002758",
        "name": "Giacomo Maucci",
        "position": "AM",
        "lastStatus": "not_included"
      },
      {
        "id": "348601",
        "name": "Mehdi Léris",
        "position": "RW",
        "lastStatus": "starting"
      },
      {
        "id": "1053566",
        "name": "Mert Durmush",
        "position": "RW",
        "lastStatus": "not_included"
      },
      {
        "id": "935760",
        "name": "Rafiu Durosinmi",
        "position": "CF",
        "lastStatus": "bench"
      },
      {
        "id": "354814",
        "name": "M'Bala Nzola",
        "position": "CF",
        "lastStatus": "not_at_club"
      },
      {
        "id": "914934",
        "name": "Henrik Meister",
        "position": "CF",
        "lastStatus": "bench"
      },
      {
        "id": "464195",
        "name": "Filip Stojilkovic",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "279823",
        "name": "Stefano Moreo",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "1191069",
        "name": "Louis Buffon",
        "position": "CF",
        "lastStatus": "not_included"
      }
    ]
  },
  {
    "clubId": "roma",
    "club": "AS Roma",
    "country": "Италия",
    "league": "Serie A",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/IT1/2025/as-rom.json",
    "scrapedAt": "2026-06-12T23:34:55.502709+00:00",
    "players": [
      {
        "id": "338670",
        "name": "Mile Svilar",
        "position": "GK",
        "lastStatus": "starting"
      },
      {
        "id": "495722",
        "name": "Devis Vásquez",
        "position": "GK",
        "lastStatus": "not_included"
      },
      {
        "id": "244192",
        "name": "Pierluigi Gollini",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "1073023",
        "name": "Radoslaw Zelezny",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "942004",
        "name": "Giorgio De Marzi",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "371149",
        "name": "Evan Ndicka",
        "position": "CB",
        "lastStatus": "injured"
      },
      {
        "id": "701819",
        "name": "Daniele Ghilardi",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "256448",
        "name": "Gianluca Mancini",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "1046867",
        "name": "Jan Ziolkowski",
        "position": "CB",
        "lastStatus": "sub_in"
      },
      {
        "id": "281769",
        "name": "Mario Hermoso",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "1116502",
        "name": "Mohamed Seck",
        "position": "CB",
        "lastStatus": "bench"
      },
      {
        "id": "1053222",
        "name": "Jacopo Mirra",
        "position": "CB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "277179",
        "name": "Angeliño",
        "position": "LB",
        "lastStatus": "bench"
      },
      {
        "id": "338070",
        "name": "Konstantinos Tsimikas",
        "position": "LB",
        "lastStatus": "injured"
      },
      {
        "id": "964580",
        "name": "Wesley",
        "position": "RB",
        "lastStatus": "absent"
      },
      {
        "id": "251075",
        "name": "Zeki Çelik",
        "position": "RB",
        "lastStatus": "starting"
      },
      {
        "id": "557407",
        "name": "Devyne Rensch",
        "position": "RB",
        "lastStatus": "starting"
      },
      {
        "id": "962125",
        "name": "Buba Sangaré",
        "position": "RB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "1175298",
        "name": "Emanuele Lulli",
        "position": "RB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "199248",
        "name": "Bryan Cristante",
        "position": "DM",
        "lastStatus": "starting"
      },
      {
        "id": "911224",
        "name": "Alessandro Romano",
        "position": "DM",
        "lastStatus": "not_included"
      },
      {
        "id": "624690",
        "name": "Manu Koné",
        "position": "CM",
        "lastStatus": "sub_in"
      },
      {
        "id": "813137",
        "name": "Niccolò Pisilli",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "901019",
        "name": "Neil El Aynaoui",
        "position": "CM",
        "lastStatus": "sub_in"
      },
      {
        "id": "1080788",
        "name": "Muhammed Bah",
        "position": "CM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "641537",
        "name": "Tommaso Baldanzi",
        "position": "AM",
        "lastStatus": "not_included"
      },
      {
        "id": "286297",
        "name": "Lorenzo Pellegrini",
        "position": "AM",
        "lastStatus": "injured"
      },
      {
        "id": "929870",
        "name": "Mattia Della Rocca",
        "position": "AM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "713644",
        "name": "Bryan Zaragoza",
        "position": "LW",
        "lastStatus": "injured"
      },
      {
        "id": "94529",
        "name": "Stephan El Shaarawy",
        "position": "LW",
        "lastStatus": "sub_in"
      },
      {
        "id": "668951",
        "name": "Matías Soulé",
        "position": "RW",
        "lastStatus": "starting"
      },
      {
        "id": "387626",
        "name": "Leon Bailey",
        "position": "RW",
        "lastStatus": "not_at_club"
      },
      {
        "id": "1061820",
        "name": "Lorenzo Venturino",
        "position": "RW",
        "lastStatus": "bench"
      },
      {
        "id": "206050",
        "name": "Paulo Dybala",
        "position": "SS",
        "lastStatus": "starting"
      },
      {
        "id": "326029",
        "name": "Donyell Malen",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "648046",
        "name": "Evan Ferguson",
        "position": "CF",
        "lastStatus": "injured"
      },
      {
        "id": "1131161",
        "name": "Robinio Vaz",
        "position": "CF",
        "lastStatus": "sub_in"
      },
      {
        "id": "343537",
        "name": "Artem Dovbyk",
        "position": "CF",
        "lastStatus": "bench"
      },
      {
        "id": "1251220",
        "name": "Antonio Arena",
        "position": "CF",
        "lastStatus": "not_at_club"
      }
    ]
  },
  {
    "clubId": "atalanta",
    "club": "Atalanta BC",
    "country": "Италия",
    "league": "Serie A",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/IT1/2025/atalanta-bergamo.json",
    "scrapedAt": "2026-06-12T23:36:38.687461+00:00",
    "players": [
      {
        "id": "459763",
        "name": "Marco Carnesecchi",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "199976",
        "name": "Marco Sportiello",
        "position": "GK",
        "lastStatus": "starting"
      },
      {
        "id": "970683",
        "name": "Piotr Pardel",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "126634",
        "name": "Francesco Rossi",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "571604",
        "name": "Giorgio Scalvini",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "1077175",
        "name": "Honest Ahanor",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "503075",
        "name": "Isak Hien",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "644771",
        "name": "Odilon Kossounou",
        "position": "CB",
        "lastStatus": "injured"
      },
      {
        "id": "94005",
        "name": "Sead Kolasinac",
        "position": "CB",
        "lastStatus": "bench"
      },
      {
        "id": "165513",
        "name": "Berat Djimsiti",
        "position": "CB",
        "lastStatus": "sub_in"
      },
      {
        "id": "663900",
        "name": "Giovanni Bonfanti",
        "position": "CB",
        "lastStatus": "not_included"
      },
      {
        "id": "962154",
        "name": "Albert Navarro",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "940553",
        "name": "Relja Obric",
        "position": "CB",
        "lastStatus": "bench"
      },
      {
        "id": "936753",
        "name": "Pietro Comi",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "982267",
        "name": "Ibrahim Sulemana",
        "position": "DM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "133179",
        "name": "Marten de Roon",
        "position": "DM",
        "lastStatus": "starting"
      },
      {
        "id": "607854",
        "name": "Éderson",
        "position": "CM",
        "lastStatus": "bench"
      },
      {
        "id": "503991",
        "name": "Yunus Musah",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "459128",
        "name": "Marco Brescianini",
        "position": "CM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "205938",
        "name": "Mario Pašalić",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "892165",
        "name": "Sergej Levak",
        "position": "CM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "357992",
        "name": "Raoul Bellanova",
        "position": "RM",
        "lastStatus": "starting"
      },
      {
        "id": "173859",
        "name": "Davide Zappacosta",
        "position": "RM",
        "lastStatus": "sub_in"
      },
      {
        "id": "550108",
        "name": "Nicola Zalewski",
        "position": "LM",
        "lastStatus": "bench"
      },
      {
        "id": "708635",
        "name": "Lorenzo Bernasconi",
        "position": "LM",
        "lastStatus": "injured"
      },
      {
        "id": "361065",
        "name": "Mitchel Bakker",
        "position": "LM",
        "lastStatus": "bench"
      },
      {
        "id": "435772",
        "name": "Charles De Ketelaere",
        "position": "AM",
        "lastStatus": "sub_in"
      },
      {
        "id": "528833",
        "name": "Lazar Samardžić",
        "position": "AM",
        "lastStatus": "starting"
      },
      {
        "id": "539134",
        "name": "Daniel Maldini",
        "position": "AM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "406040",
        "name": "Ademola Lookman",
        "position": "LW",
        "lastStatus": "not_at_club"
      },
      {
        "id": "746695",
        "name": "Kamaldeen Sulemana",
        "position": "LW",
        "lastStatus": "starting"
      },
      {
        "id": "405885",
        "name": "Giacomo Raspadori",
        "position": "SS",
        "lastStatus": "starting"
      },
      {
        "id": "936739",
        "name": "Dominic Vavassori",
        "position": "SS",
        "lastStatus": "sub_in"
      },
      {
        "id": "434433",
        "name": "Nikola Krstović",
        "position": "CF",
        "lastStatus": "bench"
      },
      {
        "id": "315867",
        "name": "Gianluca Scamacca",
        "position": "CF",
        "lastStatus": "sub_in"
      },
      {
        "id": "955427",
        "name": "Henry Camara",
        "position": "CF",
        "lastStatus": "not_in_squad"
      }
    ]
  },
  {
    "clubId": "cagliari-calcio",
    "club": "Cagliari Calcio",
    "country": "Италия",
    "league": "Serie A",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/IT1/2025/cagliari-calcio.json",
    "scrapedAt": "2026-06-12T23:46:06.532252+00:00",
    "players": [
      {
        "id": "421873",
        "name": "Elia Caprile",
        "position": "GK",
        "lastStatus": "starting"
      },
      {
        "id": "304144",
        "name": "Alen Sherri",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "258482",
        "name": "Boris Radunović",
        "position": "GK",
        "lastStatus": "not_included"
      },
      {
        "id": "927933",
        "name": "Velizar-Iliya Iliev",
        "position": "GK",
        "lastStatus": "not_included"
      },
      {
        "id": "535740",
        "name": "Giuseppe Ciocci",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "1185950",
        "name": "Vincenzo Sarno",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1228231",
        "name": "Juan Rodríguez",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "385394",
        "name": "Alberto Dossena",
        "position": "CB",
        "lastStatus": "sub_in"
      },
      {
        "id": "278531",
        "name": "Sebastiano Luperto",
        "position": "CB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "406151",
        "name": "Zé Pedro",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "289446",
        "name": "Yerry Mina",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "885230",
        "name": "Nicola Pintus",
        "position": "CB",
        "lastStatus": "not_included"
      },
      {
        "id": "979850",
        "name": "Andrea Cogoni",
        "position": "CB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "568333",
        "name": "Adam Obert",
        "position": "LB",
        "lastStatus": "starting"
      },
      {
        "id": "885226",
        "name": "Riyad Idrissi",
        "position": "LB",
        "lastStatus": "injured"
      },
      {
        "id": "895937",
        "name": "Marco Palestra",
        "position": "RB",
        "lastStatus": "sub_in"
      },
      {
        "id": "392569",
        "name": "Gabriele Zappa",
        "position": "RB",
        "lastStatus": "starting"
      },
      {
        "id": "457674",
        "name": "Alessandro Di Pardo",
        "position": "RB",
        "lastStatus": "not_included"
      },
      {
        "id": "997478",
        "name": "Othniël Raterink",
        "position": "RB",
        "lastStatus": "bench"
      },
      {
        "id": "358008",
        "name": "Gianluca Gaetano",
        "position": "DM",
        "lastStatus": "starting"
      },
      {
        "id": "982267",
        "name": "Ibrahim Sulemana",
        "position": "DM",
        "lastStatus": "sub_in"
      },
      {
        "id": "876298",
        "name": "Matteo Prati",
        "position": "DM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "1317566",
        "name": "Alessandro Sabino Russo",
        "position": "DM",
        "lastStatus": "bench"
      },
      {
        "id": "564305",
        "name": "Michel Adopo",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "377042",
        "name": "Michael Folorunsho",
        "position": "CM",
        "lastStatus": "injured"
      },
      {
        "id": "1134304",
        "name": "Joseph Liteta",
        "position": "CM",
        "lastStatus": "injured"
      },
      {
        "id": "235931",
        "name": "Alessandro Deiola",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "226025",
        "name": "Luca Mazzitelli",
        "position": "CM",
        "lastStatus": "bench"
      },
      {
        "id": "317482",
        "name": "Marko Rog",
        "position": "CM",
        "lastStatus": "not_included"
      },
      {
        "id": "926839",
        "name": "Ivan Sulev",
        "position": "CM",
        "lastStatus": "bench"
      },
      {
        "id": "1088892",
        "name": "Roberto Malfitano",
        "position": "CM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "1048013",
        "name": "Nicola Grandu",
        "position": "LM",
        "lastStatus": "bench"
      },
      {
        "id": "701842",
        "name": "Nicolò Cavuoti",
        "position": "AM",
        "lastStatus": "not_included"
      },
      {
        "id": "600041",
        "name": "Mattia Felici",
        "position": "LW",
        "lastStatus": "sub_in"
      },
      {
        "id": "1104206",
        "name": "Agustín Albarracín",
        "position": "LW",
        "lastStatus": "bench"
      },
      {
        "id": "885228",
        "name": "Alessandro Vinciguerra",
        "position": "LW",
        "lastStatus": "not_included"
      },
      {
        "id": "666547",
        "name": "Zito Luvumbo",
        "position": "RW",
        "lastStatus": "not_at_club"
      },
      {
        "id": "538918",
        "name": "Sebastiano Esposito",
        "position": "SS",
        "lastStatus": "starting"
      },
      {
        "id": "875334",
        "name": "Semih Kılıçsoy",
        "position": "CF",
        "lastStatus": "national_team"
      },
      {
        "id": "1371793",
        "name": "Paul Mendy",
        "position": "CF",
        "lastStatus": "sub_in"
      },
      {
        "id": "459988",
        "name": "Gennaro Borrelli",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "1099924",
        "name": "Yael Trepy",
        "position": "CF",
        "lastStatus": "bench"
      },
      {
        "id": "167727",
        "name": "Andrea Belotti",
        "position": "CF",
        "lastStatus": "bench"
      },
      {
        "id": "64793",
        "name": "Leonardo Pavoletti",
        "position": "CF",
        "lastStatus": "injured"
      }
    ]
  },
  {
    "clubId": "como-1907",
    "club": "Como 1907",
    "country": "Италия",
    "league": "Serie A",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/IT1/2025/como-1907.json",
    "scrapedAt": "2026-06-12T23:38:41.705777+00:00",
    "players": [
      {
        "id": "290537",
        "name": "Jean Butez",
        "position": "GK",
        "lastStatus": "starting"
      },
      {
        "id": "730531",
        "name": "Noel Törnqvist",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "1259706",
        "name": "Henrique Menke",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "587505",
        "name": "Nikola Cavlina",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "88595",
        "name": "Mauro Vigorito",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "948278",
        "name": "Jacobo Ramón",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "223974",
        "name": "Stefan Posch",
        "position": "CB",
        "lastStatus": "not_included"
      },
      {
        "id": "385394",
        "name": "Alberto Dossena",
        "position": "CB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "329145",
        "name": "Diego Carlos",
        "position": "CB",
        "lastStatus": "bench"
      },
      {
        "id": "160938",
        "name": "Marc Oliver Kempf",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "1004723",
        "name": "Fellipe Jack",
        "position": "CB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "242940",
        "name": "Edoardo Goldaniga",
        "position": "CB",
        "lastStatus": "bench"
      },
      {
        "id": "1078795",
        "name": "Cristiano De Paoli",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "709957",
        "name": "Álex Valle",
        "position": "LB",
        "lastStatus": "injured"
      },
      {
        "id": "207917",
        "name": "Alberto Moreno",
        "position": "LB",
        "lastStatus": "starting"
      },
      {
        "id": "571271",
        "name": "Ivan Smolcic",
        "position": "RB",
        "lastStatus": "starting"
      },
      {
        "id": "490423",
        "name": "Ignace Van der Brempt",
        "position": "RB",
        "lastStatus": "sub_in"
      },
      {
        "id": "336125",
        "name": "Mërgim Vojvoda",
        "position": "RB",
        "lastStatus": "sub_in"
      },
      {
        "id": "668547",
        "name": "Máximo Perrone",
        "position": "DM",
        "lastStatus": "starting"
      },
      {
        "id": "1204163",
        "name": "Andréa Le Borgne",
        "position": "DM",
        "lastStatus": "not_included"
      },
      {
        "id": "495667",
        "name": "Lucas Da Cunha",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "395237",
        "name": "Maxence Caqueret",
        "position": "CM",
        "lastStatus": "sub_in"
      },
      {
        "id": "1231993",
        "name": "Adrian Lahdo",
        "position": "CM",
        "lastStatus": "bench"
      },
      {
        "id": "85370",
        "name": "Sergi Roberto",
        "position": "CM",
        "lastStatus": "sub_in"
      },
      {
        "id": "1433289",
        "name": "Riccardo Cassano",
        "position": "CM",
        "lastStatus": "bench"
      },
      {
        "id": "948294",
        "name": "Nico Paz",
        "position": "AM",
        "lastStatus": "bench"
      },
      {
        "id": "580451",
        "name": "Martin Baturina",
        "position": "AM",
        "lastStatus": "starting"
      },
      {
        "id": "1061282",
        "name": "Assane Diao",
        "position": "LW",
        "lastStatus": "starting"
      },
      {
        "id": "1190411",
        "name": "Jesús Rodríguez",
        "position": "LW",
        "lastStatus": "starting"
      },
      {
        "id": "747720",
        "name": "Jayden Addai",
        "position": "RW",
        "lastStatus": "injured"
      },
      {
        "id": "336012",
        "name": "Nicolas Kühn",
        "position": "RW",
        "lastStatus": "bench"
      },
      {
        "id": "988979",
        "name": "Lorenzo Bonsignori",
        "position": "RW",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1206724",
        "name": "Samuele Pisati",
        "position": "SS",
        "lastStatus": "bench"
      },
      {
        "id": "523318",
        "name": "Anastasios Douvikas",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "128223",
        "name": "Álvaro Morata",
        "position": "CF",
        "lastStatus": "sub_in"
      },
      {
        "id": "633306",
        "name": "Iván Azón",
        "position": "CF",
        "lastStatus": "not_included"
      },
      {
        "id": "265078",
        "name": "Patrick Cutrone",
        "position": "CF",
        "lastStatus": "not_at_club"
      },
      {
        "id": "197751",
        "name": "Alberto Cerri",
        "position": "CF",
        "lastStatus": "not_included"
      },
      {
        "id": "311333",
        "name": "Alessandro Gabrielloni",
        "position": "CF",
        "lastStatus": "not_included"
      }
    ]
  },
  {
    "clubId": "bologna",
    "club": "Bologna FC 1909",
    "country": "Италия",
    "league": "Serie A",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/IT1/2025/fc-bologna.json",
    "scrapedAt": "2026-06-12T23:40:02.236597+00:00",
    "players": [
      {
        "id": "992569",
        "name": "Massimo Pessina",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "80894",
        "name": "Lukasz Skorupski",
        "position": "GK",
        "lastStatus": "starting"
      },
      {
        "id": "390304",
        "name": "Federico Ravaglia",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "1018026",
        "name": "Ukko Happonen",
        "position": "GK",
        "lastStatus": "not_at_club"
      },
      {
        "id": "1265376",
        "name": "Riccardo Gnudi",
        "position": "GK",
        "lastStatus": "not_at_club"
      },
      {
        "id": "1272211",
        "name": "Matteo Franceschelli",
        "position": "GK",
        "lastStatus": "not_at_club"
      },
      {
        "id": "413565",
        "name": "Jhon Lucumí",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "464469",
        "name": "Torbjørn Heggem",
        "position": "CB",
        "lastStatus": "sub_in"
      },
      {
        "id": "652054",
        "name": "Martin Vitík",
        "position": "CB",
        "lastStatus": "injured"
      },
      {
        "id": "1129198",
        "name": "Eivind Helland",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "223974",
        "name": "Stefan Posch",
        "position": "CB",
        "lastStatus": "not_included"
      },
      {
        "id": "389837",
        "name": "Nicolò Casale",
        "position": "CB",
        "lastStatus": "injured"
      },
      {
        "id": "915897",
        "name": "Petar Markovic",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "986324",
        "name": "Bodin Tomasevic",
        "position": "CB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "341227",
        "name": "Juan Miranda",
        "position": "LB",
        "lastStatus": "starting"
      },
      {
        "id": "818880",
        "name": "Tommaso Corazza",
        "position": "LB",
        "lastStatus": "not_included"
      },
      {
        "id": "136514",
        "name": "Charalampos Lykogiannis",
        "position": "LB",
        "lastStatus": "bench"
      },
      {
        "id": "496745",
        "name": "Emil Holm",
        "position": "RB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "537602",
        "name": "João Mário",
        "position": "RB",
        "lastStatus": "bench"
      },
      {
        "id": "392966",
        "name": "Nadir Zortea",
        "position": "RB",
        "lastStatus": "sub_in"
      },
      {
        "id": "33571",
        "name": "Lorenzo De Silvestri",
        "position": "RB",
        "lastStatus": "starting"
      },
      {
        "id": "316934",
        "name": "Nikola Moro",
        "position": "DM",
        "lastStatus": "sub_in"
      },
      {
        "id": "982267",
        "name": "Ibrahim Sulemana",
        "position": "DM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "428563",
        "name": "Lewis Ferguson",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "392538",
        "name": "Tommaso Pobega",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "507486",
        "name": "Simon Sohm",
        "position": "CM",
        "lastStatus": "bench"
      },
      {
        "id": "148252",
        "name": "Remo Freuler",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "345590",
        "name": "Jens Odgaard",
        "position": "AM",
        "lastStatus": "sub_in"
      },
      {
        "id": "633668",
        "name": "Giovanni Fabbian",
        "position": "AM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "672381",
        "name": "Jonathan Rowe",
        "position": "LW",
        "lastStatus": "starting"
      },
      {
        "id": "459151",
        "name": "Nicolò Cambiaghi",
        "position": "LW",
        "lastStatus": "injured"
      },
      {
        "id": "961022",
        "name": "Benja Domínguez",
        "position": "LW",
        "lastStatus": "bench"
      },
      {
        "id": "367992",
        "name": "Jesper Karlsson",
        "position": "LW",
        "lastStatus": "not_at_club"
      },
      {
        "id": "368482",
        "name": "Riccardo Orsolini",
        "position": "RW",
        "lastStatus": "injured"
      },
      {
        "id": "197300",
        "name": "Federico Bernardeschi",
        "position": "RW",
        "lastStatus": "starting"
      },
      {
        "id": "849520",
        "name": "Santiago Castro",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "538964",
        "name": "Thijs Dallinga",
        "position": "CF",
        "lastStatus": "sub_in"
      },
      {
        "id": "105521",
        "name": "Ciro Immobile",
        "position": "CF",
        "lastStatus": "not_included"
      },
      {
        "id": "989000",
        "name": "Francesco Castaldo",
        "position": "CF",
        "lastStatus": "not_at_club"
      }
    ]
  },
  {
    "clubId": "torino",
    "club": "Torino FC",
    "country": "Италия",
    "league": "Serie A",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/IT1/2025/fc-turin.json",
    "scrapedAt": "2026-06-12T23:47:49.115933+00:00",
    "players": [
      {
        "id": "492319",
        "name": "Franco Israel",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "163048",
        "name": "Alberto Paleari",
        "position": "GK",
        "lastStatus": "starting"
      },
      {
        "id": "623412",
        "name": "Mihai Popa",
        "position": "GK",
        "lastStatus": "not_included"
      },
      {
        "id": "942103",
        "name": "Lapo Siviero",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "588426",
        "name": "Saúl Coco",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "814446",
        "name": "Luca Marianucci",
        "position": "CB",
        "lastStatus": "injured"
      },
      {
        "id": "435228",
        "name": "Ardian Ismajli",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "342877",
        "name": "Enzo Ebosse",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "249730",
        "name": "Guillermo Maripán",
        "position": "CB",
        "lastStatus": "absent"
      },
      {
        "id": "286949",
        "name": "Adam Masina",
        "position": "CB",
        "lastStatus": "not_included"
      },
      {
        "id": "655456",
        "name": "Saba Sazonov",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1242353",
        "name": "Mattia Pellini",
        "position": "CB",
        "lastStatus": "bench"
      },
      {
        "id": "646747",
        "name": "Rafa Obrador",
        "position": "LB",
        "lastStatus": "starting"
      },
      {
        "id": "591193",
        "name": "Niels Nkounkou",
        "position": "LB",
        "lastStatus": "sub_in"
      },
      {
        "id": "124555",
        "name": "Cristiano Biraghi",
        "position": "LB",
        "lastStatus": "bench"
      },
      {
        "id": "583404",
        "name": "Marcus Pedersen",
        "position": "RB",
        "lastStatus": "starting"
      },
      {
        "id": "1004344",
        "name": "Ali Dembélé",
        "position": "RB",
        "lastStatus": "not_included"
      },
      {
        "id": "1059298",
        "name": "Côme Bianay Balcot",
        "position": "RB",
        "lastStatus": "not_included"
      },
      {
        "id": "543771",
        "name": "Kristjan Asllani",
        "position": "DM",
        "lastStatus": "not_included"
      },
      {
        "id": "876298",
        "name": "Matteo Prati",
        "position": "DM",
        "lastStatus": "sub_in"
      },
      {
        "id": "157507",
        "name": "Adrien Tamèze",
        "position": "DM",
        "lastStatus": "bench"
      },
      {
        "id": "1056746",
        "name": "Wisdom Acquah",
        "position": "DM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "622380",
        "name": "Cesare Casadei",
        "position": "CM",
        "lastStatus": "sub_in"
      },
      {
        "id": "470794",
        "name": "Ivan Ilić",
        "position": "CM",
        "lastStatus": "bench"
      },
      {
        "id": "743091",
        "name": "Emirhan İlkhan",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "798929",
        "name": "Gvidas Gineitis",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "186368",
        "name": "Valentino Lazaro",
        "position": "RM",
        "lastStatus": "bench"
      },
      {
        "id": "1136766",
        "name": "Zalán Kugyela",
        "position": "LM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "293200",
        "name": "Nikola Vlašić",
        "position": "AM",
        "lastStatus": "starting"
      },
      {
        "id": "433181",
        "name": "Tino Anjorin",
        "position": "AM",
        "lastStatus": "injured"
      },
      {
        "id": "980632",
        "name": "Sergiu Perciun",
        "position": "AM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "934527",
        "name": "Alieu Njie",
        "position": "LW",
        "lastStatus": "sub_in"
      },
      {
        "id": "358032",
        "name": "Cyril Ngonge",
        "position": "RW",
        "lastStatus": "not_included"
      },
      {
        "id": "393238",
        "name": "Zakaria Aboukhlal",
        "position": "RW",
        "lastStatus": "injured"
      },
      {
        "id": "928900",
        "name": "Zanos Savva",
        "position": "RW",
        "lastStatus": "injured"
      },
      {
        "id": "282388",
        "name": "Giovanni Simeone",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "346779",
        "name": "Ché Adams",
        "position": "CF",
        "lastStatus": "sub_in"
      },
      {
        "id": "357778",
        "name": "Sandro Kulenović",
        "position": "CF",
        "lastStatus": "bench"
      },
      {
        "id": "73794",
        "name": "Duván Zapata",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "1040080",
        "name": "Tommaso Gabellini",
        "position": "CF",
        "lastStatus": "bench"
      }
    ]
  },
  {
    "clubId": "genoa",
    "club": "Genoa CFC",
    "country": "Италия",
    "league": "Serie A",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/IT1/2025/genua-cfc.json",
    "scrapedAt": "2026-06-12T23:46:44.473897+00:00",
    "players": [
      {
        "id": "315121",
        "name": "Justin Bijlow",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "136111",
        "name": "Nicola Leali",
        "position": "GK",
        "lastStatus": "starting"
      },
      {
        "id": "874967",
        "name": "Ernestas Lysionok",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "111426",
        "name": "Benjamin Siegrist",
        "position": "GK",
        "lastStatus": "injured"
      },
      {
        "id": "312773",
        "name": "Daniele Sommariva",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "1289670",
        "name": "Rendijs Mihelsons",
        "position": "GK",
        "lastStatus": "not_at_club"
      },
      {
        "id": "818448",
        "name": "Alessandro Marcandalli",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "367284",
        "name": "Leo Østigård",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "532937",
        "name": "Johan Vásquez",
        "position": "CB",
        "lastStatus": "bench"
      },
      {
        "id": "1191520",
        "name": "Nils Zätterström",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "890385",
        "name": "Sebastian Otoa",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "874974",
        "name": "Lukas Klišys",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1009622",
        "name": "Alin Kumer Celik",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1105948",
        "name": "Mamedi Doucouré",
        "position": "CB",
        "lastStatus": "bench"
      },
      {
        "id": "251878",
        "name": "Aarón Martín",
        "position": "LB",
        "lastStatus": "starting"
      },
      {
        "id": "1385195",
        "name": "Latif Ouedraogo",
        "position": "LB",
        "lastStatus": "sub_in"
      },
      {
        "id": "1077204",
        "name": "Kris Gecaj",
        "position": "LB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "728733",
        "name": "Brooke Norton-Cuffy",
        "position": "RB",
        "lastStatus": "sub_in"
      },
      {
        "id": "167491",
        "name": "Stefano Sabelli",
        "position": "RB",
        "lastStatus": "starting"
      },
      {
        "id": "503871",
        "name": "Morten Frendrup",
        "position": "DM",
        "lastStatus": "starting"
      },
      {
        "id": "656441",
        "name": "Jean Onana",
        "position": "DM",
        "lastStatus": "injured"
      },
      {
        "id": "1066134",
        "name": "Jacopo Grossi",
        "position": "DM",
        "lastStatus": "sub_in"
      },
      {
        "id": "1082774",
        "name": "Amorim",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "566615",
        "name": "Mikael Egill Ellertsson",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "459665",
        "name": "Patrizio Masini",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "226524",
        "name": "Morten Thorsby",
        "position": "CM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "207877",
        "name": "Ruslan Malinovskyi",
        "position": "CM",
        "lastStatus": "injured"
      },
      {
        "id": "955358",
        "name": "Gaël Lafont",
        "position": "CM",
        "lastStatus": "sub_in"
      },
      {
        "id": "641537",
        "name": "Tommaso Baldanzi",
        "position": "AM",
        "lastStatus": "injured"
      },
      {
        "id": "787618",
        "name": "Valentín Carboni",
        "position": "AM",
        "lastStatus": "not_included"
      },
      {
        "id": "503866",
        "name": "Albert Grønbæk",
        "position": "AM",
        "lastStatus": "not_included"
      },
      {
        "id": "148372",
        "name": "Nicolae Stanciu",
        "position": "AM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "906315",
        "name": "Hugo Cuenca",
        "position": "AM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "954688",
        "name": "Filippo Carbone",
        "position": "AM",
        "lastStatus": "sub_in"
      },
      {
        "id": "234781",
        "name": "Maxwel Cornet",
        "position": "LW",
        "lastStatus": "injured"
      },
      {
        "id": "902615",
        "name": "Marco Romano",
        "position": "LW",
        "lastStatus": "bench"
      },
      {
        "id": "1188667",
        "name": "Elia Spicuglia",
        "position": "LW",
        "lastStatus": "bench"
      },
      {
        "id": "1061820",
        "name": "Lorenzo Venturino",
        "position": "RW",
        "lastStatus": "not_at_club"
      },
      {
        "id": "866250",
        "name": "Seydou Fini",
        "position": "RW",
        "lastStatus": "not_included"
      },
      {
        "id": "449151",
        "name": "Junior Messias",
        "position": "RW",
        "lastStatus": "injured"
      },
      {
        "id": "934878",
        "name": "Jeff Ekhator",
        "position": "CF",
        "lastStatus": "injured"
      },
      {
        "id": "487843",
        "name": "Lorenzo Colombo",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "586853",
        "name": "Vitinha",
        "position": "CF",
        "lastStatus": "absent"
      },
      {
        "id": "199953",
        "name": "Caleb Ekuban",
        "position": "CF",
        "lastStatus": "injured"
      },
      {
        "id": "1089770",
        "name": "Joi Nuredini",
        "position": "CF",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1190047",
        "name": "Daniel Ndulue",
        "position": "CF",
        "lastStatus": "not_in_squad"
      }
    ]
  },
  {
    "clubId": "hellas-verona",
    "club": "Hellas Verona",
    "country": "Италия",
    "league": "Serie A",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/IT1/2025/hellas-verona.json",
    "scrapedAt": "2026-06-12T23:50:30.850071+00:00",
    "players": [
      {
        "id": "241923",
        "name": "Lorenzo Montipò",
        "position": "GK",
        "lastStatus": "starting"
      },
      {
        "id": "240675",
        "name": "Simone Perilli",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "709986",
        "name": "Giacomo Toniolo",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "1047970",
        "name": "Mirko Castagnini",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "467563",
        "name": "Armel Bella-Kotchap",
        "position": "CB",
        "lastStatus": "sub_in"
      },
      {
        "id": "422951",
        "name": "Victor Nelsson",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "338285",
        "name": "Unai Núñez",
        "position": "CB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "495839",
        "name": "Andrias Edmundsson",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "851385",
        "name": "Tobias Slotsager",
        "position": "CB",
        "lastStatus": "bench"
      },
      {
        "id": "860992",
        "name": "Nicolás Valentini",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "342877",
        "name": "Enzo Ebosse",
        "position": "CB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "903213",
        "name": "Adi Kurti",
        "position": "CB",
        "lastStatus": "not_included"
      },
      {
        "id": "943201",
        "name": "Andrej Popovic",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "488785",
        "name": "Martin Frese",
        "position": "LB",
        "lastStatus": "starting"
      },
      {
        "id": "357796",
        "name": "Domagoj Bradarić",
        "position": "LB",
        "lastStatus": "sub_in"
      },
      {
        "id": "986234",
        "name": "Davide De Battisti",
        "position": "LB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "864306",
        "name": "Rafik Belghali",
        "position": "RB",
        "lastStatus": "starting"
      },
      {
        "id": "298975",
        "name": "Pol Lirola",
        "position": "RB",
        "lastStatus": "bench"
      },
      {
        "id": "586984",
        "name": "Daniel Oyegoke",
        "position": "RB",
        "lastStatus": "injured"
      },
      {
        "id": "1315458",
        "name": "Fallou Cham",
        "position": "RB",
        "lastStatus": "bench"
      },
      {
        "id": "377641",
        "name": "Moatasem Al-Musrati",
        "position": "DM",
        "lastStatus": "sub_in"
      },
      {
        "id": "644032",
        "name": "Cheikh Niasse",
        "position": "DM",
        "lastStatus": "bench"
      },
      {
        "id": "1082519",
        "name": "Charlys",
        "position": "DM",
        "lastStatus": "not_included"
      },
      {
        "id": "1098501",
        "name": "Jurgen Peci",
        "position": "DM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "268429",
        "name": "Sandi Lovrić",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "395512",
        "name": "Antoine Bernede",
        "position": "CM",
        "lastStatus": "bench"
      },
      {
        "id": "261905",
        "name": "Suat Serdar",
        "position": "CM",
        "lastStatus": "injured"
      },
      {
        "id": "416386",
        "name": "Abdou Harroui",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "197471",
        "name": "Roberto Gagliardini",
        "position": "CM",
        "lastStatus": "absent"
      },
      {
        "id": "298635",
        "name": "Grigoris Kastanos",
        "position": "CM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "941869",
        "name": "Yellu Santiago",
        "position": "CM",
        "lastStatus": "not_included"
      },
      {
        "id": "170481",
        "name": "Jean-Daniel Akpa Akpro",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "748803",
        "name": "Luca Monticelli",
        "position": "CM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "937064",
        "name": "Luca Szimionaș",
        "position": "CM",
        "lastStatus": "bench"
      },
      {
        "id": "540333",
        "name": "Tomas Suslov",
        "position": "AM",
        "lastStatus": "starting"
      },
      {
        "id": "726526",
        "name": "Stefan Mitrović",
        "position": "LW",
        "lastStatus": "not_included"
      },
      {
        "id": "1005165",
        "name": "Giovane",
        "position": "CF",
        "lastStatus": "not_at_club"
      },
      {
        "id": "647280",
        "name": "Kieron Bowie",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "1018259",
        "name": "Gift Orban",
        "position": "CF",
        "lastStatus": "suspended"
      },
      {
        "id": "748382",
        "name": "Amin Sarr",
        "position": "CF",
        "lastStatus": "sub_in"
      },
      {
        "id": "651569",
        "name": "Daniel Mosquera",
        "position": "CF",
        "lastStatus": "injured"
      },
      {
        "id": "676411",
        "name": "Dailon Livramento",
        "position": "CF",
        "lastStatus": "not_included"
      },
      {
        "id": "979766",
        "name": "Mathis Lambourde",
        "position": "CF",
        "lastStatus": "not_included"
      },
      {
        "id": "1083069",
        "name": "Isaac",
        "position": "CF",
        "lastStatus": "bench"
      },
      {
        "id": "928037",
        "name": "Ioan Vermeșan",
        "position": "CF",
        "lastStatus": "sub_in"
      },
      {
        "id": "1111820",
        "name": "Junior Ajayi",
        "position": "CF",
        "lastStatus": "bench"
      }
    ]
  },
  {
    "clubId": "lazio",
    "club": "SS Lazio",
    "country": "Италия",
    "league": "Serie A",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/IT1/2025/lazio-rom.json",
    "scrapedAt": "2026-06-12T23:42:38.556138+00:00",
    "players": [
      {
        "id": "481675",
        "name": "Christos Mandas",
        "position": "GK",
        "lastStatus": "not_at_club"
      },
      {
        "id": "916430",
        "name": "Edoardo Motta",
        "position": "GK",
        "lastStatus": "injured"
      },
      {
        "id": "197929",
        "name": "Ivan Provedel",
        "position": "GK",
        "lastStatus": "injured"
      },
      {
        "id": "538079",
        "name": "Alessio Furlanetto",
        "position": "GK",
        "lastStatus": "starting"
      },
      {
        "id": "1255816",
        "name": "Nicolò Pannozzo",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "1320205",
        "name": "Giacomo Giacomone",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "618341",
        "name": "Mario Gila",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "644408",
        "name": "Oliver Provstgaard",
        "position": "CB",
        "lastStatus": "sub_in"
      },
      {
        "id": "197747",
        "name": "Alessio Romagnoli",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "126729",
        "name": "Patric",
        "position": "CB",
        "lastStatus": "bench"
      },
      {
        "id": "276896",
        "name": "Samuel Gigot",
        "position": "CB",
        "lastStatus": "bench"
      },
      {
        "id": "535955",
        "name": "Nuno Tavares",
        "position": "LB",
        "lastStatus": "absent"
      },
      {
        "id": "346567",
        "name": "Luca Pellegrini",
        "position": "LB",
        "lastStatus": "starting"
      },
      {
        "id": "239802",
        "name": "Adam Marusic",
        "position": "RB",
        "lastStatus": "starting"
      },
      {
        "id": "331401",
        "name": "Manuel Lazzari",
        "position": "RB",
        "lastStatus": "sub_in"
      },
      {
        "id": "200056",
        "name": "Elseid Hysaj",
        "position": "RB",
        "lastStatus": "bench"
      },
      {
        "id": "525704",
        "name": "Nicolò Rovella",
        "position": "DM",
        "lastStatus": "absent"
      },
      {
        "id": "982855",
        "name": "Reda Belahyane",
        "position": "DM",
        "lastStatus": "starting"
      },
      {
        "id": "199733",
        "name": "Danilo Cataldi",
        "position": "DM",
        "lastStatus": "injured"
      },
      {
        "id": "1056287",
        "name": "Pietro Pinelli",
        "position": "DM",
        "lastStatus": "not_included"
      },
      {
        "id": "465830",
        "name": "Mattéo Guendouzi",
        "position": "CM",
        "lastStatus": "not_included"
      },
      {
        "id": "470394",
        "name": "Kenneth Taylor",
        "position": "CM",
        "lastStatus": "absent"
      },
      {
        "id": "530742",
        "name": "Fisayo Dele-Bashiru",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "334835",
        "name": "Toma Bašić",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "143812",
        "name": "Matías Vecino",
        "position": "CM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "866255",
        "name": "Valerio Farcomeni",
        "position": "CM",
        "lastStatus": "bench"
      },
      {
        "id": "539134",
        "name": "Daniel Maldini",
        "position": "AM",
        "lastStatus": "sub_in"
      },
      {
        "id": "1018395",
        "name": "Adrian Przyborek",
        "position": "AM",
        "lastStatus": "sub_in"
      },
      {
        "id": "283735",
        "name": "Mattia Zaccagni",
        "position": "LW",
        "lastStatus": "injured"
      },
      {
        "id": "1026255",
        "name": "Saná Fernandes",
        "position": "LW",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "462823",
        "name": "Gustav Isaksen",
        "position": "RW",
        "lastStatus": "bench"
      },
      {
        "id": "457736",
        "name": "Tijjani Noslin",
        "position": "RW",
        "lastStatus": "starting"
      },
      {
        "id": "550106",
        "name": "Matteo Cancellieri",
        "position": "RW",
        "lastStatus": "starting"
      },
      {
        "id": "65278",
        "name": "Pedro",
        "position": "RW",
        "lastStatus": "starting"
      },
      {
        "id": "522784",
        "name": "Taty Castellanos",
        "position": "CF",
        "lastStatus": "not_at_club"
      },
      {
        "id": "846254",
        "name": "Petar Ratkov",
        "position": "CF",
        "lastStatus": "bench"
      },
      {
        "id": "626913",
        "name": "Boulaye Dia",
        "position": "CF",
        "lastStatus": "sub_in"
      },
      {
        "id": "976207",
        "name": "Federico Serra",
        "position": "CF",
        "lastStatus": "not_in_squad"
      }
    ]
  },
  {
    "clubId": "parma-calcio-1913",
    "club": "Parma Calcio 1913",
    "country": "Италия",
    "league": "Serie A",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/IT1/2025/parma-calcio-1913.json",
    "scrapedAt": "2026-06-12T23:44:33.028254+00:00",
    "players": [
      {
        "id": "432298",
        "name": "Zion Suzuki",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "528181",
        "name": "Edoardo Corvi",
        "position": "GK",
        "lastStatus": "starting"
      },
      {
        "id": "604207",
        "name": "Filippo Rinaldi",
        "position": "GK",
        "lastStatus": "injured"
      },
      {
        "id": "64399",
        "name": "Vicente Guaita",
        "position": "GK",
        "lastStatus": "not_included"
      },
      {
        "id": "979859",
        "name": "Gianluca Astaldi",
        "position": "GK",
        "lastStatus": "not_at_club"
      },
      {
        "id": "1188642",
        "name": "Gabriele Casentini",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1371019",
        "name": "Alessandro Mazzocchi",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "867137",
        "name": "Alessandro Circati",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "1159864",
        "name": "Mariano Troilo",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "673514",
        "name": "Abdoulaye Ndiaye",
        "position": "CB",
        "lastStatus": "sub_in"
      },
      {
        "id": "543727",
        "name": "Botond Balogh",
        "position": "CB",
        "lastStatus": "not_included"
      },
      {
        "id": "625202",
        "name": "Lautaro Valenti",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "1119655",
        "name": "Nicolas Trabucchi",
        "position": "CB",
        "lastStatus": "not_included"
      },
      {
        "id": "858677",
        "name": "Peter Amoran",
        "position": "CB",
        "lastStatus": "not_included"
      },
      {
        "id": "1082427",
        "name": "Bernardo Conde",
        "position": "CB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "1009616",
        "name": "Dominik Drobnic",
        "position": "CB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "661212",
        "name": "Mathias Løvik",
        "position": "LB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "445126",
        "name": "Emanuele Valeri",
        "position": "LB",
        "lastStatus": "starting"
      },
      {
        "id": "731491",
        "name": "Franco Carboni",
        "position": "LB",
        "lastStatus": "sub_in"
      },
      {
        "id": "932187",
        "name": "Sascha Britschgi",
        "position": "RB",
        "lastStatus": "starting"
      },
      {
        "id": "392956",
        "name": "Enrico Delprato",
        "position": "RB",
        "lastStatus": "bench"
      },
      {
        "id": "934974",
        "name": "Marlon Mena Martinez",
        "position": "RB",
        "lastStatus": "bench"
      },
      {
        "id": "707844",
        "name": "Mandela Keita",
        "position": "DM",
        "lastStatus": "starting"
      },
      {
        "id": "430280",
        "name": "Hans Nicolussi Caviglia",
        "position": "DM",
        "lastStatus": "starting"
      },
      {
        "id": "552472",
        "name": "Nahuel Estévez",
        "position": "DM",
        "lastStatus": "bench"
      },
      {
        "id": "466802",
        "name": "Adrián Bernabé",
        "position": "CM",
        "lastStatus": "injured"
      },
      {
        "id": "514888",
        "name": "Oliver Sørensen",
        "position": "CM",
        "lastStatus": "sub_in"
      },
      {
        "id": "1043646",
        "name": "Christian Ordóñez",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "999127",
        "name": "Benja Cremaschi",
        "position": "CM",
        "lastStatus": "injured"
      },
      {
        "id": "181768",
        "name": "Hernani",
        "position": "CM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "1087009",
        "name": "Abdou-Salam Konate",
        "position": "CM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "1054296",
        "name": "Edoardo Tigani",
        "position": "CM",
        "lastStatus": "bench"
      },
      {
        "id": "613393",
        "name": "Gaetano Oristanio",
        "position": "AM",
        "lastStatus": "injured"
      },
      {
        "id": "1085031",
        "name": "Elia Plicco",
        "position": "AM",
        "lastStatus": "bench"
      },
      {
        "id": "989001",
        "name": "Alessandro Ciardi",
        "position": "AM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "663237",
        "name": "Jacob Ondrejka",
        "position": "LW",
        "lastStatus": "injured"
      },
      {
        "id": "1028162",
        "name": "Antoine Joujou",
        "position": "LW",
        "lastStatus": "not_included"
      },
      {
        "id": "708186",
        "name": "Tjas Begic",
        "position": "LW",
        "lastStatus": "not_included"
      },
      {
        "id": "976446",
        "name": "Alessandro Cardinali",
        "position": "LW",
        "lastStatus": "sub_in"
      },
      {
        "id": "457673",
        "name": "Gabriel Strefezza",
        "position": "RW",
        "lastStatus": "injured"
      },
      {
        "id": "300532",
        "name": "Pontus Almqvist",
        "position": "RW",
        "lastStatus": "sub_in"
      },
      {
        "id": "856530",
        "name": "Mateo Pellegrino",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "454386",
        "name": "Adrian Benedyczak",
        "position": "CF",
        "lastStatus": "not_included"
      },
      {
        "id": "265078",
        "name": "Patrick Cutrone",
        "position": "CF",
        "lastStatus": "not_at_club"
      },
      {
        "id": "862606",
        "name": "Nesta Elphege",
        "position": "CF",
        "lastStatus": "injured"
      },
      {
        "id": "67556",
        "name": "Milan Djuric",
        "position": "CF",
        "lastStatus": "not_at_club"
      },
      {
        "id": "991459",
        "name": "Daniel Mikołajewski",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "806955",
        "name": "Dario Sits",
        "position": "CF",
        "lastStatus": "not_at_club"
      }
    ]
  },
  {
    "clubId": "napoli",
    "club": "SSC Napoli",
    "country": "Италия",
    "league": "Serie A",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/IT1/2025/ssc-neapel.json",
    "scrapedAt": "2026-06-12T23:37:41.982041+00:00",
    "players": [
      {
        "id": "257474",
        "name": "Vanja Milinković-Savić",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "240414",
        "name": "Alex Meret",
        "position": "GK",
        "lastStatus": "starting"
      },
      {
        "id": "250683",
        "name": "Nikita Contini",
        "position": "GK",
        "lastStatus": "sub_in"
      },
      {
        "id": "1195798",
        "name": "Mathias Ferrante",
        "position": "GK",
        "lastStatus": "not_at_club"
      },
      {
        "id": "1314016",
        "name": "David Spinelli",
        "position": "GK",
        "lastStatus": "not_at_club"
      },
      {
        "id": "386446",
        "name": "Alessandro Buongiorno",
        "position": "CB",
        "lastStatus": "injured"
      },
      {
        "id": "433984",
        "name": "Sam Beukema",
        "position": "CB",
        "lastStatus": "bench"
      },
      {
        "id": "257732",
        "name": "Amir Rrahmani",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "814446",
        "name": "Luca Marianucci",
        "position": "CB",
        "lastStatus": "not_included"
      },
      {
        "id": "121985",
        "name": "Juan Jesus",
        "position": "CB",
        "lastStatus": "sub_in"
      },
      {
        "id": "525299",
        "name": "Miguel Gutiérrez",
        "position": "LB",
        "lastStatus": "starting"
      },
      {
        "id": "376514",
        "name": "Mathías Olivera",
        "position": "LB",
        "lastStatus": "starting"
      },
      {
        "id": "118689",
        "name": "Leonardo Spinazzola",
        "position": "LB",
        "lastStatus": "injured"
      },
      {
        "id": "169880",
        "name": "Giovanni Di Lorenzo",
        "position": "RB",
        "lastStatus": "starting"
      },
      {
        "id": "397225",
        "name": "Alessandro Zanoli",
        "position": "RB",
        "lastStatus": "not_included"
      },
      {
        "id": "250153",
        "name": "Pasquale Mazzocchi",
        "position": "RB",
        "lastStatus": "sub_in"
      },
      {
        "id": "423744",
        "name": "Billy Gilmour",
        "position": "DM",
        "lastStatus": "sub_in"
      },
      {
        "id": "192735",
        "name": "Stanislav Lobotka",
        "position": "DM",
        "lastStatus": "starting"
      },
      {
        "id": "1132043",
        "name": "Vincenzo Prisco",
        "position": "DM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "315969",
        "name": "Scott McTominay",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "354361",
        "name": "Frank Anguissa",
        "position": "CM",
        "lastStatus": "bench"
      },
      {
        "id": "724178",
        "name": "Luis Hasa",
        "position": "CM",
        "lastStatus": "not_included"
      },
      {
        "id": "979361",
        "name": "Emmanuele De Chiara",
        "position": "CM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "820633",
        "name": "Coli Saco",
        "position": "CM",
        "lastStatus": "not_included"
      },
      {
        "id": "703245",
        "name": "Antonio Vergara",
        "position": "AM",
        "lastStatus": "bench"
      },
      {
        "id": "400489",
        "name": "Eljif Elmas",
        "position": "AM",
        "lastStatus": "starting"
      },
      {
        "id": "88755",
        "name": "Kevin De Bruyne",
        "position": "AM",
        "lastStatus": "sub_in"
      },
      {
        "id": "830365",
        "name": "Alisson Santos",
        "position": "LW",
        "lastStatus": "starting"
      },
      {
        "id": "339332",
        "name": "Noa Lang",
        "position": "LW",
        "lastStatus": "not_included"
      },
      {
        "id": "469822",
        "name": "David Neres",
        "position": "RW",
        "lastStatus": "injured"
      },
      {
        "id": "165895",
        "name": "Matteo Politano",
        "position": "RW",
        "lastStatus": "starting"
      },
      {
        "id": "610442",
        "name": "Rasmus Højlund",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "572265",
        "name": "Lorenzo Lucca",
        "position": "CF",
        "lastStatus": "not_included"
      },
      {
        "id": "1005165",
        "name": "Giovane",
        "position": "CF",
        "lastStatus": "bench"
      },
      {
        "id": "96341",
        "name": "Romelu Lukaku",
        "position": "CF",
        "lastStatus": "injured"
      },
      {
        "id": "707295",
        "name": "Giuseppe Ambrosino",
        "position": "CF",
        "lastStatus": "not_included"
      },
      {
        "id": "521407",
        "name": "Walid Cheddira",
        "position": "CF",
        "lastStatus": "not_at_club"
      }
    ]
  },
  {
    "clubId": "udinese-calcio",
    "club": "Udinese Calcio",
    "country": "Италия",
    "league": "Serie A",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/IT1/2025/udinese-calcio.json",
    "scrapedAt": "2026-06-12T23:45:14.899933+00:00",
    "players": [
      {
        "id": "340353",
        "name": "Maduka Okoye",
        "position": "GK",
        "lastStatus": "starting"
      },
      {
        "id": "568617",
        "name": "Răzvan Sava",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "956588",
        "name": "Alessandro Nunziante",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "27807",
        "name": "Daniele Padelli",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "1234783",
        "name": "Gioele Venuti",
        "position": "GK",
        "lastStatus": "not_at_club"
      },
      {
        "id": "463665",
        "name": "Oumar Solet",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "698259",
        "name": "Thomas Kristensen",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "632831",
        "name": "Nicolò Bertola",
        "position": "CB",
        "lastStatus": "sub_in"
      },
      {
        "id": "1058354",
        "name": "Matteo Palma",
        "position": "CB",
        "lastStatus": "not_included"
      },
      {
        "id": "1300966",
        "name": "Branimir Mlacic",
        "position": "CB",
        "lastStatus": "sub_in"
      },
      {
        "id": "906160",
        "name": "Saba Goglichidze",
        "position": "CB",
        "lastStatus": "not_included"
      },
      {
        "id": "81512",
        "name": "Christian Kabasele",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "633530",
        "name": "Jordan Zemura",
        "position": "LB",
        "lastStatus": "starting"
      },
      {
        "id": "290017",
        "name": "Hassane Kamara",
        "position": "LB",
        "lastStatus": "absent"
      },
      {
        "id": "397225",
        "name": "Alessandro Zanoli",
        "position": "RB",
        "lastStatus": "injured"
      },
      {
        "id": "272812",
        "name": "Kingsley Ehizibue",
        "position": "RB",
        "lastStatus": "starting"
      },
      {
        "id": "222855",
        "name": "Jesper Karlström",
        "position": "DM",
        "lastStatus": "starting"
      },
      {
        "id": "1210116",
        "name": "Abdoulaye Camara",
        "position": "DM",
        "lastStatus": "bench"
      },
      {
        "id": "855308",
        "name": "Arthur Atta",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "361068",
        "name": "Jurgen Ekkelenkamp",
        "position": "CM",
        "lastStatus": "injured"
      },
      {
        "id": "924857",
        "name": "Lennon Miller",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "377243",
        "name": "Jakub Piotrowski",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "268429",
        "name": "Sandi Lovrić",
        "position": "CM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "524010",
        "name": "Oier Zarraga",
        "position": "CM",
        "lastStatus": "sub_in"
      },
      {
        "id": "1118347",
        "name": "Juan Arizala",
        "position": "LM",
        "lastStatus": "injured"
      },
      {
        "id": "1009633",
        "name": "David Pejičić",
        "position": "AM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "671799",
        "name": "Rui Modesto",
        "position": "RW",
        "lastStatus": "not_included"
      },
      {
        "id": "392085",
        "name": "Nicolò Zaniolo",
        "position": "SS",
        "lastStatus": "injured"
      },
      {
        "id": "412660",
        "name": "Keinan Davis",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "1178488",
        "name": "Idrissa Gueye",
        "position": "CF",
        "lastStatus": "sub_in"
      },
      {
        "id": "741292",
        "name": "Iker Bravo",
        "position": "CF",
        "lastStatus": "not_at_club"
      },
      {
        "id": "267160",
        "name": "Adam Buksa",
        "position": "CF",
        "lastStatus": "sub_in"
      },
      {
        "id": "375877",
        "name": "Vakoun Bayo",
        "position": "CF",
        "lastStatus": "bench"
      },
      {
        "id": "1078784",
        "name": "Giulio Vinciati",
        "position": "CF",
        "lastStatus": "not_in_squad"
      }
    ]
  },
  {
    "clubId": "us-cremonese",
    "club": "US Cremonese",
    "country": "Италия",
    "league": "Serie A",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/IT1/2025/us-cremonese.json",
    "scrapedAt": "2026-06-12T23:51:34.229812+00:00",
    "players": [
      {
        "id": "256339",
        "name": "Emil Audero",
        "position": "GK",
        "lastStatus": "starting"
      },
      {
        "id": "85528",
        "name": "Marco Silvestri",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "815563",
        "name": "Lapo Nava",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "1078792",
        "name": "Marco Cassin",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1079997",
        "name": "Adrián Malovec",
        "position": "GK",
        "lastStatus": "not_at_club"
      },
      {
        "id": "631007",
        "name": "Filippo Terracciano",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "666974",
        "name": "Mikayil Faye",
        "position": "CB",
        "lastStatus": "injured"
      },
      {
        "id": "278531",
        "name": "Sebastiano Luperto",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "351955",
        "name": "Federico Baschirotto",
        "position": "CB",
        "lastStatus": "injured"
      },
      {
        "id": "160986",
        "name": "Matteo Bianchetti",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "603675",
        "name": "Francesco Folino",
        "position": "CB",
        "lastStatus": "bench"
      },
      {
        "id": "163639",
        "name": "Federico Ceccherini",
        "position": "CB",
        "lastStatus": "bench"
      },
      {
        "id": "1103698",
        "name": "Davide Pavesi",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1241862",
        "name": "Tommaso Vigilati",
        "position": "CB",
        "lastStatus": "bench"
      },
      {
        "id": "336960",
        "name": "Giuseppe Pezzella",
        "position": "LB",
        "lastStatus": "starting"
      },
      {
        "id": "340707",
        "name": "Leonardo Sernicola",
        "position": "LB",
        "lastStatus": "not_included"
      },
      {
        "id": "569939",
        "name": "Tommaso Barbieri",
        "position": "RB",
        "lastStatus": "sub_in"
      },
      {
        "id": "708086",
        "name": "Romano Floriani Mussolini",
        "position": "RB",
        "lastStatus": "sub_in"
      },
      {
        "id": "197473",
        "name": "Alberto Grassi",
        "position": "DM",
        "lastStatus": "starting"
      },
      {
        "id": "195335",
        "name": "Michele Castagnetti",
        "position": "DM",
        "lastStatus": "not_included"
      },
      {
        "id": "897651",
        "name": "Simone Lottici Tessadri",
        "position": "DM",
        "lastStatus": "sub_in"
      },
      {
        "id": "659516",
        "name": "Warren Bondo",
        "position": "CM",
        "lastStatus": "injured"
      },
      {
        "id": "555820",
        "name": "Martín Payero",
        "position": "CM",
        "lastStatus": "injured"
      },
      {
        "id": "258827",
        "name": "Jari Vandeputte",
        "position": "CM",
        "lastStatus": "sub_in"
      },
      {
        "id": "226524",
        "name": "Morten Thorsby",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "434551",
        "name": "Michele Collocolo",
        "position": "CM",
        "lastStatus": "sub_in"
      },
      {
        "id": "324377",
        "name": "Youssef Maleh",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "894456",
        "name": "Dachi Lordkipanidze",
        "position": "CM",
        "lastStatus": "not_included"
      },
      {
        "id": "167741",
        "name": "Mattia Valoti",
        "position": "CM",
        "lastStatus": "not_included"
      },
      {
        "id": "433584",
        "name": "Alessio Zerbin",
        "position": "RM",
        "lastStatus": "starting"
      },
      {
        "id": "76163",
        "name": "Franco Vázquez",
        "position": "AM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "568005",
        "name": "Jeremy Sarmiento",
        "position": "LW",
        "lastStatus": "not_at_club"
      },
      {
        "id": "406042",
        "name": "Dennis Johnsen",
        "position": "LW",
        "lastStatus": "not_included"
      },
      {
        "id": "819369",
        "name": "Adrian Lickūnas",
        "position": "RW",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "599663",
        "name": "Faris Moumbagna",
        "position": "CF",
        "lastStatus": "injured"
      },
      {
        "id": "241527",
        "name": "Federico Bonazzoli",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "234523",
        "name": "Antonio Sanabria",
        "position": "CF",
        "lastStatus": "injured"
      },
      {
        "id": "413605",
        "name": "David Okereke",
        "position": "CF",
        "lastStatus": "bench"
      },
      {
        "id": "375816",
        "name": "Manuel De Luca",
        "position": "CF",
        "lastStatus": "not_included"
      },
      {
        "id": "67556",
        "name": "Milan Djuric",
        "position": "CF",
        "lastStatus": "bench"
      },
      {
        "id": "197838",
        "name": "Jamie Vardy",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "1086474",
        "name": "Nouroudine Faye",
        "position": "CF",
        "lastStatus": "not_in_squad"
      }
    ]
  },
  {
    "clubId": "us-lecce",
    "club": "US Lecce",
    "country": "Италия",
    "league": "Serie A",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/IT1/2025/us-lecce.json",
    "scrapedAt": "2026-06-12T23:49:16.170580+00:00",
    "players": [
      {
        "id": "238537",
        "name": "Wladimiro Falcone",
        "position": "GK",
        "lastStatus": "starting"
      },
      {
        "id": "336307",
        "name": "Christian Früchtl",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "712911",
        "name": "Jasper Samooja",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "1084756",
        "name": "Plamen Penev",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1182224",
        "name": "Daniele Bleve",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1112449",
        "name": "Tiago Gabriel",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "604113",
        "name": "Jamil Siebert",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "836441",
        "name": "Gaspar",
        "position": "CB",
        "lastStatus": "sub_in"
      },
      {
        "id": "805886",
        "name": "Gaby Jean",
        "position": "CB",
        "lastStatus": "sub_in"
      },
      {
        "id": "1175410",
        "name": "Matías Pérez",
        "position": "CB",
        "lastStatus": "bench"
      },
      {
        "id": "392516",
        "name": "Antonino Gallo",
        "position": "LB",
        "lastStatus": "starting"
      },
      {
        "id": "433329",
        "name": "Corrie Ndaba",
        "position": "LB",
        "lastStatus": "bench"
      },
      {
        "id": "728485",
        "name": "Danilo Veiga",
        "position": "RB",
        "lastStatus": "starting"
      },
      {
        "id": "1057563",
        "name": "Christ-Owen Kouassi",
        "position": "RB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "980575",
        "name": "Oumar Ngom",
        "position": "DM",
        "lastStatus": "starting"
      },
      {
        "id": "442703",
        "name": "Ylber Ramadani",
        "position": "DM",
        "lastStatus": "starting"
      },
      {
        "id": "642002",
        "name": "Balthazar Pierret",
        "position": "DM",
        "lastStatus": "not_included"
      },
      {
        "id": "644613",
        "name": "Sadik Fofana",
        "position": "DM",
        "lastStatus": "bench"
      },
      {
        "id": "866607",
        "name": "Niko Kovač",
        "position": "DM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "748679",
        "name": "Olaf Gorter",
        "position": "DM",
        "lastStatus": "bench"
      },
      {
        "id": "583046",
        "name": "Medon Berisha",
        "position": "CM",
        "lastStatus": "injured"
      },
      {
        "id": "911328",
        "name": "Mohamed Kaba",
        "position": "CM",
        "lastStatus": "not_included"
      },
      {
        "id": "386552",
        "name": "Lassana Coulibaly",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "488996",
        "name": "Thórir Jóhann Helgason",
        "position": "CM",
        "lastStatus": "bench"
      },
      {
        "id": "324377",
        "name": "Youssef Maleh",
        "position": "CM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "418571",
        "name": "Hamza Rafia",
        "position": "CM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "582664",
        "name": "Álex Sala",
        "position": "CM",
        "lastStatus": "bench"
      },
      {
        "id": "780548",
        "name": "Omri Gandelman",
        "position": "AM",
        "lastStatus": "sub_in"
      },
      {
        "id": "555106",
        "name": "Filip Marchwinski",
        "position": "AM",
        "lastStatus": "bench"
      },
      {
        "id": "545538",
        "name": "Lameck Banda",
        "position": "LW",
        "lastStatus": "starting"
      },
      {
        "id": "386455",
        "name": "Riccardo Sottil",
        "position": "LW",
        "lastStatus": "injured"
      },
      {
        "id": "339816",
        "name": "Tete Morente",
        "position": "LW",
        "lastStatus": "not_at_club"
      },
      {
        "id": "674806",
        "name": "Santiago Pierotti",
        "position": "RW",
        "lastStatus": "starting"
      },
      {
        "id": "649490",
        "name": "Konan N’Dri",
        "position": "RW",
        "lastStatus": "sub_in"
      },
      {
        "id": "1058368",
        "name": "Francesco Camarda",
        "position": "CF",
        "lastStatus": "bench"
      },
      {
        "id": "595650",
        "name": "Nikola Stulic",
        "position": "CF",
        "lastStatus": "sub_in"
      },
      {
        "id": "521407",
        "name": "Walid Cheddira",
        "position": "CF",
        "lastStatus": "starting"
      }
    ]
  },
  {
    "clubId": "us-sassuolo",
    "club": "US Sassuolo",
    "country": "Италия",
    "league": "Serie A",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/IT1/2025/us-sassuolo.json",
    "scrapedAt": "2026-06-12T23:43:31.402681+00:00",
    "players": [
      {
        "id": "371021",
        "name": "Arijanet Murić",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "543666",
        "name": "Stefano Turati",
        "position": "GK",
        "lastStatus": "starting"
      },
      {
        "id": "659648",
        "name": "Gioele Zacchi",
        "position": "GK",
        "lastStatus": "sub_in"
      },
      {
        "id": "323255",
        "name": "Giacomo Satalino",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "1168024",
        "name": "Lorenzo Nyarko",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "679423",
        "name": "Tarik Muharemović",
        "position": "CB",
        "lastStatus": "bench"
      },
      {
        "id": "546926",
        "name": "Jay Idzes",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "520530",
        "name": "Fali Candé",
        "position": "CB",
        "lastStatus": "injured"
      },
      {
        "id": "1082581",
        "name": "Pedro Felipe",
        "position": "CB",
        "lastStatus": "sub_in"
      },
      {
        "id": "406632",
        "name": "Cas Odenthal",
        "position": "CB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "256678",
        "name": "Filippo Romagna",
        "position": "CB",
        "lastStatus": "injured"
      },
      {
        "id": "984373",
        "name": "Tommaso Macchioni",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "1019116",
        "name": "Giorgio Vezzosi",
        "position": "CB",
        "lastStatus": "bench"
      },
      {
        "id": "567129",
        "name": "Josh Doig",
        "position": "LB",
        "lastStatus": "bench"
      },
      {
        "id": "192616",
        "name": "Ulisses Garcia",
        "position": "LB",
        "lastStatus": "starting"
      },
      {
        "id": "691825",
        "name": "Edoardo Pieragnolo",
        "position": "LB",
        "lastStatus": "injured"
      },
      {
        "id": "938673",
        "name": "Luca Barani",
        "position": "LB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "345458",
        "name": "Sebastian Walukiewicz",
        "position": "RB",
        "lastStatus": "injured"
      },
      {
        "id": "592975",
        "name": "Woyo Coulibaly",
        "position": "RB",
        "lastStatus": "starting"
      },
      {
        "id": "650993",
        "name": "Filippo Missori",
        "position": "RB",
        "lastStatus": "not_included"
      },
      {
        "id": "655525",
        "name": "Yeferson Paz",
        "position": "RB",
        "lastStatus": "not_included"
      },
      {
        "id": "724106",
        "name": "Luca Lipani",
        "position": "DM",
        "lastStatus": "starting"
      },
      {
        "id": "441515",
        "name": "Daniel Boloca",
        "position": "DM",
        "lastStatus": "injured"
      },
      {
        "id": "74683",
        "name": "Nemanja Matić",
        "position": "DM",
        "lastStatus": "sub_in"
      },
      {
        "id": "390163",
        "name": "Andrea Ghion",
        "position": "DM",
        "lastStatus": "not_included"
      },
      {
        "id": "1206718",
        "name": "Jeffrey Baffoh",
        "position": "DM",
        "lastStatus": "bench"
      },
      {
        "id": "921655",
        "name": "Ismaël Koné",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "564785",
        "name": "Kristian Thorstvedt",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "503881",
        "name": "Aster Vranckx",
        "position": "CM",
        "lastStatus": "injured"
      },
      {
        "id": "700053",
        "name": "Edoardo Iannoni",
        "position": "CM",
        "lastStatus": "bench"
      },
      {
        "id": "1057574",
        "name": "Christian Frangella",
        "position": "CM",
        "lastStatus": "bench"
      },
      {
        "id": "746891",
        "name": "Cristian Volpato",
        "position": "AM",
        "lastStatus": "sub_in"
      },
      {
        "id": "1170286",
        "name": "Darryl Bakola",
        "position": "AM",
        "lastStatus": "injured"
      },
      {
        "id": "579930",
        "name": "Armand Laurienté",
        "position": "LW",
        "lastStatus": "starting"
      },
      {
        "id": "749552",
        "name": "Alieu Fadera",
        "position": "LW",
        "lastStatus": "bench"
      },
      {
        "id": "177843",
        "name": "Domenico Berardi",
        "position": "RW",
        "lastStatus": "starting"
      },
      {
        "id": "372720",
        "name": "Nicholas Pierini",
        "position": "RW",
        "lastStatus": "not_included"
      },
      {
        "id": "315865",
        "name": "Andrea Pinamonti",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "354814",
        "name": "M'Bala Nzola",
        "position": "CF",
        "lastStatus": "sub_in"
      },
      {
        "id": "457422",
        "name": "Samuele Mulattieri",
        "position": "CF",
        "lastStatus": "not_at_club"
      },
      {
        "id": "521407",
        "name": "Walid Cheddira",
        "position": "CF",
        "lastStatus": "not_at_club"
      },
      {
        "id": "812625",
        "name": "Agustín Álvarez",
        "position": "CF",
        "lastStatus": "not_at_club"
      },
      {
        "id": "600936",
        "name": "Luca Moro",
        "position": "CF",
        "lastStatus": "bench"
      },
      {
        "id": "655207",
        "name": "Laurs Skjellerup",
        "position": "CF",
        "lastStatus": "not_included"
      }
    ]
  },
  {
    "clubId": "1-fc-heidenheim-1846",
    "club": "1.FC Heidenheim 1846",
    "country": "Германия",
    "league": "Bundesliga",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/L1/2025/1-fc-heidenheim-1846.json",
    "scrapedAt": "2026-06-12T23:11:39.573381+00:00",
    "players": [
      {
        "id": "448705",
        "name": "Diant Ramaj",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "806948",
        "name": "Frank Feller",
        "position": "GK",
        "lastStatus": "starting"
      },
      {
        "id": "43824",
        "name": "Kevin Müller",
        "position": "GK",
        "lastStatus": "not_at_club"
      },
      {
        "id": "519035",
        "name": "Paul Tschernuth",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "133731",
        "name": "Patrick Mainka",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "337092",
        "name": "Tim Siersleben",
        "position": "CB",
        "lastStatus": "bench"
      },
      {
        "id": "227084",
        "name": "Benedikt Gimber",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "485747",
        "name": "Thomas Keller",
        "position": "CB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "921431",
        "name": "Adam Kölle",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "829838",
        "name": "Hennes Behrens",
        "position": "LB",
        "lastStatus": "starting"
      },
      {
        "id": "192169",
        "name": "Jonas Föhrenbach",
        "position": "LB",
        "lastStatus": "starting"
      },
      {
        "id": "107219",
        "name": "Leart Paçarada",
        "position": "LB",
        "lastStatus": "injured"
      },
      {
        "id": "507345",
        "name": "Leonidas Stergiou",
        "position": "RB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "388294",
        "name": "Omar Traoré",
        "position": "RB",
        "lastStatus": "sub_in"
      },
      {
        "id": "117478",
        "name": "Marnon Busch",
        "position": "RB",
        "lastStatus": "starting"
      },
      {
        "id": "251302",
        "name": "Niklas Dorsch",
        "position": "DM",
        "lastStatus": "starting"
      },
      {
        "id": "530173",
        "name": "Julian Niehues",
        "position": "DM",
        "lastStatus": "bench"
      },
      {
        "id": "581357",
        "name": "Jan Schöppner",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "809498",
        "name": "Luca Kerber",
        "position": "CM",
        "lastStatus": "bench"
      },
      {
        "id": "1052350",
        "name": "Nick Rothweiler",
        "position": "CM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "804219",
        "name": "Léo Scienza",
        "position": "AM",
        "lastStatus": "not_included"
      },
      {
        "id": "744728",
        "name": "Arijon Ibrahimovic",
        "position": "AM",
        "lastStatus": "starting"
      },
      {
        "id": "273669",
        "name": "Adrian Beck",
        "position": "AM",
        "lastStatus": "sub_in"
      },
      {
        "id": "283497",
        "name": "Mathias Honsak",
        "position": "LW",
        "lastStatus": "sub_in"
      },
      {
        "id": "1153628",
        "name": "Yannik Wagner",
        "position": "LW",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "645774",
        "name": "Eren Dinkçi",
        "position": "RW",
        "lastStatus": "starting"
      },
      {
        "id": "530298",
        "name": "Christian Conteh",
        "position": "RW",
        "lastStatus": "sub_in"
      },
      {
        "id": "307183",
        "name": "Sirlord Conteh",
        "position": "RW",
        "lastStatus": "injured"
      },
      {
        "id": "1153630",
        "name": "Tobias Weigel",
        "position": "RW",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "471055",
        "name": "Marvin Pieringer",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "545332",
        "name": "Mikkel Kaufmann",
        "position": "CF",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "187097",
        "name": "Budu Zivzivadze",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "394033",
        "name": "Stefan Schimmer",
        "position": "CF",
        "lastStatus": "sub_in"
      }
    ]
  },
  {
    "clubId": "1-fc-koln",
    "club": "1.FC Köln",
    "country": "Германия",
    "league": "Bundesliga",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/L1/2025/1-fc-koln.json",
    "scrapedAt": "2026-06-12T23:09:30.560033+00:00",
    "players": [
      {
        "id": "160929",
        "name": "Marvin Schwäbe",
        "position": "GK",
        "lastStatus": "starting"
      },
      {
        "id": "21327",
        "name": "Ron-Robert Zieler",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "227089",
        "name": "Matthias Köbbing",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "942497",
        "name": "Jahmai Simpson-Pusey",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "640556",
        "name": "Rav van den Berg",
        "position": "CB",
        "lastStatus": "bench"
      },
      {
        "id": "615350",
        "name": "Cenk Özkacar",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "322517",
        "name": "Joël Schmied",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "236981",
        "name": "Timo Hübers",
        "position": "CB",
        "lastStatus": "injured"
      },
      {
        "id": "110036",
        "name": "Dominique Heintz",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "623773",
        "name": "Kristoffer Lund",
        "position": "LB",
        "lastStatus": "starting"
      },
      {
        "id": "592387",
        "name": "Sebastian Sebulonsen",
        "position": "RB",
        "lastStatus": "starting"
      },
      {
        "id": "393745",
        "name": "Jusuf Gazibegovic",
        "position": "RB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "974581",
        "name": "Cenny Neumann",
        "position": "RB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "1162323",
        "name": "David Fürst",
        "position": "RB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "597000",
        "name": "Eric Martel",
        "position": "DM",
        "lastStatus": "starting"
      },
      {
        "id": "405687",
        "name": "Tom Krauß",
        "position": "DM",
        "lastStatus": "injured"
      },
      {
        "id": "579565",
        "name": "Ísak Jóhannesson",
        "position": "CM",
        "lastStatus": "sub_in"
      },
      {
        "id": "1009441",
        "name": "Felipe Chávez",
        "position": "CM",
        "lastStatus": "bench"
      },
      {
        "id": "678479",
        "name": "Denis Huseinbasic",
        "position": "CM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "340166",
        "name": "Alessio Castro-Montes",
        "position": "RM",
        "lastStatus": "starting"
      },
      {
        "id": "106270",
        "name": "Florian Kainz",
        "position": "AM",
        "lastStatus": "sub_in"
      },
      {
        "id": "1168219",
        "name": "Said El Mala",
        "position": "LW",
        "lastStatus": "starting"
      },
      {
        "id": "407098",
        "name": "Jakub Kaminski",
        "position": "LW",
        "lastStatus": "starting"
      },
      {
        "id": "335103",
        "name": "Linton Maina",
        "position": "LW",
        "lastStatus": "sub_in"
      },
      {
        "id": "116088",
        "name": "Marius Bülter",
        "position": "LW",
        "lastStatus": "starting"
      },
      {
        "id": "472249",
        "name": "Jan Thielmann",
        "position": "RW",
        "lastStatus": "sub_in"
      },
      {
        "id": "944331",
        "name": "Youssoupha Niang",
        "position": "RW",
        "lastStatus": "sub_in"
      },
      {
        "id": "416380",
        "name": "Ragnar Ache",
        "position": "CF",
        "lastStatus": "injured"
      },
      {
        "id": "196095",
        "name": "Luca Waldschmidt",
        "position": "CF",
        "lastStatus": "bench"
      },
      {
        "id": "1118293",
        "name": "Fynn Schenten",
        "position": "CF",
        "lastStatus": "not_at_club"
      }
    ]
  },
  {
    "clubId": "1-fc-union-berlin",
    "club": "1.FC Union Berlin",
    "country": "Германия",
    "league": "Bundesliga",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/L1/2025/1-fc-union-berlin.json",
    "scrapedAt": "2026-06-12T23:11:02.561183+00:00",
    "players": [
      {
        "id": "107775",
        "name": "Frederik Rönnow",
        "position": "GK",
        "lastStatus": "injured"
      },
      {
        "id": "386685",
        "name": "Matheo Raab",
        "position": "GK",
        "lastStatus": "injured"
      },
      {
        "id": "161057",
        "name": "Carl Klaus",
        "position": "GK",
        "lastStatus": "starting"
      },
      {
        "id": "954082",
        "name": "Tom Wisbereit",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "597432",
        "name": "Leopold Querfeld",
        "position": "CB",
        "lastStatus": "sub_in"
      },
      {
        "id": "387047",
        "name": "Danilho Doekhi",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "357156",
        "name": "Diogo Leite",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "371141",
        "name": "Stanley Nsoki",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "995520",
        "name": "Oluwaseun Ogbemudia",
        "position": "CB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "798043",
        "name": "Tom Rothe",
        "position": "LB",
        "lastStatus": "starting"
      },
      {
        "id": "391780",
        "name": "Derrick Köhn",
        "position": "LB",
        "lastStatus": "absent"
      },
      {
        "id": "1027870",
        "name": "Andrik Markgraf",
        "position": "LB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "362977",
        "name": "Josip Juranovic",
        "position": "RB",
        "lastStatus": "sub_in"
      },
      {
        "id": "75921",
        "name": "Christopher Trimmel",
        "position": "RB",
        "lastStatus": "starting"
      },
      {
        "id": "692737",
        "name": "Aljoscha Kemlein",
        "position": "DM",
        "lastStatus": "starting"
      },
      {
        "id": "124410",
        "name": "Rani Khedira",
        "position": "DM",
        "lastStatus": "injured"
      },
      {
        "id": "454863",
        "name": "András Schäfer",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "337333",
        "name": "Alex Král",
        "position": "CM",
        "lastStatus": "bench"
      },
      {
        "id": "177779",
        "name": "Janik Haberer",
        "position": "CM",
        "lastStatus": "bench"
      },
      {
        "id": "270393",
        "name": "Robert Skov",
        "position": "LM",
        "lastStatus": "bench"
      },
      {
        "id": "297583",
        "name": "Woo-yeong Jeong",
        "position": "AM",
        "lastStatus": "sub_in"
      },
      {
        "id": "519872",
        "name": "Livan Burcu",
        "position": "LW",
        "lastStatus": "starting"
      },
      {
        "id": "1378338",
        "name": "Linus Güther",
        "position": "LW",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "745075",
        "name": "David Preu",
        "position": "LW",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1035765",
        "name": "Ilyas Ansah",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "583699",
        "name": "Andrej Ilic",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "341317",
        "name": "Oliver Burke",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "838236",
        "name": "Marin Ljubicic",
        "position": "CF",
        "lastStatus": "not_at_club"
      },
      {
        "id": "287920",
        "name": "Tim Skarke",
        "position": "CF",
        "lastStatus": "sub_in"
      },
      {
        "id": "1045446",
        "name": "Dmytro Bogdanov",
        "position": "CF",
        "lastStatus": "sub_in"
      }
    ]
  },
  {
    "clubId": "1-fsv-mainz-05",
    "club": "1.FSV Mainz 05",
    "country": "Германия",
    "league": "Bundesliga",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/L1/2025/1-fsv-mainz-05.json",
    "scrapedAt": "2026-06-12T23:09:04.500456+00:00",
    "players": [
      {
        "id": "160963",
        "name": "Robin Zentner",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "490609",
        "name": "Lasse Rieß",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "90317",
        "name": "Daniel Batz",
        "position": "GK",
        "lastStatus": "starting"
      },
      {
        "id": "1073748",
        "name": "Kacper Potulski",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "223974",
        "name": "Stefan Posch",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "370683",
        "name": "Andreas Hanche-Olsen",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "118847",
        "name": "Dominik Kohr",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "85906",
        "name": "Danny da Costa",
        "position": "CB",
        "lastStatus": "sub_in"
      },
      {
        "id": "334207",
        "name": "Maxim Leitsch",
        "position": "CB",
        "lastStatus": "injured"
      },
      {
        "id": "82350",
        "name": "Stefan Bell",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "805123",
        "name": "Konstantin Schopp",
        "position": "CB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "127573",
        "name": "Phillipp Mwene",
        "position": "LB",
        "lastStatus": "starting"
      },
      {
        "id": "453016",
        "name": "Anthony Caci",
        "position": "RB",
        "lastStatus": "sub_in"
      },
      {
        "id": "168989",
        "name": "Silvan Widmer",
        "position": "RB",
        "lastStatus": "starting"
      },
      {
        "id": "643574",
        "name": "Kaishu Sano",
        "position": "DM",
        "lastStatus": "starting"
      },
      {
        "id": "392710",
        "name": "Lennard Maloney",
        "position": "DM",
        "lastStatus": "sub_in"
      },
      {
        "id": "733371",
        "name": "Sota Kawasaki",
        "position": "DM",
        "lastStatus": "bench"
      },
      {
        "id": "232454",
        "name": "Nadiem Amiri",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "906969",
        "name": "Daniel Gleiber",
        "position": "CM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "601143",
        "name": "Nikolas Veratschnig",
        "position": "RM",
        "lastStatus": "bench"
      },
      {
        "id": "503160",
        "name": "Paul Nebel",
        "position": "AM",
        "lastStatus": "starting"
      },
      {
        "id": "314398",
        "name": "Jae-sung Lee",
        "position": "AM",
        "lastStatus": "sub_in"
      },
      {
        "id": "658116",
        "name": "Ben Bobzien",
        "position": "LW",
        "lastStatus": "not_at_club"
      },
      {
        "id": "188888",
        "name": "Sheraldo Becker",
        "position": "LW",
        "lastStatus": "starting"
      },
      {
        "id": "324811",
        "name": "Arnaud Nordin",
        "position": "RW",
        "lastStatus": "not_at_club"
      },
      {
        "id": "612826",
        "name": "Silas",
        "position": "RW",
        "lastStatus": "injured"
      },
      {
        "id": "569033",
        "name": "Armindo Sieb",
        "position": "SS",
        "lastStatus": "bench"
      },
      {
        "id": "453870",
        "name": "Benedict Hollerbach",
        "position": "CF",
        "lastStatus": "injured"
      },
      {
        "id": "796213",
        "name": "Nelson Weiper",
        "position": "CF",
        "lastStatus": "sub_in"
      },
      {
        "id": "288340",
        "name": "Phillip Tietz",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "610400",
        "name": "William Bøving",
        "position": "CF",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "445606",
        "name": "Fabio Moreno Fell",
        "position": "CF",
        "lastStatus": "not_at_club"
      }
    ]
  },
  {
    "clubId": "leverkusen",
    "club": "Bayer 04 Leverkusen",
    "country": "Германия",
    "league": "Bundesliga",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/L1/2025/bayer-04-leverkusen.json",
    "scrapedAt": "2026-06-12T23:02:03.563179+00:00",
    "players": [
      {
        "id": "125714",
        "name": "Mark Flekken",
        "position": "GK",
        "lastStatus": "starting"
      },
      {
        "id": "247915",
        "name": "Jonas Omlin",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "81173",
        "name": "Janis Blaswich",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "85543",
        "name": "Niklas Lomb",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "659813",
        "name": "Piero Hincapié",
        "position": "CB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "632349",
        "name": "Jarell Quansah",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "564545",
        "name": "Edmond Tapsoba",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "730581",
        "name": "Loïc Badé",
        "position": "CB",
        "lastStatus": "bench"
      },
      {
        "id": "919515",
        "name": "Jeanuël Belocian",
        "position": "CB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "1077670",
        "name": "Axel Tape",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "696164",
        "name": "Tim Oermann",
        "position": "CB",
        "lastStatus": "bench"
      },
      {
        "id": "1058353",
        "name": "Andrea Natali",
        "position": "CB",
        "lastStatus": "not_included"
      },
      {
        "id": "193082",
        "name": "Alejandro Grimaldo",
        "position": "LB",
        "lastStatus": "starting"
      },
      {
        "id": "977464",
        "name": "Arthur",
        "position": "RB",
        "lastStatus": "sub_in"
      },
      {
        "id": "221316",
        "name": "Lucas Vázquez",
        "position": "RB",
        "lastStatus": "sub_in"
      },
      {
        "id": "664708",
        "name": "Equi Fernández",
        "position": "DM",
        "lastStatus": "bench"
      },
      {
        "id": "159088",
        "name": "Robert Andrich",
        "position": "DM",
        "lastStatus": "starting"
      },
      {
        "id": "401578",
        "name": "Exequiel Palacios",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "261504",
        "name": "Aleix García",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "905011",
        "name": "Ibrahim Maza",
        "position": "AM",
        "lastStatus": "starting"
      },
      {
        "id": "467437",
        "name": "Malik Tillman",
        "position": "AM",
        "lastStatus": "starting"
      },
      {
        "id": "994536",
        "name": "Claudio Echeverri",
        "position": "AM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "1131924",
        "name": "Jeremiah Mensah",
        "position": "AM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "7161",
        "name": "Jonas Hofmann",
        "position": "AM",
        "lastStatus": "sub_in"
      },
      {
        "id": "810895",
        "name": "Eliesse Ben Seghir",
        "position": "LW",
        "lastStatus": "sub_in"
      },
      {
        "id": "442891",
        "name": "Martin Terrier",
        "position": "LW",
        "lastStatus": "injured"
      },
      {
        "id": "718303",
        "name": "Ernest Poku",
        "position": "RW",
        "lastStatus": "bench"
      },
      {
        "id": "340322",
        "name": "Nathan Tella",
        "position": "RW",
        "lastStatus": "injured"
      },
      {
        "id": "1058514",
        "name": "Montrell Culbreath",
        "position": "RW",
        "lastStatus": "starting"
      },
      {
        "id": "1136980",
        "name": "Emmanuel Chigozie Owen",
        "position": "RW",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1364454",
        "name": "Christian Kofane",
        "position": "CF",
        "lastStatus": "injured"
      },
      {
        "id": "242086",
        "name": "Patrik Schick",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "1000675",
        "name": "Alejo Sarco",
        "position": "CF",
        "lastStatus": "not_included"
      },
      {
        "id": "929912",
        "name": "Ken Izekor",
        "position": "CF",
        "lastStatus": "not_included"
      }
    ]
  },
  {
    "clubId": "borussia-monchengladbach",
    "club": "Borussia Mönchengladbach",
    "country": "Германия",
    "league": "Bundesliga",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/L1/2025/borussia-monchengladbach.json",
    "scrapedAt": "2026-06-12T23:10:10.938211+00:00",
    "players": [
      {
        "id": "284270",
        "name": "Moritz Nicolas",
        "position": "GK",
        "lastStatus": "starting"
      },
      {
        "id": "926301",
        "name": "Tiago Pereira Cardoso",
        "position": "GK",
        "lastStatus": "not_at_club"
      },
      {
        "id": "247915",
        "name": "Jonas Omlin",
        "position": "GK",
        "lastStatus": "not_included"
      },
      {
        "id": "455922",
        "name": "Jan Olschowsky",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "31653",
        "name": "Tobias Sippel",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "192635",
        "name": "Nico Elvedi",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "335209",
        "name": "Kevin Diks",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "671108",
        "name": "Kota Takai",
        "position": "CB",
        "lastStatus": "bench"
      },
      {
        "id": "724104",
        "name": "Fabio Chiarodia",
        "position": "CB",
        "lastStatus": "bench"
      },
      {
        "id": "196231",
        "name": "Marvin Friedrich",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "524285",
        "name": "Luca Netz",
        "position": "LB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "787151",
        "name": "Lukas Ullrich",
        "position": "LB",
        "lastStatus": "starting"
      },
      {
        "id": "504153",
        "name": "Joe Scally",
        "position": "RB",
        "lastStatus": "starting"
      },
      {
        "id": "405670",
        "name": "Yannik Engelhardt",
        "position": "DM",
        "lastStatus": "starting"
      },
      {
        "id": "388409",
        "name": "Philipp Sander",
        "position": "DM",
        "lastStatus": "starting"
      },
      {
        "id": "1009463",
        "name": "Niklas Swider",
        "position": "DM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "467434",
        "name": "Rocco Reitz",
        "position": "CM",
        "lastStatus": "injured"
      },
      {
        "id": "613192",
        "name": "Jens Castrop",
        "position": "CM",
        "lastStatus": "absent"
      },
      {
        "id": "278332",
        "name": "Florian Neuhaus",
        "position": "CM",
        "lastStatus": "bench"
      },
      {
        "id": "610428",
        "name": "Oscar Fraulo",
        "position": "CM",
        "lastStatus": "not_included"
      },
      {
        "id": "1070979",
        "name": "Wael Mohya",
        "position": "AM",
        "lastStatus": "starting"
      },
      {
        "id": "504215",
        "name": "Giovanni Reyna",
        "position": "AM",
        "lastStatus": "sub_in"
      },
      {
        "id": "106872",
        "name": "Kevin Stöger",
        "position": "AM",
        "lastStatus": "starting"
      },
      {
        "id": "1067439",
        "name": "Fritz Fleck",
        "position": "AM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "284010",
        "name": "Robin Hack",
        "position": "LW",
        "lastStatus": "sub_in"
      },
      {
        "id": "667251",
        "name": "Hugo Bolin",
        "position": "LW",
        "lastStatus": "starting"
      },
      {
        "id": "229006",
        "name": "Franck Honorat",
        "position": "RW",
        "lastStatus": "sub_in"
      },
      {
        "id": "884822",
        "name": "Charles Herrmann",
        "position": "RW",
        "lastStatus": "not_included"
      },
      {
        "id": "193033",
        "name": "Tim Kleindienst",
        "position": "CF",
        "lastStatus": "sub_in"
      },
      {
        "id": "550580",
        "name": "Shuto Machino",
        "position": "CF",
        "lastStatus": "sub_in"
      },
      {
        "id": "203123",
        "name": "Haris Tabakovic",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "1000675",
        "name": "Alejo Sarco",
        "position": "CF",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "574201",
        "name": "Grant-Leon Ranos",
        "position": "CF",
        "lastStatus": "not_at_club"
      },
      {
        "id": "820723",
        "name": "Jan Urbich",
        "position": "CF",
        "lastStatus": "not_at_club"
      }
    ]
  },
  {
    "clubId": "frankfurt",
    "club": "Eintracht Frankfurt",
    "country": "Германия",
    "league": "Bundesliga",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/L1/2025/eintracht-frankfurt.json",
    "scrapedAt": "2026-06-12T23:03:59.231304+00:00",
    "players": [
      {
        "id": "997861",
        "name": "Kauã Santos",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "196813",
        "name": "Michael Zetterer",
        "position": "GK",
        "lastStatus": "starting"
      },
      {
        "id": "40034",
        "name": "Jens Grahl",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1079622",
        "name": "Amil Siljevic",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "684315",
        "name": "Nnamdi Collins",
        "position": "CB",
        "lastStatus": "injured"
      },
      {
        "id": "368891",
        "name": "Arthur Theate",
        "position": "CB",
        "lastStatus": "bench"
      },
      {
        "id": "328784",
        "name": "Robin Koch",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "635645",
        "name": "Aurèle Amenda",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "782187",
        "name": "Fousseny Doumbia",
        "position": "CB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "691892",
        "name": "Nathaniel Brown",
        "position": "LB",
        "lastStatus": "starting"
      },
      {
        "id": "1146988",
        "name": "Keita Kosugi",
        "position": "LB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "591193",
        "name": "Niels Nkounkou",
        "position": "LB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "369684",
        "name": "Rasmus Kristensen",
        "position": "RB",
        "lastStatus": "starting"
      },
      {
        "id": "744857",
        "name": "Elias Baum",
        "position": "RB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "258039",
        "name": "Aurélio Buta",
        "position": "RB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "49723",
        "name": "Timothy Chandler",
        "position": "RB",
        "lastStatus": "sub_in"
      },
      {
        "id": "290587",
        "name": "Ellyes Skhiri",
        "position": "DM",
        "lastStatus": "starting"
      },
      {
        "id": "931838",
        "name": "Hugo Larsson",
        "position": "CM",
        "lastStatus": "bench"
      },
      {
        "id": "846310",
        "name": "Oscar Højlund",
        "position": "CM",
        "lastStatus": "injured"
      },
      {
        "id": "191422",
        "name": "Mahmoud Dahoud",
        "position": "CM",
        "lastStatus": "sub_in"
      },
      {
        "id": "816585",
        "name": "Can Uzun",
        "position": "AM",
        "lastStatus": "starting"
      },
      {
        "id": "855015",
        "name": "Farès Chaïbi",
        "position": "AM",
        "lastStatus": "sub_in"
      },
      {
        "id": "1184986",
        "name": "Love Arrhov",
        "position": "AM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "74842",
        "name": "Mario Götze",
        "position": "AM",
        "lastStatus": "starting"
      },
      {
        "id": "1124856",
        "name": "Marvin Dills",
        "position": "AM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "939964",
        "name": "Jean-Mattéo Bahoya",
        "position": "LW",
        "lastStatus": "starting"
      },
      {
        "id": "358504",
        "name": "Ritsu Doan",
        "position": "RW",
        "lastStatus": "starting"
      },
      {
        "id": "429874",
        "name": "Ansgar Knauff",
        "position": "RW",
        "lastStatus": "sub_in"
      },
      {
        "id": "799993",
        "name": "Ayoube Amaimouni-Echghouyab",
        "position": "RW",
        "lastStatus": "bench"
      },
      {
        "id": "333647",
        "name": "Jonathan Burkardt",
        "position": "CF",
        "lastStatus": "sub_in"
      },
      {
        "id": "585959",
        "name": "Arnaud Kalimuendo",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "659542",
        "name": "Elye Wahi",
        "position": "CF",
        "lastStatus": "not_at_club"
      },
      {
        "id": "692368",
        "name": "Younes Ebnoutalib",
        "position": "CF",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "179184",
        "name": "Michy Batshuayi",
        "position": "CF",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1045243",
        "name": "Alexander Staff",
        "position": "CF",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "448177",
        "name": "Jessic Ngankam",
        "position": "CF",
        "lastStatus": "not_included"
      }
    ]
  },
  {
    "clubId": "fc-augsburg",
    "club": "FC Augsburg",
    "country": "Германия",
    "league": "Bundesliga",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/L1/2025/fc-augsburg.json",
    "scrapedAt": "2026-06-12T23:08:17.851090+00:00",
    "players": [
      {
        "id": "251299",
        "name": "Finn Dahmen",
        "position": "GK",
        "lastStatus": "starting"
      },
      {
        "id": "610190",
        "name": "Nediljko Labrovic",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "392124",
        "name": "Daniel Klein",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "569383",
        "name": "Chrislain Matsima",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "923945",
        "name": "Noahkai Banks",
        "position": "CB",
        "lastStatus": "sub_in"
      },
      {
        "id": "413843",
        "name": "Keven Schlotterbeck",
        "position": "CB",
        "lastStatus": "bench"
      },
      {
        "id": "382478",
        "name": "Cédric Zesiger",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "875332",
        "name": "Arthur Chaves",
        "position": "CB",
        "lastStatus": "injured"
      },
      {
        "id": "106405",
        "name": "Jeffrey Gouweleeuw",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "295630",
        "name": "Dimitrios Giannoulis",
        "position": "LB",
        "lastStatus": "injured"
      },
      {
        "id": "288429",
        "name": "Mads Pedersen",
        "position": "LB",
        "lastStatus": "sub_in"
      },
      {
        "id": "960444",
        "name": "Oliver Sorg",
        "position": "LB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "193900",
        "name": "Marius Wolf",
        "position": "RB",
        "lastStatus": "starting"
      },
      {
        "id": "374954",
        "name": "Kristijan Jakic",
        "position": "DM",
        "lastStatus": "absent"
      },
      {
        "id": "264960",
        "name": "Robin Fellhauer",
        "position": "DM",
        "lastStatus": "starting"
      },
      {
        "id": "342039",
        "name": "Yannik Keitel",
        "position": "DM",
        "lastStatus": "starting"
      },
      {
        "id": "1162968",
        "name": "Tim Schnitzer",
        "position": "DM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "536508",
        "name": "Han-Noah Massengo",
        "position": "CM",
        "lastStatus": "sub_in"
      },
      {
        "id": "280575",
        "name": "Elvis Rexhbecaj",
        "position": "CM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "296397",
        "name": "Arne Maier",
        "position": "CM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "384593",
        "name": "Alexis Claude-Maurice",
        "position": "AM",
        "lastStatus": "injured"
      },
      {
        "id": "507341",
        "name": "Fabian Rieder",
        "position": "AM",
        "lastStatus": "starting"
      },
      {
        "id": "777005",
        "name": "Mert Kömür",
        "position": "AM",
        "lastStatus": "starting"
      },
      {
        "id": "654234",
        "name": "Anton Kade",
        "position": "AM",
        "lastStatus": "starting"
      },
      {
        "id": "810096",
        "name": "Ismaël Gharbi",
        "position": "LW",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "526466",
        "name": "Elias Saad",
        "position": "LW",
        "lastStatus": "not_at_club"
      },
      {
        "id": "982863",
        "name": "Kyliane Dong",
        "position": "LW",
        "lastStatus": "not_included"
      },
      {
        "id": "904723",
        "name": "Aiman Dardari",
        "position": "LW",
        "lastStatus": "not_included"
      },
      {
        "id": "288340",
        "name": "Phillip Tietz",
        "position": "CF",
        "lastStatus": "not_at_club"
      },
      {
        "id": "726701",
        "name": "Rodrigo Ribeiro",
        "position": "CF",
        "lastStatus": "sub_in"
      },
      {
        "id": "1309324",
        "name": "Uchenna Ogundu",
        "position": "CF",
        "lastStatus": "sub_in"
      },
      {
        "id": "395522",
        "name": "Samuel Essende",
        "position": "CF",
        "lastStatus": "not_at_club"
      },
      {
        "id": "120205",
        "name": "Michael Gregoritsch",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "238639",
        "name": "Steve Mounié",
        "position": "CF",
        "lastStatus": "not_included"
      }
    ]
  },
  {
    "clubId": "fc-st-pauli",
    "club": "FC St. Pauli",
    "country": "Германия",
    "league": "Bundesliga",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/L1/2025/fc-st-pauli.json",
    "scrapedAt": "2026-06-12T23:12:25.347874+00:00",
    "players": [
      {
        "id": "248454",
        "name": "Nikola Vasilj",
        "position": "GK",
        "lastStatus": "starting"
      },
      {
        "id": "453742",
        "name": "Ben Voll",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "790733",
        "name": "Emil Gazdov",
        "position": "GK",
        "lastStatus": "not_at_club"
      },
      {
        "id": "292534",
        "name": "Eric Smith",
        "position": "CB",
        "lastStatus": "injured"
      },
      {
        "id": "610795",
        "name": "Tomoya Ando",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "451906",
        "name": "David Nemeth",
        "position": "CB",
        "lastStatus": "injured"
      },
      {
        "id": "154147",
        "name": "Hauke Wahl",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "236966",
        "name": "Adam Dzwigala",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "139304",
        "name": "Karol Mets",
        "position": "CB",
        "lastStatus": "bench"
      },
      {
        "id": "909860",
        "name": "Jannik Robatsch",
        "position": "CB",
        "lastStatus": "injured"
      },
      {
        "id": "605265",
        "name": "Louis Oppie",
        "position": "LB",
        "lastStatus": "starting"
      },
      {
        "id": "333903",
        "name": "Lars Ritzka",
        "position": "LB",
        "lastStatus": "bench"
      },
      {
        "id": "599733",
        "name": "Arkadiusz Pyrka",
        "position": "RB",
        "lastStatus": "starting"
      },
      {
        "id": "242661",
        "name": "Manolis Saliakas",
        "position": "RB",
        "lastStatus": "injured"
      },
      {
        "id": "587019",
        "name": "Fin Stevens",
        "position": "RB",
        "lastStatus": "bench"
      },
      {
        "id": "393321",
        "name": "James Sands",
        "position": "DM",
        "lastStatus": "injured"
      },
      {
        "id": "697277",
        "name": "Joel Chima Fujita",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "268327",
        "name": "Mathias Rasmussen",
        "position": "CM",
        "lastStatus": "sub_in"
      },
      {
        "id": "522223",
        "name": "Connor Metcalfe",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "192557",
        "name": "Jackson Irvine",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "501049",
        "name": "Erik Ahlstrand",
        "position": "CM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "1152232",
        "name": "Nick Schmidt",
        "position": "CM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "346499",
        "name": "Danel Sinani",
        "position": "AM",
        "lastStatus": "bench"
      },
      {
        "id": "424072",
        "name": "Mathias Pereira Lage",
        "position": "LW",
        "lastStatus": "injured"
      },
      {
        "id": "795387",
        "name": "Romeo Aigbekaen",
        "position": "LW",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "487850",
        "name": "Oladapo Afolayan",
        "position": "RW",
        "lastStatus": "not_included"
      },
      {
        "id": "596821",
        "name": "Scott Banks",
        "position": "RW",
        "lastStatus": "not_included"
      },
      {
        "id": "377729",
        "name": "Martijn Kaars",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "704155",
        "name": "Andréas Hountondji",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "677935",
        "name": "Ricky-Jade Jones",
        "position": "CF",
        "lastStatus": "sub_in"
      },
      {
        "id": "495752",
        "name": "Taichi Hara",
        "position": "CF",
        "lastStatus": "sub_in"
      },
      {
        "id": "1280281",
        "name": "Abdoulie Ceesay",
        "position": "CF",
        "lastStatus": "sub_in"
      }
    ]
  },
  {
    "clubId": "hamburger-sv",
    "club": "Hamburger SV",
    "country": "Германия",
    "league": "Bundesliga",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/L1/2025/hamburger-sv.json",
    "scrapedAt": "2026-06-12T23:07:01.863607+00:00",
    "players": [
      {
        "id": "468539",
        "name": "Daniel Peretz",
        "position": "GK",
        "lastStatus": "not_included"
      },
      {
        "id": "549378",
        "name": "Sander Tangvik",
        "position": "GK",
        "lastStatus": "starting"
      },
      {
        "id": "84993",
        "name": "Daniel Heuer Fernandes",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "894692",
        "name": "Hannes Hermann",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "892160",
        "name": "Luka Vuskovic",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "649672",
        "name": "Nicolás Capaldo",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "227110",
        "name": "Jordan Torunarigha",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "711996",
        "name": "Warmed Omari",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "529895",
        "name": "Daniel Elfadli",
        "position": "CB",
        "lastStatus": "bench"
      },
      {
        "id": "1052420",
        "name": "Aboubaka Soumahoro",
        "position": "CB",
        "lastStatus": "not_included"
      },
      {
        "id": "340521",
        "name": "Gui Ramos",
        "position": "CB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "1125079",
        "name": "Shafiq Nandja",
        "position": "CB",
        "lastStatus": "sub_in"
      },
      {
        "id": "298603",
        "name": "Miro Muheim",
        "position": "LB",
        "lastStatus": "sub_in"
      },
      {
        "id": "469949",
        "name": "Noah Katterbach",
        "position": "LB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1294853",
        "name": "Louis Lemke",
        "position": "LB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "743500",
        "name": "William Mikelbrencis",
        "position": "RB",
        "lastStatus": "sub_in"
      },
      {
        "id": "540056",
        "name": "Giorgi Gocholeishvili",
        "position": "RB",
        "lastStatus": "bench"
      },
      {
        "id": "592534",
        "name": "Nicolai Remberg",
        "position": "DM",
        "lastStatus": "starting"
      },
      {
        "id": "107574",
        "name": "Jonas Meffert",
        "position": "DM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "381967",
        "name": "Albert Sambi Lokonga",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "537598",
        "name": "Fábio Vieira",
        "position": "AM",
        "lastStatus": "starting"
      },
      {
        "id": "503866",
        "name": "Albert Grønbæk",
        "position": "AM",
        "lastStatus": "starting"
      },
      {
        "id": "412935",
        "name": "Immanuel Pherai",
        "position": "AM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "910582",
        "name": "Omar Megeed",
        "position": "AM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "910541",
        "name": "Fábio Baldé",
        "position": "LW",
        "lastStatus": "sub_in"
      },
      {
        "id": "1213681",
        "name": "Alexander Røssing-Lelesiit",
        "position": "LW",
        "lastStatus": "injured"
      },
      {
        "id": "678655",
        "name": "Philip Otele",
        "position": "LW",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "291222",
        "name": "Jean-Luc Dompé",
        "position": "LW",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "694507",
        "name": "Rayan Philippe",
        "position": "RW",
        "lastStatus": "starting"
      },
      {
        "id": "403177",
        "name": "Emir Sahiti",
        "position": "RW",
        "lastStatus": "not_at_club"
      },
      {
        "id": "415194",
        "name": "Bakery Jatta",
        "position": "RW",
        "lastStatus": "bench"
      },
      {
        "id": "470038",
        "name": "Ransford Königsdörffer",
        "position": "CF",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "820241",
        "name": "Damion Downs",
        "position": "CF",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1058520",
        "name": "Otto Stange",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "196139",
        "name": "Robert Glatzel",
        "position": "CF",
        "lastStatus": "injured"
      },
      {
        "id": "157635",
        "name": "Yussuf Poulsen",
        "position": "CF",
        "lastStatus": "sub_in"
      }
    ]
  },
  {
    "clubId": "leipzig",
    "club": "RB Leipzig",
    "country": "Германия",
    "league": "Bundesliga",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/L1/2025/rasenballsport-leipzig.json",
    "scrapedAt": "2026-06-12T23:00:02.385853+00:00",
    "players": [
      {
        "id": "486046",
        "name": "Maarten Vandevoordt",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "57071",
        "name": "Péter Gulácsi",
        "position": "GK",
        "lastStatus": "starting"
      },
      {
        "id": "160971",
        "name": "Leopold Zingerle",
        "position": "GK",
        "lastStatus": "injured"
      },
      {
        "id": "618472",
        "name": "Castello Lukeba",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "787912",
        "name": "El Chadaille Bitshiabu",
        "position": "CB",
        "lastStatus": "bench"
      },
      {
        "id": "93740",
        "name": "Willi Orbán",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "215599",
        "name": "Lukas Klostermann",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "318204",
        "name": "David Raum",
        "position": "LB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "810649",
        "name": "Max Finkgräfe",
        "position": "LB",
        "lastStatus": "starting"
      },
      {
        "id": "420210",
        "name": "Lutsharel Geertruida",
        "position": "RB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "327251",
        "name": "Ridle Baku",
        "position": "RB",
        "lastStatus": "sub_in"
      },
      {
        "id": "202591",
        "name": "Benjamin Henrichs",
        "position": "RB",
        "lastStatus": "starting"
      },
      {
        "id": "848682",
        "name": "Kosta Nedeljkovic",
        "position": "RB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "404950",
        "name": "Nicolas Seiwald",
        "position": "DM",
        "lastStatus": "starting"
      },
      {
        "id": "1279157",
        "name": "Benno Kaltefleiter",
        "position": "DM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "897424",
        "name": "Assan Ouédraogo",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "865682",
        "name": "Ezechiel Banzuzi",
        "position": "CM",
        "lastStatus": "bench"
      },
      {
        "id": "223979",
        "name": "Xaver Schlager",
        "position": "CM",
        "lastStatus": "bench"
      },
      {
        "id": "402008",
        "name": "Amadou Haidara",
        "position": "CM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "53418",
        "name": "Kevin Kampl",
        "position": "CM",
        "lastStatus": "not_included"
      },
      {
        "id": "990146",
        "name": "Joyeux Masanka Bungi",
        "position": "LM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "324278",
        "name": "Christoph Baumgartner",
        "position": "AM",
        "lastStatus": "starting"
      },
      {
        "id": "566931",
        "name": "Xavi Simons",
        "position": "AM",
        "lastStatus": "not_included"
      },
      {
        "id": "700106",
        "name": "Brajan Gruda",
        "position": "AM",
        "lastStatus": "starting"
      },
      {
        "id": "952779",
        "name": "Andrija Maksimovic",
        "position": "AM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1390649",
        "name": "Yan Diomande",
        "position": "LW",
        "lastStatus": "starting"
      },
      {
        "id": "894914",
        "name": "Antonio Nusa",
        "position": "LW",
        "lastStatus": "sub_in"
      },
      {
        "id": "955448",
        "name": "Tidiam Gomis",
        "position": "LW",
        "lastStatus": "sub_in"
      },
      {
        "id": "565424",
        "name": "Johan Bakayoko",
        "position": "RW",
        "lastStatus": "sub_in"
      },
      {
        "id": "957874",
        "name": "Rômulo",
        "position": "CF",
        "lastStatus": "sub_in"
      },
      {
        "id": "368887",
        "name": "Loïs Openda",
        "position": "CF",
        "lastStatus": "not_at_club"
      },
      {
        "id": "807386",
        "name": "Conrad Harder",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "170527",
        "name": "Timo Werner",
        "position": "CF",
        "lastStatus": "not_included"
      },
      {
        "id": "1380977",
        "name": "Samba Konaté",
        "position": "CF",
        "lastStatus": "not_in_squad"
      }
    ]
  },
  {
    "clubId": "freiburg",
    "club": "SC Freiburg",
    "country": "Германия",
    "league": "Bundesliga",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/L1/2025/sc-freiburg.json",
    "scrapedAt": "2026-06-12T23:05:23.963440+00:00",
    "players": [
      {
        "id": "526845",
        "name": "Noah Atubolu",
        "position": "GK",
        "lastStatus": "starting"
      },
      {
        "id": "284769",
        "name": "Florian Müller",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "160954",
        "name": "Jannik Huth",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "863759",
        "name": "Bruno Ogbus",
        "position": "CB",
        "lastStatus": "sub_in"
      },
      {
        "id": "225657",
        "name": "Philipp Lienhart",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "599419",
        "name": "Max Rosenfelder",
        "position": "CB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "124502",
        "name": "Matthias Ginter",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "58995",
        "name": "Anthony Jung",
        "position": "CB",
        "lastStatus": "bench"
      },
      {
        "id": "815078",
        "name": "Jordy Makengo",
        "position": "LB",
        "lastStatus": "starting"
      },
      {
        "id": "93707",
        "name": "Christian Günter",
        "position": "LB",
        "lastStatus": "bench"
      },
      {
        "id": "335993",
        "name": "Philipp Treu",
        "position": "RB",
        "lastStatus": "starting"
      },
      {
        "id": "93604",
        "name": "Lukas Kübler",
        "position": "RB",
        "lastStatus": "sub_in"
      },
      {
        "id": "907082",
        "name": "Karl Steinmann",
        "position": "RB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "443331",
        "name": "Patrick Osterhage",
        "position": "DM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "55099",
        "name": "Nicolas Höfler",
        "position": "DM",
        "lastStatus": "starting"
      },
      {
        "id": "927353",
        "name": "Johan Manzambi",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "190284",
        "name": "Maximilian Eggestein",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "1159439",
        "name": "Rouven Tarnutzer",
        "position": "CM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "608832",
        "name": "Merlin Röhl",
        "position": "AM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "820957",
        "name": "Derry Scherhant",
        "position": "LW",
        "lastStatus": "starting"
      },
      {
        "id": "185077",
        "name": "Vincenzo Grifo",
        "position": "LW",
        "lastStatus": "sub_in"
      },
      {
        "id": "342967",
        "name": "Niklas Beste",
        "position": "RW",
        "lastStatus": "starting"
      },
      {
        "id": "1145064",
        "name": "Cyriaque Irié",
        "position": "RW",
        "lastStatus": "bench"
      },
      {
        "id": "645774",
        "name": "Eren Dinkçi",
        "position": "RW",
        "lastStatus": "not_at_club"
      },
      {
        "id": "668606",
        "name": "Yuito Suzuki",
        "position": "SS",
        "lastStatus": "injured"
      },
      {
        "id": "143891",
        "name": "Maximilian Philipp",
        "position": "SS",
        "lastStatus": "sub_in"
      },
      {
        "id": "605268",
        "name": "Igor Matanovic",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "248999",
        "name": "Lucas Höler",
        "position": "CF",
        "lastStatus": "sub_in"
      },
      {
        "id": "452477",
        "name": "Junior Adamu",
        "position": "CF",
        "lastStatus": "not_included"
      }
    ]
  },
  {
    "clubId": "sv-werder-bremen",
    "club": "SV Werder Bremen",
    "country": "Германия",
    "league": "Bundesliga",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/L1/2025/sv-werder-bremen.json",
    "scrapedAt": "2026-06-12T23:07:43.450609+00:00",
    "players": [
      {
        "id": "620295",
        "name": "Mio Backhaus",
        "position": "GK",
        "lastStatus": "starting"
      },
      {
        "id": "493513",
        "name": "Karl Hein",
        "position": "GK",
        "lastStatus": "injured"
      },
      {
        "id": "99451",
        "name": "Markus Kolke",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "1084638",
        "name": "Karim Coulibaly",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "156990",
        "name": "Marco Friedl",
        "position": "CB",
        "lastStatus": "sub_in"
      },
      {
        "id": "334221",
        "name": "Amos Pieper",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "263361",
        "name": "Maximilian Wöber",
        "position": "CB",
        "lastStatus": "injured"
      },
      {
        "id": "162434",
        "name": "Niklas Stark",
        "position": "CB",
        "lastStatus": "bench"
      },
      {
        "id": "830108",
        "name": "Julián Malatini",
        "position": "CB",
        "lastStatus": "injured"
      },
      {
        "id": "1045986",
        "name": "Mick Schmetgens",
        "position": "CB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "1032924",
        "name": "Mats Heitmann",
        "position": "CB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "393512",
        "name": "Felix Agu",
        "position": "LB",
        "lastStatus": "bench"
      },
      {
        "id": "621802",
        "name": "Olivier Deman",
        "position": "LB",
        "lastStatus": "starting"
      },
      {
        "id": "449597",
        "name": "Isaac Schmidt",
        "position": "LB",
        "lastStatus": "starting"
      },
      {
        "id": "405385",
        "name": "Yukinari Sugawara",
        "position": "RB",
        "lastStatus": "absent"
      },
      {
        "id": "338668",
        "name": "Senne Lynen",
        "position": "DM",
        "lastStatus": "starting"
      },
      {
        "id": "855134",
        "name": "Skelly Alvero",
        "position": "DM",
        "lastStatus": "not_included"
      },
      {
        "id": "1074523",
        "name": "Wesley Adeh",
        "position": "DM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "289835",
        "name": "Jens Stage",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "449592",
        "name": "Cameron Puertas",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "93844",
        "name": "Leonardo Bittencourt",
        "position": "CM",
        "lastStatus": "sub_in"
      },
      {
        "id": "346853",
        "name": "Romano Schmid",
        "position": "AM",
        "lastStatus": "starting"
      },
      {
        "id": "1114155",
        "name": "Patrice Covic",
        "position": "AM",
        "lastStatus": "sub_in"
      },
      {
        "id": "670116",
        "name": "Isak Hansen-Aarøen",
        "position": "AM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "825073",
        "name": "Leon Opitz",
        "position": "AM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "654991",
        "name": "Samuel Mbangula",
        "position": "LW",
        "lastStatus": "sub_in"
      },
      {
        "id": "391766",
        "name": "Marco Grüll",
        "position": "LW",
        "lastStatus": "sub_in"
      },
      {
        "id": "596153",
        "name": "Justin Njinmah",
        "position": "RW",
        "lastStatus": "starting"
      },
      {
        "id": "943795",
        "name": "Jovan Milosevic",
        "position": "CF",
        "lastStatus": "bench"
      },
      {
        "id": "656681",
        "name": "Victor Boniface",
        "position": "CF",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "701757",
        "name": "Keke Topp",
        "position": "CF",
        "lastStatus": "injured"
      },
      {
        "id": "1042472",
        "name": "Salim Musah",
        "position": "CF",
        "lastStatus": "starting"
      }
    ]
  },
  {
    "clubId": "tsg-1899-hoffenheim",
    "club": "TSG 1899 Hoffenheim",
    "country": "Германия",
    "league": "Bundesliga",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/L1/2025/tsg-1899-hoffenheim.json",
    "scrapedAt": "2026-06-12T23:04:41.404521+00:00",
    "players": [
      {
        "id": "55089",
        "name": "Oliver Baumann",
        "position": "GK",
        "lastStatus": "starting"
      },
      {
        "id": "432671",
        "name": "Luca Philipp",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "579459",
        "name": "Albian Hajdari",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "361260",
        "name": "Ozan Kabak",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "620217",
        "name": "Robin Hranac",
        "position": "CB",
        "lastStatus": "bench"
      },
      {
        "id": "415035",
        "name": "Koki Machida",
        "position": "CB",
        "lastStatus": "injured"
      },
      {
        "id": "875332",
        "name": "Arthur Chaves",
        "position": "CB",
        "lastStatus": "not_included"
      },
      {
        "id": "160241",
        "name": "Kevin Akpoguma",
        "position": "CB",
        "lastStatus": "sub_in"
      },
      {
        "id": "553539",
        "name": "Valentin Lässig",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "934529",
        "name": "Kelven Frees",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "364258",
        "name": "Bernardo",
        "position": "LB",
        "lastStatus": "starting"
      },
      {
        "id": "569387",
        "name": "Valentin Gendrey",
        "position": "RB",
        "lastStatus": "injured"
      },
      {
        "id": "157672",
        "name": "Vladimír Coufal",
        "position": "RB",
        "lastStatus": "starting"
      },
      {
        "id": "667457",
        "name": "Leon Avdullahu",
        "position": "DM",
        "lastStatus": "starting"
      },
      {
        "id": "412953",
        "name": "Wouter Burger",
        "position": "DM",
        "lastStatus": "starting"
      },
      {
        "id": "234029",
        "name": "Grischa Prömel",
        "position": "CM",
        "lastStatus": "sub_in"
      },
      {
        "id": "569031",
        "name": "Umut Tohumcu",
        "position": "CM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "685484",
        "name": "Luka Duric",
        "position": "CM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "434116",
        "name": "Alexander Prass",
        "position": "LM",
        "lastStatus": "sub_in"
      },
      {
        "id": "789898",
        "name": "Muhammed Damar",
        "position": "AM",
        "lastStatus": "bench"
      },
      {
        "id": "46580",
        "name": "Andrej Kramaric",
        "position": "AM",
        "lastStatus": "starting"
      },
      {
        "id": "1067904",
        "name": "Bazoumana Touré",
        "position": "LW",
        "lastStatus": "starting"
      },
      {
        "id": "866579",
        "name": "Cole Campbell",
        "position": "RW",
        "lastStatus": "sub_in"
      },
      {
        "id": "524290",
        "name": "Fisnik Asllani",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "553285",
        "name": "Tim Lemperle",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "552057",
        "name": "Adam Hlozek",
        "position": "CF",
        "lastStatus": "sub_in"
      },
      {
        "id": "923595",
        "name": "Max Moerstedt",
        "position": "CF",
        "lastStatus": "bench"
      },
      {
        "id": "974894",
        "name": "David Mokwa",
        "position": "CF",
        "lastStatus": "not_at_club"
      },
      {
        "id": "930998",
        "name": "Yannick Eduardo",
        "position": "CF",
        "lastStatus": "not_at_club"
      },
      {
        "id": "237164",
        "name": "Ihlas Bebou",
        "position": "CF",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1363814",
        "name": "Precious Benjamin",
        "position": "CF",
        "lastStatus": "not_at_club"
      }
    ]
  },
  {
    "clubId": "stuttgart",
    "club": "VfB Stuttgart",
    "country": "Германия",
    "league": "Bundesliga",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/L1/2025/vfb-stuttgart.json",
    "scrapedAt": "2026-06-12T23:03:04.019265+00:00",
    "players": [
      {
        "id": "195778",
        "name": "Alexander Nübel",
        "position": "GK",
        "lastStatus": "starting"
      },
      {
        "id": "187624",
        "name": "Fabian Bredlow",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "388067",
        "name": "Stefan Drljaca",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "924117",
        "name": "Finn Jeltsch",
        "position": "CB",
        "lastStatus": "sub_in"
      },
      {
        "id": "436064",
        "name": "Ramon Hendriks",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "303219",
        "name": "Jeff Chabot",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "539798",
        "name": "Luca Jaquez",
        "position": "CB",
        "lastStatus": "sub_in"
      },
      {
        "id": "620598",
        "name": "Ameen Al-Dakhil",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "344598",
        "name": "Dan-Axel Zagadou",
        "position": "CB",
        "lastStatus": "bench"
      },
      {
        "id": "282660",
        "name": "Maximilian Mittelstädt",
        "position": "LB",
        "lastStatus": "starting"
      },
      {
        "id": "448258",
        "name": "Josha Vagnoman",
        "position": "RB",
        "lastStatus": "sub_in"
      },
      {
        "id": "711969",
        "name": "Lorenz Assignon",
        "position": "RB",
        "lastStatus": "bench"
      },
      {
        "id": "507345",
        "name": "Leonidas Stergiou",
        "position": "RB",
        "lastStatus": "not_included"
      },
      {
        "id": "195246",
        "name": "Pascal Stenzel",
        "position": "RB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "443710",
        "name": "Angelo Stiller",
        "position": "DM",
        "lastStatus": "starting"
      },
      {
        "id": "948279",
        "name": "Chema Andrés",
        "position": "DM",
        "lastStatus": "starting"
      },
      {
        "id": "232320",
        "name": "Atakan Karazor",
        "position": "DM",
        "lastStatus": "absent"
      },
      {
        "id": "400546",
        "name": "Nikolas Nartey",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "654982",
        "name": "Bilal El Khannouss",
        "position": "AM",
        "lastStatus": "bench"
      },
      {
        "id": "272278",
        "name": "Chris Führich",
        "position": "LW",
        "lastStatus": "starting"
      },
      {
        "id": "518505",
        "name": "Jamie Leweling",
        "position": "RW",
        "lastStatus": "starting"
      },
      {
        "id": "616344",
        "name": "Tiago Tomás",
        "position": "RW",
        "lastStatus": "sub_in"
      },
      {
        "id": "707242",
        "name": "Badredine Bouanani",
        "position": "RW",
        "lastStatus": "bench"
      },
      {
        "id": "897480",
        "name": "Noah Darvich",
        "position": "RW",
        "lastStatus": "not_at_club"
      },
      {
        "id": "897505",
        "name": "Lazar Jovanovic",
        "position": "RW",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "455661",
        "name": "Nick Woltemade",
        "position": "CF",
        "lastStatus": "not_at_club"
      },
      {
        "id": "335457",
        "name": "Ermedin Demirovic",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "339314",
        "name": "Deniz Undav",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "971663",
        "name": "Jeremy Arévalo",
        "position": "CF",
        "lastStatus": "not_in_squad"
      }
    ]
  },
  {
    "clubId": "vfl-wolfsburg",
    "club": "VfL Wolfsburg",
    "country": "Германия",
    "league": "Bundesliga",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/L1/2025/vfl-wolfsburg.json",
    "scrapedAt": "2026-06-12T23:06:11.220515+00:00",
    "players": [
      {
        "id": "346551",
        "name": "Kamil Grabara",
        "position": "GK",
        "lastStatus": "starting"
      },
      {
        "id": "118161",
        "name": "Marius Müller",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "51977",
        "name": "Pavao Pervan",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "669380",
        "name": "Konstantinos Koulierakis",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "919515",
        "name": "Jeanuël Belocian",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "734676",
        "name": "Jonas Adjetey",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "239962",
        "name": "Denis Vavro",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "460245",
        "name": "Moritz Jenz",
        "position": "CB",
        "lastStatus": "bench"
      },
      {
        "id": "617755",
        "name": "Jenson Seelt",
        "position": "CB",
        "lastStatus": "injured"
      },
      {
        "id": "897423",
        "name": "David Odogu",
        "position": "CB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "1075579",
        "name": "Mathys Angély",
        "position": "CB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "1070022",
        "name": "Till Neininger",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "369674",
        "name": "Joakim Maehle",
        "position": "LB",
        "lastStatus": "starting"
      },
      {
        "id": "730484",
        "name": "Aaron Zehnter",
        "position": "LB",
        "lastStatus": "bench"
      },
      {
        "id": "951579",
        "name": "Saël Kumbedi",
        "position": "RB",
        "lastStatus": "starting"
      },
      {
        "id": "435796",
        "name": "Kilian Fischer",
        "position": "RB",
        "lastStatus": "injured"
      },
      {
        "id": "1009440",
        "name": "Jan Bürger",
        "position": "RB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "663581",
        "name": "Vini Souza",
        "position": "DM",
        "lastStatus": "starting"
      },
      {
        "id": "342405",
        "name": "Mattias Svanberg",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "117674",
        "name": "Maximilian Arnold",
        "position": "CM",
        "lastStatus": "injured"
      },
      {
        "id": "1150105",
        "name": "Pharell Hensel",
        "position": "CM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "119277",
        "name": "Yannick Gerhardt",
        "position": "CM",
        "lastStatus": "sub_in"
      },
      {
        "id": "711517",
        "name": "Kevin Paredes",
        "position": "LM",
        "lastStatus": "bench"
      },
      {
        "id": "387106",
        "name": "Lovro Majer",
        "position": "AM",
        "lastStatus": "sub_in"
      },
      {
        "id": "789252",
        "name": "Bence Dárdai",
        "position": "AM",
        "lastStatus": "injured"
      },
      {
        "id": "69633",
        "name": "Christian Eriksen",
        "position": "AM",
        "lastStatus": "starting"
      },
      {
        "id": "1029413",
        "name": "Trevor Benedict",
        "position": "LW",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1139729",
        "name": "Bruno Katz",
        "position": "LW",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "533295",
        "name": "Patrick Wimmer",
        "position": "RW",
        "lastStatus": "injured"
      },
      {
        "id": "881297",
        "name": "Adam Daghim",
        "position": "RW",
        "lastStatus": "starting"
      },
      {
        "id": "242063",
        "name": "Vaclav Cerny",
        "position": "RW",
        "lastStatus": "not_at_club"
      },
      {
        "id": "432982",
        "name": "Andreas Skov Olsen",
        "position": "RW",
        "lastStatus": "not_at_club"
      },
      {
        "id": "513245",
        "name": "Jesper Lindstrøm",
        "position": "RW",
        "lastStatus": "bench"
      },
      {
        "id": "746910",
        "name": "Mohamed Amoura",
        "position": "CF",
        "lastStatus": "sub_in"
      },
      {
        "id": "819636",
        "name": "Dzenan Pejcinovic",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "1144627",
        "name": "Kento Shiogai",
        "position": "CF",
        "lastStatus": "sub_in"
      },
      {
        "id": "391004",
        "name": "Jonas Wind",
        "position": "CF",
        "lastStatus": "injured"
      }
    ]
  },
  {
    "clubId": "avs-futebol-sad",
    "club": "Avs Futebol",
    "country": "Португалия",
    "league": "Primeira Liga",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/PO1/2025/avs-futebol-sad.json",
    "scrapedAt": "2026-06-13T00:08:20.151109+00:00",
    "players": [
      {
        "id": "808445",
        "name": "Adriel",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "685805",
        "name": "João Gonçalves",
        "position": "GK",
        "lastStatus": "not_at_club"
      },
      {
        "id": "538253",
        "name": "Simão",
        "position": "GK",
        "lastStatus": "starting"
      },
      {
        "id": "91949",
        "name": "Trigueira",
        "position": "GK",
        "lastStatus": "sub_in"
      },
      {
        "id": "1541440",
        "name": "Afonso Silva",
        "position": "Abwehr",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1000828",
        "name": "Sidi Bane",
        "position": "CB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "726697",
        "name": "Cristian Devenish",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "979625",
        "name": "Paulo Vitor",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "197602",
        "name": "Rúben Semedo",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "159142",
        "name": "Aderllan Santos",
        "position": "CB",
        "lastStatus": "bench"
      },
      {
        "id": "341516",
        "name": "Ponck",
        "position": "CB",
        "lastStatus": "bench"
      },
      {
        "id": "690124",
        "name": "Daniel Rivas",
        "position": "LB",
        "lastStatus": "starting"
      },
      {
        "id": "270055",
        "name": "Kiki",
        "position": "LB",
        "lastStatus": "sub_in"
      },
      {
        "id": "858252",
        "name": "Diogo Spencer",
        "position": "RB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "602156",
        "name": "Guillem Molina",
        "position": "RB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "978615",
        "name": "Mateus Pivô",
        "position": "RB",
        "lastStatus": "starting"
      },
      {
        "id": "725049",
        "name": "Roni",
        "position": "DM",
        "lastStatus": "starting"
      },
      {
        "id": "461629",
        "name": "Gustavo Assunção",
        "position": "DM",
        "lastStatus": "not_included"
      },
      {
        "id": "638589",
        "name": "Ángel Algobia",
        "position": "DM",
        "lastStatus": "starting"
      },
      {
        "id": "747810",
        "name": "Tiago Hernández",
        "position": "DM",
        "lastStatus": "sub_in"
      },
      {
        "id": "816135",
        "name": "Pedro Lima",
        "position": "CM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "340864",
        "name": "Jaume Grau",
        "position": "CM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "637788",
        "name": "Gustavo Mendonça",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "314942",
        "name": "Bruno Lourenço",
        "position": "AM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "225151",
        "name": "Rafael Barbosa",
        "position": "AM",
        "lastStatus": "not_included"
      },
      {
        "id": "1442787",
        "name": "António Machado",
        "position": "AM",
        "lastStatus": "not_included"
      },
      {
        "id": "1015624",
        "name": "Óscar Perea",
        "position": "LW",
        "lastStatus": "bench"
      },
      {
        "id": "924447",
        "name": "Tunde Akinsola",
        "position": "LW",
        "lastStatus": "starting"
      },
      {
        "id": "309841",
        "name": "Andre Green",
        "position": "LW",
        "lastStatus": "sub_in"
      },
      {
        "id": "1065761",
        "name": "Guilherme Neiva",
        "position": "LW",
        "lastStatus": "starting"
      },
      {
        "id": "1058056",
        "name": "Edson Mucuana",
        "position": "LW",
        "lastStatus": "not_included"
      },
      {
        "id": "390478",
        "name": "Kobamelo Kodisang",
        "position": "RW",
        "lastStatus": "not_included"
      },
      {
        "id": "568155",
        "name": "Jordi Escobar",
        "position": "CF",
        "lastStatus": "not_at_club"
      },
      {
        "id": "661243",
        "name": "Diego Duarte",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "139393",
        "name": "Tomané",
        "position": "CF",
        "lastStatus": "sub_in"
      },
      {
        "id": "45717",
        "name": "Nenê",
        "position": "CF",
        "lastStatus": "not_in_squad"
      }
    ]
  },
  {
    "clubId": "casa-pia-ac",
    "club": "Casa Pia AC",
    "country": "Португалия",
    "league": "Primeira Liga",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/PO1/2025/casa-pia-ac.json",
    "scrapedAt": "2026-06-13T00:06:11.336472+00:00",
    "players": [
      {
        "id": "378482",
        "name": "Patrick Sequeira",
        "position": "GK",
        "lastStatus": "starting"
      },
      {
        "id": "815219",
        "name": "Ivan Mandić",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "383008",
        "name": "Daniel Azevedo",
        "position": "GK",
        "lastStatus": "not_included"
      },
      {
        "id": "24846",
        "name": "Ricardo Batista",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "537477",
        "name": "João Goulart",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "633377",
        "name": "Kaique Rocha",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "740159",
        "name": "David Sousa",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "490760",
        "name": "Tchamba",
        "position": "CB",
        "lastStatus": "not_included"
      },
      {
        "id": "1241219",
        "name": "Kaly",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "33829",
        "name": "José Fonte",
        "position": "CB",
        "lastStatus": "bench"
      },
      {
        "id": "337798",
        "name": "Abdu Conté",
        "position": "LB",
        "lastStatus": "sub_in"
      },
      {
        "id": "805864",
        "name": "Fahem Benaïssa",
        "position": "LB",
        "lastStatus": "not_included"
      },
      {
        "id": "696504",
        "name": "Pedro Rosas",
        "position": "LB",
        "lastStatus": "starting"
      },
      {
        "id": "439465",
        "name": "Gaizka Larrazabal",
        "position": "RB",
        "lastStatus": "starting"
      },
      {
        "id": "154319",
        "name": "André Geraldes",
        "position": "RB",
        "lastStatus": "bench"
      },
      {
        "id": "504075",
        "name": "Rafael Brito",
        "position": "DM",
        "lastStatus": "sub_in"
      },
      {
        "id": "182108",
        "name": "Seba Pérez",
        "position": "DM",
        "lastStatus": "starting"
      },
      {
        "id": "805065",
        "name": "Iyad Mohamed",
        "position": "DM",
        "lastStatus": "sub_in"
      },
      {
        "id": "1396595",
        "name": "Renato Nhaga",
        "position": "CM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "536081",
        "name": "Lawrence Ofori",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "566911",
        "name": "Yassin Oukili",
        "position": "CM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "587107",
        "name": "Miguel Sousa",
        "position": "CM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "1534934",
        "name": "Abdu Dafe",
        "position": "CM",
        "lastStatus": "not_included"
      },
      {
        "id": "1221003",
        "name": "Kevin Prieto",
        "position": "RM",
        "lastStatus": "starting"
      },
      {
        "id": "815652",
        "name": "Tiago Morais",
        "position": "LW",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "891971",
        "name": "João Marques",
        "position": "LW",
        "lastStatus": "starting"
      },
      {
        "id": "569368",
        "name": "Kelian Nsona",
        "position": "LW",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "324806",
        "name": "Jérémy Livolant",
        "position": "RW",
        "lastStatus": "sub_in"
      },
      {
        "id": "778540",
        "name": "Xander Severina",
        "position": "RW",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "975138",
        "name": "Korede Osundina",
        "position": "RW",
        "lastStatus": "sub_in"
      },
      {
        "id": "529730",
        "name": "Kiki",
        "position": "RW",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "676411",
        "name": "Dailon Livramento",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "705808",
        "name": "Max Svensson",
        "position": "CF",
        "lastStatus": "not_at_club"
      },
      {
        "id": "238367",
        "name": "Cassiano",
        "position": "CF",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "699501",
        "name": "Clau Mendes",
        "position": "CF",
        "lastStatus": "bench"
      }
    ]
  },
  {
    "clubId": "cd-nacional",
    "club": "CD Nacional",
    "country": "Португалия",
    "league": "Primeira Liga",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/PO1/2025/cd-nacional.json",
    "scrapedAt": "2026-06-13T00:05:11.543039+00:00",
    "players": [
      {
        "id": "964590",
        "name": "Kaique Pereira",
        "position": "GK",
        "lastStatus": "starting"
      },
      {
        "id": "418615",
        "name": "Lucas França",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1116638",
        "name": "Kevyn",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "879236",
        "name": "Zé Vítor",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "351894",
        "name": "Léo Santos",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "678991",
        "name": "Ulisses",
        "position": "CB",
        "lastStatus": "injured"
      },
      {
        "id": "1020652",
        "name": "Chico Gonçalves",
        "position": "CB",
        "lastStatus": "sub_in"
      },
      {
        "id": "305946",
        "name": "José Gomes",
        "position": "LB",
        "lastStatus": "starting"
      },
      {
        "id": "371148",
        "name": "Lenny Vallier",
        "position": "LB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "912703",
        "name": "Alan Núñez",
        "position": "RB",
        "lastStatus": "starting"
      },
      {
        "id": "84711",
        "name": "João Aurélio",
        "position": "RB",
        "lastStatus": "sub_in"
      },
      {
        "id": "815384",
        "name": "Matheus Dias",
        "position": "DM",
        "lastStatus": "starting"
      },
      {
        "id": "401526",
        "name": "Liziero",
        "position": "CM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "673511",
        "name": "Chiheb Labidi",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "929573",
        "name": "Joel Silva",
        "position": "CM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1261642",
        "name": "Deivison",
        "position": "CM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1084815",
        "name": "Josué Souza",
        "position": "CM",
        "lastStatus": "not_included"
      },
      {
        "id": "213510",
        "name": "Jota",
        "position": "CM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "187860",
        "name": "André Sousa",
        "position": "CM",
        "lastStatus": "sub_in"
      },
      {
        "id": "357163",
        "name": "Filipe Soares",
        "position": "AM",
        "lastStatus": "starting"
      },
      {
        "id": "746358",
        "name": "Daniel Jr",
        "position": "AM",
        "lastStatus": "bench"
      },
      {
        "id": "523977",
        "name": "Miguel Baeza",
        "position": "AM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "544895",
        "name": "Paulinho Bóia",
        "position": "LW",
        "lastStatus": "starting"
      },
      {
        "id": "352425",
        "name": "Witi",
        "position": "LW",
        "lastStatus": "starting"
      },
      {
        "id": "1176866",
        "name": "Motez Nourani",
        "position": "LW",
        "lastStatus": "not_included"
      },
      {
        "id": "627221",
        "name": "Gabriel Veron",
        "position": "RW",
        "lastStatus": "bench"
      },
      {
        "id": "1083068",
        "name": "Pablo Ruan",
        "position": "RW",
        "lastStatus": "sub_in"
      },
      {
        "id": "1047861",
        "name": "Watts",
        "position": "RW",
        "lastStatus": "bench"
      },
      {
        "id": "419936",
        "name": "Jesús Ramírez",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "234787",
        "name": "Lucas João",
        "position": "CF",
        "lastStatus": "bench"
      }
    ]
  },
  {
    "clubId": "cd-santa-clara",
    "club": "CD Santa Clara",
    "country": "Португалия",
    "league": "Primeira Liga",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/PO1/2025/cd-santa-clara.json",
    "scrapedAt": "2026-06-13T00:02:18.128707+00:00",
    "players": [
      {
        "id": "401535",
        "name": "Gabriel Batista",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "1083369",
        "name": "João Afonso",
        "position": "GK",
        "lastStatus": "starting"
      },
      {
        "id": "983843",
        "name": "Neneca",
        "position": "GK",
        "lastStatus": "not_at_club"
      },
      {
        "id": "657155",
        "name": "Sidney Lima",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "808475",
        "name": "MT",
        "position": "CB",
        "lastStatus": "injured"
      },
      {
        "id": "1083239",
        "name": "Henrique Silva",
        "position": "CB",
        "lastStatus": "bench"
      },
      {
        "id": "290508",
        "name": "Pedro Pacheco",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "169681",
        "name": "Frederico Venâncio",
        "position": "CB",
        "lastStatus": "bench"
      },
      {
        "id": "131658",
        "name": "Luís Rocha",
        "position": "CB",
        "lastStatus": "not_included"
      },
      {
        "id": "739438",
        "name": "Matheus Pereira",
        "position": "LB",
        "lastStatus": "not_included"
      },
      {
        "id": "875511",
        "name": "Paulo Victor",
        "position": "LB",
        "lastStatus": "starting"
      },
      {
        "id": "519879",
        "name": "Guilherme Romão",
        "position": "LB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1054149",
        "name": "Zé Franco",
        "position": "LB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "684061",
        "name": "Lucas Soares",
        "position": "RB",
        "lastStatus": "sub_in"
      },
      {
        "id": "396429",
        "name": "Diogo Calila",
        "position": "RB",
        "lastStatus": "starting"
      },
      {
        "id": "1082539",
        "name": "Edney",
        "position": "RB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "337799",
        "name": "Pedro Ferreira",
        "position": "DM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "687743",
        "name": "Adriano Firmino",
        "position": "DM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "570582",
        "name": "Darlan",
        "position": "DM",
        "lastStatus": "bench"
      },
      {
        "id": "836547",
        "name": "Serginho",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "1292917",
        "name": "Djé",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "606719",
        "name": "Gustavo Klismahn",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "997076",
        "name": "Andrey",
        "position": "AM",
        "lastStatus": "sub_in"
      },
      {
        "id": "965613",
        "name": "Isaac",
        "position": "AM",
        "lastStatus": "sub_in"
      },
      {
        "id": "1070916",
        "name": "Tiago Queiroz",
        "position": "AM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "1485121",
        "name": "Luiz Otávio",
        "position": "AM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "627224",
        "name": "Gabriel Silva",
        "position": "LW",
        "lastStatus": "starting"
      },
      {
        "id": "402825",
        "name": "Luquinhas",
        "position": "LW",
        "lastStatus": "not_at_club"
      },
      {
        "id": "505655",
        "name": "Henrique Pereira",
        "position": "LW",
        "lastStatus": "not_at_club"
      },
      {
        "id": "637806",
        "name": "Tiago Duarte",
        "position": "LW",
        "lastStatus": "not_at_club"
      },
      {
        "id": "1179089",
        "name": "Melvin Costa",
        "position": "LW",
        "lastStatus": "not_at_club"
      },
      {
        "id": "1293043",
        "name": "Vital Maia",
        "position": "LW",
        "lastStatus": "not_at_club"
      },
      {
        "id": "688881",
        "name": "Vinícius Lopes",
        "position": "RW",
        "lastStatus": "sub_in"
      },
      {
        "id": "973703",
        "name": "Brenner",
        "position": "RW",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "687361",
        "name": "Welinton Torrão",
        "position": "RW",
        "lastStatus": "starting"
      },
      {
        "id": "1091608",
        "name": "Fernando",
        "position": "RW",
        "lastStatus": "starting"
      },
      {
        "id": "1127847",
        "name": "Adriel Moraes",
        "position": "RW",
        "lastStatus": "not_at_club"
      },
      {
        "id": "589911",
        "name": "Wendel",
        "position": "CF",
        "lastStatus": "not_included"
      },
      {
        "id": "813044",
        "name": "Elias Manoel",
        "position": "CF",
        "lastStatus": "sub_in"
      },
      {
        "id": "181547",
        "name": "Gonçalo Paciência",
        "position": "CF",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "856423",
        "name": "João Costa",
        "position": "CF",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "303385",
        "name": "Anthony Carter",
        "position": "CF",
        "lastStatus": "not_at_club"
      }
    ]
  },
  {
    "clubId": "cd-tondela",
    "club": "CD Tondela",
    "country": "Португалия",
    "league": "Primeira Liga",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/PO1/2025/cd-tondela.json",
    "scrapedAt": "2026-06-13T00:06:52.710603+00:00",
    "players": [
      {
        "id": "719646",
        "name": "Bernardo",
        "position": "GK",
        "lastStatus": "starting"
      },
      {
        "id": "568154",
        "name": "Lucas Cañizares",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "375770",
        "name": "Gabriel Souza",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "989929",
        "name": "Brayan Medina",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "539807",
        "name": "Christian Marques",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "461903",
        "name": "João Silva",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "1194211",
        "name": "Diego Tavares",
        "position": "CB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "211107",
        "name": "João Afonso",
        "position": "CB",
        "lastStatus": "sub_in"
      },
      {
        "id": "700789",
        "name": "Nor Maviram",
        "position": "LB",
        "lastStatus": "injured"
      },
      {
        "id": "805835",
        "name": "Rémy Vita",
        "position": "LB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "592498",
        "name": "Tiago Manso",
        "position": "RB",
        "lastStatus": "starting"
      },
      {
        "id": "426213",
        "name": "Rodrigo Conceição",
        "position": "RB",
        "lastStatus": "starting"
      },
      {
        "id": "124548",
        "name": "Bebeto",
        "position": "RB",
        "lastStatus": "bench"
      },
      {
        "id": "1074496",
        "name": "Juanse Rodríguez",
        "position": "DM",
        "lastStatus": "starting"
      },
      {
        "id": "503975",
        "name": "Joe Hodge",
        "position": "DM",
        "lastStatus": "sub_in"
      },
      {
        "id": "476355",
        "name": "Cícero",
        "position": "DM",
        "lastStatus": "starting"
      },
      {
        "id": "512129",
        "name": "André Ceitil",
        "position": "DM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "401736",
        "name": "Yaya Sithole",
        "position": "CM",
        "lastStatus": "bench"
      },
      {
        "id": "134608",
        "name": "Hélder Tavares",
        "position": "CM",
        "lastStatus": "sub_in"
      },
      {
        "id": "670683",
        "name": "Hugo Félix",
        "position": "AM",
        "lastStatus": "starting"
      },
      {
        "id": "634125",
        "name": "Xabi Huarte",
        "position": "AM",
        "lastStatus": "injured"
      },
      {
        "id": "813152",
        "name": "Makan Aïko",
        "position": "LW",
        "lastStatus": "starting"
      },
      {
        "id": "433652",
        "name": "Benjamin Kimpioka",
        "position": "LW",
        "lastStatus": "sub_in"
      },
      {
        "id": "149716",
        "name": "Ivan Cavaleiro",
        "position": "LW",
        "lastStatus": "not_at_club"
      },
      {
        "id": "842764",
        "name": "Moudjatovic",
        "position": "LW",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "642591",
        "name": "Maranhão",
        "position": "RW",
        "lastStatus": "starting"
      },
      {
        "id": "174694",
        "name": "Rony Lopes",
        "position": "RW",
        "lastStatus": "starting"
      },
      {
        "id": "1241278",
        "name": "Yarlen",
        "position": "RW",
        "lastStatus": "not_at_club"
      },
      {
        "id": "462087",
        "name": "Arjen van der Heide",
        "position": "RW",
        "lastStatus": "sub_in"
      },
      {
        "id": "927644",
        "name": "Afonso Rodrigues",
        "position": "RW",
        "lastStatus": "not_at_club"
      },
      {
        "id": "355369",
        "name": "Jordan",
        "position": "CF",
        "lastStatus": "bench"
      },
      {
        "id": "1043831",
        "name": "Miro",
        "position": "CF",
        "lastStatus": "not_at_club"
      },
      {
        "id": "1112292",
        "name": "Yefrei Rodríguez",
        "position": "CF",
        "lastStatus": "not_at_club"
      }
    ]
  },
  {
    "clubId": "cf-estrela-amadora-sad",
    "club": "CF Estrela Amadora",
    "country": "Португалия",
    "league": "Primeira Liga",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/PO1/2025/cf-estrela-amadora-sad.json",
    "scrapedAt": "2026-06-13T00:07:39.991134+00:00",
    "players": [
      {
        "id": "670711",
        "name": "Diogo Pinto",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "369258",
        "name": "Dudu",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "95142",
        "name": "Renan Ribeiro",
        "position": "GK",
        "lastStatus": "starting"
      },
      {
        "id": "372468",
        "name": "David Grilo",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "797572",
        "name": "Stefan Lekovic",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "658674",
        "name": "Luan Patrick",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "1094885",
        "name": "Otávio",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "699679",
        "name": "Bernardo Schappo",
        "position": "CB",
        "lastStatus": "bench"
      },
      {
        "id": "351441",
        "name": "Atanas Chernev",
        "position": "CB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "461582",
        "name": "Issiar Dramé",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1104233",
        "name": "Semeu Commey",
        "position": "CB",
        "lastStatus": "not_included"
      },
      {
        "id": "927107",
        "name": "Ni",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "611855",
        "name": "Sidny Lopes Cabral",
        "position": "LB",
        "lastStatus": "not_included"
      },
      {
        "id": "631472",
        "name": "Bruno Langa",
        "position": "LB",
        "lastStatus": "starting"
      },
      {
        "id": "681829",
        "name": "Nilton",
        "position": "LB",
        "lastStatus": "not_included"
      },
      {
        "id": "575717",
        "name": "Guilherme Montóia",
        "position": "LB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "593410",
        "name": "Yahya Kalley",
        "position": "LB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1082832",
        "name": "Ryan Carlos",
        "position": "LB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "448468",
        "name": "Jefferson Encada",
        "position": "RB",
        "lastStatus": "starting"
      },
      {
        "id": "707350",
        "name": "Max Scholze",
        "position": "RB",
        "lastStatus": "bench"
      },
      {
        "id": "980575",
        "name": "Oumar Ngom",
        "position": "DM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "626854",
        "name": "Kevin Höög Jansson",
        "position": "DM",
        "lastStatus": "sub_in"
      },
      {
        "id": "1159661",
        "name": "Eddy Doué",
        "position": "DM",
        "lastStatus": "starting"
      },
      {
        "id": "375392",
        "name": "Paulo Moreira",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "1093626",
        "name": "Robinho",
        "position": "CM",
        "lastStatus": "sub_in"
      },
      {
        "id": "782889",
        "name": "Tom Moustier",
        "position": "CM",
        "lastStatus": "bench"
      },
      {
        "id": "1216111",
        "name": "Alex Sola",
        "position": "CM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "963316",
        "name": "Assane Ndiaye",
        "position": "CM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "547754",
        "name": "Ianis Stoica",
        "position": "LW",
        "lastStatus": "starting"
      },
      {
        "id": "448466",
        "name": "Jovane Cabral",
        "position": "LW",
        "lastStatus": "sub_in"
      },
      {
        "id": "1335777",
        "name": "Simão Pedro",
        "position": "LW",
        "lastStatus": "not_at_club"
      },
      {
        "id": "742454",
        "name": "Jorge Meireles",
        "position": "LW",
        "lastStatus": "sub_in"
      },
      {
        "id": "1270605",
        "name": "Alisson Souza",
        "position": "LW",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "742506",
        "name": "Fábio Ronaldo",
        "position": "RW",
        "lastStatus": "not_at_club"
      },
      {
        "id": "543051",
        "name": "Billal Brahimi",
        "position": "RW",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "699632",
        "name": "Abraham Marcus",
        "position": "RW",
        "lastStatus": "starting"
      },
      {
        "id": "1004346",
        "name": "Pape Führer",
        "position": "RW",
        "lastStatus": "not_included"
      },
      {
        "id": "439292",
        "name": "Sydney van Hooijdonk",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "383807",
        "name": "Kikas",
        "position": "CF",
        "lastStatus": "not_included"
      },
      {
        "id": "668277",
        "name": "Alan Godoy",
        "position": "CF",
        "lastStatus": "not_at_club"
      },
      {
        "id": "575715",
        "name": "João Resende",
        "position": "CF",
        "lastStatus": "not_at_club"
      },
      {
        "id": "826225",
        "name": "Gonzalo Calçada",
        "position": "CF",
        "lastStatus": "not_included"
      },
      {
        "id": "892926",
        "name": "Leandro Antonetti",
        "position": "CF",
        "lastStatus": "sub_in"
      },
      {
        "id": "1321718",
        "name": "João Gastão",
        "position": "CF",
        "lastStatus": "not_at_club"
      },
      {
        "id": "366278",
        "name": "Rodrigo Pinho",
        "position": "CF",
        "lastStatus": "absent"
      },
      {
        "id": "1433067",
        "name": "Henrique Poniewas",
        "position": "CF",
        "lastStatus": "not_in_squad"
      }
    ]
  },
  {
    "clubId": "fc-alverca",
    "club": "FC Alverca",
    "country": "Португалия",
    "league": "Primeira Liga",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/PO1/2025/fc-alverca.json",
    "scrapedAt": "2026-06-13T00:00:02.817096+00:00",
    "players": [
      {
        "id": "670710",
        "name": "André Gomes",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "629077",
        "name": "Matheus Mendes",
        "position": "GK",
        "lastStatus": "starting"
      },
      {
        "id": "647098",
        "name": "André Paulo",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "813121",
        "name": "Mateus",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "955253",
        "name": "Bastien Meupiyou",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "964591",
        "name": "Naves",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "1105188",
        "name": "Julián Martínez",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "988468",
        "name": "Steven Baseya",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "92947",
        "name": "Sergi Gómez",
        "position": "CB",
        "lastStatus": "bench"
      },
      {
        "id": "1082584",
        "name": "Talisca",
        "position": "CB",
        "lastStatus": "not_included"
      },
      {
        "id": "898721",
        "name": "Chissumba",
        "position": "LB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "746642",
        "name": "Isaac James",
        "position": "LB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "858252",
        "name": "Diogo Spencer",
        "position": "RB",
        "lastStatus": "starting"
      },
      {
        "id": "726721",
        "name": "Gonçalo Esteves",
        "position": "RB",
        "lastStatus": "not_included"
      },
      {
        "id": "1223074",
        "name": "Kauan",
        "position": "RB",
        "lastStatus": "sub_in"
      },
      {
        "id": "657429",
        "name": "Vasco Moreira",
        "position": "DM",
        "lastStatus": "sub_in"
      },
      {
        "id": "648812",
        "name": "Sabit Abdulai",
        "position": "DM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "646734",
        "name": "Tomás Mendes",
        "position": "DM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1082774",
        "name": "Amorim",
        "position": "CM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "638269",
        "name": "Rhaldney",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "1321322",
        "name": "Davy Gui",
        "position": "CM",
        "lastStatus": "sub_in"
      },
      {
        "id": "873528",
        "name": "Gian Cabezas",
        "position": "CM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "548332",
        "name": "Diogo Martins",
        "position": "CM",
        "lastStatus": "not_at_club"
      },
      {
        "id": "1245251",
        "name": "Zakaria Kassary",
        "position": "CM",
        "lastStatus": "bench"
      },
      {
        "id": "487180",
        "name": "Nabil Touaizi",
        "position": "RM",
        "lastStatus": "starting"
      },
      {
        "id": "1173903",
        "name": "Ikker Julian",
        "position": "LM",
        "lastStatus": "starting"
      },
      {
        "id": "351738",
        "name": "Lincoln",
        "position": "AM",
        "lastStatus": "starting"
      },
      {
        "id": "695454",
        "name": "Chiquinho",
        "position": "LW",
        "lastStatus": "starting"
      },
      {
        "id": "703324",
        "name": "Figueiredo",
        "position": "LW",
        "lastStatus": "starting"
      },
      {
        "id": "859923",
        "name": "Cédric Nuozzi",
        "position": "LW",
        "lastStatus": "bench"
      },
      {
        "id": "428954",
        "name": "Stéphane Diarra",
        "position": "RW",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "1070645",
        "name": "Fabrício Garcia",
        "position": "RW",
        "lastStatus": "sub_in"
      },
      {
        "id": "845568",
        "name": "Marko Milovanović",
        "position": "CF",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "969153",
        "name": "Mathis Clairicia",
        "position": "CF",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "923299",
        "name": "Felipe Lima",
        "position": "CF",
        "lastStatus": "sub_in"
      },
      {
        "id": "284739",
        "name": "Sandro Lima",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "696507",
        "name": "Tiago Leite",
        "position": "CF",
        "lastStatus": "not_at_club"
      }
    ]
  },
  {
    "clubId": "fc-arouca",
    "club": "FC Arouca",
    "country": "Португалия",
    "league": "Primeira Liga",
    "season": "2025/26",
    "source": "https://github.com/withqwerty/availability-data/blob/main/raw/PO1/2025/fc-arouca.json",
    "scrapedAt": "2026-06-13T00:04:37.583477+00:00",
    "players": [
      {
        "id": "367651",
        "name": "Ignacio de Arruabarrena",
        "position": "GK",
        "lastStatus": "starting"
      },
      {
        "id": "349536",
        "name": "Nico Mantl",
        "position": "GK",
        "lastStatus": "not_at_club"
      },
      {
        "id": "532900",
        "name": "João Valido",
        "position": "GK",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "912688",
        "name": "Jakub Vinarčík",
        "position": "GK",
        "lastStatus": "bench"
      },
      {
        "id": "609361",
        "name": "José Fontán",
        "position": "CB",
        "lastStatus": "absent"
      },
      {
        "id": "470796",
        "name": "Boris Popović",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "340853",
        "name": "Javi Sánchez",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "1036405",
        "name": "Omar Fayed",
        "position": "CB",
        "lastStatus": "starting"
      },
      {
        "id": "821824",
        "name": "Matías Rocha",
        "position": "CB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "670713",
        "name": "Diogo Monteiro",
        "position": "CB",
        "lastStatus": "sub_in"
      },
      {
        "id": "649087",
        "name": "Amadou Dante",
        "position": "LB",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "187188",
        "name": "Bas Kuipers",
        "position": "LB",
        "lastStatus": "starting"
      },
      {
        "id": "636697",
        "name": "Arnau Solà",
        "position": "LB",
        "lastStatus": "not_at_club"
      },
      {
        "id": "581121",
        "name": "Tiago Esgaio",
        "position": "RB",
        "lastStatus": "starting"
      },
      {
        "id": "1102159",
        "name": "José Silva",
        "position": "RB",
        "lastStatus": "bench"
      },
      {
        "id": "415645",
        "name": "Alex Pinto",
        "position": "RB",
        "lastStatus": "not_included"
      },
      {
        "id": "364237",
        "name": "Mamadou Loum",
        "position": "DM",
        "lastStatus": "not_included"
      },
      {
        "id": "868622",
        "name": "Taichi Fukui",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "607144",
        "name": "Espen van Ee",
        "position": "CM",
        "lastStatus": "starting"
      },
      {
        "id": "1061283",
        "name": "Mateo Flores",
        "position": "CM",
        "lastStatus": "sub_in"
      },
      {
        "id": "941869",
        "name": "Yellu Santiago",
        "position": "CM",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "657435",
        "name": "Pedro Santos",
        "position": "CM",
        "lastStatus": "sub_in"
      },
      {
        "id": "70359",
        "name": "David Simão",
        "position": "CM",
        "lastStatus": "not_included"
      },
      {
        "id": "709166",
        "name": "Hyun-ju Lee",
        "position": "AM",
        "lastStatus": "sub_in"
      },
      {
        "id": "622992",
        "name": "Pablo Gozálbez",
        "position": "AM",
        "lastStatus": "starting"
      },
      {
        "id": "594926",
        "name": "Naïs Djouahra",
        "position": "LW",
        "lastStatus": "starting"
      },
      {
        "id": "981058",
        "name": "Brian Mansilla",
        "position": "LW",
        "lastStatus": "bench"
      },
      {
        "id": "632901",
        "name": "Miguel Puche",
        "position": "LW",
        "lastStatus": "not_in_squad"
      },
      {
        "id": "741517",
        "name": "Alfonso Trezza",
        "position": "RW",
        "lastStatus": "starting"
      },
      {
        "id": "826719",
        "name": "Fally Mayulu",
        "position": "CF",
        "lastStatus": "bench"
      },
      {
        "id": "514514",
        "name": "Iván Barbero",
        "position": "CF",
        "lastStatus": "starting"
      },
      {
        "id": "862352",
        "name": "Dylan Nandín",
        "position": "CF",
        "lastStatus": "sub_in"
      },
      {
        "id": "662415",
        "name": "Vladislav Morozov",
        "position": "CF",
        "lastStatus": "not_at_club"
      },
      {
        "id": "832326",
        "name": "Romualdas Jansonas",
        "position": "CF",
        "lastStatus": "not_at_club"
      },
      {
        "id": "1454519",
        "name": "Batata",
        "position": "CF",
        "lastStatus": "not_in_squad"
      }
    ]
  }
];
export const squadSeason = '2025/26';
export const squadSource = 'https://github.com/withqwerty/availability-data';
