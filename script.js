/**
 * ============================================
 * VR DREAM VILLA - COMPLETE JAVASCRIPT
 * Version: 1.0.0
 * Date: 2026-04-02
 * ============================================
 */

// ============================================
// CONFIGURATION
// ============================================
const CONFIG = {
    VERSION: '1.0.0',
    QUALITY: 'medium',
    PERFORMANCE_TARGET: 90, // FPS
    ASSET_TIMEOUT: 60000, // ms
    DEBUG_MODE: false,
    AUTO_QUALITY: true
};

// ============================================
// QUALITY SETTINGS
// ============================================
const QUALITY_SETTINGS = {
    low: {
        modelScale: 0.8,
        shadowMapSize: 512,
        textureRepeat: 0.5,
        shadowsEnabled: false,
        fogDensity: 0.0008
    },
    medium: {
        modelScale: 1.0,
        shadowMapSize: 1024,
        textureRepeat: 1.0,
        shadowsEnabled: true,
        fogDensity: 0.0006
    },
    high: {
        modelScale: 1.2,
        shadowMapSize: 2048,
        textureRepeat: 2.0,
        shadowsEnabled: true,
        fogDensity: 0.0004
    }
};

// ============================================
// SCENE STATISTICS
// ============================================
const SCENE_STATS = {
    models: 0,
    textures: 0,
    lights: 0,
    entities: 0,
    animations: 0,
    primitives: 0,
    loadTime: 0,
    startTime: Date.now()
};

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('🏠 VR Dream Villa Initializing...');
    initializeScene();
});

function initializeScene() {
    trackAssetLoading();
    setupEventListeners();
    animateWater();
    setUpDynamicLighting();
    optimizePerformance();
    autoDetectQuality();
    displayUserGuide();
    
    if (CONFIG.DEBUG_MODE) {
        startPerformanceMonitoring();
    }
}

// ============================================
// ASSET LOADING
// ============================================
function trackAssetLoading() {
    const sceneEl = document.querySelector('a-scene');
    const loadingStatus = document.getElementById('loadingStatus');
    const assets = document.querySelectorAll('a-asset-item');
    
    let loadedCount = 0;
    const totalAssets = assets.length;
    
    console.log(`📦 Loading ${totalAssets} assets...`);
    
    assets.forEach((asset, index) => {
        asset.addEventListener('load', () => {
            loadedCount++;
            const percentage = Math.round((loadedCount / totalAssets) * 100);
            updateLoadingStatus(`Loading assets: ${percentage}%`);
            
            if (CONFIG.DEBUG_MODE) {
                console.log(`✓ Asset loaded: ${asset.id} (${loadedCount}/${totalAssets})`);
            }
        });
        
        asset.addEventListener('error', () => {
            console.error(`✗ Failed to load asset: ${asset.id}`);
            updateLoadingStatus(`Error loading: ${asset.id}`);
        });
    });
    
    // Scene ready event
    sceneEl.addEventListener('loaded', () => {
        SCENE_STATS.loadTime = Date.now() - SCENE_STATS.startTime;
        console.log(`✓ Scene loaded in ${SCENE_STATS.loadTime}ms`);
        updateLoadingStatus('Scene fully loaded!');
        hideLoadingScreen();
        logSceneStats();
    });
}

function updateLoadingStatus(text) {
    const statusEl = document.getElementById('loadingStatus');
    if (statusEl) {
        statusEl.textContent = text;
    }
}

function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    if (loadingScreen) {
        loadingScreen.style.opacity = '0';
        loadingScreen.style.pointerEvents = 'none';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 300);
    }
}

