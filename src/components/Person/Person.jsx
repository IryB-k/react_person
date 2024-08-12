export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  let marriedStatus = <p className="Person__partner">I am not married</p>;
  const spouse = sex === 'f' ? 'husband' : 'wife';

  if (isMarried) {
    marriedStatus = (
      <p className="Person__partner">
        {partnerName} is my {spouse}
      </p>
    );
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age > 0 && <p className="Person__age">I am {age}</p>}
      {marriedStatus}
    </section>
  );
};
