import React, { Component } from 'react';
import ReactGA from 'react-ga4';

export class AboutVivek extends Component {

    constructor() {
        super();
        this.screens = {};
        this.state = {
            screen: () => { },
            active_screen: "about", // by default 'about' screen is active
            navbar: false,
        }
    }

    componentDidMount() {
        this.screens = {
            "about": <About />,
            "education": <Education />,
            "skills": <Skills />,
            "projects": <Projects />,
            "resume": <Resume />,
        }

        let lastVisitedScreen = localStorage.getItem("about-section");
        if (lastVisitedScreen === null || lastVisitedScreen === undefined) {
            lastVisitedScreen = "about";
        }

        // focus last visited screen
        this.changeScreen(document.getElementById(lastVisitedScreen));
    }

    changeScreen = (e) => {
        const screen = e.id || e.target.id;

        // store this state
        localStorage.setItem("about-section", screen);

        // google analytics
        ReactGA.send({ hitType: "pageview", page: `/${screen}`, title: "Custom Title" });


        this.setState({
            screen: this.screens[screen],
            active_screen: screen
        });
    }

    showNavBar = () => {
        this.setState({ navbar: !this.state.navbar });
    }

    renderNavLinks = () => {
        return (
            <>
                <div id="about" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "about" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="about aslam" src="./themes/Yaru/status/about.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">About Me</span>
                </div>
                <div id="education" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "education" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="aslam' education" src="./themes/Yaru/status/education.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Experience</span>
                </div>
                <div id="skills" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "skills" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="aslam' skills" src="./themes/Yaru/status/skills.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Skills</span>
                </div>
                <div id="projects" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "projects" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="aslam' projects" src="./themes/Yaru/status/projects.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Projects</span>
                </div>
                <div id="resume" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "resume" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="aslam's resume" src="./themes/Yaru/status/download.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Resume</span>
                </div>
            </>
        );
    }

    render() {
        return (
            <div className="w-full h-full flex bg-ub-cool-grey text-white select-none relative">
                <div className="md:flex hidden flex-col w-1/4 md:w-1/5 text-sm overflow-y-auto windowMainScreen border-r border-black">
                    {this.renderNavLinks()}
                </div>
                <div onClick={this.showNavBar} className="md:hidden flex flex-col items-center justify-center absolute bg-ub-cool-grey rounded w-6 h-6 top-1 left-1">
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className=" w-3.5 border-t border-white" style={{ marginTop: "2pt", marginBottom: "2pt" }}></div>
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className={(this.state.navbar ? " visible animateShow z-30 " : " invisible ") + " md:hidden text-xs absolute bg-ub-cool-grey py-0.5 px-1 rounded-sm top-full mt-1 left-0 shadow border-black border border-opacity-20"}>
                        {this.renderNavLinks()}
                    </div>
                </div>
                <div className="flex flex-col w-3/4 md:w-4/5 justify-start items-center flex-grow bg-ub-grey overflow-y-auto windowMainScreen">
                    {this.state.screen}
                </div>
            </div>
        );
    }
}

export default AboutVivek;

export const displayAboutVivek = () => {
    return <AboutVivek />;
}


function About() {
    return (
        <>
            <div className="w-20 md:w-28 my-4 bg-white rounded-full">
                <img className="w-full" src="./images/logos/bitmoji.png" alt="Vivek Patel Logo" />
            </div>
            <div className=" mt-4 md:mt-8 text-lg md:text-2xl text-center px-1">
                <div>I'm <span className="font-bold">Muhammad Zaheer</span> ,</div>
                <div className="font-normal ml-1">I'm a <span className="text-pink-600 font-bold">Data Scientist</span></div>
            </div>
            <div className=" mt-4 relative md:my-8 pt-px bg-white w-32 md:w-48">
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-0"></div>
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-0"></div>
            </div>
            <ul className=" mt-4 leading-tight tracking-tight text-sm md:text-base w-5/6 md:w-3/4 emoji-list">
                <li className=" list-pc">Proven success in streamlining operations and deploying cutting-edge algorithms, achieving a remarkable 30% reduction in manual screening and a 25% improvement in interview efficiency.</li>
                <li className=" mt-3 list-building">Demonstrated expertise in optimizing web application testing, slashing time by 50%, and reducing data processing efforts by 70%, leading to a substantial 30% decrease in pentesting costs through Python automation.</li>
                <li className=" mt-3 list-time">Committed to continual advancement, resulting in a quantifiable 15% overall process efficiency boost.</li>
                <li className=" mt-3 list-star">Proficient in an extensive array of technical skills, encompassing software development, machine learning, computer vision, natural language processing, software engineering, visualization, algorithms, image processing, time series analysis, neural networks, Linux administration, transfer learning, reinforcement learning, generative AI, and DevOps.</li>
            </ul>
        </>
    )
    }    
