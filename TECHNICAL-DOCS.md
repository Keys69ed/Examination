# VR Dream Villa - Technical Documentation

## Architecture Overview

### System Design
```
┌─────────────────────────────────────────────────┐
│          A-Frame Scene (WebGL Canvas)            │
├─────────────────────────────────────────────────┤
│  Camera System  │  Physics Engine │  Lighting    │
├─────────────────────────────────────────────────┤
│  3D Models (GLB)  │  Textures (PBR)  │ Animations │
├─────────────────────────────────────────────────┤
│            JavaScript Event Loop                 │
├─────────────────────────────────────────────────┤
│    Browser APIs   │  WebGL Renderer  │  DOM      │
└─────────────────────────────────────────────────┘
```

## 3D Models (20 Total)

### Living Room Models
- **Couch.glb** (1.5-2.5 MB)
  - Polygon Count: ~15,000
  - Rigged: No
  - Textured: Yes
  - Usage: Main seating furniture

- **Flat-screen TV.glb** (800 KB - 1.2 MB)
  - Polygon Count: ~8,000
  - Rigged: No
  - Textured: Yes
  - Usage: Entertainment center

- **Standing Desk.glb** (600 KB - 1 MB)
  - Polygon Count: ~6,000
  - Rigged: No
  - Textured: Yes
  - Usage: Workspace

- **Light Stand.glb** (400 KB)
  - Polygon Count: ~4,000
  - Rigged: No
  - Textured: Yes
  - Usage: Ambient lighting

- **Wall Art 01.glb** & **Wall Art 03.glb** (200-300 KB each)
  - Polygon Count: ~2,000 each
  - Rigged: No
  - Textured: Yes
  - Usage: Decoration

### Bedroom Models
- **Bed.glb** (2-3 MB)
  - Polygon Count: ~20,000
  - Rigged: No
  - Textured: Yes (including bedding)
  - Usage: Main furniture

### Kitchen Models
- **Kitchen Fridge Large.glb** (1.2-1.8 MB)
  - Polygon Count: ~12,000
  - Rigged: No
  - Textured: Yes
  - Usage: Appliance

- **Kitchen Stove.glb** (1 MB - 1.5 MB)
  - Polygon Count: ~10,000
  - Rigged: No
  - Textured: Yes
  - Usage: Appliance

- **Steel Sink Kitchen Cabinet.glb** (800 KB - 1.2 MB)
  - Polygon Count: ~8,000
  - Rigged: No
  - Textured: Yes
  - Usage: Kitchen fixture

### Pool Area Models
- **Garden Lounger.glb** (600 KB - 1 MB)
  - Polygon Count: ~6,000
  - Rigged: No
  - Textured: Yes
  - Usage: Seating (2x)

- **Lamp post.glb** (500 KB)
  - Polygon Count: ~5,000
  - Rigged: No
  - Textured: Yes
  - Usage: Outdoor lighting

### Outdoor Models
- **Tree.glb** (1.5-2 MB)
  - Polygon Count: ~12,000
  - Rigged: No
  - Textured: Yes
  - Usage: Environment (2x)

- **Trees.glb** (3-4 MB)
  - Polygon Count: ~25,000
  - Rigged: No
  - Textured: Yes
  - Usage: Group of trees

