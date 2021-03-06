import React from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux"
import { SearchOutlined } from '@ant-design/icons'

const Search = () => {
    const history  = useHistory()
    const dispatch = useDispatch()
    const { search } = useSelector((state) => ({ ...state }))
    const { text } = search

    const handleChange = (e) => {
        dispatch({
            type: 'SEARCH_QUERY',
            payload: { text: e.target.value }
        })
    }
    //
    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     history.push(`/shop?${text}`)
    // }
    //onSubmit={handleSubmit}
    return (
        <form className="form-inline my-2 my-lg-0">
            <input
                type="search"
                value={ text }
                className="form-control mr-sm-2"
                placeholder="Search..."
                onChange={handleChange}
            />
            <SearchOutlined
                //onClick={handleSubmit}
                style={{cursor: 'pointer'}}
            />
        </form>
    )
}

export default Search