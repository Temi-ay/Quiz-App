const questions = [
    {
        category: "programming",
        questions: [
        {
            question: "What does HTML stand for?",
            options: ["Hyper Tool Markup Language", "Hyper Text Markup Language", "Home Text Markup Language", "Hyper Transfer Machine Language"],
            correctAnswer: 1
        },
        {
            question: "Which language is primarily used to style web pages?",
            options: ["Python", "Java", "CSS", "C++"],
            correctAnswer: 2
        },
        {
            question: "What symbol starts a single-line comment in Python?",
            options: ["//", "/*", "#", "--"],
            correctAnswer: 2
        },
        {
            question: "What does CSS stand for?",
            options: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style System", "Coding Style Sheets"],
            correctAnswer: 1
        },
        {
            question: "Which keyword is used to create a function in JavaScript?",
            options: ["define", "func", "function", "method"],
            correctAnswer: 2
        },
        {
            question: "What is the output of 2 + 3 * 4?",
            options: ["20", "14", "24", "10"],
            correctAnswer: 1
        },
        {
            question: "Which data type stores true or false values?",
            options: ["Integer", "String", "Boolean", "Float"],
            correctAnswer: 2
        },
        {
            question: "What is a variable?",
            options: ["A loop", "A storage location for data", "A database", "A function"],
            correctAnswer: 1
        },
        {
            question: "What does API stand for?",
            options: ["Application Programming Interface", "Application Process Internet", "Advanced Programming Interface", "Automated Program Integration"],
            correctAnswer: 0
        },
        {
            question: "What is Git mainly used for?",
            options: ["Image editing", "Version control", "Gaming", "Hosting websites"],
            correctAnswer: 1
        },
        {
            question: "What does IDE stand for?",
            options: ["Internet Development Engine", "Integrated Development Environment", "Internal Design Editor", "Integrated Data Engine"],
            correctAnswer: 1
        },
        {
            question: "Which operator is used for assignment in JavaScript?",
            options: ["==", "===", "=", "!="],
            correctAnswer: 2
        },
        {
            question: "Which of these is a JavaScript framework?",
            options: ["React", "MySQL", "Linux", "Git"],
            correctAnswer: 0
        },
        {
            question: "What is the correct extension for JavaScript files?",
            options: [".java", ".js", ".javascript", ".jv"],
            correctAnswer: 1
        },
        {
            question: "Which company developed JavaScript?",
            options: ["Microsoft", "Google", "Netscape", "Apple"],
            correctAnswer: 2
        },
        {
            question: "What is an array?",
            options: ["A function", "A collection of values", "A loop", "A variable type"],
            correctAnswer: 1
        },
        {
            question: "Which HTML tag creates a hyperlink?",
            options: ["<link>", "<a>", "<href>", "<url>"],
            correctAnswer: 1
        },
        {
            question: "Which symbol is used to access an object's property in JavaScript?",
            options: ["#", ".", "@", ":"],
            correctAnswer: 1
        },
        {
            question: "What is the output type of prompt() in JavaScript?",
            options: ["Number", "String", "Boolean", "Array"],
            correctAnswer: 1
        },
        {
            question: "Which method displays a message box in JavaScript?",
            options: ["display()", "message()", "alert()", "show()"],
            correctAnswer: 2
        },
        {
            question: "Which HTML tag is used for the largest heading?",
            options: ["<heading>", "<h6>", "<head>", "<h1>"],
            correctAnswer: 3
        },
        {
            question: "What does SQL stand for?",
            options: ["Structured Query Language", "Simple Query Language", "System Query Logic", "Structured Queue Language"],
            correctAnswer: 0
        },
        {
            question: "Which SQL command retrieves data?",
            options: ["GET", "SELECT", "FETCH", "SHOW"],
            correctAnswer: 1
        },
        {
            question: "Which data structure follows FIFO?",
            options: ["Stack", "Queue", "Tree", "Array"],
            correctAnswer: 1
        },
        {
            question: "What does OOP stand for?",
            options: ["Object-Oriented Programming", "Online Object Processing", "Object Output Program", "Open Operating Process"],
            correctAnswer: 0
        }
        ]
    },
    {
        category: "physics",
        questions: [
        {
            question: "What is the SI unit of force?",
            options: ["Joule", "Newton", "Pascal", "Watt"],
            correctAnswer: 1
        },
        {
            question: "What is the acceleration due to gravity on Earth?",
            options: ["9.8 m/s²", "4.9 m/s²", "15 m/s²", "20 m/s²"],
            correctAnswer: 0
        },
        {
            question: "Which law states that every action has an equal and opposite reaction?",
            options: ["Newton's First Law", "Newton's Second Law", "Newton's Third Law", "Law of Gravitation"],
            correctAnswer: 2
        },
        {
            question: "What is the SI unit of energy?",
            options: ["Newton", "Joule", "Watt", "Volt"],
            correctAnswer: 1
        },
        {
            question: "Which particle has a negative charge?",
            options: ["Proton", "Neutron", "Electron", "Photon"],
            correctAnswer: 2
        },
        {
            question: "What is the speed of light in a vacuum?",
            options: ["300,000 km/s", "150,000 km/s", "3,000 km/s", "30,000 km/s"],
            correctAnswer: 0
        },
        {
            question: "What instrument measures electric current?",
            options: ["Voltmeter", "Ammeter", "Thermometer", "Barometer"],
            correctAnswer: 1
        },
        {
            question: "What is the formula for density?",
            options: ["Mass × Volume", "Mass ÷ Volume", "Volume ÷ Mass", "Force ÷ Area"],
            correctAnswer: 1
        },
        {
            question: "What type of energy is stored in a stretched spring?",
            options: ["Kinetic", "Thermal", "Elastic Potential", "Chemical"],
            correctAnswer: 2
        },
        {
            question: "What is measured in watts?",
            options: ["Force", "Power", "Energy", "Current"],
            correctAnswer: 1
        },
        {
            question: "Which planet has the strongest gravity?",
            options: ["Earth", "Mars", "Jupiter", "Venus"],
            correctAnswer: 2
        },
        {
            question: "What is the SI unit of pressure?",
            options: ["Pascal", "Newton", "Joule", "Volt"],
            correctAnswer: 0
        },
        {
            question: "What is the formula for weight?",
            options: ["W = mg", "W = mv", "W = ma²", "W = Fd"],
            correctAnswer: 0
        },
        {
            question: "What type of wave is light?",
            options: ["Sound Wave", "Mechanical Wave", "Electromagnetic Wave", "Water Wave"],
            correctAnswer: 2
        },
        {
            question: "What color of light has the longest wavelength?",
            options: ["Blue", "Green", "Red", "Violet"],
            correctAnswer: 2
        },
        {
            question: "Which device converts electrical energy into mechanical energy?",
            options: ["Generator", "Motor", "Battery", "Resistor"],
            correctAnswer: 1
        },
        {
            question: "What is the unit of frequency?",
            options: ["Joule", "Hertz", "Newton", "Tesla"],
            correctAnswer: 1
        },
        {
            question: "What is the formula for speed?",
            options: ["Distance × Time", "Distance ÷ Time", "Time ÷ Distance", "Mass ÷ Volume"],
            correctAnswer: 1
        },
        {
            question: "What happens to an object in free fall?",
            options: ["It slows down", "It accelerates downward", "It stops moving", "It moves sideways"],
            correctAnswer: 1
        },
        {
            question: "Which scientist developed the theory of relativity?",
            options: ["Newton", "Galileo", "Einstein", "Tesla"],
            correctAnswer: 2
        },
        {
            question: "What is the SI unit of electric current?",
            options: ["Volt", "Ampere", "Ohm", "Watt"],
            correctAnswer: 1
        },
        {
            question: "Which law relates voltage, current, and resistance?",
            options: ["Newton's Law", "Ohm's Law", "Boyle's Law", "Hooke's Law"],
            correctAnswer: 1
        },
        {
            question: "What is the resistance unit called?",
            options: ["Volt", "Ohm", "Ampere", "Tesla"],
            correctAnswer: 1
        },
        {
            question: "Which form of energy does a moving object possess?",
            options: ["Potential Energy", "Chemical Energy", "Kinetic Energy", "Nuclear Energy"],
            correctAnswer: 2
        },
        {
            question: "What is the center of an atom called?",
            options: ["Electron", "Shell", "Nucleus", "Proton"],
            correctAnswer: 2
        }
        ]
    },
    {
        category: "mathematics",
         questions: [
        {
            question: "What is 12 × 8?",
            options: ["86", "96", "88", "108"],
            correctAnswer: 1
        },
        {
            question: "What is the square root of 144?",
            options: ["10", "11", "12", "13"],
            correctAnswer: 2
        },
        {
            question: "What is 25% of 200?",
            options: ["25", "50", "75", "100"],
            correctAnswer: 1
        },
        {
            question: "How many degrees are in a right angle?",
            options: ["45", "90", "180", "360"],
            correctAnswer: 1
        },
        {
            question: "What is 7²?",
            options: ["14", "42", "49", "56"],
            correctAnswer: 2
        },
        {
            question: "Which number is prime?",
            options: ["12", "15", "17", "21"],
            correctAnswer: 2
        },
        {
            question: "What is the perimeter of a square with side length 5?",
            options: ["10", "15", "20", "25"],
            correctAnswer: 2
        },
        {
            question: "What is 3/4 as a decimal?",
            options: ["0.25", "0.5", "0.75", "1.25"],
            correctAnswer: 2
        },
        {
            question: "Solve: 5x = 25",
            options: ["4", "5", "6", "7"],
            correctAnswer: 1
        },
        {
            question: "What is π rounded to 2 decimal places?",
            options: ["3.12", "3.14", "3.16", "3.18"],
            correctAnswer: 1
        },
        {
            question: "What is 15 + 27?",
            options: ["40", "41", "42", "43"],
            correctAnswer: 2
        },
        {
            question: "What is 100 ÷ 4?",
            options: ["20", "25", "30", "40"],
            correctAnswer: 1
        },
        {
            question: "What is 9 × 9?",
            options: ["72", "81", "90", "99"],
            correctAnswer: 1
        },
        {
            question: "What is the area of a rectangle with length 8 and width 5?",
            options: ["13", "26", "40", "80"],
            correctAnswer: 2
        },
        {
            question: "What is 2³?",
            options: ["4", "6", "8", "16"],
            correctAnswer: 2
        },
        {
            question: "What is the value of 50% as a decimal?",
            options: ["0.05", "0.5", "5", "50"],
            correctAnswer: 1
        },
        {
            question: "What is the sum of the angles in a triangle?",
            options: ["90°", "180°", "270°", "360°"],
            correctAnswer: 1
        },
        {
            question: "Which fraction is equivalent to 1/2?",
            options: ["2/3", "3/6", "4/10", "5/12"],
            correctAnswer: 1
        },
        {
            question: "What is 11 × 11?",
            options: ["111", "121", "131", "141"],
            correctAnswer: 1
        },
        {
            question: "What is the value of x in x + 8 = 20?",
            options: ["10", "11", "12", "13"],
            correctAnswer: 2
        },
        {
            question: "What is the circumference formula of a circle?",
            options: ["πr²", "2πr", "πd²", "r²"],
            correctAnswer: 1
        },
        {
            question: "What is 18% of 50?",
            options: ["8", "9", "10", "11"],
            correctAnswer: 1
        },
        {
            question: "What is the median of 1, 3, 5, 7, 9?",
            options: ["3", "4", "5", "6"],
            correctAnswer: 2
        },
        {
            question: "How many sides does a hexagon have?",
            options: ["5", "6", "7", "8"],
            correctAnswer: 1
        },
        {
            question: "What is 10²?",
            options: ["10", "20", "100", "1000"],
            correctAnswer: 2
        }
        ]
    },
    {  
        category: "biology",
        questions: [
        {
            question: "What is the basic unit of life?",
            options: ["Atom", "Cell", "Organ", "Tissue"],
            correctAnswer: 1
        },
        {
            question: "Which organ pumps blood around the body?",
            options: ["Liver", "Lung", "Heart", "Kidney"],
            correctAnswer: 2
        },
        {
            question: "What process do plants use to make food?",
            options: ["Respiration", "Digestion", "Photosynthesis", "Fermentation"],
            correctAnswer: 2
        },
        {
            question: "Which molecule carries genetic information?",
            options: ["RNA", "Protein", "DNA", "Glucose"],
            correctAnswer: 2
        },
        {
            question: "What gas do humans breathe in?",
            options: ["Carbon Dioxide", "Nitrogen", "Hydrogen", "Oxygen"],
            correctAnswer: 3
        },
        {
            question: "Which blood cells help fight infection?",
            options: ["Red Blood Cells", "White Blood Cells", "Platelets", "Plasma"],
            correctAnswer: 1
        },
        {
            question: "What is the largest organ in the human body?",
            options: ["Brain", "Liver", "Skin", "Heart"],
            correctAnswer: 2
        },
        {
            question: "Which part of the cell contains genetic material?",
            options: ["Membrane", "Cytoplasm", "Nucleus", "Ribosome"],
            correctAnswer: 2
        },
        {
            question: "What is the largest bone in the human body?",
            options: ["Femur", "Tibia", "Humerus", "Radius"],
            correctAnswer: 0
        },
        {
            question: "How many chambers does the human heart have?",
            options: ["2", "3", "4", "5"],
            correctAnswer: 2
        },
        {
            question: "What is the main function of red blood cells?",
            options: ["Fight disease", "Carry oxygen", "Clot blood", "Digest food"],
            correctAnswer: 1
        },
        {
            question: "Which organ is responsible for filtering blood?",
            options: ["Heart", "Liver", "Kidneys", "Lungs"],
            correctAnswer: 2
        },
        {
            question: "What pigment gives plants their green color?",
            options: ["Melanin", "Hemoglobin", "Chlorophyll", "Keratin"],
            correctAnswer: 2
        },
        {
            question: "Which system controls the body's responses and actions?",
            options: ["Digestive System", "Respiratory System", "Nervous System", "Circulatory System"],
            correctAnswer: 2
        },
        {
            question: "How many pairs of chromosomes do humans have?",
            options: ["21", "22", "23", "24"],
            correctAnswer: 2
        },
        {
            question: "Which organ is mainly responsible for digestion?",
            options: ["Stomach", "Brain", "Heart", "Kidney"],
            correctAnswer: 0
        },
        {
            question: "What type of organism is yeast?",
            options: ["Bacterium", "Plant", "Fungus", "Animal"],
            correctAnswer: 2
        },
        {
            question: "Which blood type is known as the universal donor?",
            options: ["A", "B", "AB", "O Negative"],
            correctAnswer: 3
        },
        {
            question: "What is the process of cell division called?",
            options: ["Respiration", "Mitosis", "Photosynthesis", "Osmosis"],
            correctAnswer: 1
        },
        {
            question: "Which organ allows humans to breathe?",
            options: ["Liver", "Lungs", "Kidneys", "Pancreas"],
            correctAnswer: 1
        },
        {
            question: "What is the hardest substance in the human body?",
            options: ["Bone", "Tooth Enamel", "Nail", "Cartilage"],
            correctAnswer: 1
        },
        {
            question: "Which vitamin is mainly produced when skin is exposed to sunlight?",
            options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
            correctAnswer: 3
        },
        {
            question: "What is the function of platelets?",
            options: ["Carry oxygen", "Fight infection", "Help blood clot", "Digest nutrients"],
            correctAnswer: 2
        },
        {
            question: "Which organ produces insulin?",
            options: ["Liver", "Pancreas", "Heart", "Gallbladder"],
            correctAnswer: 1
        },
        {
            question: "What is the scientific name for humans?",
            options: ["Homo sapiens", "Pan troglodytes", "Canis lupus", "Felis catus"],
            correctAnswer: 0
        }
        ]
    }
]
