export type Club = {
  id: string;
  name: string;
  country: string;
  league: string;
  crestUrl: string;
  crestSource: string;
};

const crest = (id:number) => `https://crests.football-data.org/${id}.png`;
const source = 'https://www.football-data.org/';

export const clubs: Club[] = [
 {id:'arsenal',name:'Arsenal FC',country:'Англия',league:'Premier League',crestUrl:crest(57),crestSource:source},
 {id:'aston-villa',name:'Aston Villa FC',country:'Англия',league:'Premier League',crestUrl:crest(58),crestSource:source},
 {id:'chelsea',name:'Chelsea FC',country:'Англия',league:'Premier League',crestUrl:crest(61),crestSource:source},
 {id:'liverpool',name:'Liverpool FC',country:'Англия',league:'Premier League',crestUrl:crest(64),crestSource:source},
 {id:'man-city',name:'Manchester City FC',country:'Англия',league:'Premier League',crestUrl:crest(65),crestSource:source},
 {id:'man-united',name:'Manchester United FC',country:'Англия',league:'Premier League',crestUrl:crest(66),crestSource:source},
 {id:'tottenham',name:'Tottenham Hotspur FC',country:'Англия',league:'Premier League',crestUrl:crest(73),crestSource:source},
 {id:'barcelona',name:'FC Barcelona',country:'Испания',league:'La Liga',crestUrl:crest(81),crestSource:source},
 {id:'real-madrid',name:'Real Madrid CF',country:'Испания',league:'La Liga',crestUrl:crest(86),crestSource:source},
 {id:'atletico',name:'Atlético de Madrid',country:'Испания',league:'La Liga',crestUrl:crest(78),crestSource:source},
 {id:'bayern',name:'FC Bayern München',country:'Германия',league:'Bundesliga',crestUrl:crest(5),crestSource:source},
 {id:'dortmund',name:'Borussia Dortmund',country:'Германия',league:'Bundesliga',crestUrl:crest(4),crestSource:source},
 {id:'inter',name:'FC Internazionale Milano',country:'Италия',league:'Serie A',crestUrl:crest(108),crestSource:source},
 {id:'milan',name:'AC Milan',country:'Италия',league:'Serie A',crestUrl:crest(98),crestSource:source},
 {id:'juventus',name:'Juventus FC',country:'Италия',league:'Serie A',crestUrl:crest(109),crestSource:source},
 {id:'psg',name:'Paris Saint-Germain',country:'Франция',league:'Ligue 1',crestUrl:crest(524),crestSource:source},
 {id:'benfica',name:'SL Benfica',country:'Португалия',league:'Primeira Liga',crestUrl:crest(1903),crestSource:source},
 {id:'ajax',name:'AFC Ajax',country:'Нидерланды',league:'Eredivisie',crestUrl:crest(678),crestSource:source},
 {id:'brentford',name:'Brentford FC',country:'Англия',league:'Premier League',crestUrl:crest(402),crestSource:source},
 {id:'brighton',name:'Brighton & Hove Albion',country:'Англия',league:'Premier League',crestUrl:crest(397),crestSource:source},
 {id:'crystal-palace',name:'Crystal Palace FC',country:'Англия',league:'Premier League',crestUrl:crest(354),crestSource:source},
 {id:'everton',name:'Everton FC',country:'Англия',league:'Premier League',crestUrl:crest(62),crestSource:source},
 {id:'fulham',name:'Fulham FC',country:'Англия',league:'Premier League',crestUrl:crest(63),crestSource:source},
 {id:'newcastle',name:'Newcastle United FC',country:'Англия',league:'Premier League',crestUrl:crest(67),crestSource:source},
 {id:'west-ham',name:'West Ham United FC',country:'Англия',league:'Premier League',crestUrl:crest(563),crestSource:source},
 {id:'athletic-bilbao',name:'Athletic Club',country:'Испания',league:'La Liga',crestUrl:crest(77),crestSource:source},
 {id:'villarreal',name:'Villarreal CF',country:'Испания',league:'La Liga',crestUrl:crest(94),crestSource:source},
 {id:'real-sociedad',name:'Real Sociedad',country:'Испания',league:'La Liga',crestUrl:crest(92),crestSource:source},
 {id:'sevilla',name:'Sevilla FC',country:'Испания',league:'La Liga',crestUrl:crest(559),crestSource:source},
 {id:'valencia',name:'Valencia CF',country:'Испания',league:'La Liga',crestUrl:crest(95),crestSource:source},
 {id:'leverkusen',name:'Bayer 04 Leverkusen',country:'Германия',league:'Bundesliga',crestUrl:crest(3),crestSource:source},
 {id:'leipzig',name:'RB Leipzig',country:'Германия',league:'Bundesliga',crestUrl:crest(721),crestSource:source},
 {id:'frankfurt',name:'Eintracht Frankfurt',country:'Германия',league:'Bundesliga',crestUrl:crest(19),crestSource:source},
 {id:'stuttgart',name:'VfB Stuttgart',country:'Германия',league:'Bundesliga',crestUrl:crest(10),crestSource:source},
 {id:'freiburg',name:'SC Freiburg',country:'Германия',league:'Bundesliga',crestUrl:crest(17),crestSource:source},
 {id:'napoli',name:'SSC Napoli',country:'Италия',league:'Serie A',crestUrl:crest(113),crestSource:source},
 {id:'roma',name:'AS Roma',country:'Италия',league:'Serie A',crestUrl:crest(100),crestSource:source},
 {id:'lazio',name:'SS Lazio',country:'Италия',league:'Serie A',crestUrl:crest(110),crestSource:source},
 {id:'atalanta',name:'Atalanta BC',country:'Италия',league:'Serie A',crestUrl:crest(102),crestSource:source},
 {id:'bologna',name:'Bologna FC 1909',country:'Италия',league:'Serie A',crestUrl:crest(103),crestSource:source},
 {id:'fiorentina',name:'ACF Fiorentina',country:'Италия',league:'Serie A',crestUrl:crest(99),crestSource:source},
 {id:'marseille',name:'Olympique de Marseille',country:'Франция',league:'Ligue 1',crestUrl:crest(516),crestSource:source},
 {id:'lyon',name:'Olympique Lyonnais',country:'Франция',league:'Ligue 1',crestUrl:crest(523),crestSource:source},
 {id:'monaco',name:'AS Monaco',country:'Франция',league:'Ligue 1',crestUrl:crest(548),crestSource:source},
 {id:'lille',name:'LOSC Lille',country:'Франция',league:'Ligue 1',crestUrl:crest(521),crestSource:source},
 {id:'rennes',name:'Stade Rennais FC',country:'Франция',league:'Ligue 1',crestUrl:crest(529),crestSource:source},
 {id:'sporting',name:'Sporting CP',country:'Португалия',league:'Primeira Liga',crestUrl:crest(498),crestSource:source},
 {id:'porto',name:'FC Porto',country:'Португалия',league:'Primeira Liga',crestUrl:crest(503),crestSource:source},
 {id:'braga',name:'SC Braga',country:'Португалия',league:'Primeira Liga',crestUrl:crest(5613),crestSource:source},
 {id:'psv',name:'PSV',country:'Нидерланды',league:'Eredivisie',crestUrl:crest(674),crestSource:source},
 {id:'feyenoord',name:'Feyenoord',country:'Нидерланды',league:'Eredivisie',crestUrl:crest(675),crestSource:source}
];
