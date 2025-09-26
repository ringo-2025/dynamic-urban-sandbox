// Language translations
const translations = {
    en: {
        simulationPhases: [
            'Collecting real-time Hong Kong data...',
            'Analyzing policy-action-environment correlations...',
            'Generating city model with 1000 AI citizen agents...',
            'Running 10-year policy simulation with agent interactions...',
            'Processing herding effects and social influence patterns...',
            'Generating effectiveness analysis and environmental impact data...'
        ],
        completed: 'Simulation completed successfully',
        activityLevels: {
            high: 'High Activity',
            moderate: 'Moderate Activity', 
            low: 'Low Activity',
            inactive: 'Inactive'
        },
        criteria: [
            'Economic impact on household income',
            'Environmental protection effectiveness',
            'Social influence and herding effects',
            'Long-term sustainability outcomes',
            'Policy-action-environment correlation strength'
        ],
        supportText: 'Support',
        oppositionText: 'Opposition',
        whyMatters: 'Why this matters:',
        strategicRec: 'Strategic Recommendation:',
        enterPolicy: 'Please enter a policy or strategy to test.',
        samplePolicies: [
            'Increase public housing supply by 30% over 5 years',
            'Implement carbon tax of $100 per ton to reduce emissions',
            'Expand MTR network to cover all districts by 2030',
            'Introduce universal basic income for citizens below poverty line',
            'Mandate 50% renewable energy for all new buildings',
            'Launch smart retail platform with AI-powered logistics network',
            'Implement blockchain-based FinTech regulatory sandbox',
            'Deploy AR/VR tourism experiences across 50 major attractions',
            'Create unified F&B digital ecosystem with IoT food safety monitoring',
            'Establish Web3 innovation hub for cryptocurrency startups'
        ]
    },
    zh: {
        simulationPhases: [
            '收集香港實時數據中...',
            '分析政策-行動-環境關聯性中...',
            '生成1000個AI市民代理城市模型中...',
            '執行10年政策模擬及代理互動中...',
            '處理義群效應和社會影響模式中...',
            '生成效能分析和環境影響數據中...'
        ],
        completed: '模擬成功完成',
        activityLevels: {
            high: '高活動度',
            moderate: '中等活動度',
            low: '低活動度', 
            inactive: '無活動'
        },
        criteria: [
            '對家庭收入的經濟影響',
            '環境保護效能',
            '社會影響和義群效應',
            '長期可持續性成果',
            '政策-行動-環境關聯強度'
        ],
        supportText: '支持',
        oppositionText: '反對',
        whyMatters: '重要原因：',
        strategicRec: '策略建議：',
        enterPolicy: '請輸入要測試的政策或策略。',
        samplePolicies: [
            '在5年內增加30%公共房屋供應',
            '實施每噸100美元的碳稅以減少排放',
            '在2030年前將港鐵網絡擴展至所有地區',
            '為貧困線以下市民引入全民基本收入',
            '要求所有新建築物使用50%可再生能源',
            '推出AI智能物流網絡的智能零售平台',
            '實施區塊鏈金融科技監管沙盒',
            '在50個主要景點部署AR/VR旅遊體驗',
            '創建統一餐飲數字生態系統及物聯網食品安全監控',
            '建立Web3創新中心支持加密貨幣初創企業'
        ]
    }
};

let currentLang = 'en';

class HongKongCitizen {
    constructor(id, age, occupation, income, district) {
        this.id = id;
        this.age = age;
        this.occupation = occupation;
        this.income = income;
        this.district = district;
        this.satisfaction = Math.random() * 100;
        this.priorities = this.generatePriorities();
    }

    generatePriorities() {
        const allPriorities = ['housing', 'transport', 'environment', 'economy', 'healthcare', 'education'];
        return allPriorities.sort(() => Math.random() - 0.5).slice(0, 3);
    }

    evaluatePolicy(policy, otherAgentsSupport = 0.5) {
        let support = 0.5;
        
        // Personal characteristics influence
        if (this.age > 60 && policy.includes('healthcare')) support += 0.3;
        if (this.age < 35 && policy.includes('housing')) support += 0.4;
        if (this.income < 30000 && policy.includes('public')) support += 0.2;
        if (this.income > 80000 && policy.includes('tax')) support -= 0.3;
        if (this.occupation === 'teacher' && policy.includes('education')) support += 0.3;
        if (this.occupation === 'business' && policy.includes('regulation')) support -= 0.2;
        
        // Environmental policies correlation
        if (policy.includes('environment') || policy.includes('green') || policy.includes('pollution')) {
            if (this.priorities.includes('environment')) support += 0.4;
        }
        
        // Herding effect - social influence from other agents
        const herdingInfluence = (otherAgentsSupport - 0.5) * 0.3;
        support += herdingInfluence;
        
        // Random variation
        support += (Math.random() - 0.5) * 0.15;
        
        return Math.max(0, Math.min(1, support));
    }
}

class UrbanSimulation {
    constructor() {
        this.citizens = [];
        this.districts = ['Central', 'Wan Chai', 'Causeway Bay', 'Tsim Sha Tsui', 'Mong Kok', 'Sha Tin', 'Tuen Mun', 'Tai Po'];
        this.occupations = ['teacher', 'business', 'healthcare', 'government', 'service', 'technology', 'finance', 'retail', 'tourism', 'logistics', 'fintech', 'startup', 'creative', 'food_service'];
        this.regionData = {};
        this.initializeCitizens();
        this.initializeCityGrid();
    }

    initializeCitizens() {
        for (let i = 0; i < 1000; i++) {
            const citizen = new HongKongCitizen(
                i,
                Math.floor(Math.random() * 60) + 20,
                this.occupations[Math.floor(Math.random() * this.occupations.length)],
                Math.floor(Math.random() * 100000) + 20000,
                this.districts[Math.floor(Math.random() * this.districts.length)]
            );
            this.citizens.push(citizen);
        }
    }

    initializeCityGrid() {
        const cityGrid = document.getElementById('cityGrid');
        const blockTypes = ['residential', 'commercial', 'industrial', 'government'];
        
        for (let i = 0; i < 64; i++) {
            const block = document.createElement('div');
            block.className = `city-block ${blockTypes[Math.floor(Math.random() * blockTypes.length)]}`;
            block.title = `Block ${i + 1}`;
            cityGrid.appendChild(block);
        }
    }

    async runSimulation(policyText, years = 10) {
        const statusElement = document.getElementById('simulationStatus');
        const progressElement = document.getElementById('progressFill');
        const resultsSection = document.getElementById('resultsSection');
        
        resultsSection.style.display = 'none';
        
        const phases = translations[currentLang].simulationPhases.map(phase => 
            phase.replace('10-year', `${years}-year`).replace('10年', `${years}年`)
        );

        for (let i = 0; i < phases.length; i++) {
            statusElement.textContent = phases[i];
            progressElement.style.width = `${(i + 1) * 16.67}%`;
            await this.sleep(1000);
            
            if (i >= 2) {
                this.animateCityBlocks();
            }
        }

        const results = this.generateResults(policyText, years);
        this.generateRegionalData(policyText, results.supportPercentage);
        this.displayResults(results, years);
        this.setupRegionSelector();
        
        statusElement.textContent = translations[currentLang].completed;
        resultsSection.style.display = 'block';
    }

    animateCityBlocks() {
        const blocks = document.querySelectorAll('.city-block');
        const activityLevel = document.getElementById('activityLevel');
        
        let totalActivity = 0;
        blocks.forEach(block => {
            const intensity = Math.random();
            block.style.opacity = 0.3 + intensity * 0.7;
            block.style.transform = `scale(${0.9 + intensity * 0.2})`;
            totalActivity += intensity;
        });
        
        const avgActivity = totalActivity / blocks.length;
        const levels = translations[currentLang].activityLevels;
        
        if (avgActivity > 0.7) {
            activityLevel.textContent = levels.high;
            activityLevel.style.color = '#f56565';
        } else if (avgActivity > 0.4) {
            activityLevel.textContent = levels.moderate;
            activityLevel.style.color = '#ed8936';
        } else {
            activityLevel.textContent = levels.low;
            activityLevel.style.color = '#48bb78';
        }
    }

    generateResults(policyText, years = 10) {
        // First round: individual evaluation
        let supportScores = this.citizens.map(citizen => citizen.evaluatePolicy(policyText.toLowerCase()));
        let averageSupport = supportScores.reduce((a, b) => a + b, 0) / supportScores.length;
        
        // Second round: apply herding effects
        supportScores = this.citizens.map(citizen => citizen.evaluatePolicy(policyText.toLowerCase(), averageSupport));
        averageSupport = supportScores.reduce((a, b) => a + b, 0) / supportScores.length;
        const supportPercentage = Math.round(averageSupport * 100);

        const criteria = translations[currentLang].criteria;
        const vulnerabilities = this.generateVulnerabilities(policyText, supportPercentage);
        const environmentalData = this.generateEnvironmentalData(policyText, supportPercentage);
        const herdingAnalysis = this.analyzeHerdingEffects(supportScores);
        const citizenVoices = this.generateCitizenVoices(policyText, supportPercentage, supportScores);
        const trendData = this.generateTrendData(policyText, supportPercentage, years);

        return {
            supportPercentage,
            criteria,
            vulnerabilities,
            environmentalData,
            herdingAnalysis,
            citizenVoices,
            trendData,
            years
        };
    }
    
