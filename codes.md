Formatting conventions
======================

## Codes and categories should be written as first-level headers
  - Discrete supporting evidence
  - (or codes associated with categories)
  - are listed as distinct bullet points

Codes
=====

## RESPONSE_SIZES. The median dataset is on the order of megabytes (close to gigabytes) in size, with thousands of items in the dataset and tens of attributes.
  - determined the median response for each of the "Basic Dataset Characteristics" questions (e.g. "Approximately how large is this dataset?")

## MANY_VERY_INACCURATE_RESPONSES. In the "Initial Data abstractions" section, some categories had a lot of "Very inaccurate" responses to the data abstraction. WHY?
  - Media (100), textual (78), network/hierarchy (76), spatial/temporal (39), grouped (38), tabular (22)
  - is this because the data abstraction is inappropriate for my data (like storing a table as an image) or is this because "no, the computer stores my data in a very different way than you have suggested"?

## FUNCTIONS_AS_DATA. Many people consider functions as data
  - Conversation after presentation about project with A-1, A-2, I-05: I-05 and A-2 would not consider constraint data, such as for linear or integer programming, as fitting any of our initial six categories. Although I-05 thinks in terms of half-spaces, sub-spaces, etc., "spatial" data, as we use it, seems imprecise
  - "I work with visualizing continuous models. The dataset is the model/function itself. Discrete samples are not part of the dataset."
    - Dataset: regression models made from housing data (Serendipitous discovery after adding the above quote to this code)
	- Sequences: "I usually think of this dataset as sequences"
		- dataset is "user interactions with an application I built"
  - I-18's first response, when introduced to the survey, was to say "all my data is functions;" described lists of PDEs

## CODE_AS_DATA. It is possible to consider code to be data
  - Conversation with A-1, I-06, I-07, I-08, I-09, I-10, I-11, I-12 about open science and data sharing; code definitely counts as "data," or at least "metadata," in that it tells you where a given dataset came from. Per I-06: "one person's metadata is another person's data."
  - A-2's experience reviewing jupyter notebooks; observed that many people curate, based on intended audience, how many comments to include, how to structure the code, etc. "so that it's usable." Replicability is a major complaint with code in general, including Jupyter notebooks—we could consider code reshaping through the lens of wrangling
    - We would consider this as code wrangling, but most people probably wouldn't

## HARD_TO_ISOLATE_DESIGN_FROM_OTHER_CONCERNS. Data design difficult to talk about in isolation from discovery, capture, curation, creation [Muller, CHI 2019]
  - Discussions about data formats within, and more frequently outside of the VIS community, proved very difficult for A-1 to keep focused on design, and quick transitions to other data wrangling considerations, especially provenance were common (specific instances: discussions with I-02, I-03)

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

## HARD_TO_ISOLATE_FROM_SOFTWARE_ABSTRACTIONS. Raw data abstractions difficult to talk about in isolation from software abstractions
  - Conversations proved very difficult to for A-1 focus on how a person thinks about their data; participants frequently pivoted to talking about abstractions imposed by software that were often only loosely associated with the data model itself (such as git's model of remotes and branches with I-02, or Jupyter's statefulness with I-02 and I-13)
  - Other generalizations: "A spreadsheet," even though "Tabular" data was an option and we gave them the opportunity to rename it (although they may not have known)!

## SCOPE_CREEP_FEARS. Thinking about alternative data abstractions can provoke fears of scope creep
  - Conversation w/ I-06, I-07, I-08, I-09, I-10, I-11, I-12; all expressed similar concerns, particularly I-06. I-07 related a story about how they had almost forced a collaborator to do a lot of unnecessary manual labor to accomodate the needs of I-07's imposed data abstraction. Although there was consensus that exploring alternative abstractions can be very beneficial for the success of a project, it was cautioned that it also has the potential to cause misalignments in the vision of a collaboration. I-09 remarked that, as a scientific project advances, "you need to start closing doors along the way" (in reference to the many different, interesting questions / perspectives that you *could* explore, but choose not to in order to keep a project's scope reasonable)

## VARIATION_IN_HIERARCHY_PERSPECTIVES. There is wide variation in how people describe hierarchies
  - Some initial difficulties designing the survey (A-1)
  - Conversation between all authors (A-1, A-2, A-3): could describe hierarchies as spatial, as networks, as nested sets... are hierarchies even networks? Is this a historical thing related to functions: are functions even spatial? Does the history matter… or should we be thinking of these things (functions, hierarchies) as separate things (functions are not spatial, hierarchies are distinct from networks)? Core: are a tree and a hierarchy the same thing? A-3 says no, they have semantic differences

## AUTOMATIC_DERIVATION_INFERENCE. There are times when the data is derived, and when you assume that you'll need to immediately derive something
  - Conversation between all authors (A-1, A-2, A-3)

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

