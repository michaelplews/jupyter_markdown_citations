# Formatted Reference Links for Jupyter Notebooks based on .bib Files

## Example
![Example.gif](./example/example_zhang.gif)

Output gives `<a href=http://dx.doi.org/...></a>` link to the original paper with title text full citation: 

> Nanocrystals, such as those produced by <a title="Tuning sub-10 nm single-phase NaMnF3 nanocrystals as ultrasensitive hosts for pure intense fluorescence and excellent T1 magnetic resonance imaging, Chem. Commun. (Camb)., vol. 48, pg. 10322--4, Oct. 2012" href="http://dx.doi.org/10.1039/c2cc34858f">Zhang et. al., 2012</a> posses interesting interfacial chemistry. 

This exact reference used in custom_bibliography.js can be found [here](./example/example_custom_bibliography.js).

## Installation

This requires the [bibtex-parser](https://github.com/mikolalysenko/bibtex-parser) package also.

First, download the dependencies and package to the ~/.jupyter/custom location
```bash
mkdir ~/.jupyter/custom
cd ~/.jupyter/custom
git clone git@github.com:mikolalysenko/bibtex-parser.git
git clone git@github.com:michaelplews/jupyter_markdown_citations.git
cd jupyter_markdown_citations
```

Next, symlink (or copy) your .bib file (mine is exported from [Mendeley](https://www.mendeley.com)) to the same folder:
```bash
ln -s /directory/to/bib_file.bib #for symlinking
cp /directory/to/bib_file.bib . #for copying
#only use one of the above options
```

Generate the custom_bibliography.js file with the make_bib_js.py file:
```bash
python make_bib_js.py bib_file.bib
```
Lastly, add this app to your custom.js file:
```bash
cd ~/.jupyter/custom
echo "require(['custom/jupyter_markdown_citations/citations']);" >> custom.js
```

Reloading your .iPyNb page in the browser should now load this package.

Enjoy!
