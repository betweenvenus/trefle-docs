(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{147:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return j}));var n=a(2),b=a(9),r=(a(0),a(176)),l={id:"plants-fields",title:"Plants fields"},c={id:"advanced/plants-fields",isDocsHomePage:!1,title:"Plants fields",description:"When you query a species (or a plant), you will have a lot of fields to dig into. This is a simplified version of the reference that tries to explain a bit what each fields represents.",source:"@site/docs/advanced/plants-fields.md",permalink:"/docs/advanced/plants-fields",editUrl:"https://github.com/treflehq/documentation/edit/master/docs/advanced/plants-fields.md",lastUpdatedBy:"Andr\xe9 Aubin",lastUpdatedAt:1594519825,sidebar:"someSidebar",previous:{title:"Searching",permalink:"/docs/guides/searching"},next:{title:"Client-side applications",permalink:"/docs/advanced/client-side-apps"}},i=[{value:"Species",id:"species",children:[{value:"links",id:"links",children:[]},{value:"images",id:"images",children:[]},{value:"flower",id:"flower",children:[]},{value:"foliage",id:"foliage",children:[]},{value:"fruit_or_seed",id:"fruit_or_seed",children:[]},{value:"specifications",id:"specifications",children:[]},{value:"growth",id:"growth",children:[]},{value:"synonyms[]",id:"synonyms",children:[]},{value:"sources[]",id:"sources",children:[]}]}],o={rightToc:i};function j(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"When you query a species (or a plant), you will have a lot of fields to dig into. This is a simplified version of the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/reference"}),"reference")," that tries to explain a bit what each fields represents."),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"In doubt, refer to the reference")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"This documentation is way lighter than the reference, and do not show all the fields. If you have any doubt, please check the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/reference"}),"reference"),"."))),Object(r.b)("h2",{id:"species"},"Species"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"field"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"id")," (integer)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"An unique identifier")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"common_name")," (string)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The usual common name, in english, of the species (if any).")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"slug")," (string)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"An unique human-readable identifier (if you can, prefer to use this over id)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"scientific_name")," (string)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The scientific name follows the ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"https://en.wikipedia.org/wiki/Binomial_nomenclature"}),"Binomial nomenclature"),", and represents its genus and its species within the genus, resulting in a single worldwide name for each organism. The scientific name of an infraspecific taxons (ranks below species, such as subspecies, forms, varieties...) is a combination of the name of a species and an infraspecific epithet. A connecting term is used to denote the rank. ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"https://www.iapt-taxon.org/nomen/pages/main/art_24.html"}),"See IAPT recommendation"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"year")," (integer)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The first publication year of a valid name of this species. ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"https://en.wikipedia.org/wiki/Author_citation_(botany)"}),"See author citation"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"bibliography")," (string)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The first publication of a valid name of this species. ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"https://en.wikipedia.org/wiki/Author_citation_(botany)"}),"See author citation"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"author")," (string)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The author(s) of the first publication of a valid name of this species. ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"https://en.wikipedia.org/wiki/Author_citation_(botany)"}),"See author citation"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"status")," (string)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The acceptance status of this species by IPNI",Object(r.b)("br",null),"Can be: ",Object(r.b)("inlineCode",{parentName:"td"},"accepted")," and ",Object(r.b)("inlineCode",{parentName:"td"},"unknown"),".")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"rank")," (string)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"https://en.wikipedia.org/wiki/Taxonomic_rank"}),"taxonomic rank")," of the species",Object(r.b)("br",null),"Can be: ",Object(r.b)("inlineCode",{parentName:"td"},"species"),", ",Object(r.b)("inlineCode",{parentName:"td"},"ssp"),", ",Object(r.b)("inlineCode",{parentName:"td"},"var"),", ",Object(r.b)("inlineCode",{parentName:"td"},"form"),", ",Object(r.b)("inlineCode",{parentName:"td"},"hybrid"),", and ",Object(r.b)("inlineCode",{parentName:"td"},"subvar"),".")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"family_common_name")," (string)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The common name (in english) of the species family")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"family")," (string)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The scientific name of the species family")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"genus_id")," (integer)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The id of the species genus")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"genus")," (string)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The scientific name of the species genus")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"image_url")," (string)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A main image url of the species")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"duration")," (array of strings)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The plant duration(s), which can be:",Object(r.b)("br",null),"- Annual: plants that live, reproduce, and die in one growing season.",Object(r.b)("br",null),"- Biennial: plants that need two growing seasons to complete their life cycle, normally completing vegetative growth the first year and flowering the second year.",Object(r.b)("br",null),"- Perennial: plants that live for more than two years, with the shoot system dying back to soil level each year.",Object(r.b)("br",null))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"observations")," (string)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Some habit observations on the species")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"common_names")," (object)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Common names of the species per language")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"distribution")," (object)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Distribution of the species per establishment")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"synonyms")," (array of objects)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The symonyms scientific names and authors")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"sources")," (array of objects)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The symonyms scientific names and authors")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"extras")," ()"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}))))),Object(r.b)("h3",{id:"links"},"links"),Object(r.b)("p",null,"API endpoints to related resources"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"field"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"self")," (string)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"API endpoint to the species itself")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"genus")," (string)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"API endpoint to the species genus")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"plant")," (string)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"API endpoint to the species plant")))),Object(r.b)("h3",{id:"images"},"images"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"field"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"flower")," (array of objects)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Image(s) of the species flower")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"leaf")," (array of objects)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Image(s) of the species leaf")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"habit")," (array of objects)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Image(s) of the species habit")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"fruit")," (array of objects)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Image(s) of the species fruit")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"bark")," (array of objects)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Image(s) of the species bark")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"other")," (array of objects)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Image(s) of the species other")))),Object(r.b)("h3",{id:"flower"},"flower"),Object(r.b)("p",null,"Flower related fields (the reproductive structure found in flowering plants)"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"field"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"color")," (array of strings)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The flower color(s)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"conspicuous")," (boolean)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Is the flower visible ?")))),Object(r.b)("h3",{id:"foliage"},"foliage"),Object(r.b)("p",null,"Foliage (or leaves) related fields"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"field"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"texture")," (string)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The general texture of the plant\u2019s foliage",Object(r.b)("br",null),"Can be: ",Object(r.b)("inlineCode",{parentName:"td"},"fine"),", ",Object(r.b)("inlineCode",{parentName:"td"},"medium"),", and ",Object(r.b)("inlineCode",{parentName:"td"},"coarse"),".")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"color")," (array of strings)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The leaves color(s)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"leaf_retention")," (boolean)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Does the leaves stay all year long ?")))),Object(r.b)("h3",{id:"fruit_or_seed"},"fruit_or_seed"),Object(r.b)("p",null,"Fruit or seed related fields"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"field"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"conspicuous")," (boolean)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Is the fruit visible ?")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"color")," (array of strings)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The fruit color(s)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"shape")," (string)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Fruit shape")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"seed_persistence")," (boolean)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Are the fruit or seed generally recognized as being persistent on the plant?")))),Object(r.b)("h3",{id:"specifications"},"specifications"),Object(r.b)("p",null,"Species's main characteristics"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"field"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"ligneous_type")," (string)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The ligneous type of the woody plant",Object(r.b)("br",null),"Can be: ",Object(r.b)("inlineCode",{parentName:"td"},"liana"),", ",Object(r.b)("inlineCode",{parentName:"td"},"subshrub"),", ",Object(r.b)("inlineCode",{parentName:"td"},"shrub"),", ",Object(r.b)("inlineCode",{parentName:"td"},"tree"),", and ",Object(r.b)("inlineCode",{parentName:"td"},"parasite"),".")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"growth_form")," (string)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The primary growth form on the landscape in relation to soil stabilization on slopes and streamsides? Each plant species is assigned the single growth form that most enhances its ability to stabilize soil")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"growth_habit")," (string)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The general appearance, growth form, or architecture of the plant")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"growth_rate")," (string)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The relative growth speed of the plant")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"average_height")," (object)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The average height of the species, in centimeters")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"maximum_height")," (object)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The maximum height of the species, in centimeters")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"nitrogen_fixation")," (string)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Capability to fix nitrogen in monoculture")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"shape_and_orientation")," (string)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The predominant shape of the species")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"toxicity")," (string)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Relative toxicity of the species for humans or animals",Object(r.b)("br",null),"Can be: ",Object(r.b)("inlineCode",{parentName:"td"},"none"),", ",Object(r.b)("inlineCode",{parentName:"td"},"low"),", ",Object(r.b)("inlineCode",{parentName:"td"},"medium"),", and ",Object(r.b)("inlineCode",{parentName:"td"},"high"),".")))),Object(r.b)("h3",{id:"growth"},"growth"),Object(r.b)("p",null,"Growing of farming related fields"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"field"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"days_to_harvest")," (number)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The average numbers of days required to from planting to harvest")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"description")," (string)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A description on how the plant usually grows")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"sowing")," (string)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A description on how to sow the plant")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"ph_maximum")," (number)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The maximum acceptable soil pH (of the top 30 centimeters of soil) for the plant")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"ph_minimum")," (number)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The minimum acceptable soil pH (of the top 30 centimeters of soil) for the plant")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"light")," (integer)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Required amount of light, on a scale from 0 (no light, <= 10 lux) to 10 (very intensive insolation, >= 100 000 lux)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"atmospheric_humidity")," (integer)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Required relative humidity in the air, on a scale from 0 (<=10%) to 10 (>= 90%)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"growth_months")," (array of strings)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The most active growth months of the species (usually all year round for perennial plants)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"bloom_months")," (array of strings)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The months the species usually blooms")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"fruit_months")," (array of strings)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The months the species usually produces fruits")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"row_spacing")," (object)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The minimum spacing between each rows of plants, in centimeters")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"spread")," (object)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The average spreading of the plant, in centimeters")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"minimum_precipitation")," (object)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Minimum precipitation per year, in milimeters per year")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"maximum_precipitation")," (object)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Maximum precipitation per year, in milimeters per year")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"minimum_root_depth")," (object)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Minimum depth of soil required for the species, in centimeters. Plants that do not have roots such as rootless aquatic plants have 0")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"minimum_temperature")," (object)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The minimum tolerable temperature for the species. In celsius or fahrenheit degrees")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"maximum_temperature")," (object)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The maximum tolerable temperature for the species. In celsius or fahrenheit degrees")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"soil_nutriments")," (integer)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Required quantity of nutriments in the soil, on a scale from 0 (oligotrophic) to 10 (hypereutrophic)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"soil_salinity")," (integer)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Tolerance to salinity, on a scale from 0 (untolerant) to 10 (hyperhaline)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"soil_texture")," (integer)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Required texture of the soil, on a scale from 0 (clay) to 10 (rock)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"soil_humidity")," (integer)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Required humidity of the soil, on a scale from 0 (xerophile) to 10 (subaquatic)")))),Object(r.b)("h3",{id:"synonyms"},"synonyms[]"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"field"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"id")," (integer)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"An unique identifier")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"name")," (string)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The scientific name of the symonym")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"author")," (string)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The author of the symonym")))),Object(r.b)("h3",{id:"sources"},"sources[]"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"field"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"id")," (string)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"An unique identifier from the source")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"name")," (string)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The name of the source")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"citation")," (string)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"How to cite the source")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"url")," (string)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The link on the source website, or the publication reference")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"last_update")," (string)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The last time the source was checked")))))}j.isMDXComponent=!0}}]);