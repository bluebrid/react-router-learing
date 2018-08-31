import React, { Component } from 'react';
//import { Redirect, Link, Route,Switch } from 'react-router-dom';
import { Redirect, Link, Route, Switch, withRouter, Prompt } from './react-router/packages/react-router-dom/modules';
import Category from './Category';
import Products from './Products';
// import  Login, { fakeAuth }  from './Login';


const App = () => (
  <div>
    <ul>
      <li>
        <Link to="/" replace>Form</Link>
      </li>
      <li>
        <Link to="/one" replace>One</Link>
      </li>
      <li>
        <Link to="/two" replace>Two</Link>
      </li>
    </ul>
    <Route path="/" exact component={Form} />
    <Route path="/one" render={() => <h3>One</h3>} />
    <Route path="/two" render={() => <h3>Two</h3>} />
  </div>
);

class Form extends React.Component {
  state = {
    isBlocking: false
  };

  render() {
    const { isBlocking } = this.state;

    return (
      <form
        onSubmit={event => {
          event.preventDefault();
          event.target.reset();
          this.setState({
            isBlocking: false
          });
        }}
      >
        <Prompt
          when={isBlocking}
          message={location => {
            debugger
            return `Are you sure you want to go to ${location.pathname}`
            }           
          }
        />

        <p>
          Blocking?{" "}
          {isBlocking ? "Yes, click a link or the back button" : "Nope"}
        </p>

        <p>
          <input
            size="50"
            placeholder="type something to block transitions"
            onChange={event => {
              this.setState({
                isBlocking: event.target.value.length > 0
              });
            }}
          />
        </p>

        <p>
          <button>Submit to stop blocking</button>
        </p>
      </form>
    );
  }
}

export default App;
// class App extends Component {

//   render() {

//     return (
//       <div>
//        <nav className="navbar navbar">     
//         <ul className="nav navbar-nav">
//           <li><Link to="/">Homes</Link></li>
//           <li><Link to="/category">Category</Link></li>
//           <li><Link to="/products">Products</Link></li>
//           <li><Link to="/admin">Admin area</Link></li>
//         </ul>
//        </nav>

//        <Switch>
//         <Route path="/login"  render={(props) => <Login {...props} />} />
//         <Route exact path="/" component={Home}/>
//         <Route path="/category" children={(props) => <Category {...props} />} />
//         <PrivateRoute path='/admin' component = {Admin} />
//         <Route path="/products" component={Products}/>
//        </Switch>
//       </div>
//     );
//   }
// }

// //Private router function
// const PrivateRoute = ({component: Component, ...rest}) => {
//   return (
//     <Route
//       {...rest}
//       render={(props) => fakeAuth.isAuthenticated === true
//         ? <Component {...props} />
//         : <Redirect to={{pathname: '/login', state: {from: props.location}}} />} />
//   )
// }

// //Home component
// const Home = (props) => (
//   <div>
//     <h2>Home {console.log(props)}</h2>
//   </div>
// )

// //Admin component
// const Admin = ({ match }) => {
//   return(<div> <h2>Welcome admin </h2></div>)


// }


// export default  App;