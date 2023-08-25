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
                
                 
                }         
        )
    .catch(err => console.log('rejected:', err.message));

