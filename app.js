// Mock Database (In production, this would be a real database)
// Format: 'Model Year FuelType' as key for precise matching
const mockDatabase = {
    // Swift entries
    'Swift 2018 Petrol': {
        marketPrice: 550000,
        avgMaintenance: 15000,
        commonIssues: ['Clutch wear', 'Suspension noise'],
        failureRate: 0.20,
        year: 2018,
        fuelType: 'Petrol'
    },
    'Swift 2016 Diesel': {
        marketPrice: 480000,
        avgMaintenance: 18000,
        commonIssues: ['Injector issues', 'Turbo lag'],
        failureRate: 0.30,
        year: 2016,
        fuelType: 'Diesel'
    },
    // i20 entries
    'i20 2017 Petrol': {
        marketPrice: 520000,
        avgMaintenance: 17000,
        commonIssues: ['Electrical faults', 'AC cooling issue'],
        failureRate: 0.25,
        year: 2017,
        fuelType: 'Petrol'
    },
    'i20 2015 Diesel': {
        marketPrice: 450000,
        avgMaintenance: 20000,
        commonIssues: ['Diesel pump failure', 'Brake wear'],
        failureRate: 0.35,
        year: 2015,
        fuelType: 'Diesel'
    },
    // City entries
    'City 2016 Petrol': {
        marketPrice: 600000,
        avgMaintenance: 22000,
        commonIssues: ['Power steering leak', 'Sensor issues'],
        failureRate: 0.18,
        year: 2016,
        fuelType: 'Petrol'
    },
    'City 2014 Diesel': {
        marketPrice: 520000,
        avgMaintenance: 25000,
        commonIssues: ['Clutch plate wear', 'EGR clogging'],
        failureRate: 0.28,
        year: 2014,
        fuelType: 'Diesel'
    },
    // Baleno entries
    'Baleno 2019 Petrol': {
        marketPrice: 650000,
        avgMaintenance: 14000,
        commonIssues: ['Minor rattling', 'Brake noise'],
        failureRate: 0.15,
        year: 2019,
        fuelType: 'Petrol'
    },
    'Baleno 2017 Diesel': {
        marketPrice: 540000,
        avgMaintenance: 19000,
        commonIssues: ['Turbo delay', 'Suspension wear'],
        failureRate: 0.27,
        year: 2017,
        fuelType: 'Diesel'
    },
    // Creta entries
    'Creta 2018 Diesel': {
        marketPrice: 900000,
        avgMaintenance: 30000,
        commonIssues: ['Injector issue', 'High service cost'],
        failureRate: 0.32,
        year: 2018,
        fuelType: 'Diesel'
    },
    'Creta 2016 Petrol': {
        marketPrice: 750000,
        avgMaintenance: 26000,
        commonIssues: ['AC compressor issue', 'Brake wear'],
        failureRate: 0.22,
        year: 2016,
        fuelType: 'Petrol'
    },
    // WagonR entries
    'WagonR 2017 Petrol': {
        marketPrice: 400000,
        avgMaintenance: 12000,
        commonIssues: ['Engine vibration', 'Low pickup'],
        failureRate: 0.21,
        year: 2017,
        fuelType: 'Petrol'
    },
    'WagonR 2015 CNG': {
        marketPrice: 350000,
        avgMaintenance: 16000,
        commonIssues: ['Gas kit servicing', 'Mileage drop'],
        failureRate: 0.29,
        year: 2015,
        fuelType: 'CNG'
    },
    // Verna entries
    'Verna 2018 Diesel': {
        marketPrice: 800000,
        avgMaintenance: 28000,
        commonIssues: ['Clutch wear', 'Sensor faults'],
        failureRate: 0.30,
        year: 2018,
        fuelType: 'Diesel'
    },
    'Verna 2016 Petrol': {
        marketPrice: 650000,
        avgMaintenance: 24000,
        commonIssues: ['Electrical issues', 'Steering noise'],
        failureRate: 0.24,
        year: 2016,
        fuelType: 'Petrol'
    },
    // Innova entry
    'Innova 2017 Diesel': {
        marketPrice: 1200000,
        avgMaintenance: 35000,
        commonIssues: ['High parts cost', 'Brake wear'],
        failureRate: 0.26,
        year: 2017,
        fuelType: 'Diesel'
    },
    // Fallback entries (model name only for partial matching)
    'Swift': {
        marketPrice: 515000,
        avgMaintenance: 16500,
        commonIssues: ['Clutch wear', 'Suspension noise'],
        failureRate: 0.25
    },
    'i20': {
        marketPrice: 485000,
        avgMaintenance: 18500,
        commonIssues: ['Electrical faults', 'AC cooling issue'],
        failureRate: 0.30
    },
    'City': {
        marketPrice: 560000,
        avgMaintenance: 23500,
        commonIssues: ['Power steering leak', 'Sensor issues'],
        failureRate: 0.23
    },
    'Baleno': {
        marketPrice: 595000,
        avgMaintenance: 16500,
        commonIssues: ['Minor rattling', 'Brake noise'],
        failureRate: 0.21
    },
    'Creta': {
        marketPrice: 825000,
        avgMaintenance: 28000,
        commonIssues: ['Injector issue', 'High service cost'],
        failureRate: 0.27
    },
    'WagonR': {
        marketPrice: 375000,
        avgMaintenance: 14000,
        commonIssues: ['Engine vibration', 'Low pickup'],
        failureRate: 0.25
    },
    'Verna': {
        marketPrice: 725000,
        avgMaintenance: 26000,
        commonIssues: ['Clutch wear', 'Sensor faults'],
        failureRate: 0.27
    },
    'Innova': {
        marketPrice: 1200000,
        avgMaintenance: 35000,
        commonIssues: ['High parts cost', 'Brake wear'],
        failureRate: 0.26
    }
};

