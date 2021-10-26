# the-office-api-server

## **The Office** Quotes Server

The Office Quotes Server is a passion project by Brad Titus, developed during the Red Badge at [ElevenFifty Academy's](https://elevenfifty.org/ "ElevenFifty Academy") Web Development Bootcamp. During an earlier badge, I wanted to create a random quote generator for NBC's *The Office*, but I couldn't find a reliable API for the project. When the opportunity presented itself for my final project, I jumped at the chance. While my client proved to be a much more difficult challenge than my server, this is still being developed, with more functionality coming soon. 

Presently, the server contains more than 1300 unique quotes from NBC's *The Office*, with more to come. I downloaded every line in the scripts of the 9 seasons of the show, and am sorting through them line-by-line to complete the database. In a future version of the client that I'm developing, fans of the show will be able to submit additional quotes to the database, but that functionality does not yet exist. As of October, 2021, the database contains quotes through Season 4, and a few quotes from Season 9. 

## Endpoints

### Quotes

#### To find a random quote

http://www.office-quotes.com/quotes

#### To find a random quote by a specific character

http://www.office-quotes.com/quotes/characters/:cid

where :cid is the character ID. See the list of Character IDs below. 

### Characters

Currently, the database has 38 characters, as these were the only characters that had quotes to be used. In time, all characters in the show will be represented. 

#### To view all characters

http://www.office-quotes.com/characters/all

#### To view a specific character

http://www.office-quotes.com/characters/:id

where :id is the character ID.

#### Character IDs

-  1	"Andy Bernard"
-  2	"Angela Martin"
-  3	"Billy Merchant"
-  4	"Bob Vance"
-  5	"Creed Bratton"
-  6	"Darryl Philbin"
-  7	"Dwight Schrute"
-  8	"Hank Tate"
-  9	"Jan Levinson"
- 10	"Jim Halpert"
- 11	"Josh Porter"
- 12	"Katy Moore"
- 13	"Kelly Kapoor"
- 14	"Kevin Malone"
- 15	"Meredith Palmer"
- 16	"Michael Scott"
- 17	"Oscar Martinez"
- 18	"Pam Beesly Halpert"
- 19	"Phyllis Vance"
- 20	"Roy Anderson"
- 21	"Ryan Howard"
- 22	"Stanley Hudson"
- 23	"Toby Flenderson"
- 24	"Todd Packer"
- 25	"David Wallace"
- 26	"Deangelo Vickers"
- 27	"Jo Bennett"
- 28	"Charles Miner"
- 29	"Danny Cordray"
- 30	"Erin Hannon"
- 31	"Hidetoshi Hasagawa"
- 32	"Val Johnson"
- 33	"Nate Nickerson"
- 34	"Clark Green"
- 35	"Pete Miller"
- 36	"Nellie Bertram"
- 37	"Lonny Collins"
- 38	"Karen Filippelli"

### Episodes

#### Get All Episodes

http://www.office-quotes.com/episodes/

#### Get all episodes for a specific season

http://www.office-quotes.com/episodes/season/:sid

where :sid is the season number you want

#### Get quotes from a specific episode

http://www.office-quotes.com/episodes/:eid/quotes

where :eid is the episode ID you want. To view the episode ID for a specific episode, follow the Get All Episodes endpoint. 

## Disclaimer

All quotes, likenesses, characters, and information included on this site are the intellectual property of NBC Universal and the creators of The Office. This is intended for entertainment purposes only.

Unless otherwise stated, the content of this page is licensed under Creative Commons Attribution-ShareAlike 3.0 License

## About the Creator

Brad Titus is a writer and web developer in Indianapolis, Indiana, and is always interested in projects, collaborations, and professional opportunities. You can view his [LinkedIn Profile](https://www.linkedin.com/in/bltitus) and his [GitHub](https://www.github.com/bltitus82), or visit [bltitus.com](https://www.bltitus.com). If you've enjoyed this project, have any suggestions, or just want to get in touch, please don't hesitate to reach out. 