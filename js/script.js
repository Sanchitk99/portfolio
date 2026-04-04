const roles = [
    'Aspiring Software Engineer',
    'Aspiring AI/ML Engineer',
];

const projectData = [
    {
        id: 'weapon-detection',
        title: 'Weapon Detection System',
        description: 'End-to-end computer vision application that detects guns and knives in images using YOLOv8, with model training, inference, and a live Streamlit web interface.',
        full_explanation: 'This project implements the full ML workflow for object detection: dataset preparation, model training, multi-model inference for gun and knife detection, and web-based deployment for interactive prediction.',
        tech_stack: ['Python', 'YOLOv8', 'PyTorch', 'OpenCV', 'Streamlit'],
        features: [
            'Gun and knife object detection with bounding boxes and confidence scores',
            'Streamlit upload workflow for quick image-based inference',
            'Separate training/inference modules with reusable prediction utilities',
            'Transfer-learning based YOLOv8 pipeline for practical deployment',
        ],
        approach: 'I structured the solution into training, utility inference, and Streamlit application layers, then tuned confidence behavior and prediction flow so users can upload an image and get immediate visual detections.',
        results: 'Delivered a working YOLOv8-based detection app with clear UI outputs and reliable weapon localization suitable for demos, learning, and safety-focused CV experimentation.',
        tools_frameworks: ['Ultralytics', 'PyTorch', 'OpenCV', 'Streamlit', 'NumPy', 'Git'],
        github_link: 'https://github.com/Sanchitk99/weapon-detection',
        demo_link: '',
        preview_image: '',
    },
    {
        id: 'fix-my-campus',
        title: 'FixMyCampus',
        description: 'University-based ticketing platform that helps students and faculty report campus civic issues, track progress, and improve coordination between admin and maintenance departments.',
        full_explanation: 'FixMyCampus is a Node.js + SQLite system for university maintenance workflows, with role-based access for reporters, admin assignment to departments, department progress logs, and transparent reporter tracking from ticket creation to resolution.',
        tech_stack: ['Node.js', 'SQLite', 'Server-rendered HTML', 'JavaScript'],
        features: [
            'Role-based ticketing for student/faculty, admin, and department users',
            'Admin assignment, department-only progress updates, and full reporter timeline visibility',
            'False-update escalation, resolved-ticket feedback, and reopen request flow',
            'Email verification, password reset, and Microsoft Entra SSO with demo fallback',
        ],
        approach: 'I built it with a lightweight Node runtime using built-in node:http and node:sqlite, then structured authentication, role checks, ticket workflow, and profile management around clear campus user journeys.',
        results: 'Current build delivers an end-to-end working flow with seeded demo accounts, persistent SQLite storage, and smoke-test coverage across reporting, assignment, updates, escalation, feedback, and reopen actions.',
        tools_frameworks: ['node:http', 'node:sqlite', 'SQLite', 'Vanilla JavaScript', 'CSS', 'Git'],
        github_link: 'https://github.com/Sanchitk99/FixMyCampus',
        demo_link: '',
        preview_image: '',
    },
    {
        id: 'voice-assistant-chatbot',
        title: 'Python Voice Assistant Chatbot',
        description: 'Voice assistant built in Python that understands spoken commands, opens apps, performs web lookups, and responds with text-to-speech output.',
        full_explanation: 'This assistant combines speech recognition and response generation to execute common tasks like opening apps, searching web resources, and playing music.',
        tech_stack: ['Python', 'SpeechRecognition', 'pyttsx3', 'Wikipedia API'],
        features: [
            'Speech-to-text command recognition',
            'Text-to-speech conversational responses',
            'App launch and browser automation support',
            'Music playback and quick utility commands',
        ],
        approach: 'I built an intent-command mapping layer to classify voice inputs, then attached each intent to safe executable actions and output confirmations.',
        results: 'Delivered a functional desktop assistant prototype with fast response times for repeated command categories.',
        tools_frameworks: ['PyAudio', 'pyttsx3', 'Wikipedia API', 'OS utilities'],
        github_link: 'https://github.com/Sanchitk99/ChatBot',
        demo_link: '',
        preview_image: '',
    },
    {
        id: 'demand-forecasting',
        title: 'Smart Demand Forecasting & Shipment Delay Prediction',
        description: 'ML project for retail and logistics that forecasts demand and predicts shipment delays from real-world operational signals to reduce planning and delivery inefficiencies.',
        full_explanation: 'The solution combines machine learning models with a Uvicorn-served web dashboard to deliver operational demand predictions and shipment delay risk insights from business and logistics data.',
        tech_stack: ['Python', 'Machine Learning', 'Uvicorn', 'HTML/CSS/JS'],
        features: [
            'Demand forecasting for planning and stock-readiness decisions',
            'Shipment delay prediction for logistics risk visibility',
            'Web dashboard flow with landing/login and prediction pages',
            'CSV-driven analysis using project datasets and backend inference',
        ],
        approach: 'I built a data-to-dashboard pipeline with preprocessing and model inference in Python backend logic, then exposed predictions through a lightweight web interface served with Uvicorn.',
        results: 'The project demonstrates practical operational prediction outputs that support earlier action on uncertain demand and fragile supply-chain delays.',
        tools_frameworks: ['Python', 'Uvicorn', 'Pandas', 'scikit-learn', 'HTML', 'Git'],
        github_link: 'https://github.com/Sanchitk99/Smart-Demand-Forecasting-and-Shipment-Delay-Prediction',
        demo_link: '',
        preview_image: '',
    },
    {
        id: 'ids-dashboard',
        title: 'Intrusion Detection System (IDS) Dashboard',
        description: 'Real-time IDS dashboard that monitors system and network activity, applies ML-based threat classification, and visualizes risk levels, confidence scores, and anomalies.',
        full_explanation: 'This IDS combines preprocessing (encoders + scaler), a detection engine for attack probability, and a Flask dashboard for live monitoring, confidence scoring, anomaly visibility, and batch CSV analysis.',
        tech_stack: ['Python', 'Flask', 'Machine Learning', 'HTML/CSS/JS'],
        features: [
            'Real-time detection with Low/Medium/High risk classification and confidence scores',
            'Live system health, traffic behavior tracking, and anomaly-focused visual monitoring',
            'Attack simulation mode and historical panel for testing/analysis',
            'CSV batch upload pipeline for multi-row attack prediction',
        ],
        approach: 'I structured the app into data preprocessing, model inference, and dashboard layers so live telemetry and uploaded CSV data both flow through one consistent prediction pipeline.',
        results: 'Delivered a working educational IDS that makes model output actionable through real-time UI feedback, confidence metrics, and simulation-driven validation.',
        tools_frameworks: ['Flask', 'scikit-learn', 'Pandas', 'Gunicorn', 'Render', 'Git'],
        github_link: 'https://github.com/Sanchitk99/intrusion-detection',
        demo_link: '',
        preview_image: '',
    },
    {
        id: 'runoff-prediction',
        title: 'AI-Driven Runoff Prediction for Flood Forecasting',
        description: 'AI-based hydrology project using 31 years of Kasol basin data to forecast daily river discharge with ML/DL models for flood forecasting and climate resilience analysis.',
        full_explanation: 'This project builds and compares Linear Regression, Random Forest, XGBoost, and LSTM models for 1-day ahead runoff prediction, with dedicated analysis of extreme flow events and long-term climate resilience trends.',
        tech_stack: ['Python', 'scikit-learn', 'XGBoost', 'TensorFlow/Keras'],
        features: [
            'Time-series preprocessing on 1979-2009 daily data with lag/rolling/API hydrology features',
            'Model benchmarking across baseline ML and deep learning approaches',
            'Extreme-event evaluation using top discharge days and peak-flow error analysis',
            'Climate resilience study via yearly trend analysis and rainfall sensitivity scenarios',
        ],
        approach: 'I follow a chronological pipeline: clean and validate daily records, engineer hydrology-informed predictors, perform time-based train/test splits, then compare RF/XGBoost/LSTM on RMSE, MAE, R2, and NSE with extreme-event checks.',
        results: 'Current work is producing comparative performance insights for flood forecasting reliability and highlighting how model behavior changes under high-rainfall and peak-discharge conditions.',
        tools_frameworks: ['Pandas', 'NumPy', 'scikit-learn', 'XGBoost', 'TensorFlow', 'Matplotlib', 'Seaborn'],
        github_link: 'https://github.com/Sanchitk99/ai-based-runoff-prediction',
        demo_link: '',
        preview_image: '',
    },
];

