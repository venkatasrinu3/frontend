$("#btn").click(function () {
    performSearch()
})

var data;
function performSearch() {
    // var data = null
    var titleSearch = document.getElementById("movieSearch").value
    var xhr = new XMLHttpRequest()
    xhr.open('GET', 'https://www.omdbapi.com/?s=' + titleSearch + '&apikey=8676d25e')
    xhr.send()
    xhr.onload = function () {
        if (xhr.status == 200) {
            data = JSON.parse(xhr.response)
            if(data['Response']==="False"){
                alert("Invalid details...Movie Not found!")
            }
            else{
                alert('Your Requested details are below...!')
                populatePages(data)
            }
        }
        else {
            console.log("Error code is :xhr.response")
        }
    }
}

function populatePages(info) {
    var bodydiv = document.getElementById('display')
    bodydiv.innerHTML=""
    var container = document.createElement('div')
    container.setAttribute('class', 'container-fluid my-5')
    bodydiv.append(container)

    var row = document.createElement('div')
    row.setAttribute('class', 'row text-center')
    container.append(row)

    for (var i = 0; i < info.Search.length; i++) {
        var col = document.createElement('div')
        col.setAttribute('class', 'col-10 offset-1 offset-md-0 col-md-6 col-lg-3')
        row.append(col)

        var card = document.createElement('div')
        card.setAttribute('class', 'card mb-4 shadow cardborder')

        var cardHeader=document.createElement('div')
        cardHeader.setAttribute('class','card-header')
        cardHeader.setAttribute('class','cardHead')
        cardHeader.innerHTML=info['Search'][i]['Title']
        card.append(cardHeader)

        var cardBody = document.createElement('div')
        cardBody.setAttribute('class', 'card-body')
        var image = document.createElement('img')
        image.setAttribute('src', info.Search[i]['Poster'])
        image.setAttribute('class', 'cardimg img-fluid img-thumbnail')
        cardBody.append(image)
        card.append(cardBody)

        var cardFooter = document.createElement('div')
        cardFooter.setAttribute('class', 'card-footer')
        var btn = document.createElement('button')
        btn.textContent = "More Details"
        btn.setAttribute('value', i)
        btn.addEventListener('click',moredetails)
        btn.setAttribute('class', 'btn btn-primary text-white px-4')
        cardFooter.append(btn)
        card.append(cardFooter)
        col.append(card)
    }
}

var details
function moredetails(e){
    alert("Your selected Movie details are shown below!")
    var num=e.target.value
    var movieid=data['Search'][num]['imdbID']
    
    var xhr=new XMLHttpRequest();
    xhr.open('GET','https://www.omdbapi.com/?i=' + movieid + '&apikey=8676d25e')
    xhr.send()
    xhr.onload=function(){
        details=JSON.parse(xhr.response)
        displaydata(details)
    }
    
}

function displaydata(details){
    var tableloc = document.getElementById('tabledata')
    var tablediv=document.createElement('table')
    tableloc.innerHTML=""
    console.log(details)
    for(key in details){
        if(key !="Ratings"){
            var row=document.createElement('tr')
            var col1=document.createElement('td')
            col1.innerHTML=key
            var col2=document.createElement('td')
            col2.innerHTML=details[key]
            row.append(col1,col2)
            tablediv.append(row)
            col1.setAttribute('class','border border-danger font-weight-bold h5 lead')
            col2.setAttribute('class','border border-danger h6 lead')
            tablediv.setAttribute('class','table table-responsive')
            tableloc.append(tablediv)
            tableloc.setAttribute('class','container-fluid justify-content-center ml-auto')
        }
    }  
}

$("#reset").click(function(){
    $("#movieSearch").val("")
});