// Default data for unknown models
const defaultData = {
    marketPrice: 1500000, // ₹15,00,000
    avgMaintenance: 20000, // ₹20,000 per year
    commonIssues: ['General wear and tear', 'Regular maintenance required', 'Periodic inspections'],
    failureRate: 0.20
};

// DOM Elements
const loginSection = document.getElementById('loginSection');
const dashboardSection = document.getElementById('dashboardSection');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const carForm = document.getElementById('carForm');
const resultsSection = document.getElementById('resultsSection');
const logoutBtn = document.getElementById('logoutBtn');
const showSignupBtn = document.getElementById('showSignupBtn');
const showLoginBtn = document.getElementById('showLoginBtn');
const mechanicRegForm = document.getElementById('mechanicRegForm');
const showMechanicRegBtn = document.getElementById('showMechanicRegBtn');
const backToSignupBtn = document.getElementById('backToSignupBtn');
const servicePapersInput = document.getElementById('servicePapers');
const filePreview = document.getElementById('filePreview');
const navMenu = document.getElementById('navMenu');
const navToggle = document.getElementById('navToggle');
const navUser = document.getElementById('navUser');
const navUsername = document.getElementById('navUsername');
const navLogoutBtn = document.getElementById('navLogoutBtn');
const navHome = document.getElementById('navHome');
const navAbout = document.getElementById('navAbout');
const navFeatures = document.getElementById('navFeatures');
const aboutSection = document.getElementById('aboutSection');
const featuresSection = document.getElementById('featuresSection');

// Store uploaded files
let uploadedFiles = [];
let currentLoggedInUser = null;

// Currency formatting (Indian Rupees)
const inrFormatter = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
});

function formatINR(value) {
    const numberValue = Number(value);
    if (!Number.isFinite(numberValue)) return '₹0';
    return inrFormatter.format(numberValue);
}

// Demo auth storage (LocalStorage)
const USERS_KEY = 'cartrust_users_v1';

function loadUsers() {
    try {
        const raw = localStorage.getItem(USERS_KEY);
        const parsed = raw ? JSON.parse(raw) : [];
        return Array.isArray(parsed) ? parsed : [];
    } catch {
        return [];
    }
}