const certificationData = [
    {
        title: 'Machine Learning',
        platform: 'Infosys',
        category: 'AI/ML',
        skills: ['Supervised Learning', 'Model Training', 'Evaluation Metrics'],
        issue_year: '2025',
        certificate_link: 'assets/Certificates/ML_Certificate.pdf',
        preview_image: '',
    },
    {
        title: 'Software Engineering',
        platform: 'NPTEL Swayam',
        category: 'Software',
        skills: ['SDLC', 'Requirements', 'System Design Basics'],
        issue_year: '2025',
        certificate_link: 'assets/Certificates/Software Engineering.pdf',
        preview_image: '',
    },
    {
        title: 'CS403: Introduction to Modern Database Systems',
        platform: 'Saylor Academy',
        category: 'Database',
        skills: ['Database Design', 'SQL Fundamentals', 'Relational Models'],
        issue_year: '2025',
        certificate_link: 'assets/Certificates/IMS.pdf',
        preview_image: '',
    },
    {
        title: 'Operating Systems',
        platform: 'Coursera',
        category: 'Core CS',
        skills: ['Process Management', 'Scheduling', 'Memory Management'],
        issue_year: '2025',
        certificate_link: 'assets/Certificates/S24CSEU0458_OperatingSys.pdf',
        preview_image: '',
    },
    {
        title: 'Computer Networking',
        platform: 'Coursera',
        category: 'Core CS',
        skills: ['Network Layers', 'TCP/IP', 'Routing Concepts'],
        issue_year: '2025',
        certificate_link: 'assets/Certificates/ComputerNetworking.pdf',
        preview_image: '',
    },
    {
        title: 'Introduction to Microprocessors',
        platform: 'Coursera',
        category: 'Core CS',
        skills: ['Microprocessor Basics', 'Instruction Sets', 'Processor Architecture'],
        issue_year: '2025',
        certificate_link: 'assets/Certificates/S24CSEU0458_Microprocessor.pdf',
        preview_image: '',
    },
    {
        title: 'Python Programming (24 Hours)',
        platform: 'Infosys',
        category: 'Programming',
        skills: ['Python Basics', 'Scripting', 'Hands-on Practice'],
        issue_year: '2024',
        certificate_link: 'assets/Certificates/Python Certificate 24hr.pdf',
        preview_image: '',
    },
    {
        title: 'Alpha (Java with DSA)',
        platform: 'Apna College',
        category: 'Programming',
        skills: ['Java', 'Data Structures', 'Algorithms'],
        issue_year: '2026',
        certificate_link: 'assets/Certificates/certificate-sigma-50-672b17223c33c36b830d9022.pdf',
        preview_image: '',
    },
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

const projectGrid = document.getElementById('project-grid');
const certificationGrid = document.getElementById('certification-grid');
const certificationViewport = document.getElementById('cert-viewport');
const certificationCarousel = document.getElementById('certification-carousel');
const certificationPrevBtn = document.getElementById('cert-prev');
const certificationNextBtn = document.getElementById('cert-next');
const certificationDots = document.getElementById('cert-dots');
const projectDetailShell = document.getElementById('project-detail-shell');
const projectDetailPanel = document.getElementById('project-detail-panel');
const educationSection = document.getElementById('education');
const educationScroll = document.getElementById('education-scroll');
const educationBoard = document.getElementById('edu-board');
const educationLineProgress = document.getElementById('edu-line-progress');
const educationTimelineItems = Array.from(document.querySelectorAll('.edu-timeline-item'));
const projectMap = new Map(projectData.map((project) => [project.id, project]));

const detailState = {
    activeCard: null,
    activeProjectId: null,
    closeTimer: null,
};
let pointerClientX = -9999;
let pointerClientY = -9999;

function escapeHtml(value = '') {
    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function supportsHoverInteraction() {
    return window.matchMedia('(hover: hover) and (pointer: fine)').matches;
}

function renderProjects() {
    if (!projectGrid) return;

    const trailingProjectIds = ['fix-my-campus', 'runoff-prediction'];
    const workingProjectIds = new Set(trailingProjectIds);
    const orderedProjects = [
        ...projectData.filter((project) => !trailingProjectIds.includes(project.id)),
        ...trailingProjectIds
            .map((id) => projectData.find((project) => project.id === id))
            .filter(Boolean),
    ];

    const cardsMarkup = orderedProjects.map((project) => `
        <article class="project-card" data-project-id="${escapeHtml(project.id)}">
            <h3>${escapeHtml(project.title)}</h3>
            <p class="project-summary">${escapeHtml(project.description)}</p>
            ${workingProjectIds.has(project.id) ? '<p class="project-progress-note">Currently working on this project</p>' : ''}
            <div class="project-actions">
                <a href="${escapeHtml(project.github_link)}" class="btn" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-github"></i> View on GitHub
                </a>
            </div>
        </article>
    `).join('');

    projectGrid.innerHTML = cardsMarkup;
}

function getCertificatePreviewMarkup(certificate) {
    const sourcePath = certificate.preview_image || certificate.certificate_link || '';
    const encodedPath = escapeHtml(encodeURI(sourcePath));
    const loweredPath = sourcePath.toLowerCase();
    const safeTitle = escapeHtml(certificate.title);

    if (!sourcePath) {
        return '<div class="cert-preview-empty"><i class="fas fa-certificate"></i></div>';
    }

    if (loweredPath.endsWith('.png') || loweredPath.endsWith('.jpg') || loweredPath.endsWith('.jpeg') || loweredPath.endsWith('.webp')) {
        return `<img src="${encodedPath}" alt="${escapeHtml(certificate.title)} preview" loading="lazy">`;
    }

    if (loweredPath.endsWith('.pdf')) {
        return `<img class="cert-preview-pdf-image" data-pdf-src="${encodedPath}" alt="${safeTitle} preview" loading="lazy">`;
    }

    return '<div class="cert-preview-empty"><i class="fas fa-file-lines"></i></div>';
}

function buildPdfIframeFallback(src, title) {
    return `
        <div class="cert-preview-pdf-fallback" role="img" aria-label="${title} preview">
            <iframe
                class="cert-preview-pdf-frame"
                src="${src}#toolbar=0&navpanes=0&scrollbar=0&page=1&zoom=FitH&view=FitH"
                title="${title} preview"
                scrolling="no"
                loading="lazy"></iframe>
        </div>
    `;
}

function buildPdfRenderFallback(title) {
    return `
        <div class="cert-preview-fallback-note" role="img" aria-label="${title} preview unavailable">
            <i class="fas fa-file-pdf" aria-hidden="true"></i>
            <span>Preview unavailable</span>
        </div>
    `;
}

function renderCertifications() {
    if (!certificationGrid) return;

    const cardsMarkup = certificationData.map((certificate) => {
        const certificateLink = escapeHtml(encodeURI(certificate.certificate_link));
        return `
        <article class="certification-card">
            <span class="cert-chip">${escapeHtml(certificate.category || 'Certificate')}</span>
            <div class="cert-preview">
                ${getCertificatePreviewMarkup(certificate)}
            </div>
            <h3>${escapeHtml(certificate.title)}</h3>
            <p class="certification-platform cert-meta"><i class="fas fa-building-columns"></i><span>${escapeHtml(certificate.platform)}</span></p>
            <div class="certification-skills">
                <p>Skills:</p>
                <div class="certification-skill-list">
                    ${certificate.skills.map((skill) => `<span>${escapeHtml(skill)}</span>`).join('')}
                </div>
            </div>
            <p class="certification-year cert-meta"><i class="fas fa-calendar-days"></i><span>${escapeHtml(certificate.issue_year)}</span></p>
            <a class="btn certification-view-btn" href="${certificateLink}" target="_blank" rel="noopener noreferrer">
                <i class="fas fa-certificate"></i> View Certificate
            </a>
        </article>
    `;
    }).join('');

    certificationGrid.innerHTML = cardsMarkup;
}

async function renderPdfImagePreview(imageEl) {
    if (!imageEl || !window.pdfjsLib) return;

    const src = imageEl.dataset.pdfSrc;
    const frame = imageEl.closest('.cert-preview');
    const title = imageEl.getAttribute('alt') || 'Certificate';
    if (!src || !frame) return;

    try {
        const loadPdf = async (disableWorker) => {
            const task = window.pdfjsLib.getDocument(disableWorker ? { url: src, disableWorker: true } : src);
            return task.promise;
        };

        let pdf;
        try {
            pdf = await loadPdf(false);
        } catch (_workerError) {
            // Retry without worker in restrictive environments to avoid iframe fallback.
            pdf = await loadPdf(true);
        }
        const page = await pdf.getPage(1);

        const baseViewport = page.getViewport({ scale: 1 });
        const frameWidth = Math.max(frame.clientWidth, 1);
        const frameHeight = Math.max(frame.clientHeight, 1);
        const fitScale = Math.max(Math.min(frameWidth / baseViewport.width, frameHeight / baseViewport.height), 0.1);
        const pixelRatio = window.devicePixelRatio || 1;
        const renderViewport = page.getViewport({ scale: fitScale * pixelRatio });

        const offscreenCanvas = document.createElement('canvas');
        offscreenCanvas.width = Math.floor(renderViewport.width);
        offscreenCanvas.height = Math.floor(renderViewport.height);

        const context = offscreenCanvas.getContext('2d', { alpha: false });
        if (!context) return;
        context.fillStyle = '#ffffff';
        context.fillRect(0, 0, offscreenCanvas.width, offscreenCanvas.height);

        await page.render({
            canvasContext: context,
            viewport: renderViewport,
        }).promise;

        imageEl.src = offscreenCanvas.toDataURL('image/png');
        imageEl.removeAttribute('data-pdf-src');
    } catch (error) {
        imageEl.outerHTML = buildPdfIframeFallback(src, title);
    }
}

function renderPdfCertificatePreviews() {
    const pdfImages = document.querySelectorAll('.cert-preview-pdf-image[data-pdf-src]');
    if (!pdfImages.length) return;

    if (!window.pdfjsLib) {
        pdfImages.forEach((imageEl) => {
            const src = imageEl.dataset.pdfSrc || '';
            const title = imageEl.getAttribute('alt') || 'Certificate';
            imageEl.outerHTML = src
                ? buildPdfIframeFallback(src, title)
                : buildPdfRenderFallback(title);
        });
        return;
    }

    if (window.pdfjsLib.GlobalWorkerOptions) {
        window.pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@2.16.105/build/pdf.worker.min.js';
    }

    pdfImages.forEach((imageEl) => {
        renderPdfImagePreview(imageEl);
    });
}

function setupCertificationCarousel() {
    if (!certificationGrid || !certificationViewport) return;

    const baseMarkup = Array.from(certificationGrid.querySelectorAll('.certification-card')).map((card) => card.outerHTML);
    if (!baseMarkup.length) return;

    const realCount = baseMarkup.length;
    let cardsPerView = 1;
    let stepSize = 0;
    let trackIndex = 0;
    let logicalIndex = 0;
    let autoSlideTimer = null;
    let wheelLock = false;
    let wheelDeltaCarry = 0;
    let isMoving = false;
    let queuedDelta = 0;
    let scrollSettleTimer = null;
    let isLoopAdjusting = false;
    let pointerId = null;
    let pointerStartX = 0;
    let pointerStartY = 0;
    let pointerDeltaX = 0;
    let pointerDeltaY = 0;
    let isDragAxisLocked = false;
    let isHorizontalDrag = false;
    let isPointerDragging = false;

    const getCardsPerView = () => {
        if (window.innerWidth <= 768) return 1;
        if (window.innerWidth <= 1150) return 2;
        return 3;
    };

    const canSlide = () => realCount > cardsPerView;

    const getGap = () => {
        const styles = window.getComputedStyle(certificationGrid);
        return Number.parseFloat(styles.columnGap || styles.gap || '0') || 0;
    };

    const recalcStepSize = () => {
        const firstCard = certificationGrid.querySelector('.certification-card');
        if (!firstCard) {
            stepSize = 0;
            return;
        }
        stepSize = firstCard.getBoundingClientRect().width + getGap();
    };

    const syncDots = () => {
        if (!certificationDots) return;
        certificationDots.querySelectorAll('.cert-dot').forEach((dot, dotIndex) => {
            dot.classList.toggle('is-active', dotIndex === logicalIndex);
        });
    };

    const updateControls = () => {
        const disabled = !canSlide();
        if (certificationPrevBtn) certificationPrevBtn.disabled = disabled;
        if (certificationNextBtn) certificationNextBtn.disabled = disabled;
    };

    const syncLogicalIndexFromTrack = () => {
        if (!canSlide()) {
            logicalIndex = 0;
            syncDots();
            return;
        }
        logicalIndex = ((trackIndex - cardsPerView) % realCount + realCount) % realCount;
        syncDots();
    };

    const stopAutoSlide = () => {
        if (!autoSlideTimer) return;
        window.clearInterval(autoSlideTimer);
        autoSlideTimer = null;
    };

    const startAutoSlide = () => {
        stopAutoSlide();
        if (!canSlide()) return;
        autoSlideTimer = window.setInterval(() => {
            moveBy(1);
        }, 4200);
    };

    const restartAutoSlide = () => {
        stopAutoSlide();
        startAutoSlide();
    };

    const clearPointerDrag = () => {
        pointerId = null;
        pointerStartX = 0;
        pointerStartY = 0;
        pointerDeltaX = 0;
        pointerDeltaY = 0;
        isDragAxisLocked = false;
        isHorizontalDrag = false;
        isPointerDragging = false;
        certificationViewport.classList.remove('is-dragging');
    };

    const buildTrack = () => {
        cardsPerView = getCardsPerView();
        const prefix = baseMarkup.slice(-cardsPerView);
        const suffix = baseMarkup.slice(0, cardsPerView);
        certificationGrid.innerHTML = [...prefix, ...baseMarkup, ...suffix].join('');
        renderPdfCertificatePreviews();
        recalcStepSize();
        trackIndex = cardsPerView + logicalIndex;
        certificationViewport.scrollLeft = trackIndex * stepSize;
    };

    const rebuildDots = () => {
        if (!certificationDots) return;
        certificationDots.innerHTML = '';
        if (!canSlide()) return;

        for (let dotIndex = 0; dotIndex < realCount; dotIndex++) {
            const dot = document.createElement('button');
            dot.type = 'button';
            dot.className = 'cert-dot';
            dot.setAttribute('aria-label', `Go to certificate slide ${dotIndex + 1}`);
            dot.addEventListener('click', () => {
                moveToLogicalIndex(dotIndex);
                restartAutoSlide();
            });
            certificationDots.appendChild(dot);
        }
        syncDots();
    };

    const normalizeLoopIfNeeded = () => {
        if (!canSlide() || !stepSize) return;

        const minTrack = cardsPerView;
        const maxTrack = cardsPerView + realCount - 1;

        if (trackIndex > maxTrack) {
            isLoopAdjusting = true;
            trackIndex -= realCount;
            certificationViewport.scrollLeft = trackIndex * stepSize;
            isLoopAdjusting = false;
            return;
        }

        if (trackIndex < minTrack) {
            isLoopAdjusting = true;
            trackIndex += realCount;
            certificationViewport.scrollLeft = trackIndex * stepSize;
            isLoopAdjusting = false;
        }
    };

    const scheduleSettleCheck = () => {
        window.clearTimeout(scrollSettleTimer);
        scrollSettleTimer = window.setTimeout(() => {
            if (!stepSize) {
                isMoving = false;
                return;
            }

            trackIndex = Math.round(certificationViewport.scrollLeft / stepSize);
            normalizeLoopIfNeeded();
            syncLogicalIndexFromTrack();
            isMoving = false;

            if (queuedDelta !== 0) {
                const pending = queuedDelta;
                queuedDelta = 0;
                moveBy(pending);
            }
        }, 90);
    };

    const moveToTrackIndex = (targetTrackIndex) => {
        if (!canSlide() || !stepSize) return;
        isMoving = true;
        trackIndex = targetTrackIndex;
        certificationViewport.scrollTo({
            left: trackIndex * stepSize,
            behavior: 'smooth',
        });
    };

    const moveBy = (delta) => {
        if (!canSlide() || !stepSize) return;
        const direction = delta > 0 ? 1 : -1;
        if (isMoving) {
            queuedDelta = direction;
            return;
        }
        moveToTrackIndex(trackIndex + direction);
    };

    const moveToLogicalIndex = (targetLogicalIndex) => {
        if (!canSlide() || !stepSize) return;

        const target = ((targetLogicalIndex % realCount) + realCount) % realCount;
        const candidates = [
            cardsPerView + target - realCount,
            cardsPerView + target,
            cardsPerView + target + realCount,
        ];

        const bestTrackIndex = candidates.reduce((best, candidate) => (
            Math.abs(candidate - trackIndex) < Math.abs(best - trackIndex) ? candidate : best
        ), candidates[0]);

        if (isMoving) {
            queuedDelta = bestTrackIndex > trackIndex ? 1 : -1;
            return;
        }

        moveToTrackIndex(bestTrackIndex);
    };

    buildTrack();
    rebuildDots();
    updateControls();
    syncLogicalIndexFromTrack();
    startAutoSlide();

    if (certificationPrevBtn) {
        certificationPrevBtn.addEventListener('click', () => {
            moveBy(-1);
            restartAutoSlide();
        });
    }

    if (certificationNextBtn) {
        certificationNextBtn.addEventListener('click', () => {
            moveBy(1);
            restartAutoSlide();
        });
    }

    const handleCertificationWheel = (event) => {
        if (!canSlide() || wheelLock) return;

        // Keep normal vertical page scroll intact; only react to horizontal intent.
        const isHorizontalIntent = Math.abs(event.deltaX) > Math.abs(event.deltaY) || (event.shiftKey && event.deltaY !== 0);
        if (!isHorizontalIntent) return;

        const rawDelta = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;
        wheelDeltaCarry += rawDelta;
        if (Math.abs(wheelDeltaCarry) < 20) return;

        event.preventDefault();
        wheelLock = true;
        moveBy(wheelDeltaCarry > 0 ? 1 : -1);
        wheelDeltaCarry = 0;
        restartAutoSlide();

        window.setTimeout(() => {
            wheelLock = false;
        }, 220);
    };

    certificationViewport.addEventListener('wheel', handleCertificationWheel, { passive: false });

    certificationViewport.addEventListener('pointerdown', (event) => {
        if (event.pointerType === 'mouse' && event.button !== 0) return;
        if (!canSlide()) return;
        pointerId = event.pointerId;
        pointerStartX = event.clientX;
        pointerStartY = event.clientY;
        pointerDeltaX = 0;
        pointerDeltaY = 0;
        isDragAxisLocked = false;
        isHorizontalDrag = false;
        isPointerDragging = true;
        stopAutoSlide();
    });

    certificationViewport.addEventListener('pointermove', (event) => {
        if (!isPointerDragging || pointerId !== event.pointerId) return;
        pointerDeltaX = event.clientX - pointerStartX;
        pointerDeltaY = event.clientY - pointerStartY;

        if (!isDragAxisLocked) {
            const absX = Math.abs(pointerDeltaX);
            const absY = Math.abs(pointerDeltaY);
            if (absX < 4 && absY < 4) return;

            isDragAxisLocked = true;
            isHorizontalDrag = absX > absY;

            if (!isHorizontalDrag) {
                // Let vertical gestures scroll the page naturally.
                restartAutoSlide();
                clearPointerDrag();
                return;
            }

            certificationViewport.classList.add('is-dragging');
            if (certificationViewport.setPointerCapture) {
                certificationViewport.setPointerCapture(pointerId);
            }
        }

        if (isHorizontalDrag) {
            event.preventDefault();
        }
    });

    const finishPointerDrag = (event) => {
        if (!isPointerDragging) return;
        if (pointerId !== null && event.pointerId !== pointerId) return;

        if (!isHorizontalDrag) {
            restartAutoSlide();
            clearPointerDrag();
            return;
        }

        const threshold = Math.max(30, stepSize * 0.12);
        if (Math.abs(pointerDeltaX) >= threshold) {
            moveBy(pointerDeltaX < 0 ? 1 : -1);
        }

        restartAutoSlide();
        clearPointerDrag();
    };

    const cancelPointerDrag = (event) => {
        if (!isPointerDragging) return;
        if (pointerId !== null && event.pointerId !== pointerId) return;
        restartAutoSlide();
        clearPointerDrag();
    };

    certificationViewport.addEventListener('pointerup', finishPointerDrag);
    certificationViewport.addEventListener('pointercancel', cancelPointerDrag);
    certificationViewport.addEventListener('lostpointercapture', cancelPointerDrag);

    certificationViewport.addEventListener('scroll', () => {
        if (!stepSize || isLoopAdjusting) return;
        trackIndex = Math.round(certificationViewport.scrollLeft / stepSize);
        syncLogicalIndexFromTrack();
        scheduleSettleCheck();
    }, { passive: true });

    certificationViewport.addEventListener('mouseenter', stopAutoSlide);
    certificationViewport.addEventListener('mouseleave', startAutoSlide);
    certificationViewport.addEventListener('touchstart', stopAutoSlide, { passive: true });
    certificationViewport.addEventListener('touchend', startAutoSlide, { passive: true });

    window.addEventListener('resize', () => {
        buildTrack();
        rebuildDots();
        updateControls();
        syncLogicalIndexFromTrack();
        restartAutoSlide();
    });
}

function setupEducationTimeline() {
    if (!educationSection || !educationScroll || !educationBoard || !educationLineProgress || !educationTimelineItems.length) return;

    let lineLength = 0;
    let queuedFrame = null;
    const clamp01 = (value) => Math.min(Math.max(value, 0), 1);

    const syncLineLength = () => {
        try {
            lineLength = educationLineProgress.getTotalLength();
        } catch (_error) {
            lineLength = 0;
        }

        if (lineLength > 0) {
            educationLineProgress.style.strokeDasharray = `${lineLength}`;
            educationLineProgress.style.strokeDashoffset = `${lineLength}`;
        }
    };

    const updateEducationTimeline = () => {
        if (lineLength <= 0) {
            syncLineLength();
        }

        const navHeightRaw = getComputedStyle(document.documentElement).getPropertyValue('--nav-height');
        const navHeight = Number.parseInt(navHeightRaw, 10) || 0;
        const sectionRect = educationSection.getBoundingClientRect();
        const lockTitle = sectionRect.top <= navHeight + 8 && sectionRect.bottom >= window.innerHeight * 0.4;
        educationSection.classList.toggle('edu-title-fixed', lockTitle);

        if (window.innerWidth <= 980) {
            educationTimelineItems.forEach((item) => item.classList.add('is-active'));
            if (lineLength > 0) {
                educationLineProgress.style.strokeDashoffset = '0';
            }
            return;
        }

        const scrollRect = educationScroll.getBoundingClientRect();
        const usableDistance = Math.max(scrollRect.height - window.innerHeight, 1);
        const scrollProgress = clamp01(-scrollRect.top / usableDistance);

        if (lineLength > 0) {
            educationLineProgress.style.strokeDashoffset = `${(1 - scrollProgress) * lineLength}`;
        }

        educationTimelineItems.forEach((item) => {
            const triggerPoint = Number.parseFloat(item.dataset.progress || '0');
            item.classList.toggle('is-active', scrollProgress >= triggerPoint);
        });
    };

    const queueUpdate = () => {
        if (queuedFrame !== null) return;
        queuedFrame = window.requestAnimationFrame(() => {
            queuedFrame = null;
            updateEducationTimeline();
        });
    };

    syncLineLength();
    queueUpdate();

    window.addEventListener('scroll', queueUpdate, { passive: true });
    window.addEventListener('resize', () => {
        syncLineLength();
        queueUpdate();
    });
}

function renderFeatureList(items) {
    return `<ul class="detail-list">${items.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>`;
}

function buildProjectDetailMarkup(project) {
    const demoButton = project.demo_link
        ? `<a href="${escapeHtml(project.demo_link)}" class="btn btn-ghost" target="_blank" rel="noopener noreferrer"><i class="fas fa-up-right-from-square"></i> Live Demo</a>`
        : '<button type="button" class="btn btn-ghost" disabled>Live Demo Soon</button>';

    return `
        <button type="button" class="detail-close-btn" aria-label="Close project details">
            <i class="fas fa-times"></i>
        </button>
        <header class="detail-header">
            <h3 id="project-detail-title">${escapeHtml(project.title)}</h3>
            <p class="detail-short">${escapeHtml(project.description)}</p>
        </header>
        <div class="detail-tech-badges">
            ${project.tech_stack.map((tech) => `<span>${escapeHtml(tech)}</span>`).join('')}
        </div>
        <div class="detail-sections">
            <div class="detail-section">
                <h4>Overview</h4>
                <p>${escapeHtml(project.full_explanation)}</p>
            </div>
            <div class="detail-section">
                <h4>Tech Stack</h4>
                <p>${escapeHtml(project.tech_stack.join(', '))}</p>
            </div>
            <div class="detail-section">
                <h4>Features</h4>
                ${renderFeatureList(project.features)}
            </div>
            <div class="detail-section">
                <h4>Approach</h4>
                <p>${escapeHtml(project.approach)}</p>
            </div>
            <div class="detail-section">
                <h4>Results</h4>
                <p>${escapeHtml(project.results)}</p>
            </div>
            <div class="detail-section">
                <h4>Tools & Frameworks</h4>
                <p>${escapeHtml(project.tools_frameworks.join(', '))}</p>
            </div>
            <div class="detail-section">
                <h4>Links</h4>
                <div class="detail-links">
                    <a href="${escapeHtml(project.github_link)}" class="btn" target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-github"></i> GitHub
                    </a>
                    ${demoButton}
                </div>
            </div>
        </div>
    `;
}

function clearProjectDetailCloseTimer() {
    if (!detailState.closeTimer) return;
    window.clearTimeout(detailState.closeTimer);
    detailState.closeTimer = null;
}

function isPointerWithinRect(rect, pad = 0) {
    return (
        pointerClientX >= rect.left - pad
        && pointerClientX <= rect.right + pad
        && pointerClientY >= rect.top - pad
        && pointerClientY <= rect.bottom + pad
    );
}

function shouldKeepProjectDetailOpen() {
    if (!supportsHoverInteraction() || !detailState.activeCard || !projectDetailPanel) return false;
    if (!projectDetailShell || !projectDetailShell.classList.contains('is-visible')) return false;

    const cardRect = detailState.activeCard.getBoundingClientRect();
    const panelRect = projectDetailPanel.getBoundingClientRect();

    if (isPointerWithinRect(cardRect, 16) || isPointerWithinRect(panelRect, 16)) {
        return true;
    }

    const panelOnLeft = panelRect.right <= cardRect.left;
    const panelOnRight = panelRect.left >= cardRect.right;

    if (panelOnLeft || panelOnRight) {
        const bridgeLeft = panelOnLeft ? panelRect.right - 14 : cardRect.right - 14;
        const bridgeRight = panelOnLeft ? cardRect.left + 14 : panelRect.left + 14;
        const bridgeTop = Math.min(cardRect.top, panelRect.top) - 18;
        const bridgeBottom = Math.max(cardRect.bottom, panelRect.bottom) + 18;

        if (
            pointerClientX >= bridgeLeft
            && pointerClientX <= bridgeRight
            && pointerClientY >= bridgeTop
            && pointerClientY <= bridgeBottom
        ) {
            return true;
        }
    }

    return false;
}

function closeProjectDetail() {
    clearProjectDetailCloseTimer();
    if (!projectDetailShell || !projectDetailPanel) return;

    projectDetailShell.classList.remove('is-visible');
    projectDetailShell.setAttribute('aria-hidden', 'true');

    if (detailState.activeCard) {
        detailState.activeCard.classList.remove('is-detail-active');
    }

    detailState.activeCard = null;
    detailState.activeProjectId = null;

    window.setTimeout(() => {
        if (!projectDetailShell.classList.contains('is-visible')) {
            projectDetailPanel.innerHTML = '';
        }
    }, 220);
}

function scheduleProjectDetailClose(delay = 140) {
    clearProjectDetailCloseTimer();
    detailState.closeTimer = window.setTimeout(() => {
        if (shouldKeepProjectDetailOpen()) {
            scheduleProjectDetailClose(120);
            return;
        }
        closeProjectDetail();
    }, delay);
}

function positionProjectDetail(card) {
    if (!projectDetailPanel || !projectDetailShell || !card) return;

    const isModal = !supportsHoverInteraction() || window.innerWidth <= 900;
    projectDetailShell.classList.toggle('is-modal', isModal);

    if (isModal) {
        projectDetailPanel.classList.remove('detail-side', 'detail-side-right', 'detail-side-left');
        projectDetailPanel.classList.remove('detail-below');
        projectDetailPanel.style.left = '';
        projectDetailPanel.style.top = '';
        projectDetailPanel.style.width = '';
        return;
    }

    const rect = card.getBoundingClientRect();
    const panelWidth = Math.min(640, window.innerWidth - 32);
    const rightSideGap = -28;
    const leftSideGap = -90;
    const viewportPad = 16;
    const estimatedHeight = Math.min(window.innerHeight * 0.78, 740);

    const availableRight = window.innerWidth - rect.right - viewportPad;
    const availableLeft = rect.left - viewportPad;
    const canPlaceRight = availableRight >= panelWidth + rightSideGap;
    const canPlaceLeft = availableLeft >= panelWidth + leftSideGap;

    const halfPanel = panelWidth / 2;
    const minCenter = viewportPad + halfPanel;
    const maxCenter = window.innerWidth - viewportPad - halfPanel;
    const minTop = viewportPad;
    const maxTop = Math.max(viewportPad, window.innerHeight - estimatedHeight - viewportPad);

    let centerX = rect.left + (rect.width / 2);
    let panelTop = rect.top;
    let shouldPlaceBelow = false;
    let isSidePlacement = false;
    let sideClass = '';

    if (canPlaceRight || canPlaceLeft) {
        isSidePlacement = true;
        panelTop = Math.min(maxTop, Math.max(minTop, rect.top));

        if (canPlaceRight) {
            centerX = rect.right + rightSideGap + halfPanel;
            sideClass = 'detail-side-right';
        } else {
            centerX = rect.left - leftSideGap - halfPanel;
            sideClass = 'detail-side-left';
        }
    } else {
        centerX = Math.min(maxCenter, Math.max(minCenter, centerX));
        shouldPlaceBelow = rect.top < (estimatedHeight + 30);
        panelTop = shouldPlaceBelow ? rect.bottom : rect.top;
    }

    projectDetailPanel.style.width = `${panelWidth}px`;
    projectDetailPanel.style.left = `${centerX}px`;
    projectDetailPanel.style.top = `${panelTop}px`;
    projectDetailPanel.classList.toggle('detail-side', isSidePlacement);
    projectDetailPanel.classList.toggle('detail-side-right', isSidePlacement && sideClass === 'detail-side-right');
    projectDetailPanel.classList.toggle('detail-side-left', isSidePlacement && sideClass === 'detail-side-left');
    projectDetailPanel.classList.toggle('detail-below', shouldPlaceBelow);
}

function openProjectDetail(projectId, card) {
    if (!projectDetailShell || !projectDetailPanel) return;

    const project = projectMap.get(projectId);
    if (!project || !card) return;

    clearProjectDetailCloseTimer();

    if (detailState.activeCard && detailState.activeCard !== card) {
        detailState.activeCard.classList.remove('is-detail-active');
    }

    detailState.activeProjectId = projectId;
    detailState.activeCard = card;
    detailState.activeCard.classList.add('is-detail-active');

    projectDetailPanel.innerHTML = buildProjectDetailMarkup(project);
    positionProjectDetail(card);

    const closeButton = projectDetailPanel.querySelector('.detail-close-btn');
    if (closeButton) {
        closeButton.addEventListener('click', () => closeProjectDetail());
    }

    projectDetailShell.setAttribute('aria-hidden', 'false');
    requestAnimationFrame(() => {
        projectDetailShell.classList.add('is-visible');
    });
}

function wireProjectDetailInteractions() {
    const cards = document.querySelectorAll('.project-card');

    cards.forEach((card) => {
        const projectId = card.getAttribute('data-project-id');
        if (!projectId) return;

        card.addEventListener('mouseenter', () => {
            if (!supportsHoverInteraction()) return;
            clearProjectDetailCloseTimer();
            openProjectDetail(projectId, card);
        });

        card.addEventListener('mouseleave', () => {
            if (!supportsHoverInteraction()) return;
            scheduleProjectDetailClose(220);
        });

        card.addEventListener('click', (event) => {
            if (supportsHoverInteraction()) return;
            const githubLink = event.target.closest('a');
            if (githubLink) return;

            event.preventDefault();
            openProjectDetail(projectId, card);
        });
    });

    if (projectDetailPanel) {
        projectDetailPanel.addEventListener('mouseenter', () => {
            clearProjectDetailCloseTimer();
        });

        projectDetailPanel.addEventListener('mouseleave', () => {
            if (!supportsHoverInteraction()) return;
            scheduleProjectDetailClose(130);
        });
    }

    if (projectDetailShell) {
        projectDetailShell.addEventListener('mousedown', (event) => {
            if (event.target === projectDetailShell) {
                closeProjectDetail();
            }
        });
    }

    document.addEventListener('mousedown', (event) => {
        if (!projectDetailShell || !projectDetailPanel) return;
        if (!projectDetailShell.classList.contains('is-visible')) return;

        const clickedInsidePanel = projectDetailPanel.contains(event.target);
        const clickedActiveCard = detailState.activeCard && detailState.activeCard.contains(event.target);
        if (clickedInsidePanel || clickedActiveCard) return;

        closeProjectDetail();
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeProjectDetail();
        }
    });
}

document.addEventListener('mousemove', (event) => {
    pointerClientX = event.clientX;
    pointerClientY = event.clientY;
}, { passive: true });

renderProjects();
renderCertifications();
renderPdfCertificatePreviews();
setupCertificationCarousel();
setupEducationTimeline();
wireProjectDetailInteractions();

function typeRole() {
    const typedText = document.getElementById('typed-text');
    if (!typedText) return;
    const currentRole = roles[roleIndex];

    if (!isDeleting) {
        if (charIndex < currentRole.length) {
            typedText.textContent += currentRole.charAt(charIndex);
            charIndex++;
            setTimeout(typeRole, 80);
        } else {
            isDeleting = true;
            setTimeout(typeRole, 2000);
        }
    } else if (charIndex > 0) {
        typedText.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(typeRole, 50);
    } else {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(typeRole, 500);
    }
}

// ===== TOP NAV / MOBILE MENU TOGGLE =====
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
const header = document.querySelector('.header');

function syncNavHeight() {
    if (!header) return;
    const navHeight = Math.ceil(header.getBoundingClientRect().height);
    if (navHeight > 0) {
        document.documentElement.style.setProperty('--nav-height', `${navHeight}px`);
    }
}

function scrollToSectionWithOffset(target, behavior = 'smooth') {
    if (!target) return;
    const navHeightRaw = getComputedStyle(document.documentElement).getPropertyValue('--nav-height');
    const navHeight = Number.parseInt(navHeightRaw, 10) || 0;
    const noOffsetSections = new Set(['projects', 'education', 'coding-progress', 'certifications', 'contact']);
    const navOffset = noOffsetSections.has(target.id) ? 0 : navHeight;
    const sectionScrollBoost = target.id === 'skills' ? 36 : 0;
    const y = target.getBoundingClientRect().top + window.scrollY - navOffset + sectionScrollBoost;
    window.scrollTo({ top: Math.max(y, 0), behavior });
}

if (menuToggle) {
    menuToggle.setAttribute('aria-expanded', 'false');
}

syncNavHeight();

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        navLinks.classList.toggle('active');
        const expanded = navLinks.classList.contains('active');
        menuToggle.setAttribute('aria-expanded', String(expanded));
    });
}

