import React from 'react';
import api from "../services/api";

let image = require("../assets/img/fxemoji_beachumbrella.png");
let checkImage = require("../assets/img/ic_round-done.png");
let minusImage = require("../assets/img/mdi_minus.png");

function TaskList(data) {
    data = data.data;
    
    console.log(data);
    if(data === undefined){
        return (empty());
    }else{
        return (
            full(data)
        );
    }
}

function full(data){
    
    return(
        <div className={`full ${data.content.status}`}>
            <p task-text>
                {data.content.text}
            </p>
            <div className="task-buttons">
                <img  
                    src={checkImage.default} 
                    alt="" className="check"
                    onClick={changeToDone(data)}
                />
                <img src={minusImage.default} alt ="" className="delete"/>
            </div>
            
        </div>
    );
}

function empty(){
    return(
        <div className="empty">
            <img src={image.default} alt="beach fxemoji"/>
            <span>Nada por aqui!</span>
        </div>
    );
}

async function changeToDone(data){
    await api.post("check", {data: {id: data._id}});
}

export default TaskList;