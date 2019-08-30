---
layout: post
title: Home network examples (work in progress)
featured: false
image: '/images/posts/ikqhM7JhtHgJ.jpg'
tags: [Networks]
---

<!--more-->

Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Sed posuere consectetur est at lobortis.

Esimerkki operaattorin kytkentätila taloyhtiön teknisessä tilassa. Ethernet-kytkimen tilalla voi olla myös DSLAM ja asiakkaille voi mennä yhteys kaapeliverkon tai VDSL:n kautta.



```
                 Operaattorin kytkentätila ───────────┐       ┌─────────┐
                 rakennuksessa                        │  ┌────┤ Asiakas │
                 │                                    │  │    └─────────┘
┌────────────┐   │   ┌──────────────────┐  ┌─────────┐│  │    ┌─────────┐
│Operaattorin├───┼───┤   Mediamuunnin   ├──┤ Kytkin  ├┼──┼────┤ Asiakas │
│runkoverkko │   │   └──────────────────┘  └─────────┘│  │    └─────────┘
└────────────┘   │                                    │  │    ┌─────────┐
                 └────────────────────────────────────┘  └────┤Asiakas… │
                                                              └─────────┘
```



## VALOKUITU

**FTTx** - Fibre to the X

- FTTN (fibre-to-the-neigbourhood)
- FTTC (fibre-to-the-curb)
- FTTP (fibre-to-the-premises)
	- FTTB (fibre-to-the-building)
	- FTTH (fibre-to-the-home)



