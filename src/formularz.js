export default function Formularz() {
  return (
    <form>
      <label htmlFor="data">Data (format rrrr-mm-dd):</label><br />
      <input type="text" id="data" /><br />
      <label htmlFor="iloscOsob">Ile osób?</label><br />
      <input type="number" id="iloscOsob" /><br />
      <label htmlFor="tel">Numer telefonu:</label><br />
      <input type="text" id="tel" /><br />
      <input type="checkbox" id="tel" />
      <label htmlFor="zgoda">Zgadzam się na przetwarzanie moich danych osobowych</label><br />
      <button type="reset">WYCZYŚĆ</button>
      <button type="submit">REZERWUJ</button>
    </form>
  );
}