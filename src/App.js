import React from 'react';

export default function SignupForm() {
  // states here
  const [myName, setName] = React.useState();
  const [mail, setMail] = React.useState();

  const display = (e) => {
    e.preventDefault();

    console.log(`${myName} ${mail}`);
  };

  return (
    <form>
      <label htmlFor="name">
        Name :
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Mary"
          value={myName}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <label htmlFor="email">
        Email :
        <input
          type="email"
          name="email"
          id="email"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
          placeholder="mary.poppins@disney.fr"
        />
      </label>
      <br />
      <br />
      <button type="submit" onClick={display}>
        Submit
      </button>
    </form>
  );
}
