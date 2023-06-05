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
            "type": "AdaptiveCard",
            "body": [
                {
                    "type": "TextBlock",
                    "size": "medium",
                    "weight": "bolder",
                    "text": "${title}",
                    "style": "heading",
                    "wrap": true
                },
                {
                    "type": "ColumnSet",
                    "columns": [
                        {
                            "type": "Column",
                            "items": [
                                {
                                    "type": "Image",
                                    "style": "person",
                                    "url": "${creator.profileImage}",
                                    "altText": "${creator.name}",
                                    "size": "small"
                                }
                            ],
                            "width": "auto"
                        },
                        {
                            "type": "Column",
                            "items": [
                                {
                                    "type": "TextBlock",
                                    "weight": "bolder",
                                    "text": "${creator.name}",
                                    "wrap": true
                                },
                                {
                                    "type": "TextBlock",
                                    "spacing": "none",
                                    "text": "Created {{DATE(${string(createdUtc)}, SHORT)}}",
                                    "isSubtle": true,
                                    "wrap": true
                                }
                            ],
                            "width": "stretch"
                        }
                    ]
                },
                {
                    "type": "TextBlock",
                    "text": "${description}",
                    "wrap": true
                },
                {
                    "type": "FactSet",
                    "facts": [
                        {
                            "$data": "${properties}",
                            "title": "${key}:",
                            "value": "${value}"
                        }
                    ]
                }
            ],
            "actions": [
                {
                    "type": "Action.ShowCard",
                    "title": "Set due date",
                    "card": {
                        "type": "AdaptiveCard",
                        "body": [
                            {
                                "type": "Input.Date",
                                "label": "Enter the due date",
                                "id": "dueDate"
                            },
                            {
                                "type": "Input.Text",
                                "id": "comment",
                                "isMultiline": true,
                                "label": "Add a comment"
                            }
                        ],
                        "actions": [
                            {
                                "type": "Action.Submit",
                                "title": "OK"
                            }
                        ],
                        "$schema": "http://adaptivecards.io/schemas/adaptive-card.json"
                    }
                },
                {
                    "type": "Action.OpenUrl",
                    "title": "View",
                    "url": "${viewUrl}",
                    "role": "button"
                }
            ],
            "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
            "version": "1.5"
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