function saveUsers(users) {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function setAuthError(el, msg) {
    if (!el) return;
    if (msg) {
        el.textContent = msg;
        el.classList.add('show');
    } else {
        el.textContent = '';
        el.classList.remove('show');
    }
}

function showSignup() {
    signupForm.classList.remove('hidden');
    loginForm.classList.add('hidden');
    if (mechanicRegForm) mechanicRegForm.classList.add('hidden');
    setAuthError(document.getElementById('loginError'), '');
}

function showLogin() {
    signupForm.classList.add('hidden');
    loginForm.classList.remove('hidden');
    if (mechanicRegForm) mechanicRegForm.classList.add('hidden');
    setAuthError(document.getElementById('signupError'), '');
}

function showMechanicReg() {
    signupForm.classList.add('hidden');
    loginForm.classList.add('hidden');
    if (mechanicRegForm) mechanicRegForm.classList.remove('hidden');
    setAuthError(document.getElementById('signupError'), '');
}

function hideMechanicReg() {
    if (mechanicRegForm) mechanicRegForm.classList.add('hidden');
    signupForm.classList.remove('hidden');
    setAuthError(document.getElementById('mechanicRegError'), '');
}

// Switch between Sign in / Sign up / Mechanic registration
if (showSignupBtn) showSignupBtn.addEventListener('click', showSignup);
if (showLoginBtn) showLoginBtn.addEventListener('click', showLogin);
if (showMechanicRegBtn) showMechanicRegBtn.addEventListener('click', showMechanicReg);
if (backToSignupBtn) backToSignupBtn.addEventListener('click', hideMechanicReg);

// Navigation Bar Toggle (Mobile)
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Brand logo click to go home
const navBrand = document.querySelector('.nav-brand');
if (navBrand) {
    navBrand.addEventListener('click', () => {
        showHome();
    });
    navBrand.style.cursor = 'pointer';
}

// Show/Hide Sections
function showHome() {
    hideAllSections();
    if (currentLoggedInUser) {
        dashboardSection.classList.remove('hidden');
    } else {
        loginSection.classList.remove('hidden');
    }
    if (navMenu) navMenu.classList.remove('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showAbout() {
    hideAllSections();
    aboutSection.classList.remove('hidden');
    if (navMenu) navMenu.classList.remove('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showFeatures() {
    hideAllSections();
    featuresSection.classList.remove('hidden');
    if (navMenu) navMenu.classList.remove('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function hideAllSections() {
    loginSection.classList.add('hidden');
    dashboardSection.classList.add('hidden');
    aboutSection.classList.add('hidden');
    featuresSection.classList.add('hidden');
}

// Navigation Links
if (navHome) {
    navHome.addEventListener('click', (e) => {
        e.preventDefault();
        showHome();
    });
}

if (navAbout) {
    navAbout.addEventListener('click', (e) => {
        e.preventDefault();
        showAbout();
    });
}

if (navFeatures) {
    navFeatures.addEventListener('click', (e) => {
        e.preventDefault();
        showFeatures();
    });
}

var loginFooterYearEl = document.getElementById('loginFooterYear');
if (loginFooterYearEl) loginFooterYearEl.textContent = new Date().getFullYear();

// Nav Logout
if (navLogoutBtn) {
    navLogoutBtn.addEventListener('click', () => {
        handleLogout();
    });
}

function updateNavbar(user) {
    if (user) {
        currentLoggedInUser = user;
        if (navUser) navUser.style.display = 'flex';
        if (navUsername) navUsername.textContent = user.username || 'User';
        // Hide nav links when logged in
        if (navHome) navHome.parentElement.style.display = 'none';
        if (navAbout) navAbout.parentElement.style.display = 'none';
        if (navFeatures) navFeatures.parentElement.style.display = 'none';
    } else {
        currentLoggedInUser = null;
        if (navUser) navUser.style.display = 'none';
        if (navHome) navHome.parentElement.style.display = 'block';
        if (navAbout) navAbout.parentElement.style.display = 'block';
        if (navFeatures) navFeatures.parentElement.style.display = 'block';
    }
}

function handleLogout() {
    hideAllSections();
    loginSection.classList.remove('hidden');
    resultsSection.classList.add('hidden');
    carForm.reset();
    uploadedFiles = [];
    if (filePreview) filePreview.innerHTML = '';
    if (servicePapersInput) servicePapersInput.value = '';
    showLogin();
    updateNavbar(null);
    if (navMenu) navMenu.classList.remove('active');
}

// File Upload Handler
if (servicePapersInput) {
    servicePapersInput.addEventListener('change', handleFileUpload);
    
    // Drag and drop functionality
    const fileUploadLabel = document.querySelector('.file-upload-label');
    if (fileUploadLabel) {
        fileUploadLabel.addEventListener('dragover', (e) => {
            e.preventDefault();
            fileUploadLabel.style.background = '#e8ebff';
        });
        
        fileUploadLabel.addEventListener('dragleave', () => {
            fileUploadLabel.style.background = '#f8f9ff';
        });
        
        fileUploadLabel.addEventListener('drop', (e) => {
            e.preventDefault();
            fileUploadLabel.style.background = '#f8f9ff';
            const files = e.dataTransfer.files;
            if (files.length > 0) {
                servicePapersInput.files = files;
                handleFileUpload({ target: { files: files } });
            }
        });
    }
}

function handleFileUpload(event) {
    const files = Array.from(event.target.files || servicePapersInput.files);
    uploadedFiles = files;
    displayFilePreview(files);
}

function displayFilePreview(files) {
    if (!filePreview) return;
    
    filePreview.innerHTML = '';
    
    if (files.length === 0) {
        return;
    }
    
    files.forEach((file, index) => {
        const previewItem = document.createElement('div');
        previewItem.className = 'file-preview-item';
        
        if (file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const img = document.createElement('img');
                img.src = e.target.result;
                img.alt = file.name;
                previewItem.appendChild(img);
                
                const fileName = document.createElement('div');
                fileName.className = 'file-name';
                fileName.textContent = file.name.length > 20 ? file.name.substring(0, 20) + '...' : file.name;
                previewItem.appendChild(fileName);
                
                const removeBtn = document.createElement('button');
                removeBtn.className = 'file-remove';
                removeBtn.textContent = '×';
                removeBtn.onclick = () => removeFile(index);
                previewItem.appendChild(removeBtn);
            };
            reader.readAsDataURL(file);
        } else if (file.type === 'application/pdf') {
            previewItem.classList.add('pdf-file');
            const pdfIcon = document.createElement('div');
            pdfIcon.className = 'pdf-icon';
            pdfIcon.textContent = '📄';
            previewItem.appendChild(pdfIcon);
            
            const fileName = document.createElement('div');
            fileName.className = 'file-name';
            fileName.textContent = file.name.length > 20 ? file.name.substring(0, 20) + '...' : file.name;
            previewItem.appendChild(fileName);
            
            const removeBtn = document.createElement('button');
            removeBtn.className = 'file-remove';
            removeBtn.textContent = '×';
            removeBtn.onclick = () => removeFile(index);
            previewItem.appendChild(removeBtn);
        } else {
            const fileName = document.createElement('div');
            fileName.className = 'file-name';
            fileName.textContent = file.name;
            previewItem.appendChild(fileName);
            
            const removeBtn = document.createElement('button');
            removeBtn.className = 'file-remove';
            removeBtn.textContent = '×';
            removeBtn.onclick = () => removeFile(index);
            previewItem.appendChild(removeBtn);
        }
        
        filePreview.appendChild(previewItem);
    });
}

function removeFile(index) {
    uploadedFiles.splice(index, 1);
    
    // Update the file input
    const dataTransfer = new DataTransfer();
    uploadedFiles.forEach(file => dataTransfer.items.add(file));
    servicePapersInput.files = dataTransfer.files;
    
    displayFilePreview(uploadedFiles);
}

// Login Handler
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorDiv = document.getElementById('loginError');

    if (!username || !password) {
        setAuthError(errorDiv, 'Please enter both username and password');
        return;
    }

    const users = loadUsers();
    const user = users.find(u => u.username.toLowerCase() === username.toLowerCase());

    if (!user) {
        setAuthError(errorDiv, 'Account not found. Please sign up first.');
        return;
    }

    if (user.password !== password) {
        setAuthError(errorDiv, 'Incorrect password.');
        return;
    }

    setAuthError(errorDiv, '');
    loginSection.classList.add('hidden');
    dashboardSection.classList.remove('hidden');
    updateNavbar({ username: username });
});

// Sign up Handler (demo only)
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('signupUsername').value.trim();
    const password = document.getElementById('signupPassword').value;
    const password2 = document.getElementById('signupPassword2').value;
    const errorDiv = document.getElementById('signupError');

    if (!username || !password || !password2) {
        setAuthError(errorDiv, 'Please fill in all fields.');
        return;
    }

    if (username.length < 3) {
        setAuthError(errorDiv, 'Username must be at least 3 characters.');
        return;
    }

    if (password.length < 4) {
        setAuthError(errorDiv, 'Password must be at least 4 characters.');
        return;
    }

    if (password !== password2) {
        setAuthError(errorDiv, 'Passwords do not match.');
        return;
    }

    const users = loadUsers();
    const exists = users.some(u => u.username.toLowerCase() === username.toLowerCase());
    if (exists) {
        setAuthError(errorDiv, 'Username already exists. Please sign in.');
        return;
    }

    users.push({ username, password, createdAt: new Date().toISOString() });
    saveUsers(users);

    setAuthError(errorDiv, '');
    // Prefill login and switch back
    document.getElementById('username').value = username;
    document.getElementById('password').value = password;
    showLogin();
    setAuthError(document.getElementById('loginError'), 'Account created! Please sign in.');
});

