import React from 'react';
function Item({element,list,setlist }) {
    function handleCheck() {
        const result = list.map((el)=>{
            console.log(el.isDone);
            if(el.id === element.id){
                el.isDone = !el.isDone;
            }
            console.log(el);
            return el;
        });
        setlist(result);
    }
    if (element.isDone === true) {
        return (
            <div className="card text-white bg-success m-3" style={{width: "18rem"}}>
                <div className="card-body">
                    <h5 className="card-title">{element.name}</h5>
                    <p className="card-text">{element.Date}</p>
                    <button type="button" className="btn btn-light" onClick={handleCheck}>Done</button>
                </div>
            </div>
        );
    }
    else{
        return(
            <div className="card text-dark bg-light m-3" style={{width: "18rem"}}>
                <div className="card-body">
                    <h5 className="card-title">{element.name}</h5>
                    <p className="card-text">{element.Date}</p>
                    <button type="button" className="btn btn-primary" onClick={handleCheck}>Done</button>
                </div>
            </div>
        );
    }
}
export default Item