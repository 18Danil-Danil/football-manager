import { useEffect, useMemo, useState } from 'react';
import { Activity, ArrowUpRight, CalendarDays, ChevronRight, CircleDollarSign, ClipboardList, Shield, Trophy, Users, Play, Database } from 'lucide-react';
import DatabasePage from './components/Database';
import { clubs } from './data/clubs';
import { leagues } from './data/leagues';
import { squads } from './data/squads';

type Player = { id: number; name: string; position: string; age: number; rating: number; fitness: number; morale: number; };
type Save = { players: Player[]; formation: string; played: number; wins: number; draws: number; losses: number; points: number; lastResult: string; clubId?: string; league?: string; country?: string; };
const initialPlayers: Player[] = [
  {id:1,name:'Артём Волков',position:'ВРТ',age:26,rating:78,fitness:96,morale:82},
  {id:2,name:'Марк Соколов',position:'ЦЗ',age:24,rating:76,fitness:91,morale:78},
  {id:3,name:'Даниил Морозов',position:'ЦЗ',age:29,rating:74,fitness:88,morale:80},
  {id:4,name:'Илья Ковалёв',position:'ПЗ',age:22,rating:73,fitness:94,morale:84},
  {id:5,name:'Никита Орлов',position:'ЛЗ',age:25,rating:75,fitness:90,morale:79},
  {id:6,name:'Егор Павлов',position:'ЦОП',age:27,rating:79,fitness:92,morale:86},
  {id:7,name:'Лев Андреев',position:'ЦП',age:23,rating:77,fitness:95,morale:83},
  {id:8,name:'Тимур Егоров',position:'ЦАП',age:21,rating:80,fitness:89,morale:88},
  {id:9,name:'Максим Беляев',position:'ПВ',age:24,rating:81,fitness:93,morale:85},
  {id:10,name:'Роман Фёдоров',position:'ЛВ',age:22,rating:78,fitness:97,morale:81},
  {id:11,name:'Алексей Миронов',position:'НАП',age:28,rating:83,fitness:87,morale:90},
  {id:12,name:'Павел Громов',position:'ЦЗ',age:20,rating:69,fitness:98,morale:75},
  {id:13,name:'Кирилл Зайцев',position:'ЦП',age:19,rating:71,fitness:96,morale:80},
  {id:14,name:'Матвей Никитин',position:'НАП',age:25,rating:72,fitness:92,morale:77},
  {id:15,name:'Сергей Лебедев',position:'ВРТ',age:31,rating:70,fitness:99,morale:79}
];
const defaults: Save = {players:initialPlayers,formation:'4-3-3',played:0,wins:0,draws:0,losses:0,points:0,lastResult:'—',clubId:'nord-club',league:'Премьер-лига',country:'Россия'};
const formations = ['4-3-3','4-4-2','4-2-3-1','3-5-2'];
const nav = [{label:'Обзор',icon:Activity},{label:'Состав',icon:Users},{label:'Тактика',icon:ClipboardList},{label:'Календарь',icon:CalendarDays},{label:'Трансферы',icon:ArrowUpRight},{label:'База данных',icon:Database}];
function loadSave(): Save {
  try { const raw=localStorage.getItem('touchline-save-v1'); if(raw){const parsed=JSON.parse(raw) as Save; if(parsed.players?.length===15)return parsed;} } catch { /* use fresh career */ }
  return defaults;
}
export default function App() {
  const [active,setActive]=useState('Обзор');
  const [careerStarted,setCareerStarted]=useState(()=>localStorage.getItem('touchline-career-started')==='yes' || Boolean(localStorage.getItem('touchline-save-v1')));
  const [pickCountry,setPickCountry]=useState('Англия');
  const [pickLeague,setPickLeague]=useState('Premier League');
  const [pickClub,setPickClub]=useState('arsenal');
  const [save,setSave]=useState<Save>(loadSave);
  const [message,setMessage]=useState('');
  const [opponent,setOpponent]=useState('Столичный ФК');
  const currentClub=clubs.find(c=>c.id===save.clubId);
  const clubName=currentClub?.name || 'Норд Клуб';
  const availableLeagues=leagues.filter(l=>l.country===pickCountry);
  const availableClubs=clubs.filter(c=>c.country===pickCountry && c.league===pickLeague);
  const startCareer=()=>{
    const club=clubs.find(c=>c.id===pickClub);
    if(!club)return;
    const archived=squads.find(x=>x.clubId===club.id);
    const positions:Record<string,string>={GK:'ВРТ',CB:'ЦЗ',LB:'ЛЗ',RB:'ПЗ',DM:'ЦОП',CM:'ЦП',AM:'ЦАП',LW:'ЛВ',RW:'ПВ',CF:'НАП'};
    const players=archived?.players.slice(0,15).map((p,i)=>({id:i+1,name:p.name,position:positions[p.position]||'ЦП',age:20+(i%12),rating:68+(i*7%17),fitness:92-(i%8),morale:75+(i%20)})) || initialPlayers;
    setSave({...defaults,players,clubId:club.id,league:club.league,country:club.country});
    localStorage.setItem('touchline-career-started','yes');
    setCareerStarted(true);setActive('Обзор');setMessage(`Карьера начата: ${club.name}. ${archived?'Использован архивный список игроков сезона 2025/26.':'Для клуба пока нет загруженного архива состава; создан игровой состав.'}`);
  };
  useEffect(()=>{localStorage.setItem('touchline-save-v1',JSON.stringify(save));},[save]);
  const starters=save.players.slice(0,11);
  const average=Math.round(starters.reduce((n,p)=>n+p.rating,0)/11);
  const avgFitness=Math.round(starters.reduce((n,p)=>n+p.fitness,0)/11);
  const playMatch=()=>{
    const strength=starters.reduce((n,p)=>n+p.rating*(p.fitness/100),0)/11;
    const homeGoals=Math.max(0,Math.round(Math.random()*2.2+(strength-73)*.13+Math.random()));
    const awayGoals=Math.max(0,Math.round(Math.random()*2.1+Math.random()*.8));
    const result=homeGoals>awayGoals?'Победа':homeGoals===awayGoals?'Ничья':'Поражение';
    setSave(s=>({...s,played:s.played+1,wins:s.wins+(result==='Победа'?1:0),draws:s.draws+(result==='Ничья'?1:0),losses:s.losses+(result==='Поражение'?1:0),points:s.points+(result==='Победа'?3:result==='Ничья'?1:0),lastResult:`${homeGoals} : ${awayGoals}`,players:s.players.map(p=>({...p,fitness:Math.max(45,p.fitness-(p.id<=11?12:3)),morale:Math.min(100,Math.max(45,p.morale+(result==='Победа'?5:result==='Ничья'?1:-4)))}))}));
    setMessage(`${result}! ${clubName} ${homeGoals} : ${awayGoals} ${opponent}. Результат сохранён в карьере.`);
    setActive('Обзор');
  };
  const reset=()=>{if(confirm('Начать новую карьеру? Текущий прогресс будет удалён.')){setSave(defaults);setMessage('Новая карьера начата.');}};
  const updatePlayer=(id:number,field:'position',value:string)=>setSave(s=>({...s,players:s.players.map(p=>p.id===id?{...p,[field]:value}:p)}));
  const table=useMemo(()=>[['1','Атлетик Сити','28'],['2','Роял Юнайтед','26'],['3','ФК Восток','25'],['4',clubName,String(save.points)],['5','Столичный ФК','21']], [save.points]);
  if(!careerStarted) return <div className="career-start"><div className="career-start-card"><div className="brand-mark"><Shield size={24}/></div><span className="eyebrow">TOUCHLINE · НОВАЯ КАРЬЕРА</span><h1>Выбери свой клуб.</h1><p className="muted">Определи страну, чемпионат и команду, которой будешь управлять. Архивные составы доступны там, где собраны открытые данные.</p><label className="field-label">СТРАНА<select value={pickCountry} onChange={e=>{const c=e.target.value;setPickCountry(c);const first=leagues.find(l=>l.country===c);if(first)setPickLeague(first.name);const club=clubs.find(x=>x.country===c);if(club){setPickLeague(club.league);setPickClub(club.id);}}}>{Array.from(new Set(clubs.map(c=>c.country))).sort((a,b)=>a.localeCompare(b,'ru')).map(c=><option key={c}>{c}</option>)}</select></label><label className="field-label">ЛИГА<select value={pickLeague} onChange={e=>{setPickLeague(e.target.value);const club=clubs.find(x=>x.country===pickCountry&&x.league===e.target.value);if(club)setPickClub(club.id);}}>{Array.from(new Set(clubs.filter(c=>c.country===pickCountry).map(c=>c.league))).map(l=><option key={l}>{l}</option>)}</select></label><label className="field-label">КЛУБ<select value={pickClub} onChange={e=>setPickClub(e.target.value)}>{availableClubs.map(c=><option key={c.id} value={c.id}>{c.name}</option>)}</select></label>{availableClubs.length===0&&<p className="selection-warning">В этом дивизионе пока нет клубов в игровой базе. Выбери лигу с доступными командами.</p>}<button className="primary-button" disabled={!availableClubs.some(c=>c.id===pickClub)} onClick={startCareer}>Начать карьеру <ChevronRight size={16}/></button><p className="selection-footnote">База клубов и архивов неполная. Отсутствие команды в списке не означает, что её нет в реальном чемпионате.</p></div></div>;
  return <div className="app-shell">
    <aside className="sidebar">
      <div className="brand"><div className="brand-mark"><Shield size={22}/></div><div><strong>TOUCHLINE</strong><span>FOOTBALL DIRECTOR</span></div></div>
      <div className="club-switch"><div className="club-crest">{clubName.slice(0,2).toUpperCase()}</div><div><b>{clubName}</b><small>{save.league || 'Премьер-лига'} · карьера</small></div><ChevronRight size={16}/></div>
      <span className="nav-caption">МЕНЮ КЛУБА</span>
      <nav>{nav.map(({label,icon:Icon})=><button key={label} className={active===label?'nav-item active':'nav-item'} onClick={()=>{setActive(label);setMessage('');}}><Icon size={18}/>{label}{active===label&&<i/>}</button>)}</nav>
      <div className="sidebar-bottom"><div className="season-card"><span>СЕЗОН 2026/27</span><b>{clubName}</b><small>Построй команду, которая войдёт в историю.</small></div><div className="manager"><div className="avatar">Д</div><div><b>Главный тренер</b><small>Менеджер клуба</small></div><span className="online-dot"/></div></div>
    </aside>
    <main className="main-content">
      <header className="topbar"><div><span className="eyebrow">КАРЬЕРА · {clubName.toUpperCase()}</span><h1>{active==='Обзор'?'Панель управления':active}</h1></div><div className="top-actions"><span className="season-pill">ТУР {save.played+1}</span><button className="next-day" onClick={playMatch}><Play size={14}/> Играть матч</button></div></header>
      {message&&<div className="notice">{message}</div>}
      {active==='Обзор'&&<>
        <section className="welcome-row"><div><p className="eyebrow">ТВОЯ КОМАНДА · ДОБРО ПОЖАЛОВАТЬ</p><h2>Время строить<br/><em>свою историю.</em></h2><p className="muted">Управляй составом, выбирай тактику и веди клуб к победам.</p></div><div className="hero-crest"><div className="crest-ring"><Shield size={54}/><b>{clubName.slice(0,2).toUpperCase()}</b></div><span>{clubName.toUpperCase()}</span></div></section>
        <section className="stats-grid">
          <article className="stat-card"><div className="stat-head"><span>ОЧКИ В ЛИГЕ</span><Trophy size={17}/></div><div className="stat-value">{save.points}<small> очков</small></div><div className="stat-foot positive">{save.wins} побед · {save.draws} ничьих · {save.losses} поражений</div></article>
          <article className="stat-card"><div className="stat-head"><span>БЮДЖЕТ ТРАНСФЕРОВ</span><CircleDollarSign size={17}/></div><div className="stat-value">€12.4<small> млн</small></div><div className="stat-foot">Доступно для сделок</div></article>
          <article className="stat-card"><div className="stat-head"><span>СИЛА СОСТАВА</span><Activity size={17}/></div><div className="stat-value">{average}<small> / 100</small></div><div className="stat-foot positive">Средний рейтинг стартового состава</div></article>
          <article className="stat-card"><div className="stat-head"><span>ФИЗИЧЕСКАЯ ФОРМА</span><Users size={17}/></div><div className="stat-value">{avgFitness}<small>%</small></div><div className="morale-bar"><i style={{width:`${avgFitness}%`}}/></div><div className="stat-foot">Средняя готовность игроков</div></article>
        </section>
        <section className="content-grid">
          <article className="panel next-match"><div className="panel-title"><div><span className="eyebrow">СЛЕДУЮЩИЙ МАТЧ</span><h3>Матч чемпионата</h3></div><span className="live-tag">ЛИГА</span></div><div className="match-date">СЛЕДУЮЩИЙ ТУР · ДОМА</div><div className="match-teams"><div className="team"><div className="team-badge home">{clubName.slice(0,2).toUpperCase()}</div><b>{clubName}</b><small>Хозяева</small></div><div className="versus">VS</div><div className="team"><div className="team-badge away">СК</div><b>{opponent}</b><small>Гости</small></div></div><label className="field-label">СОПЕРНИК<select value={opponent} onChange={e=>setOpponent(e.target.value)}><option>Столичный ФК</option><option>Атлетик Сити</option><option>Роял Юнайтед</option><option>ФК Восток</option></select></label><button className="primary-button" onClick={playMatch}>Провести матч <ChevronRight size={16}/></button></article>
          <article className="panel table-panel"><div className="panel-title"><div><span className="eyebrow">ТАБЛИЦА СИМУЛЯЦИИ</span><h3>{save.league || 'Премьер-лига'}</h3></div><span className="live-tag">ТОП-5</span></div><div className="league-row header"><span>КЛУБ</span><span>И</span><span>О</span></div>{table.map(([pos,name,points])=><div className={name===clubName?'league-row current':'league-row'} key={pos}><span><i>{pos}</i>{name}</span><span>{name==='Норд Клуб'?save.played:11}</span><b>{points}</b></div>)}</article>
        </section>
        <section className="panel squad-panel"><div className="panel-title"><div><span className="eyebrow">ПЕРВАЯ КОМАНДА</span><h3>Ключевые игроки</h3></div><button className="text-button" onClick={()=>setActive('Состав')}>Весь состав <ChevronRight size={14}/></button></div><div className="player-grid">{starters.slice(0,5).map(p=><div className="player-card" key={p.id}><div className="player-avatar">{p.name.split(' ').map(s=>s[0]).join('')}</div><div className="player-info"><b>{p.name}</b><small>{p.position} · {p.age} лет</small></div><strong>{p.rating}</strong><span className="rating-label">РЕЙТ.</span></div>)}</div><div className="last-result">ПОСЛЕДНИЙ РЕЗУЛЬТАТ <b>{save.lastResult}</b></div></section>
      </>}
      {active==='Состав'&&<section className="panel placeholder-panel"><span className="eyebrow">ПЕРВАЯ КОМАНДА · {save.players.length} ИГРОКОВ</span><h2>Состав клуба</h2><p className="muted">Первые 11 игроков выходят в стартовом составе. Возраст и игровые рейтинги в режиме карьеры — условные параметры симуляции, не реальные спортивные оценки.</p><div className="roster-list">{save.players.map((p,i)=><div key={p.id} className={i<11?'starter-row':''}><span>{i<11?'СТАРТ':'ЗАПАС'}</span><b>{p.name}</b><small>{p.age} лет</small><strong>{p.rating}</strong><select value={p.position} onChange={e=>updatePlayer(p.id,'position',e.target.value)} aria-label={`Позиция: ${p.name}`}>{['ВРТ','ЦЗ','ПЗ','ЛЗ','ЦОП','ЦП','ЦАП','ПВ','ЛВ','НАП'].map(pos=><option key={pos}>{pos}</option>)}</select><small className="fitness">Форма {p.fitness}%</small></div>)}</div></section>}
      {active==='Тактика'&&<section className="panel placeholder-panel"><span className="eyebrow">ПЛАН НА МАТЧ</span><h2>Тактическая схема</h2><p className="muted">Схема влияет на распределение ролей. Выбери расстановку перед следующим матчем.</p><div className="formation-picker">{formations.map(f=><button key={f} className={save.formation===f?'formation active':'formation'} onClick={()=>setSave(s=>({...s,formation:f}))}>{f}</button>)}</div><div className="pitch"><div className="pitch-line"/><div className="pitch-circle"/><div className="pitch-players">{['ВРТ',...(save.formation==='4-4-2'?['ЗЩ','ЗЩ','ЗЩ','ЗЩ','ПЗ','ЦП','ЦП','ЛЗ','НАП','НАП']:save.formation==='3-5-2'?['ЗЩ','ЗЩ','ЗЩ','ПЗ','ЦП','ЦП','ЦП','ЛЗ','НАП','НАП']:save.formation==='4-2-3-1'?['ЗЩ','ЗЩ','ЗЩ','ЗЩ','ЦОП','ЦОП','ПВ','ЦАП','ЛВ','НАП']:['ЗЩ','ЗЩ','ЗЩ','ЗЩ','ЦОП','ЦП','ЦАП','ПВ','ЛВ','НАП'])].map((p,i)=><span key={i}>{p}</span>)}</div></div><p className="muted">Средний рейтинг стартовых 11: <b>{average}</b> · Физическая готовность: <b>{avgFitness}%</b></p></section>}
      {active==='Календарь'&&<section className="panel placeholder-panel"><span className="eyebrow">СЕЗОН КАРЬЕРЫ</span><h2>Календарь и результаты</h2><div className="schedule-row"><span>Предыдущий матч</span><b>{save.lastResult}</b></div><div className="schedule-row"><span>Следующий тур</span><b>{clubName} — {opponent}</b></div><button className="primary-button calendar-play" onClick={playMatch}>Сыграть следующий матч <Play size={15}/></button></section>}
      {active==='База данных'&&<DatabasePage/>}
      {active==='Трансферы'&&<section className="panel placeholder-panel"><span className="eyebrow">ТРАНСФЕРНЫЙ РЫНОК</span><h2>Трансферы</h2><p className="muted">Трансферный бюджет клуба: €12.4 млн. Рынок игроков будет добавлен в следующем обновлении.</p></section>}
      <footer>TOUCHLINE <span>·</span> FOOTBALL DIRECTOR <span className="footer-right">BUILD 0.2.0 · CAREER AUTOSAVE</span></footer>
    </main>
  </div>;
}
