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
 {id:'ajax',name:'AFC Ajax',country:'Нидерланды',league:'Eredivisie',crestUrl:crest(678),crestSource:source}
];
