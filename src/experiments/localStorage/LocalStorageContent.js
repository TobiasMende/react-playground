import React, { Component} from 'react'

class LocalStorageContent extends Component {

    render() {
        let entries = []
        for(let i = 0; i < localStorage.length; ++i) {
            const key = localStorage.key(i)
            const value = localStorage.getItem(key)
            entries.push(<li><strong>{key}:</strong><br />{value}</li>)
        }
        return <ul>
            {entries}
        </ul>

    }
}

export default LocalStorageContent;