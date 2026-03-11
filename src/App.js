import questions from "./Data";

import Question from './Question';

function App() {

  return (
    <div className="accordianApp">
      <h1>Login Questions that need Answering</h1>
      <div className="questionBox">
        {questions.map((question)=>{
          return(<Question key={question.id}
                            title={question.title}
                            info={question.info}/>);
        })}
      </div>
    </div>
  );
}

export default App;
