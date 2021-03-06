Formatting conventions
======================

## Codes and categories should be written as first-level headers
  - Discrete supporting evidence
  - (or codes associated with categories)
  - are listed as distinct bullet points

Codes
=====

## RESPONSE_SIZES. There was wide variation in reported dataset scales.
  - The median dataset is on the order of megabytes (close to gigabytes) in size, with thousands of items in the dataset and tens of attributes.
  - determined the median response for each of the "Basic Dataset Characteristics" questions (e.g. "Approximately how large is this dataset?")

## MANY_VERY_INACCURATE_RESPONSES. In the "Initial Data abstractions" section, some categories had a lot of "Very inaccurate" responses to the data abstraction. WHY?
  - Media (100), textual (78), network/hierarchy (76), spatial/temporal (39), grouped (38), tabular (22)
  - is this because the data abstraction is inappropriate for my data (like storing a table as an image) or is this because "no, the computer stores my data in a very different way than you have suggested"?

## MISSING_FUNCTION_CATEGORY. Many people consider functions as data
  - Conversation after presentation about project with A-1, A-2, I-05: I-05 and A-2 would not consider constraint data, such as for linear or integer programming, as fitting any of our initial six categories. Although I-05 thinks in terms of half-spaces, sub-spaces, etc., "spatial" data, as we use it, seems imprecise
  - "I work with visualizing continuous models. The dataset is the model/function itself. Discrete samples are not part of the dataset."
    - Dataset: regression models made from housing data (Serendipitous discovery after adding the above quote to this code)
	- Sequences: "I usually think of this dataset as sequences"
		- dataset is "user interactions with an application I built"
          - A-3: When is a sequecne a function and when is it not? There are
            event sequences, lists, etc...
  - I-18's first response, when introduced to the survey, was to say "all my data is functions;" described lists of PDEs
  - “Data is not just discrete. There are functions and geometric objects as well” (Alternative Dataset Debrief)

## MISSING_CODE_CATEGORY. It is possible to consider code to be data
  - Conversation with A-1, I-06, I-07, I-08, I-09, I-10, I-11, I-12 about open science and data sharing; code definitely counts as "data," or at least "metadata," in that it tells you where a given dataset came from. Per I-06: "one person's metadata is another person's data."
  - A-2's experience reviewing jupyter notebooks; observed that many people curate, based on intended audience, how many comments to include, how to structure the code, etc. "so that it's usable." Replicability is a major complaint with code in general, including Jupyter notebooks—we could consider code reshaping through the lens of wrangling
    - We would consider this as code wrangling, but most people probably wouldn't

## HARD_TO_ISOLATE_DESIGN_FROM_OTHER_CONCERNS. Data design difficult to talk about in isolation from discovery, capture, curation, creation [Muller, CHI 2019]
  - Discussions about data formats within, and more frequently outside of the VIS community, proved very difficult for A-1 to keep focused on design, and quick transitions to other data wrangling considerations, especially provenance were common (specific instances: discussions with I-02, I-03)
  - "The text components of medical records often contain quantitative measures and features, which however require some pre-processing/structuring. In filling out the data dimensions, I considered that the unstructured data would have been pre-processed somehow and was fairly liberal in how that structure could be realized.” (from Alternative Dataset Reflections) -- they are thinking of part of the processing, not just the raw
  - “This strikes me as a processing into output formats, rather than input formats” (from Alternative Dataset Reflections)
  - pre-processed
    - “Not a generalization but more a bit of context. This data is primarily unstructured text indexed in time (all documents have an associated date), but with some pre-processing other elements could arise and yield a highly heterogeneous data collection. For example, categorical/numerical data is often present in medical text; connections can be traced back to common symptoms/issues over time, or denote a causality relation between distinct symptoms... which is why I outlined the "computer" interpretation as potentially encompassing these elements.” (from Initial Data Abstraction)
    - "The raw data file is in GPX format which is an XML document, so it is a text-based format that is structured and hierarchical. However, it is commonly imported into data analysis software into a tabular format and can be saved as such in a CSV file, etc. So, it is common to think of the data in terms of how it will be used (tabular) even through the raw file does not store the data this way." (from Initial Data Abstraction)
  - Alternatives suggested collecting new data rather than transforming
    - “The data could include media captured by phones to justify the ratings they give.” (from Alternative Media Data Details)
    - “I would not transform existing dataset but rather collect additional data, including politicians’ images, speech transcripts or recordings, videos, etc.” (from Alternative Dataset Reflections)
    - “ would hire volunteers to take pictures of the tools and their storage locations and use the images as thumbnails so that users would know what it looked like (e.g. we have 13 hammers and here is a picture of a hammer)., “ (from Alternative Dataset Reflections)
    - “Use the camera to take pictures of my contacts.” (from Alternative
      Dataset Reflections)
    - “I tend to do more machine learning and I use existing datasets and I think of them as static. But thinking about the media that I wish I had made me realize that for a given task, it can be really practical to increase the amount of media gathered.” (from Alternative Dataset Reflections)
    - “The only possible way I can imagine is that a doctor writes a description of the dataset” (from Alternative Dataset Reflections)
    - “I'd probably use R to create snapshots of citation type and function distribution over time (real time)” (from Alternative Dataset Reflections)