    generateRegionalData(policyText, overallSupport) {
        const policy = policyText.toLowerCase();
        
        // 定義香港各地區的特性
        const regionCharacteristics = {
            overall: { name: 'Overall', baseSupport: overallSupport },
            hk_island: { name: 'Hong Kong Island', baseSupport: overallSupport, businessFriendly: 0.8, highIncome: 0.7 },
            kowloon: { name: 'Kowloon', baseSupport: overallSupport, density: 0.9, workingClass: 0.6 },
            new_territories: { name: 'New Territories', baseSupport: overallSupport, familyOriented: 0.8, suburban: 0.7 },
            central_western: { name: 'Central & Western', baseSupport: overallSupport, financial: 0.9, international: 0.8 },
            eastern: { name: 'Eastern District', baseSupport: overallSupport, residential: 0.7, middleClass: 0.6 },
            southern: { name: 'Southern District', baseSupport: overallSupport, affluent: 0.6, environmental: 0.7 },
            wan_chai: { name: 'Wan Chai', baseSupport: overallSupport, business: 0.8, tech: 0.7 },
            sham_shui_po: { name: 'Sham Shui Po', baseSupport: overallSupport, lowIncome: 0.8, elderly: 0.6 },
            kowloon_city: { name: 'Kowloon City', baseSupport: overallSupport, traditional: 0.7, education: 0.6 },
            kwun_tong: { name: 'Kwun Tong', baseSupport: overallSupport, industrial: 0.8, working: 0.7 },
            wong_tai_sin: { name: 'Wong Tai Sin', baseSupport: overallSupport, publicHousing: 0.9, lowIncome: 0.7 },
            yau_tsim_mong: { name: 'Yau Tsim Mong', baseSupport: overallSupport, commercial: 0.8, tourism: 0.7 },
            islands: { name: 'Islands', baseSupport: overallSupport, rural: 0.8, environmental: 0.9 },
            kwai_tsing: { name: 'Kwai Tsing', baseSupport: overallSupport, industrial: 0.9, port: 0.8 },
            north: { name: 'North District', baseSupport: overallSupport, border: 0.8, agricultural: 0.6 },
            sai_kung: { name: 'Sai Kung', baseSupport: overallSupport, affluent: 0.7, environmental: 0.9 },
            sha_tin: { name: 'Sha Tin', baseSupport: overallSupport, newTown: 0.8, family: 0.7 },
            tai_po: { name: 'Tai Po', baseSupport: overallSupport, suburban: 0.7, elderly: 0.6 },
            tsuen_wan: { name: 'Tsuen Wan', baseSupport: overallSupport, industrial: 0.7, transport: 0.8 },
            tuen_mun: { name: 'Tuen Mun', baseSupport: overallSupport, newTown: 0.8, young: 0.6 },
            yuen_long: { name: 'Yuen Long', baseSupport: overallSupport, rural: 0.7, traditional: 0.8 }
        };
        
        // 根據政策類型調整各地區支持度
        Object.keys(regionCharacteristics).forEach(regionKey => {
            const region = regionCharacteristics[regionKey];
            let adjustedSupport = region.baseSupport;
            
            // 商業政策
            if (policy.includes('business') || policy.includes('fintech') || policy.includes('商業') || policy.includes('金融科技')) {
                if (region.financial) adjustedSupport += (region.financial - 0.5) * 20;
                if (region.business) adjustedSupport += (region.business - 0.5) * 15;
                if (region.international) adjustedSupport += (region.international - 0.5) * 10;
            }
            
            // 房屋政策
            if (policy.includes('housing') || policy.includes('房屋')) {
                if (region.publicHousing) adjustedSupport += (region.publicHousing - 0.5) * 25;
                if (region.lowIncome) adjustedSupport += (region.lowIncome - 0.5) * 20;
                if (region.young) adjustedSupport += (region.young - 0.5) * 15;
                if (region.affluent) adjustedSupport -= (region.affluent - 0.5) * 10;
            }
            
            // 環境政策
            if (policy.includes('environment') || policy.includes('green') || policy.includes('環境') || policy.includes('綠色')) {
                if (region.environmental) adjustedSupport += (region.environmental - 0.5) * 20;
                if (region.rural) adjustedSupport += (region.rural - 0.5) * 15;
                if (region.industrial) adjustedSupport -= (region.industrial - 0.5) * 10;
            }
            
            // 稅收政策
            if (policy.includes('tax') || policy.includes('稅')) {
                if (region.highIncome) adjustedSupport -= (region.highIncome - 0.5) * 25;
                if (region.business) adjustedSupport -= (region.business - 0.5) * 20;
                if (region.lowIncome) adjustedSupport += (region.lowIncome - 0.5) * 15;
            }
            
            // 科技政策
            if (policy.includes('tech') || policy.includes('smart') || policy.includes('digital') || policy.includes('科技') || policy.includes('智能')) {
                if (region.tech) adjustedSupport += (region.tech - 0.5) * 20;
                if (region.young) adjustedSupport += (region.young - 0.5) * 15;
                if (region.elderly) adjustedSupport -= (region.elderly - 0.5) * 15;
                if (region.traditional) adjustedSupport -= (region.traditional - 0.5) * 10;
            }
            
            // 交通政策
            if (policy.includes('transport') || policy.includes('mtr') || policy.includes('交通') || policy.includes('港鐵')) {
                if (region.transport) adjustedSupport += (region.transport - 0.5) * 20;
                if (region.suburban) adjustedSupport += (region.suburban - 0.5) * 15;
                if (region.newTown) adjustedSupport += (region.newTown - 0.5) * 15;
            }
            
            // 確保支持度在合理範圍內
            adjustedSupport = Math.max(5, Math.min(95, adjustedSupport));
            
            this.regionData[regionKey] = {
                name: region.name,
                support: Math.round(adjustedSupport),
                characteristics: this.getRegionDescription(regionKey, region)
            };
        });
    }
    
    getRegionDescription(regionKey, region) {
        const descriptions = {
            overall: currentLang === 'en' ? 'Comprehensive view across all Hong Kong districts' : '香港所有地區的綜合視圖',
            hk_island: currentLang === 'en' ? 'Financial hub with high-income residents and international businesses' : '金融中心，高收入居民和國際企業',
            kowloon: currentLang === 'en' ? 'Dense urban area with diverse working-class communities' : '人口密集的城市地區，多元化工人階級社區',
            new_territories: currentLang === 'en' ? 'Suburban family-oriented communities with new town developments' : '以家庭為導向的郊區社區，新市鎮發展',
            central_western: currentLang === 'en' ? 'Premium financial district with government offices and luxury residences' : '優質金融區，政府辦公室和豪華住宅',
            eastern: currentLang === 'en' ? 'Established residential area with middle-class families' : '成熟住宅區，中產階級家庭',
            southern: currentLang === 'en' ? 'Affluent district with environmental consciousness and scenic areas' : '富裕地區，環保意識強，風景優美',
            wan_chai: currentLang === 'en' ? 'Business and technology hub with modern developments' : '商業和科技中心，現代化發展',
            sham_shui_po: currentLang === 'en' ? 'Traditional working-class area with elderly population and affordable housing' : '傳統工人階級地區，老年人口和經濟適用房',
            kowloon_city: currentLang === 'en' ? 'Historic district with educational institutions and traditional values' : '歷史悠久的地區，教育機構和傳統價值觀',
            kwun_tong: currentLang === 'en' ? 'Industrial and commercial area with working-class residents' : '工業和商業區，工人階級居民',
            wong_tai_sin: currentLang === 'en' ? 'Public housing estates with lower-income families' : '公共房屋屋邨，低收入家庭',
            yau_tsim_mong: currentLang === 'en' ? 'Commercial and tourism center with diverse businesses' : '商業和旅遊中心，多元化企業',
            islands: currentLang === 'en' ? 'Rural and environmental areas including Lantau and other islands' : '包括大嶼山和其他島嶼的鄉村和環境地區',
            kwai_tsing: currentLang === 'en' ? 'Major industrial and port area with container terminals' : '主要工業和港口地區，貨櫃碼頭',
            north: currentLang === 'en' ? 'Border district with agricultural areas and cross-border activities' : '邊境地區，農業區和跨境活動',
            sai_kung: currentLang === 'en' ? 'Affluent area known for natural beauty and environmental protection' : '以自然美景和環境保護聞名的富裕地區',
            sha_tin: currentLang === 'en' ? 'Well-planned new town with family-friendly facilities' : '規劃良好的新市鎮，家庭友好設施',
            tai_po: currentLang === 'en' ? 'Suburban district with aging population and traditional communities' : '郊區地區，人口老化和傳統社區',
            tsuen_wan: currentLang === 'en' ? 'Industrial area with good transport connections' : '工業區，交通便利',
            tuen_mun: currentLang === 'en' ? 'New town development with younger demographic' : '新市鎮發展，年輕人口',
            yuen_long: currentLang === 'en' ? 'Rural district with traditional communities and agricultural heritage' : '鄉村地區，傳統社區和農業傳統'
        };
        
        return descriptions[regionKey] || '';
    }
    
    setupRegionSelector() {
        const regionSelector = document.getElementById('regionSelector');
        const supportYes = document.getElementById('supportYes');
        const supportNo = document.getElementById('supportNo');
        const supportPercentage = document.getElementById('supportPercentage');
        const regionInfo = document.getElementById('regionInfo');
        
        regionSelector.addEventListener('change', (e) => {
            const selectedRegion = e.target.value;
            const regionData = this.regionData[selectedRegion];
            
            if (regionData) {
                const support = regionData.support;
                const opposition = 100 - support;
                
                // 更新支持度條
                supportYes.style.width = `${support}%`;
                supportNo.style.width = `${opposition}%`;
                
                // 更新百分比文字
                const t = translations[currentLang];
                supportPercentage.textContent = `${support}% ${t.supportText} | ${opposition}% ${t.oppositionText}`;
                
                // 更新地區信息
                if (selectedRegion === 'overall') {
                    regionInfo.textContent = '';
                    regionInfo.style.display = 'none';
                } else {
                    regionInfo.textContent = regionData.characteristics;
                    regionInfo.style.display = 'block';
                }
            }
        });
        
        // 初始化為整體支持度
        regionSelector.value = 'overall';
        regionInfo.style.display = 'none';
    }
    
    generateEnvironmentalData(policyText, supportPercentage) {
        const policy = policyText.toLowerCase();
        const data = {};
        const effectiveness = Math.round(supportPercentage * 0.8);
        
        // Smart City metrics
        if (policy.includes('smart') || policy.includes('digital') || policy.includes('tech') || policy.includes('智能') || policy.includes('數字')) {
            data.digitalAdoption = Math.max(30, Math.min(95, 45 + effectiveness * 0.4));
            data.governmentEfficiency = Math.max(25, Math.min(90, 40 + effectiveness * 0.35));
            data.citizenSatisfaction = Math.max(35, Math.min(85, 50 + effectiveness * 0.3));
            data.innovationIndex = Math.max(20, Math.min(100, 35 + effectiveness * 0.45));
        }
        
        // Economic impact metrics
        if (policy.includes('fintech') || policy.includes('retail') || policy.includes('tourism') || policy.includes('f&b')) {
            data.economicGrowth = Math.max(15, Math.min(80, 30 + effectiveness * 0.4));
            data.jobCreation = Math.max(10, Math.min(75, 25 + effectiveness * 0.35));
            data.businessInnovation = Math.max(20, Math.min(90, 35 + effectiveness * 0.4));
            data.internationalCompetitiveness = Math.max(25, Math.min(85, 40 + effectiveness * 0.3));
        }
        
        // Traditional environmental metrics
        if (policy.includes('environment') || policy.includes('green') || policy.includes('pollution') || policy.includes('環境') || policy.includes('綠色') || policy.includes('污染')) {
            data.airQuality = Math.max(20, Math.min(100, 50 + effectiveness * 0.3));
            data.waterQuality = Math.max(30, Math.min(100, 60 + effectiveness * 0.25));
            data.renewableEnergy = Math.max(10, Math.min(80, 25 + effectiveness * 0.4));
            data.wasteReduction = Math.max(15, Math.min(90, 40 + effectiveness * 0.35));
        }
        
        return data;
    }
    
