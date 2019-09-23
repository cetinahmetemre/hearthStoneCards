export const getMechanics = (data) =>{
    return{
        type:"getMechanics",
        payload:data
    }
}

export const editCards = (data) =>{
    return{
        type:"editCards",
        payload:data
    }
}

// for thunk
/*
export const fetchCards = () =>{
    const mechanicList = [];
    const cardList = {};
    return async dispatch => {
        try{
            let response = await fetch("https://omgvamp-hearthstone-v1.p.rapidapi.com/cards",{
                method: 'GET',
                    headers :{
                      "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
                      "x-rapidapi-key": "4c63dbcdf5mshf8fff212a01d1cdp1cb1aejsnc77fbc36aa8e" 
                    },
              });
            let json  = await response.json();
            json.Basic.forEach(element => {
                if(element.mechanics != undefined)
                {
                    element.mechanics.forEach(mechanic => {
                        if(mechanicList.indexOf(mechanic.name) === -1)
                        {
                            mechanicList.push(mechanic.name);
                            cardList[mechanic.name]=[];
                            cardList[mechanic.name].push(element)
    
                        }
                        else{
                            cardList[mechanic.name].push(element)
                        } 
                    });                
                }                
            });
            dispatch(getMechanics(mechanicList.sort()));
            dispatch(editCards(cardList));
        }catch(error){
            console.log(error)
        }
    }
}
*/
