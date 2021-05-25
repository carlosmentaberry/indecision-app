let visibility = true;

const toggleVisibility = () =>{
    visibility = !visibility;
    render();
};

const render = () => {
  const jsx = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggleVisibility}>
        { visibility ? "Show details" : "Hide details" }
      </button>
      {visibility && ( 
            <div>
                <p>Hey. These are some details you can now see!</p>
            </div>
      )}
    </div>
  );

  ReactDOM.render(jsx, document.getElementById('app'));
};

render();