# 🏠 VR Dream Villa - Immersive Virtual Reality Experience

A stunning, fully-featured Virtual Reality villa experience built with A-Frame and WebGL technology. Featuring 20+ professional 3D models and high-quality PBR textures.

## ✨ Features

### 🎮 Immersive Environments
- **Living Room** - Luxury seating, entertainment system, wall art
- **Master Bedroom** - King bed, dressers, bedside lighting
- **Modern Kitchen** - Premium appliances, dining area, professional lighting
- **Swimming Pool** - Resort-style outdoor area with animated water effects
- **Outdoor Scenery** - Landscaping, vehicles, environmental details

### 🎨 Professional Assets
- ✅ 20+ GLB 3D Models (furniture, appliances, decorations, vehicles)
- ✅ 4 High-Quality PBR Texture Sets:
  - Bricks058 (Villa walls)
  - Grass008 (Outdoor terrain)
  - Tiles075 (Kitchen/Bedroom floors)
  - Tiles133A (Pool deck)
- ✅ Full PBR Support (Color, Normal, Roughness, Metallic, AO maps)

### ⚡ Performance Optimized
- Auto quality detection (Low/Medium/High)
- Shadow mapping and lighting optimization
- 90+ FPS target for smooth gameplay
- Responsive design for all devices
- Memory efficient asset loading

### 🖥️ Technology Stack
- **Framework**: A-Frame v1.4.2 (Three.js/WebGL)
- **Physics**: Cannon Physics Engine
- **Format**: glTF 2.0 (.glb models)
- **Textures**: 1K PBR Maps
- **Platform**: Web-based, Cross-browser Compatible

## 🚀 Quick Start

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/2kiki005/Examination.git
   cd Examination
   ```

2. **Open in Browser**
   - Simply open `index.html` in your browser

3. **Run Local Server** (Optional)
   ```bash
   # Python 3
   python -m http.server 8000

   # Node.js
   npx http-server

   # npm
   npm start
   ```

4. **Access**
   - Desktop: `http://localhost:8000`
   - Mobile: Use your device IP address
   - VR Headset: Compatible with WebVR

## 🎮 Controls

| Control | Action |
|---------|--------|
| `W / A / S / D` | Move (Forward/Left/Back/Right) |
| `Mouse` | Look Around / Head Rotation |
| `Space` | Jump |
| `Q` | Toggle Quality (Low/Medium/High) |
| `H` | Show Help Menu |
| `S` | Display Scene Statistics |

## 📁 Project Structure

```
Examination/
├── index.html                    # Main HTML file
├── script.js                     # JavaScript functionality
├── styles.css                    # CSS styling
├── package.json                  # Project metadata
├── README.md                     # This file
│
├── assets/
│   ├── models/ (20 GLB files)
│   │   ├── beach ball.glb
│   │   ├── Bed.glb
│   │   ├── CAR Model.glb
│   │   ├── Couch.glb
│   │   ├── Door Double.glb
│   │   ├── Doorway Front.glb
│   │   ├── Flat-screen TV.glb
│   │   ├── Garden Lounger.glb
│   │   ├── Kitchen Fridge Large.glb
│   │   ├── Kitchen Stove.glb
│   │   ├── Lamp post.glb
│   │   ├── Light Stand.glb
│   │   ├── Motorcycle, Suzuki SV650.glb
│   │   ├── Rubber Duck Pool Toy.glb
│   │   ├── Standing Desk.glb
│   │   ├── Steel Sink Kitchen Cabinet.glb
│   │   ├── Tree.glb
│   │   ├── Trees.glb
│   │   ├── Wall Art 01.glb
│   │   └── Wall Art 03.glb
│   │
│   └── textures/ (4 texture sets)
│       ├── Bricks058_1K-JPG/
│       │   ├── Bricks058_1K_Color.jpg
│       │   ├── Bricks058_1K_Normal.jpg
│       │   ├── Bricks058_1K_Roughness.jpg
│       │   ├── Bricks058_1K_Metallic.jpg
│       │   └── Bricks058_1K_AO.jpg
│       ├── Grass008_1K-JPG/
│       ├── Tiles075_1K-JPG/
│       └── Tiles133A_1K-JPG/
│
└── dist/                         # Production build

```

## 🌐 Browser Support

| Browser | Support | VR | Notes |
|---------|---------|-----|-------|
| Chrome | ✅ Excellent | ✅ | Recommended |
| Firefox | ✅ Excellent | ✅ | Full support |
| Edge | ✅ Good | ✅ | Chromium-based |
| Safari | ✅ Good | ⚠️ | Limited VR support |
| Opera | ✅ Good | ✅ | Chromium-based |
| Mobile | ✅ Good | ✅ | Tested on iOS/Android |

