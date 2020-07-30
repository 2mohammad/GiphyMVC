class Model{
    constructor(object){
        this.object = object;

    }
    async giphyRetriever(object){
        const curl = object.apiLink+object.searchString+object.apiKey;
        let response = await axios.get(curl);
        console.log(response);
        const gifObj = {}
        Object.assign (gifObj, {src: response.data.data[0].images.fixed_height_small.url});
        Object.assign (gifObj, {appended: false});
        Object.assign (gifObj, {kind: 'img'});
        giphsObjectArray.push(gifObj);
        return giphsObjectArray;
    }


}

const apiObject = {
    searchString:'',
    apiLink:"http://api.giphy.com/v1/gifs/search?q=",
    apiKey: "&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym",
}

const giphsObjectArray =[]
const giphs = new Model();