## INTUITION_ABOUT_NETWORKS. People have "gut feelings," intuition about their data as networks
  - Networks: the data workers seem to have a gut feeling that their data is network/relational but they don’t have a clear understanding of what these relations/hierarchies are (they seem that they are waiting to explore the data and find these out)
  - From "Initial Network / Hierarchy Data Details -- If, on second thought, this does not describe the data":
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

## INTUITION_ABOUT_GROUPS. People have "gut feelings," intuition about their data as Groups
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
	- "mentions of related symptoms/events over time"

## DOESNT_COUNT_AS_DATA. Many people don't feel that what they work with "counts as data"
  - Common refrain while soliciting survey participation at both technical conferences, as well as through deployment across the University
  - Three informants (I-01, I-02, I-04) independently made this observation (on two different occasions speaking with A-1) while reflecting on their experiences working with / mentoring people new to Data Science
  - A regular data science workshop in the humanities, run by I-02, tends to get very low attendance; often the same three
    participants
  - One Supercomputing survey participant working on hardware design felt that treating circuit diagrams as "data" would be very strange, and perhaps inappropriate
  - "I don't work with datasets or plan to collect data to create one. My work is in architecture design and we don't perform analysis on datasets."
    - https://alex-r-bigelow.github.io/wrangling-survey/Responses.html?viewIndex=1&filters=wpHCgsKkdHlwZcKqVGV4dEZpbHRlcsKkc8SFY8KDwqxyZcSTb25zZVTEhGXCq2Rhc1LEmXDEm8SdwqNrZXnCsURvbWFpblZpZXdQcm_Ej3N0wqV2YWx1ZcOZwo5JIGTEmyd0IHdvcmvFjml0aMWJYXTEpGV0cyDFkCBwbGFuIHRvIGNvbGxlY8WNxKPFmcWlxadjxJjFmGXFnm5lLiBNecWOxZDFkmnFncS0IGFyY2jFlMWtdHXEmMWJxJlpZ8WkxaNkxY7Ft8WKbsWMxaDEkGbFkG3GhW7FgnlzxoLFuMWXxZnEncWcLg
  - Re: "one person's metadata is another person's data"—many people may not be aware that they are producing data during various activities (such as writing code)
    - A-2's experience reviewing jupyter notebooks: that code is A-2's dataset

## FOREIGN_TERMINOLOGY. Even very technical people find some data abstraction concepts, language foreign
  - One Supercomputing survey participant was confused by "item" vs "attribute" terminology. In their response, "tens of items" was selected (initially thinking about table columns), but then selected millions after discussing with A-1, A-3
  - Other generalizations: "A spreadsheet," even though "Tabular" data was an option and we gave them the opportunity to rename it (although they may not have known)!
  - “I had a hard time, actually, thinking of the dataset as tabular in a way that I had not previously thought of it as tabular (which I believe was the intent of this survey). The questions did not seem to specifically account for this possibility as distinct from considering it as tabular for the first time.” (from Alternative Dataset Debrief) -- A-3: This may be an indicator that the language use is founded in tables, already doesn't fit some datasets
    - See also "Corpus of text is really hard to describe as "ordinal" or "categorical"" (from Basic Dataset Characteristics)
  - "The data is a 3D volume from TIFF images, so media (images) and spatial kind of apply but not quite" (from Initial Data Abstraction)
  - Responses to "Other Generalizations" that described file formats that were a clear fit for some of our categories:
    - "Directed graph represented in a format such as dot"
    - "CSV file with readings from sensors every minute"
    - "It is a collection of free text with an embedded scenario and threats for analysts to find."
    - "A spreadsheet"

## HARD_TO_ISOLATE_DESIGN_FROM_FILE_FORMATS
  - Responses to "Other Generalizations" that described file formats that were a clear fit for some of our categories:
    - "Directed graph represented in a format such as dot"
    - "CSV file with readings from sensors every minute"
    - "It is a collection of free text with an embedded scenario and threats for analysts to find."
    - "A spreadsheet"

