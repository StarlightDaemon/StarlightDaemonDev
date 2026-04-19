# Contributing to Afterglows

Thank you for your interest in contributing to **Afterglows**! This project is a living archive of creative web experiments, and we welcome new prototypes, bug fixes, and improvements.

## What Belongs Here?

This repository welcomes:
- **Prototypes**: Early-stage ideas and proof-of-concepts
- **Scrapped Concepts**: Projects abandoned for practical reasons but technically interesting
- **Visual Effects**: CSS/Canvas animations, terminal effects, retro aesthetics
- **Experiments**: Anything creative using web technologies

## How to Contribute

### Adding a New Prototype

1. **Create a Folder**: Use a descriptive name (e.g., `Hologram Effect`, `Pixel Rain`)
2. **Add Your Files**: HTML, CSS, JS - keep it self-contained
3. **Document It**: Create a `README.md` in your folder describing what the prototype does and how to open it
4. **Link It**: Update the main `index.html` to add a card linking to your demo

### File Structure Convention

```
YourPrototype/
├── README.md          # What it is, how to use it
├── demo.html          # Main entry point
├── styles.css         # (optional)
└── script.js          # (optional)
```

### Code Style

This is a creative laboratory - there's no strict style guide. However:
- **Prefer vanilla CSS/JS** over frameworks when possible
- **Comment complex logic** so others can learn from it
- **Keep file sizes reasonable** (no large binary assets without good reason)
- **Make it self-contained** - avoid external dependencies when feasible

### Submitting Your Work

1. Fork this repository
2. Create a branch (`git checkout -b add-hologram-effect`)
3. Add your prototype following the structure above
4. Commit your changes (`git commit -m "Add hologram effect prototype"`)
5. Push to your fork (`git push origin add-hologram-effect`)
6. Open a Pull Request

## Questions?

Open an issue! This project is experimental by nature - there are no bad questions.

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
