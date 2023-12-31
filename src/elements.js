const elements = {
    "H": {
        "name": "Hydrogen",
        "atomicNumber": 1,
        "molarMass": 1.00794
    },
    "He": {
        "name": "Helium",
        "atomicNumber": 2,
        "molarMass": 4.002602
    },
    "Li": {
        "name": "Lithium",
        "atomicNumber": 3,
        "molarMass": 6.941
    },
    "Be": {
        "name": "Beryllium",
        "atomicNumber": 4,
        "molarMass": 9.0121831
    },
    "B": {
        "name": "Boron",
        "atomicNumber": 5,
        "molarMass": 10.81
    },
    "C": {
        "name": "Carbon",
        "atomicNumber": 6,
        "molarMass": 12.011
    },
    "N": {
        "name": "Nitrogen",
        "atomicNumber": 7,
        "molarMass": 14.007
    },
    "O": {
        "name": "Oxygen",
        "atomicNumber": 8,
        "molarMass": 15.999
    },
    "F": {
        "name": "Fluorine",
        "atomicNumber": 9,
        "molarMass": 18.998
    },
    "Ne": {
        "name": "Neon",
        "atomicNumber": 10,
        "molarMass": 20.18
    },
    "Na": {
        "name": "Sodium",
        "atomicNumber": 11,
        "molarMass": 22.99
    },
    "Mg": {
        "name": "Magnesium",
        "atomicNumber": 12,
        "molarMass": 24.305
    },
    "Al": {
        "name": "Aluminum",
        "atomicNumber": 13,
        "molarMass": 26.982
    },
    "Si": {
        "name": "Silicon",
        "atomicNumber": 14,
        "molarMass": 28.085
    },
    "P": {
        "name": "Phosphorus",
        "atomicNumber": 15,
        "molarMass": 30.974
    },
    "S": {
        "name": "Sulfur",
        "atomicNumber": 16,
        "molarMass": 32.06
    },
    "Cl": {
        "name": "Chlorine",
        "atomicNumber": 17,
        "molarMass": 35.45
    },
    "Ar": {
        "name": "Argon",
        "atomicNumber": 18,
        "molarMass": 39.95
    },
    "K": {
        "name": "Potassium",
        "atomicNumber": 19,
        "molarMass": 39.098
    },
    "Ca": {
        "name": "Calcium",
        "atomicNumber": 20,
        "molarMass": 40.08
    },
    "Sc": {
        "name": "Scandium",
        "atomicNumber": 21,
        "molarMass": 44.96
    },
    "Ti": {
        "name": "Titanium",
        "atomicNumber": 22,
        "molarMass": 47.87
    },
    "V": {
        "name": "Vanadium",
        "atomicNumber": 23,
        "molarMass": 50.94
    },
    "Cr": {
        "name": "Chromium",
        "atomicNumber": 24,
        "molarMass": 51.996
    },
    "Mn": {
        "name": "Manganese",
        "atomicNumber": 25,
        "molarMass": 54.94
    },
    "Fe": {
        "name": "Iron",
        "atomicNumber": 26,
        "molarMass": 55.85
    },
    "Co": {
        "name": "Cobalt",
        "atomicNumber": 27,
        "molarMass": 58.93
    },
    "Ni": {
        "name": "Nickel",
        "atomicNumber": 28,
        "molarMass": 58.69
    },
    "Cu": {
        "name": "Copper",
        "atomicNumber": 29,
        "molarMass": 63.55
    },
    "Zn": {
        "name": "Zinc",
        "atomicNumber": 30,
        "molarMass": 65.38
    },
    "Ga": {
        "name": "Gallium",
        "atomicNumber": 31,
        "molarMass": 69.72
    },
    "Ge": {
        "name": "Germanium",
        "atomicNumber": 32,
        "molarMass": 72.63
    },
    "As": {
        "name": "Arsenic",
        "atomicNumber": 33,
        "molarMass": 74.92
    },
    "Se": {
        "name": "Selenium",
        "atomicNumber": 34,
        "molarMass": 78.97
    },
    "Br": {
        "name": "Bromine",
        "atomicNumber": 35,
        "molarMass": 79.90
    },
    "Kr": {
        "name": "Krypton",
        "atomicNumber": 36,
        "molarMass": 83.80
    },
    "Rb": {
        "name": "Rubidium",
        "atomicNumber": 37,
        "molarMass": 85.47
    },
    "Sr": {
        "name": "Strontium",
        "atomicNumber": 38,
        "molarMass": 87.62
    },
    "Y": {
        "name": "Yttrium",
        "atomicNumber": 39,
        "molarMass": 88.91
    },
    "Zr": {
        "name": "Zirconium",
        "atomicNumber": 40,
        "molarMass": 91.22
    },
    "Nb": {
        "name": "Niobium",
        "atomicNumber": 41,
        "molarMass": 92.91
    },
    "Mo": {
        "name": "Molybdenum",
        "atomicNumber": 42,
        "molarMass": 95.94
    },
    "Tc": {
        "name": "Technetium",
        "atomicNumber": 43,
        "molarMass": 98
    },
    "Ru": {
        "name": "Ruthenium",
        "atomicNumber": 44,
        "molarMass": 101.1
    },
    "Rh": {
        "name": "Rhodium",
        "atomicNumber": 45,
        "molarMass": 102.9
    },
    "Pd": {
        "name": "Palladium",
        "atomicNumber": 46,
        "molarMass": 106.4
    },
    "Ag": {
        "name": "Silver",
        "atomicNumber": 47,
        "molarMass": 107.9
    },
    "Cd": {
        "name": "Cadmium",
        "atomicNumber": 48,
        "molarMass": 112.4
    },
    "In": {
        "name": "Indium",
        "atomicNumber": 49,
        "molarMass": 114.8
    },
    "Sn": {
        "name": "Tin",
        "atomicNumber": 50,
        "molarMass": 118.7
    },
    "Sb": {
        "name": "Antimony",
        "atomicNumber": 51,
        "molarMass": 121.8
    },
    "Te": {
        "name": "Tellurium",
        "atomicNumber": 52,
        "molarMass": 127.6
    },
    "I": {
        "name": "Iodine",
        "atomicNumber": 53,
        "molarMass": 126.9
    },
    "Xe": {
        "name": "Xenon",
        "atomicNumber": 54,
        "molarMass": 131.3
    },
    "Cs": {
        "name": "Cesium",
        "atomicNumber": 55,
        "molarMass": 132.9
    },
    "Ba": {
        "name": "Barium",
        "atomicNumber": 56,
        "molarMass": 137.3
    },
    "La": {
        "name": "Lanthanum",
        "atomicNumber": 57,
        "molarMass": 138.9
    },
    "Ce": {
        "name": "Cerium",
        "atomicNumber": 58,
        "molarMass": 140.1
    },
    "Pr": {
        "name": "Praseodymium",
        "atomicNumber": 59,
        "molarMass": 140.9
    },
    "Nd": {
        "name": "Neodymium",
        "atomicNumber": 60,
        "molarMass": 144.2
    },
    "Pm": {
        "name": "Promethium",
        "atomicNumber": 61,
        "molarMass": 145
    },
    "Sm": {
        "name": "Samarium",
        "atomicNumber": 62,
        "molarMass": 150.4
    },
    "Eu": {
        "name": "Europium",
        "atomicNumber": 63,
        "molarMass": 152
    },
    "Gd": {
        "name": "Gadolinium",
        "atomicNumber": 64,
        "molarMass": 157.3
    },
    "Tb": {
        "name": "Terbium",
        "atomicNumber": 65,
        "molarMass": 158.9
    },
    "Dy": {
        "name": "Dysprosium",
        "atomicNumber": 66,
        "molarMass": 162.5
    },
    "Ho": {
        "name": "Holmium",
        "atomicNumber": 67,
        "molarMass": 164.9
    },
    "Er": {
        "name": "Erbium",
        "atomicNumber": 68,
        "molarMass": 167.3
    },
    "Tm": {
        "name": "Thulium",
        "atomicNumber": 69,
        "molarMass": 168.9
    },
    "Yb": {
        "name": "Ytterbium",
        "atomicNumber": 70,
        "molarMass": 173.1
    },
    "Lu": {
        "name": "Lutetium",
        "atomicNumber": 71,
        "molarMass": 175.0
    },
    "Hf": {
        "name": "Hafnium",
        "atomicNumber": 72,
        "molarMass": 178.5
    },
    "Ta": {
        "name": "Tantalum",
        "atomicNumber": 73,
        "molarMass": 180.9
    },
    "W": {
        "name": "Tungsten",
        "atomicNumber": 74,
        "molarMass": 183.8
    },
    "Re": {
        "name": "Rhenium",
        "atomicNumber": 75,
        "molarMass": 186.2
    },
    "Os": {
        "name": "Osmium",
        "atomicNumber": 76,
        "molarMass": 190.2
    },
    "Ir": {
        "name": "Iridium",
        "atomicNumber": 77,
        "molarMass": 192.2
    },
    "Pt": {
        "name": "Platinum",
        "atomicNumber": 78,
        "molarMass": 195.1
    },
    "Au": {
        "name": "Gold",
        "atomicNumber": 79,
        "molarMass": 197.0
    },
    "Hg": {
        "name": "Mercury",
        "atomicNumber": 80,
        "molarMass": 200.6
    },
    "Tl": {
        "name": "Thallium",
        "atomicNumber": 81,
        "molarMass": 204.4
    },
    "Pb": {
        "name": "Lead",
        "atomicNumber": 82,
        "molarMass": 207.2
    },
    "Bi": {
        "name": "Bismuth",
        "atomicNumber": 83,
        "molarMass": 208.9
    },
    "Po": {
        "name": "Polonium",
        "atomicNumber": 84,
        "molarMass": 209.0
    },
    "At": {
        "name": "Astatine",
        "atomicNumber": 85,
        "molarMass": 210.0
    },
    "Rn": {
        "name": "Radon",
        "atomicNumber": 86,
        "molarMass": 222.0
    },
    "Fr": {
        "name": "Francium",
        "atomicNumber": 87,
        "molarMass": 223.0
    },
    "Ra": {
        "name": "Radium",
        "atomicNumber": 88,
        "molarMass": 226.0
    },
    "Ac": {
        "name": "Actinium",
        "atomicNumber": 89,
        "molarMass": 227.0
    },
    "Th": {
        "name": "Thorium",
        "atomicNumber": 90,
        "molarMass": 232.0
    },
    "Pa": {
        "name": "Protactinium",
        "atomicNumber": 91,
        "molarMass": 231.0
    },
    "U": {
        "name": "Uranium",
        "atomicNumber": 92,
        "molarMass": 238.0
    },
    "Np": {
        "name": "Neptunium",
        "atomicNumber": 93,
        "molarMass": 237.0
    },
    "Pu": {
        "name": "Plutonium",
        "atomicNumber": 94,
        "molarMass": 244.0
    },
    "Am": {
        "name": "Americium",
        "atomicNumber": 95,
        "molarMass": 243.0
    },
    "Cm": {
        "name": "Curium",
        "atomicNumber": 96,
        "molarMass": 247.0
    },
    "Bk": {
        "name": "Berkelium",
        "atomicNumber": 97,
        "molarMass": 247.0
    },
    "Cf": {
        "name": "Californium",
        "atomicNumber": 98,
        "molarMass": 251.0
    },
    "Es": {
        "name": "Einsteinium",
        "atomicNumber": 99,
        "molarMass": 252.0
    },
    "Fm": {
        "name": "Fermium",
        "atomicNumber": 100,
        "molarMass": 257.0
    },
    "Md": {
        "name": "Mendelevium",
        "atomicNumber": 101,
        "molarMass": 258.0
    },
    "No": {
        "name": "Nobelium",
        "atomicNumber": 102,
        "molarMass": 259.0
    },
    "Lr": {
        "name": "Lawrencium",
        "atomicNumber": 103,
        "molarMass": 266.0
    },
    "Rf": {
        "name": "Rutherfordium",
        "atomicNumber": 104,
        "molarMass": 267.0
    },
    "Db": {
        "name": "Dubnium",
        "atomicNumber": 105,
        "molarMass": 270.0
    },
    "Sg": {
        "name": "Seaborgium",
        "atomicNumber": 106,
        "molarMass": 271.0
    },
    "Bh": {
        "name": "Bohrium",
        "atomicNumber": 107,
        "molarMass": 270.0
    },
    "Hs": {
        "name": "Hassium",
        "atomicNumber": 108,
        "molarMass": 277.0
    },
    "Mt": {
        "name": "Meitnerium",
        "atomicNumber": 109,
        "molarMass": 276.0
    },
    "Ds": {
        "name": "Darmstadtium",
        "atomicNumber": 110,
        "molarMass": 281.0
    },
    "Rg": {
        "name": "Roentgenium",
        "atomicNumber": 111,
        "molarMass": 280.0
    },
    "Cn": {
        "name": "Copernicium",
        "atomicNumber": 112,
        "molarMass": 285.0
    },
    "Nh": {
        "name": "Nihonium",
        "atomicNumber": 113,
        "molarMass": 284.0
    },
    "Fl": {
        "name": "Flerovium",
        "atomicNumber": 114,
        "molarMass": 289.0
    },
    "Mc": {
        "name": "Moscovium",
        "atomicNumber": 115,
        "molarMass": 288.0
    },
    "Lv": {
        "name": "Livermorium",
        "atomicNumber": 116,
        "molarMass": 293.0
    },
    "Ts": {
        "name": "Tennessine",
        "atomicNumber": 117,
        "molarMass": 294.0
    },
    "Og": {
        "name": "Oganesson",
        "atomicNumber": 118,
        "molarMass": 294.0
    }
};