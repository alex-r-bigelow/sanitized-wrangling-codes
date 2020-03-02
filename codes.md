Formatting conventions
======================

# Codes and categories should be written as first-level headers
- Discrete supporting evidence
- (or codes associated with categories)
- are listed as distinct bullet points

Codes
=====

## The median dataset is on the order of megabytes (close to gigabytes) in size, with thousands of items in the dataset and tens of attributes.
- determinined the median response for each of the "Basic Dataset Characteristics" questions (e.g. "Approximately how large is this dataset?")

## In the "Initial Data abstractions" section, some categories had a lot of "Very inaccurate" responses to the data abstraction. WHY?
- Media (100), textual (78), network/hierarchy (76), spatial/temporal (39), grouped (38), tabular (22)
- is this because the data abstraction is inappropriate for my data (like storing a table as an image) or is this because "no, the computer stores my data in a very different way than you have suggested"?

## Many people consider functions as data
  - Conversation after presentation about project with A-1, A-2, I-05: I-05 and A-2 would not consider constraint data, such as for linear or integer programming, as fitting any of our initial six categories. Although I-05 thinks in terms of half-spaces, sub-spaces, etc., "spatial" data, as we use it, seems imprecise
  - "I work with visualizing continuous models. The dataset is the model/function itself. Discrete samples are not part of the dataset."
    - Dataset: regression models made from housing data (Serendipitous discovery after adding the above quote to this code)
	- Sequences: "I usually think of this dataset as sequences"
		- dataset is "user interactions with an application I built"

## It is possible to consider code to be data
  - Conversation with A-1, I-06, I-07, I-08, I-09, I-10, I-11, I-12 about open science and data sharing; code definitely counts as "data," or at least "metadata," in that it tells you where a given dataset came from. Per I-06: "one person's metadata is another person's data."
  - A-2's experience reviewing jupyter notebooks; observed that many people curate, based on intended audience, how many comments to include, how to structure the code, etc. "so that it's usable." Replicability is a major complaint with code in general, including Jupyter notebooks—we could consider code reshaping through the lens of wrangling
    - We would consider this as code wrangling, but most people probably wouldn't

## Data design difficult to talk about in isolation from discovery, capture, curation, creation [Muller, CHI 2019]
  - Discussions about data formats within, and more frequently outside of the VIS community, proved very difficult for A-1 to keep focused on design, and quick transitions to other data wrangling considerations, especially provenance were common (specific instances: discussions with I-02, I-03)

## People have "gut feelings," intuition about their data as networks
- Networks: the data workers seem to have a gut feeling that their data is network/relational but they don’t have a clear understanding of what these relations/hierarchies are (they seem that they are waiting to explore the data and find these out)

## People have "gut feelings," intuition about their data as Groups
- intuition about groups
	- “Inherent groups”, “sets...derived from domain knowledge”

## Many people don't feel that what they work with "counts as data"
- Common refrain while soliciting survey participation at both technical conferences, as well as through deployment across the University
- Three informants (I-01, I-02, I-04) independently made this observation (on two different occasions speaking with A-1) while reflecting on their experiences working with / mentoring people new to Data Science
- A regular data science workshop in the humanities, run by I-02, tends to get very low attendance; often the same three
  participants
- One Supercomputing survey participant working on hardware design felt that treating circuit diagrams as "data" would be very strange, and perhaps inappropriate
- "I don't work with datasets or plan to collect data to create one. My work is in architecture design and we don't perform analysis on datasets."
- Re: "one person's metadata is another person's data"—many people may not be aware that they are producing data during various activites (such as writing code)
  - A-2's experience reviewing jupyter notebooks: that code is A-2's dataset

## Even very technical people find some data abstraction concepts, language foreign
  - One Supercomputing survey participant was confused by "item" vs "attribute" terminology. In their response, "tens of items" was selected (initially thinking about table columns), but then selected millions after discussing with A-1, A-3
  - Other generalizations: "A spreadsheet," even though "Tabular" data was an option and we gave them the opportunity to rename it (although they may not have known)!

## Raw data abstractions difficult to talk about in isolation from software abstractions
  - Conversations proved very difficult to for A-1 focus on how a person thinks about their data; participants frequently pivoted to talking about abstractions imposed by software that were often only loosely associated with the data model itself (such as git's model of remotes and branches with I-02, or Jupyter's statefulness with I-02 and I-13)
  - Other generalizations: "A spreadsheet," even though "Tabular" data was an option and we gave them the opportunity to rename it (although they may not have known)!


Categories
==========
