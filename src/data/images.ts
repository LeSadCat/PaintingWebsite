const px = (id: number, w = 1200, h = 800) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=${w}&h=${h}`;

export const IMG = {
  // Painters actually working — instantly recognisable
  painterRoller: px(5493655, 900, 1100),
  painterBack: px(5493653, 900, 1100),
  painterTeam: px(5493654, 1000, 700),
  painterMask: px(4981780, 800, 900),
  painterMan: px(7218579, 900, 1100),
  paintersTwo: px(36153946, 1200, 800),
  brushHand: px(8481711, 1000, 750),
  brushHand2: px(8481710, 800, 1000),
  rollerWhite: px(5641411, 800, 1000),

  // Exterior work
  scaffold: px(36096165, 800, 1100),
  bambooLadder: px(16747104, 800, 1100),
  ladderWall: px(31608474, 1000, 800),
  roofWorkers: px(16164823, 1000, 700),

  // Kerala homes
  keralaRiverHouse: px(34618650, 1200, 800),
  keralaCanalHouse: px(17870091, 1000, 700),
  keralaColonial: `https://images.pexels.com/photos/36335096/pexels-photo-36335096.png?auto=compress&cs=tinysrgb&fit=crop&w=1200&h=800`,
  colourfulHouse: px(32878565, 1200, 800),
  tiledRoofHouse: px(35289099, 1000, 700),
  backwaters: px(35347826, 1200, 700),

  // Villas
  villaPool: px(36676879, 1200, 800),
  villaDusk: px(13752348, 1200, 800),
  villaStone: px(28054849, 1000, 700),

  // Interiors
  living1: px(7147284, 1200, 800),
  living2: px(8142820, 1200, 800),
  living3: px(6957097, 1200, 800),
  living4: px(6538933, 1200, 900),
  living5: px(8135491, 1200, 800),
  bedroom1: px(6758350, 1200, 800),
  bedroomTeal: px(10450155, 1000, 700),
  bedroom3: px(6434633, 1000, 700),
  dining: px(33488358, 1000, 700),
  office: px(6794970, 1200, 800),
  officeMeeting: px(7511748, 1000, 700),

  // Misc
  swatches: px(6474450, 1000, 700),
  swatchFan: px(6474446, 800, 1000),
};

export const AVATAR = {
  a: px(774909, 200, 200),
  b: px(1222271, 200, 200),
  c: px(1239291, 200, 200),
  d: px(415829, 200, 200),
  e: px(614810, 200, 200),
  f: px(1181690, 200, 200),
};
