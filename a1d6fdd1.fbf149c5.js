(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{153:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return r})),a.d(n,"metadata",(function(){return l})),a.d(n,"rightToc",(function(){return o})),a.d(n,"default",(function(){return p}));var t=a(2),i=a(9),s=(a(0),a(180)),r={id:"1-6-0-released",title:"1.6.0",author:"Andr\xe9 Aubin",author_title:"Trefle Core Team",author_url:"https://twitter.com/lambda_2",author_image_url:"https://pbs.twimg.com/profile_images/1247213607353540608/i9oN_Gbg_400x400.jpg",tags:["releases"]},l={permalink:"/blog/1-6-0-released",editUrl:"https://github.com/treflehq/documentation/edit/master/blog/blog/2020-07-15-1-6-0.md",source:"@site/blog/2020-07-15-1-6-0.md",description:"This major release of Trefle brings a lot of new exciting features, such as distributions, farming fields and blazing fast search.",date:"2020-07-15T00:00:00.000Z",tags:[{label:"releases",permalink:"/blog/tags/releases"}],title:"1.6.0",readingTime:4.265,truncated:!0},o=[{value:"What changed ?",id:"what-changed-",children:[{value:"\ud83d\udce6 Endpoints versioning",id:"-endpoints-versioning",children:[]},{value:"\ud83d\udcc4 The data scructure changes",id:"-the-data-scructure-changes",children:[]},{value:"\ud83d\udd27 Plant and species fields names changes",id:"-plant-and-species-fields-names-changes",children:[]},{value:"\u2702\ufe0f The filters and sort parameter changes",id:"\ufe0f-the-filters-and-sort-parameter-changes",children:[]},{value:"\ud83d\udcd0 Ranges and orders",id:"-ranges-and-orders",children:[]},{value:"\ud83d\uddbc Better plants/species images",id:"-better-plantsspecies-images",children:[]},{value:"\ud83c\udf0d Species distributions",id:"-species-distributions",children:[]},{value:"\ud83d\udd0d Blazing fast search engine",id:"-blazing-fast-search-engine",children:[]},{value:"\ud83e\uddf0 Error reporting and data collection",id:"\ud83e\uddf0-error-reporting-and-data-collection",children:[]},{value:"\ud83d\udcd5 Adoption of better standards",id:"-adoption-of-better-standards",children:[]},{value:"\ud83d\udce6 JSON responses when listing plants and species are more complete",id:"-json-responses-when-listing-plants-and-species-are-more-complete",children:[]},{value:"\ud83d\udccb Synonyms separation",id:"-synonyms-separation",children:[]},{value:"\ud83d\udcd0 Species fields scales changes",id:"-species-fields-scales-changes",children:[]},{value:"\ud83d\udccb Common names split",id:"-common-names-split",children:[]}]}],c={rightToc:o};function p(e){var n=e.components,a=Object(i.a)(e,["components"]);return Object(s.b)("wrapper",Object(t.a)({},c,a,{components:n,mdxType:"MDXLayout"}),Object(s.b)("p",null,"This major release of Trefle brings a lot of new exciting features, such as distributions, farming fields and blazing fast search."),Object(s.b)("h2",{id:"what-changed-"},"What changed ?"),Object(s.b)("h3",{id:"-endpoints-versioning"},"\ud83d\udce6 Endpoints versioning"),Object(s.b)("p",null,"In order to avoid making breaking changes like this one in the future, API routes are now versionned. So the endpoint ",Object(s.b)("inlineCode",{parentName:"p"},"/api/species")," is now ",Object(s.b)("inlineCode",{parentName:"p"},"/api/v1/species"),". This let you the possibility to update when you're ready for the next releases."),Object(s.b)("h3",{id:"-the-data-scructure-changes"},"\ud83d\udcc4 The data scructure changes"),Object(s.b)("p",null,"One of the biggest struggles we noticed was the pagination. Parsing the pagination links in the response headers was really painful, even if it's a stardard."),Object(s.b)("p",null,"To solve this, ",Object(s.b)("strong",{parentName:"p"},"we decided to include pagination links directly in the JSON response"),"."),Object(s.b)("p",null,"Now, all API calls wraps a ",Object(s.b)("inlineCode",{parentName:"p"},"data")," field, along with a ",Object(s.b)("inlineCode",{parentName:"p"},"links")," field, for pagination links, and optionally a ",Object(s.b)("inlineCode",{parentName:"p"},"meta")," fields, for high level informations such as counts."),Object(s.b)("h3",{id:"-plant-and-species-fields-names-changes"},"\ud83d\udd27 Plant and species fields names changes"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"We removed and added a lot of fields"),". Most of USDA fields, such as ",Object(s.b)("inlineCode",{parentName:"p"},"propagation")," or products uses were removed, as they were too inaccurates."),Object(s.b)("p",null,"You can get:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(t.a)({parentName:"li"},{href:"/docs/advanced/plants-fields"}),"A simplified list of the current fields in the documentation"),"."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(t.a)({parentName:"li"},{href:"/reference/#operation/getSpecies"}),"The full list in the reference"),".")),Object(s.b)("h3",{id:"\ufe0f-the-filters-and-sort-parameter-changes"},"\u2702\ufe0f The filters and sort parameter changes"),Object(s.b)("p",null,"In order to avoid any name collision in parameters, ",Object(s.b)("strong",{parentName:"p"},"filters are now scoped in the ",Object(s.b)("inlineCode",{parentName:"strong"},"filter")," parameter"),". This means that ",Object(s.b)("inlineCode",{parentName:"p"},"common_name=mint")," is now ",Object(s.b)("inlineCode",{parentName:"p"},"filter[common_name]=mint"),"."),Object(s.b)("p",null,"You now also can exclude null values from results with the ",Object(s.b)("inlineCode",{parentName:"p"},"filter_not[ATTRIBUTE]")," parameter."),Object(s.b)("p",null,"You can ",Object(s.b)("a",Object(t.a)({parentName:"p"},{href:"/docs/guides/filtering"}),"read more about filters in the documentation")," or see the ",Object(s.b)("a",Object(t.a)({parentName:"p"},{href:"/reference/#operation/listSpecies"}),"The full list of filters in the reference"),"."),Object(s.b)("h3",{id:"-ranges-and-orders"},"\ud83d\udcd0 Ranges and orders"),Object(s.b)("p",null,"You can now query the range of values between two values with the ",Object(s.b)("inlineCode",{parentName:"p"},"range[FIELD]=min,max")," parameter."),Object(s.b)("p",null,"For example, to query only species with a minimum height ",Object(s.b)("strong",{parentName:"p"},"between")," 5 ",Object(s.b)("strong",{parentName:"p"},"and")," 20 centimeters: ",Object(s.b)("inlineCode",{parentName:"p"},"api/v1/species?token=YOUR_TREFLE_TOKEN&range[maximum_height_cm]=5,20"),"."),Object(s.b)("p",null,"Filtering on ranges also allow to set only minimum or maximum values. For example:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"/api/v1/species?range[maximum_height_cm]=5")," only return species higher than 5 cm"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"/api/v1/species?range[maximum_height_cm]=,5")," only return species lower than 5 cm")),Object(s.b)("p",null,"You can ",Object(s.b)("a",Object(t.a)({parentName:"p"},{href:"/docs/guides/filtering#filter-on-ranges"}),"read more about ranges in the documentation")," or see the ",Object(s.b)("a",Object(t.a)({parentName:"p"},{href:"/reference/#operation/listSpecies"}),"The full list of ranges in the reference"),"."),Object(s.b)("h3",{id:"-better-plantsspecies-images"},"\ud83d\uddbc Better plants/species images"),Object(s.b)("p",null,"Images were fully reviewed, and are now ",Object(s.b)("strong",{parentName:"p"},"splitted into categories"),": flower, leaf, habit, fruit, bark and other."),Object(s.b)("h3",{id:"-species-distributions"},"\ud83c\udf0d Species distributions"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"We began to collect plant locations (ex: France) and establishments (ex: Native) per zone"),", and they're now included in the ",Object(s.b)("inlineCode",{parentName:"p"},"/species/{species_slug}")," and ",Object(s.b)("inlineCode",{parentName:"p"},"/plants/{species_slug}")," endpoints."),Object(s.b)("p",null,"You can also filter species by distribution zones or by establishment."),Object(s.b)("p",null,"For example, to get plants native from Tibet: ",Object(s.b)("inlineCode",{parentName:"p"},"/api/v1/distributions/tibet/plants?filter[establishment]=native"),"."),Object(s.b)("h3",{id:"-blazing-fast-search-engine"},"\ud83d\udd0d Blazing fast search engine"),Object(s.b)("p",null,"A new search endpoint for plants and species is available: ",Object(s.b)("inlineCode",{parentName:"p"},"/api/v1/species/search?q=term"),"."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"This search was designed to respond in milliseconds"),', and is ready for input autocomplete or "as you type" queries. ',Object(s.b)("a",Object(t.a)({parentName:"p"},{href:"https://trefle.io"}),"You can see it in action on the landing page"),"."),Object(s.b)("h3",{id:"\ud83e\uddf0-error-reporting-and-data-collection"},"\ud83e\uddf0 Error reporting and data collection"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"You can now ",Object(s.b)("a",Object(t.a)({parentName:"strong"},{href:"/docs/guides/reporting-errors"}),"report errors on species"),", or even ",Object(s.b)("a",Object(t.a)({parentName:"strong"},{href:"/docs/advanced/complete-data"}),"submit corrections / changes")," to us, directly from an API call.")),Object(s.b)("p",null,"This means a lot to us, as we want our data to be everyone's, and believe strongly in the power of the community."),Object(s.b)("h3",{id:"-adoption-of-better-standards"},"\ud83d\udcd5 Adoption of better standards"),Object(s.b)("p",null,"All units are following the ",Object(s.b)("a",Object(t.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Metric_system"}),"International System of Units (SI)"),", so ",Object(s.b)("strong",{parentName:"p"},"we replaced feets by centimeters, inches by millimeters and so on"),".\nTemperatures are in celcuis and kelvin degrees for now, as the conversion is more complex than for standard units."),Object(s.b)("p",null,"Scientific names now follows the ",Object(s.b)("a",Object(t.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Binomial_nomenclature"}),"Binomial nomenclature"),". For the species, it represents its genus and its species within the genus, resulting in a single worldwide name for each organism. The scientific name of an infraspecific taxons (ranks below species, such as subspecies, forms, varieties...) is a combination of the name of a species and an infraspecific epithet. A connecting term is used to denote the rank. ",Object(s.b)("a",Object(t.a)({parentName:"p"},{href:"https://www.iapt-taxon.org/nomen/pages/main/art_24.html"}),"See IAPT recommendation"),"."),Object(s.b)("p",null,"Distribution zones for plants/species are following the ",Object(s.b)("a",Object(t.a)({parentName:"p"},{href:"https://www.tdwg.org/standards/wgsrpd/"}),"World Geographical Scheme for Recording Plant Distributions (WGSRPD)"),"."),Object(s.b)("h3",{id:"-json-responses-when-listing-plants-and-species-are-more-complete"},"\ud83d\udce6 JSON responses when listing plants and species are more complete"),Object(s.b)("p",null,"We added some fields in the response, such as an image url or the genus and family names, and embedded synonyms."),Object(s.b)("p",null,"For example, when listing plants:"),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-javascript"}),'[\n  {\n    "id": 123486,\n    "slug": "corylus-avellana"\n    "scientific_name": "Corylus avellana",\n    "common_name": "common filbert",\n    "complete_data": false,\n    "link": "http://trefle.io/api/plants/123486",\n  }\n]\n')),Object(s.b)("p",null,"Is now"),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-javascript"}),'{\n  "data": [\n    {\n      "id": 123486,\n      "slug": "corylus-avellana",\n      "scientific_name": "Corylus avellana",\n      "common_name": "common filbert",\n      "author": "L.",\n      "bibliography": "Sp. Pl.: 998 (1753)",\n      "family": "Betulaceae",\n      "family_common_name": "Birch family",\n      "genus": "Corylus",\n      "genus_id": 2057,\n      "image_url": "https://bs.floristic.org/image/o/0d92cadb0d66dce1b0a8b26913125d6501e31d68",\n      "rank": "species",\n      "status": "accepted",\n      "synonyms": [\n        "Corylus sylvestris"\n      ],\n      "year": 1753,\n      "links": {\n          "genus": "/api/v1/genus/corylus",\n          "plant": "/api/v1/plants/corylus-avellana",\n          "self": "/api/v1/species/corylus-avellana"\n      }\n    }\n  ],\n  "links": {\n    "first": "/api/v1/plants?filter%5Bscientific_name%5D=Corylus+avellana&page=1",\n    "last": "/api/v1/plants?filter%5Bscientific_name%5D=Corylus+avellana&page=1",\n    "self": "/api/v1/plants?filter%5Bscientific_name%5D=Corylus+avellana"\n  },\n  "meta": {\n    "total": 1\n  }\n}\n')),Object(s.b)("h3",{id:"-synonyms-separation"},"\ud83d\udccb Synonyms separation"),Object(s.b)("p",null,"Synonyms are no longer returned in the species or plants response, and are now included as an array in the response."),Object(s.b)("h3",{id:"-species-fields-scales-changes"},"\ud83d\udcd0 Species fields scales changes"),Object(s.b)("p",null,"\"Scale-like\" fields, such as \"light\" or \"soil adaptation\" are no longer with values like 'Low', 'Medium' and 'High', but are now on a scale from 0 to 10."),Object(s.b)("h3",{id:"-common-names-split"},"\ud83d\udccb Common names split"),Object(s.b)("p",null,"Common names have been reviewed, and are now grouped by language."))}p.isMDXComponent=!0}}]);