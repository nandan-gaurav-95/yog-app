// ── Navbar ──────────────────────────────────────────────
export const NAV_PRODUCTS = {
  inhouse: [
    { label: "Plunger Pumps",                        href: "#plunger" },
    { label: "Hydraulic Actuated Diaphragm Pumps",   href: "#hydraulic" },
    { label: "Mechanically Actuated Diaphragm Pump", href: "#mechanical" },
    { label: "Solenoid Actuated Diaphragm Pump",     href: "#solenoid" },
    { label: "Multi Head Dosing Pump",               href: "#multihead" },
  ],
  services: [
    { label: "Complete Skid Mounted Chemical Dosing System", href: "#skid" },
    { label: "Agitators (Stirrers)",                         href: "#agitators" },
  ],
  others: [
    { label: "Accessories for Pumps & Dosing Systems", href: "#accessories" },
  ],
};

export const NAV_WHITEPAGES = [
  { label: "Food & Pharmaceutical Industries", href: "#" },
  { label: "Paper Industries",                 href: "#" },
  { label: "Chemical Industries",              href: "#" },
  { label: "Oil Industries",                   href: "#" },
  { label: "Sugar Industries",                 href: "#" },
];

// ── Products ─────────────────────────────────────────────
export const PRODUCTS = [
  {
    id: "plunger",
    tag: "Positive Displacement",
    title: "Plunger Pumps",
    desc: "Positive displacement pumps that displace a particular amount of fluid on each cycle stroke of operation. High flow rates of 10,000 litres/hr & high pressures of 400 kg/sq.cm.",
    features: [
      "High flow rates of 10,000 litres/hr & pressures up to 400 kg/sq.cm",
      "Steady state metering accuracy of ±1% of pump output at single setting of stroke from 10%–100%",
      "Reproducibility better than ±2.5% of set point",
      "Easily handles viscous fluids, compatible with most fluids",
      "Heating or cooling jackets for liquid head also available",
    ],
    materials: "AISI 304, AISI 316, Monel, Alloy 20, Hastalloy B, Polypropylene, Hastalloy C, Titanium, GFT",
    application: "Caustic dosing, Boiler Chemical dosing, Polyelectrolyte Dosing, Pressure Testing, Transfer of viscous product like syrup etc.",
    models: [
      { model: "CD-1", capacity: "0–200",  pressure: "115" },
      { model: "CD-2", capacity: "0–800",  pressure: "120" },
      { model: "CD-3", capacity: "0–3800", pressure: "310" },
      { model: "CD-4", capacity: "0–9800", pressure: "405" },
    ],
    image: '/assets/pumps/plunger_pump.jpeg', color: '#0ea5e9',
  },
  {
    id: "hydraulic",
    tag: "PTFE Diaphragm",
    title: "Hydraulic Actuated Diaphragm Pumps",
    desc: "Pumps with PTFE Diaphragm between hydraulic oil and the metered fluid — gland-less design to avoid leakages of corrosive, toxic, and costly fluids. Capacity up to 10,000 LPH and pressure up to 180 kg/cm².",
    features: [
      "Flow rates of 0 to 10,000 LPH & high discharge pressure of 180 kg/cm²",
      "Steady state metering accuracy of ±1% at single setting of stroke from 10%–100%",
      "Reproducibility better than ±1.5% of set point",
      "Inbuilt Pressure Relief & Vacuum Valve on hydraulic side for safeguard",
      "Available in simplex, duplex, or multiple heads",
    ],
    materials: "(PTFE Diaphragm) AISI 304, AISI 316, Monel, Alloy 20, Hastalloy B, Propylene, Hastalloy C, Titanium, GFT, PP, PTFE, PVC",
    application: "Acids, Flammable liquids, Corrosive liquids",
    models: [
      { model: "CDHD-1", capacity: "0–150",  pressure: "80" },
      { model: "CDHD-2", capacity: "0–700",  pressure: "100" },
      { model: "CDHD-3", capacity: "0–3000", pressure: "180" },
      { model: "CDHD-4", capacity: "0–8600", pressure: "180" },
    ],
    image: '/assets/pumps/hydraulic_pump.jpeg', color: '#10b981',
  },
  {
    id: "mechanical",
    tag: "Low Pressure",
    title: "Mechanically Actuated Diaphragm Pump",
    desc: "Primarily used in water and waste water treatment chemical plants. Capacity range from 0–1150 LPH and pressure up to 4 kg/cm². Used for low capacity and low pressure applications.",
    features: [
      "Flow range from 35 LPH up to 1150 LPH for different models",
      "Pressure of maximum 4 kg/sq.cm",
      "Completely leak free diaphragm pumps",
      "Steady state metering accuracy of ±3% at single setting of stroke from 10%–100%",
      "Reproducibility better than ±3% of set point",
      "Suitable to handle most corrosive fluids",
    ],
    materials: "(PTFE Diaphragm) AISI 304, AISI 316, Monel, Alloy 20, Hastalloy B, Propylene, Hastalloy C, Titanium, GFT, PP, PTFE, PVC",
    application: "Water and Waste treatment Chemicals",
    models: [
      { model: "CDMD-1", capacity: "0–50",   pressure: "4" },
      { model: "CDMD-2", capacity: "0–200",  pressure: "4" },
      { model: "CDMD-3", capacity: "0–1000", pressure: "4" },
    ],
    image: '/assets/pumps/mechanical_pump.jpeg', color: '#f59e0b',
  },
  {
    id: "solenoid",
    tag: "Laboratory & WWT",
    title: "Solenoid Actuated Diaphragm Pump",
    desc: "Compact and efficient dosing pump for laboratory chemicals and water treatment applications. Teflon-faced hypalon diaphragm for long-lasting operation.",
    features: [
      "Capacity up to 40 LPH",
      "Discharge pressure up to 10 kg/cm²",
      "Stroke speed up to 120 spm",
      "Pump Head (Liquid end): PP / PVC / PTFE / SS316",
      "Corrosion resistant GFPP housing",
      "Teflon-faced hypalon diaphragm for long-lasting operation",
    ],
    materials: "PP, PVC, PTFE, SS316 (Liquid end), GFPP Housing",
    application: "Laboratory Chemicals, Water and Waste Treatment Chemicals",
    models: [],
    image: '/assets/pumps/solenoid_pump.jpeg', color: '#8b5cf6',
  },
  {
    id: "multihead",
    tag: "Simplex / Duplex / Multiple",
    title: "Multi Head Dosing Pump",
    desc: "Available simplex, duplex or multiple heads for handling different chemicals with a common motor. Each head is independently connected and the capacity of each head is independently adjustable.",
    features: [
      "Available in simplex, duplex, or multiple head configurations",
      "Each head independently connected and capacity adjustable",
      "2/3/4 different suction and 2/3/4 variable discharges",
      "Saves electricity and cost of 2/3 motors",
      "All pumps can be made to dose as per customer requirement",
    ],
    materials: "As per customer requirement and liquid compatibility",
    application: "Multi-chemical dosing where different chemicals need to be handled simultaneously",
    models: [],
    image: '/assets/pumps/multihead_pump.jpeg', color: '#ec4899',
  },
];

