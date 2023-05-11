import logo from '../image/logo.svg';
import '../style/main.css';
const Main = () => {
  return (
    <div className="main">
       <header className="main-header">
        <img src={logo} className="main-logo" alt="logo" />
        <h1 className="testClass">
          Hello world!
        </h1>
      </header>
    </div>
  )
}
export default Main