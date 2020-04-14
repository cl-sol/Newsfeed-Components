/* This is the data we will be using to create our article components */
/* Look over this data, then proceed to line 91*/
const data = [
  {
    title: 'Lambda School Students: "We\'re the best!"',
    date: 'Nov 5th, 2018',
    firstParagraph: `Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura skywalker lando
        moff wicket tatooine luke.Solo wampa wampa calrissian yoda moff.Darth grievous darth gonk darth hutt.Darth baba skywalker
        watto fett jango maul han.Mon ewok sidious sidious lando kenobi grievous gamorrean solo.Yoda wedge utapau darth calamari.
        Hutt calamari darth jabba.Darth dooku amidala organa moff.Boba darth binks solo hutt skywalker dantooine skywalker.Qui - gonn
        jar twi'lek jinn leia jango skywalker mon.`,

    secondParagraph: `Grievous fett calamari anakin skywalker hutt.Alderaan darth kenobi darth r2- d2
        windu mothma.Sidious darth calamari moff.Wampa mothma sith wedge solo mara.Darth gonk maul sith moff chewbacca palpatine
        mace amidala.C - 3po solo skywalker anakin yoda leia.Maul wampa bespin watto jade ewok darth jabba.Lando dantooine moff
        k - 3po dantooine luke.Fisto mandalore darth wedge c - 3p0 ahsoka.Secura moff palpatine fett.Anakin sith darth darth.Moff
        solo leia ben ponda jade.Binks jango aayla skywalker skywalker cade.Mustafar darth ventress anakin watto.Yavin jawa sebulba
        owen jinn tatooine sith organa.`,

    thirdParagraph: `Dagobah hutt jawa leia calamari ventress skywalker yoda. Binks wicket hutt coruscant sidious
        naboo ackbar tatooine. Hutt lars padmé darth. Maul solo darth darth jabba qui-gon chewbacca darth maul. Moff baba wicket
        han. C-3po antilles moff qui-gon ahsoka aayla dooku amidala. Palpatine droid amidala droid k-3po twi'lek padmé wookiee. Leia
        moff calamari mon obi-wan. Solo grievous lando coruscant. Jinn darth palpatine obi-wan mon.`
  },
  {
    title: 'Javascript and You, ES6',
    date: 'May 7th, 2019',
    firstParagraph: `Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal. Holly, Snape centaur portkey ghost
        Hermione spell bezoar Scabbers. Peruvian-Night-Powder werewolf, Dobby pear-tickle half-moon-glasses, Knight-Bus. Padfoot
        snargaluff seeker: Hagrid broomstick mischief managed. Snitch Fluffy rock-cake, 9 ¾ dress robes I must not tell lies. Mudbloods
        yew pumpkin juice phials Ravenclaw’s Diadem 10 galleons Thieves Downfall. Ministry-of-Magic mimubulus mimbletonia Pigwidgeon
        knut phoenix feather other minister Azkaban. Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed.
        Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks`,

    secondParagraph: `Boggarts lavender robes, Hermione Granger Fantastic Beasts and Where to Find Them. Bee in your bonnet Hand of Glory elder
        wand, spectacles House Cup Bertie Bott’s Every Flavor Beans Impedimenta. Stunning spells tap-dancing spider Slytherin’s Heir
        mewing kittens Remus Lupin. Palominos scarlet train black robes, Metamorphimagus Niffler dead easy second bedroom. Padma
        and Parvati Sorting Hat Minister of Magic blue turban remember my last.`,

    thirdParagraph: `Toad-like smile Flourish and Blotts he knew I’d come back Quidditch World Cup. Fat Lady baubles banana fritters fairy lights 
        Petrificus Totalus. So thirsty, deluminator firs’ years follow me 12 inches of parchment. Head Boy start-of-term banquet Cleansweep Seven 
        roaring lion hat. Unicorn blood crossbow mars is bright tonight, feast Norwegian Ridgeback. Come seek us where our voices sound, we cannot 
        sing above the ground, Ginny Weasley bright red. Fanged frisbees, phoenix tears good clean match.`
  },
  {
    title: 'React vs Angular vs Vue',
    date: 'June 7th, 2019',
    firstParagraph: `Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charizard Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Squirtle Lorem ipsum dolor sit amet, consectetur adipiscing elit. Wartortle Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Blastoise Lorem ipsum dolor sit amet, consectetur adipiscing elit. Caterpie Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Metapod Lorem ipsum dolor sit amet, consectetur adipiscing elit. Butterfree
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Weedle Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Kakuna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beedrill Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.`,

    secondParagraph: `Pidgey Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pidgeotto Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Pidgeot Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rattata Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raticate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Spearow Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Fearow Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ekans Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Arbok Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pikachu Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raichu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sandshrew Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sandslash Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nidorina Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoqueen Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidorino Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Nidoking Lorem ipsum`,

    thirdParagraph: `Gotta catch 'em all Horsea gym Ninjask Absol Sinnoh Poliwag. Gotta catch 'em all Youngster wants to fight Soda Pop Floatzel 
        Leech Life Seismitoad Ariados. Earthquake Pokemon Glitch City Tail Whip Skitty Ekans Dialga. Ut aliquip ex ea commodo consequat James 
        Castform Lotad the power that's inside Burnt Berry Makuhita. Ghost Ariados Corphish Dusclops Golbat Gligar Zweilous.`
  },
  {
    title: 'Professional Software Development in 2019',
    date: 'Jan 1st, 2019',
    firstParagraph: `Hodor hodor HODOR! Hodor hodor - hodor, hodor. Hodor hodor... Hodor hodor hodor; hodor hodor. Hodor hodor hodor, hodor, hodor
          hodor. Hodor, hodor. Hodor. Hodor, hodor - hodor... Hodor hodor hodor; hodor HODOR hodor, hodor hodor?! Hodor hodor, hodor.
          Hodor hodor hodor hodor hodor! Hodor hodor - HODOR hodor, hodor hodor hodor hodor hodor; hodor hodor? `,

    secondParagraph: `Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor, hodor. Hodor hodor, hodor, hodor hodor. Hodor! Hodor hodor, hodor;
          hodor hodor hodor? Hodor, hodor. Hodor. Hodor, hodor - HODOR hodor, hodor hodor hodor! Hodor, hodor. Hodor. Hodor, HODOR
          hodor, hodor hodor, hodor, hodor hodor. Hodor hodor - hodor - hodor... Hodor hodor hodor hodor hodor hodor hodor?! Hodor
          hodor - hodor hodor hodor. Hodor. Hodor hodor... Hodor hodor hodor hodor hodor? `,

    thirdParagraph: `Hodor hodor - hodor... Hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor hodor hodor hodor hodor; hodor hodor? Hodor!
          Hodor hodor, HODOR hodor, hodor hodor?! Hodor! Hodor hodor, HODOR hodor, hodor hodor, hodor, hodor hodor. Hodor, hodor.
          Hodor. Hodor, hodor, hodor. Hodor hodor... Hodor hodor hodor?! Hodor, hodor... Hodor hodor HODOR hodor, hodor hodor. Hodor.`
  },
  {
    title: 'Additional Paragraph 1',
    date: 'April 14, 2020',
    firstParagraph: "St. agur blue cheese caerphilly cream cheese. Macaroni cheese stinking bishop blue castello hard cheese gouda roquefort pepper jack cheese and biscuits. The big cheese stinking bishop dolcelatte lancashire queso cheddar cheesecake monterey jack. Bocconcini cheese and biscuits.",

    secondParagraph: "Cow melted cheese parmesan. Bavarian bergkase cut the cheese everyone loves edam pecorino cheese on toast who moved my cheese camembert de normandie. Cheese strings airedale say cheese emmental squirty cheese cheese strings queso halloumi. Cheese triangles melted cheese cut the cheese when the cheese comes out everybody's happy emmental.",

    thirdParagraph: "Mozzarella roquefort who moved my cheese. Croque monsieur fromage frais say cheese danish fontina gouda manchego who moved my cheese bavarian bergkase. Fondue boursin st. agur blue cheese cottage cheese fromage feta fromage cheese on toast. Cow caerphilly cauliflower cheese macaroni cheese cheese on toast fromage frais gouda macaroni cheese. Cheesecake everyone loves babybel feta."
  },
  {
    title: 'Additional Paragraph 2',
    date: 'April 15, 2020',
    firstParagraph: "Lorem ipsizzle dolizzle sit daahng dawg, rizzle adipiscing elit. Fo shizzle mah nizzle fo rizzle, mah home g-dizzle bizzle velizzle, fo shizzle mah nizzle fo rizzle, mah home g-dizzle volutpizzle, suscipit quizzle, ass vizzle, shizznit. Check out this cool tortor. Sed fo. Gangsta izzle dolizzle dapibus turpizzle mah nizzle bizzle. Mauris pimpin' nibh rizzle turpizzle. Dang izzle i'm in the shizzle. funky fresh fo shizzle tellivizzle. In hac mah nizzle platea dizzle. Mofo ass. Dawg tellus dawg, pretizzle shit, mattizzle its fo rizzle, rizzle vitae, shizzlin dizzle. The bizzle pizzle. Integer semper velit doggy purus.",

    secondParagraph: "Bizzle check it out diam quis nisi sure mollizzle. Suspendisse potenti. Morbi odio. Vivamizzle dang. Brizzle check it out. Crunk maurizzle gangsta, bow wow wow a, fo shizzle mah nizzle fo rizzle, mah home g-dizzle sit crazy, black in, pede. Pellentesque gravida. Vestibulizzle orci mi, volutpizzle izzle, sagittizzle sizzle, fizzle semper, velizzle. Cras in ipsizzle. Fizzle volutpizzle felis vizzle orci. Cras break yo neck, yall justo fo shizzle mah nizzle fo rizzle, mah home g-dizzle purus sodales ornare. Break it down venenatizzle justo the bizzle that's the shizzle. Nunc sure. Suspendisse venenatis that's the shizzle lacizzle. Curabitizzle shizznit ante. Check it out pharetra, leo eu i'm in the shizzle hendrerizzle, bling bling felis boom shackalack sizzle, the bizzle aliquizzle magna felis luctus pede. Mah nizzle a check it out. Class aptent taciti fizzle izzle litora torquent tellivizzle conubia nostra, pizzle inceptos sheezy. Aliquizzle interdizzle, fo shizzle sheezy for sure nonummy, fo shizzle orci viverra check it out, tellivizzle semper risus arcu dawg sizzle.",

    thirdParagraph: "Donec posuere boom shackalack i'm in the shizzle. Yippiyo a elit izzle nibh pretizzle shiznit. Maecenas a fo shizzle mah nizzle fo rizzle, mah home g-dizzle. Dawg in lacus sizzle izzle elementum fo shizzle mah nizzle fo rizzle, mah home g-dizzle. Nunc at yo sit hizzle eros ultricizzle hizzle. In bling bling tortizzle, ultricizzle dawg, hendrerit quis, adipiscing shizznit, crunk. Shizzle my nizzle crocodizzle check out this leo, aliquizzle fo shizzle, pharetra nizzle, black sizzle, turpis. Fo dope. Crizzle lorem. Prizzle fo shizzle erat izzle libero shiz fo. Fusce izzle augue gizzle shit ullamcorpizzle doggy. Phasellizzle own yo' sapizzle crunk erizzle. Suspendisse ma nizzle for sure, sollicitudizzle sed, gizzle my shizz, commodo nizzle, justo. Away black uhuh ... yih! ligula. Its fo rizzle feugizzle, gangsta a fizzle tempor, sapizzle metizzle bow wow wow ante, egizzle phat the bizzle enizzle da bomb bling bling. Phasellus fizzle leo, imperdizzle tellivizzle, tempus sure, semper mammasay mammasa mamma oo sa, sapizzle. Sheezy the bizzle magna vel ipsum. Sizzle fo nibh, suscipit vitae, vestibulum crunk, bizzle brizzle, for sure. Mauris crunk maurizzle. Fo shizzle non doggy sizzle owned risizzle shizznit congue."
  }
];

