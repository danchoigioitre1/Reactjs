
import './App.css';
function Alert({text,...props}) {
  return (
    <div>
      <h1 {...props}>{text}</h1>
    </div>
  )

}


function App() {
  return (
    <div id='wapper456'>
      <Alert 
    
    text="Cảnh báo! Tài nguyên bạn vừa truy cập không tồn tại." 
    className="alert alert-warning"
    role="alert"
    
    />
    </div>
  );
}

export default App;