// Mechanic registration - load/save from localStorage
const MECHANICS_KEY = 'cartrust_mechanics';

function loadMechanics() {
    try {
        const data = localStorage.getItem(MECHANICS_KEY);
        return data ? JSON.parse(data) : [];
    } catch {
        return [];
    }
}

function saveMechanics(mechanics) {
    localStorage.setItem(MECHANICS_KEY, JSON.stringify(mechanics));
}

// Mechanic registration handler
if (mechanicRegForm) {
    mechanicRegForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('mechanicNameInput').value.trim();
        const phone = document.getElementById('mechanicPhoneInput').value.trim();
        const email = document.getElementById('mechanicEmailInput').value.trim();
        const specialty = document.getElementById('mechanicSpecialtyInput').value.trim();
        const errorDiv = document.getElementById('mechanicRegError');

        if (!name || !phone || !email) {
            setAuthError(errorDiv, 'Please fill in name, phone and email.');
            return;
        }

        const mechanics = loadMechanics();
        mechanics.push({
            name,
            phone,
            email,
            specialty: specialty || 'Car expert / Mechanic',
            registeredAt: new Date().toISOString()
        });
        saveMechanics(mechanics);

        setAuthError(errorDiv, '');
        document.getElementById('mechanicRegError').classList.remove('show');
        mechanicRegForm.reset();
        setAuthError(errorDiv, 'Registration successful! Your contact will appear in car analysis reports.');
        document.getElementById('mechanicRegError').classList.add('show');
        document.getElementById('mechanicRegError').style.color = '#28a745';
        setTimeout(() => {
            hideMechanicReg();
            document.getElementById('mechanicRegError').style.color = '';
        }, 2000);
    });
}