// Close sidebar when a nav item is clicked
const navItems = document.querySelectorAll('.nav-item');
navItems.forEach((item) => {
    item.addEventListener('click', () => {
        if (navLinks) {
            navLinks.classList.remove('active');
        }
        if (menuToggle) {
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    });
});

// Close sidebar when clicking outside
document.addEventListener('click', (e) => {
    if (!navLinks) return;
    const clickedMenuToggle = menuToggle && menuToggle.contains(e.target);
    if (!navLinks.contains(e.target) && !clickedMenuToggle) {
        navLinks.classList.remove('active');
        if (menuToggle) {
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 980 && navLinks) {
        navLinks.classList.remove('active');
        if (menuToggle) {
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    }

    if (detailState.activeCard && projectDetailShell && projectDetailShell.classList.contains('is-visible')) {
        positionProjectDetail(detailState.activeCard);
    }

    syncNavHeight();
});

window.addEventListener('scroll', () => {
    updateActiveNav();

    if (detailState.activeCard && projectDetailShell && projectDetailShell.classList.contains('is-visible') && supportsHoverInteraction()) {
        positionProjectDetail(detailState.activeCard);
    }
}, { passive: true });

// ===== ACTIVE NAV HIGHLIGHTING =====
function updateActiveNav() {
    const sections = document.querySelectorAll('section');
    let current = '';

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 300) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach((item) => {
        item.classList.remove('active');
        if (item.getAttribute('data-section') === current) {
            item.classList.add('active');
        }
    });
}

// ===== SECTION REVEAL ANIMATION =====
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('section-in');
            sectionObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.2,
    rootMargin: '0px 0px -12% 0px',
});

