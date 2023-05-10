/*
 *   This content is licensed according to the W3C Software License at
 *   https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 *
 *   File:   menubar-navigation.js
 *
 *   Desc:   Creates a menubar of hierarchical set of links
 */

'use strict';

class NavigationContentGenerator {
  constructor(siteURL, siteName) {
    this.siteName = siteName;
    this.siteURL = siteURL;
    this.fillerTextSentences = [];
  }

  renderParagraph(linkURL, linkName) {
    console.log('linkName', linkName);
    this.fillerTextSentences = [];
    if (linkName == 'Home') {
      this.fillerTextSentences.push(
        '<div tabindex="0"><h2>Accessibility Mode</h2></div>',
        '<div tabindex="0"><p>Welcome to the Virtual Tour of <i>The Wright Brothers &amp; The Invention of the Aerial Age</i> exhibition opened in 2022 at the National Air and Space Museum in Washington, DC. This exhibition explores who Wilbur and Orville Wright were, what they achieved and how they did it, and how the world first reacted to their revolutionary invention. At the center of the story and the heart of the gallery is the 1903 Wright Flyer, one of the most iconic artifacts in the Smithsonian’s collection. </p><div tabindex="0">',
        '<div tabindex="0"><p>Explore the <i>The Wright Brothers &amp; The Invention of the Aerial Age</i> Virtual Tour using your favorite assistive technology. If you have comments or questions about this tour, please contact us at <a href="mailto:nasmweb@si.edu">nasmweb@si.edu</a>.</p><div tabindex="0">',
      );
    } else if (linkName == 'The Wright Brothers') {
      this.fillerTextSentences.push(
        '<figure id=”stop_01">',
        '<div tabindex="0"><img style="width:100%" src="stops/stop_01.jpg" alt="The entrance to The Wright Brothers & The Aerial Age flanked by entry panels describing the exhibition with a photo of Wilbur & Orville Wright. The entrance opens into a room with hardwood floors, walls covered in multi-colored panels, and two bronze colored sculptures of Wilbur and Orville Wright sitting in the center of the entryway. Beyond to the right, part of the 1903 Wright Flyer aircraft is visible."></div>',
        '<div tabindex="0"><p><strong>The Wright Brothers &amp; The Invention of the Aerial Age</strong></p></div>',
        '<div tabindex="0"><p>The invention of the airplane by Wilbur and Orville Wright is one of the great stories in American history. At its center are two talented, yet modest, Midwestern bicycle shop owners, who created a world-changing technology. The Wright brothers’ invention not only solved a long-studied technical problem, but helped create an entirely new world.</p></div>',
        '<div tabindex="0"><p>This exhibition explores who Wilbur and Orville Wright were, what they achieved and how they did it, and how the world first reacted to their revolutionary invention.</p></div>',
        '<div tabindex="0"><p>Few great figures in American history are more poorly understood than Wilbur and Orville Wright. Their fame is extraordinary, but their personal story is largely unknown, and their inventive work has often been separated from its technological and scientific context. They are typically portrayed as clever bicycle mechanics that somehow invented the airplane. They are referred to as if they were a single persona: “the Wright Brothers”—one mind, one personality.</p></div>',
        '<a href="#home" onclick="return goToStop(`stop_02`)">Next</a>',
        '</figure>'
      );
    } else if (linkName == 'Why Wilbur & Orville?') {
      this.fillerTextSentences.push(
        '<figure id=”stop_02">',
        '<div tabindex="0"><img style="width:100%" src="stops/stop_02.jpg" alt="Two bronze colored sculptures of Wilbur and Orville Wright sit on three steps. The scultures depict the brothers in their 30s wearing their usual attire of a suit with high collared shirt, tie, and dress shoes. Wilbur has a receding horseshoe hairline and Orville has a moustache. They sit casually, Orville with one leg crossed over the other. Their facial expressions are calm and thoughtful. The surrounding walls are covered in colorful panels with images and text telling the story of the Wright family and the brothers&#39; formative years."</div>',
        '<div tabindex="0"><p>How did these two seemingly ordinary bicycle mechanics, working nearly alone and with little formal scientific training, solve a problem as difficult as heavier-than-air flight, one that better-known experimenters had struggled with for centuries?</p></div>',
        '<div tabindex="0"><p>The Wrights invented a successful airplane quickly and with little help that might suggest sheer genius was at work. Certainly the brothers were very bright and talented, but the true answer is more complicated, and begins with another question: Who were Wilbur and Orville Wright?</p></div>',
        '<a href="#home" onclick="return goToStop(`stop_01`)">Back</a> | <a href="#home" onclick="return goToStop(`stop_03`)">Next</a>',
        '</figure>'
      );
    } else if (linkName == 'The Wright Cycle Co.') {
      this.fillerTextSentences.push(
        '<figure id=”stop_03">',
        '<div tabindex="0"><img style="width:100%" src="stops/stop_03.jpg" alt="&#34;The Wright Cycle Co.&#34; sign appears above a large case with a rare Wright bicycle displayed inside. To the right, a wall of images and text describe the cycle shop run by Wilbur and Orville Wright. Photos include the exterior of the Wright Cycle Co. shop, the Wright brothers working on bicycles, and bicycle races."></div>',
        '<div tabindex="0"><p>The Wright brothers’ best-known pre-aeronautical occupation was building and repairing bicycles.</p></div>',
        '<div tabindex="0"><p>Their bicycle business provided them with a good living, a fine reputation in the local business community, and an outlet for their mechanical interests.</p></div>',
        '<div tabindex="0"><p>Knowledge and experience with bicycles also proved valuable to the Wrights&#39; development of a successful airplane.</p></div>',
        '<div tabindex="0"><h3>Key objects:</h3><ul><li><a href="#home" onclick="return goToObject(`object_01`)">Wright Bicycle, St. Clair</a></li></ul></div>',
        '<a href="#home" onclick="return goToStop(`stop_02`)">Back</a> | <a href="#home" onclick="return goToStop(`stop_04`)">Next</a>',
        '</figure>'
      );

    } else if (linkName == 'The 1903 Wright Flyer') {
      this.fillerTextSentences.push(
        '<figure id=”stop_04">',
        '<div tabindex="0"><img style="width:100%" src="stops/stop_04.jpg" alt="View of 1903 Wright Flyer from the back of the aircraft. Displayed on the floor in the center of the exhibition on a simulated sand surface. The aircraft is centered on a launch railing. It has two large wide wings made of wood framing covered in beige, natural tone fabric. The pilot (mannequin) is lying on the bottom wing in a hip cradle to the left of center with feet facing the viewer. To the right of the pilot is a black engine connected to two two large pusher propellors in the back which powered the aircraft. Behind the pilot and engine is a two-surface vertical rudder. Surrounding the aircraf are glass barriers with exhibit displays on the other side. A large semicircular screen hangs from the ceiling displaying historic photos of the Wright brothers&#39; life and flights."></div>',
        '<div tabindex="0"><p>Many reproductions of the Wright Flyer have been made, but this is the actual airplane built and flown by the Wright brothers in 1903. The fabric covering was replaced by the Museum in 1985, hence the newer appearance.</p></div>',
        '<div tabindex="0"><h3>Key objects:</h3><ul><li><a href="#home" onclick="return goToObject(`object_05`)">1903 Wright Flyer</a></li></ul></div>',
        '<a href="#home" onclick="return goToStop(`stop_03`)">Back</a> | <a href="#home" onclick="return goToStop(`stop_05`)">Next</a>',
        '</figure>'
      );

    } else if (linkName == 'Visions of a Flying Machine') {
      this.fillerTextSentences.push(
        '<figure id=”stop_05">',
        '<div tabindex="0"><img style="width:100%" src="stops/stop_05.jpg" alt="Exhibition walls display photos, drawings, and text on panels of blue, orange, and yellow tones, as well as small objects from Wright brothers&#39; early work in designing a flying machine. A reproduction of their 1899 kite hangs from the ceiling with a sculture of Orville below holding strings to control the kite. The kite is fabric-covered with a wooden-frame."></div>',
        '<div tabindex="0"><p>Between 1899 and 1905, the Wright brothers&#39; program of research and experimentation led to the first successful powered airplane in 1903, and an improved, practical aircraft two years later. Their basic design elements have been used in all successful airplanes ever since.</p></div>',
        '<div tabindex="0"><p>The Wrights&#39; success was rooted in their inventive method. Their specific research techniques, innate skills, and personality traits came together in a unique way and largely explain why they succeeded where so many others had failed.</p></div>',
        '<div tabindex="0"><h3>Key objects:</h3><ul><li><a href="#home" onclick="return goToObject(`object_02`)">1899 Wright Kite (Reproduction)</a></li></ul></div>',
        '<a href="#home" onclick="return goToStop(`stop_04`)">Back</a> | <a href="#home" onclick="return goToStop(`stop_06`)">Next</a>',
        '</figure>'
      );

    } else if (linkName == 'Designing The First Wright Glider') {
      this.fillerTextSentences.push(
        '<figure id=”stop_06">',
        '<div tabindex="0"><img style="width:100%" src="stops/stop_06.jpg" alt="The 1903 Wright Flyer is visible in the center of the gallery.  A reproduction of the 1902 glider hangs from the ceiling. Displays with images and text describe the process the Wrights&#39; followed to develop the Flyer."></div>',
        '<div tabindex="0"><p>The Wrights next began to study aerodynamics and structures in preparation for building their first piloted glider. It was one thing to design a set of wings for a small kite, quite another to build a large, heavy glider, climb aboard, and launch oneself into the air.</p></div>',
        '<div tabindex="0"><p>The brothers considered such things as the precise curve of the wing cross-section, the wing area necessary to lift a pilot, and the type of materials needed to build a glider.</p></div>',
        '<div tabindex="0"><p>Wilbur and Orville made their first tentative leaps into the air in October 1900. While the glider provided less lift than their calculations predicted, it proved their design concepts and control method were sound. The Wrights were still a long way from powered flight, but their glider was by far the most advanced aircraft yet created.</p></div>',
        '<div tabindex="0"><h3>Key objects:</h3><ul><li><a href="#home" onclick="return goToObject(`object_03`)">1900 Wright Glider (Reproduction)</a></li></ul>',
        '<a href="#home" onclick="return goToStop(`stop_05`)">Back</a> | <a href="#home" onclick="return goToStop(`stop_07`)">Next</a>',
        '</figure>'
      );

    } else if (linkName == 'The Wright Wind Tunnel') {
      this.fillerTextSentences.push(
        '<figure id=”stop_07">',
        '<div tabindex="0"><img style="width:100%" src="stops/stop_07.jpg" alt="A display along the back wall of the exhibit features graphics, text, images, and small objects. Objects include reproduction balances and small models of wing shapes. A large photo shows a replica of the Wright Wind Tunnel on display in their original bicycle shop at The Henry Ford."></div>',
        '<div tabindex="0"><p>In addition to building and flying the world’s first airplane, the Wright brothers pioneered the modern practice of aeronautical engineering. Central to this was the design and use of their wind tunnel. Their 1903 powered airplane and their wind tunnel should be seen together as the product of the Wrights&#39; invention of flight technology.</p></div>',
        '<div tabindex="0"><p>Previous experimenters had used wind tunnels, which are devices for studying the effect of moving air on objects. But Wilbur and Orville were the first to use one to generate specific data that were directly used in the design of an aircraft.</p></div>',
        '<div tabindex="0"><p>Based on this estimate, they concluded they needed an 8-horsepower engine generating 90 pounds (41 kilograms) of thrust to achieve a minimum airspeed of 23 mph (37 km/h) to keep the airplane aloft.</p></div>',
        '<a href="#home" onclick="return goToStop(`stop_06`)">Back</a> | <a href="#home" onclick="return goToStop(`stop_08`)">Next</a>',
        '</figure>'
      );

  	} else if (linkName == 'Designing the Flyer') {
      this.fillerTextSentences.push(
     	'<figure id=”stop_08">',
        '<div tabindex="0"><img style="width:100%" src="stops/stop_08.jpg" alt="The 1903 Wright Flyer is vislbe in the center of the gallery.  A reproduction of the 1902 glider hangs from the ceiling. Displays with images and text describe the process the Wrights&#39; followed to develop the Flyer."></div>',
        '<div tabindex="0"><p>To design their first powered airplane, which they simply called the Flyer, the Wrights returned to their wind tunnel data and the lift and drag equations. </p></div>',
      	'<div tabindex="0"><p>Their 1902 glider &#39;s wing area was 305 square feet (28 square meters). To carry the weight of an engine, propellers, and add structural reinforcement, they had to increase the wing area to more than 500 square feet (46 square meters). Allowing 200 pounds (91 kilograms) for the propulsion system, they estimated that the flyer with a pilot would weigh 625 pounds (283 kilograms).</p></div>',
      	'<div tabindex="0"><p>Based on this estimate, they concluded they needed an 8-horsepower engine generating 90 pounds (41 kilograms) of thrust to achieve a minimum airspeed of 23 mph (37 km/h) to keep the airplane aloft.</p></div>',
      	'<div tabindex="0"><h3>Key objects:</h3><ul><li><a href="#home" onclick="return goToObject(`object_04`)">1902 Wright Glider (Reproduction)</a></li><li><a href="#home" onclick="return goToObject(`object_05`)">1903 Wright Flyer</a></li></ul></div>',
      	'<a href="#home" onclick="return goToStop(`stop_07`)">Back</a> | <a href="#home" onclick="return goToStop(`stop_09`)">Next</a>',
      	'</figure>'
   	  );

    } else if (linkName == 'The Wright Flyer Takes To The Air') {
      this.fillerTextSentences.push(
        '<figure id=”stop_09">',
        '<div tabindex="0"><img style="width:100%" src="stops/stop_09.jpg" alt="Multiple displays of graphics, images, small objects, and text are displayed on walls and pylons in the corner of the exhibition. The 1903 Wright Flyer is visible in the center of the gallery."></div>',
        '<div tabindex="0"><p>In September 1903, the Wright brothers went back to Kitty Hawk, but this time things were different. Instead of another chance to conduct experiments that would contribute to the exciting new field of aeronautics, they were going to actually fly an airplane.</p></div>',
        '<div tabindex="0"><p>With damage repaired from a first brief trial three days before, the Flyer was ready for flight on December 17. The Wrights arose that morning to freezing temperatures and a 27-mph (43-km/h) wind.</p></div>',
        '<div tabindex="0"><p>At 10:35 a.m., the Flyer lifted off the launching rail with Orville at the controls. The overly sensitive elevator control caused the Flyer to dart up and down as it sailed slowly over the sand, coming to rest with a thud 120 feet (37 meters) from where it had taken off. The flight was short—only 12 seconds—but it was a true flight nevertheless. A human had flown.</p></div>',
        '<div tabindex="0"><h3>Key objects:</h3><ul><li><a href="#home" onclick="return goToObject(`object_05`)">1903 Wright Flyer</a></li><li><a href="#home" onclick="return goToObject(`object_08`)">Stopwatch</a></li><li><a href="#home" onclick="return goToObject(`object_09`)">Telegraph Key</a></li><li><a href="#home" onclick="return goToObject(`object_06`)">Original Propellor from the Wright Flyer</a></li></ul></div>',
        '<a href="#home" onclick="return goToStop(`stop_08`)">Back</a> | <a href="#home" onclick="return goToStop(`stop_10`)">Next</a>',
        '</figure>'
      );

    } else if (linkName == 'The Aerial Age Begins') {
      this.fillerTextSentences.push(
        '<figure id=”stop_10">',
        '<div tabindex="0"><img style="width:100%" src="stops/stop_10.jpg" alt="Multiple displays of graphics, images, small objects, and text are displayed on walls and pylons in the corner of the exhibition. The 1903 Wright Flyer is visible in the center of the gallery. Photographs show the Wright brothers demonstrating their invention around the world."></div>',
        '<div tabindex="0"><p>The Wright brothers&#39; invention of the airplane truly changed the world. Imagining what this new world would be like began as soon as the first airplanes took to the air.</p></div>',
        '<div tabindex="0"><p>The airplane quickly had meaning for everyone—from the crowds who flocked to aerial exhibitions of daring pilots, to the commercial and military potential of aviation, to the way human flight influenced culture, to the artistic expression it inspired.</p></div>',
        '<a href="#home" onclick="return goToStop(`stop_09`)">Back</a> | <a href="#home" onclick="return goToStop(`stop_11`)">Next</a>',
        '</figure>'
      );

    } else if (linkName == "The Century's First Celebrities") {
      this.fillerTextSentences.push(
        '<figure id=”stop_11">',
        '<div tabindex="0"><img style="width:100%" src="stops/stop_11.jpg" alt="A corner wall displays text, images, and photographs of the Wright Brothers&#39; demonstration flights and at major events. Small objects include medals, keys, and other objects given to the Wrights in honor of their invention. A large portrait of Wilbur Wright hangs on the wall. A video screen displays Wilbur conducting a demonstration flight in Italy in 1909. On the opposite wall, a panel titled &#34;Fliers or Liars&#34; describes how the Wright brothers initially kept their invention out of the public eye which led to skeptics doubting their achievement."></div>',
        '<div tabindex="0"><p>In a century that would be dominated by the cult of celebrity, Wilbur and Orville Wright  were the first of this new type of hero—the overnight sensation. The Wrights became the model of instant celebrity—famous because of a dramatic public act, the subject of sensational press accounts and broad popular adulation, their images everywhere, and courted by the world’s most wealthy and influential people.</p></div>',
        '<a href="#home" onclick="return goToStop(`stop_10`)">Back</a> | <a href="#home" onclick="return goToStop(`stop_12`)">Next</a>',
        '</figure>'
      );

    } else if (linkName == 'Marketing the Airplane') {
      this.fillerTextSentences.push(
        '<figure id=”stop_12">',
        '<div tabindex="0"><img style="width:100%" src="stops/stop_12.jpg" alt="Small objects, images, graphics, pamphlets, models, documents, fabric, and advertisements depict how aviation was initially marketed to the military and the public. A video screen displays archival video of military flight trials for the 1909 Wright Military Flyer. A silver 4-cylinder engine is displayed in a glass case. In a case on one wall hangs a large piece of original fabric taken from the wing of the famous Wright EX Vin Fiz with a cluster of grapes printed on the fabric."></div>',
        '<div tabindex="0"><p>The Wright brothers saw the military as an obvious customer for their invention. Balloons had been used for observation during the American Civil War and in several late 19th-century European conflicts. The airplane offered a natural extension of these reconnaissance capabilities. Eventually, the military became a dominant market for aeronautical technology.</p></div>',
        '<div tabindex="0"><h3>Key objects:</h3><ul><li><a href="#home" onclick="return goToObject(`object_10`)">Wright Vertical Four-Cylinder Engine</a></li><li><a href="#home" onclick="return goToObject(`object_12`)">Original 1903 Fabric from the Wright Flyer</a></li></ul></div>',
        '<a href="#home" onclick="return goToStop(`stop_11`)">Back</a> | <a href="#home" onclick="return goToStop(`stop_13`)">Next</a>',
        '</figure>'
      );

    } else if (linkName == 'The Moment of Invention') {
      this.fillerTextSentences.push(
        '<figure id=”stop_13">',
        '<div tabindex="0"><img style="width:100%" src="stops/stop_13.jpg" alt="A case in front of the 1903 Wright Flyer contains a small camera next to the famous photograph taken of the first powered flight in 1903. The 1903 Flyer and a small bench are visible in the display beyond, both of which are in the 1903 photograph."></div>',
        '<div tabindex="0"><p>The enduring image of the first flight, taken the instant Orville lifted the Flyer into the air for the first time, with Wilbur looking on, captured the “moment of invention” for all time. It is among the most famous photographs ever taken.</p></div>',
        '<div tabindex="0"><p>Orville aimed his camera at the end of the launching rail. He instructed local lifesaving crewman John T. Daniels to snap the shutter as the airplane left the rail. It was the first time Daniels had ever operated a camera.</p></div>',
        '<div tabindex="0"><h3>Key objects:</h3><ul><li><a href="#home" onclick="return goToObject(`object_11`)">Korona Camera</a></li><li><a href="https://airandspace.si.edu/multimedia-gallery/si2003-3463640jpg" target="_blank">"Moment of Invention" photo</a></li></ul></div>',
        '<a href="#home" onclick="return goToStop(`stop_12`)">Back</a> | <a href="#home" onclick="return goToStop(`stop_14`)">Next</a>',
        '</figure>'
      );

    } else if (linkName == 'From Inventors to Icons') {
      this.fillerTextSentences.push(
        '<figure id=”stop_14">',
        '<div tabindex="0"><img style="width:100%" src="stops/stop_14.jpg" alt="Photographs, text, and artwork are displayed on two walls near the exit of the exhibition. Photos include a closeup of Wilbur Wright, closeup of Orville Wright, photo of both of them in front of an aircraft, and a photo of the Wright Brothers National Memorial in Kitty Hawk, North Carolina. A large artwork depicting the Eiffel Tower from above hangs on the wall to the right."></div>',
        '<div tabindex="0"><p>Wilbur and Orville Wright began their aeronautical experiments as modest, Midwestern businessmen. By the time they were finished, their world-changing invention placed them among the most recognized figures in American history.</p></div>',
        '<div tabindex="0"><p>Today their names are part of the national cultural identity, and the Wright Flyer is an icon of ingenuity and technical creativity. A century after they launched the aerial age, the Wright brothers continue to awe and inspire.</p></div>',
        '<div tabindex="0"><h3>Key objects:</h3><ul><li><a href="#home" onclick="return goToObject(`object_12`)">Wood and Fabric, 1903 Wright Flyer, Apollo 11</a></li></ul></div>',
        '<a href="#home" onclick="return goToStop(`stop_13`)">Back</a> | <a href="#home" onclick="return goToStop(`stop_15`)">Next</a>',
        '</figure>'
      );

    } else if (linkName == 'The Airplane In The Arts') {
      this.fillerTextSentences.push(
        '<figure id=”stop_15">',
        '<div tabindex="0"><img style="width:100%" src="stops/stop_15.jpg" alt="A small room set apart from the main exhibition area has dark walls and dim lighting. Small works of art, postcards, and other small objects are displayed to show aviation themes depicted in art. Sheet music covers are displayed above a touchscreen where visitors can select and listen to songs inspired by aviation."></div>',
        '<div tabindex="0"><p>The airplane&#39;s impact on the arts was immediate and immense. Artists, writers, and composers found powerful inspiration in aviation. For them the invention of the airplane was an aesthetic event, which they believed would have great influence on the new century&#39;s artistic, even moral, direction.</p></div>',
        '<div tabindex="0"><p>The early 20th century was an increasingly technological time, but more than any other technical marvel of the period, the airplane&#39;s impact was emotional. It produced utopian hopes as well as unsettling fears. The invention of the airplane coincided with the arrival of several of the 20th century’s defining artistic and intellectual movements. Flight was perhaps the ultimate signal that a new, modern age had begun.</p></div>',
        '<a href="#home" onclick="return goToStop(`stop_14`)">Back</a> | <a href="#home" onclick="return goToStop(`stop_16`)">Next</a>',
        '</figure>'
      );

    } else if (linkName == 'Flight in Literature') {
      this.fillerTextSentences.push(
        '<figure id=”stop_16">',
        '<div tabindex="0"><img style="width:100%" src="stops/stop_16.jpg" alt="One wall displays text and photos of authors who were inspired by aviation including Franz Kafka, Gabriele D&#39;Annunzio sitting in a chair, and Filippo Tommaso Marinetti sitting as passenger in an airplane with Glen Curtiss."></div>',
        '<div tabindex="0"><p>Aviation captured the attention of many of the great writers of the day, who traveled to exhibitions, rode in airplanes, and wrote about their experiences. Italian poet and novelist Gabriele D&#39;Annunzio, Futurist movement founder and leader F. T. Marinetti, and novelist Franz Kafka were among the influential writers whose vision of the future was shaped by the airplane. For them, the power of flight was an irresistible theme.</p></div>',
        '<a href="#home" onclick="return goToStop(`stop_15`)">Back</a> | <a href="#home" onclick="return goToStop(`stop_17`)">Next</a>',
        '</figure>'
      );

    } else if (linkName == `"Isn't It Astonishing..."`) {
      this.fillerTextSentences.push(
        '<figure id=”stop_17">',
        '<div tabindex="0"><img style="width:100%" src="stops/stop_17.jpg" alt="Large photographic mural of children in early 1900s pointing skyward at an airplane flying overhead. A quote reads &#34;Isn&#39;t It Astonishing that all these secrets have been preserved for so many just so that we could discover them!!&#34; - Orville Wright, 1903. On the opposite wall, a large photographic mural of drawings and measurements made by the Wright brothers during their work to develop the first succesful powered airplane."></div>',
        '<div tabindex="0"><p>"Isn&#39;t It Astonishing that all these secrets have been preserved for so many just so that we could discover them!!"</p></div>',
        '<div tabindex="0"><p>Orville Wright, June 7, 1903</p></div>',
        '<a href="#home" onclick="return goToStop(`stop_16`)">Back</a>',
        '</figure>'
      );

    } else if (linkName == 'Wright Bicycle, St. Clair') {
      this.fillerTextSentences.push(
        '<figure id=”object_01">',
        '<div tabindex="0"><img style="width:100%" src="objects/object_01.jpg" alt="A simple, streamlined black bicycle. The handle bars are low, mounted at the same height as the seat, and are U-shaped curving downward toward the handles. Two large black tires with yellow trim are of medium thickness and tred."></div>',
        '<div tabindex="0"><p>Only five bicycles made by the Wright brothers are known to exist. This one, a model they called the St. Clair, was built in 1898 and sold for $42.50.</p></div>',
        '<div tabindex="0"><p><i>Lent by The Henry Ford</i></p></div>',
        '<div tabindex="0"><p>Learn more about this object: <a href="https://airandspace.si.edu/collection-objects/lunar-landscape-1957/nasm_A19772550000" target="_blank">Wright Bicycle, St. Clair</a></p></div>',
        '<a href="#home" onclick="return goToObject(`object_02`)">Next</a>',
        '</figure>'
      );
    } else if (linkName == '1899 Wright Kite') {
      this.fillerTextSentences.push(
        '<figure id=”object_02">',
        '<div tabindex="0"><img style="width:100%" src="objects/object_02.jpg" alt="Biplane kite with square upper and lower wings and canard."></div>',
        '<div tabindex="0"><p><strong>1899 Wright Kite (Reproduction)</strong></p></div>',
        '<div tabindex="0"><p>The Wrights combined their wing-warping control concept and the structural design of the Chanute-Herring glider in their first aircraft, a biplane kite with a 5-foot (1.5-meter) wingspan, built in July 1899.</p></div>',
        '<div tabindex="0"><p>To allow for wing-warping, they left the kite unbraced between the front and rear struts (vertical posts). It was controlled with four lines running from the top and bottom of the front outer struts to a pair of sticks held by the operator. Tilting the sticks in opposite directions caused the wing structure to twist.</p></div>',
        '<div tabindex="0"><p>No photographs exist of the 1899 kite; only a sketch of it illustrating wing-warping, drawn by Wilbur in 1912.</p></div>',
		'<div tabindex="0"><p><i>Lent by Rick Young</i></p></div>',
        '<div tabindex="0"><p>Learn more about this object: <a href="https://airandspace.si.edu/collection-objects/1899-wright-kite-reproduction/nasm_I20031236002" target="_blank">1899 Wright Kite (Reproduction)</a></p></div>',
        '<a href="#home" onclick="return goToObject(`object_01`)">Back</a> | <a href="#home" onclick="return goToObject(`object_03`)">Next</a>',
        '</figure>'
      );
    } else if (linkName == '1900 Wright Glider') {
      this.fillerTextSentences.push(
        '<figure id=”object_03">',
        '<div tabindex="0"><img style="width:100%" src="objects/object_03.jpg" alt="Fabric-covered wooden-frame biplane glider. No vertical tail, only a horizontal forward elevator. Natural fabric finish; no sealant or paint of any kind."></div>',
        '<div tabindex="0"><p><strong>1900 Wright Glider (reproduction)</strong></p></div>',
        '<div tabindex="0"><p>The 1900 glider was the Wrights’ first piloted aircraft, flight tested at Kitty Hawk that fall. It incorporated the wire-braced biplane structure and wing-warping control system they developed with their 1899 kite.</p></div>',
        '<div tabindex="0"><p>The glider generated far less lift than the brothers’ calculations had predicted. However, the control systems—wing warping for lateral control and forward elevator for pitch control—worked beautifully. While the Wrights managed only two minutes of free gliding in 1900, those precious seconds in the air proved their innovative control ideas were sound.</p></div>',
        '<div tabindex="0"><p><i>Gift of Ken Hyde, The Wright Experience, Warrenton, VA</i></p></div>',
        '<div tabindex="0"><p>Learn more about this object: <a href="https://airandspace.si.edu/collection-objects/1900-wright-glider-reproduction/nasm_A20050452000" target="_blank">1900 Wright Glider (reproduction)</a></p></div>',
        '<a href="#home" onclick="return goToObject(`object_02`)">Back</a> | <a href="#home" onclick="return goToObject(`object_04`)">Next</a>',
        '</figure>'
      );
    } else if (linkName == '1902 Wright Glider') {
      this.fillerTextSentences.push(
        '<figure id=”object_04">',
        '<div tabindex="0"><img style="width:100%" src="objects/object_04.jpg" alt="Biplane glider with a canard (forward) surface for pitch control and wing-warping for lateral control. Long, narrow wings, elliptical elevator, and vertical tail. Spruce and ash framework with muslin fabric covering. Wings have a slight downward droop to counteract side-slipping due to crosswinds."></div>',
        '<div tabindex="0"><p><strong>1902 Wright Glider (reproduction)</strong></p></div>',
        '<div tabindex="0"><p>The third in a series of gliders leading up to their powered airplane, the 1902 glider was the Wright brothers&#39; most advanced yet. Reflecting their single, evolving design, it was again a biplane with a canard (forward) surface for pitch control and wing-warping for lateral control. But its longer, narrower wings, elliptical elevator, and vertical tail gave it a much more graceful, elegant appearance.</p></div>',
        '<div tabindex="0"><p>Like the 1901 glider, this one also had a spruce and ash framework supported within pockets sewn into its muslin fabric covering. The fabric was again applied on the bias (the direction of the weave at a 45-degree angle). The wings were rigged with a slight downward droop to counteract side-slipping due to crosswinds.</p></div>',
        '<div tabindex="0"><p><i>Lent by Rick Young</i></p></div>',
        '<div tabindex="0"><p><strong>Wingspan:</strong> 32 ft (9.8 m)</p></div>',
        '<div tabindex="0"><p><strong>Wing area:</strong> 305 sq ft (28.3 sq m)</p></div>',
        '<div tabindex="0"><p><strong>Length:</strong> 16 ft 1 in (4.9 m)</p></div>',
        '<div tabindex="0"><p><strong>Height:</strong> 8 ft (2.4 m)</p></div>',
        '<div tabindex="0"><p><strong>Weight:</strong> 117 lb (53 kg)</p></div>',
        '<div tabindex="0"><p>Learn more about this object: <a href="https://airandspace.si.edu/collection-objects/1902-wright-glider-reproduction/nasm_I20031236001" target="_blank">1902 Wright Glider (reproduction)</a></p></div>',
        '<a href="#home" onclick="return goToObject(`object_03`)">Back</a> | <a href="#home" onclick="return goToObject(`object_05`)">Next</a>',
        '</figure>'
      );
    } else if (linkName == '1903 Wright Flyer') {
      this.fillerTextSentences.push(
        '<figure id=”object_05">',
        '<div tabindex="0"><img style="width:100%" src="objects/object_05.jpg" alt="Canard biplane with one black 12-horsepower Wright horizontal four-cylinder engine driving two pusher propellers via sprocket-and-chain transmission system. Non-wheeled, linear skids act as landing gear. Natural beige fabric finish - no sealant or paint of any kind. Pilot laid across bottom wing and controlled aircraft with hip cradle and two vertical control sticks."></div>',
        '<div tabindex="0"><p><strong>Original Aircraft Flown at Kitty Hawk in 1903</strong></p></div>',
        '<div tabindex="0"><p>This is the 1903 Wright Flyer that made four flights at Kitty Hawk, North Carolina, on December 17, 1903, the best covering 852 feet (260 meters) in 59 seconds. It was the first heavier-than-air, powered aircraft to make a sustained, controlled flight with a pilot aboard.</p></div>',
        '<div tabindex="0"><p>The Wrights used their proven canard biplane configuration, which was rooted in their initial 1899 kite design. Key to the Flyer&#39;s success was its three-axis control system, which featured wing-warping for lateral balance, a moveable rudder, and an elevator for pitch control.</p></div>',
        '<div tabindex="0"><p>The right wing was four inches (10 centimeters) longer than the left to compensate for the engine being heavier than the pilot and mounted to his right. The wings were rigged with a slight droop to reduce the effects of crosswinds.</p></div>',
        '<div tabindex="0"><p><i>Gift of the Estate of Orville Wright</i></p></div>',
        '<div tabindex="0"><p><strong>Wingspan:</strong> 40 ft 4 in (12.3 m)</p></div>',
        '<div tabindex="0"><p><strong>Wing area:</strong> 510 sq ft (47.4 sq m)</p></div>',
        '<div tabindex="0"><p><strong>Length:</strong> 21 ft 1 in (6.4 m)</p></div>',
        '<div tabindex="0"><p><strong>Height:</strong> 9 ft 4 in (2.8 m)</p></div>',
        '<div tabindex="0"><p><strong>Weight:</strong> 750 lb (341 kg), with pilot</p></div>',
        '<div tabindex="0"><p><strong>Engine:</strong> Horizontal 4-cylinder, water-cooled, 12 hp (9 kW)</p></div>',
        '<div tabindex="0"><p>Learn more about this object: <a href="https://airandspace.si.edu/collection-objects/1903-wright-flyer/nasm_A19610048000" target="_blank">1903 Wright Flyer</a></p></div>',
        '<a href="#home" onclick="return goToObject(`object_04`)">Back</a> | <a href="#home" onclick="return goToObject(`object_06`)">Next</a>',
        '</figure>'
      );
    } else if (linkName == 'Original Propeller, Wright Flyer') {
      this.fillerTextSentences.push(
        '<figure id=”object_06">',
        '<div tabindex="0"><img style="width:100%" src="objects/object_06.jpg" alt="Two-blade, fixed-pitch, wood propeller. Split down long axis into two pieces. Silver coating visible on most of the surface. One end of propeller more damaged than the other. Hole in center where propeller attached to aircraft."></div>',
        '<div tabindex="0"><p><strong>Original Propeller from the Wright Flyer</strong></p></div>',
        '<div tabindex="0"><p>This is one of the propellers used on the Wright Flyer during its historic flights on December 17, 1903. The propeller and airplane were damaged after the final flight that day. The propellers now on the Flyer are original Wright propellers made at a later time.</p></div>',
        '<div tabindex="0"><p><i>Gift of Ivonette Wright Miller and Harold S. Miller</i></p></div>',
        '<div tabindex="0"><p>Learn more about this object: <a href="https://airandspace.si.edu/collection-objects/wright-brothers-propeller-fixed-pitch-1903-wright-flyer/nasm_A19830381000" target="_blank">Original Propeller, Wright Flyer</a></p></div>',
        '<a href="#home" onclick="return goToObject(`object_05`)">Back</a> | <a href="#home" onclick="return goToObject(`object_07`)">Next</a>',
        '</figure>'
      );
    } else if (linkName == 'Original Fabric, Wright Flyer') {
      this.fillerTextSentences.push(
        '<figure id=”object_07">',
        '<div tabindex="0"><img style="width:100%" src="objects/object_07.jpg" alt="Unbleached muslin. Overall dimensions 12 ft. X 3 ft. 2 in. (folded dimensions 1 ft. x 38 in.).  Various spots and stains on the surface of the fabric. Diagonal seam and four small symetrical holes where fabric attached to a part of the Flyer are visible."></div>',
        '<div tabindex="0"><p><strong>Original 1903 Fabric from the Wright Flyer</strong></p></div>',
        '<div tabindex="0"><p>This wing panel is a piece of original fabric from the 1903 Wright Flyer. It was on the airplane during its historic flights of December 17, 1903. The Flyer was completely re-covered in 1927 under Orville Wright&#34;s supervision, and again in 1985 by the Museum.</p></div>',
        '<div tabindex="0"><p>This fabric is the same “Pride of the West” unbleached muslin used on the 1901 and 1902 gliders. It was left unsealed to save weight.</p></div>',
        '<div tabindex="0"><p><i>Gift of Marianne Wright Hudec</i></p></div>',
        '<div tabindex="0"><p>Learn more about this object: <a href="https://airandspace.si.edu/collection-objects/fabric-aircraft-1903-wright-flyer/nasm_A20090031000" target="_blank">Original Fabric, Wright Flyer</a></p></div>',
        '<a href="#home" onclick="return goToObject(`object_06`)">Back</a> | <a href="#home" onclick="return goToObject(`object_08`)">Next</a>',
        '</figure>'
      );
    } else if (linkName == 'Stopwatch, Wright brothers') {
      this.fillerTextSentences.push(
        '<figure id=”object_08">',
        '<div tabindex="0"><img style="width:100%" src="objects/object_08.jpg" alt="Hand-held stopwatch, silver (nickel plated) with white face and black Arabic numerals (increments of 5, 5-60). Smaller inset dial above second hand mount to record minutes (1-10, increments of 1). &#34;The Sun&#34; in black script immediately below second hand mount. Plain back, no cover over crystal. Mechanism visible through glass when back opened. Markings stamped inside back cover. Glass face is cracked."></div>',
        '<div tabindex="0"><p><strong>Stopwatch, Wright brothers</strong></p></div>',
        '<div tabindex="0"><p>The Wrights used this stopwatch to time the Kitty Hawk flights.</p></div>',
        '<div tabindex="0"><p><i>Gift of the Institute of Aeronautical Sciences</i></p></div>',
        '<div tabindex="0"><p>Learn more about this object: <a href="https://airandspace.si.edu/collection-objects/stopwatch-wright-brothers/nasm_A19640054000" target="_blank">Stopwatch, Wright brothers</a></p></div>',
        '<a href="#home" onclick="return goToObject(`object_07`)">Back</a> | <a href="#home" onclick="return goToObject(`object_09`)">Next</a>',
        '</figure>'
      );
    } else if (linkName == 'Telegraph Key') {
      this.fillerTextSentences.push(
        '<figure id=”object_09">',
        '<div tabindex="0"><img style="width:100%" src="objects/object_09.jpg" alt="Telegraph key mounted on light brown pine base, knob broken off. Key lever and sounder hammer are dark brown ferrous metal, other metal components non-ferrous. Wiring mounted in grooves on underside of base."></div>',
        '<div tabindex="0"><p><strong>Telegraph key, Wright 1903 flight</strong></p></div>',
        '<div tabindex="0"><p>The famous telegram sent home to Dayton, Ohio, from Kitty Hawk, N.C., by the Wright brothers after their successful flights on December 17, 1903, was sent using this telegraph key. The text of the telegram was as follows:</p></div>',
        '<div tabindex="0"><p>"Success four flights Thursday morning all against twenty-one mile per hour wind started from level with engine power alone average speed through air thirty-one miles longest 57 seconds inform press home Christmas. Orevelle Wright."</p></div>',
        '<div tabindex="0">There were two errors in transmission. The flight was actually 59 seconds in duration and Orville&#34;s name was misspelled.</p></div>',
        '<div tabindex="0"><p>Learn more about this object: <a href="https://airandspace.si.edu/collection-media/NASM-1A0A0B9982822_001" target="_blank">Telegraph Key</a></p></div>',
        '<a href="#home" onclick="return goToObject(`object_08`)">Back</a> | <a href="#home" onclick="return goToObject(`object_10`)">Next</a>',
        '</figure>'
      );
    } else if (linkName == 'Wright Vertical Four-Cylinder Engine') {
      this.fillerTextSentences.push(
        '<figure id=”object_10">',
        '<div tabindex="0"><img style="width:100%" src="objects/object_10.jpg" alt="Reciprocating, 4 cylinders, in-line, water cooled engine. Silver."></div>',
        '<div tabindex="0"><p><strong>Wright Vertical Four-Cylinder Engine</strong></div>',
        '<div tabindex="0"><p>Standard equipment on Wright Company aircraft from 1910 to 1912 was the 35-horsepower Wright vertical four-cylinder engine and the so-called “bent-end” propeller.</p></div>',
        '<div tabindex="0"><p><i>Gift of the Family of James M. H. Jacobs</i></p></div>',
        '<div tabindex="0"><p>Learn more about this object: <a href="https://airandspace.si.edu/collection-objects/wright-vertical-4-line-4-engine/nasm_A19620037000" target="_blank">Wright Vertical Four-Cylinder Engine</a></p></div>',
        '<a href="#home" onclick="return goToObject(`object_09`)">Back</a> | <a href="#home" onclick="return goToObject(`object_11`)">Next</a>',
        '</figure>'
      );
    } else if (linkName == 'Korona Camera') {
      this.fillerTextSentences.push(
        '<figure id=”object_11">',
        '<div tabindex="0"><img style="width:100%" src="objects/object_11.jpg" alt="Early travelling or portable camera built into a black carrying box. Front of box opens to reveal lens on a sliding frame with gauge to adjust focal distance. Lens is connected to back compartments with black leather baffle. Rear of case has two compartments. The rearmost is for the photographic medium, and the center to access the inner components. Leather handle and a small spirit level are on top of the case. Maker stamp inside rearmost compartment door."></div>',
         '<div tabindex="0"><p><strong>Korona Camera</strong></div>',
		'<div tabindex="0"><p>The world is fortunate that the Wright brothers were also interested in the relatively new practice of amateur photography. The pictures they took at Kitty Hawk dramatically document their invention of the airplane. A century later, their wonderfully composed images still convey the excitement of the first human steps into the air.</p></div>',
        '<div tabindex="0"><p>This Korona 5 x 7 camera is similar to the one used by Wilbur and Orville at Kitty Hawk. The Wrights’ camera is in the collection of Carillon Historical Park, Dayton, Ohio.</p></div>',
        '<div tabindex="0"><p><i>Lent by Peter L. Jakab</i></p></div>',
        '<div tabindex="0"><p>Learn more about this object: <a href="https://airandspace.si.edu/collection-objects/camera-korona/nasm_I20031237001" target="_blank">Korona Camera</a></p></div>',
        '<a href="#home" onclick="return goToObject(`object_10`)">Back</a> | <a href="#home" onclick="return goToObject(`object_12`)">Next</a>',
        '</figure>'
      );
    } else if (linkName == 'Wood and Fabric, 1903 Wright Flyer, Apollo 11') {
      this.fillerTextSentences.push(
        '<figure id=”object_12">',
        '<div tabindex="0"><img style="width:100%" src="objects/object_12.jpg" alt="Framed plaque with fabric and wood pieces mounted in the middle that came from the Wright Brothers airplane, Kitty Hawk. The two pieces flew to the Moon and back on the Apollo 11 mission in 1969. Flanking either side of the wood and fabric are letters of authenticity from Orville Wright and NASA."></div>',
        '<div tabindex="0"><p><strong>From Kitty Hawk to the Moon</strong></p></div>',
        '<div tabindex="0"><p>The aerial age has seen technology develop at an amazing pace. In one lifetime we advanced from the Wright brothers’ 12-second flight in 1903 to landing humans on the Moon and sending spacecraft beyond the edge of the solar system.</p></div>',
        '<div tabindex="0"><p>To symbolically link the first airplane flight with the first human exploration of another celestial body, this sample of wood and fabric from the Wright Flyer was carried to the surface of the Moon by the crew of Apollo 11 in 1969.</p></div>',
        '<div tabindex="0"><p><i>Gift of the U.S. Air Force Museum</i></p></div>',
        '<div tabindex="0"><p>Learn more about this object: <a href="https://airandspace.si.edu/collection-objects/wood-and-fabric-1903-wright-flyer-apollo11/nasm_A19721288000" target="_blank">Wood and Fabric, 1903 Wright Flyer, Apollo 11</a></p></div>',
        '<a href="#home" onclick="return goToObject(`object_11`)">Back</a>',
        '</figure>'
      );
    }





    var content = '';
    this.fillerTextSentences.forEach(
      (s) =>
      (content += s
        .replace('$siteName', this.siteName)
        .replace('$siteURL', this.siteURL)
        .replace('$linkName', linkName)
        .replace('$linkURL', linkURL))
    );
    return content;
  }
}

