import { CareerPath, Achievement } from '@/types';

export const globalAchievements: Achievement[] = [
  {
    id: 'first-step',
    title: 'First Step',
    description: 'Complete your first learning step',
    icon: '🎯',
    xpBonus: 50,
  },
  {
    id: 'quick-learner',
    title: 'Quick Learner',
    description: 'Complete 5 steps in a single day',
    icon: '⚡',
    xpBonus: 100,
  },
  {
    id: 'dedicated',
    title: 'Dedicated',
    description: 'Complete 10 steps total',
    icon: '💪',
    xpBonus: 150,
  },
  {
    id: 'halfway-there',
    title: 'Halfway There',
    description: 'Reach 50% progress in your career path',
    icon: '🌟',
    xpBonus: 200,
  },
  {
    id: 'path-master',
    title: 'Path Master',
    description: 'Complete an entire career path',
    icon: '🏆',
    xpBonus: 500,
  },
];

export const careerPaths: CareerPath[] = [
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Build modern, responsive websites and web applications using the latest technologies.',
    icon: '🌐',
    color: '#3B82F6',
    totalXP: 2500,
    milestones: [
      {
        id: 'web-foundations',
        title: 'Web Foundations',
        description: 'Master the building blocks of the web',
        achievement: {
          id: 'web-foundations-complete',
          title: 'Foundation Builder',
          description: 'Completed Web Foundations milestone',
          icon: '🏗️',
          xpBonus: 100,
        },
        steps: [
          {
            id: 'html-basics',
            title: 'HTML Fundamentals',
            description: 'Learn semantic HTML5, forms, accessibility, and document structure.',
            xp: 100,
            estimatedHours: 10,
            resources: [
              { title: 'MDN HTML Guide', url: 'https://developer.mozilla.org/en-US/docs/Learn/HTML', type: 'article' },
              { title: 'HTML Crash Course', url: 'https://www.youtube.com/watch?v=UB1O30fR-EE', type: 'video' },
            ],
          },
          {
            id: 'css-basics',
            title: 'CSS Styling',
            description: 'Master CSS selectors, flexbox, grid, animations, and responsive design.',
            xp: 150,
            estimatedHours: 15,
            resources: [
              { title: 'CSS-Tricks Flexbox Guide', url: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/', type: 'article' },
              { title: 'CSS Grid Complete Guide', url: 'https://css-tricks.com/snippets/css/complete-guide-grid/', type: 'article' },
            ],
          },
          {
            id: 'js-fundamentals',
            title: 'JavaScript Fundamentals',
            description: 'Learn JavaScript syntax, DOM manipulation, events, and ES6+ features.',
            xp: 200,
            estimatedHours: 25,
            resources: [
              { title: 'JavaScript.info', url: 'https://javascript.info/', type: 'article' },
              { title: 'Eloquent JavaScript', url: 'https://eloquentjavascript.net/', type: 'book' },
            ],
          },
        ],
      },
      {
        id: 'frontend-frameworks',
        title: 'Frontend Frameworks',
        description: 'Learn modern frontend frameworks and libraries',
        achievement: {
          id: 'frontend-frameworks-complete',
          title: 'Framework Master',
          description: 'Completed Frontend Frameworks milestone',
          icon: '⚛️',
          xpBonus: 150,
        },
        steps: [
          {
            id: 'react-basics',
            title: 'React Fundamentals',
            description: 'Learn React components, hooks, state management, and lifecycle.',
            xp: 200,
            estimatedHours: 20,
            resources: [
              { title: 'React Official Docs', url: 'https://react.dev/', type: 'article' },
              { title: 'React Tutorial', url: 'https://react.dev/learn', type: 'course' },
            ],
          },
          {
            id: 'nextjs-basics',
            title: 'Next.js Framework',
            description: 'Build full-stack applications with Next.js, routing, and SSR/SSG.',
            xp: 200,
            estimatedHours: 20,
            resources: [
              { title: 'Next.js Documentation', url: 'https://nextjs.org/docs', type: 'article' },
              { title: 'Next.js Learn', url: 'https://nextjs.org/learn', type: 'course' },
            ],
          },
          {
            id: 'state-management',
            title: 'State Management',
            description: 'Learn Redux, Zustand, or Context API for complex state management.',
            xp: 150,
            estimatedHours: 15,
            resources: [
              { title: 'Redux Toolkit', url: 'https://redux-toolkit.js.org/', type: 'article' },
              { title: 'Zustand Docs', url: 'https://zustand-demo.pmnd.rs/', type: 'article' },
            ],
          },
        ],
      },
      {
        id: 'backend-basics',
        title: 'Backend Development',
        description: 'Learn server-side programming and databases',
        achievement: {
          id: 'backend-basics-complete',
          title: 'Full Stack Ready',
          description: 'Completed Backend Development milestone',
          icon: '🖥️',
          xpBonus: 200,
        },
        steps: [
          {
            id: 'nodejs-express',
            title: 'Node.js & Express',
            description: 'Build RESTful APIs with Node.js and Express framework.',
            xp: 200,
            estimatedHours: 20,
            resources: [
              { title: 'Express.js Guide', url: 'https://expressjs.com/en/guide/routing.html', type: 'article' },
              { title: 'Node.js Best Practices', url: 'https://github.com/goldbergyoni/nodebestpractices', type: 'article' },
            ],
          },
          {
            id: 'databases',
            title: 'Databases',
            description: 'Learn SQL and NoSQL databases - PostgreSQL, MongoDB.',
            xp: 200,
            estimatedHours: 25,
            resources: [
              { title: 'PostgreSQL Tutorial', url: 'https://www.postgresqltutorial.com/', type: 'article' },
              { title: 'MongoDB University', url: 'https://university.mongodb.com/', type: 'course' },
            ],
          },
          {
            id: 'authentication',
            title: 'Authentication & Security',
            description: 'Implement JWT, OAuth, and security best practices.',
            xp: 150,
            estimatedHours: 15,
            resources: [
              { title: 'JWT Introduction', url: 'https://jwt.io/introduction', type: 'article' },
              { title: 'OWASP Top 10', url: 'https://owasp.org/www-project-top-ten/', type: 'article' },
            ],
          },
        ],
      },
      {
        id: 'deployment',
        title: 'Deployment & DevOps',
        description: 'Learn to deploy and maintain web applications',
        achievement: {
          id: 'deployment-complete',
          title: 'Ship It!',
          description: 'Completed Deployment & DevOps milestone',
          icon: '🚀',
          xpBonus: 200,
        },
        steps: [
          {
            id: 'git-github',
            title: 'Git & GitHub',
            description: 'Master version control, branching, and collaboration workflows.',
            xp: 100,
            estimatedHours: 10,
            resources: [
              { title: 'Git Documentation', url: 'https://git-scm.com/doc', type: 'article' },
              { title: 'GitHub Skills', url: 'https://skills.github.com/', type: 'course' },
            ],
          },
          {
            id: 'cloud-deployment',
            title: 'Cloud Deployment',
            description: 'Deploy applications on Vercel, AWS, or similar platforms.',
            xp: 150,
            estimatedHours: 15,
            resources: [
              { title: 'Vercel Docs', url: 'https://vercel.com/docs', type: 'article' },
              { title: 'AWS Free Tier', url: 'https://aws.amazon.com/free/', type: 'tool' },
            ],
          },
          {
            id: 'cicd',
            title: 'CI/CD Pipelines',
            description: 'Set up automated testing and deployment pipelines.',
            xp: 150,
            estimatedHours: 15,
            resources: [
              { title: 'GitHub Actions', url: 'https://docs.github.com/en/actions', type: 'article' },
              { title: 'CI/CD Best Practices', url: 'https://www.atlassian.com/continuous-delivery/principles/continuous-integration-vs-delivery-vs-deployment', type: 'article' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'data-science',
    title: 'Data Science',
    description: 'Analyze data, build models, and extract meaningful insights from complex datasets.',
    icon: '📊',
    color: '#10B981',
    totalXP: 2600,
    milestones: [
      {
        id: 'python-foundations',
        title: 'Python Foundations',
        description: 'Master Python programming for data analysis',
        achievement: {
          id: 'python-foundations-complete',
          title: 'Python Pioneer',
          description: 'Completed Python Foundations milestone',
          icon: '🐍',
          xpBonus: 100,
        },
        steps: [
          {
            id: 'python-basics',
            title: 'Python Basics',
            description: 'Learn Python syntax, data structures, functions, and OOP.',
            xp: 150,
            estimatedHours: 20,
            resources: [
              { title: 'Python Official Tutorial', url: 'https://docs.python.org/3/tutorial/', type: 'article' },
              { title: 'Automate the Boring Stuff', url: 'https://automatetheboringstuff.com/', type: 'book' },
            ],
          },
          {
            id: 'numpy-pandas',
            title: 'NumPy & Pandas',
            description: 'Data manipulation and numerical computing with Python libraries.',
            xp: 200,
            estimatedHours: 25,
            resources: [
              { title: 'NumPy Quickstart', url: 'https://numpy.org/doc/stable/user/quickstart.html', type: 'article' },
              { title: 'Pandas Documentation', url: 'https://pandas.pydata.org/docs/getting_started/', type: 'article' },
            ],
          },
        ],
      },
      {
        id: 'data-visualization',
        title: 'Data Visualization',
        description: 'Create compelling visualizations to communicate insights',
        achievement: {
          id: 'data-viz-complete',
          title: 'Visual Storyteller',
          description: 'Completed Data Visualization milestone',
          icon: '📈',
          xpBonus: 150,
        },
        steps: [
          {
            id: 'matplotlib-seaborn',
            title: 'Matplotlib & Seaborn',
            description: 'Create static visualizations and statistical plots.',
            xp: 150,
            estimatedHours: 15,
            resources: [
              { title: 'Matplotlib Tutorials', url: 'https://matplotlib.org/stable/tutorials/', type: 'article' },
              { title: 'Seaborn Tutorial', url: 'https://seaborn.pydata.org/tutorial.html', type: 'article' },
            ],
          },
          {
            id: 'plotly-dash',
            title: 'Interactive Dashboards',
            description: 'Build interactive visualizations with Plotly and Dash.',
            xp: 150,
            estimatedHours: 15,
            resources: [
              { title: 'Plotly Python', url: 'https://plotly.com/python/', type: 'article' },
              { title: 'Dash Tutorial', url: 'https://dash.plotly.com/', type: 'article' },
            ],
          },
        ],
      },
      {
        id: 'statistics-ml',
        title: 'Statistics & Machine Learning',
        description: 'Learn statistical methods and ML algorithms',
        achievement: {
          id: 'stats-ml-complete',
          title: 'Data Scientist',
          description: 'Completed Statistics & ML milestone',
          icon: '🔬',
          xpBonus: 200,
        },
        steps: [
          {
            id: 'statistics',
            title: 'Statistics Fundamentals',
            description: 'Probability, hypothesis testing, regression, and statistical inference.',
            xp: 200,
            estimatedHours: 30,
            resources: [
              { title: 'Khan Academy Statistics', url: 'https://www.khanacademy.org/math/statistics-probability', type: 'course' },
              { title: 'StatQuest', url: 'https://www.youtube.com/c/joshstarmer', type: 'video' },
            ],
          },
          {
            id: 'scikit-learn',
            title: 'Scikit-Learn',
            description: 'Implement ML algorithms: classification, regression, clustering.',
            xp: 200,
            estimatedHours: 25,
            resources: [
              { title: 'Scikit-Learn Tutorials', url: 'https://scikit-learn.org/stable/tutorial/', type: 'article' },
              { title: 'ML Course by Andrew Ng', url: 'https://www.coursera.org/learn/machine-learning', type: 'course' },
            ],
          },
          {
            id: 'feature-engineering',
            title: 'Feature Engineering',
            description: 'Transform raw data into meaningful features for ML models.',
            xp: 150,
            estimatedHours: 20,
            resources: [
              { title: 'Feature Engineering for ML', url: 'https://www.kaggle.com/learn/feature-engineering', type: 'course' },
            ],
          },
        ],
      },
      {
        id: 'big-data',
        title: 'Big Data & Cloud',
        description: 'Work with large-scale data systems',
        achievement: {
          id: 'big-data-complete',
          title: 'Big Data Expert',
          description: 'Completed Big Data & Cloud milestone',
          icon: '☁️',
          xpBonus: 200,
        },
        steps: [
          {
            id: 'sql-advanced',
            title: 'Advanced SQL',
            description: 'Complex queries, window functions, and query optimization.',
            xp: 150,
            estimatedHours: 20,
            resources: [
              { title: 'Mode SQL Tutorial', url: 'https://mode.com/sql-tutorial/', type: 'article' },
              { title: 'SQL Performance', url: 'https://use-the-index-luke.com/', type: 'book' },
            ],
          },
          {
            id: 'spark-basics',
            title: 'Apache Spark',
            description: 'Distributed data processing with PySpark.',
            xp: 200,
            estimatedHours: 25,
            resources: [
              { title: 'Spark Documentation', url: 'https://spark.apache.org/docs/latest/', type: 'article' },
              { title: 'PySpark Tutorial', url: 'https://spark.apache.org/docs/latest/api/python/', type: 'article' },
            ],
          },
          {
            id: 'cloud-data',
            title: 'Cloud Data Platforms',
            description: 'AWS/GCP data services: S3, BigQuery, Redshift.',
            xp: 150,
            estimatedHours: 20,
            resources: [
              { title: 'BigQuery Basics', url: 'https://cloud.google.com/bigquery/docs/introduction', type: 'article' },
              { title: 'AWS Data Analytics', url: 'https://aws.amazon.com/big-data/getting-started/', type: 'article' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    description: 'Build intelligent systems using deep learning, NLP, and computer vision.',
    icon: '🤖',
    color: '#8B5CF6',
    totalXP: 3000,
    milestones: [
      {
        id: 'ml-foundations',
        title: 'ML Foundations',
        description: 'Build a strong foundation in machine learning',
        achievement: {
          id: 'ml-foundations-complete',
          title: 'ML Apprentice',
          description: 'Completed ML Foundations milestone',
          icon: '🎓',
          xpBonus: 150,
        },
        steps: [
          {
            id: 'math-foundations',
            title: 'Mathematics for ML',
            description: 'Linear algebra, calculus, and probability theory.',
            xp: 200,
            estimatedHours: 40,
            resources: [
              { title: 'Mathematics for ML', url: 'https://mml-book.github.io/', type: 'book' },
              { title: '3Blue1Brown Linear Algebra', url: 'https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab', type: 'video' },
            ],
          },
          {
            id: 'ml-algorithms',
            title: 'ML Algorithms Deep Dive',
            description: 'Understand algorithms from theory to implementation.',
            xp: 250,
            estimatedHours: 35,
            resources: [
              { title: 'Hands-On ML Book', url: 'https://www.oreilly.com/library/view/hands-on-machine-learning/9781492032632/', type: 'book' },
              { title: 'ML Mastery', url: 'https://machinelearningmastery.com/', type: 'article' },
            ],
          },
        ],
      },
      {
        id: 'deep-learning',
        title: 'Deep Learning',
        description: 'Master neural networks and deep learning frameworks',
        achievement: {
          id: 'deep-learning-complete',
          title: 'Neural Network Ninja',
          description: 'Completed Deep Learning milestone',
          icon: '🧠',
          xpBonus: 200,
        },
        steps: [
          {
            id: 'neural-networks',
            title: 'Neural Networks',
            description: 'Understand architectures: CNNs, RNNs, Transformers.',
            xp: 250,
            estimatedHours: 30,
            resources: [
              { title: 'Deep Learning Book', url: 'https://www.deeplearningbook.org/', type: 'book' },
              { title: 'Neural Networks from Scratch', url: 'https://nnfs.io/', type: 'book' },
            ],
          },
          {
            id: 'pytorch-tensorflow',
            title: 'PyTorch / TensorFlow',
            description: 'Build and train models with modern frameworks.',
            xp: 250,
            estimatedHours: 35,
            resources: [
              { title: 'PyTorch Tutorials', url: 'https://pytorch.org/tutorials/', type: 'article' },
              { title: 'TensorFlow Guide', url: 'https://www.tensorflow.org/guide', type: 'article' },
            ],
          },
          {
            id: 'model-optimization',
            title: 'Model Optimization',
            description: 'Hyperparameter tuning, regularization, and optimization techniques.',
            xp: 200,
            estimatedHours: 25,
            resources: [
              { title: 'Optuna', url: 'https://optuna.org/', type: 'tool' },
              { title: 'Weights & Biases', url: 'https://wandb.ai/', type: 'tool' },
            ],
          },
        ],
      },
      {
        id: 'specialized-ai',
        title: 'Specialized AI',
        description: 'Dive into NLP, Computer Vision, and Generative AI',
        achievement: {
          id: 'specialized-ai-complete',
          title: 'AI Specialist',
          description: 'Completed Specialized AI milestone',
          icon: '🎯',
          xpBonus: 250,
        },
        steps: [
          {
            id: 'nlp',
            title: 'Natural Language Processing',
            description: 'Text processing, embeddings, transformers, LLMs.',
            xp: 300,
            estimatedHours: 40,
            resources: [
              { title: 'Hugging Face Course', url: 'https://huggingface.co/course', type: 'course' },
              { title: 'NLP with PyTorch', url: 'https://pytorch.org/tutorials/intermediate/seq2seq_translation_tutorial.html', type: 'article' },
            ],
          },
          {
            id: 'computer-vision',
            title: 'Computer Vision',
            description: 'Image classification, object detection, segmentation.',
            xp: 250,
            estimatedHours: 35,
            resources: [
              { title: 'PyTorch Vision', url: 'https://pytorch.org/vision/', type: 'article' },
              { title: 'CS231n Stanford', url: 'http://cs231n.stanford.edu/', type: 'course' },
            ],
          },
          {
            id: 'generative-ai',
            title: 'Generative AI',
            description: 'GANs, VAEs, Diffusion Models, and prompt engineering.',
            xp: 300,
            estimatedHours: 40,
            resources: [
              { title: 'Generative AI Course', url: 'https://www.deeplearning.ai/courses/generative-ai-with-llms/', type: 'course' },
              { title: 'Stable Diffusion', url: 'https://stability.ai/', type: 'tool' },
            ],
          },
        ],
      },
      {
        id: 'mlops',
        title: 'MLOps',
        description: 'Deploy and maintain ML systems in production',
        achievement: {
          id: 'mlops-complete',
          title: 'MLOps Engineer',
          description: 'Completed MLOps milestone',
          icon: '⚙️',
          xpBonus: 200,
        },
        steps: [
          {
            id: 'ml-deployment',
            title: 'Model Deployment',
            description: 'Deploy models with FastAPI, Docker, and cloud services.',
            xp: 200,
            estimatedHours: 25,
            resources: [
              { title: 'FastAPI ML', url: 'https://fastapi.tiangolo.com/', type: 'article' },
              { title: 'Docker for ML', url: 'https://docs.docker.com/', type: 'article' },
            ],
          },
          {
            id: 'ml-pipelines',
            title: 'ML Pipelines',
            description: 'Build reproducible ML workflows with MLflow, Kubeflow.',
            xp: 200,
            estimatedHours: 30,
            resources: [
              { title: 'MLflow Documentation', url: 'https://mlflow.org/', type: 'article' },
              { title: 'Kubeflow', url: 'https://www.kubeflow.org/', type: 'article' },
            ],
          },
          {
            id: 'model-monitoring',
            title: 'Model Monitoring',
            description: 'Monitor model performance, detect drift, and retrain.',
            xp: 150,
            estimatedHours: 20,
            resources: [
              { title: 'Evidently AI', url: 'https://www.evidentlyai.com/', type: 'tool' },
              { title: 'Great Expectations', url: 'https://greatexpectations.io/', type: 'tool' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Protect systems and networks from digital attacks and vulnerabilities.',
    icon: '🔒',
    color: '#EF4444',
    totalXP: 2700,
    milestones: [
      {
        id: 'security-fundamentals',
        title: 'Security Fundamentals',
        description: 'Learn the basics of information security',
        achievement: {
          id: 'security-fundamentals-complete',
          title: 'Security Novice',
          description: 'Completed Security Fundamentals milestone',
          icon: '🛡️',
          xpBonus: 100,
        },
        steps: [
          {
            id: 'security-concepts',
            title: 'Security Concepts',
            description: 'CIA triad, threat modeling, risk assessment basics.',
            xp: 150,
            estimatedHours: 15,
            resources: [
              { title: 'OWASP Foundation', url: 'https://owasp.org/', type: 'article' },
              { title: 'Cybersecurity Basics', url: 'https://www.cisco.com/c/en/us/products/security/what-is-cybersecurity.html', type: 'article' },
            ],
          },
          {
            id: 'networking-basics',
            title: 'Networking Fundamentals',
            description: 'TCP/IP, DNS, HTTP, firewalls, and network protocols.',
            xp: 200,
            estimatedHours: 25,
            resources: [
              { title: 'CompTIA Network+', url: 'https://www.comptia.org/certifications/network', type: 'course' },
              { title: 'Computer Networking Course', url: 'https://www.youtube.com/watch?v=qiQR5rTSshw', type: 'video' },
            ],
          },
          {
            id: 'linux-basics',
            title: 'Linux Administration',
            description: 'Command line, file systems, permissions, and services.',
            xp: 150,
            estimatedHours: 20,
            resources: [
              { title: 'Linux Journey', url: 'https://linuxjourney.com/', type: 'course' },
              { title: 'OverTheWire Bandit', url: 'https://overthewire.org/wargames/bandit/', type: 'course' },
            ],
          },
        ],
      },
      {
        id: 'offensive-security',
        title: 'Offensive Security',
        description: 'Learn ethical hacking and penetration testing',
        achievement: {
          id: 'offensive-security-complete',
          title: 'Ethical Hacker',
          description: 'Completed Offensive Security milestone',
          icon: '⚔️',
          xpBonus: 200,
        },
        steps: [
          {
            id: 'web-security',
            title: 'Web Application Security',
            description: 'OWASP Top 10, XSS, SQL injection, CSRF attacks.',
            xp: 200,
            estimatedHours: 25,
            resources: [
              { title: 'PortSwigger Web Security', url: 'https://portswigger.net/web-security', type: 'course' },
              { title: 'OWASP Top 10', url: 'https://owasp.org/www-project-top-ten/', type: 'article' },
            ],
          },
          {
            id: 'penetration-testing',
            title: 'Penetration Testing',
            description: 'Reconnaissance, scanning, exploitation, and reporting.',
            xp: 250,
            estimatedHours: 35,
            resources: [
              { title: 'HackTheBox', url: 'https://www.hackthebox.com/', type: 'tool' },
              { title: 'TryHackMe', url: 'https://tryhackme.com/', type: 'course' },
            ],
          },
          {
            id: 'tools-mastery',
            title: 'Security Tools',
            description: 'Burp Suite, Nmap, Metasploit, Wireshark.',
            xp: 200,
            estimatedHours: 25,
            resources: [
              { title: 'Kali Linux Tools', url: 'https://www.kali.org/tools/', type: 'tool' },
              { title: 'Nmap Documentation', url: 'https://nmap.org/docs.html', type: 'article' },
            ],
          },
        ],
      },
      {
        id: 'defensive-security',
        title: 'Defensive Security',
        description: 'Protect systems and respond to incidents',
        achievement: {
          id: 'defensive-security-complete',
          title: 'Blue Team Defender',
          description: 'Completed Defensive Security milestone',
          icon: '🔵',
          xpBonus: 200,
        },
        steps: [
          {
            id: 'soc-operations',
            title: 'SOC Operations',
            description: 'Security monitoring, SIEM, log analysis.',
            xp: 200,
            estimatedHours: 25,
            resources: [
              { title: 'Splunk Fundamentals', url: 'https://www.splunk.com/en_us/training.html', type: 'course' },
              { title: 'ELK Stack', url: 'https://www.elastic.co/what-is/elk-stack', type: 'article' },
            ],
          },
          {
            id: 'incident-response',
            title: 'Incident Response',
            description: 'Detection, containment, eradication, and recovery.',
            xp: 200,
            estimatedHours: 25,
            resources: [
              { title: 'NIST Incident Response', url: 'https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-61r2.pdf', type: 'article' },
              { title: 'SANS Incident Handling', url: 'https://www.sans.org/cyber-security-courses/incident-handler/', type: 'course' },
            ],
          },
          {
            id: 'forensics',
            title: 'Digital Forensics',
            description: 'Evidence collection, analysis, and chain of custody.',
            xp: 200,
            estimatedHours: 30,
            resources: [
              { title: 'Autopsy Forensics', url: 'https://www.autopsy.com/', type: 'tool' },
              { title: 'DFIR Training', url: 'https://www.dfir.training/', type: 'course' },
            ],
          },
        ],
      },
      {
        id: 'advanced-security',
        title: 'Advanced Security',
        description: 'Master cloud security and advanced topics',
        achievement: {
          id: 'advanced-security-complete',
          title: 'Security Expert',
          description: 'Completed Advanced Security milestone',
          icon: '🏆',
          xpBonus: 250,
        },
        steps: [
          {
            id: 'cloud-security',
            title: 'Cloud Security',
            description: 'AWS/Azure/GCP security, IAM, encryption, compliance.',
            xp: 200,
            estimatedHours: 30,
            resources: [
              { title: 'AWS Security Best Practices', url: 'https://docs.aws.amazon.com/security/', type: 'article' },
              { title: 'Cloud Security Alliance', url: 'https://cloudsecurityalliance.org/', type: 'article' },
            ],
          },
          {
            id: 'secure-development',
            title: 'Secure Development',
            description: 'DevSecOps, secure coding, code review, SAST/DAST.',
            xp: 200,
            estimatedHours: 25,
            resources: [
              { title: 'OWASP Secure Coding', url: 'https://owasp.org/www-project-secure-coding-practices-quick-reference-guide/', type: 'article' },
              { title: 'Snyk', url: 'https://snyk.io/', type: 'tool' },
            ],
          },
          {
            id: 'certifications',
            title: 'Security Certifications',
            description: 'Prepare for CEH, OSCP, or Security+ certifications.',
            xp: 150,
            estimatedHours: 50,
            resources: [
              { title: 'CompTIA Security+', url: 'https://www.comptia.org/certifications/security', type: 'course' },
              { title: 'OSCP', url: 'https://www.offensive-security.com/pwk-oscp/', type: 'course' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'mobile-development',
    title: 'Mobile Development',
    description: 'Build native and cross-platform mobile applications for iOS and Android.',
    icon: '📱',
    color: '#F59E0B',
    totalXP: 2400,
    milestones: [
      {
        id: 'mobile-foundations',
        title: 'Mobile Foundations',
        description: 'Understand mobile development basics',
        achievement: {
          id: 'mobile-foundations-complete',
          title: 'Mobile Beginner',
          description: 'Completed Mobile Foundations milestone',
          icon: '📲',
          xpBonus: 100,
        },
        steps: [
          {
            id: 'mobile-ui-ux',
            title: 'Mobile UI/UX',
            description: 'Mobile design patterns, gestures, and user experience.',
            xp: 150,
            estimatedHours: 15,
            resources: [
              { title: 'Material Design', url: 'https://material.io/design', type: 'article' },
              { title: 'Human Interface Guidelines', url: 'https://developer.apple.com/design/human-interface-guidelines/', type: 'article' },
            ],
          },
          {
            id: 'mobile-architecture',
            title: 'Mobile Architecture',
            description: 'MVVM, Clean Architecture, and state management.',
            xp: 150,
            estimatedHours: 20,
            resources: [
              { title: 'Android Architecture Guide', url: 'https://developer.android.com/topic/architecture', type: 'article' },
              { title: 'iOS App Architecture', url: 'https://developer.apple.com/documentation/uikit/app_and_scenes', type: 'article' },
            ],
          },
        ],
      },
      {
        id: 'cross-platform',
        title: 'Cross-Platform Development',
        description: 'Build apps for multiple platforms with one codebase',
        achievement: {
          id: 'cross-platform-complete',
          title: 'Cross-Platform Developer',
          description: 'Completed Cross-Platform milestone',
          icon: '🔄',
          xpBonus: 200,
        },
        steps: [
          {
            id: 'react-native',
            title: 'React Native',
            description: 'Build mobile apps with React Native and Expo.',
            xp: 250,
            estimatedHours: 35,
            resources: [
              { title: 'React Native Docs', url: 'https://reactnative.dev/', type: 'article' },
              { title: 'Expo Documentation', url: 'https://docs.expo.dev/', type: 'article' },
            ],
          },
          {
            id: 'flutter',
            title: 'Flutter',
            description: 'Google\'s UI toolkit for building natively compiled apps.',
            xp: 250,
            estimatedHours: 35,
            resources: [
              { title: 'Flutter Documentation', url: 'https://flutter.dev/docs', type: 'article' },
              { title: 'Flutter Codelabs', url: 'https://codelabs.developers.google.com/?cat=Flutter', type: 'course' },
            ],
          },
        ],
      },
      {
        id: 'native-android',
        title: 'Native Android',
        description: 'Build native Android applications',
        achievement: {
          id: 'native-android-complete',
          title: 'Android Developer',
          description: 'Completed Native Android milestone',
          icon: '🤖',
          xpBonus: 200,
        },
        steps: [
          {
            id: 'kotlin-basics',
            title: 'Kotlin Programming',
            description: 'Modern Android development with Kotlin.',
            xp: 200,
            estimatedHours: 25,
            resources: [
              { title: 'Kotlin Official Docs', url: 'https://kotlinlang.org/docs/home.html', type: 'article' },
              { title: 'Android Kotlin Fundamentals', url: 'https://developer.android.com/courses/kotlin-fundamentals/course', type: 'course' },
            ],
          },
          {
            id: 'jetpack-compose',
            title: 'Jetpack Compose',
            description: 'Modern Android UI toolkit for building native UI.',
            xp: 200,
            estimatedHours: 30,
            resources: [
              { title: 'Compose Tutorial', url: 'https://developer.android.com/jetpack/compose/tutorial', type: 'article' },
              { title: 'Jetpack Compose Pathway', url: 'https://developer.android.com/courses/jetpack-compose/course', type: 'course' },
            ],
          },
        ],
      },
      {
        id: 'native-ios',
        title: 'Native iOS',
        description: 'Build native iOS applications',
        achievement: {
          id: 'native-ios-complete',
          title: 'iOS Developer',
          description: 'Completed Native iOS milestone',
          icon: '🍎',
          xpBonus: 200,
        },
        steps: [
          {
            id: 'swift-basics',
            title: 'Swift Programming',
            description: 'iOS development with Swift programming language.',
            xp: 200,
            estimatedHours: 25,
            resources: [
              { title: 'Swift Documentation', url: 'https://docs.swift.org/swift-book/', type: 'article' },
              { title: 'Swift Playgrounds', url: 'https://www.apple.com/swift/playgrounds/', type: 'tool' },
            ],
          },
          {
            id: 'swiftui',
            title: 'SwiftUI',
            description: 'Build beautiful iOS apps with SwiftUI framework.',
            xp: 200,
            estimatedHours: 30,
            resources: [
              { title: 'SwiftUI Tutorials', url: 'https://developer.apple.com/tutorials/swiftui', type: 'article' },
              { title: '100 Days of SwiftUI', url: 'https://www.hackingwithswift.com/100/swiftui', type: 'course' },
            ],
          },
        ],
      },
      {
        id: 'mobile-publishing',
        title: 'App Publishing',
        description: 'Launch your apps to the world',
        achievement: {
          id: 'mobile-publishing-complete',
          title: 'Published Developer',
          description: 'Completed App Publishing milestone',
          icon: '🚀',
          xpBonus: 150,
        },
        steps: [
          {
            id: 'app-store',
            title: 'App Store Submission',
            description: 'Prepare and submit apps to App Store and Play Store.',
            xp: 150,
            estimatedHours: 15,
            resources: [
              { title: 'App Store Review Guidelines', url: 'https://developer.apple.com/app-store/review/guidelines/', type: 'article' },
              { title: 'Play Console Help', url: 'https://support.google.com/googleplay/android-developer/', type: 'article' },
            ],
          },
          {
            id: 'mobile-analytics',
            title: 'Mobile Analytics & Monitoring',
            description: 'Track app performance and user behavior.',
            xp: 150,
            estimatedHours: 15,
            resources: [
              { title: 'Firebase Analytics', url: 'https://firebase.google.com/docs/analytics', type: 'article' },
              { title: 'Crashlytics', url: 'https://firebase.google.com/docs/crashlytics', type: 'tool' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps',
    description: 'Master cloud infrastructure, automation, and continuous delivery practices.',
    icon: '☁️',
    color: '#06B6D4',
    totalXP: 2800,
    milestones: [
      {
        id: 'cloud-fundamentals',
        title: 'Cloud Fundamentals',
        description: 'Understand cloud computing concepts',
        achievement: {
          id: 'cloud-fundamentals-complete',
          title: 'Cloud Novice',
          description: 'Completed Cloud Fundamentals milestone',
          icon: '🌤️',
          xpBonus: 100,
        },
        steps: [
          {
            id: 'cloud-concepts',
            title: 'Cloud Computing Concepts',
            description: 'IaaS, PaaS, SaaS, cloud models and providers.',
            xp: 150,
            estimatedHours: 15,
            resources: [
              { title: 'AWS Cloud Practitioner', url: 'https://aws.amazon.com/certification/certified-cloud-practitioner/', type: 'course' },
              { title: 'Cloud Computing 101', url: 'https://azure.microsoft.com/en-us/resources/cloud-computing-dictionary/what-is-cloud-computing/', type: 'article' },
            ],
          },
          {
            id: 'aws-basics',
            title: 'AWS Fundamentals',
            description: 'EC2, S3, VPC, IAM, and core AWS services.',
            xp: 200,
            estimatedHours: 30,
            resources: [
              { title: 'AWS Training', url: 'https://aws.amazon.com/training/', type: 'course' },
              { title: 'AWS Documentation', url: 'https://docs.aws.amazon.com/', type: 'article' },
            ],
          },
        ],
      },
      {
        id: 'containers',
        title: 'Containers & Orchestration',
        description: 'Master containerization technologies',
        achievement: {
          id: 'containers-complete',
          title: 'Container Expert',
          description: 'Completed Containers milestone',
          icon: '📦',
          xpBonus: 200,
        },
        steps: [
          {
            id: 'docker',
            title: 'Docker',
            description: 'Containerization, images, volumes, and networking.',
            xp: 200,
            estimatedHours: 25,
            resources: [
              { title: 'Docker Documentation', url: 'https://docs.docker.com/', type: 'article' },
              { title: 'Docker Tutorial', url: 'https://docker-curriculum.com/', type: 'course' },
            ],
          },
          {
            id: 'kubernetes',
            title: 'Kubernetes',
            description: 'Container orchestration, pods, services, deployments.',
            xp: 300,
            estimatedHours: 45,
            resources: [
              { title: 'Kubernetes Documentation', url: 'https://kubernetes.io/docs/', type: 'article' },
              { title: 'Kubernetes Tutorial', url: 'https://kubernetes.io/docs/tutorials/', type: 'course' },
            ],
          },
          {
            id: 'helm',
            title: 'Helm Charts',
            description: 'Package management for Kubernetes applications.',
            xp: 150,
            estimatedHours: 15,
            resources: [
              { title: 'Helm Documentation', url: 'https://helm.sh/docs/', type: 'article' },
              { title: 'Artifact Hub', url: 'https://artifacthub.io/', type: 'tool' },
            ],
          },
        ],
      },
      {
        id: 'infrastructure-as-code',
        title: 'Infrastructure as Code',
        description: 'Automate infrastructure provisioning',
        achievement: {
          id: 'iac-complete',
          title: 'Infrastructure Automator',
          description: 'Completed IaC milestone',
          icon: '🔧',
          xpBonus: 200,
        },
        steps: [
          {
            id: 'terraform',
            title: 'Terraform',
            description: 'Provision and manage cloud infrastructure.',
            xp: 250,
            estimatedHours: 35,
            resources: [
              { title: 'Terraform Documentation', url: 'https://developer.hashicorp.com/terraform/docs', type: 'article' },
              { title: 'Terraform Tutorials', url: 'https://developer.hashicorp.com/terraform/tutorials', type: 'course' },
            ],
          },
          {
            id: 'ansible',
            title: 'Ansible',
            description: 'Configuration management and automation.',
            xp: 200,
            estimatedHours: 25,
            resources: [
              { title: 'Ansible Documentation', url: 'https://docs.ansible.com/', type: 'article' },
              { title: 'Ansible Galaxy', url: 'https://galaxy.ansible.com/', type: 'tool' },
            ],
          },
        ],
      },
      {
        id: 'cicd-advanced',
        title: 'CI/CD Mastery',
        description: 'Build advanced deployment pipelines',
        achievement: {
          id: 'cicd-advanced-complete',
          title: 'Pipeline Master',
          description: 'Completed CI/CD Mastery milestone',
          icon: '🔄',
          xpBonus: 200,
        },
        steps: [
          {
            id: 'github-actions-advanced',
            title: 'GitHub Actions',
            description: 'Complex workflows, reusable actions, and secrets.',
            xp: 200,
            estimatedHours: 25,
            resources: [
              { title: 'GitHub Actions Docs', url: 'https://docs.github.com/en/actions', type: 'article' },
              { title: 'Actions Marketplace', url: 'https://github.com/marketplace?type=actions', type: 'tool' },
            ],
          },
          {
            id: 'jenkins',
            title: 'Jenkins',
            description: 'Build automation server and pipeline configuration.',
            xp: 200,
            estimatedHours: 25,
            resources: [
              { title: 'Jenkins Documentation', url: 'https://www.jenkins.io/doc/', type: 'article' },
              { title: 'Jenkins Pipeline', url: 'https://www.jenkins.io/doc/book/pipeline/', type: 'article' },
            ],
          },
          {
            id: 'argocd',
            title: 'ArgoCD & GitOps',
            description: 'Declarative continuous delivery for Kubernetes.',
            xp: 200,
            estimatedHours: 25,
            resources: [
              { title: 'ArgoCD Documentation', url: 'https://argo-cd.readthedocs.io/', type: 'article' },
              { title: 'GitOps Principles', url: 'https://www.gitops.tech/', type: 'article' },
            ],
          },
        ],
      },
      {
        id: 'observability',
        title: 'Observability',
        description: 'Monitor and troubleshoot distributed systems',
        achievement: {
          id: 'observability-complete',
          title: 'Observability Expert',
          description: 'Completed Observability milestone',
          icon: '👁️',
          xpBonus: 200,
        },
        steps: [
          {
            id: 'monitoring',
            title: 'Monitoring & Metrics',
            description: 'Prometheus, Grafana, and metric collection.',
            xp: 200,
            estimatedHours: 25,
            resources: [
              { title: 'Prometheus Documentation', url: 'https://prometheus.io/docs/', type: 'article' },
              { title: 'Grafana Tutorials', url: 'https://grafana.com/tutorials/', type: 'course' },
            ],
          },
          {
            id: 'logging',
            title: 'Centralized Logging',
            description: 'ELK Stack, Loki, and log aggregation.',
            xp: 150,
            estimatedHours: 20,
            resources: [
              { title: 'ELK Stack Guide', url: 'https://www.elastic.co/guide/', type: 'article' },
              { title: 'Grafana Loki', url: 'https://grafana.com/oss/loki/', type: 'tool' },
            ],
          },
          {
            id: 'tracing',
            title: 'Distributed Tracing',
            description: 'Jaeger, Zipkin, and OpenTelemetry.',
            xp: 150,
            estimatedHours: 20,
            resources: [
              { title: 'OpenTelemetry', url: 'https://opentelemetry.io/', type: 'article' },
              { title: 'Jaeger Documentation', url: 'https://www.jaegertracing.io/docs/', type: 'article' },
            ],
          },
        ],
      },
    ],
  },
];

export function getCareerPath(id: string): CareerPath | undefined {
  return careerPaths.find((path) => path.id === id);
}

export function getAllSteps(careerPath: CareerPath) {
  return careerPath.milestones.flatMap((milestone) => milestone.steps);
}

export function calculateTotalXP(careerPath: CareerPath): number {
  const stepsXP = getAllSteps(careerPath).reduce((sum, step) => sum + step.xp, 0);
  const achievementsXP = careerPath.milestones.reduce(
    (sum, milestone) => sum + milestone.achievement.xpBonus,
    0
  );
  return stepsXP + achievementsXP;
}
