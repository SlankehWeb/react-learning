const Number = () => {
  return (
    <>
      <input
        type="tel"
        id="phone"
        name="phone"
        pattern="[0-9]{8}"
        required
        placeholder="Indtast Telefonnummer"
      />
    </>
  );
};

export default Number;
