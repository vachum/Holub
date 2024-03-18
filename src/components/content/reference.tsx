import { useState } from "react";
import { IoPersonSharp, IoChevronDown, IoChevronUp } from "react-icons/io5";
const getRandomHeight = () => {
  return Math.floor(Math.random() * (300 - 100 + 1) + 100); // Random height between 100 and 300 pixels
};

const Reference = () => {
  const refArr: string[][] = [
    [
      "Daniel Michajlov",
      "Profesionální přístup, rychlá komunikace, a hlavně zajímé tréninkové plány. Plán je nejen tvrdý, ale zároveň zábavný. Po 2 týdnech spolupráce mám pořad ten samý oheň v očích, jaký jsem měl před spoluprací. I když extra změny zatím z logických důvodu nepřišli, tak téhle spolupráci mužů dát 11/10⭐",
    ],
    [
      "Monika Duni",
      "Professional, fun to train with, understanding. He knows when to push you and when to give you a break. He will listen to your complaints/wishes and will help you set up goals and follow them through. He's an encyclopedia of fitness knowledge and will gladly give you advice on nutrition, sleep, running etc. He's motivating and I feel safe about my progress at the gym. Half year into our sessions and I can already see a lot of improvement to my training. 11 stars out of 10",
    ],
    [
      "Ondřej Machač",
      "S Ondrou Holoubkem jsme začali spolupracovat před dvěma roky v rámci kondičních tréninků pro kategorii žáků v klubu FC Háje. Po dvou letech působení Ondry v roli kondičního trenéra pozorujeme rapidní zlepšení ve fyzických aspektech všech hráčů, které sledujeme jak v rámci dílčích měření, tak to i sami hráči pociťují na svých výkonech v trénincích a zápasech. Dalším velkým přínosem pro náš ročník je individuální přístup Ondry, který je vždy nápomocen každému hráči i mimo samotné tréninky a kluci si k němu tak chodí pro rady, jak a co mohou po kondiční či stravovací stránce vylepšit.",
    ],
    [
      "Lucie Bort",
      "S tréninkem pod vedením Ondry jsem se dočkala nečekaných pokroků za pouhých 6 měsíců a dosáhla jsem cílů, které jsem si nikdy nemyslela, že jsou možné. Jsem ráda, že Ondra nejenže navrhuje cvičení, ale také mi vždy podrobně vysvětlí, jaký má každý cvik vliv na mé tělo a jak mi může pomoci dosáhnout mého cíle. Celkově jsem s tréninkem pod vedením Ondry naprosto spokojená a mohu ho doporučit každému.",
    ],
    [
      "Bartoloměj Krasoň",
      "Nikdy jsem nebyl sportovní typ, chodit na posilovnu snažil jsem už mnohokrát v životě, ale teprve s Ondrou mne to začalo bavit. Nejede podle nějaké učebnice ale chtěl mne poznat, dozvědět se jak jsem na tom, co mi jde a co nejde - i upravil plan podle toho. I když občas děláme věci, které mne opravdu nebaví, Ondra vždycky vysvětlí proč to děláme a motivuje. Díky němu vidím výsledky, cítím se lépe i mám chuť něco se sebou dělat. Pomalu začínám se zas sám sobě líbit. No i nejdůležitější, je to svůj chlap s kterým jde normálně pokecat, nejen o posilovně a vegetariánství není pro něj sprosté slovo. 20 na 10 hvězdiček!",
    ],
    [
      "Roman Baltag",
      "Měl jsem tu čest s Ondrou trénovat a musím říct, že je to prostě nejlepší osobní trenér, jakej jsem kdy měl. Zamyšleně zhodnotil mé fyzické zdraví a podrobně naslouchal mým kondičním cílům, než začal náš trénink. Má hluboké znalosti o různých cvičebních technikách a nutričních požadavcích, což mu umožňuje sestavit fitness režim na míru, který se perfektně hodí.",
    ],
    [
      "Martin Kopta",
      "Ondřej je skvělý trenér! Jeho pragmatický přístup ke cvičení respektuje moje schopnosti a cíle, což mi umožnilo dosáhnout výrazného pokroku bez větších obtíží. Také se mi líbí Ondřejova péče o celkový životní styl - zájem o kvalitu spánku, schopnost zvládat stres a správné stravování je známkou holistického přístupu k tréninku. Ondřej nejen vysvětluje jak cvičit efektivně, ale také bezpečně. Jeho podpora a trpělivost při každém cvičení je k nezaplacení. Navíc je vidět, že ho cvičení samotného opravdu baví, což mě inspiruje a dodává mi motivaci. ,,Když už to nemůžeš zvednout, tak prostě použij víc síly.,, :-D",
    ],
    [
      "Anastasia Latenkova",
      "Ondra is a great knowledgeable trainer. He tails your training to your needs and celebrates every achievement you make. He also makes sure that you understand what exactly you do, so that you approach your exercise consciously. Ondra does not make you blindly follow his instructions, but actually educates you on the exercises/muscles structure, etc. He makes sure that you give it your all at the gym, yet he doesn't push you when your body is weak for natural reasons. He can also give a great sleep and nutritional advice. Overall, with him, you quickly start noticing the changes both in your body and day-to-day life.",
    ],
    [
      "Sandra Stojanovová",
      "Ondřej je skvělý trenér, určitě ví, co dělá. Neaplikuje stejné sestavy cviků na všechny, přemýšlí o vás komplexně, o tom jaké máte fyzické možnosti, zdravotní stav, jakou máte či nemáte energii. Jsem maminkou, které po porodu zůstala diastáza břišních svalů. Ondřej mi určitě svým přístupem, motivací a nastavením správných cviků přímo na míru pomohl zbavit se strachu z posilování břišních svalů. A nejen to. Zaměřuje se na celé tělo, jak cvičit správně, zdravě! Tréninky s ním mě baví, vždy se na ně těším ",
    ],
    [
      "Andryi Afonin",
      "I’m always excited to recommend Ondra as a great personal trainer to my friends & co-workers. He successfully managed to get me back to training routine after few years of laziness. I really admire the individual approach and variety of exercises we do during a training session which helps me to gain an advantage (i.e more speed, better balance) in other sports. The last but not the least, there’s a lot of attention paid to your body mobility and what can be done to make your training more beneficial to your overall health & reduce the chance of injury.",
    ],
    [
      "Victoria Eframidou",
      "Ondra is a talented personal trainer, whose passion for gymnastics shines through in every session. With his wealth of experience, he not only instructs but inspires, making each training session an enjoyable and rewarding experience. What truly sets Ondra apart is his unwavering commitment to prioritize the health and well-being of his clients above all else. He meticulously tailors workout plans to suit individual needs, ensuring both safety and efficacy. His dedication to suggesting the best methods for achieving results is evident, as he combines expertise with empathy to guide clients towards their fitness goals. Ondra's enthusiastic approach and genuine care for his clients make him an exceptional personal trainer, one who not only transforms bodies but also enriches lives through the power of gymnastics and wellness.",
    ],
    [
      "Edit Rosta",
      "Ondra is a great personal trainer with a deep understanding of his profession. He is great in explaining the exercises and finding alternatives and he does this perfectly also in English. He follows my training and provides suggestions whenever appropriate. Our trainings are however not only hard work, we also have lot of fun, he makes sure that I feel comfortable and supported in the gymn. His positive and supportive approach is a great inspiration for me to attend my training sessions.",
    ],
    [
      "Josef Kadlec",
      "Cca 2 roky jsem cvičil sám ale měl jsem problém s konzistencí a hlavně s motivací. Například měsíc jsem chodil pravidelně ale pak to slábnulo.. Spolupráce s Ondro mě drží v maximální motivaci což beru jako největší benefit. Samozřejmě benefitů je celá řada jako úprava tréninku komunikace , live podpora při tréninku  a mnoho dalších . Je to můj první trenér a nebál bych se říct že 10/10 . Top spolupráce .",
    ],
    [
      "Jakub Walchetsteder",
      "Spolupráce s Ondrou byla pro mě po celý rok nejen čestí, ale také cennou zkušeností. Jeho komplexní přístup k tréninku, který zahrnoval jak silové cvičení, tak programy zaměřené na hypertrofii, přinesl výsledky přesahující mé očekávání. Ondrovy tréninky byly promyšleně strukturované, což mi umožnilo dosáhnout konzistentního pokroku a zároveň si zachovat nadšení pro každou další návštěvu posilovny. V případě potřeby jsem mohl vždy počítat s jeho rychlou a odbornou podporou. Díky Ondrově odbornosti a osobnímu přístupu jsem se nejen zlepšil ve své fyzické kondici, ale také jsem získal novou motivaci a inspiraci pro svůj trénink. Jeho programy jsou ideální pro každého, kdo hledá efektivní a přizpůsobené tréninkové řešení, ať už pro zlepšení vzhledu nebo zvýšení síly. Ondrovy tréninky jsou bez váhání tou nejlepší volbou pro dosažení vašich fitness cílů.",
    ],
    [
      "Lukáš Frček",
      "Spolupracuju s Ondrou teprve chvilku, ale cítím a hlavně vidím, že progresuju. Tréninkový plán je skvěle sestavený, dává smysl a všechno v něm skvěle zapadá. Vše je hezky vysvětleno, případně Ondra dovysvětlí, komunikace s ním je na jedničku. Určitě doporučuju.",
    ],
    [
      "Anna Šmídová",
      "Na Ondru jsem dostala doporučení od mého kolegy a upřímně jsem vůbec nevěděla, co od osobního trenéra očekávat, protože to byla moje první zkušenost. Ondra ale předčil ma očekávání. Během prvního setkání proběhla diagnostika a projeli jsme si cviky z navrženého plánu, abych přesně věděla, jak je správně cvičit. Líbí se mi aplikace, kde si zaznamenavam své pokroky a hlavně přes ni společně můžeme komunikovat. Vnímám ho jako člověka na svém místě a těším se na první výsledky.",
    ],
  ];
  const [visibleRows, setVisibleRows] = useState(2);

  const toggleRows = () => {
    setVisibleRows((prevRows) => prevRows + 2);
  };
  const removeRows = () => {
    setVisibleRows((prevRows) =>
      prevRows - 2 === 0 ? prevRows : prevRows - 2
    );
  };

  return (
    <div className="">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {refArr.slice(0, visibleRows).map((reference, key) => (
          <div key={key} className="bg-[#0e0e0e] p-10 rounded-xl">
            <div className="flex gap-2 items-center justify-between bg-[#ff0000] p-4 rounded-xl">
              <IoPersonSharp size={30} />
              <p className="font-bold uppercase">{reference[0]}</p>
              <p className="text-neutral-200 font-body font-bold">
                {key + 1}/{refArr.length}
              </p>
            </div>

            <p className="pt-4 font-body text-neutral-200">{reference[1]}</p>
          </div>
        ))}
      </div>
      {refArr.length >= visibleRows && (
        <div className="flex gap-2">
          {refArr.length > visibleRows && (
            <button
              className="mt-8 bg-[#ff0000] flex justify-center items-center text-white py-2 px-4 rounded-xl"
              onClick={toggleRows}
            >
              <IoChevronDown size={28} />
            </button>
          )}

          {visibleRows >= 4 && (
            <button
              className="mt-8 bg-[#ff0000] flex justify-center items-center text-white py-2 px-4 rounded-xl"
              onClick={removeRows}
            >
              <IoChevronUp size={28} />
            </button>
          )}
        </div>
      )}
    </div>
  );
};
export default Reference;
