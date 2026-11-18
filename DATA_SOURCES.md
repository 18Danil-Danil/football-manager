# Football data sources

This project separates the game engine from external football data. League and club records are stored in `src/data`; external sources are linked in the application.

## Current catalogue

- UEFA national association catalogue: 55 associations.
- National division names are catalogued for all listed associations.
- Deeper tiers are included where a national pyramid is documented in the current catalogue.
- Russia includes the Premier League, First League, Second League A and B, Third League regional zones, and regional amateur competitions.
- A starter set of real clubs is included with external crest URLs.

## Sources

- UEFA national leagues and cups: https://www.uefa.com/nationalassociations/leaguesandcups/
- Russian Football Union regulations and competition documents: https://www.rfs.ru/subject/1/documents
- OpenFootball open match data (CC0 repositories): https://github.com/openfootball
- Reep football identity register (CC0 snapshots): https://reep.football/data/
- Football-data.org team crest CDN and competition catalogue: https://www.football-data.org/

## Data quality rules

1. Every player and club must have a stable source identifier where available.
2. Player age is calculated from date of birth and the selected season, not stored as a permanent value.
3. Squads are season-specific; transfers must not silently rewrite historic seasons.
4. A crest URL is metadata, not ownership of the logo. Club and competition marks may be protected trademarks.
5. A league name in the catalogue does not imply that a complete current-season club list or player roster has been imported.
6. Unknown values remain unknown. The game must not fabricate real-world player details.

## Important limitation

The current UI catalogue is a foundation, not a claim that every division already has complete club rosters. Reep's open register is an identity crosswalk; its current public documentation says squad and lineup relationship edges are still on the roadmap. A separate squad/roster source or licensed API is needed to populate reliable current squads across all tiers.

## Next data tasks

- Add country-specific club lists and season participation records.
- Import adult player identities and provider IDs from a permitted dataset.
- Resolve each player's club membership for a specific season.
- Add source timestamp, provenance, and confidence to imported records.
- Expand lower divisions country by country, prioritizing official federation records.
