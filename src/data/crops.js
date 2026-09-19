export const CROP_STAGES = [
  {
    step: "01",
    title: "Soil Preparation",
    subtitle: "The Living Substrate",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1000&q=85",
    description: "Build healthier soil and establish an unshakeable biological foundation before seed touches earth.",
    detailedNotes: "Modern soil fatigue is reversed through concentrated humic matrices, organic carbon infusion, and beneficial mycorrhizae. A fertile, aerated rhizosphere guarantees optimal nutrient availability and moisture buffering.",
    solutions: ["bhoomi-ratna-granules", "mritika-vital-humic-fulvic"],
    keyNutrients: "Organic Carbon, Humic Acid, Calcium, Mineral Phosphate",
    bestPractice: "Incorporate organic granules 7-10 days prior to transplanting or sowing."
  },
  {
    step: "02",
    title: "Seed & Root Care",
    subtitle: "The Genesis of Resilience",
    image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=1000&q=85",
    description: "Support vigorous germination, prevent damping-off, and stimulate profound taproot and fibrous root development.",
    detailedNotes: "Early inoculation with beneficial biological antagonists coats the radical and seminal roots, shielding vulnerable seedlings from damping-off and collar rots while secreting natural auxin phytohormones.",
    solutions: ["bio-nitrone-complex", "kavach-bio-fungicide", "vam-myco-power"],
    keyNutrients: "Microbial Consortia, Mycorrhizal Spores, Phytohormones",
    bestPractice: "Seed treatment or 15-minute seedling root dip before field transplantation."
  },
  {
    step: "03",
    title: "Plant Growth",
    subtitle: "Vigorous Vegetative Canopy",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=85",
    description: "Encourage balanced vegetative branching, active tillering, and dark green photosynthetic efficiency.",
    detailedNotes: "As crops establish vegetative canopy, biological nitrogen assimilation combined with fermented botanical elixirs accelerates internode development without the weak, succulent tissue caused by synthetic urea overdosage.",
    solutions: ["panchagavya-amrit", "bio-nitrone-complex", "mritika-vital-humic-fulvic"],
    keyNutrients: "Biological Nitrogen, Amino Acids, L-Glycine, Magnesium",
    bestPractice: "Foliar misting during early morning hours to maximize stomatal absorption."
  },
  {
    step: "04",
    title: "Flowering",
    subtitle: "Floral Induction & Retention",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1000&q=85",
    description: "Support prolific flower bud initiation, optimize pollen viability, and prevent premature flower abortion.",
    detailedNotes: "Flowering represents the most sensitive metabolic transition. Marine-sourced bioactive betaines and cytokinins regulate hormonal balance, ensuring uniform flowering flushes and superior pollination rates under temperature spikes.",
    solutions: ["flora-max-seaweed-elixir", "neem-shield-azadirachtin"],
    keyNutrients: "Cytokinins, Marine Betaines, Boron, Zinc",
    bestPractice: "Apply at first appearance of flower buds; avoid spraying during peak honeybee foraging hours."
  },
  {
    step: "05",
    title: "Fruit Development",
    subtitle: "Uniform Filling & Maturation",
    image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&w=1000&q=85",
    description: "Help crops reach their full genetic potential with plump grain filling, dense bolls, and vibrant fruit luster.",
    detailedNotes: "Mobilizing mineral potassium silicates from the soil drives carbohydrate translocation into developing seeds, bolls, and fruit flesh. Results in heavy 1000-grain weight, deep fruit color, and extended post-harvest shelf-life.",
    solutions: ["bio-potash-solubilizer", "flora-max-seaweed-elixir"],
    keyNutrients: "Bio-Available Potash (K2O), Polysaccharides, Calcium Chelate",
    bestPractice: "Combine biological potash fertigation with light foliar marine extract during fruit swell."
  },
  {
    step: "06",
    title: "Natural Protection",
    subtitle: "Proactive Ecological Defense",
    image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=1000&q=85",
    description: "Support crops against common environmental, fungal, and insect pressures without chemical residue.",
    detailedNotes: "Rather than waiting for devastating pest infestations, multi-limonoid botanical concentrates and fungal antagonists establish an invisible defensive barrier that halts vector feeding and pathogen mycelium germination.",
    solutions: ["neem-shield-azadirachtin", "chilli-special-bio-repel", "suraksha-viral-defense", "kavach-bio-fungicide"],
    keyNutrients: "Azadirachtin, Herbal Alkaloids, Trichoderma, Lytic Enzymes",
    bestPractice: "Adopt a preventative 12-day rotational regime to permanently avoid pest resurgence."
  }
];

