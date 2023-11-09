const Stats = ({ items }) => {
  if (!items.length)
    return (
      <p className="stats">Start adding some items to your shopping list.</p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <div className="stats">
      {percentage === 100 ? (
        <p>You have bought every item on your list.</p>
      ) : (
        <p>
          You have <span>{numItems}</span> {numItems === 1 ? 'item' : 'items'}{' '}
          on your list, and you already bought <span>{numPacked}</span> (
          {percentage}%)
        </p>
      )}
    </div>
  );
};

export default Stats;