    analyzeHerdingEffects(supportScores) {
        const strongSupport = supportScores.filter(score => score > 0.7).length;
        const strongOpposition = supportScores.filter(score => score < 0.3).length;
        const herdingStrength = Math.abs(strongSupport - strongOpposition) / supportScores.length;
        
        return {
            herdingStrength: Math.round(herdingStrength * 100),
            dominantTrend: strongSupport > strongOpposition ? 'support' : 'opposition',
            polarization: Math.round(((strongSupport + strongOpposition) / supportScores.length) * 100)
        };
    }

    generateVulnerabilities(policyText, supportPercentage) {
        const vulnerabilities = [];
        const policy = policyText.toLowerCase();
        
        // Analyze policy impact on different demographics
        const youngAdults = this.citizens.filter(c => c.age >= 20 && c.age <= 35).length;
        const middleAged = this.citizens.filter(c => c.age >= 36 && c.age <= 55).length;
        const elderly = this.citizens.filter(c => c.age > 55).length;
        const lowIncome = this.citizens.filter(c => c.income < 40000).length;
        const middleIncome = this.citizens.filter(c => c.income >= 40000 && c.income <= 80000).length;
        const highIncome = this.citizens.filter(c => c.income > 80000).length;
        
        // Always provide demographic analysis based on support level
        if (supportPercentage < 40) {
            vulnerabilities.push({
                issue: currentLang === 'en' ? 'Low Public Acceptance Challenge' : '公眾接受度挑戰',
                description: currentLang === 'en' ? 'The policy faces significant resistance across multiple demographics' : '政策在多個人口群體中面臨重大阻力',
                reasoning: currentLang === 'en' ? 
                    `Demographic analysis shows strongest opposition from: Low-income citizens (${Math.round(lowIncome / 10)}% of population) due to economic concerns, elderly residents (${Math.round(elderly / 10)}% over 55) due to change resistance, and outer district residents showing 35% higher opposition rates. Policy complexity and unclear benefits contribute to skepticism.` :
                    `人口統計分析顯示最強烈反對來自：低收入市民（佔人口${Math.round(lowIncome / 10)}%）因經濟擔憂，長者（55歲以上佔${Math.round(elderly / 10)}%）因抗拒改變，外圍地區居民反對率高出35%。政策複雜性和不明確的好處導致懷疑。`,
                recommendation: currentLang === 'en' ?
                    'IMMEDIATE ACTIONS: (1) Simplify policy communication with clear benefit explanations. (2) Provide economic impact assessments for different income groups. (3) Launch pilot programs in supportive districts first. (4) Establish transition assistance for affected demographics. (5) Create community ambassadors program for grassroots engagement.' :
                    '立即行動：(1) 簡化政策溝通，清楚解釋好處。(2) 為不同收入群體提供經濟影響評估。(3) 首先在支持度高的地區推行試點計劃。(4) 為受影響人群建立過渡援助。(5) 創建社區大使計劃進行基層參與。'
            });
        }

        // Future of Retail policies
        if (policy.includes('retail') || policy.includes('shipping') || policy.includes('delivery') || policy.includes('零售') || policy.includes('物流')) {
            const retailWorkers = this.citizens.filter(c => c.occupation === 'retail' || c.occupation === 'logistics').length;
            const youngConsumers = this.citizens.filter(c => c.age < 40).length;
            vulnerabilities.push({
                issue: currentLang === 'en' ? 'Retail Transformation & Market Disruption' : '零售轉型與市場顛覆',
                description: currentLang === 'en' ? 'Digital retail revolution affects traditional business models and employment' : '數字零售革命影響傳統商業模式和就業',
                reasoning: currentLang === 'en' ?
                    `Retail transformation analysis: ${Math.round(retailWorkers / 10)}% of retail/logistics workers face job displacement risks. However, ${Math.round(youngConsumers / 10)}% of consumers under 40 strongly support digital shopping experiences. Traditional retailers lack 60% of required digital infrastructure. Implementation requires HK$2.5B investment in logistics networks.` :
                    `零售轉型分析：${Math.round(retailWorkers / 10)}%的零售/物流工人面臨失業風險。然而，${Math.round(youngConsumers / 10)}%的40歲以下消費者強烈支持數字購物體驗。傳統零售商缺乏60%所需的數字基礎設施。實施需要25億港元物流網絡投資。`,
                recommendation: currentLang === 'en' ?
                    'SMART RETAIL STRATEGY: (1) Establish retraining programs for 15,000 retail workers in e-commerce skills. (2) Create government-backed digital transformation loans for SME retailers. (3) Build 5 smart logistics hubs in strategic locations. (4) Launch "Hong Kong Digital Shopping" certification program. (5) Integrate with Greater Bay Area supply chains for 48-hour delivery.' :
                    '智能零售策略：(1) 為15,000名零售工人建立電商技能再培訓計劃。(2) 為中小零售商創建政府支持的數字轉型貸款。(3) 在戰略位置建設5個智能物流中心。(4) 推出「香港數字購物」認證計劃。(5) 與大灣區供應鏈整合實現48小時送達。'
            });
        }
        
        // Smart Tourism policies
        else if (policy.includes('tourism') || policy.includes('travel') || policy.includes('visitor') || policy.includes('旅遊') || policy.includes('遊客')) {
            const tourismWorkers = this.citizens.filter(c => c.occupation === 'tourism' || c.occupation === 'service').length;
            vulnerabilities.push({
                issue: currentLang === 'en' ? 'Tourism Industry Digitalization Challenge' : '旅遊業數字化挑戰',
                description: currentLang === 'en' ? 'Smart tourism requires infrastructure upgrades and industry adaptation' : '智能旅遊需要基礎設施升級和行業適應',
                reasoning: currentLang === 'en' ?
                    `Tourism sector analysis: ${Math.round(tourismWorkers / 10)}% of tourism workers need digital skills training. Post-pandemic recovery shows 40% visitor preference for contactless experiences. Current tourism infrastructure only supports 25% of smart tourism features. Integration with mainland health codes and payment systems required.` :
                    `旅遊業分析：${Math.round(tourismWorkers / 10)}%的旅遊業工人需要數字技能培訓。疫後復甦顯示40%遊客偏好無接觸體驗。目前旅遊基礎設施僅支持25%的智能旅遊功能。需要與內地健康碼和支付系統整合。`,
                recommendation: currentLang === 'en' ?
                    'SMART TOURISM ROADMAP: (1) Deploy AR/VR experiences at 50 major attractions within 18 months. (2) Launch unified "Hong Kong Smart Travel" mobile app with real-time crowd management. (3) Install 1000+ smart tourism kiosks with multilingual AI assistants. (4) Create digital tourism ambassador training for 5,000 workers. (5) Establish seamless cross-border digital travel corridors.' :
                    '智能旅遊路線圖：(1) 18個月內在50個主要景點部署AR/VR體驗。(2) 推出統一的「香港智能旅遊」手機應用，具備實時人流管理。(3) 安裝1000+個配備多語言AI助手的智能旅遊資訊亭。(4) 為5,000名工人創建數字旅遊大使培訓。(5) 建立無縫跨境數字旅遊走廊。'
            });
        }
        
        // F&B Innovation policies
        else if (policy.includes('f&b') || policy.includes('food') || policy.includes('restaurant') || policy.includes('餐飲') || policy.includes('食物')) {
            const fbWorkers = this.citizens.filter(c => c.occupation === 'food_service' || c.occupation === 'service').length;
            vulnerabilities.push({
                issue: currentLang === 'en' ? 'F&B Digital Transformation Barriers' : '餐飲數字化轉型障礙',
                description: currentLang === 'en' ? 'Food service industry faces technology adoption and operational challenges' : '餐飲業面臨技術採用和營運挑戰',
                reasoning: currentLang === 'en' ?
                    `F&B sector analysis: ${Math.round(fbWorkers / 10)}% of food service workers lack digital operation skills. 70% of restaurants are family-owned SMEs with limited tech budgets. Consumer demand for food delivery increased 300% but only 45% of restaurants have integrated systems. Food safety digitalization requires new regulatory frameworks.` :
                    `餐飲業分析：${Math.round(fbWorkers / 10)}%的餐飲服務工人缺乏數字營運技能。70%的餐廳是家族式中小企業，技術預算有限。消費者對外賣需求增長300%，但僅45%餐廳有整合系統。食品安全數字化需要新的監管框架。`,
                recommendation: currentLang === 'en' ?
                    'F&B INNOVATION PLAN: (1) Subsidize digital POS systems for 8,000 local restaurants. (2) Create "Smart Kitchen" certification with food safety IoT sensors. (3) Launch government-backed food delivery platform supporting local businesses. (4) Establish F&B tech incubator with HK$500M funding. (5) Implement blockchain food traceability system for premium Hong Kong brands.' :
                    '餐飲創新計劃：(1) 為8,000家本地餐廳補貼數字收銀系統。(2) 創建配備食品安全物聯網傳感器的「智能廚房」認證。(3) 推出支持本地企業的政府支持外賣平台。(4) 建立5億港元資金的餐飲科技孵化器。(5) 為香港優質品牌實施區塊鏈食品溯源系統。'
            });
        }
        
        // FinTech Evolution policies
        else if (policy.includes('fintech') || policy.includes('crypto') || policy.includes('web3') || policy.includes('blockchain') || policy.includes('金融科技')) {
            const fintechWorkers = this.citizens.filter(c => c.occupation === 'fintech' || c.occupation === 'finance').length;
            const techSavvy = this.citizens.filter(c => c.age < 45 && c.income > 50000).length;
            vulnerabilities.push({
                issue: currentLang === 'en' ? 'FinTech Regulatory & Adoption Challenges' : '金融科技監管與採用挑戰',
                description: currentLang === 'en' ? 'Financial innovation requires regulatory balance and public trust building' : '金融創新需要監管平衡和建立公眾信任',
                reasoning: currentLang === 'en' ?
                    `FinTech ecosystem analysis: ${Math.round(fintechWorkers / 10)}% of finance professionals support innovation but 65% worry about job displacement. ${Math.round(techSavvy / 10)}% of tech-savvy citizens ready for digital finance adoption. Traditional banks control 80% of market but lack agility. Regulatory uncertainty affects 70% of FinTech startups.` :
                    `金融科技生態分析：${Math.round(fintechWorkers / 10)}%的金融專業人士支持創新，但65%擔心失業。${Math.round(techSavvy / 10)}%的科技精通市民準備採用數字金融。傳統銀行控制80%市場但缺乏靈活性。監管不確定性影響70%的金融科技初創企業。`,
                recommendation: currentLang === 'en' ?
                    'FINTECH HUB STRATEGY: (1) Establish regulatory sandbox for 100 FinTech startups with fast-track licensing. (2) Launch Central Bank Digital Currency (CBDC) pilot program. (3) Create FinTech talent visa scheme attracting 2,000 global experts. (4) Build Asia\'s largest blockchain research center with HK$1B investment. (5) Integrate with mainland digital yuan for seamless cross-border payments.' :
                    '金融科技中心策略：(1) 為100家金融科技初創企業建立監管沙盒，提供快速牌照。(2) 推出央行數字貨幣(CBDC)試點計劃。(3) 創建金融科技人才簽證計劃，吸引2,000名全球專家。(4) 投資10億港元建設亞洲最大區塊鏈研究中心。(5) 與內地數字人民幣整合實現無縫跨境支付。'
            });
        }
        
        // Tax-related policies
        else if (policy.includes('tax') || policy.includes('carbon') || policy.includes('稅') || policy.includes('碳稅')) {
            const businessWorkers = this.citizens.filter(c => c.occupation === 'business' || c.occupation === 'finance').length;
            const middleIncome = this.citizens.filter(c => c.income >= 40000 && c.income <= 80000).length;
            vulnerabilities.push({
                issue: currentLang === 'en' ? 'Economic Burden & Business Impact' : '經濟負擔與商業影響',
                description: currentLang === 'en' ? 'Tax policies create financial pressure across multiple sectors' : '稅收政策對多個行業造成財政壓力',
                reasoning: currentLang === 'en' ?
                    `Business sector analysis shows ${Math.round(businessWorkers / 10)}% of finance/business workers fear job losses and reduced competitiveness. ${Math.round(middleIncome / 10)}% of middle-income families already face housing cost pressures averaging 45% of income. Small businesses lack resources for immediate compliance.` :
                    `商業部門分析顯示${Math.round(businessWorkers / 10)}%的金融/商業工作者擔心失業和競爭力下降。${Math.round(middleIncome / 10)}%的中等收入家庭已面臨平均佔收入45%的住房成本壓力。小企業缺乏即時合規的資源。`,
                recommendation: currentLang === 'en' ?
                    'Introduce progressive tax structure with SME exemptions, provide 3-year transition period with government subsidies, create green technology adoption incentives, and establish business support centers for compliance assistance.' :
                    '引入對中小企業豁免的累進稅制，提供3年過渡期和政府補貼，創建綠色技術採用激勵措施，並建立商業支援中心協助合規。'
            });
        }

        // Housing policies
        if (policy.includes('housing') || policy.includes('public housing') || policy.includes('房屋') || policy.includes('公共房屋') || policy.includes('公屋')) {
            const youngAdults = this.citizens.filter(c => c.age >= 20 && c.age <= 35).length;
            // Extract percentage from policy text
            const percentageMatch = policyText.match(/(\d+)%/);
            const targetIncrease = percentageMatch ? parseInt(percentageMatch[1]) : 30;
            const requiredUnits = Math.round(18000 * (1 + targetIncrease/100));
            const shortfall = requiredUnits - 18000;
            const additionalYears = Math.round(shortfall / 5000);
            
            vulnerabilities.push({
                issue: currentLang === 'en' ? `${targetIncrease}% Housing Increase: Capacity & Timeline Challenges` : `${targetIncrease}%房屋增加：能力與時間表挑戰`,
                description: currentLang === 'en' ? `Policy requires ${requiredUnits} units annually but faces significant implementation barriers` : `政策需要每年${requiredUnits}個單位但面臨重大實施障礙`,
                reasoning: currentLang === 'en' ?
                    `Current analysis: Hong Kong produces 18,000 public housing units annually. Your ${targetIncrease}% increase requires ${shortfall} additional units yearly. This demands ${additionalYears} extra years of construction capacity. Land constraints affect ${Math.round(youngAdults / 10)}% of young adults (20-35) who desperately need housing. Cost implications: HK$${Math.round(shortfall * 2.5)}M additional budget required annually. Environmental reviews will delay projects by 24-36 months.` :
                    `目前分析：香港每年生產18,000個公共房屋單位。您的${targetIncrease}%增加需要每年額外${shortfall}個單位。這需要${additionalYears}年額外的建設能力。土地限制影響${Math.round(youngAdults / 10)}%急需住房的年輕成年人（20-35歲）。成本影響：每年需額外預算${Math.round(shortfall * 2.5)}百萬港元。環境審查將延遲項目24-36個月。`,
                recommendation: currentLang === 'en' ?
                    `IMMEDIATE ACTIONS: (1) Fast-track 3 major land reclamation sites to add 500 hectares by 2026. (2) Implement 24/7 construction permits for housing projects. (3) Launch modular housing factory producing 8,000 units/year. (4) Convert 50 government buildings to transitional housing (12,000 units). (5) Establish HK$15B emergency housing fund. EXPECTED OUTCOME: Achieve ${Math.round(targetIncrease * 0.7)}% of target within 3 years, full target by year 5.` :
                    `立即行動：(1) 加速3個主要填海地點，2026年前增加500公頃。(2) 對房屋項目實施24/7建築許可。(3) 啟動模組化房屋工廠，每年生產8,000個單位。(4) 將50座政府大廈轉為過渡性房屋（12,000個單位）。(5) 設立150億港元緊急房屋基金。預期成果：3年內實現${Math.round(targetIncrease * 0.7)}%目標，第5年實現全部目標。`
            });
        }

        // Transport policies
        if (policy.includes('transport') || policy.includes('mtr') || policy.includes('railway') || policy.includes('交通') || policy.includes('港鐵') || policy.includes('鐵路')) {
            vulnerabilities.push({
                issue: currentLang === 'en' ? 'Infrastructure Integration Complexity' : '基礎設施整合複雜性',
                description: currentLang === 'en' ? 'Transport expansion requires massive coordination and disruption management' : '交通擴展需要大規模協調和干擾管理',
                reasoning: currentLang === 'en' ?
                    `New railway lines require integration with 93 existing MTR stations and 8 major districts. Construction will disrupt 150,000+ daily commuters for 5-8 years. Geological surveys show 60% of proposed routes pass through challenging terrain requiring tunnel boring through granite bedrock.` :
                    `新鐵路線需要與93個現有港鐵站和8個主要地區整合。建設將干擾150,000+名日常通勤者5-8年。地質調查顯示60%的擬議路線經過具挑戰性地形，需要通過花崗岩基岩進行隧道鑽探。`,
                recommendation: currentLang === 'en' ?
                    'Implement smart construction scheduling to minimize peak-hour disruptions, provide enhanced bus services during construction, use advanced tunnel boring machines to reduce construction time, and establish real-time commuter information systems.' :
                    '實施智能建設排程以減少繁忙時間干擾，在建設期間提供增強巴士服務，使用先進隧道鑽探機減少建設時間，並建立實時通勤者信息系統。'
            });
        }

        // Environment/renewable energy policies
        if (policy.includes('renewable') || policy.includes('environment') || policy.includes('green') || policy.includes('可再生') || policy.includes('環境') || policy.includes('綠色')) {
            const industrialWorkers = this.citizens.filter(c => c.occupation === 'industrial').length;
            vulnerabilities.push({
                issue: currentLang === 'en' ? 'Energy Transition & Job Displacement' : '能源轉型與就業轉移',
                description: currentLang === 'en' ? 'Green transition affects traditional energy sectors and requires workforce retraining' : '綠色轉型影響傳統能源部門並需要勞動力再培訓',
                reasoning: currentLang === 'en' ?
                    `Energy transition will affect ${Math.round(industrialWorkers / 10)}% of industrial workers. Hong Kong's limited space allows only 3-4% renewable energy from local sources, requiring 85% energy imports. Traditional power companies face $12B infrastructure upgrade costs. Skills gap analysis shows 40,000 workers need retraining for green jobs.` :
                    `能源轉型將影響${Math.round(industrialWorkers / 10)}%的工業工人。香港有限空間僅允許3-4%的本地可再生能源，需要85%能源進口。傳統電力公司面臨120億美元基礎設施升級成本。技能差距分析顯示40,000名工人需要為綠色工作再培訓。`,
                recommendation: currentLang === 'en' ?
                    'Establish green job retraining centers with guaranteed placement programs, negotiate regional renewable energy partnerships with mainland China, provide low-interest loans for building retrofits, and create green technology innovation hubs to attract international investment.' :
                    '建立有保證就業計劃的綠色工作再培訓中心，與中國大陸談判區域可再生能源夥伴關係，為建築改造提供低息貸款，並創建綠色技術創新中心吸引國際投資。'
            });
        }

        // Universal basic income or social welfare
        if (policy.includes('basic income') || policy.includes('welfare') || policy.includes('poverty') || policy.includes('基本收入') || policy.includes('福利') || policy.includes('貧困')) {
            vulnerabilities.push({
                issue: currentLang === 'en' ? 'Fiscal Sustainability & Work Incentives' : '財政可持續性與工作激勵',
                description: currentLang === 'en' ? 'Large-scale welfare programs require careful economic balancing' : '大規模福利計劃需要仔細的經濟平衡',
                reasoning: currentLang === 'en' ?
                    `Universal basic income for 500,000 eligible citizens would cost HK$36B annually (8% of government budget). Economic modeling shows potential 12% reduction in work participation among low-skilled workers. Tax revenue may decrease by HK$8B due to reduced economic activity, creating funding gap.` :
                    `為500,000名符合條件的市民提供全民基本收入每年將花費360億港元（政府預算的8%）。經濟模型顯示低技能工人的工作參與率可能減少12%。由於經濟活動減少，稅收可能減少80億港元，造成資金缺口。`,
                recommendation: currentLang === 'en' ?
                    'Design conditional basic income tied to skills training or community service, implement gradual rollout with economic impact monitoring, create work incentive bonuses for employment, and establish dedicated revenue streams through digital services tax.' :
                    '設計與技能培訓或社區服務掛鉤的有條件基本收入，實施漸進式推出並監控經濟影響，為就業創建工作激勵獎金，並通過數字服務稅建立專門收入來源。'
            });
        }

        // Universal policy analysis based on content and demographics
        const policyComplexity = this.analyzePolicyComplexity(policyText);
        const affectedGroups = this.identifyAffectedGroups(policyText, supportPercentage);
        const implementationChallenges = this.assessImplementationChallenges(policyText, supportPercentage);
        
        // Add complexity analysis
        vulnerabilities.push({
            issue: currentLang === 'en' ? `Policy Complexity & Implementation Analysis` : `政策複雜性與實施分析`,
            description: currentLang === 'en' ? `This policy shows ${policyComplexity.level} complexity with specific implementation requirements` : `此政策顯示${policyComplexity.level === 'high' ? '高' : policyComplexity.level === 'medium' ? '中等' : '低'}複雜性，具有特定實施要求`,
            reasoning: currentLang === 'en' ?
                `Policy analysis reveals: Complexity Level: ${policyComplexity.level.toUpperCase()} (${policyComplexity.score}/10). Primary affected groups: ${affectedGroups.primary.join(', ')} showing ${supportPercentage}% overall support. Implementation requires coordination across ${Math.ceil(policyComplexity.score * 2)} government departments and affects ${Math.round(affectedGroups.totalAffected / 10)}% of population directly.` :
                `政策分析顯示：複雜程度：${policyComplexity.level === 'high' ? '高' : policyComplexity.level === 'medium' ? '中等' : '低'}（${policyComplexity.score}/10）。主要受影響群體：${affectedGroups.primary.join('、')}，整體支持度${supportPercentage}%。實施需要${Math.ceil(policyComplexity.score * 2)}個政府部門協調，直接影響${Math.round(affectedGroups.totalAffected / 10)}%人口。`,
            recommendation: currentLang === 'en' ?
                `STRATEGIC APPROACH: (1) ${implementationChallenges.timeline} implementation timeline recommended. (2) Focus on ${affectedGroups.supportive.join(' and ')} as early adopters. (3) Address concerns of ${affectedGroups.resistant.join(' and ')} through targeted programs. (4) Establish ${Math.ceil(policyComplexity.score * 1.5)} monitoring checkpoints. (5) Budget ${Math.round(policyComplexity.score * 15)}% additional resources for complexity management.` :
                `策略方法：(1) 建議${implementationChallenges.timeline === 'Accelerated' ? '加速' : implementationChallenges.timeline === 'Standard' ? '標準' : '延長'}實施時間表。(2) 專注於${affectedGroups.supportive.join('和')}作為早期採用者。(3) 通過針對性計劃解決${affectedGroups.resistant.join('和')}的擔憂。(4) 建立${Math.ceil(policyComplexity.score * 1.5)}個監控檢查點。(5) 為複雜性管理預算額外${Math.round(policyComplexity.score * 15)}%資源。`
        });
        
        // Add effectiveness prediction
        if (supportPercentage >= 60) {
            vulnerabilities.push({
                issue: currentLang === 'en' ? 'High Support: Optimization & Expansion Opportunities' : '高支持度：優化與擴展機會',
                description: currentLang === 'en' ? 'Strong public backing enables accelerated implementation and scope expansion' : '強烈公眾支持使加速實施和範圍擴展成為可能',
                reasoning: currentLang === 'en' ?
                    `Exceptional ${supportPercentage}% support indicates policy resonates well with citizens. Analysis shows: Young adults (${Math.round(youngAdults / 10)}%) and middle-income groups (${Math.round(middleIncome / 10)}%) are primary supporters. High support correlates with 85% faster approval processes, 40% higher compliance rates, and 60% lower implementation costs.` :
                    `出色的${supportPercentage}%支持度表明政策與市民產生共鳴。分析顯示：年輕成年人（${Math.round(youngAdults / 10)}%）和中等收入群體（${Math.round(middleIncome / 10)}%）是主要支持者。高支持度與快85%的審批流程、高40%的合規率和低60%的實施成本相關。`,
                recommendation: currentLang === 'en' ?
                    'MAXIMIZE SUCCESS: (1) Fast-track implementation by 12-18 months. (2) Expand policy scope by 25-35% while maintaining support. (3) Use public backing to secure 20-30% additional funding. (4) Create citizen volunteer programs (target 500+ volunteers). (5) Document best practices for replication in other regions.' :
                    '最大化成功：(1) 將實施提前12-18個月。(2) 在維持支持的同時將政策範圍擴大25-35%。(3) 利用公眾支持獲取20-30%額外資金。(4) 創建市民志願者計劃（目標500+志願者）。(5) 記錄最佳實踐以在其他地區複製。'
            });
        } else if (supportPercentage <= 35) {
            vulnerabilities.push({
                issue: currentLang === 'en' ? 'Critical Support Deficit: Fundamental Redesign Required' : '關鍵支持不足：需要根本性重新設計',
                description: currentLang === 'en' ? 'Severe public resistance threatens policy viability and requires immediate intervention' : '嚴重的公眾阻力威脅政策可行性，需要立即干預',
                reasoning: currentLang === 'en' ?
                    `Critical ${supportPercentage}% support indicates fundamental policy-citizen mismatch. Strongest opposition from: Elderly (${Math.round(elderly / 10)}%), low-income (${Math.round(lowIncome / 10)}%), and high-income (${Math.round(highIncome / 10)}%) groups. Low support predicts 60% higher costs, 3x longer approval times, 70% reversal probability within 2 years.` :
                    `關鍵的${supportPercentage}%支持度表明政策與市民根本不匹配。最強烈反對來自：長者（${Math.round(elderly / 10)}%）、低收入（${Math.round(lowIncome / 10)}%）和高收入（${Math.round(highIncome / 10)}%）群體。低支持度預測成本高60%、審批時間長3倍、2年內70%逆轉概率。`,
                recommendation: currentLang === 'en' ?
                    'EMERGENCY REDESIGN PROTOCOL: (1) HALT current implementation immediately. (2) Conduct 60-day comprehensive stakeholder consultation. (3) Reduce scope by 50% for pilot testing. (4) Increase compensation/benefits by 30% for affected groups. (5) Extend timeline by 2-3 years. (6) Consider alternative policy frameworks. RISK: Proceeding without redesign has 85% failure probability.' :
                    '緊急重新設計協議：(1) 立即停止當前實施。(2) 進行60天全面利益相關者諮詢。(3) 將範圍減少50%進行試點測試。(4) 為受影響群體增加30%賠償/福利。(5) 將時間表延長2-3年。(6) 考慮替代政策框架。風險：不重新設計而繼續進行有85%失敗概率。'
            });
        }


        return vulnerabilities;
    }
    
