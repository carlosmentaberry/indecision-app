console.log('App.js is running!');

const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
  }
  render();
    
}

const onRemoveOption = () => {
  app.options = [];
  render();
}

const appRoot = document.getElementById('app');

const numbers = [55, 101, 1000];
const strings = ["Item one", "Item two", "Item three"];

const onMakeDecision = () =>{
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  console.log(option);
};

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>

      <button onClick={onRemoveOption}>remove all</button>
      
      <ol>
      { app.options.map((opt) => { return <li key={opt}>{opt}</li>; }) }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

render();