## HARD_TO_ISOLATE_DESIGN_FROM_SOFTWARE_ABSTRACTIONS. Raw data abstractions difficult to talk about in isolation from software abstractions
  - Conversations proved very difficult to for A-1 focus on how a person thinks about their data; participants frequently pivoted to talking about abstractions imposed by software that were often only loosely associated with the data model itself (such as git's model of remotes and branches with I-02, or Jupyter's statefulness with I-02 and I-13)
  - Other generalizations: "A spreadsheet," even though "Tabular" data was an option and we gave them the opportunity to rename it (although they may not have known)!
  - Merged from prior RELIANCE_ON_ABSTRACTIONS_FROM_SOFTWARE code: Validated: People tend to turn to data abstractions that match some existing prior experience with software
    - Discussion between A-1, A-2, reflecting on codes 5, 10, 14, 16

## SCOPE_CREEP_FEARS. Thinking about alternative data abstractions can provoke fears of scope creep
  - Conversation w/ I-06, I-07, I-08, I-09, I-10, I-11, I-12; all expressed similar concerns, particularly I-06. I-07 related a story about how they had almost forced a collaborator to do a lot of unnecessary manual labor to accomodate the needs of I-07's imposed data abstraction. Although there was consensus that exploring alternative abstractions can be very beneficial for the success of a project, it was cautioned that it also has the potential to cause misalignments in the vision of a collaboration. I-09 remarked that, as a scientific project advances, "you need to start closing doors along the way" (in reference to the many different, interesting questions / perspectives that you *could* explore, but choose not to in order to keep a project's scope reasonable)

## VARIATION_IN_HIERARCHY_PERSPECTIVES. There is wide variation in how people describe hierarchies
  - Some initial difficulties designing the survey (A-1)
  - Conversation between all authors (A-1, A-2, A-3): could describe hierarchies as spatial, as networks, as nested sets... are hierarchies even networks? Is this a historical thing related to functions: are functions even spatial? Does the history matter… or should we be thinking of these things (functions, hierarchies) as separate things (functions are not spatial, hierarchies are distinct from networks)? Core: are a tree and a hierarchy the same thing? A-3 says no, they have semantic differences
  - "I find the separation of hierarchies and groupings to be a bit problematic for this domain. Many codes, such as diagnosis codes, exist in a hierarchy (defined by metadata). However it is quite common to refer to areas of this hierarchy as groupings." (from Initial Data Abstraction)

## WRANGLING_TOOLS_VERY_DIVERSE. There was a wide distribution of the tools, techniques that people (would) use to wrangle data
  - see tool_counts.csv, tool.html

## REFERENCED_TECHNIQUES_INSTEAD_OF_TOOLS. Respondents included "techniques" in their responses for tool support
  - "Python, nlp techniques"
  - "NLP, Python"
  - "Python, compression and parallelization"
  - "Machine learning,python,JavaScript"
  - "Cluster into connected components"
  - "Morse Smale Complex"
  - "I would build an adjacency matrix."

