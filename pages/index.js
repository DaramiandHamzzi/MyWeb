function HomePage() {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <h1
        style={{ fontFamily: '"Brush Script MT", cursive', color: 'purple' }}
      >
        {`Hamsters's website`}
      </h1>
      <h2
        style={{
          fontFamily: 'cursive',
          color: 'lime',
          marginBottom: '10rem'
        }}
      >
        click the buttons below
      </h2>
      <button
        style={{
          fontFamily: 'monospace',
          padding: '1rem',
          fontSize: '2rem',
          background: 'orange',
          color: 'white'
        }}
        onClick={() => alert('Hello! Welcome to my Website!')}
      >
        Welcome
      </button>
      <button
        style={{
          fontFamily: 'monospace',
          padding: '1rem',
          fontSize: '2rem',
          background: 'pink',
          color: 'white',
          marginTop: '2rem'
        }}
        onClick={() => {
          let name = prompt("Please write your name here:");
          if (name) {
            alert('Thanks for coming in my Website, ' + name + '!');
          } else {
            alert('I don't like you! Go away!!!');
          }
        }}
      >
        {"What's your name?"}
      </button>
    </div>
  );
}

export default HomePage;
