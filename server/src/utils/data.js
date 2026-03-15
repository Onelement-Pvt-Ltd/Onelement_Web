export const technologies = [
  {
    title: "Carbon Capture",
    slug: "carbon-capture",
    banner: {
      image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1920&auto=format&fit=crop",
      subtitle: "Capturing CO2 for a Sustainable Future"
    },
    description: {
      highlightTitle: "Carbon Capture",
      paragraphs: [
        "Carbon Capture technology reduces carbon emissions from industries.",
        "It captures CO2 before it reaches the atmosphere.",
        "It supports global net-zero goals."
      ]
    },
    points: [
      {
        title: "Reduced Industrial Emissions",
        content: "Captures up to 90% of emissions."
      },
      {
        title: "Cost-Effective Utilization",
        content: "CO2 can be reused in fuel and chemical production."
      },
      {
        title: "Supports Climate Goals",
        content: "Helps industries achieve sustainability targets."
      }
    ]
  },
  {
    title: "PEM Fuel Cell",
    slug: "pem-fuel-cell",
    banner: {
      image: "https://images.unsplash.com/photo-1581091870627-3f6c68a8c1f1?q=80&w=1920&auto=format&fit=crop",
      subtitle: "Efficient Hydrogen Energy"
    },
    description: {
      highlightTitle: "PEM Fuel Cell",
      paragraphs: [
        "PEM fuel cells generate electricity using hydrogen.",
        "They operate at low temperatures.",
        "Used in vehicles and backup power systems."
      ]
    },
    points: [
      {
        title: "Zero Emissions",
        content: "Produces only water as byproduct."
      },
      {
        title: "High Efficiency",
        content: "Better conversion efficiency than combustion engines."
      },
      {
        title: "Scalable",
        content: "Used in transport and stationary systems."
      }
    ]
  },
  {
    title: "Green Hydrogen (GH2)",
    slug: "gh2",
    banner: {
      image: "https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?q=80&w=1920&auto=format&fit=crop",
      subtitle: "Hydrogen from Renewable Sources"
    },
    description: {
      highlightTitle: "Green Hydrogen",
      paragraphs: [
        "Produced via renewable-powered electrolysis.",
        "Eliminates carbon emissions in hydrogen production.",
        "Key for industrial decarbonization."
      ]
    },
    points: [
      {
        title: "Renewable Production",
        content: "Generated from solar and wind energy."
      },
      {
        title: "Industrial Use",
        content: "Used in steel and fertilizer industries."
      },
      {
        title: "Energy Storage",
        content: "Stores excess renewable energy."
      }
    ]
  },
  {
    title: "E-Fuel",
    slug: "efuel",
    banner: {
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1920&auto=format&fit=crop",
      subtitle: "Synthetic Carbon Neutral Fuel"
    },
    description: {
      highlightTitle: "E-Fuel",
      paragraphs: [
        "Synthetic fuel made from green hydrogen and CO2.",
        "Compatible with existing engines.",
        "Used in aviation and shipping."
      ]
    },
    points: [
      {
        title: "Drop-in Fuel",
        content: "Works in current fuel infrastructure."
      },
      {
        title: "Carbon Neutral",
        content: "Creates closed carbon cycle."
      },
      {
        title: "Hard-to-Electrify Sectors",
        content: "Best for aviation and marine."
      }
    ]
  }
];


