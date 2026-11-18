import { useState } from 'react';
import { Activity, ArrowDownRight, ArrowUpRight, CalendarDays, ChevronRight, CircleDollarSign, ClipboardList, Shield, Trophy, Users } from 'lucide-react';

type Player = { name: string; position: string; age: number; rating: number; };
const initialPlayers: Player[] = [
  { name: 'Артём Волков', position: 'ВРТ', age: 26, rating: 78 },
  { name: 'Марк Соколов', position: 'ЦЗ', age: 24, rating: 76 },
  { name: 'Даниил Морозов', position: 'ЦЗ', age: 29, rating: 74 },
  { name: 'Илья Ковалёв', position: 'ПЗ', age: 22, rating: 73 },
  { name: 'Никита Орлов', position: 'ЛЗ', age: 25, rating: 75 },
  { name: 'Егор Павлов', position: 'ЦОП', age: 27, rating: 79 },
  { name: 'Лев Андреев', position: 'ЦП', age: 23, rating: 77 },
  { name: 'Тимур Егоров', position: 'ЦАП', age: 21, rating: 80 },
  { name: 'Максим Беляев', position: 'ПВ', age: 24, rating: 81 },
  { name: 'Роман Фёдоров', position: 'ЛВ', age: 22, rating: 78 },
  { name: 'Алексей Миронов', position: 'НАП', age: 28, rating: 83 }
];

const nav = [
  { label: 'Обзор', icon: Activity },
  { label: 'Состав', icon: Users },
  { label: 'Тактика', icon: ClipboardList },
  { label: 'Календарь', icon: CalendarDays },
  { label: 'Трансферы', icon: ArrowUpRight }
];