function Education() {
    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Work Experience
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className=" w-10/12  mt-4 ml-4 px-0 md:px-1">
                <li className="list-disc">
                    <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                        Ejad Labs
                    </div>
                    <div className=" text-sm text-gray-400 mt-0.5">November 2023 - Present</div>
                    <div className=" text-sm md:text-base">Software Engineering Internee</div>
                    <ul className="list-inside list-disc">
                        <li>Engineered a fully functional web application to optimize operational workflows and enhance user interaction.</li>
                        <li>Devised a resume scoring system based on intricate criteria, resulting in a 30% reduction in manual screening efforts.</li>
                        <li>Constructed an automated AI interviewer using advanced machine learning techniques (GAN, computer vision), accelerating decision-making processes by 40%.</li>
                        <li>Innovated a real-time GAN-based visual interviewer, improving interview efficiency by 25%.</li>
                        <li>Integrated solutions into a comprehensive HR project, incorporating NLP, deep learning, web development, GAN, and computer vision.</li>
                        <li>Achieved substantial cost savings and a remarkable 70% reduction in candidate selection and onboarding timelines.</li>
                    </ul>
                </li>
                <li className="list-disc mt-5">
                    <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                        Government of Pakistan
                    </div>
                    <div className=" text-sm text-gray-400 mt-0.5">July 2023 - August 2023</div>
                    <div className=" text-sm md:text-base">Python Developer & Red Teamer</div>
                    <ul className="list-inside list-disc">
                        <li>Decreased web application penetration testing time from 20 to 10 hours, resulting in direct labor cost savings and heightened security effectiveness.</li>
                        <li>Reduced data extraction and conversion time by 70%, delivering concrete time savings for machine learning projects and mitigating resource-intensive manual tasks.</li>
                        <li>Realized a 30% cut in pentesting expenditures by adopting Python automation for routine testing, providing a direct impact on the budget allocation for security initiatives.</li>
                        <li>Improved team efficiency by 20% through seamless collaboration, ensuring the smooth integration of automated solutions across diverse functional teams without disruptions.</li>
                        <li>Instituted new tools and methodologies, resulting in a 15% boost in overall process efficiency. This measurable outcome underscores a commitment to technological relevance and operational efficiency.</li>
                    </ul>
                </li>
            </ul>
        </>
    )
}
function Skills() {
    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Technical Skills
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list">
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    Programming Languages
                    <ul>
                        <li>Python</li>
                        <li>JavaScript</li>
                        <li>C</li>
                        <li>C++</li>
                        <li>HTML</li>
                        <li>CSS</li>
                    </ul>
                </li>
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    Databases
                    <ul>
                        <li>MySQL</li>
                        <li>MongoDB</li>
                        <li>SQLite</li>
                        <li>PostgreSQL</li>
                    </ul>
                </li>
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    Data Science Frameworks
                    <ul>
                        <li>Tensorflow</li>
                        <li>Pytorch</li>
                        <li>FastAI</li>
                        <li>Keras</li>
                        <li>Scikit-learn</li>
                    </ul>
                </li>
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    Web Dev Frameworks
                    <ul>
                        <li>Flask</li>
                        <li>Django</li>
                        <li>FastAPI</li>
                        <li>Streamlit</li>
                    </ul>
                </li>
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    Machine Learning Skills
                    <ul>
                        <li>Applied Mathematics</li>
                        <li>Data Modeling and Evaluation</li>
                        <li>Exploratory Data Analysis</li>
                        <li>Supervised and Unsupervised Learning</li>
                        <li>Deep Learning Skills</li>
                        <ul>
                            <li>Neural Networks</li>
                            <li>Convolutional Neural Networks (CNN)</li>
                            <li>Recurrent Neural Networks (RNN)</li>
                            <li>Generative Adversarial Networks (GAN)</li>
                            <li>Transfer Learning</li>
                            <li>Reinforcement Learning</li>
                            <li>Time Series</li>
                            <li>Natural Language Processing</li>
                        </ul>
                    </ul>
                </li>
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    Web Development
                    <ul>
                        <li>HTML5, CSS3</li>
                        <li>Bootstrap</li>
                        <li>RESTful APIs</li>
                        <li>Responsive Design</li>
                        <li>CI/CD</li>
                        <li>Docker</li>
                        <li>Kubernetes</li>
                        <li>Nginx</li>
                        <li>Git, Github</li>
                        <li>Linux Administration</li>
                        <li>Building Linux From Scratch</li>
                    </ul>
                </li>
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    Software Development Skills
                    <ul>
                        <li>Software Development</li>
                        <li>Algorithms</li>
                        <li>Data Structures</li>
                        <li>SDLC</li>
                    </ul>
                </li>
            </ul>
        </>
    )
}