## MEDIA_TOO_UNDEFINED. "Media" as a category had a less-well-defined mental model, resulting in a space with too little structure for participants to map their data crisply when forced to think of their data as "media"
  - a common response was to use some sort of web animation (e.g. JavaScript or d3) and then use screen-capturing to get images and video of the data.
    - "Tableau, D3, Windows 10 Game toolbar to record a video"
    - "Using the Information from the Trace data, run an animation implemented with JS and d3 and record it"
  - Comments like "This is weird. I think of the data not as media, but I'm actively trying to turn it into media."
    - https://alex-r-bigelow.github.io/wrangling-survey/Responses.html?viewIndex=17&filters=wpHCgsKkdHlwZcKqVGV4dEZpbHRlcsKkc8SFY8KDwqxyZcSTb25zZVTEhGXCq2V0c1LEmXDEm8SdwqNrZXnCq8SYZmxlY3RpxKnCpXZhbHVlw5lgVGhpcyDFgiB3ZWlyZC4gIEkgdMWBbmsgb2bFkGhlIGRhdGEgbm90IGHFg21lZGlhLCBidcWjSSdtxaTEtGl2ZWx5xZByeWluZ8WQb8WQdXJuxYTFo8W-dMaCxafFqWEu
  - "I have displayed this data by mapping some of it to the three RGB color channels and making a heatmap, but I don't consider the data itself to "be" media or "have" media."
    - https://alex-r-bigelow.github.io/wrangling-survey/Responses.html?viewIndex=16&filters=wpHCgsKkdHlwZcKqVGV4dEZpbHRlcsKkc8SFY8KDwqxyZcSTb25zZVTEhGXCq2V0c1LEmXDEm8SdwqNrZXnCqW1lZGlhTWlzY8KldmFsdWXDmcKqSSBoYXZlIMSyxJNsYXnEsSB0aMS2xYdhdGEgYnkgbWFwcGluZyBzb8SwIG9mIGl0xY5vxY5oxYbFj8SYxYZSR0IgY29sb3LFtsWDbm5lbHMgYW5kxZlha8WexaDFlcWuxZPFmnAsxZZ1xarFgWTEmyfFqsW3xJxpZMSQxa3FhmTFk8WVxanEnWzFp3TFrCJiZSLFmcSxxLPFpcW7IsWDxYXGrcSwxLJhLg
  - The data set itself does not include any media, but interpretations of it are visual in nature. Brain regions are spatial, regardless whether this is captured explicitly in the data set. The data could be illustrated by addition of multidimensional images or 3D meshes when interlinked with Concepts in the graph, though it'd be interesting to consider whether visuospatial imagination counts as a medium as well.
    - https://alex-r-bigelow.github.io/wrangling-survey/Responses.html?viewIndex=9&filters=wpHCgsKkdHlwZcKqVGV4dEZpbHRlcsKkc8SFY8KDwqxyZcSTb25zZVTEhGXCq2Rhc1LEmXDEm8SdwqNrZXnCsE1lZGlhVmlld1Byb8SPc3TCpXZhbHVlw5oBwp1UaGUgxKN0YSDEnXQgaXTEnWxmxYtvxJkgbsS7xZJuY8WCZMWKYW55IG3EscSzLCBidcWRaW7Ej3JwxJjFjXRpxKkgb8WXxZMgYcSYIHZpc3XFgcWexZthdHXEmC4gQnJhxbAgxJhnxbjEnMW-xoDEk8aJxLNsxavGlMW_ZGzEmXMgd8WJdMWJciDGqMaDxZLGpGNhcMaKxJhkIMSJcGxpY8WTbMWmxpLGqMWKxYzFjsWQxo3FiMeBxonFjmNvdWzGtWLFisSNxYLEvcaQxI_HjsWmYWTEssW3xJvFusWXbceMxbfEssWoxJzGlsaGaW1hZ8Wab8aqM0TFp8SZxYnGpMamZW7FnsWyxrluxKzGtXfFk2ggQ8SbY2XGssakxr_FiSBnxpBwaMWrxqjHi2fHv8WTJ8eOx5DFscSQxJnFt25nxqtvIMeKx6TFosaqx7THgMaqxoLGhG_GmsW3x6bHqMaVbsabx5zHinXFscakxKTFvsewxLJ1bcW-x7NlbGwu
  - "The data is a 3D volume from TIFF images, so media (images) and spatial kind of apply but not quite" (from Initial Data Abstraction)

## EXPERT_HELP_NEEDED_TO_CHANGE_ABSTRACTIONS. Sometimes more information is needed before transitioning: participants noted they would need to ask an expert (domain expert or vis expert) for help ("help" being more data/details or visualization help).
  - "Could be displayed as a tree, i would hire someone"
  - "I think I would need to discuss this in more detail with a domain expert.  I think they do have conceptual descriptions of ocean currents that would be used through labeling regions, but this data was not provided."

## MORE_DATA_NEEDED_TO_CHANGE_ABSTRACTIONS. Sometimes more information needs to be added to the data before transitioning: participants noted they would need to collect additional data.
  - "We'd need finer-grained labels on the imagery."
  - "I would not transform existing dataset but rather collect additional data, including politicians' images, speech transcripts or recordings, videos, etc. "
  - "I was initially considering just the text components of the patient record for my initial assessment, but images are often an important component of the record for a number of medical specialists."
  - Is this really a *need* or a different way about thinking about how to
    transform the data?

## EMOTIONS_ABOUT_DATA_ABSTRACTIONS. People have emotions about data abstractions
 - Conversations with I-06, I-07, I-08, I-09, I-10, I-11, I-12 while prototyping a visualization
 - A-1, A-2 discussion: Abstractions are personalized / subjective / contextual; you have to remember the ecosystem of how the data was created, who it's going to impact, who are the subjects

## TYPOLOGIES_HELP_COMMUNICATION. Data abstraction typologies help people communicate at a sufficient level of detail to design a visualization system
  - Experience prototyping vis designs with I-06, I-07, I-08, I-09, I-10, I-11, I-12

