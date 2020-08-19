// ITERATION 1
// Suspects Collection
const suspectsArray = [
  {
    firstName: "Jacob",
    lastName: "Green",
    occupation: "Entrepreneur",
    age: 45,
    description: "He has a lot of connections",
    image:
      "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    color: "green",
  },
  {
    firstName: "Doctor",
    lastName: "Orchid",
    occupation: "Scientist",
    age: 26,
    description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    color: "white",
  },
  {
    firstName: "Victor",
    lastName: "Plum",
    occupation: "Designer",
    age: 22,
    description: "Billionaire video game designer",
    image:
      "https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg",
    color: "purple",
  },
  {
    firstName: "Kasandra",
    lastName: "Scarlet",
    occupation: "Actor",
    age: 31,
    description: "She is an A-list movie star with a dark past",
    image: "https://www.radiotimes.com/uploads/images/Original/111967.jpg",
    color: "red",
  },
  {
    firstName: "Eleanor",
    lastName: "Peacock",
    occupation: "Socialité",
    age: 36,
    description:
      "She is from a wealthy family and uses her status and money to earn popularity",
    image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    color: "blue",
  },
  {
    firstName: "Jack",
    lastName: "Mustard",
    occupation: "Retired Football player",
    age: 62,
    description:
      "He is a former football player who tries to get by on his former glory",
    image:
      "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg",
    color: "yellow",
  },
];
// Weapons Collection
const weaponsArray = [
  { name: "rope", weight: 10 },
  { name: "knife", weight: 8 },
  { name: "candlestick", weight: 2 },
  { name: "dumbbell", weight: 30 },
  { name: "poison", weight: 2 },
  { name: "axe", weight: 15 },
  { name: "bat", weight: 13 },
  { name: "trophy", weight: 25 },
  { name: "pistol", weight: 20 },
];
// Rooms Collection
const roomsArray = [
  { name: "Dining Room" },
  { name: "Conservatory" },
  { name: "Kitchen" },
  { name: "Study" },
  { name: "Library" },
  { name: "Billiard Room" },
  { name: "Lounge" },
  { name: "Ballroom" },
  { name: "Hall" },
  { name: "Spa" },
  { name: "Living Room" },
  { name: "Observatory" },
  { name: "Theater" },
  { name: "Guest House" },
  { name: "Patio" },
];
// ITERATION 2
function selectRandom(array) {}

function pickMystery() {
  return {
    suspect: selectRandom(suspectsArray),
    weapon: selectRandom(weaponsArray),
    room: selectRandom(roomsArray),
  };
<<<<<<< HEAD
  var drOrchid = {
    first_name:   'Doctor',
    last_name:    'Orchid',
    color:        'white',
    description:  'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
    age:          '26',
    image:        'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
    occupation:   'Scientist'
  };
  var profPlum = {
    first_name:   'Victor',
    last_name:    'Plum',
    color:        'purple',
    description:  'Billionare video game designer',
    age:          '22',
    image:        'https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg',
    occupation:   'Designer'
  };
  var missScarlet = {
    first_name:   'Kasandra',
    last_name:    'Scarlet',
    color:        'red',
    description:  'She is an A-list movie star with a dark past',
    age:          '31',
    image:        'https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg',
    occupation:   'Actor'
  };
  var mrsPeacock = {
    first_name:   'Eleanor',
    last_name:    'Peacock',
    color:        'blue',
    description:  'She is from a wealthy family and uses her status and money to earn popularity',
    age:          '36',
    image:        'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
    occupation:   'Socialité'
  };
  var mrMustard = {
    first_name:   'Jack',
    last_name:    'Mustard',
    color:        'yellow',
    description:  'He is a former football player who tries to get by on his former glory',
    age:          '62',
    image:        'https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg',
    occupation:   'Retired Football player'
  };
  // Characters' Collection
  var charactersArray = [];
  charactersArray.push(mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard);
  // Weapons
  var rope        = { name: 'rope',         weight: 10 };
  var knife       = { name: 'knife',        weight: 8 };
  var candlestick = { name: 'candlestick',  weight: 2 };
  var dumbbell    = { name: 'dumbbell',     weight: 30 };
  var poison      = { name: 'poison',       weight: 2 };
  var axe         = { name: 'axe',          weight: 15 };
  var bat         = { name: 'bat',          weight: 13 };
  var trophy      = { name: 'trophy',       weight: 25 };
  var pistol      = { name: 'pistol',       weight: 20 };
  // Weapons' Collection
  var weaponsArray = [];
  weaponsArray.push(rope, knife, candlestick, dumbbell, poison, axe, bat, trophy, pistol);
  // Rooms
  var diningRoom   = { name: 'Dinning Room' };
  var conservatory = { name: 'Conservatory' };
  var kitchen      = { name: 'Kitchen' };
  var study        = { name: 'Study' };
  var library      = { name: 'Library' };
  var billiardRoom = { name: 'Billiard Room' };
  var lounge       = { name: 'Lounge' };
  var ballroom     = { name: 'Ballroom' };
  var hall         = { name: 'Hall' };
  var spa          = { name: 'Spa' };
  var livingRoom   = { name: 'Living Room' };
  var observatory  = { name: 'Observatory' };
  var theater      = { name: 'Theater' };
  var guestHouse  =  { name: 'Guest House' };
  var patio        = { name: 'Patio' };
  // Rooms' Collection
  var roomsArray = [];
  roomsArray.push(diningRoom, conservatory, kitchen, study, library, billiardRoom, lounge, ballroom, hall, spa, livingRoom, observatory, theater, guestHouse, patio);

  // iteration 2

  function selectRandom(array){

  }

  function pickMystery(){

  return {
      suspect: selectRandom(suspectsArray),
      weapon: selectRandom(weaponsArray),
      room: selectRandom(roomsArray),
  }
}

// iteration 3

function revealMystery (envelope){
    let firstName = envelope.suspect.firstName;
    let lastName = envelope.suspect.lastName;
    let weapon = envelope.suspect.weapon;
    let room = envelope.suspect.room;

    return '${firstName} ${lastName}' killed Mr Boddy using the ${weapon} in the ${room}
}
=======
}

// ITERATION 3

function revealMystery(envelope) {
  let firstName = envelope.suspect.firstName;
  let lastName = envelope.suspect.lastName;
  let weapon = envelope.suspect.weapon;
  let room = envelope.suspect.room;

  return `${firstName} ${lastName} killed Mr. Boddy using the ${weapon} in the ${room}`;
}
>>>>>>> 8ffb37a944ac2b2572cb15d11af6e0780eeaba6f