    analyzePolicyComplexity(policyText) {
        let score = 3; // Base complexity
        const text = policyText.toLowerCase();
        
        // Increase complexity based on policy characteristics
        if (text.includes('tax') || text.includes('稅')) score += 2;
        if (text.includes('regulation') || text.includes('監管')) score += 2;
        if (text.includes('infrastructure') || text.includes('基礎設施')) score += 3;
        if (text.includes('education') || text.includes('教育')) score += 1;
        if (text.includes('healthcare') || text.includes('醫療')) score += 2;
        if (text.includes('environment') || text.includes('環境')) score += 2;
        if (text.includes('housing') || text.includes('房屋')) score += 3;
        if (text.includes('transport') || text.includes('交通')) score += 3;
        if (text.includes('welfare') || text.includes('福利')) score += 2;
        
        // Check for multiple sectors
        const sectors = ['economic', 'social', 'environmental', 'technological', '經濟', '社會', '環境', '技術'];
        const sectorCount = sectors.filter(sector => text.includes(sector)).length;
        score += sectorCount;
        
        // Check for numbers/percentages (indicates specific targets)
        if (/\d+%/.test(policyText)) score += 1;
        if (/\d+/.test(policyText)) score += 1;
        
        score = Math.min(10, score);
        
        let level = 'low';
        if (score >= 7) level = 'high';
        else if (score >= 4) level = 'medium';
        
        return { score, level };
    }
    
