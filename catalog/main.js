import React, {Component, useEffect} from "react";
import {
	BrowserRouter as Router
} from "react-router-dom";

import Routes from "routes";

import Hamburger from "./lib/hamburger";
import Drawer from "./lib/drawer/drawer";
import Header from "./lib/header";

// TODO verify if can place this somewhere else.
import styles from "./main.scss";

import ReactGA from 'react-ga';
ReactGA.initialize('UA-159160070-1');

// Used at mount to highlight correct menu item.
const getCurrentLocation = (full) => {
	if(full) {
		return window.location.pathname;
	}
	const splitted = window.location.pathname.split("/");
	let path = "/"+splitted[1];
	return path;
};

function trackPageView(path) {
	ReactGA.pageview(path);
}

export default class App extends Component {
	state = {
		drawerOpen: window.innerWidth >= 1000,
		closable: window.innerWidth <= 999,
		selectedKeysMenu: [getCurrentLocation()],
		selectedKeysSubmenu: [getCurrentLocation(true)],
		currentPath: getCurrentLocation(true)
	};

	resize = () => {
		if(window.innerWidth >= 1000 && this.state.closable === true) {
			this.setState({
				closable: false,
				drawerOpen: true
			});
		} else if(window.innerWidth <= 999 && this.state.closable === false) {
			this.setState({
				closable: true,
				drawerOpen: false
			});
		}

	};

	componentDidMount() {
		window.addEventListener('resize', this.resize);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.resize)
	}

	closeDrawer = () => {
		this.setState({
			drawerOpen: false
		});
	};

	openDrawer = () => {
		this.setState({
			drawerOpen: true
		});
	};

	onClickMenu = () => {
		// this.setState({selectedKeysSubmenu: [getCurrentLocation(true)]})
	};

	onClickHeader = ({keyPath}) => {
		this.setState({
			selectedKeysMenu: [keyPath[0]]
		})
	};

	onRouteChange = (pathname) => {
		useEffect(() => {
			// Path changed, ok to update state.
			if(this.state.currentPath !== pathname) {
				const newSelectedKeysSubmenu = [pathname];
				this.setState({
					selectedKeysSubmenu: newSelectedKeysSubmenu,
					currentPath: pathname
				});
				trackPageView(pathname);
			}
		});
	};

	render() {
		return (
			<Router>
				<Header onClick={this.onClickHeader} selectedKeys={this.state.selectedKeysMenu}/>
				<div className={styles.container}>
					<Hamburger onClick={this.openDrawer}/>
					<Drawer
						closeDrawer={this.closeDrawer}
						drawerOpen={this.state.drawerOpen}
						closable={this.state.closable}
						onClick={this.onClickMenu}
						selectedKeys={this.state.selectedKeysSubmenu}
					/>
					<div className={styles.innerContainer}>
						<Routes onRouteChange={this.onRouteChange}/>
					</div>
				</div>
			</Router>
		)
	}
}