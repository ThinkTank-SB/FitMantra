export const exerciseOptions = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '03d1e9fafdmsh44449bf046576f0p17c44cjsn736bc4164fc7',
        'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
    }
};
export const youtubeOptions = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '03d1e9fafdmsh44449bf046576f0p17c44cjsn736bc4164fc7',
        'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
    }
};
export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
}