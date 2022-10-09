export function getListSurah(res) {
    return $.ajax({
        url: "https://equran.id/api/surat",
        type: "get", //send it through get method
        data: {},
        success: async function (response) {
            // Return the data
            return await response
        },
        error: function (xhr) {
            // Return 403
            return 0
        },
        timeout: 2000
    })
}

export function getSurahRecitation(surah) {
    return $.ajax({
        url: "https://equran.id/api/tafsir/"+surah,
        type: "get", //send it through get method
        data: {},
        success: async function (response) {
            // Return the data
            return await response
        },
        error: function (xhr) {
            // Return 403
            return 0
        },
        timeout: 2000
    })
}