// Logout Handler
logoutBtn.addEventListener('click', () => {
    dashboardSection.classList.add('hidden');
    loginSection.classList.remove('hidden');
    resultsSection.classList.add('hidden');
    carForm.reset();
    showLogin();
});

// Car Form Handler
carForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const errorDiv = document.getElementById('validationError');
    
    // Get form values
    const carModel = document.getElementById('carModel').value.trim();
    const manufacturingYear = parseInt(document.getElementById('manufacturingYear').value);
    const mileage = parseInt(document.getElementById('mileage').value);
    const fuelType = document.getElementById('fuelType').value;
    const carPrice = parseFloat(document.getElementById('carPrice').value);
    const userIssuesText = document.getElementById('carIssues').value.trim();

    // Validation
    if (!carModel || !manufacturingYear || !mileage || !fuelType || !carPrice) {
        errorDiv.textContent = 'Please fill in all required fields';
        errorDiv.classList.add('show');
        return;
    }

    if (manufacturingYear < 1990 || manufacturingYear > 2026) {
        errorDiv.textContent = 'Please enter a valid manufacturing year (1990-2026)';
        errorDiv.classList.add('show');
        return;
    }

    if (mileage < 0) {
        errorDiv.textContent = 'Mileage must be a positive number';
        errorDiv.classList.add('show');
        return;
    }

    if (carPrice <= 0) {
        errorDiv.textContent = 'Price must be greater than 0';
        errorDiv.classList.add('show');
        return;
    }

    errorDiv.classList.remove('show');

    // Get uploaded files
    const files = Array.from(servicePapersInput.files);
    
    // Fetch car data
    const carData = fetchCarData(carModel, manufacturingYear, mileage, fuelType, carPrice);

    // Add user-reported issues into data model (for display and slight risk bump)
    let userIssues = [];
    if (userIssuesText) {
        userIssues = userIssuesText.split(/[,\n]/).map(i => i.trim()).filter(Boolean);
    }
    const enrichedCarData = {
        ...carData,
        userIssues,
        uploadedFiles: files // Store uploaded files
    };
    
    // Calculate metrics
    const results = calculateMetrics(enrichedCarData, manufacturingYear, mileage, fuelType, carPrice, userIssues.length);
    
    // Display results
    displayResults(results, enrichedCarData);
    
    // Show results section
    resultsSection.classList.remove('hidden');
    
    // Scroll to results
    resultsSection.scrollIntoView({ behavior: 'smooth' });
});

