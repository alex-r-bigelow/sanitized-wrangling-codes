# Codes from Survey Results

## The median dataset is on the order of megabytes (close to gigabytes) in size, with thousands of items in the dataset and tens of attributes.
- determinined the median response for each of the "Basic Dataset Characteristics" questions (e.g. "Approximately how large is this dataset?")

## In the "Initial Data abstractions" section, some categories had a lot of "Very inaccurate" responses to the data abstraction. WHY?
- Media (100), textual (78), network/hierarchy (76), spatial/temporal (39), grouped (38), tabular (22)
- is this because the data abstraction is inappropriate for my data (like storing a table as an image) or is this because "no, teh computer stores my data in a very different way than you have suggested"?

## Functions as data
- "I work with visualizing continuous models. The dataset is the model/function itself. Discrete samples are not part of the dataset."
	- This respondant sometimes thinks of the dataset as grouped, spatial/temporal, or network/hierarchy but otherwise responded "never" for tabular, textual, and media.



## Data abstractions that we didn't consider
- Graphs/Relations
	- "Directed graph represented in a format such as dot"
	- "Relational key-value store (Python dicts linking objects)"
	- "relational (more general than a network); stored as triples (e.g., Wikidata with Sparql)"
- Live/streamed data
	- "CSV file with readings from sensors every minute"
	- "free format (e.g. human responses like this one); updated real-time (e.g. sensor data); learned data"
	- "Streamed data?"
- 3D
	- "The data is a 3D volume from TIFF images, so media (images) and spatial kind of apply but not quite"
	- "3D volumetric image data"
	- "Images and volumes are both media (images), and spatial."
- Linked datasets
	- "Data is often spread across multiple datasets which can have a variety of formats. Linking or foreign key relationships are thus an important factor for how the data is represented."
- Metadata of the original dataset
	- "Not a generalization but more a bit of context. This data is primarily unstructured text indexed in time (all documents have an associated date), but with some pre-processing other elements could arise and yield a highly heterogeneous data collection."
	- "I find the separation of hierarchies and groupings to be a bit problematic for this domain. Many codes, such as diagnosis codes, exist in a hierarchy (defined by metadata). However it is quite common to refer to areas of this hierarchy as groupings."
- Functions
	- "I work with visualizing continuous models. The dataset is the model/function itself. Discrete samples are not part of the dataset"
	- Sequences: "I usually think of this dataset as sequences"
		- dataset is "user interactions with an application I built"
- Free format:
	- "free format (e.g. human responses like this one); updated real-time (e.g. sensor data); learned data"


## People have "gut feelings", intuition about their data
- Networks: the data workers seem to have a gut feeling that their data is network/relational but they don’t have a clear understanding of what these relations/hierarchies are (they seem that they are waiting to explore the data and find these out) **OR they have a concrete idea of what the network should be (a DAG, a tree, etc).**
	- From "Initial Network / Hierarchy Data Deails -- If, on second thought, this does not describe the data":
		- "It is possible to have a network and I hope to work with it later. as of now, it doesn't have relationships. hence.."
		- "I don’t think of this in terms of nodes but in terms of a hierarchical dataset."
		- "Taxonomy is hierarchical"
	- From "Initial Network / Hierarchy Data Details -- Are there any other characteristics that you would use to describe the network?"
		- "the dataset would be considered a network for analysis reasons (neighborhoods, common phase) only, this is not contained in the data itself"
		- "The data describes a hierarchy within e.g. a protein: A structure consists of models A model consists of chains A chain consists of residues A residue consists of atoms"
		- "DAG
		- "It's a tree"
		- "Approximately a chain with bounded width"
	- "I know the dataset might have a hierarchical structure but I don't currently have access to it so I cannot describe it"
- Groups: intuition about the existence of groups
	- “Inherent groups”, “sets...derived from domain knowledge”
	- "I assume there are clusters in the data, but not looked into is so far."
	- "I expect the output to be logically grouped. But I don't think there's a clustering attribute"
	- "Data is grouped in a hierarchy: Building have devices. Devices have sensors"
		- "grouping is given by the hierarchy A structure consists of models A model consists of chains A chain consists of residues A residue consists of atoms"
		- "Each datum is tied to a point in space, which exists within multiple levels of a hierarchy"
		- ... several other responses saying their dataset is part of/contains a hierarchy
	- "Because it’s data about inhabitants of a city, there are definitely groups that are latent; college kids, young families, various neighborhoods. I wonder if there are some inherent topics that exist in the data."
	- "Artificially Grouped (vs. naturally)"
		- TODO: what does that mean?
	- "Sets of nodes can be derived from domain knowledge, parts of label, and additional data in tables for each node type."
	- "Different groups of users fall into usage patterns, which emerges out of the dataset once its coded and analyzed"
	- "Viewed as a grouped dataset, each neuron cell + its axons/dendrites can be seen as a tree, and there's a set of these trees"
	- "mentions o frelated symptoms/events over time"
### Due to the structure/organization of the data, one user said "grouped by certain attribute similarity", which relates to these other responses: "Categorically", "political views, demographics", "Movie genres, global location of the production house, movie review rating bins etc.",


## Metadata or some initial data processing sometimes yields a more useful/valuable/interesting data set
- this is related to discussions on 2/27/20, A2's circles around the nodes of our data types network (e.g. how linear regressions might be a level up / encompass tabular data)
- From "Initial Network / Hierarchy Data Details -- Are there any other characteristics that you would use to describe the network?"
		- "the dataset would be considered a network for analysis reasons (neighborhoods, common phase) only, this is not contained in the data itself"



# Text-based data

## Text-based data has different meanings: sometimes to the user it means only text (like an BGP announcement trace) but other times it's combined with media (like a news article that contains text and images)
- Survey - Domain Characterization: "A set of pair composed by a image of visualization (any chart) and their text that explain that image. We use this to investigate how the words in text are related with the image element (axis, labels, titles, legend colors)."
- Survey - Domain Characterization: "A collection of free text news articles"
- Survey - Domain Characterization: "a collection of text documents in a patient record that describe a person's illness trajectory"
	- Later they add in "Other generalizations": "Not a generalization but more a bit of context. This data is primarily unstructured text indexed in time (all documents have an associated date), but with some pre-processing other elements could arise and yield a highly heterogeneous data collection. For example, categorical/numerical data is often present in medical text; connections can be traced back to common symptoms/issues over time, or denote a causality relation between distinct symptoms... which is why I outlined the "computer" interpretation as potentially encompassing these elements."
- Survey - Domain Characterization: "Bgp announcement trace"

## The median text-based dataset contains megabytes of data, 100s to 1000s of items, 10s to 100s of attributes
- calculated from the histograms in the survey

# Questions to examine
## Looking at the "Alternative <blank>" sections, how many people just went to "Skip This Section" and gave the "it just doesn't fit" response?
