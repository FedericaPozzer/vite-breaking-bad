import { reactive } from "vue"; // lo rendo usabile globalmente


export const store = reactive({
    cards : [],

    cardsTypes : [
        "Effect Monster", // - mix
        "Flip Effect Monster", // - mix
        "Flip Tuner Effect Monster", // - mix
        "Gemini Monster",
        "Normal Monster", // - mix
        "Normal Tuner Monster", // - mix
        "Pendulum Effect Monster",
        "Pendulum Effect Ritual Monster", // - non va
        "Pendulum Flip Effect Monster", // - 1
        "Pendulum Normal Monster",
        "Pendulum Tuner Effect Monster", // - 8
        "Ritual Effect Monster",
        "Ritual Monster", // - 15
        "Spell Card",
        "Spirit Monster",
        "Toon Monster", // - 17
        "Trap Card",
        "Tuner Monster",
        "Union Effect Monster",
        "Fusion Monster",
        "Link Monster",
        "Pendulum Effect Fusion Monster", // - 10
        "Synchro Monster",
        "Synchro Pendulum Effect Monster", // - 7
        "Synchro Tuner Monster",
        "XYZ Monster",
        "XYZ Pendulum Effect Monster", // - 9
        "Skill Card",
        "Token",
    ],

    endpoint : "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0",
    isPageLoading : false,
});