    identifyAffectedGroups(policyText, supportPercentage) {
        const groups = {
            primary: [],
            supportive: [],
            resistant: [],
            totalAffected: 0
        };
        
        const text = policyText.toLowerCase();
        
        // Identify primary affected groups
        if (text.includes('housing') || text.includes('房屋')) {
            groups.primary.push('young adults', 'low-income families');
            groups.totalAffected += 350;
        }
        if (text.includes('tax') || text.includes('稅')) {
            groups.primary.push('businesses', 'middle-income earners');
            groups.totalAffected += 600;
        }
        if (text.includes('education') || text.includes('教育')) {
            groups.primary.push('families with children', 'teachers');
            groups.totalAffected += 400;
        }
        if (text.includes('healthcare') || text.includes('醫療')) {
            groups.primary.push('elderly', 'chronic patients');
            groups.totalAffected += 300;
        }
        if (text.includes('transport') || text.includes('交通')) {
            groups.primary.push('commuters', 'outer district residents');
            groups.totalAffected += 700;
        }
        if (text.includes('environment') || text.includes('環境')) {
            groups.primary.push('all citizens', 'future generations');
            groups.totalAffected += 1000;
        }
        
        // Default if no specific groups identified
        if (groups.primary.length === 0) {
            groups.primary.push('general public');
            groups.totalAffected = 500;
        }
        
        // Determine supportive vs resistant based on support percentage
        if (supportPercentage > 50) {
            groups.supportive = groups.primary.slice(0, Math.ceil(groups.primary.length / 2));
            groups.resistant = groups.primary.slice(Math.ceil(groups.primary.length / 2));
        } else {
            groups.resistant = groups.primary.slice(0, Math.ceil(groups.primary.length / 2));
            groups.supportive = groups.primary.slice(Math.ceil(groups.primary.length / 2));
        }
        
        return groups;
    }
    
    assessImplementationChallenges(policyText, supportPercentage) {
        let timeline = 'Standard';
        
        if (supportPercentage > 70) timeline = 'Accelerated';
        else if (supportPercentage < 40) timeline = 'Extended';
        
        return { timeline };
    }

    generateTrendData(policyText, initialSupport, years) {
        const trendData = {
            years: [],
            support: [],
            opposition: [],
            economicImpact: [],
            environmentalImpact: [],
            socialSatisfaction: []
        };
        
        const policy = policyText.toLowerCase();
        let currentSupport = initialSupport;
        
        for (let year = 0; year <= years; year++) {
            trendData.years.push(year);
            
            // Support trend with policy-specific adjustments
            if (year === 0) {
                trendData.support.push(currentSupport);
            } else {
                let supportChange = 0;
                
                // Policy-specific trend patterns
                if (policy.includes('housing') || policy.includes('房屋')) {
                    supportChange = year < 3 ? -2 : 3; // Initial resistance, then improvement
                } else if (policy.includes('tax') || policy.includes('稅')) {
                    supportChange = year < 2 ? -3 : 1; // Strong initial resistance
                } else if (policy.includes('environment') || policy.includes('環境')) {
                    supportChange = 2; // Steady improvement
                } else if (policy.includes('tech') || policy.includes('smart') || policy.includes('智能')) {
                    supportChange = year < 2 ? 1 : 3; // Accelerating adoption
                } else {
                    supportChange = Math.random() * 4 - 2; // Random variation
                }
                
                currentSupport = Math.max(10, Math.min(90, currentSupport + supportChange));
                trendData.support.push(Math.round(currentSupport));
            }
            
            trendData.opposition.push(100 - trendData.support[year]);
            
            // Economic impact (starts low, improves over time)
            const economicBase = policy.includes('tax') ? 30 : 50;
            trendData.economicImpact.push(Math.round(economicBase + (year * 3) + Math.random() * 10));
            
            // Environmental impact
            const envBase = policy.includes('environment') ? 60 : 40;
            trendData.environmentalImpact.push(Math.round(envBase + (year * 2) + Math.random() * 8));
            
            // Social satisfaction
            const socialBase = trendData.support[year] * 0.8;
            trendData.socialSatisfaction.push(Math.round(socialBase + Math.random() * 10));
        }
        
        return trendData;
    }
    