class MenubarNavigation {
  constructor(domNode) {
    var linkURL, linkTitle;

    this.domNode = domNode;

    this.menuitems = [];
    this.popups = [];
    this.menuitemGroups = {};
    this.menuOrientation = {};
    this.isPopup = {};
    this.isPopout = {};
    this.openPopups = false;

    this.firstChars = {}; // see Menubar init method
    this.firstMenuitem = {}; // see Menubar init method
    this.lastMenuitem = {}; // see Menubar init method

    this.initMenu(domNode, 0);

    domNode.addEventListener('focusin', this.onMenubarFocusin.bind(this));
    domNode.addEventListener('focusout', this.onMenubarFocusout.bind(this));

    window.addEventListener(
      'pointerdown',
      this.onBackgroundPointerdown.bind(this),
      true
    );

    domNode.querySelector('[role=menuitem]').tabIndex = 0;

    // Initial content for page
    if (location.href.split('#').length > 1) {
      linkURL = location.href;
      linkTitle = getLinkNameFromURL(location.href);
    } else {
      linkURL = location.href + '#home';
      linkTitle = 'Welcome to the Virtual Tour of The Wright Brothers & The Invention of the Aerial Age exhibition opened in 2022 at the National Air and Space Museum in Washington, DC. This exhibition explores who Wilbur and Orville Wright were, what they achieved and how they did it, and how the world first reacted to their revolutionary invention. At the center of the story and the heart of the gallery is the 1903 Wright Flyer, one of the most iconic artifacts in the Smithsonian’s collection. Explore the The Wright Brothers & The Invention of the Aerial Age Virtual Tour using your favorite assistive technology. If you have comments or questions about this tour, please contact us at nasmweb@si.edu';
    }

    this.contentGenerator = new NavigationContentGenerator(
      '#home',
      'Mythical University'
    );
    this.updateContent(linkURL, linkTitle, false);

    function getLinkNameFromURL(url) {
      function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
      }

      var name = url.split('#')[1];
      if (typeof name === 'string') {
        name = name.split('-').map(capitalize).join(' ');
      } else {
        name = 'Home';
      }
      return name;
    }
  }

  getParentMenuitem(menuitem) {
    var node = menuitem.parentNode;
    if (node) {
      node = node.parentNode;
      if (node) {
        node = node.previousElementSibling;
        if (node) {
          if (node.getAttribute('role') === 'menuitem') {
            return node;
          }
        }
      }
    }
    return false;
  }

  updateContent(linkURL, linkName, moveFocus) {
    var h1Node, paraNodes, pathNode;

    if (typeof moveFocus !== 'boolean') {
      moveFocus = true;
    }

    // Update content area
    h1Node = document.querySelector('.page .main h1');
    if (h1Node) {
      h1Node.textContent = linkName;
      h1Node.tabIndex = -1;
      if (moveFocus) {
        h1Node.focus();
      }
    }
    paraNodes = document.querySelectorAll('.page .main p');
    paraNodes.forEach(
      (p) =>
        (p.innerHTML = this.contentGenerator.renderParagraph(linkURL, linkName))
    );

    // Update aria-current
    this.menuitems.forEach((item) => {
      item.removeAttribute('aria-current');
      item.classList.remove('aria-current-path');
      item.title = '';
    });

    this.menuitems.forEach((item) => {
      if (item.href === linkURL) {
        item.setAttribute('aria-current', 'page');
        pathNode = this.getParentMenuitem(item);
        while (pathNode) {
          pathNode.classList.add('aria-current-path');
          pathNode.title = 'Contains current page link';
          pathNode = this.getParentMenuitem(pathNode);
        }
      }
    });
  }

  getMenuitems(domNode, depth) {
    var nodes = [];

    var initMenu = this.initMenu.bind(this);
    var popups = this.popups;

    function findMenuitems(node) {
      var role, flag;

      while (node) {
        flag = true;
        role = node.getAttribute('role');

        if (role) {
          role = role.trim().toLowerCase();
        }

        switch (role) {
          case 'menu':
            node.tabIndex = -1;
            initMenu(node, depth + 1);
            flag = false;
            break;

          case 'menuitem':
            if (node.getAttribute('aria-haspopup') === 'true') {
              popups.push(node);
            }
            nodes.push(node);
            break;

          default:
            break;
        }

        if (
          flag &&
          node.firstElementChild &&
          node.firstElementChild.tagName !== 'svg'
        ) {
          findMenuitems(node.firstElementChild);
        }
        node = node.nextElementSibling;
      }
    }
    findMenuitems(domNode.firstElementChild);
    return nodes;
  }

  initMenu(menu, depth) {
    var menuitems, menuitem, role;

    var menuId = this.getMenuId(menu);

    menuitems = this.getMenuitems(menu, depth);
    this.menuOrientation[menuId] = this.getMenuOrientation(menu);

    this.isPopup[menuId] = menu.getAttribute('role') === 'menu' && depth === 1;
    this.isPopout[menuId] = menu.getAttribute('role') === 'menu' && depth > 1;

    this.menuitemGroups[menuId] = [];
    this.firstChars[menuId] = [];
    this.firstMenuitem[menuId] = null;
    this.lastMenuitem[menuId] = null;

    for (var i = 0; i < menuitems.length; i++) {
      menuitem = menuitems[i];
      role = menuitem.getAttribute('role');

      if (role.indexOf('menuitem') < 0) {
        continue;
      }

      menuitem.tabIndex = -1;
      this.menuitems.push(menuitem);
      this.menuitemGroups[menuId].push(menuitem);
      this.firstChars[menuId].push(
        menuitem.textContent.trim().toLowerCase()[0]
      );

      menuitem.addEventListener('keydown', this.onKeydown.bind(this));
      menuitem.addEventListener('click', this.onMenuitemClick.bind(this), {
        capture: true,
      });

      menuitem.addEventListener(
        'pointerover',
        this.onMenuitemPointerover.bind(this)
      );

      if (!this.firstMenuitem[menuId]) {
        if (this.hasPopup(menuitem)) {
          menuitem.tabIndex = 0;
        }
        this.firstMenuitem[menuId] = menuitem;
      }
      this.lastMenuitem[menuId] = menuitem;
    }
  }

  setFocusToMenuitem(menuId, newMenuitem) {
    this.closePopupAll(newMenuitem);

    if (this.menuitemGroups[menuId]) {
      this.menuitemGroups[menuId].forEach(function (item) {
        if (item === newMenuitem) {
          item.tabIndex = 0;
          newMenuitem.focus();
        } else {
          item.tabIndex = -1;
        }
      });
    }
  }

  setFocusToFirstMenuitem(menuId) {
    this.setFocusToMenuitem(menuId, this.firstMenuitem[menuId]);
  }

  setFocusToLastMenuitem(menuId) {
    this.setFocusToMenuitem(menuId, this.lastMenuitem[menuId]);
  }

  setFocusToPreviousMenuitem(menuId, currentMenuitem) {
    var newMenuitem, index;

    if (currentMenuitem === this.firstMenuitem[menuId]) {
      newMenuitem = this.lastMenuitem[menuId];
    } else {
      index = this.menuitemGroups[menuId].indexOf(currentMenuitem);
      newMenuitem = this.menuitemGroups[menuId][index - 1];
    }

    this.setFocusToMenuitem(menuId, newMenuitem);

    return newMenuitem;
  }

  setFocusToNextMenuitem(menuId, currentMenuitem) {
    var newMenuitem, index;

    if (currentMenuitem === this.lastMenuitem[menuId]) {
      newMenuitem = this.firstMenuitem[menuId];
    } else {
      index = this.menuitemGroups[menuId].indexOf(currentMenuitem);
      newMenuitem = this.menuitemGroups[menuId][index + 1];
    }
    this.setFocusToMenuitem(menuId, newMenuitem);

    return newMenuitem;
  }

  setFocusByFirstCharacter(menuId, currentMenuitem, char) {
    var start, index;

    char = char.toLowerCase();

    // Get start index for search based on position of currentItem
    start = this.menuitemGroups[menuId].indexOf(currentMenuitem) + 1;
    if (start >= this.menuitemGroups[menuId].length) {
      start = 0;
    }

    // Check remaining slots in the menu
    index = this.getIndexFirstChars(menuId, start, char);

    // If not found in remaining slots, check from beginning
    if (index === -1) {
      index = this.getIndexFirstChars(menuId, 0, char);
    }

    // If match was found...
    if (index > -1) {
      this.setFocusToMenuitem(menuId, this.menuitemGroups[menuId][index]);
    }
  }

  // Utilities

  getIndexFirstChars(menuId, startIndex, char) {
    for (var i = startIndex; i < this.firstChars[menuId].length; i++) {
      if (char === this.firstChars[menuId][i]) {
        return i;
      }
    }
    return -1;
  }

  isPrintableCharacter(str) {
    return str.length === 1 && str.match(/\S/);
  }

  getIdFromAriaLabel(node) {
    var id = node.getAttribute('aria-label');
    if (id) {
      id = id.trim().toLowerCase().replace(' ', '-').replace('/', '-');
    }
    return id;
  }

  getMenuOrientation(node) {
    var orientation = node.getAttribute('aria-orientation');

    if (!orientation) {
      var role = node.getAttribute('role');

      switch (role) {
        case 'menubar':
          orientation = 'horizontal';
          break;

        case 'menu':
          orientation = 'vertical';
          break;

        default:
          break;
      }
    }

    return orientation;
  }

  getMenuId(node) {
    var id = false;
    var role = node.getAttribute('role');

    while (node && role !== 'menu' && role !== 'menubar') {
      node = node.parentNode;
      if (node) {
        role = node.getAttribute('role');
      }
    }

    if (node) {
      id = role + '-' + this.getIdFromAriaLabel(node);
    }

    return id;
  }

  getMenu(menuitem) {
    var menu = menuitem;
    var role = menuitem.getAttribute('role');

    while (menu && role !== 'menu' && role !== 'menubar') {
      menu = menu.parentNode;
      if (menu) {
        role = menu.getAttribute('role');
      }
    }

    return menu;
  }

  // Popup menu methods

  isAnyPopupOpen() {
    for (var i = 0; i < this.popups.length; i++) {
      if (this.popups[i].getAttribute('aria-expanded') === 'true') {
        return true;
      }
    }
    return false;
  }

  setMenubarDataExpanded(value) {
    this.domNode.setAttribute('data-menubar-item-expanded', value);
  }

  isMenubarDataExpandedTrue() {
    return this.domNode.getAttribute('data-menubar-item-expanded') === 'true';
  }

  openPopup(menuId, menuitem) {
    // set aria-expanded attribute
    var popupMenu = menuitem.nextElementSibling;

    if (popupMenu) {
      var rect = menuitem.getBoundingClientRect();

      // Set CSS properties
      if (this.isPopup[menuId]) {
        popupMenu.parentNode.style.position = 'relative';
        popupMenu.style.display = 'block';
        popupMenu.style.position = 'absolute';
        popupMenu.style.left = rect.width + 10 + 'px';
        popupMenu.style.top = '0px';
        popupMenu.style.zIndex = 100;
      } else {
        popupMenu.style.display = 'block';
        popupMenu.style.position = 'absolute';
        popupMenu.style.left = '0px';
        popupMenu.style.top = rect.height + 8 + 'px';
        popupMenu.style.zIndex = 100;
      }

      menuitem.setAttribute('aria-expanded', 'true');
      this.setMenubarDataExpanded('true');
      return this.getMenuId(popupMenu);
    }

    return false;
  }

  closePopout(menuitem) {
    var menu,
      menuId = this.getMenuId(menuitem),
      cmi = menuitem;

    while (this.isPopup[menuId] || this.isPopout[menuId]) {
      menu = this.getMenu(cmi);
      cmi = menu.previousElementSibling;
      menuId = this.getMenuId(cmi);
      menu.style.display = 'none';
    }
    cmi.focus();
    return cmi;
  }

  closePopup(menuitem) {
    var menu,
      menuId = this.getMenuId(menuitem),
      cmi = menuitem;

    if (this.isMenubar(menuId)) {
      if (this.isOpen(menuitem)) {
        menuitem.setAttribute('aria-expanded', 'false');
        menuitem.nextElementSibling.style.display = 'none';
      }
    } else {
      menu = this.getMenu(menuitem);
      cmi = menu.previousElementSibling;
      cmi.setAttribute('aria-expanded', 'false');
      cmi.focus();
      menu.style.display = 'none';
    }

    return cmi;
  }

  doesNotContain(popup, menuitem) {
    if (menuitem) {
      return !popup.nextElementSibling.contains(menuitem);
    }
    return true;
  }

  closePopupAll(menuitem) {
    if (typeof menuitem !== 'object') {
      menuitem = false;
    }
    for (var i = 0; i < this.popups.length; i++) {
      var popup = this.popups[i];
      if (this.doesNotContain(popup, menuitem) && this.isOpen(popup)) {
        var cmi = popup.nextElementSibling;
        if (cmi) {
          popup.setAttribute('aria-expanded', 'false');
          cmi.style.display = 'none';
        }
      }
    }
  }

  hasPopup(menuitem) {
    return menuitem.getAttribute('aria-haspopup') === 'true';
  }

  isOpen(menuitem) {
    return menuitem.getAttribute('aria-expanded') === 'true';
  }

  isMenubar(menuId) {
    return !this.isPopup[menuId] && !this.isPopout[menuId];
  }

  isMenuHorizontal(menuitem) {
    return this.menuOrientation[menuitem] === 'horizontal';
  }

  hasFocus() {
    return this.domNode.classList.contains('focus');
  }

  // Menu event handlers

  onMenubarFocusin() {
    // if the menubar or any of its menus has focus, add styling hook for hover
    this.domNode.classList.add('focus');
  }

  onMenubarFocusout() {
    // remove styling hook for hover on menubar item
    this.domNode.classList.remove('focus');
  }

  onKeydown(event) {
    var tgt = event.currentTarget,
      key = event.key,
      flag = false,
      menuId = this.getMenuId(tgt),
      id,
      popupMenuId,
      mi;

    switch (key) {
      case ' ':
      case 'Enter':
        if (this.hasPopup(tgt)) {
          this.openPopups = true;
          popupMenuId = this.openPopup(menuId, tgt);
          this.setFocusToFirstMenuitem(popupMenuId);
        } else {
          if (tgt.href !== '#') {
            this.closePopupAll();
            this.updateContent(tgt.href, tgt.textContent.trim());
            this.setMenubarDataExpanded('false');
          }
        }
        flag = true;
        break;

      case 'Esc':
      case 'Escape':
        this.openPopups = false;
        mi = this.closePopup(tgt);
        id = this.getMenuId(mi);
        this.setMenubarDataExpanded('false');
        flag = true;
        break;

      case 'Up':
      case 'ArrowUp':
        if (this.isMenuHorizontal(menuId)) {
          if (this.hasPopup(tgt)) {
            this.openPopups = true;
            popupMenuId = this.openPopup(menuId, tgt);
            this.setFocusToLastMenuitem(popupMenuId);
          }
        } else {
          this.setFocusToPreviousMenuitem(menuId, tgt);
        }
        flag = true;
        break;

      case 'ArrowDown':
      case 'Down':
        if (this.isMenuHorizontal(menuId)) {
          if (this.hasPopup(tgt)) {
            this.openPopups = true;
            popupMenuId = this.openPopup(menuId, tgt);
            this.setFocusToFirstMenuitem(popupMenuId);
          }
        } else {
          this.setFocusToNextMenuitem(menuId, tgt);
        }
        flag = true;
        break;

      case 'Left':
      case 'ArrowLeft':
        if (this.isMenuHorizontal(menuId)) {
          mi = this.setFocusToPreviousMenuitem(menuId, tgt);
          if (this.isAnyPopupOpen() || this.isMenubarDataExpandedTrue()) {
            this.openPopup(menuId, mi);
          }
        } else {
          if (this.isPopout[menuId]) {
            mi = this.closePopup(tgt);
            id = this.getMenuId(mi);
            mi = this.setFocusToMenuitem(id, mi);
          } else {
            mi = this.closePopup(tgt);
            id = this.getMenuId(mi);
            mi = this.setFocusToPreviousMenuitem(id, mi);
            this.openPopup(id, mi);
          }
        }
        flag = true;
        break;

      case 'Right':
      case 'ArrowRight':
        if (this.isMenuHorizontal(menuId)) {
          mi = this.setFocusToNextMenuitem(menuId, tgt);
          if (this.isAnyPopupOpen() || this.isMenubarDataExpandedTrue()) {
            this.openPopup(menuId, mi);
          }
        } else {
          if (this.hasPopup(tgt)) {
            popupMenuId = this.openPopup(menuId, tgt);
            this.setFocusToFirstMenuitem(popupMenuId);
          } else {
            mi = this.closePopout(tgt);
            id = this.getMenuId(mi);
            mi = this.setFocusToNextMenuitem(id, mi);
            this.openPopup(id, mi);
          }
        }
        flag = true;
        break;

      case 'Home':
      case 'PageUp':
        this.setFocusToFirstMenuitem(menuId, tgt);
        flag = true;
        break;

      case 'End':
      case 'PageDown':
        this.setFocusToLastMenuitem(menuId, tgt);
        flag = true;
        break;

      case 'Tab':
        this.openPopups = false;
        this.setMenubarDataExpanded('false');
        this.closePopup(tgt);
        break;

      default:
        if (this.isPrintableCharacter(key)) {
          this.setFocusByFirstCharacter(menuId, tgt, key);
          flag = true;
        }
        break;
    }

    if (flag) {
      event.stopPropagation();
      event.preventDefault();
    }
  }

  onMenuitemClick(event) {
    var tgt = event.currentTarget;
    var menuId = this.getMenuId(tgt);

    if (this.hasPopup(tgt)) {
      if (this.isOpen(tgt)) {
        this.closePopup(tgt);
      } else {
        this.closePopupAll(tgt);
        this.openPopup(menuId, tgt);
      }
    } else {
      this.updateContent(tgt.href, tgt.textContent.trim());
      this.closePopupAll();
    }
    event.stopPropagation();
    event.preventDefault();
  }

  onMenuitemPointerover(event) {
    var tgt = event.currentTarget;
    var menuId = this.getMenuId(tgt);

    if (this.hasFocus()) {
      this.setFocusToMenuitem(menuId, tgt);
    }

    if (this.isAnyPopupOpen() || this.hasFocus()) {
      this.closePopupAll(tgt);
      if (this.hasPopup(tgt)) {
        this.openPopup(menuId, tgt);
      }
    }
  }

  onBackgroundPointerdown(event) {
    if (!this.domNode.contains(event.target)) {
      this.closePopupAll();
    }
  }
}

// Initialize menubar editor

window.addEventListener('load', function () {
  var menubarNavs = document.querySelectorAll('.menubar-navigation');
  for (var i = 0; i < menubarNavs.length; i++) {
    new MenubarNavigation(menubarNavs[i]);
  }
});

// JavaScript Document