document.querySelectorAll('main > section:not(#home)').forEach((section) => {
    section.classList.add('section-reveal');
    sectionObserver.observe(section);
});

// ===== CARD REVEAL ANIMATION =====
const cardRevealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal-in');
            cardRevealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -70px 0px',
});

const revealTargets = document.querySelectorAll('.education-card, .skill-item, .project-card, .skills-column, .certification-card');
const revealDirections = ['up', 'left', 'right', 'zoom'];

revealTargets.forEach((el, index) => {
    el.classList.add('reveal-ready');
    el.dataset.reveal = revealDirections[index % revealDirections.length];
    el.style.setProperty('--reveal-delay', `${(index % 8) * 70}ms`);
    cardRevealObserver.observe(el);
});

// ===== SKILL BAR ANIMATION =====
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');

    skillBars.forEach((bar) => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const width = bar.style.width;
                    bar.style.width = '0';

                    setTimeout(() => {
                        bar.style.width = width;
                    }, 100);

                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        observer.observe(bar);
    });
}

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function smoothSectionScroll(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            scrollToSectionWithOffset(target, 'smooth');
        }
    });
});

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    syncNavHeight();
    typeRole();
    animateSkillBars();
    updateActiveNav();

    if (window.location.hash) {
        const initialTarget = document.querySelector(window.location.hash);
        if (initialTarget) {
            setTimeout(() => scrollToSectionWithOffset(initialTarget, 'auto'), 0);
        }
    }
});

