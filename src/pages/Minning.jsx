import React from "react";
import "./minning.css";
import Slider from 'react-slick';
import group from '../assets/images/Group 145.png'
// import group2 from '../assets/images/Group 146.png'
import { FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import logo from '../assets/images/logo (2).png'

import background from '../assets/images/minning.png'
import vector from '../assets/images/Vector 47.png'

import open1 from '../assets/images/open1.png'
import open2 from '../assets/images/open2.png'
import open3 from '../assets/images/open3.png'
import open4 from '../assets/images/open4.png'
import open5 from '../assets/images/open5.png'
import open6 from '../assets/images/open6.png'
import open7 from '../assets/images/open7.png'
import open8 from '../assets/images/open8.png'
import open9 from '../assets/images/open9.png'
import open10 from '../assets/images/open10.png'
import open11 from '../assets/images/open11.png'
import optimization1 from '../assets/images/optimization1.png'
import optimization2 from '../assets/images/optimization2.png'
import optimization3 from '../assets/images/optimization3.png'
import optimization4 from '../assets/images/optimization4.png'
import optimization5 from '../assets/images/optimization5.png'
import optimization6 from '../assets/images/optimization6.png'
import optimization7 from '../assets/images/optimization7.png'

import mine1 from '../assets/images/mine1.png'
import mine2 from '../assets/images/mine2.png'
import mine3 from '../assets/images/mine3.png'
import mine4 from '../assets/images/mine4.png'
import mine5 from '../assets/images/mine5.png'
import mine6 from '../assets/images/mine6.png'
import mine7 from '../assets/images/mine7.png'
import mine8 from '../assets/images/mine8.png'
import mine9 from '../assets/images/mine9.png'
import mine10 from '../assets/images/mine10.png'
import mine11 from '../assets/images/mine11.png'
import mine12 from '../assets/images/mine12.png'
import mine13 from '../assets/images/mine13.png'
import mine14 from '../assets/images/mine14.png'

import method1 from '../assets/images/method1.png'
import method2 from '../assets/images/method2.png'
import method3 from '../assets/images/method3.png'

import project1 from '../assets/images/project1.png'
import project2 from '../assets/images/project2.png'
import project3 from '../assets/images/project3.png'
import project4 from '../assets/images/project4.png'
import project5 from '../assets/images/project5.png'
import project6 from '../assets/images/project6.png'

import modal1 from '../assets/images/modal1.png'
import modal2 from '../assets/images/modal2.png'
import modal3 from '../assets/images/modal3.png'
import modal4 from '../assets/images/modal4.png'
import modal5 from '../assets/images/modal5.png'
import modal6 from '../assets/images/modal6.png'
import modal7 from '../assets/images/modal7.png'
import modal8 from '../assets/images/modal8.png'
import modal9 from '../assets/images/modal9.png'

import minning1 from '../assets/images/minnings1.png'
import minning2 from '../assets/images/minnings2.png'
import minning3 from '../assets/images/minnings3.png'
import minning4 from '../assets/images/minnings4.png'
import minning5 from '../assets/images/minnings5.png'
import minning6 from '../assets/images/minnings6.png'
import minning7 from '../assets/images/minnings7.png'
import minning8 from '../assets/images/minnings8.png'
import minning9 from '../assets/images/minnings9.png'

export default function Main() {

  const expertiseData = [
    'Strategic Mining Planning',
    'Mining Methods Optimization',
    'Quantitative and Qualitative Risk Analysis',
    'Specialized report: \n• Jorc \n• S-K1300 \n• NI 43-101',
    'Project Evaluation (Support in Geology - Geometallurgy and Mining)',
    'Mineral Resource and Reserve Estimation',
    'Software support and implementation',
    'Conceptual, Prefeasibility and Feasibility Studies, Due Diligence and Audits',
    'Mining GIS Modeling and Geomatics',
  ];


    const sliderSettings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
    };
  
    const cards = [
      {
        imageUrl: open1,
        title: 'Strategic planning and growth',
        description: 'Strategic planning and growth path to capture economic value.',
      },
      {
        imageUrl: open2,
        title: 'Open pit mine phases designs',
        description: 'Open pit mine phases designs at different levels of accuracy.',
      },
      {
        imageUrl: open3,
        title: 'Haulage and access systems',
        description: 'Design and comparison of haulage and access systems in subway mines.',
      },
      {
        imageUrl: open4,
        title: 'Mining sequence planning',
        description: 'Mining sequence and long and short-term production planning.',
      },
      {
        imageUrl: open5,
        title: 'Estimate of mining equipment fleet',
        description: 'Estimate of mining equipment fleet, CAPEX and OPEX.',
      },
      {
        imageUrl: open6,
        title: 'Mineral Reserves estimation',
        description: 'Estimation and certification of Mineral Reserves (GPI).',
      },
      {
        imageUrl: open7,
        title: 'Business planning support',
        description: 'Business planning and management support systems.',
      },
      {
        imageUrl: open8,
        title: 'Graphic tool for planning',
        description: 'Creation of graphic tool for integrated planning and decision making.',
      },
      {
        imageUrl: open9,
        title: 'Mina Planning Parameters',
        description: 'Analysis of inputs and Mina Planning Parameters.',
      },
      {
        imageUrl: open10,
        title: 'CAD and 3D systems',
        description: 'CAD and 3D systems for support analysis and mining planning.',
      },
      {
        imageUrl: open11,
        title: 'Data processing',
        description: 'Data processing: "Data Exploratory Technique".',
      },
    ];

    const cardss = [
      {
        imageUrl: optimization1,
        title: 'Integrated Mine - Plant and Mine Dump Capacity Optimization',
        description: 'Mining sequence and strategic filling of dump(s).',
      },
      {
        imageUrl: optimization2,
        title: 'Congestion and Operational Risk Analysis',
        description: 'Traffic Optimization at Ramps and Accesses.',
      },
      {
        imageUrl: optimization3,
        title: 'Diagnosis of the Current Mining Optimization and Operational System',
        description: 'Evaluation of existing processes to enhance efficiency.',
      },
      {
        imageUrl: optimization4,
        title: 'Generation and Execution of Ideas to Improve the Current Process',
        description: 'Innovative strategies for process improvement.',
      },
      {
        imageUrl: optimization5,
        title: 'Consulting and Modeling for Mining Simulation',
        description: 'Loading System, Haulers, Maintenance of Roads / Auxiliary Equipment.',
      },
      {
        imageUrl: optimization6,
        title: 'Strategic Mining Plans and Cut-Off Grade Optimization',
        description: 'Optimization for the Quest for Mining Asset Value.',
      },
      {
        imageUrl: optimization7,
        title: 'Material Haulage Systems',
        description: 'Automation studies (PLC), optimizing haulage belts, and slope stability assistance.',
      },
    ];
  
    const solution = [
      {
        imageUrl: mine1,
        title: 'Selection of Mining Method',
        description: 'Choosing mining method based on orebody and economic viability.',
      },
      {
        imageUrl: mine2,
        title: 'Knowledge and Benchmarking',
        description: 'Strategic room and pillar mining for resource optimization.',
      },
      {
        imageUrl: mine3,
        title: 'Analysis and Optimization',
        description: 'Optimizing mining operations for safety and efficiency.',
      },
      {
        imageUrl: mine4,
        title: 'Underground Mining Plan',
        description: 'Developing mining plan with safety measures and resources.',
      },
      {
        imageUrl: mine5,
        title: 'Material Handling',
        description: 'Efficient transportation of materials within the mine.',
      },
      {
        imageUrl: mine6,
        title: 'Auxiliary Operations',
        description: 'Support operations for underground mining.',
      },
      {
        imageUrl: mine7,
        title: 'Estimation of Mineral Resources',
        description: 'Resource estimation for planning and execution.',
      },
      {
        imageUrl: mine8,
        title: 'Underground Mining Plan',
        description: 'Detailed planning of underground mining processes.',
      },
      {
        imageUrl: mine9,
        title: 'Planning Parameters',
        description: 'Key parameters for effective underground mining.',
      },
      {
        imageUrl: mine10,
        title: 'Methods of Underground Mining',
        description: 'Choosing suitable mining methods for the underground setup.',
      },
      {
        imageUrl: mine11,
        title: 'Cut-Off Grade - Dilution',
        description: 'Setting grade thresholds for economic mining.',
      },
      {
        imageUrl: mine12,
        title: 'Mining Recovery',
        description: 'Maximizing recovery rates from mining operations.',
      },
      {
        imageUrl: mine13,
        title: 'Production Programming and Execution',
        description: 'Programming and execution of mining tasks.',
      },
      {
        imageUrl: mine14,
        title: 'Design and Comparison',
        description: 'Comparing various mining methods for efficiency.',
      },
    ];

    const minning = [
      {
        title: "Sub Level Stoping",
        description: [
          "Design Criteria",
          "Selection of Stope",
          "Ore Extraction",
          "Backfill",
          "Drill and Blast Design",
          "Production Capacity",
          "Ore Handling Design",
          "Engineering Design"
        ],
        imageUrl: method1
      },
      {
        title: "Sub Level Caving",
        description: [
          "Design Criteria",
          "Selection of Blocked Orebody",
          "Development & Drilling",
          "Drill and Blast Design",
          "Loading and Haulage",
          "Production Capacity",
          "Ore Handling Design",
          "Engineering Design"
        ],
        imageUrl: method2
      },
      {
        title: "Block Caving",
        description: [
          "Design Criteria",
          "Selection of Blocked Orebody",
          "Column Caving Layout",
          "Gravity Flow of Ore",
          "Draw Point Spacing",
          "Production Capacity",
          "Material Handling Design",
          "Engineering Design"
        ],
        imageUrl: method3
      }
    ];
    const proto = [
      {
        imageUrl: project1,
        title: 'Project Evaluation: PEA - Conceptual, Pre-Feasibility and Feasibility'
      },
      {
        imageUrl: project2,
        title: 'Characterization of the ore body from a value standpoint'
      },
      {
        imageUrl: project3,
        title: 'Estimation of mineral resources and reserves'
      },
      {
        imageUrl: project4,
        title: 'Technical reports - Open pit and underground mining QPs'
      },
      {
        imageUrl: project5,
        title: 'Technical management and research consulting'
      },
      {
        imageUrl: project6,
        title: 'Engineering and resource management services'
      }
    ];

    const geologicalCards = [
      {
        imageUrl: modal1,
        title: 'Integration of topographic information to the national network.',
      },
      {
        imageUrl: modal2,
        title: 'Information unification and advanced database management.',
      },
      {
        imageUrl: modal3,
        title: 'Review of QA/QC procedures, Gathering of Findings and Opportunities.',
      },
      {
        imageUrl: modal4,
        title: 'Exploratory Analysis of Uni and Multivariable Information. Data Science for Big Data Jobs.',
      },
      {
        imageUrl: modal5,
        title: 'Structural geological modeling and different types of domains. Geo Metallurgical models focused on recovery calculations: R. Mass - Modifying factors.',
      },
      {
        imageUrl: modal6,
        title: 'Calculation of the Cut Off and/or NSR. Machine learning analysis for geology. Geo-metallurgy and geostatistical considerations.',
      },
      {
        imageUrl: modal7,
        title: 'Development of Jorc-type documents: NI-43101, SKR500 among others. Preparation and development of chapters in this area for Project level or LOM.',
      },
      {
        imageUrl: modal8,
        title: 'Estimation of Resources and Reserves using Geostatistical techniques such as others such as KOR.',
      },
      {
        imageUrl: modal9,
        title: 'Declaration of Resources and Reserves by Audits and Expert Reviews focused on the Review of Resources and Reserves by Specialty GPs.',
      },
    ];
    
    const sections = [
      {
        title: 'Technical Studies',
        points: [
          'Geology and exploration',
          'Mineral Resources',
          'Geometallurgy',
          'Technical Report NI 43-101 / JORC',
          'Mining Geology',
        ],
        description:
          'Studies with an integral vision to identify findings and opportunities in early stages, according to the reality of each Project or Mine.',
      },
      {
        title: 'Reviews and Audit',
        points: ['High Level Review', 'Audits', 'Due Diligence'],
        description:
          'For reasons of certainty requirements and rigorous controls by investors, the procedures for estimating, classifying, and declaring Mining Resources are increasingly demanding. Therefore, having reviews at a high level or audits on these is crucial to ensure the results currently being carried out reflect this reality.',
      },
      {
        title: 'Academic Support and Workshops',
        points: [
          'QA - QC',
          'Applied Geometallurgy',
          'Geostatistics',
          'Fundamentals for Mineral Resources',
        ],
        description:
          'Workshops aimed at companies or universities in order to contribute to the reduction of the gap between reality and the expected project level. With a multidisciplinary team focused on mining and consulting companies.',
      },
    ];
  
  const lastcards = [
    {
      imageUrl: minning1,
      title: 'Integration of topographic information into the national network',
      description: 'Integration of topographic information into the national network.'
    },
    {
      imageUrl: minning2,
      title: 'Unification of graphic information in a database',
      description: 'Unification of graphic information in a database.'
    },
    {
      imageUrl: minning3,
      title: 'Graphic systems for property security evaluation',
      description: 'Graphic systems for property security evaluation.'
    },
    {
      imageUrl: minning4,
      title: 'Graphic systems for emergency response',
      description: 'Graphic systems for emergency response.'
    },
    {
      imageUrl: minning5,
      title: 'Characterization of surface land integrating parameters',
      description: 'Characterization of surface land integrating geological, hydrogeological, and other parameters.'
    },
    {
      imageUrl: minning6,
      title: 'Updating in systems and use of coordinates and datums',
      description: 'Updating in systems and use of coordinates and datums (Training included).'
    },
    {
      imageUrl: minning7,
      title: 'Web plans',
      description: 'Web plans for infrastructure management.'
    },
    {
      imageUrl: minning8,
      title: 'Application of satellite images',
      description: 'Application of satellite images for geological analysis.'
    },
    {
      imageUrl: minning9,
      title: 'Upgrades in new technologies for data acquisition',
      description: 'Upgrades in new technologies for data acquisition and use.'
    }
  ];
  


  return (
   <>
 <main className="relative bg-cover bg-center "  style={{ backgroundImage: `url(${background})` ,    opacity: '0.9' , height:'125vh'}}>
    <img className='electro-image' style={{position:'absolute', right:'0'}} src={group} alt="" />
    <img className='electro-image-1' style={{position:'absolute', left:'0', bottom:'0'}} src={group} alt="" />
      <div  className="absolute inset-0 bg-black opacity-50"></div>
      <div style={{position :'absolute', bottom:'40px'}} className="relative electro-heading z-10 text-white p-4 md:p-8 lg:p-8 text-left">
        <h1 className="text-2xl md:text-4xl font-bold">Mining</h1>
        <p className="mt-4 italic text-lg md:text-6xl align-left">
        Driving growth through innovation, efficiency, <br /> and responsible mining practices.
        </p>
       
      </div>
    </main>
    <div className="minning-grid-container">
      {expertiseData.map((item, index) => (
        <div key={index} className="grid-item">
          <p>{item}</p>
        </div>
      ))}
    </div>
    <div className="open-pit-mining-planning-container p-8">
      <h2 className="text-2xl font-bold mb-4">Open Pit Mining Planning</h2>

      {/* Slider for Mobile */}
      <div className="md:hidden ">
        <Slider {...sliderSettings}>
          {cards.map((card, index) => (
            <div key={index} className="card bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={card.imageUrl} alt={card.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">{card.title}</h3>
                <p className="text-gray-600 text-sm">{card.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Grid for Desktop */}
      <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {cards.map((card, index) => (
          <div key={index} className="card bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={card.imageUrl} alt={card.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-1">{card.title}</h3>
              <p className="text-gray-600 text-sm">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="optimization-of-mining-system-container p-8">
      <h2 className="text-2xl font-bold mb-4">Optimization of Mining System</h2>

      {/* Slider for Mobile */}
      <div className="md:hidden ">
        <Slider {...sliderSettings}>
          {cardss.map((card, index) => (
            <div key={index} className="card bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={card.imageUrl} alt={card.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">{card.title}</h3>
                <p className="text-gray-600 text-sm">{card.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Grid for Desktop */}
      <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {cardss.map((card, index) => (
          <div key={index} className="card bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={card.imageUrl} alt={card.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-1">{card.title}</h3>
              <p className="text-gray-600 text-sm">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="underground-mine-planning-container p-8">
      <h2 className="text-2xl font-bold mb-4">Underground Mine Planning</h2>

      {/* Slider for Mobile */}
      <div className="md:hidden ">
        <Slider {...sliderSettings}>
          {solution.map((card, index) => (
            <div key={index} className="card bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={card.imageUrl} alt={card.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">{card.title}</h3>
                <p className="text-gray-600 text-sm">{card.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Grid for Desktop */}
      <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {solution.map((card, index) => (
          <div key={index} className="card bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={card.imageUrl} alt={card.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-1">{card.title}</h3>
              <p className="text-gray-600 text-sm">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="mine-design-wrapper overflow-hidden p-8">
      <h2 className="text-2xl font-bold mb-4">Underground Mine Design and Methods</h2>

      {/* Slider for Mobile */}
      <div className="md:hidden">
        <Slider {...sliderSettings}>
          {minning.map((card, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={card.imageUrl} alt={card.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">{card.title}</h3>
                <ul className="text-gray-600 text-sm list-disc ml-4">
                  {card.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Grid for Desktop */}
      <div className="hidden md:grid grid-cols-3 gap-4">
        {minning.map((card, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={card.imageUrl} alt={card.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-1">{card.title}</h3>
              <ul className="text-gray-600 text-sm list-disc ml-4">
                {card.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="flex flex-col items-center p-8">
      <h2 className="text-2xl font-bold mb-8">Quantitative Risk Analysis (QRA)</h2>

      {/* Flow chart container */}
      <div  className="flex first-row ">
        
        {/* Row 1 - First two cards */}
        <div className="relative flex flex-col items-center">
          <div className="bg-white card-circle shadow-lg rounded-lg p-4 text-center md:w-48 w-32">
            <p>Modeling of factors <br />affecting the mining plan</p>
          </div>
          {/* Arrow pointing to next card in the row */}
          <div className="absolute arrow-first top-1/2 right-[-120px] ">
            <div className="w-4 h-4 md:w-8 h-8 border-b-2 border-r-2 rotation border-black"></div>
          </div>
        </div>
        
        <div className="relative flex flex-col items-center">
          <div className="bg-white card-circle  shadow-lg rounded-lg p-4 text-center md:w-48 w-32 ">
            <p>Risk estimation and <br /> degree of reliability of <br /> the mining plan</p>
          </div>
          {/* Arrow pointing down to next row */}
          <div className="absolute bottom-[-40px] left-1/2 ">
            <div className="w-4 h-4 md:w-8 h-8  border-b-2 border-r-2 rotation2 border-black"></div>
          </div>
        </div>
        </div>
<div  className="flex second-row mt-16 ">
        {/* Row 2 - Next two cards */}
        <div className="relative flex flex-col items-center">
          <div className="bg-white card-circle  shadow-lg rounded-lg p-4 text-center md:w-48 w-32 ">
            <p>Modeling of factors <br /> affecting the mining <br /> plan</p>
          </div>
          {/* Arrow pointing to next card in the row */}
          <div  className=" arrow-third right-[-20px] ">
            <div className="w-4 h-4 md:w-8 h-8  border-b-2 border-r-2 rotate border-black"></div>
          </div>
        </div>

        <div className="relative flex flex-col items-center">
          <div className="bg-white card-circle  shadow-lg rounded-lg p-4 text-center md:w-48 w-32 ">
            <p>Risk estimation and <br /> degree of reliability of <br /> the mining plan</p>
          </div>
          {/* Arrow pointing down to the final row */}
          <div style={{position:'absolute', left:'6%'}} className="absolute bottom-[-75px]  ">
            <div className="w-4 h-4 md:w-8 h-8  border-b-2 border-r-2 rotate1 border-black"></div>
          </div>
        </div>
        </div>

      {/* Row 3 - Single card centered */}
      <div  className="relative flex flex-col items-center mt-8">
        <div  className="bg-white card-circle  third-row shadow-lg rounded-lg p-4 text-center md:w-48 w-32">
          <p>Construction of the mathematical model for quantitative risk analysis</p>
        </div>
      </div>
    </div>
    <div className="project-evaluation-wrapper overflow-hidden p-8">
      <h2 className="text-2xl font-bold mb-4">Project Evaluation</h2>

      {/* Slider for Mobile */}
      <div className="md:hidden ">
        <Slider {...sliderSettings}>
          {proto.map((card, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={card.imageUrl} alt={card.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">{card.title}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Grid for Desktop */}
      <div className="hidden md:grid grid-cols-3 gap-8 mt-6">
        {proto.map((card, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={card.imageUrl} alt={card.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-1">{card.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="geological-models-wrapper p-8">
      <h2 className="text-2xl font-bold mb-4">Geological Models - Estimation of Mineral Resources & Reserves</h2>

      {/* Slider for Mobile */}
      <div className="md:hidden">
        <Slider {...sliderSettings}>
          {geologicalCards.map((card, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={card.imageUrl} alt={card.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <p className="text-gray-600 text-sm">{card.title}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Grid for Desktop */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {geologicalCards.map((card, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={card.imageUrl} alt={card.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <p className="text-gray-600 text-sm">{card.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
<div className="geology-wrapper p-6 space-y-8">
      <h2 className="text-2xl font-bold mb-4">Geology & Geometallurgy</h2>

      {sections.map((section, index) => (
        <div key={index} className="flex flex-cols md:flex-row items-center md:items-center space-y-4 md:space-y-0 md:space-x-6 border-b pb-4">
          <div className="flex-1">
            <h3 className="text-sm md:text-lg font-semibold mb-2">{section.title}</h3>
            <ul  className="list-disc list-inside space-y-1  md:text-sm text-gray-600">
              {section.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
          <div className="flex-none">
            <span className="arrow">➔</span>
          </div>
          <div className="flex-1 bg-gray-100 p-4 rounded-md shadow text-sm text-gray-600">
            {section.description}
          </div>
        </div>
      ))}
    </div>
<div className="container p-16">
      <h1 className="main-title">Geotechnics & Geomechanics Area</h1>

      <div className="section-title">Design of open pit slopes. Levels of conceptual, prefeasibility, operations, and closure studies</div>
      <ul className="list">
        <li>Geotechnical research and laboratory testing program.</li>
        <li>Geotechnical modeling (geological, structural, rock mass and hydrogeological model).</li>
        <li>Structural and resistance domain. Structural analysis and kinematic analysis.</li>
        <li>Analysis of rock massif: method of equilibrium limits.</li>
        <li>Sensitivity analysis of interramp slopes and generation of geotechnical sectors.</li>
        <li>Slope monitoring program and geotechnical risk assessment.</li>
      </ul>

      <h2 className="sub-title">Geotechnical studies: preparation of stability analysis</h2>
      <p>Includes stability analysis in waste deposits, tailing dams, leach piles, foundations of process plants. Levels of conceptual, prefeasibility, feasibility, operations, and closure studies.</p>
      <ul className="list">
        <li>Program of geotechnical research and laboratory test.</li>
        <li>Physical stability analysis.</li>
        <li>Analysis of mining infrastructure foundations.</li>
        <li>Slope monitoring program.</li>
      </ul>

      <h2 className="sub-title">Underground geomechanics</h2>
      <ul className="list">
        <li>Geotechnical research and laboratory testing program.</li>
        <li>Structural interpretation and analysis.</li>
        <li>Geotechnical modeling (geological, structural, rock mass, and hydrogeological model).</li>
        <li>Geomechanical zoning.</li>
        <li>Underground stability analysis.</li>
      </ul>
    </div>
<div className="geological-models-wrapper p-8">
      <h2 className="text-2xl font-bold mb-4">Geological Models - Estimation of Mineral Resources & Reserves</h2>

      {/* Slider for Mobile */}
      <div className="md:hidden">
        <Slider {...sliderSettings}>
          {lastcards.map((card, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={card.imageUrl} alt={card.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <p className="text-gray-600 text-sm">{card.title}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Grid for Desktop */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {lastcards.map((card, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={card.imageUrl} alt={card.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <p className="text-gray-600 text-sm">{card.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
<div className="card-layout">
      {/* First row: Card on the left */}
      <div className="row left-align">
        <div className="card">Provision of software and support for the acquisition of licences</div>
      </div>
      <img style={{position:'relative', left:'35px',width:'150px'}} src={vector} alt="" />

      {/* Second row: Card in the center */}
      <div className="row center-align">
        <div className="card"> On-line consulting and support of the applications under concession</div>
       
      </div>
      <img style={{position:'relative', left:'50%',width:'150px'}} src={vector} alt="" />
      {/* Third row: Card on the right */}
      <div className="row right-align">
        <div className="card">Contribution to new developments and applications in mining</div>
        
      </div>
    </div>
    <div className="banner">
      <div className="content">
        <p className="text">
          DARAT is a saudi-based corporation dedicated to the Saudi 2030 vision, offering various integrated solutions that encompass top-tier services and high end products.
        </p>
        <div className="logo-section">
          <h1 className="logo">
            <img style={{width:'50%'}} src={logo} alt="" />
          </h1>
          <div className="flex social-media space-x-4">
        <a href="#instagram" className="text-white text-xl"><FaInstagram /></a>
        <a href="#instagram" className="text-white text-xl"><FaTiktok /></a>
        <a href="#linkedin" className="text-white text-xl"><FaLinkedinIn /></a>
      </div>
        </div>
      </div>
    </div>
   </>
  );
}
