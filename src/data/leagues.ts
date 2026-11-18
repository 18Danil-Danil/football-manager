export type League = {
  id: string;
  country: string;
  countryCode: string;
  name: string;
  tier: number;
  status: 'professional' | 'semi-professional' | 'amateur';
  source: string;
};

const uefa = 'https://www.uefa.com/nationalassociations/leaguesandcups/';
const rfs = 'https://www.rfs.ru/subject/1/documents';

const rows: Array<[string,string,string[]]> = [
 ['ALB','Албания',['Kategoria Superiore','Kategoria e Parë']],
 ['AND','Андорра',['Primera Divisió','Segona Divisió']],
 ['ARM','Армения',['Armenian Premier League','First League']],
 ['AUT','Австрия',['Austrian Bundesliga','2. Liga','Regionalliga']],
 ['AZE','Азербайджан',['Azerbaijan Premier League','First Division']],
 ['BLR','Беларусь',['В высшая лига','Первая лига','Вторая лига']],
 ['BEL','Бельгия',['Belgian Pro League','Challenger Pro League','National Division 1']],
 ['BIH','Босния и Герцеговина',['Premijer Liga','First League of FBiH','First League of Republika Srpska']],
 ['BUL','Болгария',['First Professional League','Second Professional League','Third League']],
 ['CRO','Хорватия',['HNL','Prva NL','Druga NL']],
 ['CYP','Кипр',['Cypriot First Division','Second Division','Third Division']],
 ['CZE','Чехия',['Czech First League','National Football League','Bohemian Football League']],
 ['DEN','Дания',['Danish Superliga','1st Division','2nd Division']],
 ['ENG','Англия',['Premier League','EFL Championship','EFL League One','EFL League Two','National League','National League North','National League South']],
 ['EST','Эстония',['Meistriliiga','Esiliiga','Esiliiga B']],
 ['FRO','Фарерские острова',['Faroe Islands Premier League','1. deild','2. deild']],
 ['FIN','Финляндия',['Veikkausliiga','Ykkösliiga','Ykkönen','Kakkonen']],
 ['FRA','Франция',['Ligue 1','Ligue 2','Championnat National','National 2','National 3']],
 ['GEO','Грузия',['Erovnuli Liga','Erovnuli Liga 2','Liga 3']],
 ['GER','Германия',['Bundesliga','2. Bundesliga','3. Liga','Regionalliga']],
 ['GIB','Гибралтар',['Gibraltar Football League']],
 ['GRE','Греция',['Super League Greece','Super League 2','Gamma Ethniki']],
 ['HUN','Венгрия',['Nemzeti Bajnokság I','Nemzeti Bajnokság II','Nemzeti Bajnokság III']],
 ['ISL','Исландия',['Besta deild karla','1. deild karla','2. deild karla','3. deild karla']],
 ['ISR','Израиль',['Israeli Premier League','Liga Leumit','Liga Alef']],
 ['ITA','Италия',['Serie A','Serie B','Serie C','Serie D']],
 ['KAZ','Казахстан',['Kazakhstan Premier League','First League','Second League']],
 ['KOS','Косово',['Football Superleague of Kosovo','First Football League']],
 ['LVA','Латвия',['Virslīga','1. līga','2. līga']],
 ['LIE','Лихтенштейн',['Swiss league system (Liechtenstein clubs)','Liechtenstein Cup']],
 ['LTU','Литва',['A Lyga','I Lyga','II Lyga']],
 ['LUX','Люксембург',['National Division','Promotion d’Honneur','1. Division']],
 ['MLT','Мальта',['Maltese Premier League','Challenge League','National Amateur League']],
 ['MDA','Молдова',['Moldovan Super Liga','Liga 1','Liga 2']],
 ['MNE','Черногория',['Montenegrin First League','Second League','Third League']],
 ['NED','Нидерланды',['Eredivisie','Eerste Divisie','Tweede Divisie','Derde Divisie']],
 ['MKD','Северная Македония',['Macedonian First League','Macedonian Second League']],
 ['NIR','Северная Ирландия',['NIFL Premiership','NIFL Championship','Premier Intermediate League']],
 ['NOR','Норвегия',['Eliteserien','1. divisjon','2. divisjon','3. divisjon']],
 ['POL','Польша',['Ekstraklasa','I liga','II liga','III liga']],
 ['POR','Португалия',['Primeira Liga','Liga Portugal 2','Liga 3','Campeonato de Portugal']],
 ['IRL','Ирландия',['League of Ireland Premier Division','First Division']],
 ['ROU','Румыния',['Liga I','Liga II','Liga III']],
 ['RUS','Россия',['Российская Премьер-лига','Первая лига','Вторая лига — Дивизион А','Вторая лига — Дивизион Б','Третья лига (межрегиональные зоны)','Региональные чемпионаты и первенства']],
 ['SMR','Сан-Марино',['Campionato Sammarinese']],
 ['SCO','Шотландия',['Scottish Premiership','Scottish Championship','League One','League Two','Highland League','Lowland League']],
 ['SRB','Сербия',['Serbian SuperLiga','Prva Liga','Srpska Liga']],
 ['SVK','Словакия',['Niké Liga','2. Liga','3. Liga']],
 ['SVN','Словения',['PrvaLiga','2. SNL','3. SNL']],
 ['ESP','Испания',['La Liga','La Liga 2','Primera Federación','Segunda Federación','Tercera Federación']],
 ['SWE','Швеция',['Allsvenskan','Superettan','Ettan','Division 2']],
 ['SUI','Швейцария',['Swiss Super League','Challenge League','Promotion League','1. Liga']],
 ['TUR','Турция',['Süper Lig','1. Lig','2. Lig','3. Lig']],
 ['UKR','Украина',['Ukrainian Premier League','Persha Liha','Druha Liha']],
 ['WAL','Уэльс',['Cymru Premier','Cymru North','Cymru South']]
];

export const leagues: League[] = rows.flatMap(([countryCode,country,names]) =>
  names.map((name,index) => ({
    id: countryCode.toLowerCase() + '-' + (index+1),
    country, countryCode, name, tier:index+1,
    status: countryCode === 'RUS' && index >= 4 ? 'amateur'
      : (index < (countryCode==='ENG'?5:countryCode==='GER'||countryCode==='ITA'||countryCode==='ESP'||countryCode==='FRA'?3:countryCode==='RUS'?4:2) ? 'professional' : 'semi-professional'),
    source: countryCode === 'RUS' ? rfs : uefa
  }))
);

export const leagueSources = [
  {name:'RSSSF — Россия 2026/27: РПЛ, Первая лига и Вторая лига А',url:'https://www.rsssf.org/tablesr/rus2027.html'},
  {name:'RSSSF — Россия 2026: Вторая лига Б и Третья лига',url:'https://www.rsssf.org/tablesr/rus2026b.html'},
  {name:'Stat-Football — таблицы российских лиг 2026/27',url:'https://www.stat-football.com/en/t/rus20.php'},
  {name:'UEFA — национальные лиги и кубки',url:uefa},
  {name:'РФС — регламенты соревнований',url:rfs},
  {name:'OpenFootball — открытые данные',url:'https://github.com/openfootball'},
  {name:'Reep — открытый реестр футбольных сущностей (CC0)',url:'https://github.com/withqwerty/reep'}
];
