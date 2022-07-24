
export default function RecordList() {

  const getRecords = () => {
    fetch("http://localhost:9000/record")
    .then((response) => {
      response.json();
    console.log(response);
  })
    .then((json) => {
        console.log(json);
    });
};

  const callAPI = () => {
    fetch("http://localhost:9000/testAPI")
        .then(res => {
          console.log(res.text());
          console.log(res);

        });

  }

    return(
      <div>
        <button onClick={getRecords}>test backend with db</button>
        <button onClick={callAPI}>test backend</button>
      </div>
    );


}
