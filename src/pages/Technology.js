import React from 'react'
import News from '../components/News'

function Technology(props) {
    return (
        <div>
            <News category={props.category}
            pagesize = {props.pagesize}
            set = {props.seProgress}
            />
        </div>
    )
}

export default Technology
