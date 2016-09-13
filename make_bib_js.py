#Generates the custom_bibliography.js file from a .bib file supplied as an argument
import sys

def generate_bib_js(bib_file):
	file_bib = open(bib_file, 'r')
	file_js = open("custom_bibliography.js", "w")
	file_js.write("var bibliography = `")
	for line in file_bib: #nested for-if-for removes any unessecary headers
		if line[0] == '@':
			file_js.write(line.replace("`",""))
			for line in file_bib:
				file_js.write(line.replace("`",""))
		else:
			continue
	file_js.write("`")
	file_js.close()

if __name__ == "__main__":
	if len(sys.argv) == 2:
		generate_bib_js(sys.argv[1])
	else:
		raise ValueError('Only one argument is allowed.')