## RELIANCE_ON_ABSTRACTIONS_FROM_SOFTWARE. Validated: People tend to turn to data abstractions that match some existing prior experience with software
  - Discussion between A-1, A-2, reflecting on codes 5, 10, 14, 16

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

## EXPERT_HELP_NEEDED_TO_CHANGE_ABSTRACTIONS. Sometimes more information is needed before transitioning: participants noted they would need to ask an expert (domain expert or vis expert) for help ("help" being more data/details or visualization help).
  - "Could be displayed as a tree, i would hire someone"
  - "I think I would need to discuss this in more detail with a domain expert.  I think they do have conceptual descriptions of ocean currents that would be used through labeling regions, but this data was not provided."

## MORE_DATA_NEEDED_TO_CHANGE_ABSTRACTIONS. Sometimes more information needs to be added to the data before transitioning: participants noted they would need to collect additional data.
  - "We'd need finer-grained labels on the imagery."
  - "I would not transform existing dataset but rather collect additional data, including politicians' images, speech transcripts or recordings, videos, etc. "
  - "I was initially considering just the text components of the patient record for my initial assessment, but images are often an important component of the record for a number of medical specialists."

## EMOTIONS_ABOUT_DATA_ABSTRACTIONS. People have emotions about data abstractions
 - (todo: A-1's evidence)
 - A-1, A-2 discussion: Abstractions are personalized / subjective / contextual; you have to remember the ecosystem of how the data was created, who it's going to impact, who are the subject

## META-ABSTRACTIONS_HELP_COMMUNICATION. Meta-abstractions help people communicate at a sufficient level of detail to design a visualization system
  - Experience prototyping vis designs with I-06, I-07, I-08, I-09, I-10, I-11, I-12

## SHOWING_RAW_DATA_HELPS_COMMUNICATION. Validated: showing real data (such as showing a spreadsheet in Excel) helps people communicate effectively about abstractions
  - Conversation with I-03
  - Conversation with I-19
  - Experience prototyping vis designs with I-06, I-07, I-08, I-09, I-10, I-11, I-12

Categories
==========
## Data abstraction doesn't matter\*... in isolation
\* (TODO: A-3's insight)

Codes:
  - HARD_TO_ISOLATE_DESIGN_FROM_OTHER_CONCERNS
  - DOESNT_COUNT_AS_DATA
  - FOREIGN_TERMINOLOGY
  - HARD_TO_ISOLATE_FROM_SOFTWARE_ABSTRACTIONS
  - SCOPE_CREEP_FEARS

## Latent data abstractions\* are very common
\* Definition: A meaningful, useful abstraction of the data is possible yet not fully communicated, or even thought out

Codes:
  - MANY_VERY_INACCURATE_RESPONSES
  - FUNCTIONS_AS_DATA
  - CODE_AS_DATA
  - INTUITION_ABOUT_NETWORKS
  - INTUITION_ABOUT_GROUPS
  - DOESNT_COUNT_AS_DATA
  - VARIATION_IN_HIERARCHY_PERSPECTIVES
  - AUTOMATIC_DERIVATION_INFERENCE

## Visualization community meta-abstractions validated\*
\* Threat to validity: would this thing be true with different abstraction categories?

Codes:
  - INTUITION_ABOUT_NETWORKS
  - INTUITION_ABOUT_GROUPS

## People (non-VIS people?) are more willing explore alternative data abstractions when there is not a direct mapping between familiar software and the format of the raw data
\* Otherwise they default to familiar software, and may resist attempts to discover latent abstractions

Codes:
  - HARD_TO_ISOLATE_DESIGN_FROM_OTHER_CONCERNS
  - HARD_TO_ISOLATE_FROM_SOFTWARE_ABSTRACTIONS
  - SCOPE_CREEP_FEARS
  - WRANGLING_TOOLS_VERY_DIVERSE
  - REFERENCED_TECHNIQUES_INSTEAD_OF_TOOLS
  - RELIANCE_ON_ABSTRACTIONS_FROM_SOFTWARE
  - EXPERT_HELP_NEEDED_TO_CHANGE_ABSTRACTIONS
  - EMOTIONS_ABOUT_DATA_ABSTRACTIONS

## The juxtaposition of real data and a meta-abstraction (even if both are deeply flawed) helps to focus communication at a level of detail that includes actionable information

Codes:
  - FUNCTIONS_AS_DATA
  - CODE_AS_DATA
  - VARIATION_IN_HIERARCHY_PERSPECTIVES
  - MEDIA_TOO_UNDEFINED
  - EXPERT_HELP_NEEDED_TO_CHANGE_ABSTRACTIONS
  - MORE_DATA_NEEDED_TO_CHANGE_ABSTRACTIONS
  - META-ABSTRACTIONS_HELP_COMMUNICATION
  - SHOWING_RAW_DATA_HELPS_COMMUNICATION