// ── Application Sectors ───────────────────────────────────
export const APPLICATION_SECTORS = [
  {
    industry: "Food & Pharmaceutical Industries",
    image: '/assets/pumps/plunger_pump.jpeg', color: '#0ea5e9',
    items: [
      "Tablet Coating", "Cream Filling", "Effluent Treatment",
      "Transfer of viscous slurries like shrikhand", "Ointment", "Honey",
    ],
  },
  {
    industry: "Paper Industries",
    image: '/assets/pumps/hydraulic_pump.jpeg', color: '#10b981',
    items: [
      "Melamine and resin additions", "Perfume addition", "Alum dosing",
      "Slimicide injection", "Stock preparation in continuous bleaching",
    ],
  },
  {
    industry: "Chemical Industries",
    image: '/assets/pumps/mechanical_pump.jpeg', color: '#f59e0b',
    items: [
      "Metering of resins & catalyst", "Pilot plants & laboratories",
      "Water effluent treatment plants", "Acid dosing",
      "Polyelectrolyte dosing", "Flocculent dosing", "Chemical dosing systems",
    ],
  },
  {
    industry: "Oil Industries",
    color: "#c8a96e",
    items: [
      "Odorizing of natural gas", "Scale inhibitors, Wax inhibitors",
      "Dimulsifiers, Oxygen Scavengers, Glycol and Biosides",
      "Propane injection", "Amines to steam line to prevent corrosion",
      "Boiler feed water dosing systems",
    ],
  },
  {
    industry: "Sugar Industries",
    image: '/assets/pumps/multihead_pump.jpeg', color: '#ec4899',
    items: [
      "Alum dosing", "Flocculent dosing", "Mill sanitation (bioside dosing)",
      "Phosphoric acid dosing", "Hydrostatic testing of boiler tubes & valves",
      "Boiler feed water dosing system (low pressure & high pressure)",
      "Anti scalent dosing",
    ],
  },
];

// ── Accessories ───────────────────────────────────────────
export const ACCESSORIES = [
  "Pulsation Dampener",
  "Antisyphoning Valve",
  "Y-Type Stainer",
  "Pressure Relief Valve",
  "External Back Pressure Valve",
  "Fan",
];

// ── Skid System Components ────────────────────────────────
export const SKID_COMPONENTS = [
  "Single or compartment solution preparation tank",
  "Pressure relief valve",
  "Chemical dosing pumps single or multiple",
  "Pulsation Dampener, Interconnecting piping",
  "Instruments like Pressure Gauges, Level Gauges & Level Switches, Sensors etc.",
  "Control panel including interconnecting cabling",
  "Stirrer (Agitator)",
  "Valves & Fittings",
];

// ── Features (Why Chemdose) ───────────────────────────────
export const FEATURES = [
  { icon: "🛡️", title: "High Degree of Operational Safety" },
  { icon: "🔩", title: "Simple and Compact in Construction" },
  { icon: "💰", title: "Low Capital & Operating Cost" },
  { icon: "🔄", title: "Continuous & Reliable Process" },
  { icon: "⚙️", title: "Leak-Free Diaphragm Design" },
  { icon: "⚡", title: "High Energy Efficiency" },
  { icon: "🌀", title: "Precise Metering Accuracy ±1%" },
  { icon: "📏", title: "Wide Capacity Range: 0–10,000 LPH" },
  { icon: "🔧", title: "Easy Installation & Maintenance" },
];

// ── WhitePages / Case Studies ─────────────────────────────
export const WHITEPAGES = [
  { title: "Chemical Dosing System",    desc: "Complete skid-mounted solutions for water & effluent treatment plants" },
  { title: "Boiler Feed Water",         desc: "Precision dosing for boiler chemical treatment and feed water systems" },
  { title: "Food & Pharma Processing",  desc: "Hygienic metering for viscous slurries, creams, and pharmaceutical fluids" },
];
