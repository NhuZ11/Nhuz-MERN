//object notation

let projector = {
  brand: "viewsonic",
  color: "white",
  price: 50000,
  width: 15,
  unit: "cm",
};
console.log(projector);

let color = {
  colorName: "red",
  hexValue: "#FF0000",
  rgbValue: {
    red: 255,
    green: 0,
    blue: 0,
  }
};

console.log(color.hexValue);

let colors = [
  {
    colorName: "red",
    hexValue: "#FF0000",
    rgbValue: {
      red: 255,
      green: 0,
      blue: 0,
    }
  },
  {
    colorName: "green",
    hexValue: "#F10000",
    rgbValue: {
      red: 0,
      green: 255,
      blue: 0,
    }
  },
  {
    colorName: "blue",
    hexValue: "#FF20000",
    rgbValue: {
      red: 0,
      green: 0,
      blue: 255,
    },
  }
];

colors[0].colorName.rgbValue.blue=1;
console.log(colors[0]);
colors[1].colorName = "hariyo";
console.log(colors[1].colorName);
console.log(colors)

let courses = [
  {
    courseName: "MERN",
    Duration: "3 months",
  },
  {
    courseName: "Python",
    Duration: "2 months",
  },
  {
    courseName: "UI/UX",
    Duration: "3 months",
  }
];
