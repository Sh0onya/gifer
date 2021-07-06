$(document).ready(function(){
  $('input.autocomplete').autocomplete({
    data: {
      "bored":null,
      "angry":null,
      "sad":null,
      "happy":null,
      "india":null,
      "srk":null,
      "china":null,
      "usa":null,
      "love":null,
      "funny":null,
      "cartoon":null,
      "bollywood":null,
      "coding":null,
      "computers":null,
      "france":null,
      "modi":null,
      "hello":null,
      "frustrated":null,
      "engineer":null,
      "doctor":null,
      "fox":null,
      "jump":null,
      "lion":null,
      "tiger":null,
      "monkey":null,
      "emoji":null,
      "rain":null,
      "gosling":null,
      "rainbow":null,
    },
  });
    $('#search').click(function(){
        var query = $('#query').val();
        var url = "https://api.giphy.com/v1/gifs/search?api_key=F0OjoXTDSknQY4FEn9tesH6END2kIxHC&q="+query+"&limit=100&offset=0&rating=g&lang=en"
        //var url = "https://raw.githubusercontent.com/Sh0onya/Buddha/master/modi.json"
        $.getJSON(url, function(search){
        for(var i = 0;i < search.data.length;i++){
            var imgTag = document.createElement('img');
            var h4Tag = document.createElement('h4');
            var aTag = document.createElement('a');
            var card = document.createElement('div');
            var cardImage = document.createElement('div');
            var cardText = document.createElement('div');
            var column = document.getElementById('col');
            var user = "";
            var title = "";
            search.data[i].title == ""?title="Open in Gigphy":title=search.data[i].title;
            search.data[i].username == ""?user="anonymous":user=search.data[i].username;
            $(card).attr('class','card').attr('id',search.data[i].id).appendTo(column);
            $(cardImage).attr('class','card-image').appendTo(card);
            $(cardText).attr('class','card-image').appendTo(card);
            $(imgTag).attr('src',search.data[i].images.downsized.url).appendTo(cardImage);
            $(h4Tag).html(user).appendTo(cardText);
            $(aTag).html(title).attr('href',search.data[i].url).appendTo(cardText);
        }
    }).fail(function(){
    console.log("An error has occurred.");
    });
    });
    
});


const app = Vue.createApp({
    data(){
      return{
        searchText: '',
      }
    },
    methods:{
      async updateText(){
          var query = document.getElementById('query').value;
          this.searchText = "Search Results for " + query;
      }
    }
  })

  app.mount('#app')