- [https://en.wikipedia.org/wiki/Fiber_to_the_x](https://en.wikipedia.org/wiki/Fiber_to_the_x)
- [https://searchnetworking.techtarget.com/definition/fiber-to-the-x-FTTx](https://searchnetworking.techtarget.com/definition/fiber-to-the-x-FTTx)
- [http://www.fiber-optic-cable-sale.com/what-is-fttx-network.html](http://www.fiber-optic-cable-sale.com/what-is-fttx-network.html)

___


- Optical Line Terminal (OLT)
- Optical Network Unit (ONU)
- Optical splitters


**EPON**

> EPON is an Ethernet solution, which makes the most of the features, compatibility and performance of Ethernet protocol. It uses packet transmission at 1Gbps. It is widely deployed in Asia.

**GPON**

> GPON utilises the techniques of SONET/SDH and GFP to transport Etherent. It uses an IP-based protocol and either ATM or GEM encoding. Data rates can reach 2.5Gbps.

**Comparison between EPON and GPON**

**Data Rates**<br/>
EPON operates at 1.25Gbps (1Gbps prior to 8B/10B encoding) and is also capable of operating at 10Gbps with 10G-EPON, whereas GPON can operate at various bit rate options and can transmit at up to 2.5Gbps. The upstream and downstream rates are symmetrical with EPON, whereas in GPON they can be chosen depending on requirements. This makes GPON more flexible than EPON in terms of data rates and transmission.

**QoS**<br/>
EPON does not include any inherent QoS capability. However, PON systems aren’t really viable for operators without a form of QoS, and so many vendors that use EPON choose to use VLAN (Virtual Local Area Network) tags to solve this problem. However, this can be a very costly solution.

GPON however, does have integrated QoS handling, which is a great advantage for many operators.

**Cost**<br/>
The overall costs associated with GPON and EPON systems depend mainly on the cost of the OLT, ONU/T and any passive optical components.

The costs of the fiber and the cabinets in both GPON and EPON are fairly similar, but GPON optical modules can cost considerably more than that of an EPON. This is due to a few reasons but mainly that the chipsets available on the market for GPON are based on FPGA (Field Programmable Gate Array) whereas EPON uses MAC (media Access Control) layer ASIC. FPGA is generally more expensive and they are harder to replace.

**Summary**<br/>
There are advantages to using both GPON and EPON systems. In comparison, it would be fair to conclude that GPON performs better than EPON overall, however EPON would be preferable in terms of cost and time saving.

There is also no denying that EPON has become the main PON of choice and GPON is now playing catch-up in various areas.

The truth is that it is now possible for EPON and GPON systems to co-exist and complement each other across networks, so neither technology is likely to disappear any time soon.


## NAT

NAT eli *Network Address Translation* on tapa muuntaa ulkoinen IP osoite sisäiseksi osoitteeksi reitittimen avulla. Eli jos operaattorilta tulee osoite A.A.A.A, se voidaan muuntaa yksityiseksi osoitteeksi B.B.B.B ja jakaa näitä yksityisiä osoitteita päätelaitteille.


```
            NAT            
             │             
┌────────────┼────────────┐
│  Julkinen  │ Yksityinen │
│   verkko   │   verkko   │
└────────────┼────────────┘
             │                            
```




**CGN - Carrier-Grade NAT**<br/>
Toisella nimellä Large-scale NAT (LSN), on operaattoritasolla toimivat NAT ratkaisu. Esimerkiksi mobiiliverkot toimivat pääsääntöisesti CGN:llä, koska IPv6 tuki on vielä vajavainen ja IPv4 osoitteita ei muuten riittäisi kaikille käyttäjille.

```
             CGN                  
              │                   
┌─────────────┼──────────────────┐
│  Internet   │   Operaattorin   │
│ Julkinen IP │yksityinen verkko │
└─────────────┼──────────────────┘
              │                                                                     
```




CGN verkko, jossa asiakas käyttää suoraan operaattorin antaa IP osoitetta per laite (esim. puhelin mobiiliverkossa):

```
                                        ┌─────────────────────┐
             CGN                     ┌──┤Asiakkaan päätelaite │
              │                      │  └─────────────────────┘
┌─────────────┼───────────────────┐  │  ┌─────────────────────┐
│  Internet   │   Operaattorin    ├──┼──┤Asiakkaan päätelaite │
│ Julkinen IP │ yksityinen verkko │  │  └─────────────────────┘
└─────────────┼───────────────────┘  │  ┌─────────────────────┐
              │                      └──┤Asiakkaan päätelaite │
                                        └─────────────────────┘
```

CGN verkko, jossa asiakkaalla on myös oma reititin omaa yksityistä verkkoa varten (esim. mobiiliverkkoon yhdistyvä reititin):

```
                                                              ┌─────────────────────┐
             CGN                   NAT                     ┌──┤Asiakkaan päätelaite │
              │                     │                      │  └─────────────────────┘
┌─────────────┼─────────────────────┼───────────────────┐  │  ┌─────────────────────┐
│  Internet   │    Operaattorin     │    Kuluttajan     ├──┼──┤Asiakkaan päätelaite │
│ Julkinen IP │  yksityinen verkko  │ yksityinen verkko │  │  └─────────────────────┘
└─────────────┼─────────────────────┼───────────────────┘  │  ┌─────────────────────┐
              │                     │                      └──┤Asiakkaan päätelaite │
                                                              └─────────────────────┘
```
___


## KÄYTTÄJÄN KOTIVERKKO yms.


Asiakkaan verkko, jossa yhteys tulee muuta kuin Ethernetiä pitkin asuntoon esim. valokuitu, VDSL, ADSL jne.

```
          Modeemi, reititin, kytkin ja AP -kombo────────────────────┐
          │                                                         │
          │                                      ┌─────────────────┐│
┌───────┐ │ ┌─────────┐ ┌──────────┐ ┌────────┐┌─┤ Ethernet portit ││
│  ISP  ├─┼─┤ Modeemi ├─┤ Reititin ├─┤ Kytkin ├┘ └─────────────────┘│
└───────┘ │ └─────────┘ └──────────┘ └───────┬┘  ┌─────────┐        │
          │                                  └───┤   AP    │        │
          │                                      └─────────┘        │
          │                                                         │
          └─────────────────────────────────────────────────────────┘
```

<br/><br/>

Asiakkaalle tulee yhteys Ethernetiä pitkin.

```
           Reititin, kytkin & AP -kombo──────────────────┐
           │                                             │
           │                          ┌─────────────────┐│
┌───────┐  │ ┌──────────┐ ┌────────┐┌─┤ Ethernet portit ││
│  ISP  ├──┼─┤ Reititin ├─┤ Kytkin ├┘ └─────────────────┘│
└───────┘  │ └──────────┘ └───────┬┘  ┌─────────┐        │
           │                      └───┤   AP    │        │
           │                          └─────────┘        │
           │                                             │
           └─────────────────────────────────────────────┘
```


**3-laitteen Mesh WLAN verkko**<br/>
Jokaisessa noodissa on kaksi radiota: yksi backhaul liikennettä varten ja toinen node-to-client liikennettä varten.

```
        Node                  Node               Node        
       ┌───────────┐         ┌───────────┐      ┌───────────┐
       │    R1   ─ ┼ ─ ─ ─ ─ ┼    R1  ─ ─│─ ─ ─ ┼ ─  R1     │
       ├───────────┤         ├───────────┤      ├───────────┤
       │    R2     │         │    R2     │      │    R2     │
      ┌└───────────┘        ┌└───────────┘     ┌└───────────┘
             │                     │                  │      
      │                     │                  │             
┌──────────┐ │        ┌──────────┐ │     ┌──────────┐ │      
│Päätelaite│          │Päätelaite│       │Päätelaite│        
└──────────┘ │        └──────────┘ │     └──────────┘ │      
       ┌──────────┐          ┌──────────┐       ┌──────────┐ 
       │Päätelaite│          │Päätelaite│       │Päätelaite│ 
       └──────────┘          └──────────┘       └──────────┘ 
```
