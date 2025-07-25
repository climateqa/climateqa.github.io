---
sidebar_position: 9
---

# Carbon Footprint

## About ClimateQ&A

Carbon emissions were measured during the development and inference process using CodeCarbon [https://github.com/mlco2/codecarbon](https://github.com/mlco2/codecarbon)

| Phase | Description | Emissions | Source |
| --- | --- | --- | --- |
| Development  | OCR and parsing all pdf documents with AI | 28gCO2e | CodeCarbon |
| Development | Question Answering development | 114gCO2e | CodeCarbon |
| Inference | Question Answering | ~0.102gCO2e / call | CodeCarbon |
| Inference | API call to turbo-GPT | ~0.38gCO2e / call | https://medium.com/@chrispointon/the-carbon-footprint-of-chatgpt-e1bc14e4cc2a |

Carbon Emissions are **relatively low but not negligible** compared to other usages: one question asked to ClimateQ&A is around 0.5gCO2e - equivalent to 2.2m by car (https://datagir.ademe.fr/apps/impact-co2/)  
Or around 2 to 4 times more than a typical Google search.

## Other resources on AI environmental impact
### Ecologits.ai
Use ecologits to estimate the environmental footprint of your AI app https://ecologits.ai/latest/, and you can also use the calculator directly here https://huggingface.co/spaces/genai-impact/ecologits-calculator 

<iframe
	src="https://genai-impact-ecologits-calculator.hf.space"
	frameborder="0"
	width="100%"
	height="600"
></iframe>