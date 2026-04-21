const quizData = [
  { q: "Asiakas pyytää sinua pysähtymään hyvin vilkkaasti liikennöidyllä paikalla, jotta hän voi jäädä pois. Mikä väittämä on oikein?", a: ["Asiakkaalla on oikeus valita pysähtymispaikka, koska hän maksaa kyydistä.", "Asiakkaalla on velvollisuus maksaa mahdollinen sakko, jos hän pyytää pysähtymään kielletyssä paikassa.", "Asiakkaan turvallinen autoon tulo ja poistuminen on kuljettajan vastuulla, joten etsit turvallisemman paikan."], c: 2 },
  { q: "Milloin asiakkaalle tarvitsee tarjota kuitti taksikyydistä?", a: ["Jos kyyti on tilattu applikaatiolla.", "Jos taksin hinta on kiinteä.", "Kyydistä on annettava kuitti."], c: 2 },
  { q: "Miten toimit, kun asiakas pyytää ajamaan ylinopeutta?", a: ["Voin ajaa ylinopeutta, jos asiakas lupaa maksaa sakot.", "Kerron asiakkaalle, etten voi ajaa ylinopeutta, mutta teen parhaani, jotta hän pääsee turvallisesti perille nopeinta mahdollista reittiä.", "Voin ajaa ylinopeutta, jos asiakkaalla on siihen perusteltu syy."], c: 1 },
  { q: "Laissa liikenteen palveluista on lueteltu laatuvaatimuksia. Mikä pitää paikkansa?", a: ["Laatuvaatimukset koskevat ainoastaan taksiluvan haltijaa.", "Laatuvaatimukset koskevat jokaista taksinkuljettajaa.", "Laatuvaatimukset koskevat vain yrittäjiä, joilla on enemmän kuin kaksi vakituista työntekijää."], c: 1 },
  { q: "Liikenteessä on poikkeusjärjestelyjä onnettomuuden vuoksi. Saat ristiriitaisia ohjeita. Kenen ohjeita noudatat?", a: ["Liikenneviraston.", "Poliisin.", "Työnantajan."], c: 1 },
  { q: "Mikä väittämä taksinkuljettajan velvollisuuksista on oikein?", a: ["Alle 135 cm pitkä lapsi tarvitsee aina turvalaitteen matkustaessaan taksissa.", "Lapsi voi matkustaa ilman turvalaitetta, jos hän istuu takapenkillä ja käyttää turvavyötä.", "Alle 3-vuotias istuu aina etupenkillä."], c: 0 },
  { q: "Millä maksuvälineillä asiakas saa maksaa taksimatkansa, jos hän tulee taksiasemalta ilman ennakkotilausta?", a: ["Ainoastaan käteisellä.", "Kuljettaja päättää maksuvälineen.", "Käteisellä ja yleisimmillä maksukorteilla."], c: 2 },
  { q: "17-vuotias Elviira matkustaa yksin taksilla. Kuka vastaa turvavyön käytöstä?", a: ["Kuljettaja.", "Elviira itse.", "Taksissa turvavyön käyttö on aina vapaaehtoista."], c: 1 },
  { q: "Saako taksinkuljettaja työskennellä yhtäjaksoisesti 15 tuntia?", a: ["Kyllä, jos työtä ei voida muuten tarkoituksenmukaisesti järjestää.", "Kyllä, jos kuljettaja itse haluaa.", "Kyllä, jos työnantaja kuuluu taksityönantajaliittoon."], c: 0 },
  { q: "Miten alle 3-vuotiasta lasta tulee kuljettaa taksissa?", a: ["Ilman turvalaitetta takapenkillä turvavyöhön kytkettynä.", "Täysi-ikäisen matkustajan sylissä takapenkillä.", "Aina asianmukaisessa turvalaitteessa."], c: 2 },
  { q: "Mikä seuraavista väittämistä pitää paikkansa?", a: ["Jos kuljettaja joutuu soittamaan ajon aikana, handsfree-laitetta ei tarvitse käyttää.", "Jos taksissa ei ole asiakkaita, kuljettaja saa katsella televisiokuvaa integroidusta näytöstä ajon aikana.", "Kuljettaja saa soittaa ajon aikana handsfree-laitetta käyttäen, jos se on kuljetuksen suorittamiseksi välttämätöntä."], c: 2 },
  { q: "Aino aloittaa työvuoronsa klo 5.30. Milloin hänen on pidettävä ensimmäinen tauko?", a: ["Silloin kun hän tuntee itsensä väsyneeksi.", "Viimeistään klo 11.00, sillä yhtäjaksoinen työaika saa olla 5,5 tuntia.", "Viimeistään klo 10.00, sillä yhtäjaksoinen työaika saa olla 4,5 tuntia."], c: 1 },
  { q: "Mikä pyörätuolin käyttöä ja kiinnittämistä koskeva väite pitää paikkansa?", a: ["Sähköpyörätuolia ei tarvitse kiinnittää ajoneuvoon.", "Asiakkaan ei tarvitse käyttää turvavyötä pyörätuolissa istuessaan.", "Pyörätuoli tulee kiinnittää turvallisesti ajoneuvoon."], c: 2 },
  { q: "Mikä pyörätuolin kiinnittämistä koskeva väite pitää paikkansa?", a: ["Pyörätuoli on kiinnitettävä sen rungosta.", "Sisäkäyttöön tarkoitettua pyörätuolia ei tarvitse kiinnittää alle kilometrin matkalla.", "Asiakas päättää, kiinnitetäänkö pyörätuoli."], c: 0 },
  { q: "Miten pyörätuoli kiinnitetään, kun matkustaja istuu siinä matkan ajan?", a: ["Jarrut päälle ja pyörätuoli kiinnitetään auton turvavyöllä.", "Jarrut päälle ja pyörätuoli kiinnitetään rungosta neljästä pisteestä.", "Asiakas päättää kiinnittämisestä."], c: 1 },
  { q: "Kenen vastuulla on pyörätuolin huolellinen kiinnittäminen taksiin, jos asiakkaalla on avustaja mukana?", a: ["Asiakkaan.", "Taksinkuljettajan.", "Henkilökohtaisen avustajan."], c: 1 },
  { q: "Taksin puhelin soi ajon aikana, mutta handsfree-laite puuttuu. Mitä teet?", a: ["Vastaan normaalisti ja pahoittelen häiriötä.", "Pysähdyn tien varteen, jos puheluun on välttämätöntä vastata tai tietoja kirjata.", "En vastaa, vaan soitan takaisin kyydin päätyttyä."], c: 2 },
  { q: "Mitä on hyvä muistaa näkövammaisen asiakkaan opaskoirasta?", a: ["Opaskoiraa tulee aina taputtaa kiitokseksi.", "Opaskoira matkustaa asiakkaan jalkatilassa tai matkatavaratilassa.", "Opaskoira istuu aina takapenkillä."], c: 1 },
  { q: "Mitä oppilaskuljetuksia tekevän taksinkuljettajan tehtäviin kuuluu?", a: ["Oppilaan hakeminen sisältä, kotitehtävien tarkastus ja luokkaan saattaminen.", "Oppilaan turvavyön varmistaminen ja vastuulliseen liikennekäyttäytymiseen opastaminen.", "Jatkuva yhteydenpito kaikkien oppilaiden vanhempiin."], c: 1 },
  { q: "Miten toimit, kun asiakas ilmoittaa, ettei halua keskustella?", a: ["Annan asiakkaan istua rauhassa ja kysyn vain matkaan tai reittiin liittyvät asiat.", "Osoitan asiakkaalle, että hänen vuorovaikutuksensa on huonoa.", "Yritän keskustella koko matkan ajan."], c: 0 },
  { q: "Mitä kuljettajan tulee muistaa koulun ja päivähoitokuljetuksissa?", a: ["Lapsille ei saa puhua matkan aikana.", "Lapsille tulee tarjota virvokkeita.", "Kuljettajan tulee käyttäytyä vastuullisen aikuisen ja esimerkillisen roolimallin mukaisesti."], c: 2 },
  { q: "Mitä on hyvä muistaa kuljettajan turvavyön käytöstä koulukuljetuksissa?", a: ["Kuljettajan ei tarvitse käyttää turvavyötä.", "Myös kuljettajan tulee käyttää turvavyötä.", "Takapenkillä matkustavan ei tarvitse käyttää turvavyötä."], c: 1 },
  { q: "Alkolukko estää ajoneuvon käynnistymisen koulun tai päivähoitokuljetuksissa, jos uloshengitysilman alkoholipitoisuus on...", a: ["0,10 milligrammaa alkoholia litrassa uloshengitysilmaa tai enemmän.", "0,50 milligrammaa litrassa uloshengitysilmaa tai enemmän.", "Yli 0 milligrammaa litrassa uloshengitysilmaa."], c: 0 },
  { q: "Miten toimit, kun hyvin iäkäs ja hitaasti liikkuva asiakas tulee vilkkaasta paikasta?", a: ["Otan häntä käsivarresta kysymättä.", "Pyydän häntä kiirehtimään autoon.", "Nousen ajoneuvosta ja tiedustelen, tarvitseeko hän apua."], c: 2 },
  { q: "Kuka hankkii rikosrekisteriotteen koulun ja päivähoitokuljetuksia varten?", a: ["Kuljettajan työnantaja.", "Kuljettaja.", "Kuljetuksen tilaaja."], c: 1 },
  { q: "Näet polkupyöräilijän kaatuvan vilkkaalla tiellä ja jäävän liikkumattomana maahan. Mikä on ensimmäinen ensiaputoimenpide?", a: ["Hengitysteiden avaaminen.", "Murtumien ja verenvuotojen tutkiminen.", "Polkupyöräilijän siirtäminen turvallisempaan paikkaan."], c: 2 },
  { q: "Liikuntavammaisella asiakkaalla on avustaja mukana. Miten toimit?", a: ["Keskustelen aina vain avustajan kanssa.", "Keskustelen asiakkaan kanssa.", "Pyydän kirjalliset ohjeet."], c: 1 },
  { q: "Haet ensimmäistä kertaa näkövammaisen Eeliksen, jolla on valkoinen keppi ja opaskoira. Mitä teet?", a: ["Odotan kadunvarressa, että hän tulee autolle, ja avaan oven sisältä.", "Soitan torvea, jotta hän tietää taksin saapuneen.", "Nousen autosta, esittelen itseni, kerron missä taksi on ja kysyn missä hän haluaa istua."], c: 2 },
  { q: "Ikääntynyt avustettava asiakas jätetään hoitolaitoksen luona. Mikä on paras toimintatapa?", a: ["Vastuu päättyy, kun asiakas nousee autosta.", "Huolehdin tarvittaessa, että asiakas pääsee hoitohenkilökunnan luo.", "Huolehdin aina asiakkaan ulkovaatteiden riisumisesta."], c: 1 },
  { q: "Vaikeavammainen 8-vuotias Helmi tarvitsee Kela-kuljetuksia. Voiko hänellä olla oikeus vakiotaksiin?", a: ["Ei, vakiotaksi on vain vanhuksille ja työssä käyville vaikeavammaisille aikuisille.", "Kyllä, mutta vain jos äiti matkustaa mukana.", "Kyllä, Helmi voi olla oikeutettu vakiotaksiin."], c: 2 },
  { q: "Asiakas on tilannut Kela-kyydin keskitetystä tilausnumerosta. Asiakas maksaa...", a: ["Koko matkan hinnan.", "Enintään omavastuun 50 euroa.", "Enintään omavastuun 25 euroa."], c: 2 },
  { q: "Miten neuvot asiakasta, joka kysyy vakiotaksioikeudesta Kela-korvattavissa taksimatkoissa?", a: ["Soittamaan kenelle tahansa vapaana olevalle taksille.", "Ottamaan taksin taksitolpalta.", "Soittamaan Kelan palvelunumeroon."], c: 2 },
  { q: "Asiakas saa epileptisen kouristuskohtauksen. Mikä on oikea ensiaputoimenpide?", a: ["Pidän tiukasti kiinni asiakkaasta estääkseni kouristukset.", "Huolehdin, ettei asiakas kolhi päätään, en estä kouristuksia ja käännän hänet kylkiasentoon kouristusten vähentyessä.", "Jatkan matkaa, koska kohtaus menee yleensä ohi."], c: 1 },
  { q: "Miten toimit, jos pyörätuolissa olevan asiakkaan vaatteet ovat huonosti ja hänellä on epämukava olla?", a: ["Varmistan, että asiakkaalla on mukava olla, ja tarvittaessa autan oikaisemaan vaatteet.", "Kuljettajan tehtävä ei ole suoristaa asiakkaan vaatteita.", "Kuljettajan tehtävä on aina pukea asiakas ennen kyytiin ottamista."], c: 0 },
  { q: "Miten toimit, jos asiakas on maksuhetkellä haluton maksamaan matkaansa?", a: ["Kutsun tarvittaessa poliisin selvittämään asiaa.", "Kutsun paikalle mahdollisimman monta muuta taksinkuljettajaa.", "Otan asiakkaalta väkisin arvoesineen pantiksi."], c: 0 },
  { q: "Asiakas tekee valituksen töykeästä palvelusta. Onko asiakkaalla oikeus valittaa?", a: ["Kyllä, asiakkaisiin tulee aina suhtautua kohteliaasti ja asiallisesti.", "Ei, asiakas ostaa vain kuljetuksen määränpäähän.", "Ei, jos kuljettajan tapa on toimia niin."], c: 0 },
  { q: "Kiireinen asiakas vaatii ylinopeutta ja lupaa maksaa sakot. Kuinka toimit?", a: ["Kerron, etten voi ajaa ylinopeutta, mutta ajan turvallisesti nopeinta mahdollista reittiä.", "Hyväksyn sopimuksen ja lähden ajamaan niin lujaa kuin pääsen.", "Kieltäydyn kyydistä ja kutsun poliisin, koska asiakas yllytti rikokseen."], c: 0 },
  { q: "Mikä ennakoivassa ajotavassa on tärkeintä?", a: ["Osata toimia oikein onnettomuuden satuttua.", "Taitoa toimia oikein vaaratilanteessa onnettomuuden välttämiseksi.", "Pyrkiä ajamaan niin, ettei joudu vaara- eikä onnettomuustilanteeseen."], c: 2 },
  { q: "Mikä ennakoivassa ajotavassa on tärkeintä?", a: ["Osata toimia oikein onnettomuuden satuttua.", "Taitoa toimia oikein vaaratilanteessa onnettomuuden välttämiseksi.", "Pyrkiä ajamaan niin, ettei joudu vaara- eikä onnettomuustilanteeseen."], c: 2 },
  { q: "Liikuntarajoitteinen asiakas pyytää sinua hakemaan kaksi pulloa viiniä Alkosta. Mitä vastaat?", a: ["Valitettavasti laki kieltää minua hakemasta alkoholia asiakkaille.", "Voin hakea, kunhan näen kenelle juomat tulevat.", "Voin hakea, jos asiakas kirjoittaa valtakirjan."], c: 0 },
  { q: "Miten taksinkuljettajan ajolupaa hakevan terveysvaatimusten täyttyminen osoitetaan?", a: ["Lääkärintarkastuksella ja siitä saatavalla todistuksella.", "Omalla kirjallisella terveydentilaraportilla.", "Terveydentilaa ei tarvitse todistaa."], c: 0 },
  { q: "Mikä seuraavista on hyvää asiakaspalvelua?", a: ["Kuljettaja tervehtii kohteliaasti, tunnustelee onko asiakas halukas juttelemaan ja antaa asiakkaan päättää keskustelusta.", "Kuljettaja tervehtii kohteliaasti ja keskustelee vain ajoreitistä.", "Kuljettaja tervehtii kohteliaasti ja aloittaa keskustelun omasta lempiaiheestaan."], c: 0 },
  { q: "10-vuotias Elina ei halua käyttää turvavyötä ja sanoo äidin antaneen luvan. Mitä teet?", a: ["Huoltajat voivat päättää, ettei turvavyötä tarvita.", "Taksissa voi matkustaa ilman turvavyötä.", "Huolehdin, että Elina kiinnittää turvavyön. Yksin matkustavan lapsen pitää käyttää turvavyötä."], c: 2 },
  { q: "Kuinka pitkään B-luokan ajo-oikeuden on pitänyt olla, jotta taksinkuljettajan ajolupa voidaan myöntää?", a: ["Vähintään yhden vuoden ajan.", "Vähintään kolmen vuoden ajan.", "Vähintään viiden vuoden ajan."], c: 0 },
  { q: "Pakkasyönä väsynyt ja alkoholia nauttinut asiakas hoippuu kotiovelleen. Miten toimit?", a: ["Varmistan, että asiakas pääsee kotiovesta sisään, ja jatkan sitten matkaa.", "Asiakas ei ole enää vastuullani poistuttuaan autosta.", "Puhallutan asiakkaan ja vien hänet poliisille, jos raja ylittyy."], c: 0 },
  { q: "Huomaat kyydin päätyttyä, että asiakas on unohtanut käsilaukkunsa autoon. Mitä teet?", a: ["Vien käsilaukun kotiin ja odotan yhteydenottoa.", "Toimitan sen tilausvälitysyhtiön toimistolle viikon kuluessa.", "Toimitan sen viipymättä asiakkaalle tai poliisin löytötavaratoimistoon."], c: 2 },
  { q: "Miten kuljettaja vaikuttaa asiakkaan matkustusmukavuuteen?", a: ["Ylläpitämällä jatkuvaa keskustelua.", "Käyttämällä hyvää pelisilmää: joskus asiakas ei halua keskustella, joskus haluaa juttukumppanin.", "Olemalla aina täysin huomaamaton ja äänetön."], c: 1 },
  { q: "Kuinka paljon taksissa saa enintään ylittää istuinpaikkaluvun mukaisen henkilömäärän, jos kyseessä ei ole koulu- tai päivähoitokuljetus?", a: ["Ei yhtään.", "Enintään 30 %.", "Kuljettaja voi itse päättää."], c: 0 },
  { q: "Kuinka pitkään taksinkuljettajan ajolupa on enintään voimassa?", a: ["Viisi vuotta.", "Viisitoista vuotta.", "Toistaiseksi."], c: 0 },
  { q: "Mitä tarkoittaa taksinkuljettajalta vaadittava riittävä kielitaito?", a: ["Kuljettaja pystyy keskustelemaan sujuvasti päivän tapahtumista.", "Kuljettajan on pitänyt suorittaa kansalaisuuden kielikoe.", "Kuljettaja kykenee kommunikoimaan asiakkaan kanssa niin, että asiakas pääsee turvallisesti oikeaan määränpäähän."], c: 2 },
  { q: "Kuka myöntää taksinkuljettajan ajoluvan?", a: ["ELY-keskus.", "Liikenne- ja viestintävirasto Traficom.", "Poliisi."], c: 1 },
  { q: "Aulis on hankkinut taksinkuljettajan ajoluvan kolme vuotta sitten ja muuttaa Vantaalta Jyväskylään. Voiko hän aloittaa uudella työnantajalla?", a: ["Ei, ajolupa on voimassa vain kaksi vuotta.", "Kyllä, mutta hänen täytyy suorittaa Jyväskylän paikallistuntemuskoe ja hakea kelpoisuusalueen laajentamista.", "Kyllä, taksinkuljettajan ajolupa on voimassa koko Manner-Suomen alueella."], c: 2 },
  { q: "Missä tilanteessa kuljettaja voi kieltäytyä kyydistä?", a: ["Kyyti suuntautuu toiselle liikennealueelle.", "Laillinen työaika ylittyisi.", "Asiakas on menossa toisen kunnan alueelle."], c: 1 }
];