export default function App() {
  const [active, setActive] = useState('Обзор');
  const [players] = useState(initialPlayers);
  const [played, setPlayed] = useState(false);

  return <div className="app-shell">
    <aside className="sidebar">
      <div className="brand"><div className="brand-mark"><Shield size={22}/></div><div><strong>TOUCHLINE</strong><span>FOOTBALL DIRECTOR</span></div></div>
      <div className="club-switch"><div className="club-crest">НК</div><div><b>Норд Клуб</b><small>Премьер-лига · 2026/27</small></div><ChevronRight size={16}/></div>
      <span className="nav-caption">МЕНЮ КЛУБА</span>
      <nav>{nav.map(({label, icon: Icon}) => <button key={label} className={active === label ? 'nav-item active' : 'nav-item'} onClick={() => setActive(label)}><Icon size={18}/>{label}{active === label && <i/>}</button>)}</nav>
      <div className="sidebar-bottom"><div className="season-card"><span>СЕЗОН 2026/27</span><b>Новая глава начинается.</b><small>Построй команду, которая войдёт в историю.</small></div><div className="manager"><div className="avatar">Д</div><div><b>Главный тренер</b><small>Менеджер клуба</small></div><span className="online-dot"/></div></div>
    </aside>
    <main className="main-content">
      <header className="topbar"><div><span className="eyebrow">СРЕДА, 18 НОЯБРЯ 2026</span><h1>{active === 'Обзор' ? 'Панель управления' : active}</h1></div><div className="top-actions"><span className="season-pill">СЕЗОН 26/27</span><button className="next-day" onClick={() => setPlayed(!played)}>{played ? 'День завершён' : 'Продолжить день'} <ChevronRight size={16}/></button></div></header>
      {active === 'Обзор' ? <>
        <section className="welcome-row"><div><p className="eyebrow">ТВОЯ КОМАНДА · ДОБРО ПОЖАЛОВАТЬ</p><h2>Время строить<br/><em>свою историю.</em></h2><p className="muted">Каждое решение приближает клуб к вершине.</p></div><div className="hero-crest"><div className="crest-ring"><Shield size={54}/><b>НК</b></div><span>NORD CLUB</span></div></section>
        <section className="stats-grid">
          <article className="stat-card"><div className="stat-head"><span>ПОЗИЦИЯ В ЛИГЕ</span><Trophy size={17}/></div><div className="stat-value">4<small> / 16</small></div><div className="stat-foot positive"><ArrowUpRight size={14}/> +2 за последние 5 туров</div></article>
          <article className="stat-card"><div className="stat-head"><span>БЮДЖЕТ ТРАНСФЕРОВ</span><CircleDollarSign size={17}/></div><div className="stat-value">€12.4<small> млн</small></div><div className="stat-foot">Доступно для сделок</div></article>
          <article className="stat-card"><div className="stat-head"><span>ФОРМА КОМАНДЫ</span><Activity size={17}/></div><div className="stat-value">86<small>%</small></div><div className="stat-foot positive"><ArrowUpRight size={14}/> Отличное состояние</div></article>
          <article className="stat-card"><div className="stat-head"><span>МОРАЛЬ СОСТАВА</span><Users size={17}/></div><div className="stat-value">Хорошая</div><div className="morale-bar"><i/></div><div className="stat-foot">Команда уверена в себе</div></article>
        </section>
        <section className="content-grid">
          <article className="panel next-match"><div className="panel-title"><div><span className="eyebrow">СЛЕДУЮЩИЙ МАТЧ</span><h3>Матч тура</h3></div><span className="live-tag">ЛИГА · ТУР 12</span></div><div className="match-date">ВОСКРЕСЕНЬЕ, 22 НОЯБРЯ · 18:00</div><div className="match-teams"><div className="team"><div className="team-badge home">НК</div><b>Норд Клуб</b><small>Хозяева</small></div><div className="versus">VS</div><div className="team"><div className="team-badge away">СК</div><b>Столичный ФК</b><small>Гости</small></div></div><button className="primary-button" onClick={() => setPlayed(!played)}>{played ? 'Матч подготовлен' : 'Подготовиться к матчу'} <ChevronRight size={16}/></button></article>
          <article className="panel table-panel"><div className="panel-title"><div><span className="eyebrow">ТУРНИРНАЯ ТАБЛИЦА</span><h3>Премьер-лига</h3></div><button className="text-button">Все команды <ChevronRight size={14}/></button></div><div className="league-row header"><span>КЛУБ</span><span>И</span><span>О</span></div>{[['1','Атлетик Сити','28'],['2','Роял Юнайтед','26'],['3','ФК Восток','25'],['4','Норд Клуб','23'],['5','Столичный ФК','21']].map(([pos,name,points])=><div className={name === 'Норд Клуб' ? 'league-row current' : 'league-row'} key={pos}><span><i>{pos}</i>{name}</span><span>11</span><b>{points}</b></div>)}</article>
        </section>
        <section className="panel squad-panel"><div className="panel-title"><div><span className="eyebrow">ПЕРВАЯ КОМАНДА</span><h3>Ключевые игроки</h3></div><button className="text-button" onClick={() => setActive('Состав')}>Весь состав <ChevronRight size={14}/></button></div><div className="player-grid">{players.slice(0,5).map((p,i)=><div className="player-card" key={p.name}><div className="player-avatar">{p.name.split(' ').map(s=>s[0]).join('')}</div><div className="player-info"><b>{p.name}</b><small>{p.position} · {p.age} лет</small></div><strong>{p.rating}</strong><span className="rating-label">РЕЙТ.</span></div>)}</div></section>
      </> : <section className="panel placeholder-panel"><span className="eyebrow">РАЗДЕЛ КЛУБА</span><h2>{active}</h2><p className="muted">Этот модуль будет реализован следующим этапом разработки.</p>{active === 'Состав' && <div className="roster-list">{players.map(p=><div key={p.name}><span>{p.position}</span><b>{p.name}</b><small>{p.age} лет</small><strong>{p.rating}</strong></div>)}</div>}</section>}
      <footer>TOUCHLINE <span>·</span> FOOTBALL DIRECTOR <span className="footer-right">BUILD 0.1.0 · PRE-ALPHA</span></footer>
    </main>
  </div>;
}