## TYPOLOGIES_AID_REFLECTION. Data abstraction typologies help people discover latent data abstractions
  - “The questions made me think more about "the nature" of this dataset. I had always considered it to be "just tabular" but I realize that there is a hierarchy and geographic data (and a geographic hierarchy) which I hadn't really considered before. As I type this, we could layer in time and sets when considering multiple elections.” (from Initial Dataset Debrief)
  - New questions
    - “Yeah, a bit of a stretch with my relatively straightforward dataset, but this exercise prodded me into thinking about my annotations as more of a central player in the overall visualization as opposed to a secondary thought or supporting contextual element.” (from Alternative Dataset Reflections)
    - “Interesting to think about how forcing the scenario into different datatypes can offer new tasks and perspectives on a specific problem. Curious how this might feed into design studies and other stakeholder-based methods.” (from Alternative Dataset Reflections)
    -  “I wonder if textual classification of oceans could be fruitful, in the same way that computer vision techniques are used to do textual classification of objects in images.” (from Alternative Dataset Reflections)
    - “I tend to do more machine learning and I use existing datasets and I think of them as static. But thinking about the media that I wish I had made me realize that for a given task, it can be really practical to increase the amount of media gathered.” (from Alternative Dataset Reflections)
    - “It's interesting to think how it could be a textual format, for the underlying volume data this is probably not desirable but the neurons traced within the data might be interesting if viewed this way” (from Alternative Dataset Reflections)
    - “I was initially considering just the text components of the patient record for my initial assessment, but images are often an important component of the record for a number of medical specialists.” (from Alternative Dataset Reflections)
    - “Having media data would enable a richer set of analysis but the analysis would have to be a lot more complex.” (from Alternative Dataset Reflections)
    - “This was fun. Really made me think outside the box about my tabular data. Really makes me want to be creative with my data representations.” (from Alternative Dataset Debrief)

## SHOWING_RAW_DATA_HELPS_COMMUNICATION. Validated: showing real data (such as showing a spreadsheet in Excel) helps people communicate effectively about abstractions
  - Conversation with I-03
  - Conversation with I-19
  - Experience prototyping vis designs with I-06, I-07, I-08, I-09, I-10, I-11, I-12

## DATASET_A_COMPLEX_AND_EVOLVING_FORM. Most datasets did not fit in one category and people talked about not just the raw data, but derived values,  metadata, or even "multiple datasets" (hierarchical datasets?) as well
  - multiple datasets
    - "Data is often spread across multiple datasets which can have a variety of formats. Linking or foreign key relationships are thus an important factor for how the data is represented.” (from Initial Data Abstraction)
    - “Multimodal data? Dataset containing multiple data types.” (from Initial
    Data Asbraction)
  - pre-processed/processed along the way
    - “Not a generalization but more a bit of context. This data is primarily unstructured text indexed in time (all documents have an associated date), but with some pre-processing other elements could arise and yield a highly heterogeneous data collection. For example, categorical/numerical data is often present in medical text; connections can be traced back to common symptoms/issues over time, or denote a causality relation between distinct symptoms... which is why I outlined the "computer" interpretation as potentially encompassing these elements.” (from Initial Data Abstraction)
    - "The raw data file is in GPX format which is an XML document, so it is a text-based format that is structured and hierarchical. However, it is commonly imported into data analysis software into a tabular format and can be saved as such in a CSV file, etc. So, it is common to think of the data in terms of how it will be used (tabular) even through the raw file does not store the data this way." (from Initial Data Abstraction)
    - "Originally, i was thinking about how for for analysis sometimes we decompose the domain into a hierarchal representation, but this is significantly further in the analysis pipeline.” (from Initial Network Data Details)
    - "I was thinking of a derivative of this dataset -- basically, after you perform named entity recognition, the derivative dataset might be conceptualized of as a network." (from Initial Data Abstraction)
    - “One thing is it seems not easy to describe these things easily. I also sometimes feel should I talk about my raw data or formatted data. Although both are in tabular format. I also consider about wide-narrow tabular structure as well, probably it does not make sense, but sort of thinking about that somehow.” (from Initial Dataset Debrief)
  - metadata as data
    - "It’s tabular insofar as I’m tagging each observation with dates and other metadata; it’s useful to sort on that attribute" (from Initial Tabular Data Details)
    - “Metadata is a large component of earth science data but I'm uncertain if I should have included it into this survey. I kept things simple, but may have perhaps been too simple.” (from Initial Dataset Debrief)
    - “I think it could be done, a 3D volume is in some sense just a set of stacked 2D tables, but I'm not sure that is what this question is really getting at. I'm not sure if it would make sense to flatten volume data into a tabular form, I could believe that there are some derived quantities or meta data that would be useful to view this way, but not sure if transforming raw volume data would be that useful. I think that is a larger interesting question about this project -- to what extent does it connect with volume data or 3D simulation data, imaging, the sort of things that are common in sci vis?” (from Alternative Dataset Reflections)
  - links to data in the data
    - “There are links to media in the dataset, but the media themselves are not directly stored in the dataset.” (from Initial Media Data Details)
  -  “the data in this way is more complicated to describe, but in the real world is more offen.” (from Alternative Dataset Reflections)
  -  “Oftentimes, for certain types of time-series meteorological data is collected from one sensor that logs three values at one time stamp: min, max, avg. This does provoke an idea that data at certain time steps are related and can be related in a "tree like structure" but it also causes problems in visualizing the data because metadata is encoded along with data. This may muddle the purity of visualizing the data by itself.” (from Alternative Dataset Reflections) -- note the use of the word "muddle"
  - Counts of how many people listed their data under multiple forms
    - Media was the largest alternative category --- was it because it was the
      only choice remaining for some participants?

