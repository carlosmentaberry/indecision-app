// const user = {
//   name: 'CarLos',
//   age: 31,
//   location: 'Buenos Aires'
// };
// function getLocation(location) {
//   if (location) {
//     return <p>Location: {location}</p>;
//   }
// }
// const template2 = (
//   <div>
//     <h1>{user.name ? user.name : 'Anonymous'}</h1>
//     {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
//     {getLocation(user.location)}
//   </div>
// );


let count = 0;

const addOne = () => {
  count++;
  renderCounterApp();
};


const minusOne = () => {
  count--;
  renderCounterApp();
};

const setup = () => {
  count = 0;
  renderCounterApp();
};


const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={setup}>Reset</button>
    </div>
  );

  ReactDOM.render(templateTwo, appRoot);
};

const appRoot = document.getElementById('app');

renderCounterApp();