export const blogs = [
  {
    title: "How AI Is Transforming Renewable Energy Forecasting",
    slug: "ai-transforming-renewable-energy-forecasting",
    excerpt:
      "Artificial intelligence is reshaping how renewable energy systems predict demand, optimize generation, and reduce waste.",
    coverImage:
      "https://images.unsplash.com/photo-1581090700227-4c4f50e6c70c",
    author: {
      name: "Rohan Iyer",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
    },
    category: "Artificial Intelligence",
    tags: ["AI", "Forecasting", "Renewables"],
    publishedAt: new Date("2025-01-14"),
    content: [
      {
        heading: "The Forecasting Challenge",
        body:
          "Renewable energy sources such as wind and solar are inherently variable. Accurately predicting output has historically been a complex task, often relying on traditional weather models that lacked real-time adaptability."
      },
      {
        heading: "AI-Powered Prediction Models",
        body:
          "Machine learning algorithms now process massive datasets including satellite imagery, historical climate patterns, and real-time sensor inputs to predict energy output with far greater precision."
      },
      {
        heading: "Impact on Grid Stability",
        body:
          "Improved forecasting reduces grid imbalance, minimizes energy waste, and allows utilities to plan more effectively. This ultimately lowers costs and enhances system resilience."
      }
    ]
  },

  {
    title: "Battery Storage Breakthroughs Shaping 2025",
    slug: "battery-storage-breakthroughs-2025",
    excerpt:
      "Next-generation battery chemistry is enabling longer storage durations and faster charging cycles.",
    coverImage:
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc",
    author: {
      name: "Ananya Rao",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
    },
    category: "Energy Storage",
    tags: ["Battery", "Storage", "Innovation"],
    publishedAt: new Date("2025-02-03"),
    content: [
      {
        heading: "Beyond Lithium-Ion",
        body:
          "Solid-state batteries and sodium-ion alternatives are beginning to challenge lithium-ion dominance. These technologies promise improved safety and longer lifecycle performance."
      },
      {
        heading: "Grid-Scale Storage",
        body:
          "Large-scale battery installations are becoming critical to renewable integration, storing excess solar power during the day and dispatching it during peak demand."
      },
      {
        heading: "Cost Decline Trends",
        body:
          "Rapid innovation and economies of scale are driving battery costs down, making storage solutions increasingly accessible across industries."
      }
    ]
  }, {
    title: "The Rise of Agrivoltaics: Farming Beneath Solar Panels",
    slug: "rise-of-agrivoltaics-farming-beneath-solar-panels",
    excerpt:
      "Agrivoltaics is redefining land use by combining agricultural productivity with solar energy generation.",
    coverImage:
      "https://images.unsplash.com/photo-1509395176047-4a66953fd231",
    author: {
      name: "Anirudh Reddy",
      avatar:
        "https://images.unsplash.com/photo-1502767089025-6572583495b0"
    },
    category: "Solar",
    tags: ["Agrivoltaics", "Solar Innovation", "Land Use"],
    publishedAt: new Date("2024-08-14"),
    content: [
      {
        heading: "Dual Land Utilization",
        body:
          "Agrivoltaics allows farmers to cultivate crops beneath elevated solar panels. This approach maximizes land efficiency while providing shade that can reduce water evaporation and crop stress."
      },
      {
        heading: "Improved Crop Yield",
        body:
          "Certain crops, particularly leafy greens, benefit from partial shading. Studies have shown improved yields and reduced irrigation needs under agrivoltaic systems."
      },
      {
        heading: "Economic Diversification",
        body:
          "Farmers gain a second revenue stream through solar energy production, increasing financial resilience amid climate uncertainties."
      }
    ]
  },

  {
    title: "Microgrids: Powering Remote Communities Sustainably",
    slug: "microgrids-powering-remote-communities",
    excerpt:
      "Microgrids are delivering decentralized, resilient power systems to off-grid and rural regions worldwide.",
    coverImage:
      "https://images.unsplash.com/photo-1509395062183-67c5ad6faff9",
    author: {
      name: "Sahana Pillai",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
    },
    category: "Grid Technology",
    tags: ["Microgrid", "Energy Access", "Decentralization"],
    publishedAt: new Date("2025-02-09"),
    content: [
      {
        heading: "Energy Independence",
        body:
          "Microgrids integrate renewable generation and storage locally, reducing dependence on centralized grids and improving reliability."
      },
      {
        heading: "Disaster Resilience",
        body:
          "In disaster-prone regions, microgrids ensure essential services remain operational during outages."
      },
      {
        heading: "Scalable Deployment",
        body:
          "Modular systems allow communities to expand capacity as demand grows."
      }
    ]
  },

  {
    title: "Perovskite Solar Cells: A New Era of Efficiency",
    slug: "perovskite-solar-cells-new-era-efficiency",
    excerpt:
      "Perovskite materials are pushing solar conversion efficiency to unprecedented levels.",
    coverImage:
      "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1",
    author: {
      name: "Devika Sharma",
      avatar:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1"
    },
    category: "Solar",
    tags: ["Perovskite", "Solar Efficiency"],
    publishedAt: new Date("2025-03-22"),
    content: [
      {
        heading: "Efficiency Breakthrough",
        body:
          "Perovskite-based solar cells have achieved lab efficiencies above 25%, rivaling traditional silicon panels."
      },
      {
        heading: "Manufacturing Simplicity",
        body:
          "They can be produced at lower temperatures and potentially lower costs than silicon cells."
      },
      {
        heading: "Durability Challenges",
        body:
          "Long-term stability remains a hurdle, but rapid R&D progress suggests commercial viability is near."
      }
    ]
  },

  {
    title: "AI-Powered Wind Turbine Optimization",
    slug: "ai-powered-wind-turbine-optimization",
    excerpt:
      "Machine learning models are enhancing turbine efficiency and predictive maintenance.",
    coverImage:
      "https://images.unsplash.com/photo-1509395176047-4a66953fd231",
    author: {
      name: "Ritika Jain",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2"
    },
    category: "Wind",
    tags: ["AI", "Wind Energy"],
    publishedAt: new Date("2024-12-11"),
    content: [
      {
        heading: "Predictive Maintenance",
        body:
          "AI models analyze vibration and performance data to predict component failures before they occur."
      },
      {
        heading: "Dynamic Blade Adjustment",
        body:
          "Advanced algorithms adjust blade angles in real-time to maximize output under varying wind conditions."
      },
      {
        heading: "Reduced Downtime",
        body:
          "Early fault detection significantly lowers maintenance costs and improves uptime."
      }
    ]
  },

  {
    title: "Circular Economy in Renewable Manufacturing",
    slug: "circular-economy-renewable-manufacturing",
    excerpt:
      "Sustainable material reuse is becoming critical in renewable technology production.",
    coverImage:
      "https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b",
    author: {
      name: "Arjun Kapoor",
      avatar:
        "https://images.unsplash.com/photo-1552058544-f2b08422138a"
    },
    category: "Sustainability",
    tags: ["Circular Economy", "Manufacturing"],
    publishedAt: new Date("2023-11-19"),
    content: [
      {
        heading: "Material Recovery",
        body:
          "Recycling lithium and rare earth metals from batteries and turbines reduces environmental impact."
      },
      {
        heading: "Lifecycle Analysis",
        body:
          "Manufacturers are integrating lifecycle assessments to minimize embedded emissions."
      },
      {
        heading: "Policy Incentives",
        body:
          "Governments are encouraging sustainable production through tax credits and environmental regulations."
      }
    ]
  },

  {
    title: "Green Data Centers and Renewable Integration",
    slug: "green-data-centers-renewable-integration",
    excerpt:
      "Data centers are shifting toward renewable energy and advanced cooling systems.",
    coverImage:
      "https://images.unsplash.com/photo-1581091870627-3a9c8b0e2a1d",
    author: {
      name: "Naveen Iyer",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
    },
    category: "Energy Storage",
    tags: ["Data Centers", "Cooling Systems"],
    publishedAt: new Date("2025-01-28"),
    content: [
      {
        heading: "Renewable Procurement",
        body:
          "Tech companies are committing to 100% renewable procurement for data center operations."
      },
      {
        heading: "Liquid Cooling",
        body:
          "Advanced cooling systems reduce electricity consumption compared to traditional air cooling."
      },
      {
        heading: "Grid Participation",
        body:
          "Data centers increasingly participate in demand response programs."
      }
    ]
  },

  {
    title: "Hydrogen Fuel Infrastructure Expansion in Asia",
    slug: "hydrogen-fuel-infrastructure-expansion-asia",
    excerpt:
      "Asia is rapidly investing in hydrogen fueling networks and production hubs.",
    coverImage:
      "https://images.unsplash.com/photo-1603732551658-5fabbafa84eb",
    author: {
      name: "Kavya Menon",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
    },
    category: "Hydrogen",
    tags: ["Hydrogen Infrastructure", "Asia"],
    publishedAt: new Date("2024-06-05"),
    content: [
      {
        heading: "Regional Investment",
        body:
          "Japan and South Korea are leading hydrogen adoption with public-private funding initiatives."
      },
      {
        heading: "Transport Sector",
        body:
          "Hydrogen buses and heavy-duty trucks are increasingly deployed in metropolitan areas."
      },
      {
        heading: "Export Potential",
        body:
          "Green hydrogen exports are becoming a strategic economic opportunity."
      }
    ]
  },

  {
    title: "Thermal Energy Storage: Beyond Batteries",
    slug: "thermal-energy-storage-beyond-batteries",
    excerpt:
      "Thermal storage systems offer cost-effective long-duration energy solutions.",
    coverImage:
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc",
    author: {
      name: "Rohit Malhotra",
      avatar:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
    },
    category: "Energy Storage",
    tags: ["Thermal Storage", "Long Duration"],
    publishedAt: new Date("2024-04-17"),
    content: [
      {
        heading: "Molten Salt Systems",
        body:
          "Molten salt storage allows solar plants to deliver electricity even after sunset."
      },
      {
        heading: "Industrial Heat Applications",
        body:
          "Thermal systems are suitable for heavy industry requiring sustained high temperatures."
      },
      {
        heading: "Cost Advantage",
        body:
          "Thermal storage often proves cheaper per kWh compared to lithium batteries for long durations."
      }
    ]
  },

  {
    title: "Urban Rooftop Solar: The Untapped Potential",
    slug: "urban-rooftop-solar-untapped-potential",
    excerpt:
      "Cities worldwide are underutilizing rooftop solar potential.",
    coverImage:
      "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1",
    author: {
      name: "Ishita Bose",
      avatar:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
    },
    category: "Solar",
    tags: ["Urban Solar", "Distributed Energy"],
    publishedAt: new Date("2023-09-03"),
    content: [
      {
        heading: "Space Optimization",
        body:
          "Commercial buildings offer vast unused rooftop space for photovoltaic systems."
      },
      {
        heading: "Policy Support",
        body:
          "Net-metering policies encourage urban adoption."
      },
      {
        heading: "Community Impact",
        body:
          "Rooftop solar reduces grid strain and enhances urban sustainability."
      }
    ]
  },

  {
    title: "Green Hydrogen’s Role in Heavy Industry",
    slug: "green-hydrogen-heavy-industry-role",
    excerpt:
      "Green hydrogen is emerging as a viable alternative to fossil fuels in hard-to-abate industrial sectors.",
    coverImage:
      "https://images.unsplash.com/photo-1603732551658-5fabbafa84eb",
    author: {
      name: "Vikram Desai",
      avatar:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
    },
    category: "Hydrogen",
    tags: ["Green Hydrogen", "Steel", "Decarbonization"],
    publishedAt: new Date("2024-11-18"),
    content: [
      {
        heading: "Industrial Emissions Challenge",
        body:
          "Steel and cement production account for a significant share of global emissions. Transitioning to green hydrogen offers a pathway toward cleaner industrial heat and chemical processes."
      },
      {
        heading: "Electrolysis at Scale",
        body:
          "As renewable electricity becomes cheaper, large-scale electrolyzers are being deployed to produce hydrogen sustainably."
      },
      {
        heading: "Policy and Investment",
        body:
          "Government incentives and private sector funding are accelerating green hydrogen infrastructure globally."
      }
    ]
  },

  {
    title: "Floating Solar Farms: The Next Frontier",
    slug: "floating-solar-farms-next-frontier",
    excerpt:
      "Floating photovoltaic systems are unlocking new surfaces for renewable generation.",
    coverImage:
      "https://images.unsplash.com/photo-1509395176047-4a66953fd231",
    author: {
      name: "Meera Shah",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
    },
    category: "Solar",
    tags: ["Solar", "Innovation", "Water Bodies"],
    publishedAt: new Date("2024-09-10"),
    content: [
      {
        heading: "Utilizing Water Surfaces",
        body:
          "Reservoirs and lakes provide ideal locations for floating solar systems, reducing land-use conflicts."
      },
      {
        heading: "Efficiency Advantages",
        body:
          "Water cooling effects improve panel efficiency, increasing output compared to land-based installations."
      },
      {
        heading: "Environmental Considerations",
        body:
          "Careful planning ensures minimal ecological disruption while delivering renewable capacity."
      }
    ]
  },

  {
    title: "Smart Grids and the Future of Energy Distribution",
    slug: "smart-grids-future-energy-distribution",
    excerpt:
      "Digital grid technologies are making energy systems more adaptive and resilient.",
    coverImage:
      "https://images.unsplash.com/photo-1509395062183-67c5ad6faff9",
    author: {
      name: "Karthik Menon",
      avatar:
        "https://images.unsplash.com/photo-1502767089025-6572583495b0"
    },
    category: "Grid Technology",
    tags: ["Smart Grid", "IoT", "Energy"],
    publishedAt: new Date("2024-07-21"),
    content: [
      {
        heading: "From Analog to Digital",
        body:
          "Smart grids integrate IoT sensors and automation to improve fault detection and response times."
      },
      {
        heading: "Consumer Empowerment",
        body:
          "Advanced metering infrastructure allows consumers to monitor usage patterns and optimize consumption."
      },
      {
        heading: "Resilience Benefits",
        body:
          "Digitally managed grids recover faster from outages and adapt dynamically to renewable fluctuations."
      }
    ]
  },

  {
    title: "Offshore Wind: Scaling Clean Power Generation",
    slug: "offshore-wind-scaling-clean-power",
    excerpt:
      "Offshore wind farms are expanding rapidly due to improved turbine design and falling costs.",
    coverImage:
      "https://images.unsplash.com/photo-1509395176047-4a66953fd231",
    author: {
      name: "Sanjay Kulkarni",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2"
    },
    category: "Wind",
    tags: ["Wind Energy", "Offshore", "Turbines"],
    publishedAt: new Date("2023-12-05"),
    content: [
      {
        heading: "Advances in Turbine Engineering",
        body:
          "Modern offshore turbines exceed 15 MW capacity, significantly boosting output per installation."
      },
      {
        heading: "Global Expansion",
        body:
          "Countries across Europe and Asia are accelerating offshore wind deployment."
      },
      {
        heading: "Long-Term Sustainability",
        body:
          "Offshore wind contributes to stable, large-scale renewable energy supply."
      }
    ]
  },

  {
    title: "Carbon Capture Innovations in 2025",
    slug: "carbon-capture-innovations-2025",
    excerpt:
      "New materials and modular systems are redefining carbon capture efficiency.",
    coverImage:
      "https://images.unsplash.com/photo-1581091870627-3a9c8b0e2a1d",
    author: {
      name: "Priya Nair",
      avatar:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1"
    },
    category: "Carbon Capture",
    tags: ["CCUS", "Net Zero"],
    publishedAt: new Date("2025-03-12"),
    content: [
      {
        heading: "Next-Gen Materials",
        body:
          "Advanced sorbents and membranes improve capture efficiency while reducing energy penalties."
      },
      {
        heading: "Modular Deployment",
        body:
          "Smaller, transportable units enable faster deployment across industrial sites."
      },
      {
        heading: "Utilization Pathways",
        body:
          "Captured CO₂ is increasingly converted into synthetic fuels and industrial feedstocks."
      }
    ]
  },

  {
    title: "EV Charging Infrastructure Expansion Trends",
    slug: "ev-charging-infrastructure-expansion-trends",
    excerpt:
      "Rapid EV adoption demands smarter and more widespread charging networks.",
    coverImage:
      "https://images.unsplash.com/photo-1549924231-f129b911e442",
    author: {
      name: "Nikhil Verma",
      avatar:
        "https://images.unsplash.com/photo-1552058544-f2b08422138a"
    },
    category: "Electric Mobility",
    tags: ["EV", "Infrastructure"],
    publishedAt: new Date("2024-05-09"),
    content: [
      {
        heading: "Urban Charging Solutions",
        body:
          "Smart city initiatives are integrating EV charging into parking systems and residential complexes."
      },
      {
        heading: "Fast-Charging Breakthroughs",
        body:
          "Ultra-fast chargers reduce charging time significantly, increasing adoption confidence."
      },
      {
        heading: "Grid Integration",
        body:
          "Vehicle-to-grid (V2G) systems allow EVs to act as distributed storage units."
      }
    ]
  },

  {
    title: "Bioenergy and Waste-to-Power Systems",
    slug: "bioenergy-waste-to-power-systems",
    excerpt:
      "Transforming organic waste into clean energy is gaining global traction.",
    coverImage:
      "https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b",
    author: {
      name: "Rahul Chatterjee",
      avatar:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
    },
    category: "Bioenergy",
    tags: ["Waste", "Circular Economy"],
    publishedAt: new Date("2023-10-17"),
    content: [
      {
        heading: "Waste as Resource",
        body:
          "Anaerobic digestion converts organic waste into biogas, reducing landfill dependency."
      },
      {
        heading: "Decentralized Energy",
        body:
          "Community-scale waste-to-power systems promote local energy resilience."
      },
      {
        heading: "Environmental Benefits",
        body:
          "Bioenergy reduces methane emissions and supports circular economy initiatives."
      }
    ]
  }
];