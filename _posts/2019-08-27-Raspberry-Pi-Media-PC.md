---
layout: post
title: "Raspberry Pi 3B ja 3B+ Media PC:nä"
featured: false
tags: Raspberry Pi
image: '/images/posts/Raspberry-media-pc.jpg'
---

Hei,  
Tässä olisi pieni tekstinpätkä omista kokemuksista käyttää Raspberry Pi:tä media PC:nä.

<!--more-->

### Tarvittavat osat:

- Raspberry Pi
- 5V 2,5A virtalähde microUSB 2.0 liitännällä
- HDMI kaapeli
- microSD kortti. Raspberry Pi käyttöön yleensä suositellaan Kingstonin Industrial -kortteja, mutta mikä tahansa kortti kunhan se on omiin tarpeisiin suositeltava. Ottaisin myös suurimman mahdollisen kortin, vaikka sitä ei 100% täyttäisi, niin siellä on enemmän NAND muistia, johon kirjoituskerrat voidaan tasata.
- Ethernet kaapeli (voi myös käyttää langatonta WLAN:ia, mutta itselläni on Ethernet kytkin TV tason takana, niin kaikki media laitteet saa sillä kätevästi kytkettyä.
- Langaton USB tai Bluetooth kaukosäädin tai näppäimistö. Teoriassa CEC:n pitäisi toimia, mutta käytännössä en ole sitä koskaan saanut toimimaan. Logitechilla on muutama näppäimistö malli (K400, K600, K830) hiiritasolla, mutta mielestäni näppäimistön käyttäminen kaukosäätimenä on hieman kankeaa, joten käytössä on 10€ langaton USB kaukosäädin AliExpressistä. OSMC:llä on myös [vastaava](https://osmc.tv/store/product/osmc-remote-control/) myynnissä, mutta mielestäni se oli vähän tyyris ominaisuuksiin nähden.
- Tallennusratkaisu medialle. Esimerkiksi ulkoinen kovalevy omalla virtalähteellä tai NAS. Itselläni on 3TB ulkoinen kovalevy suoraan yhdistettynä Raspberryyn.

___

### Ohjelmiston asennus & säätäminen

**DietPi**

[DietPi](https://dietpi.com/) on kevyt ja helppokäyttöinen Linux jakelu, joka on tarkoitettu SBC-laitteille ja siinä on sisälletty erilaisia mukavuuksia ja optimointeja, kuten dietpi-software ohjelmiston asennustyökalu, dietpi-drive_manager levynhallintaan ja lokitiedostot menevät oletuksena tmpfs asemalle keskusmuistiin, jolloin SD-kortin kirjoituskertoja säästyy.

DietPi:llä on omat ja yksinkertaiset [asennusohjeet](https://dietpi.com/phpbb/viewtopic.php?f=8&t=9#p9), mutta yksinkertaistettuna kuvatiedosto kirjoitetaan SD-kortille, ssh niminen tiedosto lisätään sen juureen jos halutaan SSH yhteys heti käyttöön, SD-kortti Piihin kiinni ja virrat päälle. Oletuskäyttäjä on root ja salasana dietpi. Ensimmäisen kirjautumisen yhteydessä DietPi kehottaa vaihtamaan oletussalasanat, päivittyy ja viimeistelee asennuksen.

![](https://user-images.githubusercontent.com/35720395/62621283-061f3c80-b90b-11e9-9ba2-868d0f43d93e.png)

![](https://user-images.githubusercontent.com/35720395/62621332-22bb7480-b90b-11e9-87ab-9d1afcaa2755.png)


**Kodi**

[Kodi](https://kodi.tv/), entinen XMBC, on avoimeen lähdekoodin perustuva media toistin ja sen parhaimpana ominaisuutena on sen kyky indeksoida elokuvat & TV-ohjelmat ja ladata niille kaiken metadatan, kuten kuvat, kuvaukset, otsikot, näyttelijät, genret & studiot, sekä näyttää ne helposti selattavassa näkymässä. Tiedostot kannattaa nimetä joko [tinyMediaManagerilla](https://www.tinymediamanager.org) tai [tvnamer:illa](https://github.com/dbr/tvnamer) ennen kuin ne tuo Kodin kirjastoon.

- **[Pi-hole](https://pi-hole.net/)**: Paikallisverkossa toimiva DNS palvelin, joka suodattaa DNS pyynnöistä mainokset yms. pois.
- **[ProFTP](http://www.proftpd.org/)**: Yksinkertainen ja tehokas tiedostopalvelin

___

### Lämpötila ja virrankulutus

Lämpötila on tallennettu suoraan prosessorin lämpöanturista ja virrankulutus mitattu pistokkeen ja virtalähteen väliin tulevalla [mittarilla](https://hinta.fi/221661/brennenstuhl-bn-pm231). Molemmissa malleissa on samanlaiset jäähdytyssiilet kiinni. Stressitesti on suoritettu `stress` ohjelmalla ja alla olevan komennon avulla. Testivideot ovat ladattu [http://jell.yfish.us/](http://jell.yfish.us/) sivustolta. Huoneen lämpötila on noin 21,8°C.

```
while true; do vcgencmd measure_clock arm; vcgencmd measure_temp; sleep 10; done& stress -c 4 -t 600s
```

|  | 3B CPU °C | 3B W | 3B+ CPU °C | 3B+ W |
|:--|:--|:--|:--|:--|
| Lepotila | 41,9 | 2,0 | 45,1 | 2,6 |
| CPU Stressitesti | 71,4 | 4,3 | 63,4 | 5,9 |
| H264 1080p 5 mbps | 44 | 2,1 | 46,2 | 2,8 |
| H264 1080p 55 mbps | 48,3 | 2.3 | 47,2 | 3,2 |
| H265 1080p 3 mbps | 54,2 | 3,5 | 52,6 | 4,7 |
| H265 1080p 5 mbps | 61,2 | 3,8 | 56,9 | 4,9 |

Mielenkiintoista, että 3B:llä on korkeammat lämpötilat, vaikka 3B+ käyttää enemmän virtaa, mutta tämä ero luultavasti johtuu 3B+:ssa olevasta metallisesta lämmönlevittäjästä prosessorin päällä, jolloin lämpöä saadaan johdettua pois tehokkaammin.

### Videotoisto

Raspberry Pi käyttää pystyy purkamaan 1080p H264 60fps videota rautatasolla, mutta [VideoCore IV:stä](https://en.wikipedia.org/wiki/VideoCore#Table_of_SoCs_adopting_VideoCore_SIP_blocks) puuttuu  tuki HEVC videoille, jolloin kaikki H265 videot joudutaan purkamaan suoraan prosessorilla ja tehot riittävät noin H265 1080p 8-bit 5Mbps videoihin ja 10 Mbps videolla prosesorin käyttö kävi välillä sadassa prosentissa ja pientä pätkimistä esiintyi.

### Tiedonsiirtonopeudet

Testasin myös tiedonsiirtonopeudet eri protokollilla. Sambaa ei suositella käytettäväksi Piin kanssa, koska tehot loppuvat kesken ja nopeudet jäävät todella paljon jälkeen verrattuna perus FTP:hen. Tiedonsiirtonopeudet ovat testattu lataamalla Pi:llä olevalta RAM-levyltä 100MB tiedosto /dev/nulliin, jolloin tallennusmedia ei ole pullonkaulana.

|  | 3B | 3B+ |
|:--|:--|:--|
| iPerf3 | 94,5 Mb/s | 322 Mb/s |
| ProFTP | 89,6 Mb/s | 264 Mb/s |

___

### Loppuyhteenveto

Olen kyllä ollut tyytyväinen tähän kokonaisuuten ja sen hintaan (~140€), sekä samaan laitteeseen saa asennettua muita palveluita. Puutteita kuitenkin löytyy, esimerkiksi suurinta osaa suoratoistopalveluista ei saa toimimaan, sekä tukea 4K resoluutiolle ja rautatason H265 videopurulle ei ole. Pi 4B:ssä jälkimmäiset ongelmat ovat korjattu, mutta ohjelmistotuki on vasta alpha- tai beta-vaiheessa. 

___

### TLDR:

- Plussaa
	- Kodi pyörii kätevästi
	- 1080p 60 fps H264 toimii
	- Melko halpa ja virtapihi verrattuna vaikka pieneen x86 pohjaiseen koneeseen
	- Samaan laitteeseen saa muita palveluita, kuten tiedosto-, VPN- tai DNS-palvelimen.
- Miinusta
	- Ei kunnollista tukea H265 videoille (osa toimii, kunhan ei ole 10 bittistä tai liian isolla bittinopeudella varustettua videota)
	- Suoratoistopalvelut vaativat erillisen laitteen (esim. Chromecast)
	- SD-kortti saattaa korruptoitua melko helposti riippuen kortin- ja virtalähteen laadusta, sekä käyttötavasta.

___