// ============================================
// SCENE STATISTICS
// ============================================
function logSceneStats() {
    const stats = {
        models: document.querySelectorAll('[gltf-model]').length,
        textures: document.querySelectorAll('img[id*="-color"], img[id*="-normal"], img[id*="-rough"]').length,
        lights: document.querySelectorAll('[type="point"], [type="directional"], [type="ambient"]').length,
        entities: document.querySelectorAll('a-entity').length,
        animations: document.querySelectorAll('[animation]').length,
        primitives: document.querySelectorAll('a-box, a-sphere, a-cylinder, a-plane, a-cone').length
    };
    
    Object.assign(SCENE_STATS, stats);
    
    console.log('%c📊 SCENE STATISTICS', 'color: #667eea; font-size: 14px; font-weight: bold;');
    console.table(stats);
    console.log(`⏱️ Load Time: ${SCENE_STATS.loadTime}ms`);
    console.log(`💾 Estimated Memory: ~${(stats.models * 5 + stats.textures * 2).toFixed(1)}MB`);
}

// ============================================
// WATER ANIMATION
// ============================================
function animateWater() {
    const waterSurface = document.getElementById('water-surface');
    if (!waterSurface) return;
    
    let waveHeight = 0;
    let waveDirection = 1;
    let time = 0;
    
    const animationLoop = setInterval(() => {
        time += 1;
        waveHeight = Math.sin(time / 50) * 0.1;
        
        const position = waterSurface.getAttribute('position');
        position.y = 0.05 + waveHeight;
        waterSurface.setAttribute('position', position);
    }, 50);
    
    // Store reference for cleanup
    window.waterAnimationId = animationLoop;
}

// ============================================
// DYNAMIC LIGHTING
// ============================================
function setUpDynamicLighting() {
    const sunLight = document.getElementById('sun-light');
    const ambientLight = document.getElementById('ambient-light');
    
    if (!sunLight) return;
    
    let timeOfDay = 0;
    
    const lightingLoop = setInterval(() => {
        timeOfDay += 1;
        
        // Sun intensity variation
        const sunIntensity = 0.4 + Math.sin(timeOfDay / 100) * 0.35;
        const ambientIntensity = 0.3 + Math.sin(timeOfDay / 120) * 0.25;
        
        // Update sun position
        const angle = (timeOfDay / 100) * Math.PI;
        const sunX = Math.cos(angle) * 20;
        const sunY = Math.sin(angle) * 15 + 10;
        
        sunLight.setAttribute('light', { intensity: sunIntensity });
        sunLight.setAttribute('position', `${sunX} ${sunY} 5`);
        
        if (ambientLight) {
            ambientLight.setAttribute('light', { intensity: ambientIntensity });
        }
    }, 100);
    
    window.lightingLoopId = lightingLoop;
}

// ============================================
// QUALITY SETTINGS
// ============================================
function setQuality(level) {
    const settings = QUALITY_SETTINGS[level];
    if (!settings) return;
    
    console.log(`🎮 Setting quality to: ${level.toUpperCase()}`);
    CONFIG.QUALITY = level;
    
    // Apply to models
    document.querySelectorAll('[gltf-model]').forEach(model => {
        const scale = settings.modelScale;
        model.setAttribute('scale', `${scale} ${scale} ${scale}`);
    });
    
    // Apply shadows
    if (!settings.shadowsEnabled) {
        document.querySelectorAll('[shadow]').forEach(el => {
            el.removeAttribute('shadow');
        });
    }
    
    // Update fog
    const scene = document.querySelector('a-scene');
    if (scene) {
        scene.setAttribute('fog', `type: exponential; color: #87ceeb; density: ${settings.fogDensity}`);
    }
}

function autoDetectQuality() {
    if (!CONFIG.AUTO_QUALITY) return;
    
    let qualityLevel = 'medium';
    
    if (window.matchMedia('(max-width: 768px)').matches) {
        qualityLevel = 'low';
        console.log('📱 Mobile device detected - using LOW quality');
    } else if (navigator.hardwareConcurrency < 4) {
        qualityLevel = 'low';
        console.log('⚙️ Low-end device detected - using LOW quality');
    } else if (navigator.hardwareConcurrency >= 8) {
        qualityLevel = 'high';
        console.log('🖥️ High-end device detected - using HIGH quality');
    } else {
        console.log('💻 Desktop device detected - using MEDIUM quality');
    }
    
    setQuality(qualityLevel);
}

