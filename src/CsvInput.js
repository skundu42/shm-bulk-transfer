import Papa from "papaparse";

function CsvInput({ onDataLoaded }) {
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    Papa.parse(file, {
      header: true,
      complete: (results) => {
        onDataLoaded(results.data);
      },
      skipEmptyLines: true,
    });
  };

  return (
    <div>
      <h2>Upload CSV File</h2>
      <input type="file" accept=".csv" onChange={handleFileUpload} />
    </div>
  );
}

export default CsvInput;
