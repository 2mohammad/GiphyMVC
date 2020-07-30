class Controller {
    constructor(object){
        this.object = object;
        this.capturedValue = '';
        this.listenTo = '';
        this.captureBy = '';
    }
    interactionBuilder(object, listenTo, captureBy){
        listenTo = document.querySelector(object.listenTo);
        captureBy = document.querySelector(object.captureBy);
        captureBy.addEventListener('click', function(target){
            console.log(target);
            target.preventDefault();
                    if ((listenTo.value).trim() === ''){
                        alert("enter a valid search");
                    } else{
                        const searchStringValue = listenTo.value;
                        Object.assign(apiObject, {searchString: searchStringValue});
                        const size = giphsObjectArray.length;
                        let i = 0;
                        giphs.giphyRetriever(apiObject);
                        console.log(giphsObjectArray.length);
                        while(size+1 !== giphsObjectArray.length){
                            setInterval(()=>{    
                            if(size+1 === giphsObjectArray.length && i === 0){
                                pageView.viewAdjuster(img, giphsObjectArray);
                                const imageView = pageView.viewMaker(giphsObjectArray);
                                pageView.viewAppender(imageView, div);
                                i = 1;
                                return 1;
                            }
                            return 1;
                            },10);
                            break;
                        }
                    }
                    listenTo.value = '';
        });

        return object;
    }
    gifRemover(object, captureBy){
        captureBy = document.querySelector(object.captureBy);
        captureBy.addEventListener('click', function(target){
            const imagesFound = document.querySelectorAll('img');
            const imagesArray = Array.from(imagesFound);
            for(let element of imagesArray){
                element.remove();
            }
        });

    }
}

const searchInteraction = {
    listenTo: "#searchInput",
    captureBy: "#searchGiphy",
}

const removeInteraction = {
    captureBy: "#removeGif",
}

const formControl = new Controller();
const search = formControl.interactionBuilder(searchInteraction);
const removeImages = formControl.gifRemover(removeInteraction);

