function ItemWrapper() {
  const cars = [
    { id: 1, brand: "Ford" },
    { id: 2, brand: "BMW" },
    { id: 3, brand: "Audi" },
    { id: 3, brand: "Audi" },
  ];
  return (
    <div className="container-fluid">
      <div className="row">
        {cars.map((car) => (
          <div className="col-lg-3 col-md-6 col-12 p-3">Ini Baris</div>
        ))}
      </div>
    </div>
  );
}

export default ItemWrapper;
