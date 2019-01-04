import React, { Component } from 'react'

class LocalStorageContent extends Component {
    render() {
        return <ul>
            {storageEntries().map(e => <li><strong>{e.key}:</strong><br />{e.value}</li>)}
        </ul>
    }
}

const storageEntries = () => {
    const entries = []
    for (let i = 0; i < localStorage.length; ++i) {
        const key = localStorage.key(i)
        const value = localStorage.getItem(key)
        entries.push({ key: key, value: value })
    }
    return entries
}

export default LocalStorageContent;