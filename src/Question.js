import { useState } from "react";
import { FaPlus,FaMinus } from "react-icons/fa";
import style from './Question.module.css';

function Question({title, info}){
    const [expandPanel, setExpandPanel] = useState(false);

    return(
        <div className={style.questionPanel}>
            <section className={style.questionPart}>
                <h3>{title}</h3>
                <button className={style.expandBtn} onClick={()=>setExpandPanel(!expandPanel)}>
                                                                    {expandPanel?<FaMinus />:<FaPlus />}
                </button>
            </section>
            <p className={style.answer}>{expandPanel?info:null}</p>
        </div>
    );
}
export default Question

// <FaPlus /> <FaMinus />
