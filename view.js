class View{
    constructor(array, object, htmlElement, elementId, objectArray){
        this.array = array,
        this.object = object;
        this.htmlElement = this.htmlElement;
        this.elementId = elementId;
        this.objectArray = objectArray;
    }
    viewMaker(array){
        const formObject = {};
        for (let element of array){
            const valueAdd = $(document.createElement(element.kind));
            valueAdd.attr('src', element.src);
            valueAdd.attr('id',element.id);
            valueAdd.text(element.label);
            valueAdd.attr('placeholder', element.placeholder);
            valueAdd.attr('aria-label', element.ariaLabel);
            valueAdd.attr('aria-describedby', element.ariaDescribedby);
            valueAdd.addClass(element.class);
            Object.assign(formObject, {[element.id]: valueAdd});
        }
        return formObject;
        }
    viewAppender(object, elementObject){
        const appendedSubElement = Object.values(object);
        const parentElement = $(document.createElement(elementObject.htmlElement));
        parentElement.attr('id',elementObject.elementId);
        parentElement.addClass(elementObject.class);
        for (let element of appendedSubElement){
            parentElement.append(element);
        }
        return $('body').append(parentElement);
    }
    viewAdjuster(object, objectArray=[]){
        if (objectArray.length > 0) {
            objectArray.forEach(function(item){
                Object.assign(item, {class: object.class})

            });
            return objectArray;
        }
        else{
            $(object.htmlElement).addClass(object.class);
            return object;

        }
    }

}

const interface = [
    {kind: "h1",
    label: "GIPHY PARTY",
    class: "diplay-1 text-white"},
    
    {kind: "input",
    id: "searchInput",
    placeholder: "Enter a search term",
    class: "form-control d-inline",
    type: "input",//text
    ariaLabel: "Large",
    ariaDescribedby: "inputGroup-sizing-sm"},

    {kind: "button",
    label: "Search Giphy!",
    class: "d-inline btn btn-secondary m-1",
    id: "searchGiphy",
    type: "button"},

    {kind: "button",
    label: "Remove Images",
    id: "removeGif",
    type: "submit",
    class:"d-inline btn btn-danger m-1"}
]


const div ={
    htmlElement: "div",
    elementId: "$giphyView",
    class: "m-3 container.fluid text-center",
}

const body = {
    htmlElement: "body",
    class: "bg-dark"
}

const img = {
    class: "rounded float-left m-3",
}
const val = 
[
    {
        form: '', pop: div,
        children:
        
            [
                {
                    div: 'form-group',
                    children:
                    [
                        {
                            label: 'emailInput',
                            children:
                            [
                                {label: 'email-input'}, 
                                {input: 'form-control'},
                                {small: 'form-text text-muted'}
                            ]
                        }
     
                    ]
                } 

            ],

    }
];

function check(val){
    val.forEach(function(item){
        //console.log(item)
        const page = Object.keys(item);
        //console.log(page);
        //console.log(Object.values(item));
        if(item.children){
            check(item.children)
        }
    });
}

check(val);

const pageView = new View();
const controlView = pageView.viewMaker(interface);

pageView.viewAppender(controlView, div);
pageView.viewAdjuster(body);