const startScreen = document.getElementById("startScreen");
const quizScreen = document.getElementById("quizScreen");
const resultScreen = document.getElementById("resultScreen");
const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");
const restartTop = document.getElementById("restartTop");
const reviewBtn = document.getElementById("reviewBtn");
const shuffleToggle = document.getElementById("shuffleToggle");
const questionCounter = document.getElementById("questionCounter");
const scoreBadge = document.getElementById("scoreBadge");
const progressFill = document.getElementById("progressFill");
const questionText = document.getElementById("questionText");
const answers = document.getElementById("answers");
const feedback = document.getElementById("feedback");
const finalScore = document.getElementById("finalScore");
const finalMessage = document.getElementById("finalMessage");
const reviewList = document.getElementById("reviewList");

let questions = [];
let currentIndex = 0;
let score = 0;
let mistakes = [];
let answered = false;

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function startQuiz() {
  questions = shuffleToggle.checked ? shuffle(quizData) : [...quizData];
  currentIndex = 0;
  score = 0;
  mistakes = [];
  startScreen.classList.add("hidden");
  resultScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");
  showQuestion();
}

function showQuestion() {
  answered = false;
  nextBtn.disabled = true;
  feedback.textContent = "";
  feedback.className = "feedback";
  answers.innerHTML = "";

  const item = questions[currentIndex];
  questionCounter.textContent = `Kysymys ${currentIndex + 1} / ${questions.length}`;
  scoreBadge.textContent = `Pisteet: ${score}`;
  progressFill.style.width = `${(currentIndex / questions.length) * 100}%`;
  questionText.textContent = item.q;

  item.a.forEach((choice, index) => {
    const btn = document.createElement("button");
    btn.className = "answer-btn";
    btn.textContent = choice;
    btn.addEventListener("click", () => chooseAnswer(btn, index));
    answers.appendChild(btn);
  });
}