function Projects() {
    const project_list = [
        {
            name: "Time Series Forecasting for CoronaVirus Using Pytorch",
            // date: "Jan 2024 -March 2024",
            link: "https://github.com/zaheerh4ck3r/time-series-coronavirus-pytorch",
            description: [
                "This project demonstrates the use of PyTorch for Time Series Forecasting with Long Short-Term Memory (LSTM) networks to predict daily coronavirus cases. The dataset is sourced from the Johns Hopkins University Center for Systems Science and Engineering (JHU CSSE) and includes the number of reported daily cases by country. The LSTM model is trained on the confirmed cases to predict future trends.",
            ],
            domains: ["Arduino IDE (C++)", "HTML","CSS" ]
        },
        {
            name: "Traffic Sign Recognition with PyTorch",
            // date: "Aug 2022 -Mar 2023",
            link: "https://github.com/zaheerh4ck3r/traffic-sign-classification.git",
            description: [
                "This project utilizes PyTorch for Traffic Sign Recognition (TSR). The goal is to train a deep learning model capable of recognizing and classifying traffic signs using the German Traffic Sign Recognition Benchmark (GTSRB) dataset."
            ],
            domains: ["Python", "PyTorch", "Deep Learning", "Matplotlib", "Seaborn", "Pandas", "NumPy", "Git"]
        },
        {
            name: "Credit Card Fraud Detection",
            // date: "Aug 2022 -Mar 2023",
            link: "https://github.com/zaheerh4ck3r/Credit-Card-Fraud-Detection",
            description: [
                "This project detects anomalies in credit card transactions using Isolation forests and marks them as frauds. Real data has been used for this project."
            ],
            domains: ["Sklearn", "Matplotlib", "IsolationForest", "Pandas"]
        },
        {
            name: "Weather Prediction Using Pytorch",
            // date: "Aug 2022 -Mar 2023",
            link: "https://github.com/zaheerh4ck3r/weather-prediction-using-pytorch.git",
            description: [
                "This project utilizes PyTorch, a popular open-source machine learning library, to predict weather patterns."
            ],
            domains: ["Pytorch", "Deep Learning", "Python", "Matplotlib", "Seaborn", "Pandas", "Numpy"]
        },
        {
            name: "Face Detection on Custom Dataset Using Detectron2",
            // date: "Aug 2022 -Mar 2023",
            link: "https://github.com/zaheerh4ck3r/face-detection-detectron2",
            description: [
                "This project focuses on object detection for face recognition using Detectron2, a powerful library built on PyTorch.",
                "The model is trained to detect faces in images, and the dataset is obtained from a face detection dataset provided by Johns Hopkins University Center for Systems Science and Engineering (JHU CSSE).",
                "The goal is to develop a robust face detection system."
            ],
            domains: ["Detectron2", "PyTorch", "OpenCV", "Python", "Pandas", "Matplotlib", "Seaborn"]
        },
        
        
    ];

    const tag_colors = {
        "javascript": "yellow-300",
        "firebase": "red-600",
        "firestore": "red-500",
        "firebase auth": "red-400",
        "chrome-extension": "yellow-400",
        "flutter": "blue-400",
        "dart": "blue-500",
        "react-native": "purple-500",
        "html5": "pink-600",
        "sass": "pink-400",
        "tensorflow": "yellow-600",
        "django": "green-600",
        "python": "green-200",
        "codeforces-api": "gray-300",
        "tailwindcss": "blue-300",
        "next.js": "purple-600"
    }

    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Projects
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            {
                project_list.map((project, index) => {
                    const projectNameFromLink = project.link.split('/')
                    const projectName = projectNameFromLink[projectNameFromLink.length - 1]
                    return (
                        <a key={index} href={project.link} target="_blank" rel="noreferrer" className="flex w-full flex-col px-4">
                            <div className="w-full py-1 px-2 my-2 border border-gray-50 border-opacity-10 rounded hover:bg-gray-50 hover:bg-opacity-5 cursor-pointer">
                                <div className="flex flex-wrap justify-between items-center">
                                    <div className='flex justify-center items-center'>
                                        <div className=" text-base md:text-lg mr-2">{project.name.toLowerCase()}</div>
                                        <iframe src={`https://ghbtns.com/github-btn.html?user=vivek9patel&repo=${projectName}&type=star&count=true`} frameBorder="0" scrolling="0" width="150" height="20" title={project.name.toLowerCase()+"-star"}></iframe>
                                    </div>
                                    <div className="text-gray-300 font-light text-sm">{project.date}</div>
                                </div>
                                <ul className=" tracking-normal leading-tight text-sm font-light ml-4 mt-1">
                                    {
                                        project.description.map((desc, index) => {
                                            return <li key={index} className="list-disc mt-1 text-gray-100">{desc}</li>;
                                        })
                                    }
                                </ul>
                                <div className="flex flex-wrap items-start justify-start text-xs py-2">
                                    {
                                        (project.domains ?
                                            project.domains.map((domain, index) => {
                                                const borderColorClass = `border-${tag_colors[domain]}`
                                                const textColorClass = `text-${tag_colors[domain]}`

                                                return <span key={index} className={`px-1.5 py-0.5 w-max border ${borderColorClass} ${textColorClass} m-1 rounded-full`}>{domain}</span>
                                            })

                                            : null)
                                    }
                                </div>
                            </div>
                        </a>
                    )
                })
            }
        </>
    )
}
function Resume() {
    return (
        <iframe className="h-full w-full" src="./files/resume.pdf" title="mohd aslam resume" frameBorder="0"></iframe>
    )
}
