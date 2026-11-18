import { useMemo, useState } from 'react';
import { Search, Database, ShieldCheck, ExternalLink } from 'lucide-react';
import { leagues, leagueSources } from '../data/leagues';
import { clubs } from '../data/clubs';

export default function DatabasePage() {
 const [query,setQuery]=useState('');
 const [country,setCountry]=useState('Все страны');
 const [kind,setKind]=useState<'leagues'|'clubs'>('leagues');
 const countries=useMemo(()=>['Все страны',...Array.from(new Set(leagues.map(l=>l.country))).sort((a,b)=>a.localeCompare(b,'ru'))],[ ]);
 const filteredLeagues=leagues.filter(l=>(country==='Все страны'||l.country===country)&&(`${l.name} ${l.country}`.toLowerCase().includes(query.toLowerCase())));
 const filteredClubs=clubs.filter(c=>(country==='Все страны'||c.country===country)&&(`${c.name} ${c.country} ${c.league}`.toLowerCase().includes(query.toLowerCase())));
 return <section className="panel database-panel">
  <div className="panel-title"><div><span className="eyebrow">СПРАВОЧНИК ФУТБОЛА</span><h3>Реальные лиги и клубы</h3></div><span className="live-tag"><Database size={12}/> DATA HUB</span></div>
  <p className="muted">Каталог национальных дивизионов UEFA и отдельная структура российского футбола. Состав участников и футболисты будут подключаться к клубам по сезонам из проверяемых источников.</p>
  <div className="database-controls"><div className="database-search"><Search size={15}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Поиск страны, лиги или клуба"/></div><select value={country} onChange={e=>setCountry(e.target.value)}>{countries.map(c=><option key={c}>{c}</option>)}</select></div>
  <div className="database-tabs"><button className={kind==='leagues'?'selected':''} onClick={()=>setKind('leagues')}>Лиги ({filteredLeagues.length})</button><button className={kind==='clubs'?'selected':''} onClick={()=>setKind('clubs')}>Клубы ({filteredClubs.length})</button></div>
  {kind==='leagues'?<div className="database-list">{filteredLeagues.map(l=><article className="database-row" key={l.id}><div className="country-flag">{l.countryCode}</div><div className="database-row-main"><b>{l.name}</b><small>{l.country} · уровень {l.tier}</small></div><span className={l.status==='professional'?'status-pro':'status-other'}>{l.status==='professional'?'Профессиональная':l.status==='semi-professional'?'Полупрофессиональная':'Любительская'}</span><a href={l.source} target="_blank" rel="noreferrer" aria-label="Источник"><ExternalLink size={14}/></a></article>)}</div>:<div className="database-list">{filteredClubs.map(c=><article className="database-row club-row" key={c.id}><img src={c.crestUrl} alt="" loading="lazy" onError={e=>{e.currentTarget.style.visibility='hidden';}}/><div className="database-row-main"><b>{c.name}</b><small>{c.country} · {c.league}</small></div><a href={c.crestSource} target="_blank" rel="noreferrer" aria-label="Источник эмблемы"><ExternalLink size={14}/></a></article>)}</div>}
  <div className="database-sources"><b><ShieldCheck size={14}/> Источники и происхождение данных</b>{leagueSources.map(s=><a href={s.url} target="_blank" rel="noreferrer" key={s.name}>{s.name} <ExternalLink size={12}/></a>)}</div>
 </section>;
}