## LATENT_WRANGLING_OR_ABSTRACTION. This may be related to "HARD_TO_ISOLATE". Even before the alternative abstractions, people were discussing how they could see data in other forms.
  - “I find the separation of hierarchies and groupings to be a bit problematic for this domain. Many codes, such as diagnosis codes, exist in a hierarchy (defined by metadata). However it is quite common to refer to areas of this hierarchy as groupings.” (Initial Data Abstraction) -- This may also tie into how simply asking brought forth this insight (see TYPOLOGIES_HELP_COMMUNICATION)
  - This is ESPECIALLY true of Grouping:
    - Through Analysis
      - “I have to group it manually, it is not naturally grouped.” (from
        Initial Grouped Data Details)
      - “because the clusters are not well defined without the correct visualization.” (from Initial Grouped Data Details)
      - “I expect the output to be logically grouped. But I don't think there's a clustering attribute” (from Initial Grouped Data Details)
      - “Again, groups are the result of user analysis” (from Initial Grouped
        Data Details)
      - “Different groups of users fall into usage patterns, which emerges out of the dataset once its coded and analyzed” (from Initial Grouped Data Details)
      - “I use color coding for event type (e.g. work event, social event). However, the colors themselves aren't a characteristic of the data, the groups are. I use color for my own organization.” (from Initial MEDIA Data Details)
      - “Having the ability to wrangle and identify sets would be helpful at
        the initial stages. I had to hand collect this dataset and identify
those sets.” (from Initial Dataset Debrief)
    - Naturally Arising Through Categorical Attributes
      - “ Because it’s data about inhabitants of a city, there are definitely groups that are latent; college kids, young families, various neighborhoods. I wonder if there are some inherent topics that exist in the data.” (from Initial Grouped Data Details)
      - “Thought of dimension as equal to group.” (from Initial Grouped Data
        Details)
      - “Sets of nodes can be derived from domain knowledge, parts of label, and additional data in tables for each node type.” (from Initial Grouped Data Details)
      - “Categorically” (from Initial Grouped Data Details)
      - “Grouped by certain attribute similarity” (from Initial Grouped Data
        Details)
      - “political views, demographics” (from Initial Grouped Data Details)
      - “Conditions are coded using ICD (International Classification of Diseases), which is divided in chapters (groups), such as "diseases related to the respiratory system" or other examples like renal or cardiovascular systems.” (from Initial Grouped Data Details)
    - Hierarchies as Groups
      - “Data is grouped in a hierarchy: Building have devices. Devices have sensors.” (from Initial Grouped Data Details)
      - “Viewed as a grouped dataset, each neuron cell + its axons/dendrites can be seen as a tree, and there's a set of these trees” (from Initial Grouped Data Details)
    - Question: How much of this is from VIS participants?
  - Some of what we consider categorical data is also thought of as text data
    - “there's no documents, its just data attributes and at max a short phrase” (from Initial Textual Data Details)
    - “The observations themselves are not textual in nature, just the categories” (from Initial Textual Data Details)
    - “Text includes information about condition, demographics, etc.” (from
      Innitial Textual Data Details)
  - Labels as Text Data
    - “text is label of nodes and additional data about nodes from web or node tables” (from Initial Textual Data Details)
    - “the data items have labels” (from Initial Textual Data Details)
  - Annotations as Text Data
    - "For each (most) images, there are pathologist annotations (formal but technical natural language).” (from Initial Textual Data Details)
    - "Annotation titles describing the nature of the excerpts” (from Initial
      Textual Data Details)
  - Metadata as Text Data
    - “Metadata for the satasets are textual, but the datasets themselves are image volumes” (from Initial Textual Data Details)
  - “The data set itself does not include any media, but interpretations of it are visual in nature. Brain regions are spatial, regardless whether this is captured explicitly in the data set. The data could be illustrated by addition of multidimensional images or 3D meshes when interlinked with Concepts in the graph, though it'd be interesting to consider whether visuospatial imagination counts as a medium as well.” (from Initial Media Data Details)
  - A-3: but are these alternative abstractions brought on by the survey or
    are they different interpretations of what is meant by Textual or Grouped?
  - Merged from prior AUTOMATIC_DERIVATION_INFERENCE code: There are times when the data is derived, and when you assume that you'll need to immediately derive something
    - Conversation between all authors (A-1, A-2, A-3)
    - "The text components of medical records often contain quantitative measures and features, which however require some pre-processing/structuring. In filling out the data dimensions, I considered that the unstructured data would have been pre-processed somehow and was fairly liberal in how that structure could be realized.” (from Alternative Dataset Reflections) -- they are thinking of part of the processing, nnot just the raw

