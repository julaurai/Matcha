import React from 'react'
import ReactDOM from 'react-dom'
import SignUp from './scenes/sign/signup/index'
import SignIn from './scenes/sign/signin/index'
import './index.css'
import { Menu, Layout } from 'antd';
import 'antd/dist/antd.css';
import { Route, NavLink, BrowserRouter as Router, Switch } from 'react-router-dom'

const NotFound = () => <h1>Not found</h1>

const { Header, Footer, Sider, Content } = Layout;

const routing = (
    <Router>
        <Layout>
        <Header theme="dark">
            <Menu mode="horizontal" theme="dark">
                <Menu.Item>
                    <NavLink exact to="/">Home</NavLink>
                </Menu.Item>
                <Menu.Item>
                    <NavLink to="/signup">SignUp</NavLink>
                </Menu.Item>
                <Menu.Item>
                    <NavLink to="/signin">SignIn</NavLink>
                </Menu.Item>
            </Menu>
            </Header>
            <Content>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route path="/signup" component={SignUp} />
                    <Route path="/signin" component={SignIn} />
                    <Route component={NotFound} />
                </Switch>
            </Content>
            <Footer>
                <div>Julaurai</div>
            </Footer>
        </Layout>
    </Router>
)



function App() {
    return (
        <div>
            App
        </div>
    )
}



ReactDOM.render(routing ,document.getElementById("root"))