// Fetch Car Data (Simulates database + API)
function fetchCarData(carModel, year, mileage, fuelType, price) {
    // Normalize inputs for matching
    const normalizedModel = carModel.trim();
    const normalizedFuel = fuelType.charAt(0).toUpperCase() + fuelType.slice(1).toLowerCase();
    
    // Try exact match first: "Model Year FuelType"
    const exactKey = `${normalizedModel} ${year} ${normalizedFuel}`;
    let dbData = mockDatabase[exactKey];
    
    // If no exact match, try model name only
    if (!dbData) {
        dbData = mockDatabase[normalizedModel];
    }
    
    // If still no match, use default data
    if (!dbData) {
        dbData = defaultData;
    }
    
    // Simulate optional external API call
    const apiData = fetchExternalAPI(carModel, year);
    
    // Merge data sources
    return {
        marketPrice: apiData.marketPrice || dbData.marketPrice,
        avgMaintenance: dbData.avgMaintenance,
        commonIssues: dbData.commonIssues,
        failureRate: dbData.failureRate,
        ...apiData
    };
}

// Simulate External API Call
function fetchExternalAPI(carModel, year) {
    // In production, this would be a real API call
    // For demo purposes, return empty object (using database data)
    return {};
}

// Calculate Metrics
// extraIssuesCount = number of user-reported issues/defects (optional)
function calculateMetrics(carData, year, mileage, fuelType, price, extraIssuesCount = 0) {
    const currentYear = 2026;
    const age = currentYear - year;
    
    // Calculate Risk Score (0-100)
    const ageRisk = Math.min(age * 3, 40); // Max 40 points for age
    const mileageRisk = Math.min((mileage / 10000) * 2, 40); // Max 40 points for mileage
    const failureRisk = carData.failureRate * 20; // Max 20 points for failure rate

    // Extra risk for user-reported issues (up to +10 points)
    const issuesRisk = Math.min(extraIssuesCount * 2, 10);

    const riskScore = Math.min(Math.round(ageRisk + mileageRisk + failureRisk + issuesRisk), 100);
    
    // Determine Risk Level
    let riskLevel = 'Low';
    if (riskScore >= 71) riskLevel = 'High';
    else if (riskScore >= 41) riskLevel = 'Medium';
    
    // Calculate Annual Maintenance Cost
    let maintenanceMultiplier = 1;
    if (age > 10) maintenanceMultiplier = 1.5;
    else if (age > 5) maintenanceMultiplier = 1.2;
    
    if (mileage > 150000) maintenanceMultiplier *= 1.3;
    else if (mileage > 100000) maintenanceMultiplier *= 1.15;
    
    const fuelMultipliers = {
        'petrol': 1.0,
        'diesel': 1.1,
        'cng': 1.15,
        'electric': 0.6,
        'hybrid': 0.8
    };
    maintenanceMultiplier *= fuelMultipliers[fuelType] || 1.0;
    
    const annualMaintenance = Math.round(carData.avgMaintenance * maintenanceMultiplier);
    
    // Calculate 5-Year Ownership Cost
    const fiveYearMaintenance = annualMaintenance * 5;
    const estimatedRepairs = Math.round(price * carData.failureRate * 2);
    const depreciation = Math.round(price * 0.3); // 30% depreciation over 5 years
    const totalOwnershipCost = price + fiveYearMaintenance + estimatedRepairs - depreciation;
    
    // Price Comparison
    const priceDifference = price - carData.marketPrice;
    const priceDifferencePercent = (priceDifference / carData.marketPrice) * 100;
    
    let priceComparison = 'Fair Price';
    if (priceDifferencePercent > 10) priceComparison = 'Overpriced';
    else if (priceDifferencePercent < -10) priceComparison = 'Good Deal';
    
    return {
        riskScore,
        riskLevel,
        annualMaintenance,
        fiveYearMaintenance,
        estimatedRepairs,
        depreciation,
        totalOwnershipCost,
        marketPrice: carData.marketPrice,
        priceComparison,
        priceDifference,
        priceDifferencePercent
    };
}

