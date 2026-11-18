# Football data sources

This project separates the game engine from external football data. League and club records are stored in `src/data`; external sources are linked in the application.

## Current catalogue

- UEFA national association catalogue: 55 associations.
- National division names are catalogued for all listed associations.
- Deeper tiers are included where a national pyramid is documented in the current catalogue.
- Russia includes the Premier League, First League, Second League A and B, Third League regional zones, and regional amateur competitions.
- Real club directory includes selected clubs from European top divisions and a Russian 2026/27 snapshot across the Premier League, First League and Second League A.
- Russian Second League B clubs are recorded by 2026 group; Third League regional champions and 2026 final-stage participants are included as a partial regional snapshot.
- Russian lower-tier entries carry group/region and season metadata; entries without verified crest URLs intentionally use text initials.

## Sources

- UEFA national leagues and cups: https://www.uefa.com/nationalassociations/leaguesandcups/
- Russian Football Union regulations and competition documents: https://www.rfs.ru/subject/1/documents
- Public 2025/26 matchday squad archive for six major leagues (player names, positions and matchday status): https://github.com/withqwerty/availability-data
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

## Important limitation

The current UI catalogue is a foundation, not a claim that every division already has complete club rosters. Reep's open register is an identity crosswalk; its current public documentation says squad and lineup relationship edges are still on the roadmap. A separate squad/roster source or licensed API is needed to populate reliable current squads across all tiers.

## Next data tasks

- Add country-specific club lists and season participation records.
- Import adult player identities and provider IDs from a permitted dataset.
- Resolve each player's club membership for a specific season.
- Add source timestamp, provenance, and confidence to imported records.
- Expand lower divisions country by country, prioritizing official federation records.