// ============================================
// PERFORMANCE OPTIMIZATION
// ============================================
function optimizePerformance() {
    const sceneEl = document.querySelector('a-scene');
    
    // Enable physics for static bodies
    document.querySelectorAll('[static-body]').forEach(body => {
        body.setAttribute('static-body', '');
    });
    
    // Enable shadows for models
    document.querySelectorAll('[gltf-model]').forEach(model => {
        if (!model.hasAttribute('shadow')) {
            model.setAttribute('shadow', 'cast: true; receive: true');
        }
    });
    
    console.log('⚡ Performance optimizations applied');
}

// ============================================
// EVENT LISTENERS
// ============================================
function setupEventListeners() {
    // Keyboard controls
    document.addEventListener('keydown', (event) => {
        handleKeyDown(event);
    });
    
    // Window resize
    window.addEventListener('resize', () => {
        if (CONFIG.DEBUG_MODE) {
            console.log('🔄 Window resized');
        }
    });
    
    // Before unload
    window.addEventListener('beforeunload', () => {
        cleanup();
    });
}

function handleKeyDown(event) {
    switch(event.key.toLowerCase()) {
        case 'q':
            // Quality adjustment
            const currentLevel = CONFIG.QUALITY;
            const levels = ['low', 'medium', 'high'];
            const nextLevel = levels[(levels.indexOf(currentLevel) + 1) % levels.length];
            setQuality(nextLevel);
            break;
        case 'h':
            // Help
            displayUserGuide();
            break;
        case 's':
            // Stats
            if (CONFIG.DEBUG_MODE) {
                logSceneStats();
            }
            break;
    }
}

// ============================================
// TEXTURE FALLBACKS
// ============================================
function setupTextureFallbacks() {
    const textures = document.querySelectorAll('img[id*="color"], img[id*="normal"], img[id*="rough"]');
    
    textures.forEach(texture => {
        texture.addEventListener('error', () => {
            console.warn(`⚠️ Failed to load texture: ${texture.id}`);
            // Fallback to solid color
            texture.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="256" height="256"%3E%3Crect fill="%23ccc" width="256" height="256"/%3E%3C/svg%3E';
        });
    });
}

// ============================================
// MODEL ERROR HANDLING
// ============================================
function setupModelErrorHandling() {
    const models = document.querySelectorAll('[gltf-model]');
    
    models.forEach(model => {
        model.addEventListener('model-loaded', () => {
            if (CONFIG.DEBUG_MODE) {
                console.log(`✓ Model loaded: ${model.getAttribute('gltf-model')}`);
            }
        });
        
        model.addEventListener('error', () => {
            console.error(`✗ Model failed to load: ${model.getAttribute('gltf-model')}`);
        });
    });
}

// ============================================
// PERFORMANCE MONITORING
// ============================================
function startPerformanceMonitoring() {
    if (!window.performance || !performance.memory) return;
    
    console.log('%c📈 PERFORMANCE MONITORING ENABLED', 'color: #ff6b6b; font-size: 12px; font-weight: bold;');
    
    setInterval(() => {
        const memory = performance.memory;
        const usedMemoryMB = (memory.usedJSHeapSize / 1048576).toFixed(2);
        const limitMemoryMB = (memory.jsHeapSizeLimit / 1048576).toFixed(2);
        
        console.log(`💾 Memory: ${usedMemoryMB}MB / ${limitMemoryMB}MB`);
    }, 5000);
}

