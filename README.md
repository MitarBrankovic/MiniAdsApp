# Konkursni zadatak - Inviggo 
---
## Spring boot + React + PostgreSql
---

### Pokretanje projekta
- potrebno je imati instaliranu Javu 17 kao i okruzenje(InteliJ) i  pokrenuti klasu DemoApplication kako bi se pokrenuo backend
- za front je potrebno otvoriti folder "frontend" pomocu VS Code i uraditi komandu npm install i nakon toga npm start
- za bazu je potrebno instalirati Pg Admin4 odnosno Postgresql i napraviti novu bazu sa nazivom "ads_database".
- kredencijali za bazu su ip:5432, user: postgres, password: wasd - svi ovi podaci se mogu izmeniti u application.properties fajlu(11, 14, 15 linija)
- nakon svakog pokretanja aplikacije, baza se vraca na prvobitno stanje, odnosno vrsi se create-drop
---
### Security
- JWT Token
- Hashiranje sifre prilikom registracije, Sha256 pri cemu se menja Salt prilikom svakog encodovanja
- Sql injection pomocu regexa i validatora
- Provera podataka na backu uz pomoc validatora
- HTTPS coming soon:)
---
Napomena: dodatne sitnice vezane za koriscenje aplikacije se nalaze na dugbetu "Help" u navbaru. Ukoliko imate problema sa pokretanjem aplikacije, mozete me kontaktirati pomocu mail-a.