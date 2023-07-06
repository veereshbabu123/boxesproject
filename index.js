const Box = (props) => {
  const { className, message } = props;
  return <button className={className}>{message}</button>;
};

const element = (
  <div class="bg-container">
    <h1 className="heading">Boxes</h1>
    <div className="box-container">
      <Box className="warning-bg-color" message="Small" />
      <Box className="info-bg-color" message="Medium" />
      <Box className="pink-bg-color" message="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