// Smooth page transitions
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    syncNavHeight();
});

// Add some parallax effect on mouse move for hero section
const heroImage = document.querySelector('.hero-image img');
if (heroImage) {
    document.addEventListener('mousemove', (e) => {
        const mouseX = (e.clientX / window.innerWidth - 0.5) * 10;
        const mouseY = (e.clientY / window.innerHeight - 0.5) * 10;

        heroImage.style.transform = `translateX(${mouseX}px) translateY(${mouseY}px)`;
    });
}

// Reset parallax on mouse leave
document.addEventListener('mouseleave', () => {
    if (heroImage) {
        heroImage.style.transform = 'translateX(0) translateY(0)';
    }
});

// ===== CONTACT FORM HANDLING =====
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const button = contactForm.querySelector('.contact-btn');
        if (!button) return;

        const originalText = button.textContent;
        button.textContent = 'Sending...';
        button.disabled = true;

        try {
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: new FormData(contactForm),
                headers: {
                    Accept: 'application/json',
                },
            });

            if (response.ok) {
                contactForm.reset();
                button.textContent = 'Message Sent!';
            } else {
                button.textContent = 'Failed to Send';
            }
        } catch (error) {
            button.textContent = 'Network Error';
        } finally {
            setTimeout(() => {
                button.textContent = originalText;
                button.disabled = false;
            }, 2500);
        }
    });
}