    drawTrendChart(trendData) {
        const canvas = document.getElementById('trendCanvas');
        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;
        
        // Clear canvas
        ctx.clearRect(0, 0, width, height);
        
        // Set up chart dimensions
        const padding = 60;
        const chartWidth = width - 2 * padding;
        const chartHeight = height - 2 * padding;
        
        // Draw background
        ctx.fillStyle = '#f7fafc';
        ctx.fillRect(padding, padding, chartWidth, chartHeight);
        
        // Draw grid lines
        ctx.strokeStyle = '#e2e8f0';
        ctx.lineWidth = 1;
        
        // Vertical grid lines
        for (let i = 0; i <= 10; i++) {
            const x = padding + (i * chartWidth / 10);
            ctx.beginPath();
            ctx.moveTo(x, padding);
            ctx.lineTo(x, padding + chartHeight);
            ctx.stroke();
        }
        
        // Horizontal grid lines
        for (let i = 0; i <= 10; i++) {
            const y = padding + (i * chartHeight / 10);
            ctx.beginPath();
            ctx.moveTo(padding, y);
            ctx.lineTo(padding + chartWidth, y);
            ctx.stroke();
        }
        
        // Draw axes
        ctx.strokeStyle = '#4a5568';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(padding, padding);
        ctx.lineTo(padding, padding + chartHeight);
        ctx.lineTo(padding + chartWidth, padding + chartHeight);
        ctx.stroke();
        
        // Draw trend lines
        const drawLine = (data, color, lineWidth = 3) => {
            ctx.strokeStyle = color;
            ctx.lineWidth = lineWidth;
            ctx.beginPath();
            
            for (let i = 0; i < data.length; i++) {
                const x = padding + (i * chartWidth / (data.length - 1));
                const y = padding + chartHeight - (data[i] * chartHeight / 100);
                
                if (i === 0) {
                    ctx.moveTo(x, y);
                } else {
                    ctx.lineTo(x, y);
                }
            }
            ctx.stroke();
        };
        
        // Draw lines for different metrics
        drawLine(trendData.support, '#48bb78'); // Green for support
        drawLine(trendData.economicImpact, '#4299e1'); // Blue for economic
        drawLine(trendData.environmentalImpact, '#38b2ac'); // Teal for environmental
        drawLine(trendData.socialSatisfaction, '#ed8936'); // Orange for social
        
        // Draw labels
        ctx.fillStyle = '#4a5568';
        ctx.font = '12px Arial';
        
        // Y-axis labels
        for (let i = 0; i <= 10; i++) {
            const value = 100 - (i * 10);
            const y = padding + (i * chartHeight / 10);
            ctx.fillText(value + '%', 10, y + 4);
        }
        
        // X-axis labels
        for (let i = 0; i < trendData.years.length; i += Math.ceil(trendData.years.length / 10)) {
            const x = padding + (i * chartWidth / (trendData.years.length - 1));
            ctx.fillText('Year ' + trendData.years[i], x - 15, height - 10);
        }
        
        // Chart title
        ctx.font = 'bold 16px Arial';
        ctx.fillStyle = '#2d3748';
        ctx.textAlign = 'center';
        const title = currentLang === 'en' ? 'Policy Impact Trends Over Time' : '政策影響趨勢隨時間變化';
        ctx.fillText(title, width / 2, 30);
        ctx.textAlign = 'left';
    }
    
    displayResults(results, years = 10) {
        const criteriaElement = document.getElementById('decisionCriteria');
        criteriaElement.innerHTML = results.criteria.map(criterion => 
            `<div style="padding: 8px; background: white; margin: 5px 0; border-radius: 5px;">• ${criterion}</div>`
        ).join('');

        const supportYes = document.getElementById('supportYes');
        const supportNo = document.getElementById('supportNo');
        const supportPercentage = document.getElementById('supportPercentage');
        
        supportYes.style.width = `${results.supportPercentage}%`;
        supportNo.style.width = `${100 - results.supportPercentage}%`;
        
        const t = translations[currentLang];
        supportPercentage.textContent = `${results.supportPercentage}% ${t.supportText} | ${100 - results.supportPercentage}% ${t.oppositionText}`;

        // Display environmental data if available
        const environmentalElement = document.getElementById('environmentalData');
        if (results.environmentalData && Object.keys(results.environmentalData).length > 0) {
            const envData = results.environmentalData;
            environmentalElement.innerHTML = `
                <div class="env-metrics">
                    ${envData.digitalAdoption ? `<div class="metric"><span>${currentLang === 'en' ? 'Digital Adoption Rate' : '數字採用率'}</span><div class="metric-bar"><div style="width: ${envData.digitalAdoption}%; background: ${envData.digitalAdoption > 70 ? '#48bb78' : envData.digitalAdoption > 40 ? '#ed8936' : '#f56565'}"></div></div><span>${envData.digitalAdoption}%</span></div>` : ''}
                    ${envData.governmentEfficiency ? `<div class="metric"><span>${currentLang === 'en' ? 'Government Efficiency' : '政府效率'}</span><div class="metric-bar"><div style="width: ${envData.governmentEfficiency}%; background: ${envData.governmentEfficiency > 70 ? '#48bb78' : envData.governmentEfficiency > 40 ? '#ed8936' : '#f56565'}"></div></div><span>${envData.governmentEfficiency}/100</span></div>` : ''}
                    ${envData.citizenSatisfaction ? `<div class="metric"><span>${currentLang === 'en' ? 'Citizen Satisfaction' : '市民滿意度'}</span><div class="metric-bar"><div style="width: ${envData.citizenSatisfaction}%; background: ${envData.citizenSatisfaction > 70 ? '#48bb78' : envData.citizenSatisfaction > 40 ? '#ed8936' : '#f56565'}"></div></div><span>${envData.citizenSatisfaction}/100</span></div>` : ''}
                    ${envData.innovationIndex ? `<div class="metric"><span>${currentLang === 'en' ? 'Innovation Index' : '創新指數'}</span><div class="metric-bar"><div style="width: ${envData.innovationIndex}%; background: ${envData.innovationIndex > 70 ? '#48bb78' : envData.innovationIndex > 40 ? '#ed8936' : '#f56565'}"></div></div><span>${envData.innovationIndex}/100</span></div>` : ''}
                    ${envData.economicGrowth ? `<div class="metric"><span>${currentLang === 'en' ? 'Economic Growth Impact' : '經濟增長影響'}</span><div class="metric-bar"><div style="width: ${envData.economicGrowth}%; background: ${envData.economicGrowth > 60 ? '#48bb78' : envData.economicGrowth > 30 ? '#ed8936' : '#f56565'}"></div></div><span>${envData.economicGrowth}%</span></div>` : ''}
                    ${envData.jobCreation ? `<div class="metric"><span>${currentLang === 'en' ? 'Job Creation Potential' : '就業創造潛力'}</span><div class="metric-bar"><div style="width: ${envData.jobCreation}%; background: ${envData.jobCreation > 60 ? '#48bb78' : envData.jobCreation > 30 ? '#ed8936' : '#f56565'}"></div></div><span>${envData.jobCreation}%</span></div>` : ''}
                    ${envData.businessInnovation ? `<div class="metric"><span>${currentLang === 'en' ? 'Business Innovation' : '商業創新'}</span><div class="metric-bar"><div style="width: ${envData.businessInnovation}%; background: ${envData.businessInnovation > 70 ? '#48bb78' : envData.businessInnovation > 40 ? '#ed8936' : '#f56565'}"></div></div><span>${envData.businessInnovation}/100</span></div>` : ''}
                    ${envData.internationalCompetitiveness ? `<div class="metric"><span>${currentLang === 'en' ? 'International Competitiveness' : '國際競爭力'}</span><div class="metric-bar"><div style="width: ${envData.internationalCompetitiveness}%; background: ${envData.internationalCompetitiveness > 70 ? '#48bb78' : envData.internationalCompetitiveness > 40 ? '#ed8936' : '#f56565'}"></div></div><span>${envData.internationalCompetitiveness}/100</span></div>` : ''}
                    ${envData.airQuality ? `<div class="metric"><span>${currentLang === 'en' ? 'Air Quality Index' : '空氣品質指數'}</span><div class="metric-bar"><div style="width: ${envData.airQuality}%; background: ${envData.airQuality > 70 ? '#48bb78' : envData.airQuality > 40 ? '#ed8936' : '#f56565'}"></div></div><span>${envData.airQuality}/100</span></div>` : ''}
                    ${envData.waterQuality ? `<div class="metric"><span>${currentLang === 'en' ? 'Water Quality Index' : '水質指數'}</span><div class="metric-bar"><div style="width: ${envData.waterQuality}%; background: ${envData.waterQuality > 70 ? '#48bb78' : envData.waterQuality > 40 ? '#ed8936' : '#f56565'}"></div></div><span>${envData.waterQuality}/100</span></div>` : ''}
                    ${envData.renewableEnergy ? `<div class="metric"><span>${currentLang === 'en' ? 'Renewable Energy Usage' : '可再生能源使用率'}</span><div class="metric-bar"><div style="width: ${envData.renewableEnergy}%; background: ${envData.renewableEnergy > 50 ? '#48bb78' : envData.renewableEnergy > 25 ? '#ed8936' : '#f56565'}"></div></div><span>${envData.renewableEnergy}%</span></div>` : ''}
                    ${envData.wasteReduction ? `<div class="metric"><span>${currentLang === 'en' ? 'Waste Reduction Rate' : '廢物減少率'}</span><div class="metric-bar"><div style="width: ${envData.wasteReduction}%; background: ${envData.wasteReduction > 60 ? '#48bb78' : envData.wasteReduction > 30 ? '#ed8936' : '#f56565'}"></div></div><span>${envData.wasteReduction}%</span></div>` : ''}
                </div>
            `;
        } else {
            environmentalElement.innerHTML = `<p style="color: #718096; font-style: italic;">${currentLang === 'en' ? 'No specific impact metrics available for this policy type.' : '此政策類型無特定影響指標。'}</p>`;
        }

        // Display herding analysis
        const herdingElement = document.getElementById('herdingAnalysis');
        if (results.herdingAnalysis) {
            const herding = results.herdingAnalysis;
            const trendText = currentLang === 'en' ? 
                (herding.dominantTrend === 'support' ? 'Pro-Policy' : 'Anti-Policy') :
                (herding.dominantTrend === 'support' ? '支持政策' : '反對政策');
            
            herdingElement.innerHTML = `
                <div class="herding-stats">
                    <div class="stat-item">
                        <span class="stat-label">${currentLang === 'en' ? 'Herding Effect Strength' : '義群效應強度'}</span>
                        <span class="stat-value">${herding.herdingStrength}%</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-label">${currentLang === 'en' ? 'Dominant Trend' : '主導趋勢'}</span>
                        <span class="stat-value">${trendText}</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-label">${currentLang === 'en' ? 'Opinion Polarization' : '意見分化程度'}</span>
                        <span class="stat-value">${herding.polarization}%</span>
                    </div>
                </div>
                <p style="margin-top: 10px; font-size: 14px; color: #4a5568;">
                    ${currentLang === 'en' ? 
                        `AI agents show ${herding.herdingStrength > 30 ? 'strong' : 'moderate'} social influence effects. ${herding.polarization > 50 ? 'High polarization indicates divided opinions.' : 'Low polarization suggests consensus building.'}` :
                        `AI代理顯示${herding.herdingStrength > 30 ? '強烈' : '中等'}的社會影響效應。${herding.polarization > 50 ? '高分化程度表示意見分歧。' : '低分化程度表示正在建立共識。'}`
                    }
                </p>
            `;
        }
        
        // Display citizen voices
        const citizenVoicesElement = document.getElementById('citizenVoices');
        if (results.citizenVoices && results.citizenVoices.length > 0) {
            citizenVoicesElement.innerHTML = results.citizenVoices.map(voice => {
                let voiceClass = 'citizen-voice';
                let voiceIcon = '💬';
                
                if (voice.type === 'support') {
                    voiceClass += ' voice-support';
                    voiceIcon = '👍';
                } else if (voice.type === 'opposition') {
                    voiceClass += ' voice-opposition';
                    voiceIcon = '👎';
                } else {
                    voiceClass += ' voice-concern';
                    voiceIcon = '🤔';
                }
                
                return `
                    <div class="${voiceClass}">
                        <div class="voice-header">
                            <span class="voice-icon">${voiceIcon}</span>
                            <span class="voice-demographic">${voice.demographic}</span>
                        </div>
                        <div class="voice-quote">"${voice.quote}"</div>
                    </div>
                `;
            }).join('');
        } else {
            citizenVoicesElement.innerHTML = `<p style="color: #718096; font-style: italic;">${currentLang === 'en' ? 'No citizen feedback available for this policy type.' : '此政策類型無市民反饋。'}</p>`;
        }

        const vulnerabilitiesElement = document.getElementById('vulnerabilities');
        vulnerabilitiesElement.innerHTML = results.vulnerabilities.map(vuln => `
            <div class="analysis-section">
                <div class="analysis-header">${vuln.issue}</div>
                <p>${vuln.description}</p>
                <div class="analysis-reasoning">
                    <strong>${t.whyMatters}</strong> ${vuln.reasoning}
                </div>
                <div class="recommendation">
                    <strong>${t.strategicRec}</strong> ${vuln.recommendation}
                </div>
            </div>
        `).join('');
        
        // Draw trend chart
        if (results.trendData) {
            this.drawTrendChart(results.trendData);
            
            // Update trend legend
            const legendElement = document.getElementById('trendLegend');
            legendElement.innerHTML = `
                <div class="trend-legend">
                    <div class="legend-item"><span class="legend-line support"></span><span>${currentLang === 'en' ? 'Policy Support' : '政策支持度'}</span></div>
                    <div class="legend-item"><span class="legend-line economic"></span><span>${currentLang === 'en' ? 'Economic Impact' : '經濟影響'}</span></div>
                    <div class="legend-item"><span class="legend-line environmental"></span><span>${currentLang === 'en' ? 'Environmental Impact' : '環境影響'}</span></div>
                    <div class="legend-item"><span class="legend-line social"></span><span>${currentLang === 'en' ? 'Social Satisfaction' : '社會滿意度'}</span></div>
                </div>
            `;
        }
    }

