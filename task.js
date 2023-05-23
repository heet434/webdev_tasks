var myData;
const getData = async () => {
    const response = await fetch("https://www.coursehubiitg.in/api/codingweek/contributions");
    if( response.status !== 200){
        throw new Error("error while fetching data");
    }
    const data = response.json();
    return data;
};
getData()
    .then(data => {console.log('resolved:', data);
                data.sort((a,b) => b.points - a.points);
                    $(document).ready(function(){
                        for(var i=1; i<=3; i++){
                            $("#name" + i).text(data[i-1].name + ' · ' + data[i-1].points);
                            $("#pic" + i).css("background-image","url(" + data[i-1].avatar + ")");
                            $("#pic" + i).css("background-size", "contain");
                            };
                        for(var j=4; j<=9; j++){
                            $(".p" + j + " .in3").text(data[j-1].name);
                            $(".p" + j + " .in4").text(data[j-1].points);
                            $(".p" + j + " .circ").css("background-image","url(" + data[j-1].avatar + ")");
                            $(".p" + j + " .circ").css("background-size", "contain");
                            };
                            });
                 
                }         
        )
    .catch(err => console.log('rejected:', err.message));

