const IMAGE_CATALOG = [
  {
    "id": 1,
    "page": "index.html",
    "section": "capabilities-xray",
    "title": "Digital X-Ray Suite",
    "desc": "Agfa digital X-ray machine with experienced radiographer positioning patient for precise orthopedic examination."
  },
  {
    "id": 2,
    "page": "index.html",
    "section": "capabilities-usg",
    "title": "Ultrasound & Sonography Room",
    "desc": "Modern ultrasound examination suite equipped with multi-frequency transducer and ergonomic patient bed."
  },
  {
    "id": 3,
    "page": "index.html",
    "section": "capabilities-ecg",
    "title": "Resting ECG & Cardiac Testing",
    "desc": "Clinical 12-lead resting electrocardiogram recording with precision chest electrodes and instant rhythm capture."
  },
  {
    "id": 4,
    "page": "services/x-ray.html",
    "section": "hero",
    "title": "Radiologist Multi-Slice Diagnostic Reading",
    "desc": "Board-certified radiologist reviewing high-resolution multi-slice digital radiographs on diagnostic PACS workstation."
  },
  {
    "id": 5,
    "page": "home-2.html",
    "section": "facility-reception",
    "title": "Modern Reception & Registration",
    "desc": "Clean, serene reception desk with patient concierge and digital record check-in system."
  },
  {
    "id": 6,
    "page": "index.html",
    "section": "hero",
    "title": "Advanced Diagnostic Equipment Suite",
    "desc": "Full diagnostic ecosystem combining digital radiography, sonography ultrasound, 12-lead ECG, and multi-parameter monitoring."
  },
  {
    "id": 7,
    "page": "home-2.html",
    "section": "facility-waiting",
    "title": "Patient Waiting Lounge",
    "desc": "Spacious patient waiting area with comfortable seating, digital token display, and soothing medical atmosphere."
  },
  {
    "id": 8,
    "page": "about.html",
    "section": "hero",
    "title": "Radiology & Medical Imaging Team",
    "desc": "Experienced team of radiologists, sonographers, and radiologic technologists dedicated to patient diagnostic care."
  },
  {
    "id": 9,
    "page": "home-2.html",
    "section": "facility-xray",
    "title": "Pristine Digital Radiography Suite",
    "desc": "Ceiling-suspended digital X-ray collimator tube, motorized floating table, and high-efficiency vertical bucky."
  },
  {
    "id": 10,
    "page": "index.html",
    "section": "excellence",
    "title": "Radiographer Positioning Patient",
    "desc": "Professional radiologic technologist gently preparing patient under modern digital radiographic system."
  },
  {
    "id": 11,
    "page": "services.html",
    "section": "highlight-xray",
    "title": "Precision Digital Radiography",
    "desc": "Modern digital radiography suite offering ultra-low radiation dosage and high-contrast diagnostic output."
  },
  {
    "id": 12,
    "page": "home-2.html",
    "section": "choose-xray",
    "title": "Digital X-Ray Imaging",
    "desc": "Female radiographer preparing patient on Siemens Multix B examination table for high-resolution musculoskeletal scan."
  },
  {
    "id": 13,
    "page": "services/x-ray.html",
    "section": "tech",
    "title": "Ceiling Collimator Tube Adjustment",
    "desc": "Technologist fine-tuning motorized overhead X-ray tube for targeted anatomical field positioning."
  },
  {
    "id": 14,
    "page": "home-2.html",
    "section": "facility-fusion",
    "title": "Siemens Multix Fusion Max Suite",
    "desc": "Fully digital radiography suite featuring shielded operator console and real-time image preview."
  },
  {
    "id": 15,
    "page": "services.html",
    "section": "core-xray",
    "title": "Digital Radiography DR 600",
    "desc": "Agfa DR 600 high-throughput digital imaging unit designed for rapid chest, spine, and extremity radiography."
  },
  {
    "id": 16,
    "page": "home-2.html",
    "section": "facility-usg",
    "title": "Sonography Examination Room",
    "desc": "Hygienic ultrasound suite equipped with high-resolution color Doppler and adjustable examination couch."
  },
  {
    "id": 17,
    "page": "home-2.html",
    "section": "choose-usg",
    "title": "Ultrasound & Sonography",
    "desc": "Obstetric and abdominal ultrasound scanning with real-time fetal sonogram display and maternal comfort."
  },
  {
    "id": 18,
    "page": "about.html",
    "section": "gallery-usg",
    "title": "Dual-Workstation Ultrasound Suite",
    "desc": "Advanced ultrasound procedure room featuring dual articulating displays for patient and clinician viewing."
  },
  {
    "id": 19,
    "page": "home-2.html",
    "section": "prep-usg",
    "title": "Ultrasound Fasting Protocol",
    "desc": "Fasting protocol guidance for abdominal and gallbladder sonography to ensure optimal acoustic clarity."
  },
  {
    "id": 20,
    "page": "services.html",
    "section": "highlight-usg",
    "title": "Ambient Sonography Suite",
    "desc": "Calming mint-cyan cove lighting and climate-controlled environment tailored for relaxed patient examinations."
  },
  {
    "id": 21,
    "page": "products.html",
    "section": "card-abdomen",
    "title": "Comprehensive Abdominal Ultrasound",
    "desc": "High-frequency sonography examining the liver, gallbladder, kidneys, pancreas, and spleen."
  },
  {
    "id": 22,
    "page": "pricing.html",
    "section": "price-usg",
    "title": "Abdominal & Pelvic Sonography",
    "desc": "Complete sonographic screening with real-time organ assessment and digital image archiving."
  },
  {
    "id": 23,
    "page": "services/ecg.html",
    "section": "tech",
    "title": "Doctor Explaining ECG Strip",
    "desc": "Physician explaining 12-lead calibrated cardiac rhythm strip and diagnostic intervals to resting patient."
  },
  {
    "id": 24,
    "page": "home-2.html",
    "section": "choose-ecg",
    "title": "ECG Cardiac Testing",
    "desc": "Resting electrocardiogram procedure evaluating cardiac rhythm, electrical conduction, and heart rate."
  },
  {
    "id": 25,
    "page": "home-2.html",
    "section": "facility-ecg",
    "title": "Dedicated ECG Recording Suite",
    "desc": "Cardioline 12-channel digital electrocardiograph workstation producing calibrated clinical printouts."
  },
  {
    "id": 26,
    "page": "services.html",
    "section": "core-ecg",
    "title": "12-Lead Electrocardiography",
    "desc": "Digital electrocardiograph recording 12 simultaneous electrical vectors of the heart for arrhythmia detection."
  },
  {
    "id": 27,
    "page": "home-2.html",
    "section": "prep-ecg",
    "title": "ECG Skin & Lead Preparation",
    "desc": "Gentle skin preparation and suction electrode placement ensuring clean electrical signal capture."
  },
  {
    "id": 28,
    "page": "pricing.html",
    "section": "price-ecg",
    "title": "Standard 12-Lead Resting ECG",
    "desc": "Comprehensive cardiac electrical tracing with heart rate variability and instant computerized preview."
  },
  {
    "id": 29,
    "page": "products.html",
    "section": "hero",
    "title": "Spine & Chest Digital Workstation",
    "desc": "Radiologist analyzing high-definition digital chest and spine radiographs on calibrated dual displays."
  },
  {
    "id": 30,
    "page": "services/ecg.html",
    "section": "card-resting",
    "title": "Resting Electrocardiography",
    "desc": "Standard clinical electrocardiogram recording baseline rhythm for routine screening and pre-operative checks."
  },
  {
    "id": 31,
    "page": "pricing.html",
    "section": "hero",
    "title": "Diagnostic Control Room & Scanner",
    "desc": "Physician viewing cross-sectional imaging screens inside shielded diagnostic control center."
  },
  {
    "id": 32,
    "page": "index.html",
    "section": "capabilities-general",
    "title": "General Diagnostic Examinations",
    "desc": "Senior specialist at 4-monitor reading station evaluating musculoskeletal, thoracic, and pelvic scans."
  },
  {
    "id": 33,
    "page": "services/ecg.html",
    "section": "card-holter",
    "title": "Holter & Continuous Rhythm Monitoring",
    "desc": "Ambulatory cardiac monitoring detecting transient palpitations, arrhythmias, and conduction blocks."
  },
  {
    "id": 34,
    "page": "about.html",
    "section": "story",
    "title": "Interventional & Diagnostic Physicians",
    "desc": "Multidisciplinary team of diagnostic radiologists dedicated to accurate interpretations and patient safety."
  },
  {
    "id": 35,
    "page": "technology.html",
    "section": "tech-mri",
    "title": "GE SIGNA Pioneer High-Field MRI",
    "desc": "Advanced 3.0T magnetic resonance imaging system offering ultra-high spatial resolution and quiet scanning."
  },
  {
    "id": 36,
    "page": "technology.html",
    "section": "tech-ct",
    "title": "Multi-Slice CT/PET Scanner Suite",
    "desc": "High-speed volumetric computed tomography suite with 3D anatomical reconstruction capabilities."
  },
  {
    "id": 37,
    "page": "about.html",
    "section": "gallery-ct",
    "title": "GE Revolution CT Scanner Suite",
    "desc": "State-of-the-art CT suite featuring wood cabinetry, skylight ceiling, and dose-reduction technology."
  },
  {
    "id": 38,
    "page": "contact.html",
    "section": "hero",
    "title": "Executive Diagnostic Center Lounge",
    "desc": "Welcoming consultation lobby featuring contemporary architectural lighting and comfortable seating."
  },
  {
    "id": 39,
    "page": "pricing.html",
    "section": "price-chest",
    "title": "Digital Chest Radiography (PA View)",
    "desc": "Standard upright chest radiograph evaluating pulmonary parenchyma, cardiac silhouette, and rib cage."
  },
  {
    "id": 40,
    "page": "home-2.html",
    "section": "choose-screening",
    "title": "Clinical Health Screening",
    "desc": "Physician conducting pre-examination vital checkup with stethoscope, sphygmomanometer, and monitor."
  },
  {
    "id": 41,
    "page": "pricing.html",
    "section": "price-joint",
    "title": "Musculoskeletal Bone & Joint X-Ray",
    "desc": "High-contrast digital radiograph of limbs, hands, and joints for fracture and arthritis assessment."
  },
  {
    "id": 42,
    "page": "services/x-ray.html",
    "section": "exam-chest",
    "title": "Standing PA Chest Radiography",
    "desc": "Upright posteroanterior chest examination with laser alignment and deep inspiratory breath-hold."
  },
  {
    "id": 43,
    "page": "home-2.html",
    "section": "prep-xray",
    "title": "X-Ray Safety & Shielding Protocol",
    "desc": "Lead apron gonad shielding and proper limb positioning ensuring ALARA safety standards."
  },
  {
    "id": 44,
    "page": "services/x-ray.html",
    "section": "exam-cbct",
    "title": "Maxillofacial & Dental Panoramic CBCT",
    "desc": "Rotational digital orthopantomogram providing panoramic dental arch and mandibular imaging."
  },
  {
    "id": 45,
    "page": "services/x-ray.html",
    "section": "exam-spine",
    "title": "Laser-Guided Spinal Radiography",
    "desc": "Precision laser centering for cervical, thoracic, and lumbosacral vertebral column evaluation."
  },
  {
    "id": 46,
    "page": "services.html",
    "section": "core-chest",
    "title": "Chest Radiography & Pulmonary Imaging",
    "desc": "Digital chest radiography capturing clear lung vasculature, diaphragm margins, and heart borders."
  },
  {
    "id": 47,
    "page": "about.html",
    "section": "gallery-reception",
    "title": "Architectural Reception Design",
    "desc": "Curved white reception counter with fluted timber ceiling creating a warm, stress-free atmosphere."
  },
  {
    "id": 48,
    "page": "home-2.html",
    "section": "prep-checkin",
    "title": "Appointment Check-In & Paperwork",
    "desc": "Fast-track reception check-in desk for submitting physician referral slips and ID verification."
  },
  {
    "id": 49,
    "page": "products.html",
    "section": "card-screening",
    "title": "Executive Health Screening Package",
    "desc": "Comprehensive package combining digital chest radiography, abdominal ultrasound, and 12-lead ECG."
  },
  {
    "id": 50,
    "page": "home-2.html",
    "section": "hero",
    "title": "Radiologist Explaining Scan Findings",
    "desc": "Indian female radiologist reviewing high-definition chest radiographs and brain MRI scans with patient."
  },
  {
    "id": 51,
    "page": "pricing.html",
    "section": "price-package",
    "title": "Comprehensive Diagnostic Package",
    "desc": "Multi-modality health screening combining diagnostic imaging, cardiac tracing, and specialist review."
  },
  {
    "id": 52,
    "page": "pricing.html",
    "section": "price-doppler",
    "title": "Color Doppler & Echocardiography",
    "desc": "Cardiovascular hemodynamic ultrasound measuring blood flow velocity, chamber dimensions, and valves."
  },
  {
    "id": 53,
    "page": "services/ultrasound.html",
    "section": "modality-abdomen",
    "title": "Abdominal & Hepato-Biliary Sonography",
    "desc": "High-frequency sonography examining hepatic parenchyma, gallbladder calculi, renal cortex, and spleen."
  },
  {
    "id": 54,
    "page": "services/ultrasound.html",
    "section": "modality-pelvic",
    "title": "Pelvic & Gynecological Sonography",
    "desc": "Transabdominal and endovaginal sonography visualizing pelvic anatomy, uterine structure, and ovaries."
  },
  {
    "id": 55,
    "page": "products.html",
    "section": "card-spine",
    "title": "Spine & Musculoskeletal Radiography",
    "desc": "Full spinal column survey with 3D color reconstruction for scoliosis, disc disease, and trauma."
  },
  {
    "id": 56,
    "page": "services/ecg.html",
    "section": "card-preop",
    "title": "Pre-Operative Cardiac Clearance",
    "desc": "Rapid 12-lead ECG evaluation and rhythm analysis required prior to elective surgeries and procedures."
  },
  {
    "id": 57,
    "page": "technology.html",
    "section": "tech-ecg",
    "title": "Multi-Channel Digital Electrocardiograph",
    "desc": "12-channel digital ECG console with high-resolution backlit LCD, AI rhythm analysis, and thermal printer."
  },
  {
    "id": 58,
    "page": "services/ultrasound.html",
    "section": "modality-doppler",
    "title": "Color Doppler Vascular Assessment",
    "desc": "Real-time duplex color Doppler evaluating peripheral vascular flow, carotid arteries, and venous patency."
  },
  {
    "id": 59,
    "page": "technology.html",
    "section": "hero",
    "title": "Panoramic 5-Monitor PACS Workstation",
    "desc": "Medical-grade high-brightness diagnostic displays calibrated to DICOM Part 14 Grayscale Standard Display."
  },
  {
    "id": 60,
    "page": "services/x-ray.html",
    "section": "exam-joint",
    "title": "Orthopedic & Extremity Radiography",
    "desc": "Gentle, assisted positioning for elderly patients requiring hand, wrist, knee, or ankle radiographs."
  },
  {
    "id": 61,
    "page": "services.html",
    "section": "core-usg",
    "title": "Ultrasound & Color Doppler Sonography",
    "desc": "Duplex sonography system offering high-resolution B-mode imaging and sensitive color Doppler flow."
  },
  {
    "id": 62,
    "page": "services/ultrasound.html",
    "section": "modality-console",
    "title": "Touchscreen Parameter Interface",
    "desc": "Ergonomic sonography console with touch-sensitive anatomy selector and rapid transducer switching."
  },
  {
    "id": 63,
    "page": "index.html",
    "section": "capabilities-chest",
    "title": "High-Definition Chest Radiograph",
    "desc": "Crisp PA chest X-ray radiograph demonstrating pulmonary parenchymal detail, costophrenic angles, and ribs."
  },
  {
    "id": 64,
    "page": "index.html",
    "section": "capabilities-msk",
    "title": "Dual-View Knee Joint Radiograph",
    "desc": "AP and Lateral knee radiographs displaying tibiofemoral joint alignment, patella, and bone density."
  },
  {
    "id": 65,
    "page": "services.html",
    "section": "core-msk",
    "title": "Musculoskeletal Ankle & Foot Radiograph",
    "desc": "Orthopedic AP and lateral views showing distal tibia, fibula, talus, calcaneus, and metatarsal arches."
  },
  {
    "id": 66,
    "page": "products.html",
    "section": "card-chest",
    "title": "Digital Chest Radiography (PA & Lateral)",
    "desc": "Full-resolution chest radiograph inspection on medical-grade diagnostic display for thoracic disorders."
  },
  {
    "id": 67,
    "page": "technology.html",
    "section": "tech-pacs",
    "title": "PACS & DICOM Diagnostic Network",
    "desc": "Enterprise picture archiving system supporting instantaneous cross-departmental image distribution."
  },
  {
    "id": 68,
    "page": "services.html",
    "section": "core-neuro",
    "title": "Multi-Sequence Cranial MRI Series",
    "desc": "24-slice cranial neuroimaging sheet demonstrating T1, T2, and FLAIR axial brain structures."
  },
  {
    "id": 69,
    "page": "products.html",
    "section": "card-fetal",
    "title": "3D/4D Obstetric Fetal Sonogram",
    "desc": "High-definition volumetric sonogram providing realistic fetal surface rendering and growth tracking."
  },
  {
    "id": 70,
    "page": "products.html",
    "section": "card-ecg",
    "title": "12-Lead Resting Electrocardiogram",
    "desc": "Diagnostic ECG printout with automated interval measurements (PR, QRS, QT/QTc) on calibrated pink grid."
  },
  {
    "id": 71,
    "page": "services.html",
    "section": "highlight-ecg",
    "title": "AI-Assisted ECG Monitoring",
    "desc": "Intelligent cardiac rhythm monitor with real-time waveform analysis and automated arrhythmia alerts."
  },
  {
    "id": 72,
    "page": "services/ecg.html",
    "section": "hero",
    "title": "Cardiologist Multi-Lead Rhythm Review",
    "desc": "Senior diagnostic specialist analyzing multi-lead ECG rhythm tracings on high-resolution workstation."
  },
  {
    "id": 73,
    "page": "services/ultrasound.html",
    "section": "hero",
    "title": "Cross-Sectional Diagnostic Screens",
    "desc": "Radiologist reviewing high-contrast soft-tissue sonograms and cross-sectional scans side-by-side."
  },
  {
    "id": 74,
    "page": "services.html",
    "section": "hero",
    "title": "3D Volume Rendering PACS Workstation",
    "desc": "Advanced 3D volume reconstruction display showcasing skeletal frameworks, visceral organs, and vascular trees."
  },
  {
    "id": 75,
    "page": "services/ecg.html",
    "section": "card-report",
    "title": "Diagnostic Cardiology & Vascular Reporting",
    "desc": "Specialist dictating comprehensive diagnostic findings while inspecting 3D vascular angiography models."
  },
  {
    "id": 76,
    "page": "patient-guide.html",
    "section": "hero",
    "title": "Illuminated Negatoscope Film Viewbox",
    "desc": "Dual-panel medical film viewer displaying multi-slice CT, chest, lateral skull, spine, and knee films."
  },
  {
    "id": 77,
    "page": "technology.html",
    "section": "tech-eizo",
    "title": "3D Multi-Planar Reconstruction Workstation",
    "desc": "Triple-monitor calibrated Eizo workstation used for multi-planar CT reformatting and spine evaluations."
  },
  {
    "id": 78,
    "page": "about.html",
    "section": "gallery-lightbox",
    "title": "Film Reading & Negatoscope Viewbox",
    "desc": "Medical specialist carefully inspecting physical chest and pelvic X-ray film sheets on illuminated viewer."
  }
];