    generateCitizenVoices(policyText, supportPercentage, supportScores) {
        const voices = [];
        const policy = policyText.toLowerCase();
        
        // Generate representative citizen voices based on demographics and support levels
        const strongSupporters = supportScores.filter(score => score > 0.7).length;
        const moderateOpponents = supportScores.filter(score => score >= 0.3 && score <= 0.7).length;
        const strongOpponents = supportScores.filter(score => score < 0.3).length;
        
        // 增加更多支持者聲音
        if (strongSupporters > 0) {
            // 科技政策支持者
            if (policy.includes('smart') || policy.includes('tech') || policy.includes('digital') || policy.includes('智能') || policy.includes('科技')) {
                const techVoices = [
                    {
                        type: 'support',
                        demographic: currentLang === 'en' ? 'Tech Startup Founder, Age 29' : '科技初創創辦人，29歲',
                        quote: currentLang === 'en' ? 
                            "This is exactly what Hong Kong needs to compete with Shenzhen and Singapore! Digital transformation will attract global talent and investment. I'm already seeing increased interest from international VCs." :
                            "這正是香港與深圳和新加坡競爭所需要的！數字化轉型將吸引全球人才和投資。我已經看到國際風投的興趣增加。"
                    },
                    {
                        type: 'support',
                        demographic: currentLang === 'en' ? 'University Student, Computer Science' : '大學生，計算機科學',
                        quote: currentLang === 'en' ? 
                            "Finally! This policy gives me hope that I won't have to move to Silicon Valley after graduation. Hong Kong can become Asia's tech hub if we embrace innovation now." :
                            "終於！這項政策讓我看到希望，畢業後不用搬到矽谷。如果我們現在擁抱創新，香港可以成為亞洲的科技中心。"
                    },
                    {
                        type: 'support',
                        demographic: currentLang === 'en' ? 'Digital Marketing Manager, Age 35' : '數字營銷經理，35歲',
                        quote: currentLang === 'en' ? 
                            "Smart city initiatives will revolutionize how we work and live. Better data analytics, seamless services, and improved quality of life - this is the future Hong Kong deserves." :
                            "智慧城市倡議將徹底改變我們的工作和生活方式。更好的數據分析、無縫服務和改善的生活質量——這是香港應得的未來。"
                    }
                ];
                voices.push(...techVoices.slice(0, Math.min(2, Math.ceil(strongSupporters / 200))));
            }
            
            // 房屋政策支持者
            if (policy.includes('housing') || policy.includes('房屋')) {
                const housingVoices = [
                    {
                        type: 'support',
                        demographic: currentLang === 'en' ? 'Young Couple, Waiting List 7 Years' : '年輕夫婦，輪候7年',
                        quote: currentLang === 'en' ? 
                            "We've been living in a subdivided flat for years. This policy gives us real hope of having our own home where we can start a family. Every additional unit matters to families like ours." :
                            "我們在劏房住了好幾年。這項政策讓我們真正看到擁有自己家園的希望，可以組建家庭。每個額外的單位對我們這樣的家庭都很重要。"
                    },
                    {
                        type: 'support',
                        demographic: currentLang === 'en' ? 'Social Worker, Sham Shui Po' : '社工，深水埗',
                        quote: currentLang === 'en' ? 
                            "I work with families in inadequate housing daily. This policy addresses the root cause of many social problems. Stable housing means better education outcomes for children and improved mental health for families." :
                            "我每天與住房不足的家庭打交道。這項政策解決了許多社會問題的根源。穩定的住房意味著孩子更好的教育成果和家庭更好的心理健康。"
                    },
                    {
                        type: 'support',
                        demographic: currentLang === 'en' ? 'Fresh Graduate, Age 24' : '應屆畢業生，24歲',
                        quote: currentLang === 'en' ? 
                            "Housing costs are eating up 70% of my salary. If this policy succeeds, maybe I can actually save money and plan for the future instead of just surviving month to month." :
                            "住房成本佔了我薪水的70%。如果這項政策成功，也許我真的可以存錢並為未來做計劃，而不是月月光。"
                    }
                ];
                voices.push(...housingVoices.slice(0, Math.min(2, Math.ceil(strongSupporters / 150))));
            }
            
            // 環境政策支持者
            if (policy.includes('environment') || policy.includes('green') || policy.includes('環境') || policy.includes('綠色')) {
                const envVoices = [
                    {
                        type: 'support',
                        demographic: currentLang === 'en' ? 'Mother of Two, Tai Po' : '兩孩母親，大埔',
                        quote: currentLang === 'en' ? 
                            "My children deserve clean air and a healthy environment. I'm tired of checking air quality before letting them play outside. This policy is an investment in their future." :
                            "我的孩子們應該有清潔的空氣和健康的環境。我厭倦了在讓他們外出玩耍前檢查空氣質量。這項政策是對他們未來的投資。"
                    },
                    {
                        type: 'support',
                        demographic: currentLang === 'en' ? 'Marine Biologist, Age 31' : '海洋生物學家，31歲',
                        quote: currentLang === 'en' ? 
                            "Hong Kong's marine ecosystem is under severe stress. This environmental policy could help restore our coral reefs and protect biodiversity. We're at a critical tipping point." :
                            "香港的海洋生態系統承受著嚴重壓力。這項環境政策可以幫助恢復我們的珊瑚礁並保護生物多樣性。我們正處於關鍵的轉折點。"
                    },
                    {
                        type: 'support',
                        demographic: currentLang === 'en' ? 'Renewable Energy Engineer' : '可再生能源工程師',
                        quote: currentLang === 'en' ? 
                            "This policy will create thousands of green jobs and position Hong Kong as a regional leader in clean technology. The economic and environmental benefits are enormous." :
                            "這項政策將創造數千個綠色工作崗位，並使香港成為清潔技術的區域領導者。經濟和環境效益是巨大的。"
                    }
                ];
                voices.push(...envVoices.slice(0, Math.min(2, Math.ceil(strongSupporters / 200))));
            }
            
            // 商業/金融科技政策支持者
            if (policy.includes('fintech') || policy.includes('business') || policy.includes('金融科技') || policy.includes('商業')) {
                const bizVoices = [
                    {
                        type: 'support',
                        demographic: currentLang === 'en' ? 'Investment Banker, Central' : '投資銀行家，中環',
                        quote: currentLang === 'en' ? 
                            "Hong Kong needs to innovate to maintain its financial hub status. This policy will attract fintech companies and keep us competitive against Singapore and other regional centers." :
                            "香港需要創新以維持其金融中心地位。這項政策將吸引金融科技公司，讓我們與新加坡和其他區域中心保持競爭力。"
                    },
                    {
                        type: 'support',
                        demographic: currentLang === 'en' ? 'Small Business Owner, Mong Kok' : '小企業主，旺角',
                        quote: currentLang === 'en' ? 
                            "Digital payment systems and online platforms will help my business reach more customers. The pandemic taught us that businesses need to adapt or die." :
                            "數字支付系統和在線平台將幫助我的企業接觸更多客戶。疫情教會我們，企業需要適應或死亡。"
                    }
                ];
                voices.push(...bizVoices.slice(0, Math.min(1, Math.ceil(strongSupporters / 250))));
            }
            
            // 交通政策支持者
            if (policy.includes('transport') || policy.includes('mtr') || policy.includes('交通') || policy.includes('港鐵')) {
                const transportVoices = [
                    {
                        type: 'support',
                        demographic: currentLang === 'en' ? 'Daily Commuter, Tuen Mun' : '日常通勤者，屯門',
                        quote: currentLang === 'en' ? 
                            "I spend 3 hours daily commuting. Better transport connections will give me more time with my family and reduce stress. This is about quality of life." :
                            "我每天花3小時通勤。更好的交通連接將讓我有更多時間與家人在一起，減少壓力。這關乎生活質量。"
                    },
                    {
                        type: 'support',
                        demographic: currentLang === 'en' ? 'Elderly Resident, North District' : '長者居民，北區',
                        quote: currentLang === 'en' ? 
                            "Better transport means I can visit my children more often and access medical services easily. Connectivity is crucial for aging communities like ours." :
                            "更好的交通意味著我可以更經常探望孩子，輕鬆獲得醫療服務。連通性對我們這樣的老齡化社區至關重要。"
                    }
                ];
                voices.push(...transportVoices.slice(0, Math.min(1, Math.ceil(strongSupporters / 300))));
            }
        }
        
        // 增加更多關注和中性聲音
        if (moderateOpponents > 0) {
            const concernVoices = [
                {
                    type: 'concern',
                    demographic: currentLang === 'en' ? 'Small Restaurant Owner, Tsim Sha Tsui' : '小餐廳老闆，尖沙咀',
                    quote: currentLang === 'en' ? 
                        "I support the goals, but implementation worries me. My business barely survived COVID. Will there be transition support and training for traditional businesses like mine?" :
                        "我支持目標，但實施讓我擔心。我的生意勉強度過了疫情。會有對我這樣的傳統企業的過渡支持和培訓嗎？"
                },
                {
                    type: 'concern',
                    demographic: currentLang === 'en' ? 'Middle-aged Teacher, Kwun Tong' : '中年教師，觀塘',
                    quote: currentLang === 'en' ? 
                        "The policy sounds promising, but I need to see concrete timelines and budgets. How will this affect my children's education and our family's daily life?" :
                        "政策聽起來很有希望，但我需要看到具體的時間表和預算。這將如何影響我孩子的教育和我們家庭的日常生活？"
                },
                {
                    type: 'concern',
                    demographic: currentLang === 'en' ? 'Healthcare Worker, Age 42' : '醫護人員，42歲',
                    quote: currentLang === 'en' ? 
                        "Change is necessary, but we need to ensure it doesn't disrupt essential services. Healthcare is already stretched thin - we need guarantees that improvements won't come at our expense." :
                        "改變是必要的，但我們需要確保它不會干擾基本服務。醫療保健已經捉襟見肘——我們需要保證改善不會以我們為代價。"
                }
            ];
            voices.push(...concernVoices.slice(0, Math.min(2, Math.ceil(moderateOpponents / 200))));
        }
        
        // 增加更多反對聲音
        if (strongOpponents > 0) {
            const oppositionVoices = [];
            
            if (policy.includes('tax') || policy.includes('稅')) {
                oppositionVoices.push(
                    {
                        type: 'opposition',
                        demographic: currentLang === 'en' ? 'Business Executive, Central' : '企業高管，中環',
                        quote: currentLang === 'en' ? 
                            "This tax policy will make Hong Kong less competitive. Companies are already considering relocating to Singapore. We risk losing our status as Asia's financial center." :
                            "這項稅收政策將使香港競爭力下降。公司已經在考慮遷移到新加坡。我們有失去亞洲金融中心地位的風險。"
                    },
                    {
                        type: 'opposition',
                        demographic: currentLang === 'en' ? 'Manufacturing Company Owner' : '製造業公司老闆',
                        quote: currentLang === 'en' ? 
                            "Additional taxes will force us to cut jobs or move operations to mainland China. This policy hurts the very people it claims to help - working families." :
                            "額外的稅收將迫使我們裁員或將業務遷移到中國大陸。這項政策傷害了它聲稱要幫助的人——工薪家庭。"
                    }
                );
            }
            
            if (policy.includes('housing') || policy.includes('房屋')) {
                oppositionVoices.push({
                    type: 'opposition',
                    demographic: currentLang === 'en' ? 'Property Developer Representative' : '地產發展商代表',
                    quote: currentLang === 'en' ? 
                        "Rapid housing expansion without proper planning will create infrastructure problems. We need sustainable development, not rushed construction that compromises quality and safety." :
                        "沒有適當規劃的快速房屋擴張將造成基礎設施問題。我們需要可持續發展，而不是匆忙建設而損害質量和安全。"
                });
            }
            
            if (policy.includes('environment') || policy.includes('green') || policy.includes('環境')) {
                oppositionVoices.push({
                    type: 'opposition',
                    demographic: currentLang === 'en' ? 'Industrial Association Representative' : '工業協會代表',
                    quote: currentLang === 'en' ? 
                        "Environmental regulations will increase costs and reduce competitiveness. Many manufacturers are already struggling. This policy could force more businesses to relocate." :
                        "環境法規將增加成本並降低競爭力。許多製造商已經在掙扎。這項政策可能迫使更多企業搬遷。"
                });
            }
            
            // 通用反對聲音
            oppositionVoices.push(
                {
                    type: 'opposition',
                    demographic: currentLang === 'en' ? 'Retired Civil Servant, Age 68' : '退休公務員，68歲',
                    quote: currentLang === 'en' ? 
                        "I've seen too many government initiatives fail due to poor planning and execution. This policy lacks detail and seems politically motivated rather than evidence-based." :
                        "我見過太多政府倡議因規劃和執行不力而失敗。這項政策缺乏細節，似乎是政治動機而非基於證據。"
                },
                {
                    type: 'opposition',
                    demographic: currentLang === 'en' ? 'Taxpayers Association Member' : '納稅人協會成員',
                    quote: currentLang === 'en' ? 
                        "Where will the funding come from? Hong Kong already has significant fiscal challenges. This policy will burden future generations with debt while delivering uncertain benefits." :
                        "資金從哪裡來？香港已經面臨重大財政挑戰。這項政策將使未來幾代人背負債務，而收益不確定。"
                }
            );
            
            voices.push(...oppositionVoices.slice(0, Math.min(2, Math.ceil(strongOpponents / 200))));
        }
        
        // Add sector-specific voices
        if (policy.includes('fintech') || policy.includes('金融科技')) {
            voices.push({
                type: supportPercentage > 50 ? 'support' : 'concern',
                demographic: currentLang === 'en' ? 'Banking Executive, Age 45' : '銀行高管，45歲',
                quote: currentLang === 'en' ? 
                    supportPercentage > 50 ? 
                        "Hong Kong needs to embrace fintech to maintain its status as a financial hub. This policy could attract global talent and investment to our city." :
                        "While innovation is important, we must ensure proper regulation and consumer protection. The financial sector needs stability above all." :
                    supportPercentage > 50 ? 
                        "香港需要擁抱金融科技以維持其金融中心地位。這項政策可以吸引全球人才和投資到我們的城市。" :
                        "雖然創新很重要，但我們必須確保適當的監管和消費者保護。金融業最需要的是穩定。"
            });
        }
        
        return voices;
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

// Language switching functions
function switchLanguage(lang) {
    currentLang = lang;
    
    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`lang${lang.charAt(0).toUpperCase() + lang.slice(1)}`).classList.add('active');
    
    // Update all elements with data attributes
    document.querySelectorAll('[data-en]').forEach(element => {
        if (element.tagName === 'TEXTAREA') {
            element.placeholder = element.getAttribute(`data-${lang}`);
        } else if (element.tagName === 'OPTION') {
            element.textContent = element.getAttribute(`data-${lang}`);
        } else {
            element.textContent = element.getAttribute(`data-${lang}`);
        }
    });
    
    // Update activity level
    const activityLevel = document.getElementById('activityLevel');
    activityLevel.textContent = translations[lang].activityLevels.inactive;
    
    // Update placeholder for policy input
    updatePolicyPlaceholder();
    
    // Update region selector options
    document.querySelectorAll('#regionSelector option').forEach(option => {
        const key = option.getAttribute(`data-${lang}`);
        if (key) {
            option.textContent = key;
        }
    });
}

function toggleInfo() {
    const explanation = document.getElementById('modelExplanation');
    explanation.style.display = explanation.style.display === 'none' ? 'block' : 'none';
}

function updatePolicyPlaceholder() {
    const policyInput = document.getElementById('policyInput');
    const sampleText = currentLang === 'en' ? 'Try sample policies:' : '試試範例政策：';
    policyInput.placeholder = `${sampleText}\n• ${translations[currentLang].samplePolicies.join('\n• ')}`;
}

// Initialize the simulation
const simulation = new UrbanSimulation();

// Event listeners
document.getElementById('runSimulation').addEventListener('click', () => {
    const policyInput = document.getElementById('policyInput').value.trim();
    const selectedYears = parseInt(document.getElementById('yearSelector').value);
    
    if (!policyInput) {
        alert(translations[currentLang].enterPolicy);
        return;
    }
    
    simulation.runSimulation(policyInput, selectedYears);
});

document.getElementById('langEn').addEventListener('click', () => switchLanguage('en'));
document.getElementById('langZh').addEventListener('click', () => switchLanguage('zh'));

// Region selector change handler will be set up after simulation runs

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    updatePolicyPlaceholder();
    document.getElementById('activityLevel').textContent = translations[currentLang].activityLevels.inactive;
    document.getElementById('activityLevel').style.color = '#718096';
});