// Display Results
function displayResults(results, carData) {
    // Risk Score
    const riskBadge = document.getElementById('riskBadge');
    const riskValue = document.getElementById('riskValue');
    riskBadge.textContent = results.riskLevel;
    riskBadge.className = `risk-badge ${results.riskLevel.toLowerCase()}`;
    riskValue.textContent = `${results.riskScore}/100`;
    
    // Metrics (INR)
    document.getElementById('annualMaintenance').textContent = formatINR(results.annualMaintenance);
    document.getElementById('ownershipCost').textContent = formatINR(results.totalOwnershipCost);
    document.getElementById('marketPrice').textContent = formatINR(results.marketPrice);
    
    // Price Comparison
    const priceComp = document.getElementById('priceComparison');
    const priceDiff = Math.abs(results.priceDifferencePercent).toFixed(1);
    if (results.priceComparison === 'Good Deal') {
        priceComp.textContent = `Good Deal (${priceDiff}% below market)`;
        priceComp.style.color = '#28a745';
    } else if (results.priceComparison === 'Overpriced') {
        priceComp.textContent = `Overpriced (${priceDiff}% above market)`;
        priceComp.style.color = '#dc3545';
    } else {
        priceComp.textContent = 'Fair Price';
        priceComp.style.color = '#666';
    }
    
    // Common Issues
    const issuesList = document.getElementById('commonIssues');
    issuesList.innerHTML = '';
    carData.commonIssues.forEach(issue => {
        const li = document.createElement('li');
        li.textContent = issue;
        issuesList.appendChild(li);
    });

    // User-reported issues (if any)
    const userIssuesListEl = document.getElementById('userIssuesList');
    userIssuesListEl.innerHTML = '';
    if (carData.userIssues && carData.userIssues.length) {
        carData.userIssues.forEach(issue => {
            const li = document.createElement('li');
            li.textContent = issue;
            userIssuesListEl.appendChild(li);
        });
    } else {
        const li = document.createElement('li');
        li.textContent = 'No additional problems reported by user.';
        userIssuesListEl.appendChild(li);
    }
    
    // Display uploaded service papers
    displayServicePapers(carData.uploadedFiles || []);

    // Mechanic / Car expert contact
    displayMechanicContact();
    
    // Cost Chart
    renderCostChart(results);
}

function displayMechanicContact() {
    const mechanics = loadMechanics();
    const nameEl = document.getElementById('mechanicName');
    const phoneEl = document.getElementById('mechanicPhone');
    const emailEl = document.getElementById('mechanicEmail');
    const specialtyEl = document.getElementById('mechanicSpecialty');
    const emptyEl = document.getElementById('mechanicEmpty');

    if (!nameEl || !mechanics.length) {
        if (emptyEl) {
            emptyEl.style.display = 'block';
            if (nameEl) nameEl.style.display = 'none';
            if (phoneEl) phoneEl.closest('.mechanic-detail').style.display = 'none';
            if (emailEl) emailEl.closest('.mechanic-detail').style.display = 'none';
            if (specialtyEl) specialtyEl.style.display = 'none';
        }
        return;
    }

    const m = mechanics[mechanics.length - 1]; // show most recently registered
    nameEl.textContent = m.name;
    nameEl.style.display = 'block';
    phoneEl.textContent = m.phone;
    phoneEl.href = 'tel:' + m.phone.replace(/\s/g, '');
    phoneEl.closest('.mechanic-detail').style.display = 'block';
    emailEl.textContent = m.email;
    emailEl.href = 'mailto:' + m.email;
    emailEl.closest('.mechanic-detail').style.display = 'block';
    specialtyEl.textContent = m.specialty || '';
    specialtyEl.style.display = m.specialty ? 'block' : 'none';
    if (emptyEl) emptyEl.style.display = 'none';
}