/* Step 1: Create a function that creates a component. You will want your component to look like the template below: 
  
  <div class="article">
    <h2>{title of the article}</h2>
    <p class="date">{date of the article}</p>

    {three separate paragraph elements}

    <span class='expandButton'></span>
  </div>

  Hint: You will need to use createElement more than once here!

  Your function should take either an object as it's one argument, or 5 separate arguments mapping to each piece of the data object above.

  Step 2: Add an event listener to the expandButton span. This event listener should toggle the class 'article-open' on the 'article' div.

  Step 3: return the entire component.

  Step 4: Map over the data, creating a component for each oject and add each component to the DOM as children of the 'articles' div.

  Step 5: Add a new article to the array. Make sure it is in the same format as the others. Refresh the page to see the new article.

*/


  function makeArticle(title, date, firstParagrah, secondParagraph, thirdParagraph) {
    const article = document.createElement("div");
    const articleTitle = document.createElement("h2");
    const articleDate = document.createElement("p");
    const paragraphOne = document.createElement("p");
    const paragraphTwo = document.createElement("p");
    const paragraphThree = document.createElement("p");
    const expandButton = document.createElement("span");

    //giving each element a class name
    article.classList.add("article");
    articleDate.classList.add("date");
    expandButton.classList.add("expandButton");
    
    //adding each element to the div
    article.append(articleTitle);
    article.append(articleDate);
    article.append(paragraphOne);
    article.append(paragraphTwo);
    article.append(paragraphThree);
    article.append(expandButton);

    //adding text content to each element
    articleTitle.textContent = title;
    articleDate.textContent = date;
    paragraphOne.textContent = firstParagrah;
    paragraphTwo.textContent = secondParagraph;
    paragraphThree.textContent = thirdParagraph; 
    expandButton.textContent = "More";

    //add event listener to expand button
    expandButton.addEventListener("click", () => {
      article.classList.toggle("article-open");
    })

    return article;
  }

  data.forEach( el => {
    const newArticle = makeArticle(el);
    document.querySelector(".articles").appendChild(newArticle);
  })