## DISCREPANCY_BETWEEN_MENTAL_MODELS_AND_RAW_DATA
  - Compared to the diverse responses to "How frequently do each of the following characterize how you interpret the dataset (including any metadata)?", the responses to "How accurately do each of the following statements characterize how a computer would interpret the raw dataset (including any metadata)?" were disproportionately tabular

## Other interesting tidbits not yet coded
  - Half of Tabular respondents expect empty cells
  - Some reported datasets with millions of tables
   - often when there's a temporal component
   - some were thinking of image data in terms of rows or columns
  - What is trajectory data?
    - “I wouldn't precisely reset it to "never". The data represents trajectories, which are a network.” (from Initial Network Data Details)
  - People had a fairly event spread of alternative being difficult to not difficult, useful to not useful, accurate to inaccurate
    - 1/3 thought the activity was useful
      - “It is hard to think of datasets as a network or hierarchical as I've never thought of it like that before” (from Alternative Dataset Reflections)
      - More people who were asked to think about their data as text or networks expressed difficulty and said they had fewer plans to reshape
    - Many 'neither agree or disagree' answers

Themes
======

## The visualization community identifies data abstractions for its own transferability needs, but the process of identifying an abstraction is an intervention with far-reaching effects
Collaborations with data workers beyond the visualization research community stand to benefit---and can be harmed---by the way that we introduce, articulate, and explore data abstractions

Codes:
  - INTUITION_ABOUT_NETWORKS
    - Validates that the network abstraction that the visualization community has identified is both useful and accessible to data workers outside of the community
  - INTUITION_ABOUT_GROUPS
    - Validates that the set, cluster, and other group-based abstractions that the visualization community has identified are both useful and accessible to data workers outside of the community
  - DOESNT_COUNT_AS_DATA
    - Shows that there is a disconnect between what visualization people consider to be data, and what data workers in general consider to be data. Introducing a visualization perspective is an intervention.
  - FOREIGN_TERMINOLOGY
    - Shows that there is a disconnect between how visualization people talk about data, and how data workers in general talk about data. Introducing a visualization perspective is an intervention.
  - HARD_TO_ISOLATE_DESIGN_FROM_OTHER_CONCERNS
    - Shows that influencing the design of a worker's data abstraction can have far-reaching theoretical effects, including impacts on data discovery, capture, curation, creation
  - HARD_TO_ISOLATE_DESIGN_FROM_SOFTWARE_ABSTRACTIONS
    - Shows that influencing the design of a worker's data abstraction can have far-reaching practical effects, including disruptions in workflows and changes to the software that data workers use
  - SCOPE_CREEP_FEARS
    - Shows that data workers are often cognizant of the impacts that changes to the design of their abstraction will have, including considerations that they may or may not be able to articulate in detail

## Latent data abstractions are very common
Definition: The extent to which a meaningful, useful abstraction of the data is undiscovered; it has yet to be fully elucidated, communicated, documented, and formatted. A data abstraction becomes less latent as coherent details are identified, as its details are spoken or written, and as its artifacts in a computer are actualized into relevant forms.

Codes:
  - MANY_VERY_INACCURATE_RESPONSES
    - At least initially, raw data can not be designed in such a way as to anticipate other abstractions that may be needed or useful
  - LATENT_WRANGLING_OR_ABSTRACTION
    - Shows that data workers are often aware of meaningful, useful abstractions that they can communicate about without prompting, even though these abstractions are not fully realized in a computer
  - INTUITION_ABOUT_NETWORKS
    - Shows that other meaningful, useful abstractions (e.g. networks) are possible, even though the raw data may not be formatted that way
  - INTUITION_ABOUT_GROUPS
    - Shows that other meaningful, useful abstractions (e.g. sets, clusters, groupings) are possible, even though the raw data may not be formatted that way
  - DATASET_A_COMPLEX_AND_EVOLVING_FORM
    - Validates a known [Sedlmair, BELIV 2012; Bigelow AVI 2014] phenomenon that data rarely has a "native" abstraction, even if predominant file formats exist; abstractions must be designed
  - DISCREPANCY_BETWEEN_MENTAL_MODELS_AND_RAW_DATA
    - Shows that there can often be important differences between how data workers think about their data, and how file formats are structured
  - DOESNT_COUNT_AS_DATA
    - Suggests that visualization researchers are aware of abstractions that data workers may not have considered. Communication to introduce the abstraction is necessary.
  - MISSING_FUNCTION_CATEGORY
    - Suggests that data workers may be aware of abstractions that visualization researchers have not considered. Communication to introduce the abstraction is necessary.
  - MISSING_CODE_CATEGORY
    - Suggests that data workers may be aware of abstractions that visualization researchers have not considered. Communication to introduce the abstraction is necessary.
  - VARIATION_IN_HIERARCHY_PERSPECTIVES
    - Suggests that data workers and visualization researchers may consider the same abstraction differently. Communication to clarify the details of an abstraction is necessary.
  - TYPOLOGIES_AID_REFLECTION
    - Typologies often introduce meaningful, useful abstractions to data workers that they had not considered. Typologies often fail to contain meaningful, useful abstractions that visualization researchers had not considered.

