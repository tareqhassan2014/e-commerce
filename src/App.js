import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import SigninModel01 from './Components/Sign-in-Sign-up/Sign-in-Sign-up(Model_01)/Signin(Model_01)/Signin(Model_01)';

function App() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/login">
                        <SigninModel01 />
                    </Route>
                    <Route path="/signup">
                        <SigninModel01 />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
