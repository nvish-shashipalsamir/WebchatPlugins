import * as React from 'react';
import AdaptiveCard from 'react-adaptivecards';

import { updateAdaptiveCardCSSCheaply } from './styles';

const AdaptiveCards = (props) => {
    const { theme, onSendMessage, message } = props;

    React.useEffect(() => {
        updateAdaptiveCardCSSCheaply(theme);
    }, []);

    const cardPayload = message.data._plugin.payload;

    const card = React.useMemo(() => {
        const onActionSubmit = (params) => {
            onSendMessage("", { "adaptivecards": params && params.data });
        }

        const hostConfig = {
            "_plugin": {
                "type": "adaptivecards",
                "payload": {
            "type": "AdaptiveCard",
            "body": [
                {
                    "type": "TextBlock",
                    "text": "Let's connect you to the right people! Test",
                    "wrap": true,
                    "fontType": "Default",
                    "size": "Large",
                    "weight": "Bolder"
                },
                {
                    "type": "TextBlock",
                    "text": "We just need for a few details. Test",
                    "wrap": true,
                    "size": "Small",
                    "color": "Dark"
                },
                {
                    "type": "Container"
                },
                {
                    "type": "Input.Text",
                    "id": "myName",
                    "isRequired": true,
                    "errorMessage": "Please complete this field.",
                    "label": "Name",
                    "placeholder": "Insert you full name"
                },
                {
                    "type": "Container",
                    "spacing": "Small",
                    "height": "stretch",
                    "minHeight": "4px"
                },
                {
                    "type": "Input.ChoiceSet",
                    "choices": [
                        {
                            "title": "Freelancer",
                            "value": "Freelancer"
                        },
                        {
                            "title": "Partner",
                            "value": "Partner"
                        },
                        {
                            "title": "Customer",
                            "value": "Customer"
                        },
                        {
                            "title": "Educator",
                            "value": "Educator"
                        },
                        {
                            "title": "Student",
                            "value": "Student"
                        },
                        {
                            "title": "Other",
                            "value": "Other"
                        }
                    ],
                    "id": "myJobLevel",
                    "isRequired": true,
                    "errorMessage": "Please select one of the options from the dropdown.",
                    "label": "Job Level",
                    "placeholder": "Choose a job level"
                },
                {
                    "type": "Container",
                    "style": "default",
                    "minHeight": "4px",
                    "height": "stretch",
                    "spacing": "Small"
                },
                {
                    "type": "Input.ChoiceSet",
                    "choices": [
                        {
                            "title": "Afghanistan",
                            "value": "Afghanistan"
                        },
                        {
                            "title": "Aland Islands",
                            "value": "Aland Islands"
                        },
                        {
                            "title": "Albania",
                            "value": "Albania"
                        },
                        {
                            "title": "Algeria",
                            "value": "Algeria"
                        },
                        {
                            "title": "Andorra",
                            "value": "Andorra"
                        },
                        {
                            "title": "Angola",
                            "value": "Angola"
                        },
                        {
                            "title": "Antigua & Deps",
                            "value": "Antigua & Deps"
                        },
                        {
                            "title": "Argentina",
                            "value": "Argentina"
                        },
                        {
                            "title": "Armenia",
                            "value": "Armenia"
                        },
                        {
                            "title": "Australia",
                            "value": "Australia"
                        },
                        {
                            "title": "Austria",
                            "value": "Austria"
                        },
                        {
                            "title": "Azerbaijan",
                            "value": "Azerbaijan"
                        },
                        {
                            "title": "Bahamas",
                            "value": "Bahamas"
                        },
                        {
                            "title": "Bahrain",
                            "value": "Bahrain"
                        },
                        {
                            "title": "Bangladesh",
                            "value": "Bangladesh"
                        },
                        {
                            "title": "Barbados",
                            "value": "Barbados"
                        },
                        {
                            "title": "Belarus",
                            "value": "Belarus"
                        },
                        {
                            "title": "Belgium",
                            "value": "Belgium"
                        },
                        {
                            "title": "Belize",
                            "value": "Belize"
                        },
                        {
                            "title": "Benin",
                            "value": "Benin"
                        },
                        {
                            "title": "Bhutan",
                            "value": "Bhutan"
                        },
                        {
                            "title": "Bolivia",
                            "value": "Bolivia"
                        },
                        {
                            "title": "Bosnia and Herzegovina",
                            "value": "Bosnia and Herzegovina"
                        },
                        {
                            "title": "Botswana",
                            "value": "Botswana"
                        },
                        {
                            "title": "Brazil",
                            "value": "Brazil"
                        },
                        {
                            "title": "Brunei",
                            "value": "Brunei"
                        },
                        {
                            "title": "Brunei Darussalam",
                            "value": "Brunei Darussalam"
                        },
                        {
                            "title": "Bulgaria",
                            "value": "Bulgaria"
                        },
                        {
                            "title": "Burkina",
                            "value": "Burkina"
                        },
                        {
                            "title": "Burundi",
                            "value": "Burundi"
                        },
                        {
                            "title": "Cambodia",
                            "value": "Cambodia"
                        },
                        {
                            "title": "Cameroon",
                            "value": "Cameroon"
                        },
                        {
                            "title": "Canada",
                            "value": "Canada"
                        },
                        {
                            "title": "Cape Verde",
                            "value": "Cape Verde"
                        },
                        {
                            "title": "Central African Rep",
                            "value": "Central African Rep"
                        },
                        {
                            "title": "Chad",
                            "value": "Chad"
                        },
                        {
                            "title": "Chile",
                            "value": "Chile"
                        },
                        {
                            "title": "China",
                            "value": "China"
                        },
                        {
                            "title": "Colombia",
                            "value": "Colombia"
                        },
                        {
                            "title": "Comoros",
                            "value": "Comoros"
                        },
                        {
                            "title": "Congo",
                            "value": "Congo"
                        },
                        {
                            "title": "Congo {Democratic Rep}",
                            "value": "Congo {Democratic Rep}"
                        },
                        {
                            "title": "Costa Rica",
                            "value": "Costa Rica"
                        },
                        {
                            "title": "Croatia",
                            "value": "Croatia"
                        },
                        {
                            "title": "Cuba",
                            "value": "Cuba"
                        },
                        {
                            "title": "Cyprus",
                            "value": "Cyprus"
                        },
                        {
                            "title": "Czech Republic",
                            "value": "Czech Republic"
                        },
                        {
                            "title": "Denmark",
                            "value": "Denmark"
                        },
                        {
                            "title": "Djibouti",
                            "value": "Djibouti"
                        },
                        {
                            "title": "Dominica",
                            "value": "Dominica"
                        },
                        {
                            "title": "Dominican Republic",
                            "value": "Dominican Republic"
                        },
                        {
                            "title": "East Timor",
                            "value": "East Timor"
                        },
                        {
                            "title": "Ecuador",
                            "value": "Ecuador"
                        },
                        {
                            "title": "Egypt",
                            "value": "Egypt"
                        },
                        {
                            "title": "El Salvador",
                            "value": "El Salvador"
                        },
                        {
                            "title": "Equatorial Guinea",
                            "value": "Equatorial Guinea"
                        },
                        {
                            "title": "Eritrea",
                            "value": "Eritrea"
                        },
                        {
                            "title": "Estonia",
                            "value": "Estonia"
                        },
                        {
                            "title": "Ethiopia",
                            "value": "Ethiopia"
                        },
                        {
                            "title": "Fiji",
                            "value": "Fiji"
                        },
                        {
                            "title": "Finland",
                            "value": "Finland"
                        },
                        {
                            "title": "France",
                            "value": "France"
                        },
                        {
                            "title": "Gabon",
                            "value": "Gabon"
                        },
                        {
                            "title": "Gambia",
                            "value": "Gambia"
                        },
                        {
                            "title": "Georgia",
                            "value": "Georgia"
                        },
                        {
                            "title": "Germany",
                            "value": "Germany"
                        },
                        {
                            "title": "Ghana",
                            "value": "Ghana"
                        },
                        {
                            "title": "Greece",
                            "value": "Greece"
                        },
                        {
                            "title": "Grenada",
                            "value": "Grenada"
                        },
                        {
                            "title": "Guatemala",
                            "value": "Guatemala"
                        },
                        {
                            "title": "Guinea",
                            "value": "Guinea"
                        },
                        {
                            "title": "Guinea-Bissau",
                            "value": "Guinea-Bissau"
                        },
                        {
                            "title": "Guyana",
                            "value": "Guyana"
                        },
                        {
                            "title": "Haiti",
                            "value": "Haiti"
                        },
                        {
                            "title": "Honduras",
                            "value": "Honduras"
                        },
                        {
                            "title": "Hong Kong",
                            "value": "Hong Kong"
                        },
                        {
                            "title": "Hungary",
                            "value": "Hungary"
                        },
                        {
                            "title": "Iceland",
                            "value": "Iceland"
                        },
                        {
                            "title": "India",
                            "value": "India"
                        },
                        {
                            "title": "Indonesia",
                            "value": "Indonesia"
                        },
                        {
                            "title": "Iran",
                            "value": "Iran"
                        },
                        {
                            "title": "Iraq",
                            "value": "Iraq"
                        },
                        {
                            "title": "Ireland",
                            "value": "Ireland"
                        },
                        {
                            "title": "Ireland {Republic}",
                            "value": "Ireland {Republic}"
                        },
                        {
                            "title": "Israel",
                            "value": "Israel"
                        },
                        {
                            "title": "Italy",
                            "value": "Italy"
                        },
                        {
                            "title": "Ivory Coast",
                            "value": "Ivory Coast"
                        },
                        {
                            "title": "Jamaica",
                            "value": "Jamaica"
                        },
                        {
                            "title": "Japan",
                            "value": "Japan"
                        },
                        {
                            "title": "Jersey",
                            "value": "Jersey"
                        },
                        {
                            "title": "Jordan",
                            "value": "Jordan"
                        },
                        {
                            "title": "Kazakhstan",
                            "value": "Kazakhstan"
                        },
                        {
                            "title": "Kenya",
                            "value": "Kenya"
                        },
                        {
                            "title": "Kiribati",
                            "value": "Kiribati"
                        },
                        {
                            "title": "Korea North",
                            "value": "Korea North"
                        },
                        {
                            "title": "Korea South",
                            "value": "Korea South"
                        },
                        {
                            "title": "Korea, Democratic People's Republic of",
                            "value": "Korea, Democratic People's Republic of"
                        },
                        {
                            "title": "Korea, Republic of",
                            "value": "Korea, Republic of"
                        },
                        {
                            "title": "Kosovo",
                            "value": "Kosovo"
                        },
                        {
                            "title": "Kuwait",
                            "value": "Kuwait"
                        },
                        {
                            "title": "Kyrgyzstan",
                            "value": "Kyrgyzstan"
                        },
                        {
                            "title": "Lao People's Democratic Republic",
                            "value": "Lao People's Democratic Republic"
                        },
                        {
                            "title": "Laos",
                            "value": "Laos"
                        },
                        {
                            "title": "Latvia",
                            "value": "Latvia"
                        },
                        {
                            "title": "Lebanon",
                            "value": "Lebanon"
                        },
                        {
                            "title": "Lesotho",
                            "value": "Lesotho"
                        },
                        {
                            "title": "Liberia",
                            "value": "Liberia"
                        },
                        {
                            "title": "Libya",
                            "value": "Libya"
                        },
                        {
                            "title": "Liechtenstein",
                            "value": "Liechtenstein"
                        },
                        {
                            "title": "Lithuania",
                            "value": "Lithuania"
                        },
                        {
                            "title": "Luxembourg",
                            "value": "Luxembourg"
                        },
                        {
                            "title": "Macedonia",
                            "value": "Macedonia"
                        },
                        {
                            "title": "Madagascar",
                            "value": "Madagascar"
                        },
                        {
                            "title": "Malawi",
                            "value": "Malawi"
                        },
                        {
                            "title": "Malaysia",
                            "value": "Malaysia"
                        },
                        {
                            "title": "Maldives",
                            "value": "Maldives"
                        },
                        {
                            "title": "Mali",
                            "value": "Mali"
                        },
                        {
                            "title": "Malta",
                            "value": "Malta"
                        },
                        {
                            "title": "Marshall Islands",
                            "value": "Marshall Islands"
                        },
                        {
                            "title": "Mauritania",
                            "value": "Mauritania"
                        },
                        {
                            "title": "Mauritius",
                            "value": "Mauritius"
                        },
                        {
                            "title": "Mexico",
                            "value": "Mexico"
                        },
                        {
                            "title": "Micronesia",
                            "value": "Micronesia"
                        },
                        {
                            "title": "Moldova",
                            "value": "Moldova"
                        },
                        {
                            "title": "Moldova Republic of",
                            "value": "Moldova Republic of"
                        },
                        {
                            "title": "Monaco",
                            "value": "Monaco"
                        },
                        {
                            "title": "Mongolia",
                            "value": "Mongolia"
                        },
                        {
                            "title": "Montenegro",
                            "value": "Montenegro"
                        },
                        {
                            "title": "Morocco",
                            "value": "Morocco"
                        },
                        {
                            "title": "Mozambique",
                            "value": "Mozambique"
                        },
                        {
                            "title": "Myanmar, (Burma)",
                            "value": "Myanmar, (Burma)"
                        },
                        {
                            "title": "Namibia",
                            "value": "Namibia"
                        },
                        {
                            "title": "Nauru",
                            "value": "Nauru"
                        },
                        {
                            "title": "Nepal",
                            "value": "Nepal"
                        },
                        {
                            "title": "Netherlands",
                            "value": "Netherlands"
                        },
                        {
                            "title": "New Zealand",
                            "value": "New Zealand"
                        },
                        {
                            "title": "Nicaragua",
                            "value": "Nicaragua"
                        },
                        {
                            "title": "Niger",
                            "value": "Niger"
                        },
                        {
                            "title": "Nigeria",
                            "value": "Nigeria"
                        },
                        {
                            "title": "Norway",
                            "value": "Norway"
                        },
                        {
                            "title": "Oman",
                            "value": "Oman"
                        },
                        {
                            "title": "Pakistan",
                            "value": "Pakistan"
                        },
                        {
                            "title": "Palau",
                            "value": "Palau"
                        },
                        {
                            "title": "Panama",
                            "value": "Panama"
                        },
                        {
                            "title": "Papua New Guinea",
                            "value": "Papua New Guinea"
                        },
                        {
                            "title": "Paraguay",
                            "value": "Paraguay"
                        },
                        {
                            "title": "Peru",
                            "value": "Peru"
                        },
                        {
                            "title": "Philippines",
                            "value": "Philippines"
                        },
                        {
                            "title": "Poland",
                            "value": "Poland"
                        },
                        {
                            "title": "Portugal",
                            "value": "Portugal"
                        },
                        {
                            "title": "Puerto Rico",
                            "value": "Puerto Rico"
                        },
                        {
                            "title": "Qatar",
                            "value": "Qatar"
                        },
                        {
                            "title": "Romania",
                            "value": "Romania"
                        },
                        {
                            "title": "Russian Federation",
                            "value": "Russian Federation"
                        },
                        {
                            "title": "Rwanda",
                            "value": "Rwanda"
                        },
                        {
                            "title": "Saint Vincent & the Grenadines",
                            "value": "Saint Vincent & the Grenadines"
                        },
                        {
                            "title": "Samoa",
                            "value": "Samoa"
                        },
                        {
                            "title": "San Marino",
                            "value": "San Marino"
                        },
                        {
                            "title": "Sao Tome & Principe",
                            "value": "Sao Tome & Principe"
                        },
                        {
                            "title": "Saudi Arabia",
                            "value": "Saudi Arabia"
                        },
                        {
                            "title": "Senegal",
                            "value": "Senegal"
                        },
                        {
                            "title": "Serbia",
                            "value": "Serbia"
                        },
                        {
                            "title": "Serbia and Montenegro",
                            "value": "Serbia and Montenegro"
                        },
                        {
                            "title": "Seychelles",
                            "value": "Seychelles"
                        },
                        {
                            "title": "Sierra Leone",
                            "value": "Sierra Leone"
                        },
                        {
                            "title": "Singapore",
                            "value": "Singapore"
                        },
                        {
                            "title": "Slovakia",
                            "value": "Slovakia"
                        },
                        {
                            "title": "Slovenia",
                            "value": "Slovenia"
                        },
                        {
                            "title": "Solomon Islands",
                            "value": "Solomon Islands"
                        },
                        {
                            "title": "Somalia",
                            "value": "Somalia"
                        },
                        {
                            "title": "South Africa",
                            "value": "South Africa"
                        },
                        {
                            "title": "South Sudan",
                            "value": "South Sudan"
                        },
                        {
                            "title": "Spain",
                            "value": "Spain"
                        },
                        {
                            "title": "Sri Lanka",
                            "value": "Sri Lanka"
                        },
                        {
                            "title": "St Kitts & Nevis",
                            "value": "St Kitts & Nevis"
                        },
                        {
                            "title": "St Lucia",
                            "value": "St Lucia"
                        },
                        {
                            "title": "Sudan",
                            "value": "Sudan"
                        },
                        {
                            "title": "Suriname",
                            "value": "Suriname"
                        },
                        {
                            "title": "Swaziland",
                            "value": "Swaziland"
                        },
                        {
                            "title": "Sweden",
                            "value": "Sweden"
                        },
                        {
                            "title": "Switzerland",
                            "value": "Switzerland"
                        },
                        {
                            "title": "Syria",
                            "value": "Syria"
                        },
                        {
                            "title": "Taiwan",
                            "value": "Taiwan"
                        },
                        {
                            "title": "Tajikistan",
                            "value": "Tajikistan"
                        },
                        {
                            "title": "Tanzania",
                            "value": "Tanzania"
                        },
                        {
                            "title": "Thailand",
                            "value": "Thailand"
                        },
                        {
                            "title": "Togo",
                            "value": "Togo"
                        },
                        {
                            "title": "Tonga",
                            "value": "Tonga"
                        },
                        {
                            "title": "Trinidad and Tobago",
                            "value": "Trinidad and Tobago"
                        },
                        {
                            "title": "Tunisia",
                            "value": "Tunisia"
                        },
                        {
                            "title": "Turkey",
                            "value": "Turkey"
                        },
                        {
                            "title": "Turkmenistan",
                            "value": "Turkmenistan"
                        },
                        {
                            "title": "Tuvalu",
                            "value": "Tuvalu"
                        },
                        {
                            "title": "Uganda",
                            "value": "Uganda"
                        },
                        {
                            "title": "Ukraine",
                            "value": "Ukraine"
                        },
                        {
                            "title": "United Arab Emirates",
                            "value": "United Arab Emirates"
                        },
                        {
                            "title": "United Kingdom",
                            "value": "United Kingdom"
                        },
                        {
                            "title": "United States",
                            "value": "United States"
                        },
                        {
                            "title": "Uruguay",
                            "value": "Uruguay"
                        },
                        {
                            "title": "Uzbekistan",
                            "value": "Uzbekistan"
                        },
                        {
                            "title": "Vanuatu",
                            "value": "Vanuatu"
                        },
                        {
                            "title": "Vatican City",
                            "value": "Vatican City"
                        },
                        {
                            "title": "Venezuela",
                            "value": "Venezuela"
                        },
                        {
                            "title": "Vietnam",
                            "value": "Vietnam"
                        },
                        {
                            "title": "Yemen",
                            "value": "Yemen"
                        },
                        {
                            "title": "Zambia",
                            "value": "Zambia"
                        },
                        {
                            "title": "Zimbabwe",
                            "value": "Zimbabwe"
                        }
                    ],
                    "id": "myCountry",
                    "isRequired": true,
                    "errorMessage": "Please select one of the options from the dropdown.",
                    "label": "Country",
                    "placeholder": "Choose a country"
                },
                {
                    "type": "Container",
                    "spacing": "Small",
                    "height": "stretch",
                    "minHeight": "4px"
                },
                {
                    "type": "Input.Text",
                    "id": "myEmail",
                    "errorMessage": "Please provide a valid email address.",
                    "regex": "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$",
                    "label": "Email",
                    "placeholder": "Insert your email",
                    "isRequired": true
                },
                {
                    "type": "Container",
                    "spacing": "Small",
                    "minHeight": "4px"
                },
             
                {
                    "type": "Input.Text",
                    "id": "mySubject",
                    "isRequired": true,
                    "errorMessage": "Please complete this field.",
                    "label": "Subject",
                    "placeholder": "Insert one subject line"
                },
                {
                    "type": "Container",
                    "spacing": "Small"
                },
                {
                    "type": "Input.Text",
                    "id": "myDescription",
                    "isMultiline": true,
                    "value": "{{context.initQuestion}}",
                    "isRequired": true,
                    "errorMessage": "Please complete this field.",
                    "label": "Detailed description of the issue"
                },
                {
                    "type": "Container",
                    "minHeight": "4px",
                    "spacing": "Medium"
                },
                {
                    "type": "TextBlock",
                    "text": "File Upload",
                    "wrap": true,
                    "color": "Dark",
                    "style": "default",
                    "fontType": "Default",
                    "size": "Medium",
                    "weight": "Bolder"
                },
                {
                    "type": "TextBlock",
                    "text": "Please mark if you would like to upload a file",
                    "wrap": true,
                    "size": "Small"
                },
                {
                    "type": "Container",
                    "items": [
                        {
                            "type": "ColumnSet",
                            "columns": [
                                {
                                    "type": "Column",
                                    "width": "stretch",
                                    "selectAction": {
                                        "type": "Action.ToggleVisibility",
                                        "targetElements": [
                                            "myFile_False",
                                            "myFile_True",
                                            "nextCol",
                                            "submitCol"
                                        ]
                                    },
                                    "items": [
                                        {
                                            "type": "Input.Toggle",
                                            "title": "Upload File",
                                            "id": "myFile_False",
                                            "value": "false"
                                        },
                                        {
                                            "type": "Input.Toggle",
                                            "title": "Upload File",
                                            "id": "myFile_True",
                                            "value": "true",
                                            "isVisible": false
                                        },
                                        {
                                            "type": "TextBlock",
                                            "text": "Accepted file formats: jpg, jpeg, zip, pdf, docx, png, bmp.",
                                            "wrap": true,
                                            "size": "Small"
                                        },
                                        {
                                            "type": "Container",
                                            "spacing": "Medium"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "TextBlock",
                    "text": "I acknowledge that when submitting this request I refrain from sending any protected health information, personal data or sensitive categories of personal data as defined by the General Data Protection Regulation (GDPR) or by the Health Insurance Portability and Accountability Act (HIPAA). ",
                    "wrap": true,
                    "fontType": "Default",
                    "size": "Small",
                    "weight": "Bolder",
                    "color": "Dark"
                },
                {
                    "type": "ColumnSet",
                    "columns": [
                        {
                            "type": "Column",
                            "width": "stretch"
                        },
                        {
                            "type": "Column",
                            "width": "stretch"
                        },
                        {
                            "type": "Column",
                            "width": "stretch",
                            "items": [
                                {
                                    "type": "Container",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": "Learn more here",
                                            "wrap": true,
                                            "style": "default",
                                            "fontType": "Default",
                                            "size": "Default",
                                            "color": "Accent",
                                            "isSubtle": false,
                                            "horizontalAlignment": "Center"
                                        },
                                        {
                                            "type": "ActionSet"
                                        }
                                    ],
                                    "selectAction": {
                                        "type": "Action.OpenUrl",
                                        "url": "https://www.uipath.com/legal/trust-and-security/privacy-policy",
                                        "tooltip": "UiPath Privacy Policy"
                                    },
                                    "style": "default",
                                    "backgroundImage": {
                                        "verticalAlignment": "Center"
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "Container",
                    "items": [
                        {
                            "type": "Container",
                            "minHeight": "4px"
                        },
                        {
                            "type": "ColumnSet",
                            "columns": [
                                {
                                    "type": "Column",
                                    "width": "stretch",
                                    "id": "submitCol",
                                    "items": [
                                        {
                                            "type": "ActionSet",
                                            "actions": [
                                                {
                                                    "type": "Action.Submit",
                                                    "title": "Submit",
                                                    "id": "submit",
                                                    "data": {
                                                        "upload": false
                                                    }
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "Column",
                                    "width": "stretch",
                                    "id": "nextCol",
                                    "items": [
                                        {
                                            "type": "ActionSet",
                                            "actions": [
                                                {
                                                    "type": "Action.Submit",
                                                    "title": "Next",
                                                    "id": "next",
                                                    "data": {
                                                        "upload": true
                                                    }
                                                }
                                            ]
                                        }
                                    ],
                                    "isVisible": false
                                }
                            ]
                        }
                    ]
                }
            ],
            "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
            "version": "1.5"
        }
            }
        }

        return (
            <AdaptiveCard
                payload={cardPayload}
                onActionSubmit={onActionSubmit}
                hostConfig={hostConfig}
            />
        );
    }, [cardPayload]);

    return (
        <div className='adaptivecard-wrapper'>
            {card}
        </div>
    )
}

const adaptivecardsPlugin = {
    match: 'adaptivecards',
    component: AdaptiveCards,
    options: {
        fullwidth: true
    }
}

if (!window.cognigyWebchatMessagePlugins) {
    window.cognigyWebchatMessagePlugins = []
}

window.cognigyWebchatMessagePlugins.push(adaptivecardsPlugin);
