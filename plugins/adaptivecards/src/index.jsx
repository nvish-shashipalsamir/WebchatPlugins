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
            "spacing": {
                "small": 3,
                "default": 8,
                "medium": 20,
                "large": 30,
                "extraLarge": 40,
                "padding": 10
            },
            "separator": {
                "lineThickness": 1,
                "lineColor": "#EEEEEE"
            },
            "supportsInteractivity": true,
            "fontTypes": {
                "default": {
                    //"fontFamily": "'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
                    "fontFamily": theme.fontFamily,
                    "fontSizes": {
                        "small": 12,
                        "default": 14,
                        "medium": 17,
                        "large": 21,
                        "extraLarge": 26
                    },
                    "fontWeights": {
                        "lighter": 200,
                        "default": 400,
                        "bolder": 600
                    },
                },
                "monospace": {
                    "fontFamily": "'Courier New', Courier, monospace",
                    "fontSizes": {
                        "small": 12,
                        "default": 14,
                        "medium": 17,
                        "large": 21,
                        "extraLarge": 26
                    },
                    "fontWeights": {
                        "lighter": 200,
                        "default": 400,
                        "bolder": 600
                    },
                },
            },
            "containerStyles": {
                "default": {
                    "backgroundColor": "#FFFFFF",
                    "foregroundColors": {
                        "default": {
                            "default": "#000000",
                            "subtle": "#767676",
                            highlightColors:{
                                "default": "#000000",
                                "subtle": "#767676",
                            }
                        },
                        "accent": {
                            "default": "#0063B1",
                            "subtle": "#0063B1",
                            highlightColors:{
                                "default": "#0063B1",
                                "subtle": "#0063B1",
                            }
                        },
                        "attention": {
                            "default": "#FF0000",
                            "subtle": "#DDFF0000",
                            highlightColors:{
                                "default": "#FF0000",
                                "subtle": "#DDFF0000",
                            }
                        },
                        "good": {
                            "default": "#54a254",
                            "subtle": "#DD54a254",
                            highlightColors:{
                                "default": "#54a254",
                                "subtle": "#DD54a254",
                            }
                        },
                        "warning": {
                            "default": "#c3ab23",
                            "subtle": "#DDc3ab23",
                            highlightColors:{
                                "default": "#c3ab23",
                                "subtle": "#DDc3ab23",
                            }
                        }
                    }
                },
                "emphasis": {
                    "backgroundColor": "#F0F0F0",
                    "foregroundColors": {
                        "default": {
                            "default": "#000000",
                            "subtle": "#767676",
                            highlightColors:{
                                "default": "#000000",
                                "subtle": "#767676",
                            }
                        },
                        "accent": {
                            "default": "#2E89FC",
                            "subtle": "#882E89FC",
                            highlightColors:{
                                "default": "#2E89FC",
                                "subtle": "#882E89FC",
                            }
                        },
                        "attention": {
                            "default": "#FF0000",
                            "subtle": "#DDFF0000",
                            highlightColors:{
                                "default": "#FF0000",
                                "subtle": "#DDFF0000",
                            }
                        },
                        "good": {
                            "default": "#54a254",
                            "subtle": "#DD54a254",
                            highlightColors:{
                                "default": "#54a254",
                                "subtle": "#DD54a254",
                            }
                        },
                        "warning": {
                            "default": "#c3ab23",
                            "subtle": "#DDc3ab23",
                            highlightColors:{
                                "default": "#c3ab23",
                                "subtle": "#DDc3ab23",
                            }
                        },
                    }
                },
                "accent": {
                    "backgroundColor": "#C7DEF9",
                    "foregroundColors": {
                        "default": {
                            "default": "#333333",
                            "subtle": "#EE333333"
                        },
                        "dark": {
                            "default": "#000000",
                            "subtle": "#66000000"
                        },
                        "light": {
                            "default": "#FFFFFF",
                            "subtle": "#33000000"
                        },
                        "accent": {
                            "default": "#2E89FC",
                            "subtle": "#882E89FC"
                        },
                        "attention": {
                            "default": "#cc3300",
                            "subtle": "#DDcc3300"
                        },
                        "good": {
                            "default": "#54a254",
                            "subtle": "#DD54a254"
                        },
                        "warning": {
                            "default": "#e69500",
                            "subtle": "#DDe69500"
                        }
                    }
                },
                "good": {
                    "backgroundColor": "#CCFFCC",
                    "foregroundColors": {
                        "default": {
                            "default": "#333333",
                            "subtle": "#EE333333"
                        },
                        "dark": {
                            "default": "#000000",
                            "subtle": "#66000000"
                        },
                        "light": {
                            "default": "#FFFFFF",
                            "subtle": "#33000000"
                        },
                        "accent": {
                            "default": "#2E89FC",
                            "subtle": "#882E89FC"
                        },
                        "attention": {
                            "default": "#cc3300",
                            "subtle": "#DDcc3300"
                        },
                        "good": {
                            "default": "#54a254",
                            "subtle": "#DD54a254"
                        },
                        "warning": {
                            "default": "#e69500",
                            "subtle": "#DDe69500"
                        }
                    }
                },
                "attention": {
                    "backgroundColor": "#FFC5B2",
                    "foregroundColors": {
                        "default": {
                            "default": "#333333",
                            "subtle": "#EE333333"
                        },
                        "dark": {
                            "default": "#000000",
                            "subtle": "#66000000"
                        },
                        "light": {
                            "default": "#FFFFFF",
                            "subtle": "#33000000"
                        },
                        "accent": {
                            "default": "#2E89FC",
                            "subtle": "#882E89FC"
                        },
                        "attention": {
                            "default": "#cc3300",
                            "subtle": "#DDcc3300"
                        },
                        "good": {
                            "default": "#54a254",
                            "subtle": "#DD54a254"
                        },
                        "warning": {
                            "default": "#e69500",
                            "subtle": "#DDe69500"
                        }
                    }
                },
                "warning": {
                    "backgroundColor": "#FFE2B2",
                    "foregroundColors": {
                        "default": {
                            "default": "#333333",
                            "subtle": "#EE333333"
                        },
                        "dark": {
                            "default": "#000000",
                            "subtle": "#66000000"
                        },
                        "light": {
                            "default": "#FFFFFF",
                            "subtle": "#33000000"
                        },
                        "accent": {
                            "default": "#2E89FC",
                            "subtle": "#882E89FC"
                        },
                        "attention": {
                            "default": "#cc3300",
                            "subtle": "#DDcc3300"
                        },
                        "good": {
                            "default": "#54a254",
                            "subtle": "#DD54a254"
                        },
                        "warning": {
                            "default": "#e69500",
                            "subtle": "#DDe69500"
                        }
                    }
                }
            },
            "imageSizes": {
                "small": 40,
                "medium": 80,
                "large": 160
            },
            "actions": {
                "maxActions": 5,
                "spacing": 5,
                "buttonSpacing": 8,
                "showCard": {
                    "actionMode": 0,
                    "inlineTopMargin": 8,
                },
                "actionsOrientation": 0,
                "actionAlignment": 3,

            },
            "adaptiveCard": {
                "allowCustomStyle": false
            },
            "imageSet": {
                "imageSize": 50,
                "maxImageHeight": 100,
            },
            "factSet": {
                "title": {
                    "color": 0,
                    "size": 1,
                    "isSubtle": false,
                    "weight": 2,
                    "wrap": true,
                    "maxWidth": 150,
                },
                "value": {
                    "color": "default",
                    "size": "default",
                    "isSubtle": false,
                    "weight": "default",
                    "wrap": true
                },
                "spacing": 8
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
