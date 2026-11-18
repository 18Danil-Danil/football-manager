# Football data sources

This project separates the game engine from external football data. League and club records are stored in `src/data`; external sources are linked in the application.

## Current catalogue

- UEFA national association catalogue: 55 associations.
- National division names are catalogued for all listed associations.
- Deeper tiers are included where a national pyramid is documented in the current catalogue.
- Russia includes the Premier League, First League, Second League A and B, Third League regional zones, and regional amateur competitions.
- Real club directory includes all 114 clubs represented in the six-league 2025/26 squad archive, plus Russian 2026/27 and Second League B/Third League snapshots.
- Russian Second League B clubs are recorded by 2026 group; Third League regional champions and 2026 final-stage participants are included as a partial regional snapshot.
- Russian lower-tier entries carry group/region and season metadata; entries without verified crest URLs intentionally use text initials.

## Sources

- UEFA national leagues and cups: https://www.uefa.com/nationalassociations/leaguesandcups/
- Russian Football Union regulations and competition documents: https://www.rfs.ru/subject/1/documents
- Public 2025/26 matchday squad archive for six major leagues (player names, positions and matchday status; 114 club-season files): https://github.com/withqwerty/availability-data
- OpenFootball open match data (CC0 repositories): https://github.com/openfootball
- Reep football identity register (CC0 snapshots): https://reep.football/data/
- RSSSF Russia 2026/27 (Premier League, First League, Second League A): https://www.rsssf.org/tablesr/rus2027.html
- RSSSF Russia 2026 (Second League B groups and Third League regional/final-stage data): https://www.rsssf.org/tablesr/rus2026b.html
- Stat-Football Russian 2026/27 tables (First League and Second League A Gold/Silver groups): https://www.stat-football.com/en/t/rus20.php
- Football-data.org team crest CDN and competition catalogue: https://www.football-data.org/

## Data quality rules

1. Every player and club must have a stable source identifier where available.
2. Player age is calculated from date of birth and the selected season, not stored as a permanent value.
3. Squads are season-specific; transfers must not silently rewrite historic seasons.
4. A crest URL is metadata, not ownership of the logo. Club and competition marks may be protected trademarks.
5. A league name in the catalogue does not imply that a complete current-season club list or player roster has been imported.
6. Unknown values remain unknown. The game must not fabricate real-world player details.

## Russian lower-division snapshot

The Russian Second League B list is based on the 2026 season competition tables. Third League entries are the 2026 regional champions/cup finalists or final-stage participants, not a complete list of every regional club. The 2026/27 First League and Second League A lists are season snapshots; they are not continuously refreshed. Some 2026 competition participants later withdrew, folded or changed names, so historical season context is retained.

## European squad archive coverage

The static 2025/26 archive now contains matchday player records for all 114 clubs represented in the source dataset: Premier League (20), La Liga (20), Serie A (20), Bundesliga (18), Ligue 1 (18), and Primeira Liga (18). Players are included when named in a starting XI or on the bench at least once in the domestic league competition. Player IDs, names, positions, last recorded match status, source file and scrape timestamp are retained. The dataset does not cover every European professional league; it covers these six competitions only. Ajax/Eredivisie and the remaining countries do not have player squads imported in this release.

The source data is a historical season snapshot, not a live feed. No automatic refresh or scheduled player update is configured. The game assigns simulated ages, ratings and transfer values where the source does not provide those attributes; those values are gameplay parameters, not real-world player valuations.

## Important limitation

The club catalogue and league pyramid are broader than the squad archive. Russia and most European countries still lack complete club rosters and real-player squad records below the divisions explicitly imported. Reep's open register is an identity crosswalk; it does not provide ready-made season squad membership for these competitions.

## Next data tasks

- Add country-specific club lists and season participation records.
- Import adult player identities and provider IDs from a permitted dataset.
- Resolve each player's club membership for a specific season.
- Add source timestamp, provenance, and confidence to imported records.
- Expand lower divisions country by country, prioritizing official federation records.
