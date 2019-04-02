# Horizontal Scrolling Portfolio Design
I created this design to be used as a template for my personal web development portfolio.

This design features a horizontal, mousewheel scrollable, layout.

### Planned Functionality
* Populate with additional content
* **ScrollSpy** - Implement ScrollSpy for smooth scrolling and nav-link highlighting
* **Scroll Animations** - Implement animations on elements as you scroll through the content


## Getting Started

You may need to install Node.js in order to install Less (You may also install less with yarn - refer to the link at the bottom of this section)
https://nodejs.org/en/

This project uses the CSS preprocessor, Less (Leaner Style Sheets) which is a backwards-compatibile language extension for CSS.
http://lesscss.org/

After installing node.js you can run the following command to install less:
```
npm install -g less
```

Then you'll want to install the less-watch-compiler:
```
npm install -g less-watch-compiler
```

To start watching less files for changes, navigate to the project folder and run the command:
```
less-watch-compiler less css index.less
```

For more detailed instructions visit:
https://www.npmjs.com/package/less-watch-compiler

## Built With

* **vielhuber**'s JS file to add horizontal scrolling functionality to the mousewheel.
https://gist.github.com/vielhuber/6a894f6fa083949f6a3b4ea4c8a350fe

## Author
* **Tyler Turnipseed**
