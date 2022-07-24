
export default function RecordList() {

    const getRecords = () => {
      fetch(`http://localhost:5000/record/`)
      .then((response) => response.json())
      .then((json) => {
          console.log(json);
      });
  };

    return(
      <div>
        <button onClick={getRecords}>test</button>
      </div>
    );


}
