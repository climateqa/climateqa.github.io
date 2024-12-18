---
sidebar_position: 93
---

# v1.6.0 - 2024-12-18


## Introduction

This release focuses on expanding our knowledge sources and enhancing our search capabilities. 
We've introduced several key features that make climate research more intuitive and thorough.

### Key Features

- **Expanded Knowledge Sources**
    - Integrated OpenAlex API for scientific publication search
    - Added Our World in Data graph retrieval capabilities
- **Improved Source Prioritization**
    - Modified retriever to prioritize IPCC Summary for Policymakers
    - Ensures global, high-level insights before diving into technical details
    - Implemented parallel search mechanisms
- **UI/UX changes**
    - Added a “Recommended content” tab for elements that are not used by the chatbot
    - Add notification dynamic to highligh retrieved documents
    - Update configuration pannel and added standalone search mode

## Focus: Our World in Data - Visual Insights

Our World in Data integration brings comprehensive climate visualizations directly into ClimateQ&A, transforming how users understand global climate trends.
 
- **Visualization Capabilities**
    - Access to hundreds of peer-reviewed, meticulously sourced graphics
    - Interactive graphical interface to explore data


- **View Options (Chart, Map, Table)**

![image.png](image_2_owid.png)

1. The graphic allows you to switch between different views: Chart, Map, and Table. These options are located at the top left corner (marked as 1 in the image).

- **Chart**: Displays the data as a line graph, showing the trend over time.
- **Map**: Provides a geographical representation of the data.
- **Table**: Presents the data in a tabular format for detailed numerical information.

2. **Settings and Customization**
    - You can customize display and customize country selected.
3. **Time-lapse and Year Selection**
    - You can also select a specific year using the slider or by entering the year in the input box. This helps in comparing data for different years directly.

**Visualization Categories**
- Air Pollution
- Biodiversity
- CO2 & Greenhouse Gas Emissions
- Climate Change
- Energy
- Environmental Impacts of Food Production
- Environmental Protection & Regulation
- Fertilizers
- Forests & Deforestation
- Fossil Fuels
- Land Use
- Meat & Dairy Production
- Plastic Pollution
- Transport
- Waste Management
- Water Pollution


## Focus: OpenAlex - Scientific Publication Integration

Introducing open papers documents search from a user query. See more details here: https://climateqa.com/blog/openalex

**Interface Walkthrough**

![image.png](image_papers_1.png)

Relevant papers are displayed in the relevant content tab with 3 different views:
1. Papers summary view
2. Papers list view
3. Citation network view

**Papers summary view**

![image.png](image_papers_3.png)

**Papers list view**

![image.png](image_papers_4.png)

**Citation network view**

![image.png](image_papers_5.png)


## Coming next: Version 1.7

Our next release will focus on accessing to granular data to answer local concerns. 

