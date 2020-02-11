# Blender

Jako první je nutno zmínit to, že Blender prochází řadou updatu v nepravidelných a někdy i krátkých intervalech(není na tom nic špatného, je to jen důkaz že se vývojáři starají). Jedinou nevýhodou vidím v tom, že zkušenosti, které zde jsou již nemusí být aktuální. Také chci podotknout, že vývojáři, kteří pracují v bledru 2.79 se zde asi nedozvědí moc z toho co se váže k jejich verzi. Já osobně jsem začal s blendrem po velkém, dopředu ohlašovaném updatu na verzi 2.81, který budu v tomto odkazu také zmiňovat.

Co sem v blendru vytvářel:
==========================

Do práce v Blenderu sem se ponořil po zkušenostech s 3D prostředím, středoškolského AutoCadu. Hned ze začátku musím říct, že práce v Blendru je naprosto odlišná od práce v AutoCadu. Vývojové prostředí jako takové nabízí mnohem větší škálu pro modelování 3D objektů a samozřejmě je tu mnoho nástrojů, které lze využít pro manipulaci s objekty. Mně osobně příjde mnohem přehlednější a intuitivnější pro začátečníky novější verze 2.81. 

V Blenderu jsem měl za úkol vytvořit sadu objektů, které budou odpovídat kontentu na stránce. Zajímám se o hardware počítačových sestav a proto jsem se rozhodl vytvořit objekty co nejvíce autentické právě PC sestavám, které jsem posléze animoval tak, aby uživatel, který si vybírá jakou službu od nás kupuje viděl co od té služby čekat. Například, mezi naše služby patří čištění PC a ve chvíli kdy uživatel zvolí tuhle službu, zobrazí se animace počítače, který je čištěn pomocí stlačeného vzduchu.

Kde sem se učil:
================

Stejně jako se vším, většinu věcí jsem se naučil na YouTube a zbytek nesrovnalostí jsem si ověřoval v materiálech na webu. 

Pro úplný začátek mi byl inspirací tento kanál --> YanSculpts (konkrétněji https://www.youtube.com/watch?v=jBqYTgaFDxU, https://www.youtube.com/watch?v=alyUFQasLMI&t=1s)

Pro animování jsem shlédl pár videií z kanálu --> Thilakanathan Studios (konkrétněji https://www.youtube.com/watch?v=Huuo7RKO1RE)

Můj postup:
=======

* Nainstalovat Blender
* Naučit se základní principy 
* Vytvořit první 3D objekt (skříň jednoho PC)
* Následně vytvořit sadu 3D objektů (skříň více PC, stlačený vzduch v tubě, motherboard, chlazení CPU, zdroj,)
* Sestavit
* Doladit
* Naučit se pracovat s animacemi v Blenderu
* Animovat chování komponent pro jednotlivé požadavky od uživatele
* Exportovat .blend soubor do .fbx pro ponechání animací jako součást souboru pro další práci se souborem na webu


Typy do začátku:
================

"HotKeys" = neboli klávesové zkratky. Ušetří vám neskutečného množství času a usnadní vám práci v Blendru. Je to tak nepostradatelný základ, že sem si dovolil pár z těch nejdůležitejších vypsat: 

* Kliknutím na kolečko - rotujete 
* Ctrl + kolečko(prostřední tlačítko myši) - zoom
* Shift + prostřední kolečko mysši - pohyb (levo a pravo)
* Shift + a - přidáme nový objekt
* Levé tlačítko myši - vyberu objekt
* Ctrl + tab - změna modu
* Tab - změníme mod z "object mode" na "edit mode"
* Ctrl + z - vratíme změnu
* Pravým tlačítkem - ukončíme proces
* Vybrat objekt + g - pohybujeme objektem
* Vybrat objekt + r - rotujeme objekt (když zmáčkneme r ještě jednou můžeme pohybovat objektem po všech osách)
* Vybrat objekt + s - změna měřítka objektu
* Vybrat objekt + g + z - pohybuju objektem po z-etové ose
* Vybrat objekt + g + x - pohybuju objektem po x-ové ose
* Vybrat objekt + g + y - pohybuju objektem po y-ové ose
* Prostředním tlačítkem označím objekt a vyberu jakou osu chci využít (x,y,z) a pohybuju se po ní -->TO SAMÉ VYUŽÍVÁME KDYŽ MĚNÍME MĚŘÍTKO OBJEKTU A PŘI ROTACI
* Změním mod na "edit mod" + stiknu s - pro vytažení označené plochy (pro dokončení pozice musím kliknout)
* Změním mod na "edit mod" + stiknu s - pro změnu měřítka označené plochy (pro dokončení pozice musím kliknout)
* Změním mod na "edit mod" + stiknu i - pro změnu měřítka a zároveň vytažení označené plochy (pro dokončení pozice musím kliknout)
* Změním mod na "edit mod" + stisknu z a vyberu vireframe - pomáhá nám to když chceme označit všechny plochy i ty které jsou zastíněnné jinými a nejdou vidět - je to něco jako X-RAY

Zbytek klávesových zkratek naleznete zde (UPOZORNĚNÍ - klávesové zkratky jsou v originálním znění):
https://download.blender.org/documentation/BlenderHotkeyReference.pdf, http://www.blender-spirit.cz/nastaveni-a-zaklady-prace-v-blenderu/3-klavesove-zkratky/
