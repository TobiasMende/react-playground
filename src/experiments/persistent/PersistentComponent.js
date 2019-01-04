import { Component } from 'react';

class PersistentComponent extends Component {

    componentWillMount() {
        this.hydrateStateFromLocalStorage()

        window.addEventListener(
            "beforeunload",
            this.saveStateToLocalStorage.bind(this)
        );
    }

    componentWillUnmount() {
        window.removeEventListener(
            "beforeunload",
            this.saveStateToLocalStorage.bind(this)
        );
        this.saveStateToLocalStorage()
    }

    saveStateToLocalStorage() {
        localStorage.setItem(this.localStorageKey(), JSON.stringify(this.state))
    }

    hydrateStateFromLocalStorage() {
        if(localStorage.hasOwnProperty(this.localStorageKey())) {
            const value = localStorage.getItem(this.localStorageKey())
            this.setState(JSON.parse(value))
        }

    }

    localStorageKey() {
        if(!this.props.id) {
            return 'generic#persistent-component'
        }
        return 'persistent-component#' + this.props.id
    }

}

export default PersistentComponent;