## ⚙️ Quality Modes

### LOW Quality (Mobile/Low-end)
- Model Scale: 0.8x
- Texture Resolution: 512x512
- Shadows: Disabled
- Fog Density: 0.0008
- Best for: Older devices, mobile phones

### MEDIUM Quality (Standard)
- Model Scale: 1.0x
- Texture Resolution: 1024x1024
- Shadows: Enabled
- Fog Density: 0.0006
- Best for: Desktop computers, tablets

### HIGH Quality (Premium)
- Model Scale: 1.2x
- Texture Resolution: 2048x2048
- Shadows: Full enabled
- Fog Density: 0.0004
- Best for: Gaming PCs, high-end devices

## 📊 Performance Metrics

- **Target FPS**: 90+ (VR standard)
- **Load Time**: ~2-3 seconds
- **Memory Usage**: 150-400MB (varies by quality)
- **Polygon Count**: ~50,000 (optimized)
- **Texture Memory**: ~256MB (medium quality)

## 🔧 Customization

### Adjust Quality Programmatically
```javascript
// In browser console
VRVilla.setQuality('high');   // or 'low', 'medium'
VRVilla.autoDetectQuality();  // Auto-detect best quality
```

### Display Statistics
```javascript
VRVilla.logSceneStats();
console.log(VRVilla.getStats());
```

### Enable Debug Mode
```javascript
VRVilla.setDebug(true);
```

### Show Help
```javascript
VRVilla.displayGuide();
```

## 🎯 Deployment

### GitHub Pages
1. Push to GitHub
2. Enable GitHub Pages in repo settings
3. Access via: `https://yourusername.github.io/Examination`

### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Vercel
```bash
npm i -g vercel
vercel --prod
```

### Traditional Hosting
1. Upload all files to web server
2. Ensure CORS headers are configured
3. Access via your domain

## 🐛 Troubleshooting

### Scene Won't Load
- Clear browser cache
- Disable browser extensions
- Try a different browser
- Check browser console for errors

### Textures Not Showing
- Verify `assets/textures/` folder structure
- Check CORS headers on server
- Ensure file paths are correct
- Try fallback quality settings

### Poor Performance
- Lower quality settings (`Q` key)
- Close other applications
- Update GPU drivers
- Disable non-essential browser extensions

### Mobile Issues
- Use Chrome/Firefox for best compatibility
- Allow permission for motion sensors (VR mode)
- Close other tabs
- Lower quality for older devices

## 📚 Resources

- [A-Frame Documentation](https://aframe.io/docs/)
- [Three.js Manual](https://threejs.org/manual/)
- [WebGL Resources](https://www.khronos.org/webgl/)
- [glTF Specification](https://www.khronos.org/gltf/)
- [PBR Texturing Guide](https://www.substance3d.com/)

## 🤝 Contributing

Contributions welcome! Please:
1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📝 License

This project is licensed under the MIT License - see [LICENSE](LICENSE) file for details.

## 👨‍💻 Authors

- **2kiki005** - Initial creator and maintainer

## 🙏 Acknowledgments

- A-Frame team for excellent WebVR framework
- Three.js for 3D graphics foundation
- Mozilla for WebVR specifications
- All contributors and testers

## 📮 Support & Contact

- **Issues**: [GitHub Issues](https://github.com/2kiki005/Examination/issues)
- **Email**: Contact via GitHub
- **Discussion**: Use GitHub Discussions for questions

## 🔮 Roadmap

- [ ] Multiplayer support
- [ ] Real-time photorealistic rendering upgrade
- [ ] Voice control integration
- [ ] Weather effects (rain, snow)
- [ ] Mobile native app
- [ ] Interior customization tool
- [ ] 360° photo gallery
- [ ] Social sharing features
- [ ] Avatar system
- [ ] Performance monitoring dashboard

## 📈 Version History

- **v1.0.0** (2026-04-02) - Initial release
  - Complete villa with 3 rooms + pool
  - 20 professional 3D models
  - 4 PBR texture sets
  - Dynamic lighting & shadows
  - Auto quality detection
  - Full VR support

---

**Last Updated**: 2026-04-02  
**Status**: ✅ Production Ready  
**Compatibility**: Cross-platform, WebGL-based

**Enjoy your immersive VR villa experience! 🏠✨**