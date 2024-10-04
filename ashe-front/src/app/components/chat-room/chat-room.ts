export interface ChatContent {
}

export interface ChatUserContent extends ChatContent{
    userInput: string;
}

export interface ChatTutorContent extends ChatContent {
    tutorResponse: string;
}

export interface ChatBoxContent extends ChatUserContent, ChatTutorContent {
}