function chooseAnswer(button, selectedIndex) {
  if (answered) return;
  answered = true;
  nextBtn.disabled = false;

  const item = questions[currentIndex];
  const buttons = document.querySelectorAll(".answer-btn");
  buttons.forEach((btn, index) => {
    btn.disabled = true;
    if (index === item.c) btn.classList.add("correct");
  });

  if (selectedIndex === item.c) {
    score++;
    scoreBadge.textContent = `Pisteet: ${score}`;
    feedback.textContent = "Oikein!";
    feedback.classList.add("good");
  } else {
    button.classList.add("wrong");
    feedback.textContent = "Väärin — oikea vastaus on merkitty vihreällä.";
    feedback.classList.add("bad");
    mistakes.push({ question: item.q, selected: item.a[selectedIndex], correct: item.a[item.c] });
  }
}

function nextQuestion() {
  currentIndex++;
  if (currentIndex < questions.length) {
    showQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  quizScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");
  progressFill.style.width = "100%";
  const percent = Math.round((score / questions.length) * 100);
  finalScore.textContent = `${score} / ${questions.length} (${percent}%)`;
  finalMessage.textContent = percent >= 80
    ? "Hieno tulos. Tämä alkaa jo näyttää taksitolpan terävimmältä kulmalta."
    : percent >= 60
      ? "Hyvä alku. Kertaa väärät vastaukset ja tee kierros uudelleen."
      : "Harjoitus tekee kuljettajan. Katso väärät vastaukset ja kokeile uudestaan.";

  reviewBtn.disabled = mistakes.length === 0;
  reviewBtn.textContent = mistakes.length === 0 ? "Ei vääriä vastauksia" : "Näytä väärät vastaukset";
  reviewList.classList.add("hidden");
  reviewList.innerHTML = "";
}

function showReview() {
  reviewList.innerHTML = "";
  mistakes.forEach((mistake, index) => {
    const div = document.createElement("div");
    div.className = "review-item";
    div.innerHTML = `
      <h3>${index + 1}. ${mistake.question}</h3>
      <p><strong>Sinun vastauksesi:</strong> ${mistake.selected}</p>
      <p><strong>Oikea vastaus:</strong> ${mistake.correct}</p>
    `;
    reviewList.appendChild(div);
  });
  reviewList.classList.toggle("hidden");
}

startBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", nextQuestion);
restartBtn.addEventListener("click", startQuiz);
restartTop.addEventListener("click", () => {
  startScreen.classList.remove("hidden");
  quizScreen.classList.add("hidden");
  resultScreen.classList.add("hidden");
});
reviewBtn.addEventListener("click", showReview);
