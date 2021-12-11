function checkerclick()
{
    var arr=[];
    fetch('https://ledger.tagdev.info/v1/summary/getHtagPriceCount')
  .then(response => response.json())
  .then(function (data) {        
            for(i=1;i<data.count;i++){
                fetch('https://shrouded-retreat-21698.herokuapp.com/https://tagscan.info/tokenID/'+i+'/0/10').then(function (response) {
                    if(response.status==500)
                        {
                            var str=response.url;
                            var mySubString = str.substring(
                            str.indexOf("ID/") + 3, 
                            str.lastIndexOf("/")
                        );
                            var fstr = mySubString.slice(0, -2); 
                            arr.push(fstr);
                            document.getElementById('errResult').innerHTML=arr;
                             console.log('500 Error on TokenID - ',fstr);
                        }
                    else
                console.log('success! - ', response);
                }).catch(function (err) {
                console.warn('Something went wrong.', err);
                });
            }
        
     }).catch(function (err) {
        console.warn('Something went wrong.Couldnt get total htag count.', err);
        });
}