// Render Cost Chart
function renderCostChart(results) {
    const ctx = document.getElementById('costChart').getContext('2d');
    
    // Destroy existing chart if it exists
    if (window.costChartInstance) {
        window.costChartInstance.destroy();
    }
    
    const carPrice = parseFloat(document.getElementById('carPrice').value);
    
    window.costChartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5'],
            datasets: [{
                label: 'Annual Maintenance Cost',
                data: [
                    results.annualMaintenance,
                    results.annualMaintenance,
                    results.annualMaintenance,
                    results.annualMaintenance,
                    results.annualMaintenance
                ],
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                borderColor: 'rgba(255, 255, 255, 0.4)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    grid: { color: 'rgba(255, 255, 255, 0.1)' },
                    ticks: {
                        color: '#b0b0b0',
                        callback: function(value) {
                            return formatINR(value);
                        }
                    }
                },
                x: {
                    grid: { color: 'rgba(255, 255, 255, 0.1)' },
                    ticks: { color: '#b0b0b0' }
                }
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    labels: { color: '#e5e5e5' }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return 'Cost: ' + formatINR(context.parsed.y);
                        }
                    }
                }
            }
        }
    });
}

// Save Report Handler
document.getElementById('saveReportBtn').addEventListener('click', () => {
    // In production, this would save to a database
    alert('Report saved successfully! (This is a demo - in production, this would save to a database)');
});

// Download PDF Handler
document.getElementById('downloadPdfBtn').addEventListener('click', () => {
    // In production, use a library like jsPDF or Puppeteer
    alert('PDF download initiated! (This is a demo - in production, this would generate a PDF)');
    
    // Example: You would use jsPDF here
    // const { jsPDF } = window.jspdf;
    // const doc = new jsPDF();
    // doc.text('CarTrust Report', 20, 20);
    // doc.save('cartrust-report.pdf');
});

function displayServicePapers(files) {
    const servicePapersSection = document.getElementById('servicePapersSection');
    const servicePapersDisplay = document.getElementById('servicePapersDisplay');
    
    if (!servicePapersSection || !servicePapersDisplay) return;
    
    if (files && files.length > 0) {
        servicePapersSection.style.display = 'block';
        servicePapersDisplay.innerHTML = '';
        
        files.forEach((file) => {
            const previewItem = document.createElement('div');
            previewItem.className = 'file-preview-item';
            
            if (file.type && file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    const img = document.createElement('img');
                    img.src = e.target.result;
                    img.alt = file.name;
                    img.style.cursor = 'pointer';
                    img.onclick = () => {
                        // Open image in new window/tab
                        const newWindow = window.open();
                        newWindow.document.write(`<img src="${e.target.result}" style="max-width:100%;height:auto;">`);
                    };
                    previewItem.appendChild(img);
                    
                    const fileName = document.createElement('div');
                    fileName.className = 'file-name';
                    fileName.textContent = file.name.length > 25 ? file.name.substring(0, 25) + '...' : file.name;
                    previewItem.appendChild(fileName);
                };
                reader.readAsDataURL(file);
            } else if (file.type === 'application/pdf') {
                previewItem.classList.add('pdf-file');
                const pdfIcon = document.createElement('div');
                pdfIcon.className = 'pdf-icon';
                pdfIcon.textContent = '📄';
                previewItem.appendChild(pdfIcon);
                
                const fileName = document.createElement('div');
                fileName.className = 'file-name';
                fileName.textContent = file.name.length > 25 ? file.name.substring(0, 25) + '...' : file.name;
                previewItem.appendChild(fileName);
            } else {
                const fileName = document.createElement('div');
                fileName.className = 'file-name';
                fileName.textContent = file.name;
                previewItem.appendChild(fileName);
            }
            
            servicePapersDisplay.appendChild(previewItem);
        });
    } else {
        servicePapersSection.style.display = 'none';
    }
}

// New Analysis Handler
document.getElementById('newAnalysisBtn').addEventListener('click', () => {
    resultsSection.classList.add('hidden');
    carForm.reset();
    uploadedFiles = [];
    if (filePreview) filePreview.innerHTML = '';
    if (servicePapersInput) servicePapersInput.value = '';
    document.getElementById('carModel').focus();
});