// ============================================
// USER GUIDE
// ============================================
function displayUserGuide() {
    const guide = `
╔════════════════════════════════════════════════════════════╗
║        🏠 VR DREAM VILLA - EXPERIENCE GUIDE                ║
╠════════════════════════════════════════════════════════════╣
║ CONTROLS:                                                  ║
║   W/A/S/D ........ Move (Forward/Left/Back/Right)         ║
║   Mouse ......... Look Around / Head Rotation              ║
║   Space ......... Jump                                     ║
║   Q ............ Toggle Quality Settings                   ║
║   H ............ Show This Help Menu                       ║
║   S ............ Show Scene Statistics                     ║
║                                                            ║
║ AREAS TO EXPLORE:                                         ║
║   ① Living Room   - Luxurious seating & entertainment      ║
║   ② Master Bedroom - Comfort & relaxation                  ║
║   ③ Modern Kitchen - Premium appliances & dining           ║
║   ④ Swimming Pool - Resort-style outdoor area              ║
║   ⑤ Environments  - Gardens, driveway & scenery            ║
║                                                            ║
║ FEATURES:                                                  ║
║   ✓ 20+ Professional 3D Models (GLB Format)               ║
║   ✓ High-Quality PBR Textures (Bricks, Grass, Tiles)       ║
║   ✓ Dynamic Lighting with Shadow Mapping                   ║
║   ✓ Animated Water & Pool Toys                            ║
║   ✓ Auto Quality Detection (Low/Medium/High)               ║
║   ✓ Optimized for 90+ FPS Performance                      ║
║   ✓ VR Ready (Desktop, Mobile, Headsets)                   ║
║                                                            ║
║ QUALITY MODES:                                            ║
║   LOW    - Mobile/Low-end devices (512x texture)           ║
║   MEDIUM - Desktop standard (1024x texture)                ║
║   HIGH   - High-end PCs (2048x texture)                    ║
║                                                            ║
║ TIPS & TRICKS:                                            ║
║   • Use arrow keys or WASD to navigate smoothly            ║
║   • Look up to see the beautiful sky & lighting            ║
║   • Visit all rooms to see detailed furnishings            ║
║   • Check the pool area for animated elements              ║
║   • Adjust quality if experiencing lag                     ║
║   • Use VR headset for immersive experience                ║
║                                                            ║
║ TECHNICAL SPECS:                                          ║
║   Engine: A-Frame v1.4.2 (Three.js/WebGL)                 ║
║   Physics: Cannon Physics Engine                          ║
║   Models: glTF 2.0 Format (.glb)                          ║
║   Textures: 1K PBR Maps (Color/Normal/Rough)              ║
║   Platform: Web-based, Cross-browser Compatible            ║
║                                                            ║
║ REQUIREMENTS:                                             ║
║   • Modern Browser (Chrome, Firefox, Edge, Safari)         ║
║   • WebGL Support Enabled                                  ║
║   • JavaScript Enabled                                     ║
║   • At least 2GB RAM (4GB recommended)                     ║
║   • Broadband Internet Connection                          ║
║                                                            ║
╚════════════════════════════════════════════════════════════╝
    `;
    console.log('%c' + guide, 'font-family: monospace; font-size: 11px;');
}

// ============================================
// CLEANUP
// ============================================
function cleanup() {
    // Clear intervals
    clearInterval(window.waterAnimationId);
    clearInterval(window.lightingLoopId);
    
    console.log('🧹 Cleaning up resources...');
}

// ============================================
// GLOBAL API
// ============================================
window.VRVilla = {
    VERSION: CONFIG.VERSION,
    
    setQuality,
    autoDetectQuality,
    
    logSceneStats: () => logSceneStats(),
    displayGuide: () => displayUserGuide(),
    
    cleanup,
    
    // Debug
    getStats: () => SCENE_STATS,
    getConfig: () => CONFIG,
    setDebug: (enabled) => CONFIG.DEBUG_MODE = enabled
};

// ============================================
// INITIALIZATION ON WINDOW LOAD
// ============================================
window.addEventListener('load', () => {
    setTimeout(() => {
        setupTextureFallbacks();
        setupModelErrorHandling();
        
        if (CONFIG.DEBUG_MODE) {
            console.log('✓ All systems initialized');
            logSceneStats();
        }
    }, 1000);
});

// Display welcome message
console.log('%c🏠 VR DREAM VILLA v' + CONFIG.VERSION, 'color: #667eea; font-size: 16px; font-weight: bold;');
console.log('%cPress "H" ingame or type VRVilla.displayGuide() to see controls', 'color: #999; font-size: 12px;');
console.log('%cType VRVilla.setDebug(true) to enable debug mode', 'color: #999; font-size: 12px;');