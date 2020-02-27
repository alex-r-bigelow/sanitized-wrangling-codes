# Codes from Survey Results

## The median dataset is on the order of megabytes (close to gigabytes) in size, with thousands of items in the dataset and tens of attributes.
- determinined the median response for each of the "Basic Dataset Characteristics" questions (e.g. "Approximately how large is this dataset?")

## In the "Initial Data abstractions" section, some categories had a lot of "Very inaccurate" responses to the data abstraction. WHY? 
- Media (100), textual (78), network/hierarchy (76), spatial/temporal (39), grouped (38), tabular (22)
- is this because the data abstraction is inappropriate for my data (like storing a table as an image) or is this because "no, teh computer stores my data in a very different way than you have suggested"?

## Functions as data
- "I work with visualizing continuous models. The dataset is the model/function itself. Discrete samples are not part of the dataset."


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
- Networks: the data workers seem to have a gut feeling that their data is network/relational but they don’t have a clear understanding of what these relations/hierarchies are (they seem that they are waiting to explore the data and find these out)
	- TODO: retrieve the survey responses I saw that supported this

### Groups
- intuition about groups
	- “Inherent groups”, “sets...derived from domain knowledge”