export const CROPS = [
  {
    id: "paddy",
    name: "Paddy (Rice)",
    teluguName: "వరి",
    category: "Cereal Grain",
    heroImage: "/crops/paddy.png",
    tagline: "Golden Panicles & Maximum Tillering With Zero Residue",
    challenges: [
      "Blast and Sheath Blight in high humidity",
      "Yellow Stem Borer and Brown Plant Hopper (BPH)",
      "High urea leaching and soil compaction under flooded puddled conditions"
    ],
    recommendedSolutions: [
      {
        stage: "Basal & Nursery",
        productSlug: "bhoomi-ratna-granules",
        action: "Apply 40 kg/acre with 1 kg Kavach in nursery bed for vigorous white root initiation and blast immunity."
      },
      {
        stage: "Active Tillering (20-35 DAT)",
        productSlug: "bio-nitrone-complex",
        action: "Fertigate with Bio-Nitrone to maximize productive tillers per hill without chemical urea toxicity."
      },
      {
        stage: "Panicle Initiation to Grain Filling",
        productSlug: "bio-potash-solubilizer",
        action: "Bio-Potash application ensures 100% filled spikelets and solid, heavy golden grains."
      }
    ],
    highlightQuote: "“Paddy cultivated with Vijetha organic protocols exhibits exceptional lodging resistance and clean, disease-free panicles with higher milling recovery.”"
  },
  {
    id: "cotton",
    name: "Cotton (Kapas)",
    teluguName: "పత్తి",
    category: "Cash Crop / Fiber",
    heroImage: "/crops/cotton.png",
    tagline: "Lush Square Retention, Heavy Bolls & Long Staple Strength",
    challenges: [
      "Severe square and flower drop during overcast monsoon spells",
      "Bollworm and sucking pest pressure (thrips, aphids, whiteflies)",
      "Soil compaction leading to root wilting during drought cycles"
    ],
    recommendedSolutions: [
      {
        stage: "Early Vegetative (30-45 DAS)",
        productSlug: "mritika-vital-humic-fulvic",
        action: "Drench Mritika-Vital to drive deep taproot penetration into dry subsoil layers."
      },
      {
        stage: "Squaring & Flowering",
        productSlug: "flora-max-seaweed-elixir",
        action: "Spray Flora-Max at 2 ml/L to lock in squares, avoiding sudden abortion and shedding."
      },
      {
        stage: "Boll Maturation",
        productSlug: "neem-shield-azadirachtin",
        action: "Rotational spray with Neem Shield 10,000 PPM to protect lint quality from late-season pests."
      }
    ],
    highlightQuote: "“Healthy square retention translates directly to an extra 3 to 5 quintals of high-grade lint per acre.”"
  },
  {
    id: "chilli",
    name: "Chilli (Mirchi)",
    teluguName: "మిర్చి",
    category: "Spice & Vegetable",
    heroImage: "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=1200&q=85",
    tagline: "Vibrant Color, High Pungency & Resilient Foliage",
    challenges: [
      "Black Thrips, Yellow Mites, and Whiteflies causing severe leaf curl",
      "Dieback, Anthracnose fruit rot, and root wilt in black cotton soils",
      "Pesticide resistance from frequent chemical cocktails"
    ],
    recommendedSolutions: [
      {
        stage: "Transplanting & Early Establishment",
        productSlug: "kavach-bio-fungicide",
        action: "Root dip and drench with Kavach to neutralize soil-borne Fusarium and collar rots."
      },
      {
        stage: "Vegetative & Branching",
        productSlug: "chilli-special-bio-repel",
        action: "Spray Agri-Shield Bio-Repel to stop thrips rasping and prevent Gemini virus vector transmission."
      },
      {
        stage: "Continuous Picking & Flowering",
        productSlug: "flora-max-seaweed-elixir",
        action: "Foliar Flora-Max every 15 days ensures continuous fruit flushes and deep red color development."
      }
    ],
    highlightQuote: "“Vijetha’s herbal pest deterrents protect Andhra and Telangana chilli farms where chemical pesticides fail due to pest resistance.”"
  },
  {
    id: "tomato",
    name: "Tomato",
    teluguName: "టొమాటో",
    category: "Solanaceous Vegetable",
    heroImage: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=1200&q=85",
    tagline: "Thick Pericarp, Uniform Red Ripening & Extended Shelf Life",
    challenges: [
      "Bacterial wilt and early/late blight on leaves and stems",
      "Tomato Yellow Leaf Curl Virus (TYLCV) transmitted by whiteflies",
      "Blossom end rot and cracking during sudden rainfall changes"
    ],
    recommendedSolutions: [
      {
        stage: "Bed Preparation",
        productSlug: "bhoomi-ratna-granules",
        action: "Enrich beds with Bhoomi Ratna to balance calcium availability and prevent blossom end rot."
      },
      {
        stage: "First Flush to Fruit Set",
        productSlug: "suraksha-viral-defense",
        action: "Spray Suraksha at the earliest sign of virus vector activity to preserve healthy terminal shoots."
      },
      {
        stage: "Fruit Bulking",
        productSlug: "bio-potash-solubilizer",
        action: "Fertigate with Bio-Potash for solid, thick-walled fruits that withstand long-distance transport."
      }
    ],
    highlightQuote: "“Firm skin and uniform scarlet color ensure premium market auction prices for Vijetha-grown tomatoes.”"
  },
  {
    id: "vegetables",
    name: "Vegetables (Brinjal, Okra, Gourds)",
    teluguName: "కూరగాయలు",
    category: "Horticulture",
    heroImage: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=85",
    tagline: "Residue-Free Clean Harvests For Premium Farm-Gate Value",
    challenges: [
      "Daily or frequent harvesting makes chemical spray withholding impossible",
      "Fruit and shoot borer in Brinjal and Okra",
      "Nematode infestation causing stunted root galls"
    ],
    recommendedSolutions: [
      {
        stage: "Soil Inoculation",
        productSlug: "vam-myco-power",
        action: "Introduce VAM Myco-Power to protect roots from parasitic nematodes and drought shock."
      },
      {
        stage: "Throughout Harvest Cycles",
        productSlug: "neem-shield-azadirachtin",
        action: "Neem Shield has 0-day PHI, allowing safe harvest on the same day as application."
      },
      {
        stage: "Weekly Maintenance",
        productSlug: "panchagavya-amrit",
        action: "Panchagavya foliar drench maintains dark glossy foliage and uninterrupted floral flushes."
      }
    ],
    highlightQuote: "“Zero pesticide residues allow direct supply to premium organic retail chains and urban supermarkets.”"
  },
  {
    id: "fruits",
    name: "Fruits (Mango, Citrus, Pomegranate)",
    teluguName: "పండ్ల తోటలు",
    category: "Perennial Orchards",
    heroImage: "https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=1200&q=85",
    tagline: "High Brix Sugar Content, Flawless Peel & Enhanced Export Quality",
    challenges: [
      "Heavy flower drop during sudden spring heatwaves",
      "Fruit fly damage and fungal anthracnose fruit staining",
      "Soil nutrient depletion in perennial tree basins"
    ],
    recommendedSolutions: [
      {
        stage: "Post-Harvest Tree Rest",
        productSlug: "bhoomi-ratna-granules",
        action: "Ring application of 2-3 kg per tree with Mritika-Vital to rebuild carbohydrate reserves in roots."
      },
      {
        stage: "Bud Break to Full Bloom",
        productSlug: "flora-max-seaweed-elixir",
        action: "Foliar mist Flora-Max to ensure 90%+ fruit set and minimize drop during marble-size stage."
      },
      {
        stage: "Fruit Development",
        productSlug: "bio-potash-solubilizer",
        action: "Drip Bio-Potash to maximize fruit sugar content, natural aroma, and peel firmness."
      }
    ],
    highlightQuote: "“Orchard owners experience substantial export price premiums due to impeccable fruit peel and elevated sweetness.”"
  },
  {
    id: "pulses",
    name: "Pulses (Red Gram, Bengal Gram, Black Gram)",
    teluguName: "పప్పుధాన్యాలు",
    category: "Legumes / Pulses",
    heroImage: "/crops/pulses.png",
    tagline: "Prolific Nodulation, Abundant Pod Set & Heavy Seeds",
    challenges: [
      "Wilt (Fusarium) and root rot in dryland soils",
      "Pod borer (Helicoverpa armigera) attacks during podding",
      "Terminal moisture stress during grain maturation"
    ],
    recommendedSolutions: [
      {
        stage: "Seed Inoculation",
        productSlug: "bio-nitrone-complex",
        action: "Coat pulse seeds with Bio-Nitrone and Kavach for rapid nodulation and zero wilt mortality."
      },
      {
        stage: "Branching & Flowering",
        productSlug: "flora-max-seaweed-elixir",
        action: "Flora-Max spray converts maximum vegetative branches into fertile flowering nodes."
      },
      {
        stage: "Early Pod Formation",
        productSlug: "neem-shield-azadirachtin",
        action: "Preventative botanical spray prevents pod borer larvae from boring into young pulse pods."
      }
    ],
    highlightQuote: "“Pulses grown with Vijetha bio-inoculants show up to 40% more root nodules and thrive under rain-fed conditions.”"
  },
  {
    id: "other-crops",
    name: "Other Crops (Sugarcane, Spices, Oilseeds)",
    teluguName: "ఇతర వాణిజ్య పంటలు",
    category: "Commercial Crops",
    heroImage: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=85",
    tagline: "Customized Biological Care For Every Agro-Climatic Zone",
    challenges: [
      "Red rot and internode shortening in sugarcane",
      "Rhizome rot in Ginger and Turmeric",
      "Declining oil recovery in groundnut and mustard"
    ],
    recommendedSolutions: [
      {
        stage: "Substrate Conditioning",
        productSlug: "mritika-vital-humic-fulvic",
        action: "Deep soil drenching to enrich organic humus and solubilize micronutrients."
      },
      {
        stage: "Rapid Growth & Extension",
        productSlug: "panchagavya-amrit",
        action: "Provides comprehensive Vedic micronutrition and metabolic enzymes."
      },
      {
        stage: "Biotic Stress Shield",
        productSlug: "kavach-bio-fungicide",
        action: "Proactive fungal antagonist drenching preserves rhizomes and underground storage organs."
      }
    ],
    highlightQuote: "“From Deccan plateaus to coastal plains, Vijetha's organic formulas adapt seamlessly to specialized commercial crops.”"
  }
];