- **CAR Model.glb** (2-3 MB)
  - Polygon Count: ~18,000
  - Rigged: No (doors don't open)
  - Textured: Yes
  - Usage: Driveway vehicle

- **Motorcycle, Suzuki SV650.glb** (1.5-2 MB)
  - Polygon Count: ~14,000
  - Rigged: No
  - Textured: Yes
  - Usage: Secondary vehicle

### Misc Models
- **beach ball.glb** (300-400 KB)
  - Polygon Count: ~1,500
  - Rigged: No
  - Textured: Yes
  - Usage: Animated pool toy

- **Rubber Duck Pool Toy.glb** (250-350 KB)
  - Polygon Count: ~1,200
  - Rigged: No
  - Textured: Yes
  - Usage: Animated pool toy

- **Door Double.glb** (600 KB - 1 MB)
  - Polygon Count: ~7,000
  - Rigged: No
  - Textured: Yes
  - Usage: Non-functional doors

- **Doorway Front.glb** (1-1.5 MB)
  - Polygon Count: ~9,000
  - Rigged: No
  - Textured: Yes
  - Usage: Villa entrance

## Textures (PBR Material Maps)

### Bricks058_1K-JPG (Villa Walls)
```
Type: Masonry/Brick
Resolution: 1024x1024 (1K)
Files:
  - Bricks058_1K_Color.jpg      (Color/Albedo)
  - Bricks058_1K_Normal.jpg     (Normal map for detail)
  - Bricks058_1K_Roughness.jpg  (Surface roughness)
  - Bricks058_1K_Metallic.jpg   (Metallic values)
  - Bricks058_1K_AO.jpg         (Ambient occlusion)

Usage: Villa exterior and interior walls
Tiling: 4x4 on main building, 2x1-1x2 on room walls
Material Properties:
  - Roughness: 0.7
  - Metalness: 0.1
  - Displacement: Yes (Normal map)
```

### Grass008_1K-JPG (Ground/Terrain)
```
Type: Natural grass
Resolution: 1024x1024 (1K)
Files:
  - Grass008_1K_Color.jpg       (Color/Albedo)
  - Grass008_1K_Normal.jpg      (Normal map for blades)
  - Grass008_1K_Roughness.jpg   (Surface roughness)
  - Grass008_1K_AO.jpg          (Ambient occlusion)

Usage: Outdoor ground terrain
Tiling: 40x40 (highly repeated for large area)
Material Properties:
  - Roughness: 0.8
  - Metalness: 0.0
  - Displacement: Yes (Normal map)
```

### Tiles075_1K-JPG (Kitchen/Bedroom Floors)
```
Type: Ceramic tiles
Resolution: 1024x1024 (1K)
Files:
  - Tiles075_1K_Color.jpg       (Color/Albedo)
  - Tiles075_1K_Normal.jpg      (Normal map for grout)
  - Tiles075_1K_Roughness.jpg   (Surface roughness)
  - Tiles075_1K_AO.jpg          (Ambient occlusion)

Usage: Kitchen floor, Bedroom floor
Tiling: 3x2 (Kitchen), 2x2 (Bedroom)
Material Properties:
  - Roughness: 0.5-0.6
  - Metalness: 0.0
  - Displacement: Yes (Normal map)
```

### Tiles133A_1K-JPG (Pool Deck)
```
Type: Stone/concrete tiles
Resolution: 1024x1024 (1K)
Files:
  - Tiles133A_1K_Color.jpg      (Color/Albedo)
  - Tiles133A_1K_Normal.jpg     (Normal map)
  - Tiles133A_1K_Roughness.jpg  (Surface roughness)
  - Tiles133A_1K_AO.jpg         (Ambient occlusion)

Usage: Pool deck, Living room floor
Tiling: 4x2 (Pool), 2x2 (Living room)
Material Properties:
  - Roughness: 0.6-0.7
  - Metalness: 0.0
  - Displacement: Yes (Normal map)
```

## Lighting System

### Ambient Light
```
Type: Ambient
Color: #ffffff (white)
Intensity: 0.5 (varies 0.3-0.7 with time)
Purpose: Global illumination
Effect: Provides base lighting across all surfaces
```

### Sun/Directional Light
```
Type: Directional
Color: #ffffff (white)
Intensity: 0.8 (varies 0.4-0.75 with time)
Position: Dynamic (rotates around villa)
Shadows:
  - Map Size: 2048x2048
  - Bias: 0.0039
  - Radius: 2
  - Enabled: Yes (medium/high quality)
Purpose: Main light source, creates shadows
Effect: Realistic daytime lighting
```

### Point Lights (Accent)
```
1. Main Accent Light
   - Position: 0, 5, 0 (above villa center)
   - Color: #ffd700 (gold)
   - Intensity: 0.4
   - Purpose: General illumination

2. Living Room Light
   - Position: 3, 2.5, -1 (corner of living room)
   - Color: #ffeb3b (warm white)
   - Intensity: 0.6
   - Purpose: Room-specific lighting

3. Bedroom Lights (2x)
   - Positions: -3, 2, -1.5 and 3, 2, -1.5
   - Color: #ffeb3b (warm white)
   - Intensity: 0.5 each
   - Purpose: Bedside lighting

4. Kitchen Light
   - Position: 0, 3.8, -8
   - Color: #ffffff (white)
   - Intensity: 0.8
   - Purpose: Task lighting

5. Pool Light
   - Position: 0, 1, 0 (underwater)
   - Color: #00ffff (cyan)
   - Intensity: 0.6
   - Purpose: Accent/atmospheric

6. Lamp Post
   - Position: -5, 5, -2.5 (outdoor)
   - Color: #ffeb3b (warm white)
   - Intensity: 0.7
   - Purpose: Environmental lighting
```

### Lighting Animation
```
Time Cycle: 4000ms
Sun Position: Rotating arc
Intensity Variation: Sinusoidal (smooth transition)
Day/Night Cycle: Simulated but not realistic
Effect: Dynamic, changing lighting throughout "day"
```

## Physics System

### Physics Engine: Cannon.js
```
Gravity: -9.8 (Earth standard)
Default Body Type: Dynamic
Debug: Disabled (visual wireframes off)
Timestep: 60 FPS

Static Bodies:
  - All architectural elements (walls, floors, pool)
  - Large furniture (beds, desks, couches)
  - Environmental elements (trees, vehicles)

Dynamic Bodies:
  - Animated pool toys (ball, duck)
  - Player character (with camera)

Collision Groups:
  - Walls, Floors: Layer 1
  - Furniture: Layer 2
  - Player: Layer 3
  - Projectiles/Toys: Layer 4
```

## Animation System

### Pool Water Animation
```
Duration: 2000ms
Loop: Infinite (continuous)
Easing: easeInOutSine
Property: Position Y
From: 0.05
To: 0.15
Amplitude: 0.05 units
Effect: Gentle wave motion
```

### Beach Ball Animation
```
Duration: 4000ms
Loop: Infinite (continuous)
Easing: easeInOutSine
Property: Position X/Z
From: (2, 0.3, -18)
To: (-2, 0.3, -18)
Effect: Back-and-forth floating
```

### Rubber Duck Animation
```
Duration: 5000ms
Loop: Infinite (continuous)
Easing: easeInOutSine
Property: Position X/Z
From: (0, 0.2, -16)
To: (1, 0.2, -19)
Effect: Winding path through pool
```

### Sun/Lighting Animation
```
Duration: Continuous (100ms ticks)
Property: Position, Intensity
Pattern: Sinusoidal rotation
Effect: Realistic lighting changes
Time Cycle: ~120 seconds for full day/night
```

## Performance Optimization Techniques

### 1. Asset Management
- GLB format compression
- Mipmapping for distant objects
- Texture resolution tiers (512x, 1024x, 2048x)
- Lazy loading of models

### 2. Rendering Optimization
- Shadow map resolution: 1024-2048 (selectable)
- Fog effect: Reduces far draw distance
- Level of Detail (LOD): Simple vs complex models
- Frustum culling: Automatic via Three.js

### 3. Memory Management
- Asset pooling: Reuse pool toys
- Unused texture removal
- Garbage collection friendly code
- Browser memory limits respected

### 4. Physics Optimization
- Static vs dynamic bodies
- Simplified collision shapes
- No continuous collision detection
- Discrete timesteps

### 5. Code Optimization
- Event delegation
- Debounced resize handlers
- Efficient animation loops
- Minimal DOM manipulation

## Browser Compatibility Matrix

| Feature | Chrome | Firefox | Edge | Safari | Notes |
|---------|--------|---------|------|--------|-------|
| WebGL 2.0 | ✅ | ✅ | ✅ | ⚠️ | Core rendering |
| A-Frame | ✅ | ✅ | ✅ | ✅ | Framework support |
| glTF Models | ✅ | ✅ | ✅ | ✅ | Model format |
| PBR Materials | ✅ | ✅ | ✅ | ⚠️ | Texture system |
| Physics Engine | ✅ | ✅ | ✅ | ✅ | Cannon.js |
| Shadows | ✅ | ✅ | ✅ | ⚠️ | Advanced feature |
| WebVR | ✅ | ✅ | ✅ | ⚠️ | VR headsets |
| Mobile | ✅ | ✅ | ✅ | ✅ | Touch controls |

## File Size Analysis

### Models Total
- 20 GLB files: ~30-40 MB total
- Average per model: 1.5-2 MB
- Compressed (gzip): ~15-20 MB

### Textures Total
- 4 texture sets: ~12-16 MB total
- Average per set: 3-4 MB
- Compressed (gzip): ~6-8 MB

### Total Project
- All assets: ~50-60 MB
- With HTML/CSS/JS: ~50.5-60.5 MB
- Compressed delivery: ~25-30 MB

## Memory Usage Breakdown

### Runtime Memory (Medium Quality)
- WebGL Textures: ~80-100 MB
- Model Geometry: ~40-60 MB
- Three.js Objects: ~20-30 MB
- JavaScript Objects: ~10-15 MB
- **Total: ~150-200 MB**

### Memory Usage (High Quality)
- All above: ~250-350 MB
- Requires: 4+ GB RAM minimum

### Memory Usage (Low Quality)
- All above: ~100-150 MB
- Suitable for: 2 GB RAM devices

## Security Considerations

### CORS
- All assets served from same origin
- No external CDN (except frameworks)
- Reduces security risk

### Content Security Policy
```
script-src: 'self' aframe.io
style-src: 'self'
img-src: 'self'
object-src: 'none'
```

### Input Validation
- No user input processed
- All interactions pre-defined
- No data transmission

### VR Safety
- No rapid head movements required
- Comfortable viewing distances
- Standard VR field of view
- No flashing/strobe effects

## Accessibility Features

### Keyboard Controls
- WASD: Standard movement
- Mouse/Trackpad: Look controls
- Space: Jump action
- Q: Quality toggle
- H: Help menu
- S: Statistics

### Responsive Design
- Works on mobile, tablet, desktop
- Touch controls for mobile VR
- Keyboard fallback for accessibility
- Screen reader compatible text

### Performance Accessibility
- Low quality option for older devices
- Reduced motion support
- High contrast mode support
- Simplified UI on small screens

## Deployment Checklist

- [ ] All 20 models present in `assets/models/`
- [ ] All 4 texture sets in `assets/textures/`
- [ ] Folder structure matches paths in HTML
- [ ] CORS headers configured on server
- [ ] HTTPS enabled (recommended)
- [ ] Caching headers set appropriately
- [ ] Gzip compression enabled
- [ ] CDN configured (optional)
- [ ] Performance tested
- [ ] Cross-browser tested
- [ ] Mobile tested
- [ ] VR headset tested (optional)

## Troubleshooting Guide

### Models Not Loading
**Symptoms**: 3D objects invisible, gray boxes
**Solutions**:
1. Check browser console for 404 errors
2. Verify file paths in HTML match actual structure
3. Check CORS headers
4. Verify GLB files are valid
5. Try lower quality setting

### Textures Not Displaying
**Symptoms**: Models appear gray or single color
**Solutions**:
1. Check texture folder structure
2. Verify file names match HTML IDs
3. Check CORS for texture files
4. Try disabling browser cache
5. Use browser developer tools to debug

### Performance Issues
**Symptoms**: Stuttering, low FPS, lag
**Solutions**:
1. Press 'Q' to lower quality setting
2. Close other browser tabs
3. Disable browser extensions
4. Update GPU drivers
5. Try different browser
6. Use Firefox/Chrome (most optimized)

### VR Not Working
**Symptoms**: No VR mode option, headset not detected
**Solutions**:
1. Use WebVR-compatible browser
2. Ensure HTTPS connection
3. Check browser permissions
4. Update headset drivers
5. Try Chrome or Firefox

---

**Technical Documentation v1.0**  
**Last Updated: 2026-04-02**