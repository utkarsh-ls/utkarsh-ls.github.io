function getExperienceData() {
    return [
        {
            date: "Nov 2024 – May 2025",
            title: "Machine Learning Engineer",
            tags: ["LLM Deployment", "AI/ML", "Backend Development", "Cloud"],
            company: "Serri",
            description: "Developed backend for an agentic chatbot using LangGraph with natural language tool-calling and autonomous next-action suggestions. Optimized token and memory usage, reducing per-conversation tokens by 80–90%. Built an agentic RAG-based Q&A chatbot with hierarchical chunking and metadata tagging for precise retrieval. Deployed LLMs on Google Vertex AI and Cloud Run, benchmarking latency and performance for production."
        },
        {
            date: "Aug 2023 – Sep 2024",
            title: "Software Engineer",
            tags: ["Language AI Framework & MDE", "Gen AI", "Automation"],
            company: "Samsung R&D",
            description: "Integrated generative AI with Bixby, improving accuracy by 5% over previous rule-based approaches. Led development and maintenance of 3 Bixby modules deployed in Galaxy Z Fold 6 and Z Flip 6. Proposed and executed PoC on advanced LLM prompting techniques, boosting reasoning accuracy by 15%. Mentored 4 students through research and paper publication."
        },
        {
            date: "May 2022 – Jul 2022",
            title: "Software Developer Intern",
            tags: ["Backend Development", "Cloud"],
            company: "Validus Techfin Services Pvt Ltd",
            description: "Engineered a web application to manage Alternative Investment Funds (AIFs), streamlining investment processes for fund managers. Built asynchronous backend structure for data handling, increasing processing speed by 50%. Designed frontend UI for data capture and deployed services on AWS EC2 using independent Docker containers."
        },
        {
            date: "Jan 2021 – May 2021",
            title: "Software Developer Intern",
            tags: ["Full Stack Development", "ML"],
            company: "Blue Lit Solutions LLP",
            description: "Collaborated on developing a cloud-based system for waste image classification using ML. Created a microservice architecture and UI for visualizing ML responses. Deployed 6 microservices on AWS using Docker for scalability and consistency."
        }
    ];
}

function getProjectsData() {
    return [
        {
            title: "Wikipedia Search Engine",
            description: "An efficient search and indexing engine for English and Hindi Wikipedia dumps using blocked sort-based indexing and TF-IDF ranking, delivering a 50% improvement in query speed for large-scale text retrieval.",
            tech: ["Python", "Information Retrieval", "Blocked Sort-Based Indexing", "TF-IDF", "Algorithm Optimization", "Data Structures"],
            github: "https://github.com/utkarsh-ls/Wikipedia-Search-Engine"
        },
        {
            title: "Intent Detection Model",
            description: "A neural intent and slot detection system leveraging pre-trained Transformers and Bi-directional GRU networks, integrated with a FastAPI backend and React-based UI for speech-to-text conversion and real-time predictions.",
            tech: ["Python", "PyTorch", "Transformers", "Bi-directional GRU", "FastAPI", "React", "WebSockets", "Speech-to-Text", "NLP"],
            github: "https://github.com/utkarsh-ls/Intent-Detection-and-Slot-Filling"
        },
        {
            title: "Anaphora Resolution System",
            description: "A coreference resolution system for social media text using Mention and Pair-Score classifiers built on embeddings from pre-trained language models, enabling context-aware entity mapping.",
            tech: ["Python", "PyTorch", "Transformers", "Word Embeddings", "Binary Classification", "NLP", "Text Analytics"],
            github: "https://github.com/utkarsh-ls/anaphora-resolution"
        },
        {
            title: "Suzuki-Kasami Mutual Exclusion Protocol",
            description: "A distributed token-based mutual exclusion protocol implementation using MPI message passing, ensuring synchronized access and fault-tolerant communication across multiple nodes.",
            tech: ["Python", "MPI (mpi4py)", "Distributed Systems", "Token-Based Algorithms", "Concurrency Control"],
            github: "https://github.com/utkarsh-ls/Suzuki-Kasami-Mutual-Exclusion-Algo"
        },
        {
            title: "Linux Shell",
            description: "A custom bash-like shell supporting command execution, pipes, I/O redirection, and background process management through POSIX-compliant system calls.",
            tech: ["C", "POSIX System Calls", "Process Management", "Pipes", "Redirection", "UNIX/Linux", "Operating Systems"],
            github: "https://github.com/utkarsh-ls/C-shell"
        },
        {
            title: "Jigsaw Puzzle Solver",
            description: "A self-supervised learning approach using jigsaw puzzles as a pretext task for image representation learning, evaluated on ImageNet and MNIST datasets with extensive analysis.",
            tech: ["Python", "PyTorch", "Self-Supervised Learning", "Computer Vision", "Image Representation Learning", "NumPy"],
            github: "https://github.com/utkarsh-ls/Jigsaw-Puzzle-Solver"
        },
        {
            title: "GrabCut Image Segmentation",
            description: "An interactive foreground extraction algorithm based on iterative graph cuts for precise image segmentation with minimal user input.",
            tech: ["Python", "OpenCV", "Graph-Based Algorithms", "Image Processing", "Computer Vision"],
            github: "https://github.com/utkarsh-ls/Grabcut"
        },
        {
            title: "Chess Game with AI Bot",
            description: "A chess engine implementing the Minimax algorithm with Alpha-Beta pruning for strategic move optimization, enabling competitive play against a human player.",
            tech: ["Python", "Minimax Algorithm", "Alpha-Beta Pruning", "Game AI", "Search Algorithms", "Algorithm Optimization"],
            github: "https://github.com/utkarsh-ls/Chess-Engine-AI-based"
        }
    ];
}

function getSkillsData() {
    return {
        "Programming Languages": [
            "Python", "C++", "C", "Java", "R", "SQL", "Bash"
        ],
        "Backend Development": [
            "FastAPI", "Flask", "Django", "Node.js", "REST API Design",
            "PostgreSQL", "MongoDB", "Asynchronous Programming"
        ],
        "Machine Learning & AI": [
            "PyTorch", "Transformers", "TensorFlow", "Scikit-learn",
            "NLP", "LLM Deployment", "RAG Systems", "Prompt Engineering",
            "Token Optimization", "Vector Databases"
        ],
        "Distributed Systems & OS": [
            "Concurrency Control", "MPI (mpi4py)", "Distributed Algorithms",
            "POSIX System Calls", "Microservices", "Docker"
        ],
        "Cloud & DevOps": [
            "AWS (EC2, Docker, Cloud Services)", "Google Cloud (Vertex AI, Cloud Run)",
            "Azure", "Containerization", "CI/CD"
        ],
        "Tools & Utilities": [
            "Git", "Atlassian Suite", "Linux", "Shell Scripting", "NumPy", "OpenCV"
        ]
    };
}
