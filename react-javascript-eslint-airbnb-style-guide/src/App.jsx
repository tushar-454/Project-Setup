import PropTypes from 'prop-types';
import React from 'react';

function App() {
  const [count, setCount] = React.useState('0');
  const handleClick = () => {
    setCount('dsf');
  };
  return (
    <div>
      <Counts countName={count} />
      <button type='button' onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
}

export default App;

function Counts({ countName }) {
  return <h1 className='h-16 w-40 rounded-lg bg-black p-4 text-5xl font-bold'>{countName}</h1>;
}

Counts.propTypes = {
  countName: PropTypes.number.isRequired,
};