## Data workers are less willing to seek latent data abstractions when the design of an existing abstraction is already fundamental to their workflow
When there exists a direct mapping between familiar software and the format of the raw data, efforts to introduce a new abstraction will likely be met with resistance

Codes:
  - HARD_TO_ISOLATE_DESIGN_FROM_SOFTWARE_ABSTRACTIONS
    - Shows that there is often a tight coupling in how data workers think about their abstractions, and the software that they are familiar with. Changes to the design of an abstraction incurs a cost in learning new software.
  - REFERENCED_TECHNIQUES_INSTEAD_OF_TOOLS
    - Shows that there is often a tight coupling in how data workers think about software, and the higher-level abstractions associated with that software, to the point that people often refer to them interchangeably.
  - HARD_TO_ISOLATE_DESIGN_FROM_OTHER_CONCERNS
    - Shows that there is often a tight coupling between the design of an abstraction and its discovery, capture, curation, and creation. Changes to the design of an abstraction incurs a cost in the disruptions that it causes to the rest of a worker's workflow.
  - WRANGLING_TOOLS_VERY_DIVERSE
    - Validates the tight coupling between abstractions and software, and the coupling between abstractions and workflows, in that the bespoke needs that arise from the combinatoric expansion of diverse abstractions and diverse workflows naturally leads to a very diverse software ecosystem.
  - EXPERT_HELP_NEEDED_TO_CHANGE_ABSTRACTIONS
    - Shows the extent to which the design of a data abstraction can be fundamental to a workflow, in that a change to the abstraction would necessitate expert, outside help.
  - MORE_DATA_NEEDED_TO_CHANGE_ABSTRACTIONS
    - Validates that the costs incurred by changing the design of an abstraction are real
  - SCOPE_CREEP_FEARS
    - Validates that the costs incurred by changing the design of an abstraction are real
  - EMOTIONS_ABOUT_DATA_ABSTRACTIONS
    - Validates that the costs incurred by changing the design of an abstraction are real

## Like access to real data, introducing a data abstraction typology\* helps to focus reflection and communication about data abstractions at a level of detail that includes actionable information
Definition: A classification of the space of possible data abstractions and how they relate.

Both real data and the typology can be deeply flawed; in fact, some flaws (such as a missing typology category) can be particularly helpful in provoking focused feedback. However, some typology flaws (such as a level of granularity that is a poor fit for the data worker's expertise) can limit its effectiveness

Codes:
  - SHOWING_RAW_DATA_HELPS_COMMUNICATION
    - Validates the known pitfall [Sedlmair, BELIV 2012] that lack of access to real data can doom a design study collaboration, because visualization researchers are less likely to be able to have enough actionable information to articulate an accurate data abstraction. This also validates that a culture of data review [Williams, VIS 2019], that is careful to emphasize good communication about the data abstraction, can compensate for the lack of access to real data because the detailed abstraction is a joint objective that all parties have a stake in.
  - TYPOLOGIES_HELP_COMMUNICATION
    - Shows that introducing a typology can aid communication the other way, helping data workers understand what a visualization researcher is looking for, and to communicate details that might otherwise be left unspoken.
  - TYPOLOGIES_AID_REFLECTION
    - Shows that introducing a typology can expose data workers to latent abstractions that they may not have considered
  - MISSING_FUNCTION_CATEGORY
    - Shows how a flawed typology can serve as an aid to communication, in that it can prompt targeted feedback about missing abstraction categories
  - MISSING_CODE_CATEGORY
    - Shows how a flawed typology can serve as an aid to communication, in that it can prompt targeted feedback about missing abstraction categories
  - VARIATION_IN_HIERARCHY_PERSPECTIVES
    - Shows how a flawed typology can serve as an aid to communication, in that it can prompt targeted feedback about how the details of an abstraction category are a poor fit
  - DATASET_A_COMPLEX_AND_EVOLVING_FORM
    - Shows how a flawed typology can serve as an aid to communication, in that it can prompt targeted feedback about how a typology is subdivided, and the ways that a specific abstraction fits or partially fits more than one abstraction category
  - MEDIA_TOO_UNDEFINED
    - Suggests that the benefits of typology flaws can be limited by a poor fit between the granularity of the typology and the data worker's specific expertise
